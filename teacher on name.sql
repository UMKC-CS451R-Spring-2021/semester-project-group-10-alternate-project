CREATE DEFINER=`capstone`@`%` PROCEDURE `selectTeacherName`(lastN varchar(50))
BEGIN
select * from teachers
where lastName = lastN;
END