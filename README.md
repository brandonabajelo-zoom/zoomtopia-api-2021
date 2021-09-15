# Zoomtopia-api-2021

Used in conjuction with [Zoomtopia UI 2021](https://github.com/brandonabajelo-zoom/zoomtopia-ui-2021) for Zoomtopia Session: How To Use Meeting SDKs To Integrate Zoom Meetings Into Your Application.

## Installation

`git clone https://github.com/brandonabajelo-zoom/zoomtopia-api-2021.git`

## Setup

1. Enter project directory

`cd zoomtopia-api-2021`

2. Install dependencies

`npm install` or `yarn install`

3.  In the root directory of the project, create a `.env` file where you will store your relevant keys and variables. This file should also be added to your `.gitignore` file so your keys are not exposed to github

`touch .env`

4. Inside this `.env` file, provide the following keys.

`API_KEY=xxxxx` [Api Key Generation](https://marketplace.zoom.us/develop/create)

`API_SECRET=xxxxx` [Api Secret Generation](https://marketplace.zoom.us/develop/create)

5. Run development server on port 5000

`npm run dev`
