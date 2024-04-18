---
title: CICD Auto-Issue {{ date | date("MMM Do at HH mm ss") }}
assignees: KemingHe
labels: bug, CICD
---
Hi there,

A CICD workflow failed on branch: {{ github.event.workflow_run.head_branch }}. 

Here are more details:

- Workflow: {{ github.event.workflow_run.name }}
- Run: {{ github.event.workflow_run.html_url }}
- Date: {{ github.event.workflow_run.created_at }}
- Commit: {{ github.event.workflow_run.head_commit.url }}
- Commit message: {{ github.event.workflow_run.head_commit.message }}
- Author: {{ github.event.workflow_run.head_commit.author.name }} ({{ github.event.workflow_run.head_commit.author.email }})

Please investigate and fix as soon as you can. Reach out if you need help.

Best,
Keming He and GitHub Actions
