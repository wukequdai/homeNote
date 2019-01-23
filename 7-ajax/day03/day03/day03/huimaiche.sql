set names utf8;
DROP DATABASE IF EXISTS humaiche;
CREATE DATABASE humaiche  CHARACTER SET utf8;
use humaiche;

CREATE TABLE t_car(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  cname VARCHAR(50)   NOT NULL DEFAULT '',
  pic   VARCHAR(100)  NOT NULL DEFAULT '',
  price DOUBLE(10,2)  NOT NULL DEFAULT 0,
  birthday BIGINT  NOT NULL DEFAULT 0,
  isonsale BOOLEAN NOT NULL DEFAULT false
);

INSERT INTO t_car VALUES(null,'全新捷达','img/1.jpg',80000,1234567890123,'1');
INSERT INTO t_car VALUES(null,'景S3','img/2.jpg',60000,1234567890123,'1');
INSERT INTO t_car VALUES(null,'New Polo','img/3.jpg',90000,1234567890123,'1');
INSERT INTO t_car VALUES(null,'本田思域','img/4.jpg',85000,1534567890123,'1');


CREATE TABLE t_login(
  id INT PRIMARY KEY AUTO_INCREMENT,	
  name varchar(25) NOT NULL DEFAULT '',
  pwd  varchar(32) NOT NULL DEFAULT ''
);

INSERT INTO t_login VALUES(null,'tom','123');
INSERT INTO t_login VALUES(null,'jerry','123');
INSERT INTO t_login VALUES(null,'kaka','123');


