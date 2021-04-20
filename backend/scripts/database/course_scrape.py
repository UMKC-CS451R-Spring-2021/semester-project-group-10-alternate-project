#!/usr/bin/python3
from bs4 import BeautifulSoup
import requests
import string
from urllib.parse import urljoin
import json

base_url = "https://catalog.umkc.edu/course-offerings/undergraduate/"

response = requests.get(base_url)
base_html = BeautifulSoup(response.text, features="html.parser")

majors = {}
def get_text(element):
    return element.get_text().encode("ascii", errors="ignore").decode()

def get_all_major_courses(html):
    course_divs = html.find_all("div", {"class": "courseblock"})
    courses = []
    
    for course_div in course_divs:
        courseId = get_text(course_div.find('span',{"class": "code"}))
        courseName = get_text(course_div.find('span',{"class": "title"}))
        courses.append((courseId, courseName))
    return courses

for letter in string.ascii_uppercase:
    group_tag = base_html.find(id=letter)
    if not group_tag:
        continue
    links = group_tag.find_next_sibling().find_all("a")
    for major_link in links:
        major_name = get_text(major_link)
        majors[major_name] = major_link['href']

major_course_mappings = {}

for major_name, major_course_links in majors.items():

    course_url = urljoin(base_url, major_course_links)
    print("Processing...{}".format(major_name))
    
    response = requests.get(course_url)
    html = BeautifulSoup(response.text, features="html.parser")

    major_courses = get_all_major_courses(html) 
    major_course_mappings[major_name] = major_courses


with open('courses.json', 'w') as fp:
    json.dump(major_course_mappings, fp)
