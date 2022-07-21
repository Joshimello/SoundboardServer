const path = require('path')
const http = require('http')
const fs = require('fs')
const express = require('express')
const chokidar = require('chokidar')

const app = express()
const server = http.createServer(app)

app.use(express.static(path.join(__dirname, 'public')))

sounds_folder = path.join(__dirname, 'public', 'sounds/')
const watcher = chokidar.watch(sounds_folder, {
    persistent: true
})

sounds = []

watcher.on('add', path => {
	sounds.push(path.replace(sounds_folder, ''))
}).on('unlink', path => {
	const index = sounds.indexOf(path.replace(sounds_folder, ''))
	if (index > -1) {
		sounds.splice(index, 1)
	}
})

app.get('/data', (req, res) => {
    res.json(sounds); 
})

const PORT = 3001 || process.env.PORT

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))