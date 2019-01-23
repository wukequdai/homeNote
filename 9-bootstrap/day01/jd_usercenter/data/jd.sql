SET NAMES UTF8;
DROP DATABASE IF EXISTS jd;
CREATE DATABASE jd CHARSET=UTF8;
USE jd;

/**用户信息表**/
CREATE TABLE jd_user( 
  uid INT PRIMARY KEY AUTO_INCREMENT,  
  uname VARCHAR(32),    
  upwd VARCHAR(32)
);
INSERT INTO jd_user VALUES
(10, 'qiangdong', '123456'),
(20, 'naicha', '456789');

/**产品信息表**/
CREATE TABLE jd_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,  
  pname VARCHAR(64),  
  price FLOAT(8,2),  
  pic VARCHAR(32)
);
INSERT INTO jd_product VALUES
(1,'小米 Note 全网通 白色 移动联通电信4G手机 双卡双待',1199.00,'images/phone/phone_01.jpg'),
(2,'Apple iPhone 6s (A1700) 16G 玫瑰金色 移动联通电信4G手机',3999.00,'images/phone/phone_02.jpg'),
(3,'PPO R9 4GB+64GB内存版 玫瑰金 全网通4G手机 双卡',2499.00,'images/phone/phone_03.jpg'),
(4,'小米 红米 3S 高配全网通 3GB内存 32GB ROM 经典金色',899.00,'images/phone/phone_04.jpg'),
(5,'金立M6 Plus 香槟金 4GB+64GB版 移动联通电信4G手机 双卡双待',2999.00,'images/phone/phone_05.jpg'),
(6,'Apple iPhone 6s Plus (A1699) 64G 玫瑰金色 移动联通电信4G手机',5799.00,'images/phone/phone_06.jpg'),
(7,'vivo X7 全网通 4GB+64GB 移动联通电信4G手机 双卡双待',2499.00,'images/phone/phone_07.png'),
(8,'小米 红米Note3 高配全网通版 3GB+32GB 金色 移动联通电信4G手机',1099.00,'images/phone/phone_08.jpg'),
(9,'【六个月碎屏换新】荣耀8 4GB+32GB 全网通版 魅海蓝 双镜头，双2.5D玻璃',2499.00,'images/phone/phone_09.jpg'),
(10,'荣耀7 (PLK-AL10) 3GB+64GB内存版 荣耀金 移动联通电信4G手机',1799.00,'images/phone/phone_10.jpg'),
(11,'荣耀 V8 全网通 高配版 4GB+64GB 香槟金 移动联通电信4G手机 双卡双待双通',2799.00,'images/phone/phone_11.jpg'),
(12,'荣耀 畅玩5X 3GB内存版 落日金 移动联通电信4G手机 双卡双待 炫酷指纹',1099.00,'images/phone/phone_12.jpg'),
(13,'Apple iPhone 6 (A1586) 64GB 金色 移动联通电信4G手机',4199.00,'images/phone/phone_13.jpg'),
(14,'TCL 初现 750 雅金 移动联通电信4G手机 双卡双待 后置1600万摄像，美姿拍照！',4199.00,'images/phone/phone_14.jpg'),
(15,'华为 P9 plus 64GB 琥珀灰 移动联通电信4G手机 双卡双待',3988.00,'images/phone/phone_15.jpg'),
(16,'Apple iPhone 5s (A1530) 16GB 金色 移动联通4G手机',2198.00,'images/phone/phone_16.jpg'),
(17,'vivo X7Plus 全网通 4GB+64GB 移动联通电信4G手机 双卡双待 金色',2798.00,'images/phone/phone_17.jpg'),
(18,'华为 畅享5S 金色 移动联通电信4G手机 双卡双待 10万好评手机！',1099.00,'images/phone/phone_18.jpg'),
(19,'Apple iPhone 6 Plus (A1524) 16GB 银色 移动联通电信4G手机',3899.00,'images/phone/phone_19.jpg'),
(20,'华为 麦芒5 全网通 4GB+64GB版 香槟金 移动联通电信4G手机 双卡双待',2599.00,'images/phone/phone_20.jpg'),
(21,'小米5 全网通 标准版 3GB内存 32GB ROM 白色 移动联通电信4G手机',1799.00,'images/phone/phone_21.jpg'),
(22,'华为 P9 全网通 3GB+32GB版 流光金 移动联通电信4G手机 双卡双待 麒麟955',3188.00,'images/phone/phone_22.jpg'),
(23,'金立 金钢 标准版 爵士金 移动联通电信4G手机 双卡双待 4G全网通',999.00,'images/phone/phone_23.jpg'),
(24,'360手机 N4 全网通 4GB+32GB 阳光白 移动联通电信4G手机 双卡双待',999.00,'images/phone/phone_24.jpg'),
(25,'小米 Max 全网通 标准版 3GB内存 32GB ROM 金色 移动联通电信4G手机',1299.00, 'images/phone/phone_25.jpg'),
(26,'华为 P9 全网通 4GB+64GB版 金色 移动联通电信4G手机 双卡双待 后置1200万',3688.00, 'images/phone/phone_26.jpg'),
(27,'乐视（Le）乐2（X620）32GB 原力金 移动联通电信4G手机 双卡双待 5.5英寸',988.00,'images/phone/phone_27.jpg'),
(28,'努比亚(nubia)【3+64GB】小牛5 Z11mini 黑色 移动联通电信4G手机',1299.00, 'images/phone/phone_28.jpg'),
(29,'乐视（Le）乐2Pro 32GB 金色 移动联通电信4G手机 双卡双待 5.5英寸In-Cell屏',1399.00,'images/phone/phone_29.jpg'),
(30,'华为 Mate 8 3GB+32GB版 玫瑰金 移动联通电信4G手机 双卡双待 麒麟950芯片',2799.00, 'images/phone/phone_30.jpg'),
(31,'小米 4c 标准版 全网通 白色 移动联通电信4G手机 双卡双待 高通骁龙808畅销机',799.00,'images/phone/phone_31.jpg'),
(32,'vivo X7 全网通 4GB+64GB 移动联通电信4G手机 双卡双待 星空灰 vivox7',2498.00, 'images/phone/phone_32.jpg'),
(33,'联想 乐檬3 （K32C36）16GB 金色 移动4G手机 双卡双待 刀锋致敬经典',599.00,'images/phone/phone_33.jpg'),
(34,'华为 荣耀 畅玩4X 晨曦金 移动联通电信4G手机 双卡双待 5.5英寸大屏看片利器',749.00,'images/phone/phone_34.jpg'),
(35,'三星 Galaxy On5（G5500）金色 移动联通4G手机 真皮质感后盖，2600毫安大容量',699.00,'images/phone/phone_35.jpg'),
(36,'OPPO A37 2GB+16GB内存版 玫瑰金 全网通4G手机 双卡双待 【赠品任你选】',1299.00,'images/phone/phone_36.jpg');

