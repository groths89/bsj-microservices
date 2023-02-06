const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};
const comments = {};

const handleEvents = () => {
    if (type === 'PostCreated') {
        const { id, content } = data;

        posts[id] = { id, content, comments: [] }
    }

    if (type === 'CommentCreated') {
        const {id, content, postId, status} = data;

        const post = posts[postId];

        post.comments.push({ id, content, status });
    }

    if (type === 'CommentUpdated') {
        const {id, content, postId, status} = data;

        const post = posts[postId];
        const comment = post.comments.find(comment => {
            return comment.id === id;
        });

        comment.status = status;
        comment.content = content;
    }
};

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/events', (req, res) => {
    const { type, data } = req.body;
    handleEvents(type, data);
    res.send({});
});

app.listen(4002, async () => {
    console.log('Listening on Port 4002');
    try {
        await axios.get('http://localhost:4005/events')

        for (let event of res.data) {
            console.log('Processing Event: ', event.type);

            handleEvents(event.type, event.data);
        }
    } catch (error) {
        console.log('Error: ', error);
    }
});