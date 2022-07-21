# node-soundboard
A soundboard that allows users to add sounds dynamically.

## Demo
Check [Demo](https://joshimello.github.io/node-soundboard/)

## Features
- Click and sound plays.
- Grabs sounds in directory every refresh.
- Auto refreshs on upload.
- Uploads limited to mp3 format by default.

**Frontend**
- Extreamly simple responsive design built using [Skeleton Framework](https://github.com/skeleton-framework/skeleton-framework).
- [JQuery](https://github.com/jquery/jquery) to dynamically load content.

**Backend**
- [Node.js](https://github.com/nodejs/node) & [Express](https://github.com/expressjs/express) as base web framework.
- Watch & grab files using [Chokidar](https://github.com/paulmillr/chokidar).
- File upload written with [Multer](https://github.com/expressjs/multer).

## Usage
Make sure you have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com) installed.

1. Clone or Download the repository.

	```
	$ git clone https://github.com/Joshimello/node-soundboard.git
	$ cd node-soundboard
	```
2. Install Dependencies.

	```
	$ npm install
	```
3. Start the application.

	```
	$ npm start
	```
4. Optionally change the port or upload rules, app runs at [localhost:3001](localhost:3001) by default.

## Contribute
Creating new issues, pull requests are always welcomed!  
Of course reading this already makes me happy enough. x)