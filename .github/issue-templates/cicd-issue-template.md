---
title: CICD Auto-Issue {{ date | date('MMM Do at HH:mm:ss') }}
assignees: KemingHe
projects: 'DEV Event Feed Product Launch'
labels: bug, CICD
---
Hi there,

A CICD workflow failed on branch: {{ tools.context.ref }}. 

Here are more details:

- Workflow: {{ tools.context.workflow }}
- Author: {{ tools.context.actor }}

The full `tools.context.payload` content is listed below:

{{ tools.context.payload }}

{{ payload.sender }}

{{ payload.sender.login }}


Please investigate and fix as soon as you can. Reach out if you need help.

Best,
Keming He and GitHub Actions
