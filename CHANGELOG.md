# Changelog

## 1.0.0 (2024-06-16)


### ⚠ BREAKING CHANGES

* **src/config/firebaseinit.ts:** Frontend app will no longer connect directly to insecure Firestore database, this
functionality will be done through the backend.

### Features

* **.github/workflows/deploy-gcp.yml:** preview deploy url is not auto-commented to PR to main ([f02b13b](https://github.com/devosu/research-mentorship-frontend/commit/f02b13b65ffd0bb731940c608ebee97bf2c79b65))
* **release-it:** working on testing release-it integration ([b05f8fc](https://github.com/devosu/research-mentorship-frontend/commit/b05f8fca372bf947bdc86039ee2f9a333786e9a8))


### Bug Fixes

* **__tests__/app/api/healthcheck.test.ts:** fix 'Request not defined' jest issue ([821cbec](https://github.com/devosu/research-mentorship-frontend/commit/821cbec2aede208b8650cf0daaff6a98f047be7f))
* **.github/workflows/deply-gcp.yml:** use issue instead of PR comment for prod url ([96ec125](https://github.com/devosu/research-mentorship-frontend/commit/96ec125b44f56d457ab72378390e3585ca54a401))
* **.husky/commit-msg:** removed `\$1` to prevent no such dir error ([a701ec8](https://github.com/devosu/research-mentorship-frontend/commit/a701ec86e4ab25b62dd82267b86bd32940842bca))
* **.husky/pre-commit:** reverted changes pre-commit to resolve hook skip ([795a8d1](https://github.com/devosu/research-mentorship-frontend/commit/795a8d15cba165ce38bd453ff85fa746e4aa056d))
* **.release-it.json:** removed auto-commit by release-it ([4bc2675](https://github.com/devosu/research-mentorship-frontend/commit/4bc2675802a6f85c0bd0d8f455822ab31a855e83))
* **deploy-gcp.yml:** caught and fixed a bug where preview deployment is skipped ([30686da](https://github.com/devosu/research-mentorship-frontend/commit/30686daaa61262f38548799d9e7474247f1ea12c))
* **whole project:** fixed build and deployment issues ([1ba40ee](https://github.com/devosu/research-mentorship-frontend/commit/1ba40ee64114d441d84efe546e0d508bdbe877d6))


### Documentation

* **src/config/firebaseinit.ts:** removed all unnecessary inits except app and auth ([32a4e79](https://github.com/devosu/research-mentorship-frontend/commit/32a4e7966c1d6089e800740a4a80812d4d7e4016))
