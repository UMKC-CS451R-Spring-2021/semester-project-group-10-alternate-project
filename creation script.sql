use capstone;
SET FOREIGN_KEY_CHECKS=0;
drop table if exists TeacherCoursePreference;
drop table if exists SemesterCourses;
drop table if exists TeacherTeachableCourses;
drop table if exists Tenure;
drop table if exists availability;
drop table if exists Teachers;
DROP TABLE IF EXISTS SemesterId;
drop table if exists Courses;
drop table if exists semesterTeacher;
SET FOREIGN_KEY_CHECKS=1;

create table Teachers (
	id int UNIQUE AUTO_INCREMENT,
    key(id),
    teacherId int UNIQUE,
    primary key(teacherId),
	firstName varchar(50) NOT NULL,
    middleName varchar(50),
    lastName varchar(50) NOT NULL,
	tenured boolean NOT NULL,
    Notes mediumtext,
    finalized boolean NOT NULL,
    createdAt datetime,
    updatedAt datetime
);


create table availability (
	id int UNIQUE AUTO_INCREMENT,
    primary key(id),
	teacherId int NOT NULL,
    foreign key (teacherId) references Teachers(teacherId),
    day ENUM('SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'),
    startTime time NOT NULL,
    endTime time NOT NULL,
	createdAt datetime,
    updatedAt datetime
);

create table Tenure (
	tenured boolean,
	maxClasses int
);

create table Courses (
	id int UNIQUE AUTO_INCREMENT,
    primary key(id),
	courseId varchar(15) UNIQUE,
    key(courseId),
	courseName varchar(80) NOT NULL,
    createdAt datetime,
    updatedAt datetime
);

CREATE TABLE Semesters (
	id int UNIQUE AUTO_INCREMENT,
    key(id),
    createdAt datetime,
    updatedAt datetime,
	semesterId varchar(10) UNIQUE,
    primary key(semesterId)
);

create table SemesterCourses (
	id int UNIQUE AUTO_INCREMENT,
    key(id),
	courseId varchar(15),
	semesterId varchar(10),
	sectionCount int,
	finalized boolean,
	createdAt datetime,
    updatedAt datetime,
	FOREIGN KEY (courseId) REFERENCES Courses(courseId),
	FOREIGN KEY (semesterId) REFERENCES SemesterId(semesterId),
    PRIMARY KEY (courseId, semesterId)
);


create table TeacherTeachableCourses (
	id int UNIQUE AUTO_INCREMENT,
    primary key (id),
	teacherId int,
	courseId varchar(15),
	preferred boolean,
	createdAt datetime,
    updatedAt datetime,
	foreign key (teacherId) references Teachers(teacherId),
	foreign key (courseId) references Courses(courseId)
);

create table semesterTeacher (
	id int UNIQUE AUTO_INCREMENT,
    key (id),
    teacherId int NOT NULL,
    courseId varchar(15) NOT NULL,
    semesterId varchar(10) NOT NULL,
    sectionId int,
    finalized boolean,
    createdAt datetime,
    updatedAt datetime,
  	foreign key (teacherId) references Teachers(teacherId),
	foreign key (courseId) references Courses(courseId),
	FOREIGN KEY (semesterId) REFERENCES SemesterId(semesterId),
    PRIMARY KEY (teacherId, courseId, semesterId)
);

