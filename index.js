
function fnGCD(a, b){
    return (a%b)? fnGCD(b, a%b) : b;
}
console.log(fnGCD(10,3))
