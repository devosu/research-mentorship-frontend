# Event Feed Project

[![Node 18 CI/CD](https://github.com/devosu/event-feed-project/actions/workflows/node-gcloud-cicd.yml/badge.svg)](https://github.com/devosu/event-feed-project/actions/workflows/node-gcloud-cicd.yml)
[![CodeQL](https://github.com/devosu/event-feed-project/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/devosu/event-feed-project/actions/workflows/github-code-scanning/codeql)

Node.js 18 x React web application to inform OSU students of the various club activities happing across campus.

## User Stories

```bash
Feature: View same-day/week/month... club events

  Scenario: Trevor wants to find a recycling-themed club event after class at 3pm today 
    
    Given Trevor has access to the Internet and some mobile device (Android/iOS)
    When Trevor opens URL https://findevents.osu.dev on his phone and applies the reclycing tag filter
    Then The website will respond with either a list of recycling events (plus details) or related events if not found

```

## Developers

:heart: This project is made with passion and love by students of DEV at OSU:

| Name          | Email                      | Role         |
|---------------|----------------------------|--------------|
| Trevor Gerald | tmgerald04@gmail.com       | Sr SWE       |
| Ekumjyot Kaur | kaur.271@osu.edu           | Sr SWE       |
| Aryan Tyagi   | aryantyagi1117@gmail.com   | Sr SWE       |
| Ziqi Ou       | ou.152@buckeyemail.osu.edu | Jr SWE       |
| Yakob Getu    | bo.ding2@icloud.com        | Jr SWE       |
| Bo Ding       | bo.ding2@icloud.com        | Jr SWE       |
| William An    | an.407@osu.edu             | Designer     |
| Keming He     | keminghe.career@gmail.com  | Cloud DevOps |

:star: Documented on 04/02/24 by Keming He as the DevOps consultant for this project. Connect with me at 

> LinkedIn Profile: https://linkedin.com/in/keminghe  

This table is generated using Tables Generator
> Official Site: https://www.tablesgenerator.com/markdown_tables

## Quickstart Guide

### 0. Set up Node.js and Git

Using the links below. First download and install the **Node.js 18 LTS** (long-term-support) version compatible with your operating system. Then do the same with Git version control.

> Node.js offcial release: https://nodejs.org/en/download

```bash
# Open either VSCode, Windows Powershell, or macOS terminal,
# and confirm Node.js 18 LTS is successfully installed by typing:
node --version

# you should then be getting outputs like this:
# v18.20.0
```

> Git official release: https://git-scm.com/downloads

```bash
# Again, once installed, type in terminal:
git --version

# you should then be getting output like this:
# git version 2.44.0
```

### 1. Clone the Repo

```sh
# Open either VSCode, Windows Powershell, or macOS terminal,
# and navigate to dir of your choice. The clone the repo.

cd /path/to/your/dir
git clone https://github.com/devosu/event-feed-project.git
```

### 2. Install dev dependencies

```sh
npm install
```

### 3. Run the project as dev

```sh
# The dev server should be accessible at: 
# http://localhost:3000
npm run dev
```

### 4. Perform auto-code review and testing

```sh
# This will re-format your code to the team standard.
npm run review
```
