---
title: Why I love TypeScript
description: Why you should use TypeScript in your daily work
createdAt: 2021-11-09T17:09:18.330Z
author: Noel

---

Hey, this is a blog post on why I love TypeScript and you should use it. Do note that I am not forcing anyone to learn something they aren't comfortable
in, so this is just more a love-post rather than a forceful post.

---

JavaScript was always intended to be a dynamically weaked language, so no type inheritance was never brought to the table, in which, why TypeScript
was born. It brings writing JavaScript in monorepos and small projects much easier than trying to figure out silly bugs during development, like type
errors and such.

An example on how it can be powerful is on inferring types:

```ts
type SomeType<T> = T extends string ? string : never;

const yay: SomeType<string> = 'owo';
const heck: SomeType<number> = 0;
// type error, woops.
```

If you're not familiar with this syntax, I'll break it down:

- `type SomeType` is a **type alias** named SomeType
- It has a generic type of `T`, in-which, it can be any type.
- If the generic type of `T` is the **string** type, just return it as a **string**
- If that condition above didn't meet the requirement, just return `never`, in which it will always error.

But, on the other hand, it can get pretty ugly on readability;

```ts
type SomeType<T> = T extends number
  ? { type: 'number'; value: T }
  : T extends string
  ? { type: 'string'; value: T }
  : T extends Record<unknown, unknown>
  ? { type: 'object'; value: T }
  : T extends Array<infer U>
  ? { type: 'array'; value: U[] }
  : never;
```

Yea, it can get pretty ugly. But, another thing I love is its ecosystem. The TypeScript ecosystem is probably a good one out of all of them (in my opinion).
There is always "type-safe" libraries to keep you from battling the type system and I think that's pretty neat.
