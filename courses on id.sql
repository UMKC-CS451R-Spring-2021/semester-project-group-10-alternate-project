CREATE DEFINER=`capstone`@`%` PROCEDURE `idCourses`(id int)
BEGIN
select * from teachers
inner join teacherteachablecourses
on teachers.teacherId = teacherteachablecourses.teacherId
where teachers.teacherId = id
and preferred = 0;
END