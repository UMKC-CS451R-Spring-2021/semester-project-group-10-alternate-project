drop table if exists SemesterTeacher;
drop table if exists TeacherCoursePreference;
drop table if exists SemesterCourses;
drop table if exists Courses;
drop table if exists Tenure;
drop table if exists availability;
drop table if exists Teachers;

create table Teachers (
	teacherId int UNIQUE,
    primary key(teacherId),
	teacherName varchar(50),
	tenured boolean,
    Notes mediumtext,
    finalized boolean
);

create table availability (
	teacherId int,
    foreign key (teacherId) references Teachers(teacherId),
    day ENUM('SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'),
    startTime time,
    endTime time
);

create table Tenure (
	tenured boolean,
	maxClasses int
);

create table Courses (
	courseId varchar(10) UNIQUE,
	courseName varchar(50)
);

create table SemesterCourses (
	courseId varchar(10),
	semesterId varchar(10) UNIQUE,
	sectionCount int,
	finalized boolean,
	FOREIGN KEY (courseId) REFERENCES Courses(courseId),
    PRIMARY KEY (courseId, semesterId)
);


create table TeacherCoursePreference (
	teacherId int,
	courseId varchar(10),
	preferred boolean,
	foreign key (teacherId) references Teachers(teacherId),
	foreign key (courseId) references Courses(courseId)
);

create table semesterTeacher (
    teacherId int,
    courseId varchar(10),
    semesterId varchar(10),
    sectionId int,
    finalized boolean,
  	foreign key (teacherId) references Teachers(teacherId),
	foreign key (courseId) references Courses(courseId),
    foreign key (semesterId) references SemesterCourses(semesterId),
    PRIMARY KEY (courseId, semesterId, sectionId)
);

