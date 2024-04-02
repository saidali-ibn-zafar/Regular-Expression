// Using test()

function checkElement(arr) {
  let regEx = /(^[a-zA-Z]+([a-zA-Z0-9_]+)?$){1,15}/g;
  for (let i = 0; i < arr.length; i++) {
    if (regEx.test(arr[i])) {
      arr[i] = "Pass";
    } else {
      arr[i] = "Fail";
    }
  }
  return arr;
}

let inputArray = [
  "user_123", 
  "2user",
  "username",
  "User1",
  "u",
  "u#ser",
  "user name",
  "user!123",
  "user_name",
  "a123456789012345",
  "1234567890123456",
  "user",
  "-username",
  "Username",
  "user*name",
];

let result = checkElement(inputArray);
console.log(result);

- - - - 

// Using replace()
  
function checkSingleElement(str) {
  let regEx = /(^[a-zA-Z]+([a-zA-Z0-9_]+)?$){1,15}/g;
  let result = str.replace(regEx, "PASS");
  return result;
}

let res = checkSingleElement("user_123");
console.log(res); // PASS

- - - - -

// Using replaceALl()
  
function checkAll(str) {
  let regEx = /(^[a-zA-Z]+([a-zA-Z0-9_]+)?$){1,15}/gm;
  let result = str.replaceAll(regEx, "PASS");
  return result;
}

let strings = `user_123
2user
username
User1
u
u#ser
user
name
user!123
user_name
a123456789012345
1234567890123456
user
-username
Username
user*name
`;

let res = checkAll(strings);
console.log(res);
