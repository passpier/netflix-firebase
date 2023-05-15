# Build Netflix Clone(React + Next.js)

Build Netflix clone with Next.js, React, Redux and Firebase.

![](https://raw.githubusercontent.com/passpier/netflix-youtube/main/doc/netflix-clone-screenshot.png?token=GHSAT0AAAAAACBP4IMOE33J3V3WVT3VZFEWZDB74DQ)

## Architecture

![image](https://raw.githubusercontent.com/passpier/netflix-youtube/main/doc/netflix-firebase-arc.png?token=GHSAT0AAAAAACBP4IMPELRLI2CTSDVZUCC6ZDB753A)


## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Deploy

Deploy Web with Firebase Hosting.

### Key Feature

* Serve content over a secure connection.
* Host static and dynamic content plus microservices.
* Deliver content fast.
* Emulate and even share your changes before going live.
* Deploy new versions with one command.

### Manual

1. Create a new Firebase project.
```bash
npm install -g firebase-tools
```
2. Log in into your account.
```bash
firebase login
```
3. Initialize Firebase web hosting connection.
```bash
firebase init
```
4. Select **Hosting: configure files for Firebase Hosting and (optionally) set up GitHub Action deploys** and answer **out** as your public directory.
5. Edit build setting in `next.config.js`
```js
const nextConfig = {
  output: "export",
};

module.exports = nextConfig;
```
6. Build your project.
```bash
yarn build
```
7. Deploy your project to Firebase.
```bash
firebase deploy
```

#### HOST URL: https://netflix-clone-6a05d.web.app/

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.