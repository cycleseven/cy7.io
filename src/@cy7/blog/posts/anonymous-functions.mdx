---
title: "Overusing anonymous functions"
slug: "anonymous-functions"
date: "2020-01-01"
---

If you've spent much time with JavaScript, you'll have seen plenty of anonymous functions. They can make callback-heavy code more concise.

```js
// With named functions
array
  .filter(function notNull(x) {
    return x !== null;
  })
  .map(function double(x) {
    return x * 2;
  });

// With anonymous functions
array
  .filter(x => x !== null)
  .map(x => x * 2);
```

The ES6 arrow syntax is commonly used for anonymous functions. But arrow functions don't need to be anonymous.

```js
// A named arrow function
let double = x => x * 2;
console.log(double.name); // "double"
```

**Anonymous functions have a downside**: they make stack traces less readable.

```js
// Named version
const namedFunction = () => {
  throw new Error("oh no");
};
setTimeout(namedFunction);

// Anonymous version
setTimeout(() => {
  throw new Error("oh no");
});
```

[example of unclear error, named vs anonymous]

If you write a lot of your code in `index.js` files, things can get even more cryptic.

[even worse error]

There's a similar problem to watch out for in React. At the time of writing, [the official Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-seven/) contains snippets with anonymous function components. I've seen this style often lately.

```jsx
import React from "react";
import Layout from "../components/layout";

export default () => {
  return (
    <Layout>
      <div>Hello blog post</div>
    </Layout>
  );
};
```

But if you write your components that way, you'll have a difficult time finding them in React Dev Tools.

[screenshot of anonymous component tree]

So, my preference is to **use anonymous functions sparingly**.
