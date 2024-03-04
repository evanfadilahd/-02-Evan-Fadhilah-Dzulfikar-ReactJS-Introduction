This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Laporan Praktikum

|  | Pemrograman Berbasis Framework 2024 |
|--|--|
| NIM |  2141720167|
| Nama |  Evan Fadhilah Dzulfikar |
| Kelas | TI - 3I |


### Jawaban Soal 1

## Browse the meaning of:

![Screenshot](assets-report/01.1.png)
![Screenshot](assets-report/01.2.png)
![Screenshot](assets-report/01.3.png)
![Screenshot](assets-report/01.4.png)
![Screenshot](assets-report/01.5.png)


### Jawaban Soal 2

## Define the use of each folder and file!
    
    .git            : This folder is a hidden directory that Git uses to store the repository's metadata and object database.

    node_modules    : This folder contains all the project's dependencies. When you run npm install or yarn install, packages specified in the package.json file are downloaded and stored here.

    public          : This folder contains files that will be publicly accessible from the web server. For web applications, it often includes HTML, CSS, images, and other static assets.

    src             : This folder usually contains the source code of the project. It may be organized further into subdirectories based on the project's architecture or domain logic.

    .eslintrc.json  : This file is used to configure ESLint, which is a popular static code analysis tool for identifying problematic patterns or code that doesn't adhere to certain style guidelines. 

    .gitignore      : This file specifies intentionally untracked files to ignore. It's used in Git version control to prevent certain files from being committed to the repository, such as build artifacts or sensitive information.

    next.config.mjs : This file is used in Next.js projects to provide configuration options for the Next.js framework. It's written in JavaScript ES Modules (hence the .mjs extension) and allows developers to customize various aspects of their Next.js application.

    next-env.d.ts   : This is a TypeScript declaration file. Declaration files in TypeScript provide type information for code that exists in external JavaScript libraries or modules. 

    package.json    : This file is a manifest for the project and includes metadata such as the project name, version, dependencies, and scripts.

    package-lock.json: This file is used by npm (Node Package Manager) to lock down the version of each package's dependencies installed in a project.

    postcss.config.js: This file is used to configure PostCSS, a tool for transforming CSS with JavaScript plugins.

    README.md       : This file is a crucial component of most software projects and serves multiple purposes.

    tailwind.config.js : This file is used in Tailwind CSS projects to customize the default configuration of the Tailwind utility-first CSS framework.

    tsconfig.json   : This file is used in TypeScript projects to specify compiler options and configure how TypeScript code should be compiled.


### Jawaban Soal 3

Screenshot proof:

![Screenshot](assets-report/03.png)

## Question Answer

    It happens because of a feature called Hot Module Replacement (HMR) or Live Reloading that is integrated in the development environment(in this case is ReactJS), such as Webpack Dev Server or similar tools. 

    So when any file changes on our fs, it will delete the file from the front-end build cache. Webpack will reload our root.jsx file, this then re-load the deleted files. Any parent file, that required the deleted file, will also get deleted from the cache, and so on and so forth for grandparents of deleted files, and it stops at root.jsx. So root.jsx should be the only grandparent of any/all the files you want to reload!


### Jawaban Soal 4

Browse the meaning of:

![Screenshot](assets-report/01.1.png)

