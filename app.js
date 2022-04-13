const express = require('express');
const app = express();
const upload = require('express-fileupload');
const routes = [require('./routes/nav.js'), require('./routes/users.js')];

app.use(upload());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('./public'));
app.use(routes);

const port = process.env.PORT || 3000;

(async () => {
  try {
    app.listen(port, () => console.log(`Listening on http://localhost:${port}`))
  } catch (error) { console.log(error) }
})()