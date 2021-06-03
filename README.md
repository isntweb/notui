# notui
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/isntweb/notui/blob/main/LICENSE) [![npm version](https://badge.fury.io/js/%40isntweb%2Fnotui.svg)](https://badge.fury.io/js/%40isntweb%2Fnotui)

Not another UI library!

## Technical Choices
- Lerna to manage monorepo
- React-JSS to style components, following the styled-system specification for theme configuration
- Vanilla components when possible; erring on the side of minimal dependencies

## Goals
- Single source of component configuration, supporting multiple ecosystems (TypeScript, JavaScript, and Clojurescript React ecosystems).
- Follow the [styled system theme specification](https://styled-system.com/theme-specification/), providing a light and dark theme.
- Monorepo that contains basically everything needed to start a project with the toolkit aside from the framework (React, NextJS - I have no motivation to rewrite those frameworks because I still want access to the ecosystems as needed - at least not now).
- Template to use to start an application with the framework preinstalled and preconfigured, along with some other preferences I or we have for starting projects.
