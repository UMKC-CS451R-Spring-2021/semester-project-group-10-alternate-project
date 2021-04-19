#!/usr/bin/python3
import random
import json
import math
from datetime import timedelta
import calendar
import string
import requests
import csv
from os import path, getcwd
TRUE = 1
FALSE = 0
def get_choice(options):
    choices = []
    for (choice, repeat) in options:
        choices.extend([choice] * repeat)
    return random.choice(choices)

# lorem ipsum texts
response = requests.get("https://loripsum.net/api/500/short/plaintext")
sample_notes = list(map(lambda line: line.encode("ascii", errors="ignore").decode()
, response.text.split("\n\n")))

days_of_the_week = list(map(lambda day: day.upper(), list(calendar.day_name)))
# tenure[x][0] => Tenure(tenured)
# tenure[x][1] => Tenure(maxClasses)
tenure = [
    (TRUE, random.randrange(4,7)),
    (FALSE, random.randrange(2, 6))
]

average_max_classes = math.ceil((tenure[0][1] + tenure[1][1])/2)
majors = None
with open('courses.json') as fp:
    # course table
    majors = json.load(fp)
    
def get_major_courses(major_name):
    return majors[major_name]

def hms_to_s(hours, minutes, seconds):
    return hours * (60)** 2 + minutes * 60 + seconds

def pick_time_range(hours = 1, minutes = 0, seconds = 0):
    assert 0 < hours < 24, "Hours must be between 0 and 24"
    assert 0 <= minutes < 60, "Minutes must be at least 0 or at most 59"
    assert 0 <= seconds < 60, "Seconds must be at least 0 or at most 59"
    maxTime = hms_to_s(23,59,59)
    duration = hms_to_s(hours, minutes, seconds)
    maxTime -= duration
    minTime = hms_to_s(4,30,0)
    startTime = random.randrange(minTime, maxTime + 1)
    return (str(timedelta(seconds=startTime)), str(timedelta(seconds=(startTime + duration))))

def create_availibility(days, dur):
    # teacherId is just index of the teacher
    available = []
    time_ranges = [pick_time_range(dur[0], dur[1], dur[2])]
    for day in days:
        use_existing_tr = get_choice([
            (TRUE, 8),
            (FALSE, 2)
        ])
        time_range = None
        if not use_existing_tr:
            time_range = pick_time_range(dur[0], dur[1], dur[2])
            time_ranges.append(time_range)
        else:
            time_range = random.choice(time_ranges)
        # available[0] => availability(day) 
        # available[1][0] => availability(startTime)
        # available[1][1] => availability(endTime)
        available.append((day, time_range))
    return available

def create_sensable_availablity(days, target_hours):
    days_available = len(days)
    target_hours = target_hours/days_available
    hours = int(target_hours)
    target_minutes = (target_hours - hours) * 60
    minutes = int(target_minutes)
    target_seconds = (target_minutes - minutes) * 60
    seconds = int(target_seconds)
    return create_availibility(days, (hours, minutes, seconds))

def get_names():
    names = {}
    links = {
        'first': 'https://raw.githubusercontent.com/smashew/NameDatabases/master/NamesDatabases/first%20names/us.txt',
        'last': "https://raw.githubusercontent.com/smashew/NameDatabases/master/NamesDatabases/surnames/us.txt"
    }
    for name_type in links.keys():
        link = links[name_type]
        print(link)
        text = ""
        if path.exists('{}.txt'.format(name_type)):
            with open('{}.txt'.format(name_type)) as file:
                text = file.read()
        else:
            response = requests.get(link)
            response.encoding = 'utf-8'
            text = response.text

        names[name_type] = text.split("\n")
    return (names['first'], names['last'])

(firstNames, lastNames) = get_names()


def add_availability_to_teacher(teacher):
    # nonsense when applied to realistic situations
    # but good for sample data 
    days = random.sample(days_of_the_week, random.randrange(4,6))
    avail = create_sensable_availablity(days, random.randrange(40, 61))
    teacher["availability"] = avail
    
def create_teacher():
    # teacher id is the index in the teachers list
    teacher = {}
    # Teachers(teacherName)
    teacher["firstName"] = random.choice(firstNames)
    teacher["middleName"] = random.choice(string.ascii_uppercase)
    teacher["lastName"] = random.choice(lastNames)

    # Teachers(tenured)
    teacher["tenured"] = get_choice([
        (TRUE, 1),
        (FALSE, 3)
    ])

    # Teachers(Notes)
    teacher["Notes"] = random.choice(sample_notes) # Get lore ipsum from website

    # Teachers(finalized)
    teacher["finalized"] = get_choice([
        (TRUE, 1),
        (FALSE, 1)
    ])


    # used for assigning teachable classes
    tenure_index = 0 if teacher["tenured"] else 1
    teacher["maxClasses"] = tenure[tenure_index][1]
    teacher["teachable_courses"] = []
    return teacher

all_teachers = []

# course = (courseId, courseName, section_count, finalized)
all_courses = []

def generate_section_count(sectionId):
##    if sectionId.startswith("SMR"):
##        return get_choice([
##            (2, 4),
##            (1, 1)
##        ])
    return get_choice([
        (2, 3),
        (3, 2),
        (1, 1),
        (4, 1)
    ])

