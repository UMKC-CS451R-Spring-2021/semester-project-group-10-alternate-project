CREATE PROCEDURE `new_course` (id int, title varchar(50))
BEGIN
	INSERT INTO courses
	VALUES (id, title);
END
