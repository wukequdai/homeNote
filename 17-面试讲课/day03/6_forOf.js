/*
  for in: 遍历对象中的每个属性
      in: 获取每个属性名
  for of: 只能遍历*索引*数组中每个元素的值
      of: 获得每个元素的值
    如何: for(var val of arr)
            val//arr[i]
 */
var ym={
  name:"杨幂",
  math:81,
  chs:59,
  eng:89
}
for(var key in ym){
  console.log(key);
}
var ym=["杨幂",81,59,89];
for(var val of ym){
  console.log(val);
}
