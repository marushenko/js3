
function fib(n) {
let fibArr = [0,1];
for (var i = 2; i <= n; i++) {
    fibArr.push(fibArr[i-1] + fibArr[i-2])
}
return fibArr.pop()
}
alert(fib(8));



function fin(n) {
  var a = 0,
    b = 1;
  for (var i = 2; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}
alert(fin(8)); 





function fic(n) {
  return n <= 0 ? n : fib(n - 1) + fib(n - 2);
}
alert(fic(8));



function fir(n) {
    var first = 0,
    second = 1;
    for (var i = 2; i <= n; i++) {
        var next = first + second;
        first = second;
        second = next;
    }
    return second;
}
alert(fir(8)); 

