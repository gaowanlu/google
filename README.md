# Vercel Website Proxy

声明：此项目仅供技术学习，不进行任何获利

## Quick start

Chinese Notice: 如果无法查看此文档中的图片,请下载次项目后在自己电脑查看此 README.md

1、Fork this repository

2、Please rewrite the target host name in api/proxy.js to "google.com" by default.

```js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (req, res) => {
  let target = "https://www.google.com/"; //your website url
  //   if (
  //     req.url.startsWith("/api") ||
  //     req.url.startsWith("/auth") ||
  //     req.url.startsWith("/banner") ||
  //     req.url.startsWith("/CollegeTask")
  //   ) {
  //     target = "http://106.15.2.32:6969";
  //   }

  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      // rewrite request path `/backend`
      //  /backend/user/login => http://google.com/user/login
      //   "^/backend/": "/",
    },
  })(req, res);
};
```

3、Registering your vercel account [vercel](https://vercel.com/)  
4、To bind your GitHub account in Vercel's settings, please follow the steps below.

![bind github account](./asset/224318.jpg)

5、To configure your Vercel repository, please follow the instructions below.

To import a Git repository, follow these steps: Overview => Add New... => Project.

![import git repository](./asset/224748.jpg)

Click the "Continue with GitHub" button.

![looking your own rep](./asset/225212.jpg)

To import your forked repository, such as Google, please follow the steps below.

![Click Deploy](./asset/225542.jpg)

The deploy process is currently underway. Please wait for it to complete.

![Deploy success](./asset/225816.jpg)

The domain vercel for you

In 2022, the Vercel domain name in mainland China may experience DNS pollution, so it is advisable to register a domain name within mainland China. Typically, beginners on major domain name platforms can obtain a domain name with one-year usage rights for 1 RMB.

![Vercel Domain](./asset/230030.jpg)

6、Register your own domain name and complete the real-name registration process in accordance with the real-name registration rules of the domain name registrar.

No more elaboration, if you encounter problems, you can submit an issue, and some netizens will answer your questions with each other.

7、To configure your own domain and cname

![](./asset/230712.jpg)
![](./asset/231001.jpg)

Manage your domain name

![](./asset/231513.jpg)

The TXT record needs to fill in the content provided by vercel above, and the cname is the same

![](./asset/231835.jpg)

8、Enjoy it

`https://google.{{mydomain}}.com`

![](./asset/232007.jpg)

![](./asset/232111.jpg)

9、Modify the default browser engine for your own service

![](./asset/232617.jpg)

![](./asset/232857.jpg)

Setting the default item

![](./asset/232826.jpg)

## Chrome prompts that the website is not secure.

![](./asset/031826.jpg)

To disable Chrome security protection in Chrome browser settings.

![](./asset/032114.jpg)

## Change which data center your service is in

This affects your ip address when you use google search

![](./asset/233500.jpg)
