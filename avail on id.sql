CREATE DEFINER=`capstone`@`%` PROCEDURE `idAvailability`(id int)
BEGIN
select * from teachers
inner join availability
on teachers.teacherId = availability.teacherId
where teachers.teacherId = id;
END