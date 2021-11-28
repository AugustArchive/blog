---
title: Creating a new DSL language
description: I explain on how a DSL language for Kubernetes deployments can work.
createdAt: 2021-11-14T15:25:11.271Z
---

As you know, Kube has been taken into storm in the infra world, it helps with a lot of problems we face
as a system administrator, but one of the most critisms I seen is that YAML sucks.

Yea, I can agree on that. YAML can suck on so many levels, but I love it as a same time. It's probably a guilty pleasure of mine, I love writing YAML, I use it in all of my projects relating to configuration.

JSON is alright, I haven't fully tried out [HCL](https://github.com/hashicorp/hcl), and XML just sucks.

Now, reader, if you don't know that "DSL" stands for, it's a **domain specific language**, i.e, it's not a programming language; it's more of a language that is very domain-specific like HTML/CSS for the browser.

It is now time to design it! I am no designer of any kind, this is just out of pure thought.

```
define(
  kind: "Deployment",
  apiVersion: "apps/v1"
);
```

I think top level objects from the specification should be in a definition block, it just makes sense to define what this Kubernetes object it is, but subject can be changed.

Now, what about the metadata (like namespace, name, etc). It'll be defined under the `metadata` block:

```
metadata(
  namespace: "...",
  name: "nginx",
  annotations {
    "some-annotation" => "value"
  }
);
```

Wait, why is `annotations {}` like that when `metadata` is encapsulated in `()`??!?!??!???!

I feel like, defining objects rather than object "blocks" in `{}` instead of `()` in a way makes more sense to use curly braces.
