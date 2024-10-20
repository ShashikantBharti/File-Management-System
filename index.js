const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (_, res) => {
  fs.readdir(`./files`, (err, files) => {
    console.log('All files are Fetched!');
    res.render('index', { files });
  });
});

app.post('/create', (req, res) => {
  const { title, description } = req.body;
  const fileName = title.replace(/\s+/g, '_');
  fs.writeFile(`./files/${fileName}.txt`, description, (err) => {
    console.log('New File Created.');
    res.redirect('/');
  });
});

app.get('/file/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  fs.readFile(`./files/${fileName}`, 'utf8', (err, data) => {
    console.log('File is getting read...');
    res.render('details', { fileName: fileName, data });
  });
});

app.get('/edit/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  fs.readFile(`./files/${fileName}`, 'utf8', (err, data) => {
    console.log('File is getting changed...');
    res.render('edit', { fileName: fileName, data });
  });
});

app.post('/update', (req, res) => {
  const { title, oldTitle, description } = req.body;

  const fileName = title.replace(/\s+/g, '_') + '.txt';
  if (!(oldTitle === fileName)) {
    fs.unlink(`./files/${oldTitle}`, () => {
      console.log('Old File Deleted.');
    });
  }
  fs.writeFile(`./files/${fileName}`, description, (err) => {
    console.log('Changes Saved.');
    res.redirect('/');
  });
});

app.get('/delete/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  fs.unlink(`./files/${fileName}`, () => {
    console.log('File Deleted');
    res.redirect('/');
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
