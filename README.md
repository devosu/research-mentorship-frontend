# Event Feed Project

## How to Contribute
---
### 0. Install Node
Go to this [link](https://nodejs.org/en/) and click on the **Download Node.js LTS** button.

### 1. Clone the Repo
Download the code for the project.
```sh
# Open a terminal and navigate to the directory where you want to clone the repository
cd /path/to/directory

# Clone the repo using git
git clone https://github.com/devosu/event-feed-project.git
```

### 2. Install Dependencies

```sh
npm i
```

### 3. Run the Project!

```sh
npm start
```

## User Stories
---
```bash
Feature: View same-day/week/month... club events

  Scenario: Trevor wants to find a recycling-themed club event after class at 3pm today 
    Given Trevor has access to the Internet and some mobile device (Android/iOS)
    When Trevor opens URL https://findevents.osu.dev on his phone and applies the reclycing tag filter
    Then The website will respond with either a list of recycling events (plus details) or related events if not found

```
