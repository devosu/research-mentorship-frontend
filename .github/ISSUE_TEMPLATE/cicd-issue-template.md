---
title: 'CICD Failure Auto-Issue on {{ date | date("ddd, MMM Do at HH mm ss") }}'
assignees: 
  - 'KemingHe'
  - '{{ github.event.workflow_run.head_commit.author.name }}'
labels: 
  - 'bug'
  - 'CICD'
---

# The CI workflow failed on the branch: {{ github.event.workflow_run.head_branch }}. 

- Workflow: {{ github.event.workflow_run.name }}
- Run: {{ github.event.workflow_run.html_url }}
- Commit: {{ github.event.workflow_run.head_commit.url }}
- Commit message: {{ github.event.workflow_run.head_commit.message }}
- Author: {{ github.event.workflow_run.head_commit.author.name }} ({{ github.event.workflow_run.head_commit.author.email }})

Please investigate and fix as soon as you can. Reach out if you need help.

Best,
GitHub
