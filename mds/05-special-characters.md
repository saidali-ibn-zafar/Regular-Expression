![alt text](/imgs/image1.png)

![alt text](/imgs/image2.png)

---

- `a[a-z]?`

`a` ✔️

`ag`✔️

? means optional

- `car.`

`.` matches any character (except for line terminators)

- `a[a-z]*`

`ajhfbhvfjvshufie` ✔️

`*` matches the previous token between zero and unlimited times, as many times as possible

- The backslash `(\)` in regular expressions is a powerful character known as the `escape` character.

`abs\*` matches only abs\* ✔️

- `\1` in regex refers to a backreference to the first captured group in a pattern.

`\b(\w+)\s\1\b` To match entire words repeated after a space,
