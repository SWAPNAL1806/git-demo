


// all variables will be hoisted at the the top of file & the declared with undefined defined variales


var a;
console.log(a);
var a = 10;

console.log(a)



{
   // let b;  // hoisted
    //console.log(b);  // b is still in temporal dead zone

    let b = 10;  // b temporary dead zone is completed
    console.log(b);  // b is not is not temporal dead zone
}