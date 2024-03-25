# event-feed-project

## User Stories

```bash
Feature: View same-day/week/month... club events

  Scenario: Trevor wants to find a recycling-themed club event after class at 3pm today 
    Given Trevor has access to the Internet and some mobile device (Android/iOS)
    When Trevor opens URL https://findevents.osu.dev on his phone and applies the reclycing tag filter
    Then The website will respond with either a list of recycling events (plus details) or related events if not found

```
