# Horoscope App

**Powered By:**

<img width="100" alt="rapid_api" src="https://user-images.githubusercontent.com/32971892/205967268-7eead88a-b6bd-45ab-b0c8-45321ef91c52.png">

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

This App provides horoscope information for sun signs such as Lucky Number, Lucky Color, Mood, Color, Compatibility with other sun signs, description of a sign for that day, etc.

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

### Visual Studio Code

If you are using VS Code install Prettier from the Marketplace. However, if you are using IntelliJ or WebStorm download it from the Plugin store.

VS Code required additional setup. First navigate to the root of the directory and follow the steps below:

```shell
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

Additionally, you need to create a file named `.prettierrc ` in both the `client` and `server` directories. 

```shell
cd client 
touch .prettierrc
```

Similarly do the same thing in the `server` directory. Then paste this snippet into the file. 

```json
{
    "singleQuote": true,
    "printWidth": 200,
    "proseWrap": "always",
    "tabWidth": 4,
    "useTabs": false,
    "trailingComma": "none",
    "bracketSpacing": true,
    "jsxBracketSameLine": false,
    "semi": true
}
```

### WebStorm 

Code formatting in WebStorm is more straight-forward. It usually comes with `prettier` plugin installed. All you have 
to do is navigate to `client` directory and install `prettier` package. 

```shell
cd client 
npm install --save-dev --save-exact prettier
```

WebStorm automatically detects the installed package. Just follow these remaining few steps. 

1. In the **Settings/Preferences** dialog (`⌘`), go to **Languages & Frameworks | JavaScript | Prettier**.
2. From the Prettier package list, select the prettier installation to use.
> Note: If you followed the standard installation procedure, WebStorm locates the prettier package itself and the field 
> is filled in automatically.
3. To run Prettier automatically against specific files, open the **Settings/Preferences** dialog (`⌘`), 
go to **Languages & Frameworks | JavaScript | Prettier**, and use the **On code reformatting** and **On save** checkboxes 
to specify the actions that will trigger Prettier.

