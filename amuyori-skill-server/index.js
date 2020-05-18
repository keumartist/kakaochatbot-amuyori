const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');

const apiRouter = express.Router();

app.use(logger('dev', {}));
app.use(bodyParser.json());
app.use('/api', apiRouter);

apiRouter.post('/recipe', function(req, res) {
  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: "Shashlik recipe"
          }
        }
      ]
    }
  };

  res.status(200).send(responseBody); // 200 : OK. 요청이 성공했음을 의미
});

apiRouter.post('/dishImage', function(req, res) {
  console.log(req.body);

  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleImage: {
            imageUrl: "https://t1.daumcdn.net/friends/prod/category/M001_friends_ryan2.jpg",
            altText: "dish image"
          }
        }
      ]
    }
  };

  res.status(200).send(responseBody);
});

app.listen(3000, function() {
  console.log('Example skill server listening on port 3000!');
});