for major_name, major_courses in majors.items():
    sum_of_sections = 0
    # course[0] => Courses(courseId)
    # course[1] => Courses(courseName)
    for course in major_courses:
        # course[2] => SemesterCourses(sectionCount)
        section_count =generate_section_count("SPR2020")
        sum_of_sections += section_count
        course.append(section_count)
        all_courses.append(course)

    major_teachers = []
    teacher_count = math.ceil(sum_of_sections/average_max_classes)
    for i in range(teacher_count):
        teacher = create_teacher()
        add_availability_to_teacher(teacher)
        major_teachers.append(teacher)

    # Only one teacher can teach a single section in a course
    # for simplicity
    copy_courses = list(major_courses)
    random.shuffle(copy_courses)
    for course in copy_courses:
        target_amount = min(course[2], len(major_teachers))
        teachers_teaching = random.sample(major_teachers, target_amount)
        section_id = 1
        for teacher in teachers_teaching:
            preferred = get_choice([
                (TRUE, 2),
                (FALSE, 1)
            ])
            # t["teachable_courses"][x][0] => TeacherCoursePreference (courseId)
            # t["teachable_courses"][x][1] => TeacherCoursePreference (preferred)
            # t["teachable_courses"][x][2] => SemesterTeacher(sectionId)
            teacher["teachable_courses"].append((course[0], preferred, section_id))
            teacher["maxClasses"] -= 1
            if teacher["maxClasses"] == 0:
                major_teachers.remove(teacher)
                all_teachers.append(teacher)
            section_id += 1
    # add the teachers that didn't reach maxClasses
    all_teachers.extend(major_teachers)

tables = {
    "Teachers": [
        ["teacherId", "firstName", "middleName", "lastName", "tenured", "Notes", "finalized"]
    ],
    "availability": [
        ["teacherId", "day", "startTime", "endTime"]
    ],
    "Tenure": [
        ["tenured", "maxClasses"]
    ],
    "Courses": [
        ["courseId", "courseName"]
    ],
    "Semesters": [
        ["semesterId"]
    ],
    "SemesterCourses": [
        ["courseId", "semesterId", "sectionCount", "finalized"]
    ],
    "TeacherTeachableCourses": [
        ["teacherId", "courseId", "preferred"]
    ],
    "semesterTeacher": [
        ["teacherId", "courseId", "semesterId" ,"sectionId" ,"finalized"]
    ]
}
for teacher_index in range(len(all_teachers)):
    teacher = all_teachers[teacher_index]

    teacher_data = [
        teacher_index,
        teacher["firstName"],
        teacher["middleName"],
        teacher["lastName"],
        teacher["tenured"],
        teacher["Notes"],
        teacher["finalized"] 
    ]
    tables["Teachers"].append(teacher_data)
    # available[0] => availability(day) 
    # available[1][0] => availability(startTime)
    # available[1][1] => availability(endTime)
    for availability in teacher["availability"]:
        avail_entry = [
            teacher_index,
            availability[0],
            availability[1][0],
            availability[1][1]
        ]
        tables["availability"].append(avail_entry)
    # t["teachable_courses"][x][0] => TeacherCoursePreference (courseId)
    # t["teachable_courses"][x][1] => TeacherCoursePreference (preferred)
    for (courseId, preferred, _) in teacher["teachable_courses"]:
        tch_crs = [
            teacher_index,
            courseId,
            preferred
        ]
        tables["TeacherTeachableCourses"].append(tch_crs)

tables["Tenure"] += tenure

for course in all_courses:
    # course = (courseId, courseName, section_count, finalized)
    course_data = [
        course[0],
        course[1]
    ]
    tables["Courses"].append(course_data)

semester_ids = [
    "SPR2021",
    "SMR2021",
    "FAL2021"
]
tables["Semesters"].extend(map(lambda a: [a], semester_ids))

for semester_id in semester_ids:
    # generate SemesterCourse
    # course = (courseId, courseName, section_count, finalized)
    # all_courses
    for (courseId, courseName, section_count) in all_courses:
        finalized = get_choice([
            (TRUE, 3),
            (FALSE, 7)
        ])
        course_data = [
            courseId,
            semester_id,
            section_count,
            finalized
        ]
        tables["SemesterCourses"].append(course_data)

    # generate SemesterTeacher
    # teacher["teachable_courses"]
    for teacher_index in range(len(all_teachers)):
        teacher = all_teachers[teacher_index]
        for (courseId, preferred, section_id) in teacher["teachable_courses"]:
            semester_teacher = [
                teacher_index,
                courseId,
                semester_id,
                section_id,
                get_choice([
                    (TRUE, 3),
                    (FALSE, 7)
                ])
            ]
            tables["semesterTeacher"].append(semester_teacher)
import os
try:
    os.mkdir('tables')
except:
    pass

for table_name in tables:
    with open('tables/{}.csv'.format(table_name), 'w', newline='') as csvFile:
        writer = csv.writer(csvFile, delimiter=',',
                            lineterminator='\n',
                            quotechar='"', quoting=csv.QUOTE_MINIMAL)
        for row in tables[table_name]:
            writer.writerow(row)

sql_load_data_template = '''
LOAD DATA INFILE "{}" 
INTO TABLE {} 
FIELDS TERMINATED BY ',' 
OPTIONALLY ENCLOSED BY '"' 
LINES TERMINATED BY '\\n' 
IGNORE 1 ROWS 
({});'''
with open('load_tables.sql', 'w') as uploadToDbScript:
    for table_name in tables:
        headers = ','.join(tables[table_name][0])
        path_to_csv = path.join(os.getcwd(), 'tables', table_name + '.csv')
        data = sql_load_data_template.format(path_to_csv, table_name, headers)
        uploadToDbScript.write(data + '\n')