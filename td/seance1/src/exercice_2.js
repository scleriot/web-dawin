//2.1
/*function triple(a) {
    return 3*a;
}

console.log("Triple", triple(3))*/

//2.2
/*var b=2 //scope global
function a() {
    console.log("a")
    var e=5 //scope a
    console.log(b)
    console.log(c)
    console.log(e)    
    console.log(d)
}
function f() {
    console.log("f")
    var d=6 //scope f
    console.log(d)
}
f()
a()
var c=3 //scope global
*/

//2.3
/*function sum(a, b, c, d) {
    function add(a,b) {
        return a+b;
    }
    return add(a,add(b, add(c,d)))
}
console.log(sum(1,2,3,4))
console.log(add(1,2))*/

//2.4
function pow1(b, n) {
    if(n==0) return 1
    return b*pow1(b, n-1)
}
function pow2(b, n) {
    var result = 1;
    for(var i=0;i<n;i++) {
        result *= b
    }
    return result
}
console.log(pow1(2,12))
console.log(pow2(2,12))