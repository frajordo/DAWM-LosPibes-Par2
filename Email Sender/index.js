const express = require('express')
const nodeMailer = require('nodemailer')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

const port = 3003;

app.use(cors({
    origin: '*',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept'],
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    optionsSuccessStatus: 200 
  }));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.post('/send-email', function (req, res) {
  let transporter = nodeMailer.createTransport({
      host: "smtp-mail.outlook.com", 
      secureConnection: false,
      port: 587,
      tls: {
        ciphers:'SSLv3'
     },
      auth: {
          user: 'lospibesDAWM@hotmail.com',
          pass: 'lospibes12345'
      }
  });
  let mailOptions = {
      from: '"User" <lospibesDAWM@hotmail.com>', // sender address
      to: 'lospibesDAWM@hotmail.com', // list of receivers
      subject: req.body.subject, // Subject line
      text: req.body.body, // plain text body
      html: req.body.html // html body
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.sendStatus(500);
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
    res.sendStatus(200);
    });
});
app.listen(port, function () {
    console.log(`🚀 Server ready at http://localhost:${port}`);
  
  });