/**购物车表**/
CREATE TABLE jd_cart(
  cid INT PRIMARY KEY AUTO_INCREMENT,  
  userId INT
);
INSERT INTO jd_cart VALUES
(100, 10);

/**购物车详情表**/
CREATE TABLE jd_cart_detail(
  did INT PRIMARY KEY AUTO_INCREMENT,  
  cartId INT,  
  productId INT,  
  count INT
);
INSERT INTO jd_cart_detail VALUES
(NULL, 100, 8, 2),
(NULL, 100, 15, 1),
(NULL, 100, 27, 3);

/**订单信息表**/
CREATE TABLE jd_order(
  oid INT PRIMARY KEY AUTO_INCREMENT,
  rcvName VARCHAR(16),
  rcvAddr VARCHAR(64),
  rvcPhone VARCHAR(24),
  price FLOAT(8,2),     #999999.99
  payment INT,          #1表货到付款 2表支付宝支付 3京东支付  4在线支付
  status INT,           #1表待付款  2表配货中  3表运输中  4表派货中   5表订单完成  6表废单
  orderTime BIGINT,
  userId INT
);
INSERT INTO jd_order VALUES
(91308000,'强东爸01','北京市海淀区太阳雨小区1#','13501234561','3800','1','1','1300123456781','10'),
(NULL,'强东妈02','北京市海淀区太阳雨小区1#','13501234562','1200','2','2','1310123456782','10'),
(NULL,'强东爷03','北京市海淀区太阳雨小区1#','13501234563','800','3','3','1350123456783','10'),
(NULL,'强东奶04','北京市海淀区太阳雨小区1#','13501234564','1100','4','4','1390123456784','10'),
(NULL,'强东弟05','北京市海淀区太阳雨小区1#','13501234565','4500','1','5','1420123456785','10'),
(NULL,'强东弟06','北京市海淀区太阳雨小区1#','13501234565','4500','1','5','1420123456785','10'),
(NULL,'强东弟07','北京市海淀区太阳雨小区1#','13501234565','4500','1','5','1420123456785','10'),
(NULL,'强东弟08','北京市海淀区太阳雨小区1#','13501234565','4500','1','5','1420123456785','10'),
(NULL,'强东弟09','北京市海淀区太阳雨小区1#','13501234565','4500','1','5','1420123456785','10'),
(NULL,'强东弟10','北京市海淀区太阳雨小区1#','13501234565','4500','1','5','1420123456785','10'),
(NULL,'强东弟11','北京市海淀区太阳雨小区1#','13501234565','4500','1','5','1420123456785','10'),
(NULL,'强东弟12','北京市海淀区太阳雨小区1#','13501234565','4500','1','5','1420123456785','10'),
(NULL,'强东弟13','北京市海淀区太阳雨小区1#','13501234565','4500','1','5','1420123456785','10'),
(NULL,'强东弟14','北京市海淀区太阳雨小区1#','13501234565','4500','1','5','1420123456785','10'),
(NULL,'强东弟15','北京市海淀区太阳雨小区1#','13501234565','4500','1','5','1420123456785','10'),
(NULL,'强东弟16','北京市海淀区太阳雨小区1#','13501234565','4500','1','5','1420123456785','10'),
(NULL,'强东弟17','北京市海淀区太阳雨小区1#','13501234565','4500','1','5','1420123456785','10'),
(NULL,'强东弟18','北京市海淀区太阳雨小区1#','13501234565','4500','1','5','1420123456785','10'),
(NULL,'强东弟19','北京市海淀区太阳雨小区1#','13501234565','4500','1','5','1420123456785','10'),
(NULL,'强东弟20','北京市海淀区太阳雨小区1#','13501234565','4500','1','5','1420123456785','10'),
(NULL,'强东弟21','北京市海淀区太阳雨小区1#','13501234565','4500','1','5','1420123456785','10'),
(NULL,'强东弟22','北京市海淀区太阳雨小区1#','13501234565','4500','1','5','1420123456785','10'),
(NULL,'强东弟23','北京市海淀区太阳雨小区1#','13501234565','4500','1','5','1420123456785','10');

