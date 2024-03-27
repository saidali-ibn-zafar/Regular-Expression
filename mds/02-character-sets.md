# []

```js
let regex = / [ng]inja /;
```

In the regular expression `[ng]`inja, the character class `[ng]` matches either "n" or "g". This means the regex looks for strings that start with either `"n"` or `"g"`, followed by `"inja"`. Therefore, it matches `"ninja"` and `"ginja"`, but it would not match `"minga"` or "ninga" because those have extra letters in front of the pattern `[ng]inja` specifies.

---

```js
let regex = / [^p]000 /;
```

The regular expression `[^p]000` is designed to match any string that ends with `"000"` but does not start with the letter `"p"` immediately before those zeros. The `[^p]` part is a negated character class that matches any character except for `"p"`, and `"000"` matches the literal string `"000"`.
