let   user1 = {
    address: {
        city : 'MUMBAI'
    }
};

let user2 = null;

 // ?.  if the values before ?. is underdefined/null, then it will not try  to acess its property  
console.log(user2?.address.city);

// ? .  doesn't work on left hand side of assignment

const headerValue = document.getElementById('header').innerHTML;
console.log(headerValue);
