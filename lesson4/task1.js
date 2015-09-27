//recursion
function fib(n){
    if (n>1){
        return fib(n-1)+fib(n-2);
    } else{
        return n;
    }
}
//for loop
function fibLoop(n){
    var a = 1, b = 1, i;
    for (i=3; i<=n ; i++){
        var new_num = a + b;
        a = b;
        b = new_num;
    }
    return b;
}