/**订单详情表**/
CREATE TABLE jd_order_detail (
  did INT PRIMARY KEY AUTO_INCREMENT,
  orderId INT,
  productId INT,
  count INT
);
INSERT INTO jd_order_detail VALUES
(NULL, 91308000, 15,  2),
(NULL, 91308000, 8,  1),
(NULL, 91308000, 22,  3),
(NULL, 91308001, 3,  1),
(NULL, 91308001, 15,  3),
(NULL, 91308002, 18,  2),
(NULL, 91308003, 30,  1),
(NULL, 91308003, 28,  2),
(NULL, 91308003, 11,  3),
(NULL, 91308004, 15,  3),
(NULL, 91308004, 11,  1),
(NULL, 91308005, 11,  1),
(NULL, 91308005, 21,  1),
(NULL, 91308006, 11,  1),
(NULL, 91308007, 11,  1),
(NULL, 91308008, 21,  1),
(NULL, 91308008, 22,  1),
(NULL, 91308008, 23,  1),
(NULL, 91308009, 11,  1),
(NULL, 91308010, 1,  1),
(NULL, 91308010, 31,  1),
(NULL, 91308011, 11,  1),
(NULL, 91308012, 11,  1),
(NULL, 91308013, 11,  1),
(NULL, 91308014, 17,  1),
(NULL, 91308014, 31,  1),
(NULL, 91308015, 11,  1),
(NULL, 91308016, 11,  1),
(NULL, 91308017, 3,  1),
(NULL, 91308017, 2,  1),
(NULL, 91308017, 5,  1),
(NULL, 91308018, 11,  1),
(NULL, 91308019, 11,  1),
(NULL, 91308019, 8,  1),
(NULL, 91308020, 11,  1),
(NULL, 91308021, 11,  1),
(NULL, 91308021, 11,  1),
(NULL, 91308022, 9,  1),
(NULL, 91308022, 22,  1),
(NULL, 91308022, 23,  1);

/**抽奖记录表**/
CREATE TABLE jd_lottery(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  userId INT,
  lotteryTime BIGINT,
  level INT      #1表一等奖 ....
);
INSERT INTO jd_lottery VALUES
(NULL, 10, 1401234567890, 3),
(NULL, 10, 1411234567890, 2),
(NULL, 10, 1421234567890, 4);










