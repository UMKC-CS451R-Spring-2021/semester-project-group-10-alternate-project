CREATE DEFINER=`capstone`@`%` PROCEDURE `selectTeacherId`(id int)
BEGIN
select * from teachers
where teachers.teacherId = id;
END