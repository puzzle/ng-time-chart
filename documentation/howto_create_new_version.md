How to publish a new version
===

## Prepare the release on GitHub
1. Set version number in package files:
    - package.json
    - package-lock.json
    - projects/ng-time-chart/package.json
2. Commit the updated version numbers `git commit -m "prepare release" package.json package-lock.json projects/ng-time-chart/package.json`
3. Tag the new version `git tag v0.5.NN -m "v0.5.NN"`
4. Push the new version `git push origin master --tags`

## Publish to NPM
1. Log into npm `npm login`, using credentials from cryptopus
2. Publish new version `npm publish`

## Prepare the next version
1. Increase the version number in package files and add the SNAPSHOT-suffix:
    - package.json
    - package-lock.json
    - projects/ng-time-chart/package.json
2. Commit the updated version numbers `git commit -m "prepare release" package.json package-lock.json projects/ng-time-chart/package.json`
3. Push the new version `git push origin master`
