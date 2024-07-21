const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(
    cors({
      origin: "*",
    })
  );
  
  app.use(
    cors({
      methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
    })
  );
  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/proxy', (req, res) => {
  const url = 'https://aslam-aisha-dev-ed.my.salesforce.com/services/oauth2/token';
  request.post({ url, form: req.body }, (error, response, body) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.send(body);
  });
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});