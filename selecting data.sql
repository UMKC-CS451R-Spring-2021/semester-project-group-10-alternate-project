-- prof id, name, availability [needs to be added], how many courses they can teach,
-- teachable courses, preferred courses, current schedule, is draft, notes

-- get teacher information
SELECT teachers.TeacherId, teachers.firstName, 
	teachers.lastName, tenure.MaxClasses, teachers.Notes 
from teachers inner join tenure on teachers.tenured = tenure.tenured
order by teachers.lastName;

-- select a given teacher's unavailable times
SET @teacher_id := 351;
SELECT availability.day, availability.startTime, availability.endTime
from availability
where availability.teacherId = @teacher_id
ORDER BY availability.day;

-- selects all relevant data for front end's forms
SELECT teachers.TeacherId, teachers.firstName, teachers.lastName, tenure.maxClasses, semesterTeacher.semesterId,
courses.courseName, teacherTeachableCourses.preferred, semesterTeacher.sectionId, semesterTeacher.finalized, 
teachers.notes 
from teachers 
inner join tenure on teachers.tenured = tenure.tenured
inner join teacherTeachableCourses on teachers.teacherId = teacherTeachableCourses.teacherId
inner join courses on teacherTeachableCourses.courseId = courses.courseId
inner join semesterteacher on semesterTeacher.teacherId = teachers.teacherId;

-- rename semesterTeacher to semesterAssignment? or semesterSchedule? teacherAssignmentBySemester?
-- logic is going to be needed to make sure course schedule for semester is finalized
-- select the semester schedule from a given semester id
SET @semester_id := "FAL2021";
select semesterTeacher.semesterId, courses.courseName, teachers.firstName, teachers.lastName, 
semesterTeacher.sectionId, semesterTeacher.finalized 
from semesterTeacher 
inner join teachers on semesterTeacher.teacherId = teachers.teacherId
inner join courses on semesterTeacher.courseId = courses.courseId
where semesterId = @semester_id
order by courses.courseName, semesterTeacher.sectionId;


-- select the finalized semester schedule from a given semester id
SET @semester_id := "SMR2021";
select semesterTeacher.semesterId as semester, 
	courses.courseName, teachers.firstName, teachers.lastName, 
	semesterTeacher.sectionId as section
from semesterTeacher 
inner join teachers on semesterTeacher.teacherId = teachers.teacherId
inner join courses on semesterTeacher.courseId = courses.courseId
where semesterId = @semester_id and semesterTeacher.finalized = 1
order by courses.courseName, semesterTeacher.sectionId;

-- get offered courses for a given semester
SET @semester_id := "SPR2021";
select semesterCourses.semesterId, courses.courseName, semesterCourses.SectionCount, 
semesterCourses.finalized
from semestercourses
inner join courses on semestercourses.courseId = courses.courseId
where semesterId = @semester_id
order by courses.courseName;

-- get finalized offered course schedule for a given semester
SET @semester_id := "SPR2021";
select semesterCourses.semesterId, courses.courseName, semesterCourses.SectionCount, 
semesterCourses.finalized
from semestercourses
inner join courses on semestercourses.courseId = courses.courseId
where semesterId = @semester_id and semesterCourses.finalized = 1
order by courses.courseName;

-- get a given teacher's schedules
SET @teacher_id := 24;
select semesterTeacher.semesterId, courses.courseName, courses.courseId, 
	semesterTeacher.sectionId, semesterTeacher.finalized, teacherTeachableCourses.preferred
from semesterTeacher join teachers on semesterTeacher.teacherId = teachers.teacherId
inner join courses on semesterTeacher.courseId = courses.courseId
inner join teacherTeachableCourses on teacherteachablecourses.teacherId = teachers.teacherId 
	and teacherteachablecourses.courseId = semesterteacher.courseId
where teachers.teacherId = @teacher_id
order by semesterTeacher.semesterId, courses.courseName, 
	semesterTeacher.sectionId, teacherteachablecourses.preferred;

-- get a given teacher's finalized schedules
SET @teacher_id := 0;
select semesterTeacher.teacherId, semesterTeacher.semesterId, semesterTeacher.courseId, courses.
	courseName, semesterTeacher.sectionId, semesterTeacher.finalized, teacherTeachableCourses.preferred
from semesterTeacher
inner join teacherTeachableCourses on semesterTeacher.courseId = teacherTeachableCourses.courseId 
	and semesterTeacher.teacherId = teacherTeachablecourses.teacherId
inner join courses on semesterTeacher.courseId = courses.courseId
where semesterTeacher.teacherId = @teacher_id and semesterTeacher.finalized = 1
order by semesterTeacher.semesterId, courses.courseName, 
	semesterTeacher.sectionId, teacherteachablecourses.preferred;