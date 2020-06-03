// recipe list response

const Data = require('../data/data');

let defaultProcessImage = 'http://52.79.233.236:3000/amuyori.png';

let ingredient = '';
let manual = [];
let manualImages = [];
let recipeName = '';
let mainPhoto = '';

class RecipeList {

  constructor(name) {
    this.name = name;
  }

  searchRecipe(fn) {
    const data = new Data("search", this.name);

    data.connectToMysql(function (rows) {

      const row = rows[0]
      recipeName = row['RCP_NM'];
      ingredient = row['RCP_PARTS_DTLS']
      mainPhoto = row['ATT_FILE_NO_MK']

      for (let i = 1; i < 10; i++) {
        const manualCol = "MANUAL0" + i;

        const manualImgCol = "MANUAL_IMG0" + i;

        manual.push(row[manualCol]);

        if (row[manualImgCol] != "NULL") {
          manualImages.push(row[manualImgCol]);
        } else if (manual[i]) {
          manualImages.push(defaultProcessImage);
        }
      }

      const carousel = RecipeList.carousel();

      fn(carousel);
      ingredient = '';
      manual = [];
      manualImages = [];
      recipeName = '';
      mainPhoto = '';
    })
  }

  static carousel() {

    let basicCardList = [];

    basicCardList.push(
      {
        title: recipeName,
        thumbnail: {
          imageUrl: mainPhoto,
          fixedRatio: true
        }
      }
    )

    for (let i = 0; i < manual.length; i++) {
      const basicCard = {
        description: manual[i],
        thumbnail: {
          imageUrl: manualImages[i]
        }
      };
      basicCardList.push(basicCard);
    }

    const carousel = {
      version: '2.0',
      template: {
        outputs: [
          {
            carousel: {
              type: 'basicCard',
              items: basicCardList
            }
          },

          {
            simpleText: {
              text: ingredient
            }
          }
        ]
      }
    };

    return carousel;
  }
}

module.exports = RecipeList;
