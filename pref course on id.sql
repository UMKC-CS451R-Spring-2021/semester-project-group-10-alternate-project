CREATE DEFINER=`capstone`@`%` PROCEDURE `idPreferedCourses`(id int)
BEGIN
select * from teachers
inner join teacherteachablecourses
on teachers.teacherId = teacherteachablecourses.teacherId
where teachers.teacherId = id
and preferred = 1;
END