#drop database humaiche;
use humaiche;
CREATE TABLE t_msg(
  id     int primary key auto_increment,
  author varchar(25) not null default '',
  cont   varchar1(255) not null default '',
  ctime  datetime not null default 0,
  email  varchar(100) not null default ''
);
INSERT INTO t_msg values(null,
'tom','hello1',now(),'tom@tom.com');
INSERT INTO t_msg values(null,
'tom','hello2',now(),'tom@tom.com');
INSERT INTO t_msg values(null,
'tom','hello3',now(),'tom@tom.com');
INSERT INTO t_msg values(null,
'tom','hello4',now(),'tom@tom.com');
INSERT INTO t_msg values(null,
'tom','hello5',now(),'tom@tom.com');


#? alter table