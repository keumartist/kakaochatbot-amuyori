const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');

const RecipeList = require('./responseBodies/recipeList');
const allRecipes = require('./htmlElements/allRecipes');

const apiRouter = express.Router();
app.use(logger('dev', {}));
app.use(bodyParser.json());
app.use('/api', apiRouter);

app.use(express.static('images'));

apiRouter.get('/allRecipes', function (req, res) {
  const rs = allRecipes;
  res.status(200).send(rs);
});

apiRouter.post('/recipeRecommend', function (req, res) {

  const tastes = ["매?~Z? ?~[", "?~K?백?~U~\ ?~[", "?~K? ?~[", "?~C~H콤?~U~\ ?~[", "기?~D?~D ?~["];
  /*  const situations = {
    "?~T??~A??~K~I?~[??~O" : "?~T??~A??~K~I",
    "?~Y~H?~L~L?~K??~_~M?" : "?~Y~H?~L~L?~K?",
    "?~D ?~X? ?~U~L?~X~T" : "?~D ?~X? ?~U~L",
    "?~M~T?~Z? ?~U~L?~_??" : "?~M~T?~Z? ?~U~L", 
    "?~S| ?~S| ?~U~X?~L!?~_~P?" : "?~S| ?~S| ?~U~X?~L",
    "?~D?~K??~U~X?~L!?~_?~W" : "?~D?~K??~U~X?~L",
    "?~U??~^??~_??" : "?~U??~^?"
  } */
  const situations = {
  "?~T??~A??~K~I?~[??~O" : "?~T??~A??~K~I",
  "?~Y~H?~L~L?~K??~_~M?" : "?~Y~H?~L~L?~K?",
  "?~D ?~X? ?~U~L?~X~T?~O" : "?~D ?~X? ?~U~L",
  "?~M~T?~Z? ?~U~L?~_??" : "?~M~T?~Z? ?~U~L",
  "?~S| ?~S| ?~U~X?~L!?~_~P?" : "?~S| ?~S| ?~U~X?~L",
  "?~D?~K??~U~X?~L!?~_?~W" : "?~D?~K??~U~X?~L",
  "?~U??~^??~_??" : "?~U??~^?"
}

  const keys = Object.keys(situations);

 // const situation = req.body.userRequest.utterance; 
  const situation = req.body.action.params.situation;
  const taste = req.body.action.params.taste;
 //  console.log("params: " + JSON.stringify(req.body.action.params));
 //  console.log("taste: " + JSON.stringify(req.body.action.params.taste) == "undefined");
  const ingredient = req.body.action.params.ingredient;
 //  console.log("ingredient : " + ingredient);
 //  console.log(typeof ingredient === "undefined");
 //  console.log(ingredient); 
 //  console.log(JSON.stringify(req.body));

  if (keys.includes(situation)) {

  const sit = situations[situation];

  const recipeList = new RecipeList(sit, "SITUATION");
    recipeList.recommendRecipe(function(carousel) {
    // console.log("결과 : " + carousel);
      res.status(200).send(carousel)
    })
  } else if (tastes.includes(taste)) {

    const recipeList = new RecipeList(taste, "TASTE");
    recipeList.recommendRecipe(function(carousel) {
    res.status(200).send(carousel);
  })

 } else if (typeof ingredient !== "undefined") {

    const recipeList = new RecipeList(ingredient, "INGREDIENT");
    recipeList.recommendRecipe(function(carousel) {
    res.status(200).send(carousel);
  })
 }


});

apiRouter.post('/recipeCarousel', function (req, res) {
  const name = req.body.action.params.name;
  // console.log("req : " + JSON.stringify(name));
  // console.log("name != undefined : " + typeof name != "undefined");
  // const nameFromRecommend = req.body.action.clientExtra.name;
  //console.log("extra name : " + nameFromRecommend);
   if (typeof name !== "undefined") {
     const recipeList = new RecipeList(name, "name");
    recipeList.searchRecipe(function(carousel) {
    // console.log("결과 : " + carousel);
      res.status(200).send(carousel)
    })
   } else { res.status(200).send() }

});
app.listen(3000, function () {
  console.log('Example skill server listening on port 3000!');
});