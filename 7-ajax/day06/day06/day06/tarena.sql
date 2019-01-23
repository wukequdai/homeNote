use sohu;
CREATE TABLE t_score(
  id      int primary key auto_increment,
  name    varchar(25) not null default '',
  chinese double(5,2) not null default 0
);
