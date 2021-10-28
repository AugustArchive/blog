---
title: why i love kubernetes
description:
author: Noel
category: kubernetes
createdAt: 2021-10-28T15:40:54Z

---

so, **kubernetes**. it takes care of a lot of problems that we face today in the world of infrastructure. im no infra wizard, but i been using it
for a while now, and i been loving it! but, there is a lot of hate on kube, which i get! it can cause more problems than it solves.

so, i will list out the pros and cons i found while using it.

## Pro: Powerful SDKs / CLI
as someone who likes sdks and cli tools, kubernetes has a very powerful cli with beautiful sdks, official or unofficial. i been using [kube-rs](https://github.com/kube-rs/kube-rs)
for a small microservice, [kanata](https://github.com/auguwu/Kanata) and it's been really good and it's also my first project using rust, which i might write up a
blog post of my pain.

## Con: YAML
yea, it sucks writing a multitude of YAML to get a deployment to launch.

take a look at this:

```yml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: some-name
  namespace: noel
spec:
  selector:
    matchLabels:
      app: some-name
  replicas: 1
  template:
    containers:
      - name: some-container-name
        image: nginx
        pullPolicy: Always
        ports:
          - containerPort: 80
            name: nginx-port
```

yea, with more complex deployments/statefulset/etc, it can get real messy and unreadable!

what i plan to do is, create a minimal DSL language to make Kube config files more readable and happier to write for all users, more on that in a new blog post,
maybe!

---

thanks for reading this, much appreciated! <3

- **noel** 🌺

