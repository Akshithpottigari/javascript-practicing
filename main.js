console.log("this is an example javascript");
console.log(5+6);
x =5
y=7
z=x+y
console.log(z);
//concatination
console.log("I don't know what am"+" I doing");
/* this is a 
multiline 
comment*/

console.log("'=' is not equal to, it is assignment");
console.log("'==' is equal to");
console.log("'===' is used only for the variables which are of same datatype, if one is string and another is integer, then it throws an error");

function addition(number1,number2){
    return number1+number2;
}

console.log("addition of 11 and 21 using a function is " + addition(11,12));

//printing arrays in new line
Array1 = [1,2,3,4,5,6,7,8,9,0]
for(let i=0; i<Array1.length; i++){
    console.log(Array1[i]);
}

ArrayStrings = [
    {
        id: 1,
        text: 'String1'
    },
    {
        id: 2,
        text: 'String2'
    },{
        id:3,
        text: 'String3'
    }
]
console.log(ArrayStrings[2]);
for(let i  = 0; i<ArrayStrings.length; i++){
    console.log(ArrayStrings[i].text);
}
