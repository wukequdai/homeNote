/*箭头函数: 对回调函数的简写:*/
var arr=[12,3,123,2,1,23];
//去function，加=>
//更简化:
// 1. 如果只有一个参数，可省略()
//   如果一个参数都没有，必须加空的()
// 2. 如果函数体只有一句，可省略{}
// 3. 如果只有一句话且是return，则可省略return
arr.sort((a,b)=>a-b);
console.log(String(arr));

var evens=arr.filter(val=>val%2==0);
console.log(String(evens));
//箭头函数的更重要作用:
//让回调函数内外共用同一个this
var bob={
  name:"Bob",
  friends:["Rose","Jack","Tom","Jerry"],
  intrFriends(){
    this.friends.forEach(val=>
      console.log(
        this.name+" knows "+val)
    );
  }
}
bob.intrFriends();