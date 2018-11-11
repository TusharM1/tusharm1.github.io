console.log("working");
var list = document.getElementsByTagName('div');
console.log(list);
for (var i = 0; i < list.length; i++) {
	console.log(list[i]);
}
// Array.from(list).forEach(function(item){
// 	console.log(item);
// })