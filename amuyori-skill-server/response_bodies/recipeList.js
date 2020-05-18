// recipe list response

// 레시피 이름 DB에서 꺼내오기. 일단은 샘플 데이터로 한다
const titles = ["사랑 가득 하트 김밥", "불고기 샌드위치", "스트로베리 샐러드"];
const description = ["내가 즐겨먹는 메뉴다! 한번 따라해 보거라!", "내가 정말 좋아하는 메뉴인데...특별히 추천해주도록 하지!", "아무한테나 알려주는 레시피가 아닌데...특별히 알려주겠다!"];
const label = "상세 레시피 보기";

carousel: {
  type: 'basicCard',
    items: [
      {
        title: titles[0],
        description: description[0],
        thumbnail: {
          imageUrl:
            'http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg'
        },
        buttons: [
          {
            action: 'message',
            label: label,
            messageText: '???'
          }
        ]
      },
      {
        title: titles[1],
        description: description[1],
        thumbnail: {
          imageUrl:
            'http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg'
        },
        buttons: [
          {
            action: 'message',
            label: label,
            messageText: '짜잔! 우리가 찾던 보물입니다'
          },
          {
            action: 'webLink',
            label: label,
            webLinkUrl: 'https://e.kakao.com/t/hello-ryan'
          }
        ]
      },
      {
        title: titles[2],
        description: description[2],
        thumbnail: {
          imageUrl:
            'http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg'
        },
        buttons: [
          {
            action: 'message',
            label: label,
            messageText: '짜잔! 우리가 찾던 보물입니다'
          },
          {
            action: 'webLink',
            label: label,
            webLinkUrl: 'https://e.kakao.com/t/hello-ryan'
          }
        ]
      }
    ]
}
