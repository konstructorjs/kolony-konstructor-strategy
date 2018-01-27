<p align="center"><a href="https://konstructor.js.org" target="_blank"><img width="100"src="https://konstructor.js.org/assets/static/images/konstructor.png"></a></p>
<p align="center">
  <a href="https://travis-ci.org/konstructorjs/kolony-konstructor-strategy"><img src="https://img.shields.io/travis/konstructorjs/kolony-konstructor-strategy.svg" alt="Build Status"></a>
</p>

# kolony-konstructor-strategy - a strategy for deploying konstructor applications with kolony
kolony-konstructor-strategy makes deploying your  [konstructor](https://github.com/konstructorjs/konstructor) app with kolony super simple.

## Getting Started

### Requirements
- `node >= 6`
- `npm >= 4`

### Installation
To use this, simply create a new app in kolony with this as the buildpack.
```
kolony apps:create --strategy https://github.com/konstructorjs/kolony-konstructor-strategy
```

Once it has been created, simply push and enjoy!
