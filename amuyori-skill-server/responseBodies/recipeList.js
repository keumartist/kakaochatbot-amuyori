// recipe list response

const Data = require('../data/data');

let defaultProcessImage = 'http://52.79.233.236:3000/amuyori.png';

let ingredient = '';
let manual = [];
let manualImages = [];
let recipeName = '';
let mainPhoto = '';

let recommendNames = [];
let recommendMainImg =[];

let situationName = "";

class RecipeList {

 constructor(name, column) {
    this.name = name;
    this.column = column;
  }

 recommendRecipe(fn) {
    const data = new Data(this.column, this.name);

    situationName = this.name;

    data.connectToMysql(function (rows) {
      // console.log("rows : " + rows+ " .. type : " + typeof(rows));
      if (typeof rows === undefined || Object.keys(rows).length === 0) { return }

      for (let i=0; i<rows.length; i++) {
        recommendNames.push(rows[i]['RCP_NM']);
        recommendMainImg.push(rows[i]['ATT_FILE_NO_MK']);
      }

      const carousel = RecipeList.recommendCarousel();

      fn(carousel);

      recommendNames = [];
      recommendMainImg =[];
    })
  }

  searchRecipe(fn) {

    //console.log("name : " + this.column  + "--" +  this.column=="name");
    //if (this.column === "name") { const data = new Data("name", this.name) }

    const data = new Data("name", this.name);
   //else if (this.column == "ingredient") { const data = new Data(this.column, this.name) }

    data.connectToMysql(function (rows) {
     //  console.log(rows);
     // console.log("rows : " + rows+ " .. type : " + typeof(rows));
      if (typeof rows === "undefined" || Object.keys(rows).length === 0) { return }

      const row = rows[0]
      recipeName = row['RCP_NM'];
      ingredient = row['RCP_PARTS_DTLS']
      mainPhoto = row['ATT_FILE_NO_MK']

      for (let i = 1; i < 10; i++) {
        const manualCol = "MANUAL0" + i;

        const manualImgCol = "MANUAL_IMG0" + i;

        if (row[manualCol] != "NULL" && row[manualCol] != "None" ) { manual.push(row[manualCol]); }

        if (row[manualImgCol] != "NULL" && row[manualImgCol] != "None" ) {
          manualImages.push(row[manualImgCol]);
        } else if (row[manualCol] != "NULL" && row[manualCol] != "None" ) {
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

  static recommendCarousel() {
    let basicCardList = [];

    for (let i = 0; i < recommendNames.length; i++) {
      const basicCard = {
        title: recommendNames[i],
        thumbnail: {
          imageUrl: recommendMainImg[i]
        },
        buttons: [
          {
            action: "message",
            label: "?| ~H?~K~\?~T? 보기",
            messageText: recommendNames[i],
           // blockId: "5ed65292d30dd70001af874d",
            extra : {"name": recommendNames[i] }

          }
        ]

      };
      basicCardList.push(basicCard);
    }

    const carousel = {
      version: '2.0',
      template: {
        outputs: [
          {
            simpleText: {
              text: situationName + "? " + "그?~_? ?~]? ?~Z~T리?~S??~]~D ?~T?~\?~U~X?~@"
            }
          },
          {
            carousel: {
              type: 'basicCard',
              items: basicCardList
            }
          }


        ]
      }
    };

    return carousel;

  }


  static carousel() {

    let basicCardList = [];

    const query = recipeName.replace(/\s/g, '');
    const youtubeUrl = "https://www.youtube.com/results?search_query=" + query;


   /*  const header = { "header": {
            "title": "abcd",
            "description": "adsf",
            "thumbnail": {
              "imageUrl": "http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg"
            }
          }
    }
   
    
    basicCardList.push(
      {
        title: recipeName,
        thumbnail: {
          imageUrl: mainPhoto,
          fixedRatio: true
        }
      }
    ) */

    for (let i = 0; i < manual.length; i++) {
      const basicCard = {
        description: manual[i],
        thumbnail: {
          imageUrl: manualImages[i],
          fixedRatio: true
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
              header: {
            "title": recipeName,
            "description": "?~X~F?~\??~\ ?~D~X기면?~D~\ 보거?~]?!",
            "thumbnail": {
              "imageUrl": mainPhoto
           }
          },
              items: basicCardList
            }
          },

          {
            simpleText: {
              text: ingredient
            }
          },
          {
            simpleText: {
              text: "?~X~A?~C~A?~]~D 보?|  ?~K??~\??~C~P? (?~X~A?~C~A?~]??~^~Q ?| ~H?~K~\?~T??~@ ?| ~U?~Y~U?~^~H 매칭?~P~X?~@ ?~U~J?~]~D ?~H~X ?~O~D ?~^~H?~K?)"
           }
          }
        ],

          "quickReplies": [
         {
          "action": "message",
          "label": "?~D?",
          "messageText": youtubeUrl,
         },
         {
          "action": "message",
         "label": "?~U~D?~K~H?~Z~T",
         "messageTest": "1"

          }
        ]
      }
    };

    return carousel;
  }
}

module.exports = RecipeList;
