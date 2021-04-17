CREATE DEFINER=`capstone`@`%` PROCEDURE `selectAllTeachers`()
BEGIN
select * from teachers;
END