#14:35---14:45 
#1:设置编码utf8
set names utf8;
#2:创建库 sohu
DROP DATABASE IF EXISTS sohu;
CREATE DATABASE sohu  CHARACTER SET utf8;
use sohu;
#3:创建表 t_news(nid,title,content,
#  pubTime,viewCount)
CREATE TABLE t_news(
  nid int primary key auto_increment,
  title varchar(25) not null default '',
  content varchar(4096) not null default '',
  pubTime datetime not null default 0,
  viewcount int not null default 0
);
INSERT INTO t_news VALUES(null,'hi1','hi1',
now(),0);
INSERT INTO t_news VALUES(null,'hi2','hi1',
now(),0);
INSERT INTO t_news VALUES(null,'hi3','hi1',
now(),0);
INSERT INTO t_news VALUES(null,'hi4','hi1',
now(),0);
INSERT INTO t_news VALUES(null,'hi5','hi1',
now(),0);
#4:添加5条测试数据
#5:创建表 t_user(id,name,pwd)
CREATE TABLE t_user(
  id int primary key auto_increment,
  name varchar(25) not null default '',
  pwd varchar(32) not null default ''
);
#6:添加3条测试数据
INSERT INTO t_user VALUES(null,'tom1','123');
INSERT INTO t_user VALUES(null,'tom2','123');
INSERT INTO t_user VALUES(null,'tom3','123');



