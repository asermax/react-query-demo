PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
INSERT INTO User VALUES(1,'/images/avatar.png','asermax','asermax@gmail.com','I like trains and beer');
INSERT INTO Book VALUES(1,'Eloquent Javascript','/images/best-book-javascript-eloquent-javascript.webp',50,1);
INSERT INTO Book VALUES(2,'Effective Javascript','/images/effective-javascript-book.webp',80,1);
INSERT INTO Book VALUES(3,'Speaking Javascript','/images/speaking-javascript-book.webp',35,1);
INSERT INTO Book VALUES(4,'Javascript: the Good Parts','/images/javascript-the-good-parts.jpg',20,1);
INSERT INTO Book VALUES(5,'Javascript: The Definitive Guide','/images/javascript-definitive-guide.jpg',10,1);
INSERT INTO Book VALUES(6,'You Don'' Know Javacript: Scopes and Clousures','/images/you-dont-know-javascript-scopes-clousure.jpg',10,1);
INSERT INTO Book VALUES(7,'Javascript Patterns','/images/javascript-patterns.jpg',55,1);
INSERT INTO Book VALUES(8,'Programming Typescript','/images/programming-typescript.jpg',35,1);
INSERT INTO Book VALUES(9,'Programming Javascript Applications','/images/programming-javascript-applications.jpg',95,1);
DELETE FROM sqlite_sequence;
INSERT INTO sqlite_sequence VALUES('User',1);
INSERT INTO sqlite_sequence VALUES('Book',9);
COMMIT;
