// console.log("Damn from another JS page");


var a = 42;
var b = "I am a string";
var c = true;

console.log(a+b);
console.log(a+c);

console.log(b+c);

// Maths operator

var a = 2;
var b = 3;
var c = 4;
var d = 5;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

console.log(a++);
console.log(a--);

var anotherA = "42";
var justTrue = "true";
var deepTrue = true;
// equality

// shallow equality

console.log(a == anotherA);
console.log(justTrue == deepTrue);

// Deep equality

console.log(a === anotherA);
console.log(justTrue === deepTrue);


// Maths equality
console.log("HERE WE GO!");
a = 3;
b = 2;
c = 5;
d = 7;

console.log(a<b);
console.log(c <= d);

// Logical Operation

console.log(a<b && c<d);

// values which are permissible in js for now we will talk about numbers, strings and booleans

// Coercion

var e = true;
var f = false;
console.log(a + e); // Implicit coercion
// i.e., a = 3 and e = true --> true = 1 by js internally and thus answer will be 4

console.log(a+"some string");
// i.e., answer will be convertion to string by implicit coercion
// ans = 3some string

// explicit coercion

console.log(a + Number(e));
console.log(String(a) + "some string");
// Here we have made changes accordingly and thus we know what to do! always prefer explicit coercion
// because implicit coersion gives wierd answers

// static and dynamic typing

var someVaraible = 2;
console.log(someVaraible);
someVaraible = "some variable";
console.log(someVaraible);

someVaraible = true;
console.log(someVaraible);


// Let's talk about constants

var PERCENTAGE_OF_COOL_KIDS_I_HAVE = 100;

// Let's talk about blocks

if(PERCENTAGE_OF_COOL_KIDS_I_HAVE == 99){
    console.log("Damn! done")
}else{
    console.log("Damn! No");
}


