# Horoscope App

**Powered By:**

<img width="100" alt="rapid_api" src="https://user-images.githubusercontent.com/32971892/205967268-7eead88a-b6bd-45ab-b0c8-45321ef91c52.png">

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

This App provides horoscope info for sun signs such as Lucky Number, Lucky Color, Mood, Color, Compatibility with other sun signs, description of a sign for that day, etc.

## Design Diagram
<img width="400" alt="design_diagram" src="https://user-images.githubusercontent.com/32971892/205996503-57292df8-63a6-4c23-9830-92a2498b9998.png">


## Installation

Horoscope App requires [Node.js](https://nodejs.org/) to run

Install the dependencies and devDependencies and start the server.

```sh
cd server
npm i
node run serve
```

The server will start in port `7777`

Similarly navigate to the client directory. It should have a README file with how to start the React App.

## Code formatting

If you are using VS Code install Prettier from the Marketplace. However, if you are using IntelliJ or WebStorm download it from the Plugin store.

VS Code required additional setup. First navigate to the root of the directory and follow the steps below:

```sh
mkdir .vscode
cd .vscode
touch settings.json
```

Then open the `settings.json` file you created above and paste the following json settings.

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.formatOnSave": true,
    "editor.formatOnPaste": true
  },
  "[markdown]": {
    "editor.formatOnSave": true,
    "editor.wordWrap": "on",
    "editor.renderWhitespace": "all",
    "editor.acceptSuggestionOnEnter": "off"
  },
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "prettier.jsxSingleQuote": true,
  "prettier.singleQuote": true
}
```
