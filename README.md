# danger-plugin-fixme

[![Build Status](https://travis-ci.org/zetaron/danger-plugin-fixme.svg?branch=master)](https://travis-ci.org/zetaron/danger-plugin-fixme)
[![npm version](https://badge.fury.io/js/danger-plugin-fixme.svg)](https://badge.fury.io/js/danger-plugin-fixme)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

> Have danger fail if she detects a FIXME annotation inside your code.

## Usage

Install:

```sh
yarn add danger-plugin-fixme --dev
```

At a glance:

```js
// dangerfile.js
import fixme from 'danger-plugin-fixme'

fixme()
```

or with custom patterns:
```js
// dangerfile.js
import fixme from 'danger-plugin-fixme'

fixme(['FIXME', 'TODO'])
```

## Changelog

See the GitHub [release history](https://github.com/zetaron/danger-plugin-fixme/releases).

## Contributing

See [CONTRIBUTING.md](contributing.md).
