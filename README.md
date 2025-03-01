# Figma Plugin React Template

![62862431-71537f00-bd0e-11e9-85db-d97c0fb729a4](https://user-images.githubusercontent.com/16322616/62862692-46b5f600-bd0f-11e9-93b0-75955d1de8f3.png)

This template contains the react example as shown on [Figma Docs](https://www.figma.com/plugin-docs/intro/), with some structural changes and extra tooling customized for my own needs.

## Quickstart

- Run `yarn` to install dependencies.
- Run `yarn build:watch` to start webpack in watch mode.
- Open `Figma` -> `Plugins` -> `Development` -> `Import plugin from manifest...` and choose `manifest.json` file from this repo.

⭐ To change the UI of plugin, edit [App.tsx](./src/app/components/App.tsx).  
⭐ To add workflows that interact with Figma API, edit [controller.ts](./src/plugin/controller.ts).  
⭐ To add utility functions to be called by [controller.ts](./src/plugin/controller.ts), edit [utils.ts](./src/plugin/utils.ts).  
⭐ Figma API Docs [Figma API Overview](https://www.figma.com/plugin-docs/api/api-overview/).

## Toolings

This repo is using:

- React + Webpack
- TypeScript
- Prettier precommit hook


