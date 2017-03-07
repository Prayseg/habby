import express from 'express';
import bodyParser from 'body-parser';
import { serverPort } from '../etc/config.json';
//import * as db from './utils/database-utils';

//db.setUpConnection();

const app = express();
app.use(bodyParser.json());

app.get('/notes', (req, res) => {
    db.listNotes().then(data => res.send(data));
});

app.post('/notes', (req, res) => {
    db.createNote(req.body).then(res.send(data));
});

app.delete('/notes/:id', (req, res) => {
    db.deleteNote(req.params.id).then(res.send(data));
});

app.listen(serverPort, () => {
    console.log(`Server is up and running on the port ${serverPort}!`);
});
