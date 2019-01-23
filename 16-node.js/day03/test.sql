SET NAMES UTF8;
DROP DATABASE IF EXISTS test;
CREATE DATABASE test CHARSET=UTF8;
USE test;

CREATE TABLE user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(32),
    upwd VARCHAR(32),
    phone VARCHAR(16)
);

INSERT INTO user VALUES
(NULL,'TOM','123456','13512345678'),
(NULL,'Mary','111111','13998745632'),
(NULL,'大旭','222222','13856454545');



