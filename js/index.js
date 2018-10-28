let n = parseFloat(prompt('Rechner'));
function fib(n) {
    var first = 0,
    second = 1;
    for (var i = 2; i <= n; i++) {
        var next = first + second;
        first = second;
        second = next;
    }
    return second;
}
alert(fib(8)); 