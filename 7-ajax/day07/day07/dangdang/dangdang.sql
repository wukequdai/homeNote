set names utf8;
DROP DATABASE IF EXISTS dangdang;
CREATE DATABASE dangdang  CHARACTER SET utf8;
use dangdang;

CREATE TABLE t_book(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50)   NOT NULL DEFAULT '',
  price DOUBLE(10,2)  NOT NULL DEFAULT 0,
  putdate DATETIME  NOT NULL DEFAULT 0
);
INSERT INTO t_book VALUES(null,'js大全1',100,now());
INSERT INTO t_book VALUES(null,'js大全2',100,now());
INSERT INTO t_book VALUES(null,'js大全3',100,now());
INSERT INTO t_book VALUES(null,'js大全4',100,now());
INSERT INTO t_book VALUES(null,'js大全5',100,now());
INSERT INTO t_book VALUES(null,'js大全6',100,now());
INSERT INTO t_book VALUES(null,'js大全7',100,now());
INSERT INTO t_book VALUES(null,'js大全8',100,now());
INSERT INTO t_book VALUES(null,'js大全9',100,now());
INSERT INTO t_book VALUES(null,'js大全',100,now());
INSERT INTO t_book VALUES(null,'java大全1',100,now());
INSERT INTO t_book VALUES(null,'java大全2',100,now());
INSERT INTO t_book VALUES(null,'java大全3',100,now());
INSERT INTO t_book VALUES(null,'java大全4',100,now());
INSERT INTO t_book VALUES(null,'java大全5',100,now());
INSERT INTO t_book VALUES(null,'java大全6',100,now());
INSERT INTO t_book VALUES(null,'java大全7',100,now());
INSERT INTO t_book VALUES(null,'java大全8',100,now());
INSERT INTO t_book VALUES(null,'java大全9',100,now());
INSERT INTO t_book VALUES(null,'java大全10',100,now());

