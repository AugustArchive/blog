---
title: Why I love Kotlin
description: Why you should use Kotlin in your daily work
createdAt: 2021-11-17T17:19:08.963Z
author: Noel
---

Hey, this is a blog post on why I love Kotlin and you should use it. Do note that I am not forcing anyone to learn something they aren't comfortable
in, so this is just more a love-post rather than a forceful post.

---

So, Java. It's a good language that EVERYONE loves, right? I hear pitchforks, I got your attention! No, for real. I think Java is not an amazing language,
it is far from it, but it is a popular language to learn. The last post about me loving a language is on [TypeScript](https://b.floof.gay/post/why-i-love-typescript)
and describes why I love TypeScript and you should use it. Today it's on Kotlin.

Kotlin is a programming language can run on the JVM, JS (Node/Browser), and Native with a LLVM backend. I love the language because:

- multiplatform
- good libraries and compiler features
- fantastic stdlib
- (insert your reasons here)

But, there's always going to be a hoard of people saying it's a bad language, in _some degree_, I can say that is true, but not really.

## 1. Good Libraries

I say this with a grain of salt, this is opinionated to myself, and this can't be everyone's reason on why Kotlin is amazing. But, it really
does have good libraries from the [Kotlin](https://github.com/Kotlin) GitHub organization, some examples are:

- [kotlinx.serialization](https://github.com/Kotlin/kotlinx.serialization)
- [kotlinx.coroutines](https://github.com/Kotlin/kotlinx.coroutines)
- (and much more!)

The organization also created a documentation engine called [Dokka](https://github.com/Kotlin/Dokka), which is a fantastic engine but missing some stuff
that might be useful (to me and probably others):

- dynamic tags
- `@examples` and `@inheritdoc` tags
- dark theme
- custom way to build your own theme(s) and ship them to Maven Central

Just take a good look at the standard library and the kotlinx libraries.

## 2. Developed by Jetbrains

For someone who doesn't really care about big-tech and wants to build a company with the mind of only OSS (excluding internal utilities), **Jetbrains** has always
been a company that I want to work for when I'm done with college (or high school, who knows?) to learn how to run a tech company, in which, I want to do in the future.

I always loved their products like YouTrack, IntelliJ, and much more. Though, I just wish YouTrack was open source. :<

Once I learned that Kotlin was being developed by them, I instantly fell in love with it, no questions asked.

## 3. Good Java interop.

Kotlin always has been compared with **Java**, since you can bring in any JVM library and use them in your Kotlin application, but it really does have good
interopibility with Java, and I think that's neat.

One thing that kind of bugs me is with IntelliJ mentioning that this:

```java
@NotNull
public static void whatever(@Nullable String a) {}
```

would be in Kotlin (from autocomplete):

```kotlin
fun whatever(a: String) {}
```

I would wish Kotlin (or IntelliJ) would mention that parameter `a` in that block of Java code would be `fun whatever(a: String?) {}`.

---

thanks for reading on why i love kotlin, see ya next time. :>
