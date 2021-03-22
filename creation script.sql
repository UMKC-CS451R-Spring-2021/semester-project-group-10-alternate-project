drop table if exists SemesterTeacher;
drop table if exists Teacher_Course_Preference;
drop table if exists SemesterCourses;
drop table if exists Courses;
drop table if exists Tenure;
drop table if exists availability;
drop table if exists Teachers;

create table Teachers (
	teacherId int UNIQUE,
	teacherName varchar(50),
	tenured boolean,
    Notes mediumtext
);

create table availability (
	teacherId int,
    foreign key (teacherId) references Teachers(teacherId),
    startTime time,
    endTime time
);

create table Tenure (
	tenured boolean,
	maxClasses int
);

create table Courses (
	courseId int UNIQUE,
	courseName varchar(50)
);

create table SemesterCourses (
	courseId int,
	semesterId varchar(10) UNIQUE,
	sectionCount int,
	finalized boolean,
	FOREIGN KEY (courseId) REFERENCES Courses(courseId)
);


create table Teacher_Course_Preference (
	teacherId int,
	courseId int,
	preferred boolean,
	foreign key (teacherId) references Teachers(teacherId),
	foreign key (courseId) references Courses(courseId)
);

create table semesterTeacher (
    teacherId int,
    courseId int,
    semesterId varchar(10),
    teaching boolean,
    finalized boolean,
  	foreign key (teacherId) references Teachers(teacherId),
	foreign key (courseId) references Courses(courseId),
    foreign key (semesterId) references SemesterCourses(semesterId)
);

