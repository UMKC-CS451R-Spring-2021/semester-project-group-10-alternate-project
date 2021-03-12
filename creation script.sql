drop table if exists TeacherNotes;
drop table if exists SemesterTeacher;
drop table if exists Teacher_Course_Preference;
drop table if exists SemesterCourses;
drop table if exists Courses;
drop table if exists Tenure;
drop table if exists Teachers;

create table Teachers (
	TeacherId int UNIQUE,
	TeacherName varchar(50),
	Tenured boolean
);

create table Tenure (
	Tenured boolean,
	MaxClasses int
);

create table Courses (
	CourseId int UNIQUE,
	CourseName varchar(50)
);

create table SemesterCourses (
	CourseId int,
	SemesterId varchar(10) UNIQUE,
	SectionCount int,
	Finalized boolean,
	FOREIGN KEY (CourseId) REFERENCES Courses(CourseId)
);


create table Teacher_Course_Preference (
	TeacherId int,
	CourseId int,
	Preferred boolean,
	foreign key (TeacherId) references Teachers(TeacherId),
	foreign key (CourseId) references Courses(CourseId)
);

create table SemesterTeacher (
    TeacherId int,
    CourseId int,
    SemesterId varchar(10),
    Teaching boolean,
    Finalized boolean,
  	foreign key (TeacherId) references Teachers(TeacherId),
	foreign key (CourseId) references Courses(CourseId),
    foreign key (SemesterId) references SemesterCourses(SemesterId)
);

create table TeacherNotes (
    TeacherId int,
    TeacherNote Text,
    foreign key (TeacherId) references Teachers(TeacherId)
);