# Research Database Frontend

Frontend application of [DEV](https://osu.dev)'s unique solution that aggregates all the research opportunities on campus for all majors and departments. **Key features include:**

- Latest listings of student research positions,
- Administrative access for OSU faculties,
- And so much more...

This student project is made with passion and :heart:  by:

- [Bennett Godinho-Nelson](bennettgodinhonelson@gmail.com) as Sr SWE
- [D'Andre Williams](dwilliamsbuckeye@gmail.com) as Sr SWE
- [Suyeon Chae](schae0103@gmail.com) as Jr SWE
- [Alex Eichner](eichneralex3@gmail.com) as Jr SWE
- [Connor Radkov](cradkov27@gmail.com) as Jr SWE
- [Jerry Chang](jerry091401@gmail.com) as Jr SWE
- [Max Miller](millermax98765@gmail.com) as Jr SWE

Documented on 03/20/24 by Keming He as the DevOps consultant for this project. Connect with me at https://linkedin.com/in/keminghe :star:

## Quick Start

Preview of the static build is readily running at https://devosu.github.com/research-db-frontend (...soon?)

> [!NOTE]
> Remember to add screenshot of the live site.

## For Developers

### 0. Git and Node.js Set Up

Install the latest version of Node.js on your local dev environment. Official link: https://nodejs.org/en/download

Install the latest version of git version control on your local dev environment. Official link: https://git-scm.com/downloads

Run these commands in a terminal/cmd/powershell to confirm installation success:

```bash
node --version
npm --version
git --version
```

You should see something printed out such as:

```bash
# Note that you don't have to match exact version.
v20.11.1            # For node.
10.2.4              # For npm.
git version 2.34.1  # For git.
```

### 1. Clone the Repository 


Open any termial and run:

```bash
git clone https://github.com/devosu/research-mentorship-frontend.git
```

If you are a admin or contrib member of this repo, you should be able to clone it. For `Access Denied` issues, please first consult: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens then @ any Officer in our Discord.

Once successfully cloned our repo, make sure to enter and create your own feature branch:

```bash
cd research-mentorship-frontend
git pull
git checkout -b dev-feature_name-your_name
```

Yeah! You are almost ready to code!! Just don't forget your dependencies:

```bash
npm install
```

``

### 2. Let's Build

The static site generator we are using (in this early stage) is call [Eleventy](https://www.11ty.dev/). 

The best part about Eleventy is that I've already set up everything for you, don't bother with the link. :smile:

What's the setup?

- HTML code are separated into `something.html` in `root` and `_layout.html` in the `_include` directory. Layouts are HTML code that can be reused across multiple pages, hurray!!

- To build the whole site, all you need to do is to run the command, and watch the `docs` directory gets populated automatically.

```bash
npm run build
```

- You now only need to worry about the body of the HTML files in root and Eleventy will take care of the rest.

Happy Developing!!!