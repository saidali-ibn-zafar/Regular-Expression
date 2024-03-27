# ranges

- `[a-z]` - all letters from a to z (lower case).

- `[a-h]` - from a to h (lower case).

- `[A-Z]` - all letters from A to Z (upper case).

- `[a-zA-Z]` - all letters not just lower or upper case.

- `[0-9]` - from 0 to 9

---

# repating

- `[0-9]+` - any number of numbers longer.

`12345678900987654321` is also matched by `[0-9]+`. ✔️

if we want to check a phone number we cannot use that instead we need to use :

- `[0-9]{11}`

---

- `[a-z]{5}` matches :
  - hello ✔️
  - ninja ✔️
  - hi ❌

---

- `[a-z]{5,8}` matches :

  - hellowow ✔️
  - ninja ✔️
  - aaaaaaaaaaa ❌

  means 5 letters is ok, 6, 7 and also 8 but not less than 5 or greater than 9...

---

- `[0-9]{5,}` - at least 5 letters contained any digits
