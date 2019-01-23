#16:55--17:10   
#1:设置后继编码utf8
SET NAMES UTF8;
#2:删除库 tarena 如果该存在
DROP DATABASE IF EXISTS tarena;
#3:创建库 tarena
CREATE DATABASE tarena CHARACTER SET utf8;
#4:进入库 tarena
USE tarena;
#5:创建班级表
  cid    name   header_teacher 管理老师
  CREATE TABLE t_class(
     cid INT PRIMARY KEY AUTO_INCREMENT,
     name VARCHAR(25),
     header_teacher VARCHAR(25)
  );
6:添加三条记录
INSERT INTO t_class VALUES(1,'TOM','lion');
INSERT INTO t_class VALUES(2,'JERRY','lion');
INSERT INTO t_class VALUES(3,'kaka','lion');

7:查询所有记录
  SELECT * FROM t_class;
8:创建学生表
  sid 学生编码   INT      
  name           VARCHAR(25)
  sex            VARCHAR(1)
  score 分数     DOUBLE(3,1)
  phone 电话     13999999999  VARCHAR(15)
  birthday 出生日期 DATE
  photo    头像     VARCHAR(50)
  class_id  班级编码INT

  CREATE TABLE t_student(
   sid INT PRIMARY KEY AUTO_INCREMENT,
   name VARCHAR(25),
   sex  VARCHAR(1),
   score DOUBLE(3,1),
   phone VARCHAR(15),
   birthday DATE,
   photo   VARCHAR(50),
   class_id INT
  );
9:添加10条记录
INSERT INTO t_student VALUES(null,'tom','M',75,
'13999999999','1995-10-10','img/1.jpg',101);
INSERT INTO t_student VALUES(null,'tom1','M',75,
'13999999999','1995-10-10','img/1.jpg',101);
INSERT INTO t_student VALUES(null,'tom2','M',75,
'13999999999','1995-10-10','img/1.jpg',101);
INSERT INTO t_student VALUES(null,'tom3','M',75,
'13999999999','1995-10-10','img/1.jpg',101);
INSERT INTO t_student VALUES(null,'tom4','M',75,
'13999999999','1995-10-10','img/1.jpg',101);
INSERT INTO t_student VALUES(null,'tom5','M',75,
'13999999999','1995-10-10','img/1.jpg',101);
INSERT INTO t_student VALUES(null,'tom6','M',75,
'13999999999','1995-10-10','img/1.jpg',101);
INSERT INTO t_student VALUES(null,'tom7','M',75,
'13999999999','1995-10-10','img/1.jpg',101);
INSERT INTO t_student VALUES(null,'tom8','M',75,
'13999999999','1995-10-10','img/1.jpg',101);
INSERT INTO t_student VALUES(null,'tom9','M',75,
'13999999999','1995-10-10','img/1.jpg',101);
INSERT INTO t_student VALUES(null,'tom10','M',75,
'13999999999','1995-10-10','img/1.jpg',101);


17:35---17:40
10:查询所有记录
SELECT * FROM t_student;
11:查询sid值等于9-所有数据
SELECT * FROM t_student
WHERE sid = 9;
12:查询t_student 表中有多少条记录
SELECT count(sid)
FROM t_student;
13:查询班级编号等于101所有记录
SELECT * FROM t_student
WHERE class_id = 101;
14:查询sid值等于3或者等于5所有记录
SELECT * FROM t_student
WHERE sid = 3 OR sid = 5;
15:查询用户姓名以tom开头
SELECT * FROM t_student
WHERE name LIKE 'tom9%';
%通配符:0个到多个字符
16:查询用户1995后出生并且性别等于M
SELECT * FROM t_student
WHERE birthday > '1995-1-1' 
AND sex = 'M';