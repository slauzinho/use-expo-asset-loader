[![PRs Welcome][prs-badge]][prs]
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![Build Status][build-badge]][build]
[![MIT License][license-badge]][license]

[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]

# 🎣 @kevinwolf/use-expo-asset-loader

React Hook to load and cache assets when using Expo

## The problem

[Caching assets in Expo](https://docs.expo.io/versions/latest/guides/preloading-and-caching-assets/) can be a little verbose and repetitive task if you maintain more than one project at the same time.

## This solution

This package export a single hook that abstracts the process of preloading and caching the assetts you need on your Expo application.

## Installation

This package is distributed via NPM. Install it as a dependency on your project.

```sh
yarn add @kevinwolf/use-expo-asset-loader
```

> **IMPORTANT**: Make sure you have installed `react@>=16.8.0` to use React Hooks.

## Usage

```javascript
import React from "react";
import { ScrollView, Text, Image } from "react-native";
import { AppLoading } from "expo";
import useExpoAssetLoader from "@kevinwolf/use-expo-asset-loader";

const images = [
  require("./assets/images/local-image.png"),
  "https://images.pexels.com/photos/2157841/pexels-photo-2157841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/2108227/pexels-photo-2108227.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  "https://images.pexels.com/photos/2123337/pexels-photo-2123337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
];

const fonts = {
  roboto: require("./assets/fonts/roboto.ttf")
};

export default function App() {
  const assetLoader = useExpoAssetLoader({ images, fonts });

  if (!assetLoader.isReady) {
    return <AppLoading {...assetLoader.getAppLoadingProps()} />;
  }

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="always"
      contentContainerStyle={{ alignItems: "center", paddingVertical: 20 }}
    >
      <Text style={{ fontFamily: "roboto" }}>Images</Text>
      {images.map(image => (
        <Image
          key={image}
          source={typeof image === "string" ? { uri: image } : image}
          style={{ height: 200, marginTop: 20, width: "100%" }}
        />
      ))}
    </ScrollView>
  );
}
```

[build-badge]: https://img.shields.io/travis/kevinwolfcr/use-expo-asset-loader.svg?style=flat-square
[build]: https://travis-ci.org/kevinwolfcr/use-expo-asset-loader

<!-- [coverage-badge]: https://img.shields.io/codecov/c/github/kevinwolfcr/use-expo-asset-loader.svg?style=flat-square
[coverage]: https://codecov.io/github/kevinwolfcr/use-expo-asset-loader -->

[version-badge]: https://img.shields.io/npm/v/@kevinwolf/use-expo-asset-loader.svg?style=flat-square
[package]: https://www.npmjs.com/package/@kevinwolf/use-expo-asset-loader
[downloads-badge]: https://img.shields.io/npm/dm/@kevinwolf/use-expo-asset-loader.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/@kevinwolf/use-expo-asset-loader
[license-badge]: https://img.shields.io/npm/l/@kevinwolf/use-expo-asset-loader.svg?style=flat-square
[license]: https://github.com/kevinwolfcr/expo-enable-hooks/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://kevinwolf.me"><img src="https://avatars2.githubusercontent.com/u/3157426?v=4" width="100px;" alt="Kevin Wolf"/><br /><sub><b>Kevin Wolf</b></sub></a><br /><a href="https://github.com/kevinwolfcr/use-expo-asset-loader/commits?author=kevinwolfcr" title="Code">💻</a> <a href="https://github.com/kevinwolfcr/use-expo-asset-loader/commits?author=kevinwolfcr" title="Documentation">📖</a> <a href="#infra-kevinwolfcr" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

If you have any question, suggestion or recommendation, please [open an issue](/issues/new) about it.

If you decided you want to introduce something to the project, please read the [contribution guidelines](/contributing.md) first.

## License

[MIT](/LICENSE)
