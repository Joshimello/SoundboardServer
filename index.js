/*
Josh was here :3
Joshimello/node-soundboard
*/
const path = require('path')
const http = require('http')
const fs = require('fs')
const express = require('express')
const chokidar = require('chokidar')
const multer = require('multer')

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

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/sounds/')
    },
  
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
});

const upload = multer({
	storage: storage,

	fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname);
        if(ext !== '.mp3') {
            return callback(new Error('only mp3 allowed'))
        }
        callback(null, true)
    },
})

app.post('/upload', upload.array('files'), (req, res) => {
    res.json({ message: 'Successfully uploaded files' })
})

const PORT = 3001 || process.env.PORT

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))