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
