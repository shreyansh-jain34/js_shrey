const accountId = 144553
let accountEmail = "abcd123@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed 

accountEmail = "sdusu232@gmail.com"
accountPassword = "34455"
accountCity = "Dehli"

/* 
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountEmail,accountId,accountPassword,accountState])
console.log(accountEmail);
