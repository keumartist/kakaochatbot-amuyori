const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');

const RecipeList = require('./responseBodies/recipeList');
const allRecipes = require('./htmlElements');

const apiRouter = express.Router();
app.use(logger('dev', {}));
app.use(bodyParser.json());
app.use('/api', apiRouter);

app.use(express.static('images'));

apiRouter.get('/allRecipes', function (req, res) {
  const rs = allRecipes;
  res.status(200).send(rs);
});

apiRouter.post('/recipeCarousel', function (req, res) {

  const name = req.body;
  console.log("req : " + name);
  
  const recipeList = new RecipeList("name");
  recipeList.searchRecipe(function(carousel) {
   // console.log("결과 : " + carousel);
    res.status(200).send(carousel)
  })
});
app.listen(3000, function () {
  console.log('Example skill server listening on port 3000!');
});