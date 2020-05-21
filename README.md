## 카카오 챗봇 스킬 서버 만들기 (nodejs + expressjs)
#### 환경 만들기(터미널 명령어)
  * `nvm install —lts` (node version manager 설치. lts = long term support )
  * `mkdir skill-server-example`
  * `npm init` (폴더 안에 nodejs 패키지 설치)
  * `npm i -save express` (package.json에 dependeny 추가. expressjs : 웹 프레임워크)
  * `npm i —save morgan body-parser` (morgan : 로깅 담당 & body-parser : 요청의 body 추출)
#### index.js에 기본적인 express 설정하기
```javascript
const express = require('express');
const app = express(); // api 서버 인스턴스
const logger = require('morgan');
const bodyParser = require('body-parser');

const apiRouter = express.Router();

app.use(logger('dev', {}));
app.use(bodyParser.json());
app.use('/api', apiRouter); // api/** 로 시작하는 모든 요청은 apiRouter에게 전달
```
#### api 서버에 두 개의 엔드포인트 추가 -  ‘/api/recipe’, ‘/api/dishImage
```javascript
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
```
#### express app을 특정 포트로 실행하도록 listen method 추가
```javascript
app.listen(3000, function() {
  console.log('Example skill server listening on port 3000!');
});
```
#### 터미널에서 node 명령어를 통해 스킬 서버 실행
  * `node index.js`

#### 터미널에서 curl 명령어를 통해 서버에 요청 보내기
  * `curl http://localhost:3000/api/recipe \         
-X POST \                            
-H "Content-type: application/json" \    
-d '{"key1": "value1", "key2": "value2"}'
`

#### 실제 서비스에선 curl을 통해서 보내던 요청을 카카오 봇 시스템이 수행. 그리고 실행 결과를 토대로 출력 모양을 결정
___
## 스킬 데이터 만들기 
### 응답 타입별 JSON 포맷 
https://i.kakao.com/docs/skill-response-format#carousel

#### CarouselHeader 
|필드명|타입|필수 여부|설명|
|-|-|-|-|
|title|string|O|최대 2줄(기기에 따라 한 줄 당 글자 수 상이)|
|description|string|O|최대 3줄(기기에 따라 한 줄 당 글자 수 상이)|
|thumbnail|Thumbnail|O|imageUrl 값만 지원|

#### Carousel 
|필드명|타입|필수 여부|설명|
|-|-|-|-|
|type|string|O|basicCard 또는 commerceCard|
|items|`Array<BasicCard>, Array<CommerceCard>`|O|최대 10개|
|header|CarouselHeader|X|CommerceCard만 지원하고 추후 BasicCard 지원 예정|

#### Thumbnail
|필드명|타입|필수 여부|설명|
|-|-|-|-|
|imageUrl|string|O|이미지 url|
|link|Link|X|이미지 클릭시 작동하는 링크|
|fixedRatio|boolean|X|true : 이미지 영역을 1:1 비율로 두고 이미지의 원본 비율을 유지합니다. 이미지가 없는 영역은 흰색으로 노출. false : 이미지 영역을 2:1 비율로 두고 이미지의 가운데를 크롭하여 노출. 기본값 : false|
|width|int|O|fixedRatio를 true로 설정할 경우 필요한 값. 실제 이미지 사이즈와 다른 값일 경우 원본이미지와 다르게 표현될 수 있음|
|height|int|O|fixedRatio를 true로 설정할 경우 필요한 값. 실제 이미지 사이즈와 다른 값일 경우 원본이미지와 다르게 표현될 수 있음|

#### Carousel 예제 코드
```javascript
{
  "version": "2.0",
  "template": {
    "outputs": [
      {
        "carousel": {
          "type": "basicCard",
          "items": [
            {
              "title": "보물상자",
              "description": "보물상자 안에는 뭐가 있을까",
              "thumbnail": {
                "imageUrl": "http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg"
              },
              "buttons": [
                {
                  "action": "message",
                  "label": "열어보기",
                  "messageText": "짜잔! 우리가 찾던 보물입니다"
                },
                {
                  "action":  "webLink",
                  "label": "구경하기",
                  "webLinkUrl": "https://e.kakao.com/t/hello-ryan"
                }
              ]
            },
            {
              "title": "보물상자3",
              "description": "보물상자3 안에는 뭐가 있을까",
              "thumbnail": {
                "imageUrl": "http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg"
              },
              "buttons": [
                {
                  "action": "message",
                  "label": "열어보기",
                  "messageText": "짜잔! 우리가 찾던 보물입니다"
                },
                {
                  "action":  "webLink",
                  "label": "구경하기",
                  "webLinkUrl": "https://e.kakao.com/t/hello-ryan"
                }
              ]
            }
          ]
        }
      }
    ]
  }
}
```