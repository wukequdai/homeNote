
/*结构化查询语句SQL 综合示例*/

#指定后续的SQL语句所采用的字符编码 utf8
#功能:
#修改mysql客户端程序编码
#修改mysql客户端程序服务器连接编码
#修改mysql服务器返回数据编码
SET NAMES UTF8;
#15:43---15:55
#1 试着删除一个数据库 jd(如果存在删除)
  DROP DATABASE IF EXISTS jd;
#2 创建库数据库jd 并且指定编码utf8
  CREATE DATABASE jd CHARACTER SET utf8;
#3 进入刚刚创建数据库
  USE jd;
#4 创建一个表,保存员工信息
#5 eid name sex salary birthday
  #在列中添加属性 PRIMARY KEY 主键
  #强制要求该不能为空不能重复
  #AUTO_INCREMENT  自增长
  CREATE TABLE emp(
   eid INT PRIMARY KEY AUTO_INCREMENT,
   name VARCHAR(4),
   sex  VARCHAR(1),
   salary DOUBLE(10,2),
   birthday DATE
  ); 
#6 向员工表添加记录 5行记录
#7 删除一行记录
  DELETE FROM emp  WHERE eid=3;
#8 修改一行记录
  UPDATE emp SET salary = salary * 0.9 WHERE eid=1;
#9 查询所有记录行
  SELECT * FROM emp;
#sublime Text2 和 记录本 功能一样
#练习函数 16:30---16:32
#10 查询工资中最大值-使用MAX() 函数
  SELECT MAX(salary) FROM emp;
#11 查询工资中最小值-使用MIN() 函数
  SELECT MIN(salary) FROM emp;
#12 查询工资中平均值-使用AVG() 函数
  SELECT AVG(salary) FROM emp;
#13 查询工资值的个值-使用COUNT()函数
  SELECT COUNT(salary) FROM emp;
#14 查询工资值的总和-使用SUM() 函数
  SELECT SUM(salary) FROM emp;


