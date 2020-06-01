// recipe list response

const defaultProcessImage = 'http://52.79.233.236:3000/amuyori.png'; 
// 레시피 이름 DB에서 꺼내오기. 일단은 샘플 데이터로 한다
const ingredients =
  '주재료\n 고등어 200g(1/2마리), 미나리 e20g, 대파 40g(1개),파기름 45g(3큰술), 홍고추 5g(1/2개), 레몬(껍질) 5g(1작은술), 생강 2g(1/2작은술), 식초 5g(1작은술), 다진 마늘 5g(1작은술) \n\n소스\n 양조간장 15g(1큰술), 다시마 5g, 생강즙 2g(1/2작은술), 다진 마늘 2g(1/2작은술), 다진 청양고추 20g(1⅓큰술),레몬(즙) 10g(2작은술), 식초 15g(1큰술), 설탕 10g(2작은술), 후춧가루 1g 장식 시금치 40g, 방울토마토 40g(1/4개)';

const process = [
  '1. 양조간장과 물을 넣어 끓인 후 불은 끄고 다시마를 넣어 우리고 식초, 설탕,레몬즙, 생강즙, 다진 마늘, 후춧가루, 다진 청양고추를 넣어 소스를 만든다.a',
  '2. 미나리는 줄기 부분을 4cm길이로 잘라 식초를 넣은 물에 담근다.	',
  '3. 대파, 생강, 홍고추, 레몬껍질은 채 썰어 물에 담가두고, 시금치는 뿌리를 손질하고, 방울토마토는 반으로 자른다.',
  '4. 고등어는 세장 뜨기로 살을 발라낸 후 가시와 껍질을 제거하고 어슷하게 2등분해 생강즙과 술, 레몬즙으로 재워둔다.b',
  '	5. 찜통에 김이 나면 고등어, 파, 생강편을 올리고 5분 찐다.',
  '6. 팬에 기름을 두르고 다진 마늘과 시금치를 넣어 볶고, 방울토마토는 팬에 익힌다.c',
  '7. 파 기름을 높은 온도로 올려 쪄낸 고등어살 위에 뿌린다.',
  '8. 접시에 고등어를 놓고 그 위에 미나리 줄기를 얹은 후 다시 고등어를 얹는다.',
  '9. 고명으로 시금치와 토마토를 올리고 소스를 끼얹은 후 그 위에 파, 생강,홍고추, 레몬제스트, 미나리 잎을 섞어 소복하게 얹어 완성한다.'
];

const processImages = [
  'http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00167_1.png',
  defaultProcessImage,
  defaultProcessImage,
  'http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00167_4.png',
  defaultProcessImage,
  'http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00167_6.png',
  defaultProcessImage,
  defaultProcessImage,
  defaultProcessImage
];

const name = '고등어 찜';

const mainPhoto = 'http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00167_1.png';

class RecipeList {
  static carousel() {

    let basicCardList = [];

    basicCardList.push(
      {
        title: name,
        thumbnail: {
          imageUrl: mainPhoto,
          fixedRatio: true
        }
      }
    )

    for (let i = 0; i < process.length; i++) {
      const basicCard = {
        description: process[i],
        thumbnail: {
          imageUrl: processImages[i]
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
              text: ingredients + '가나다'
            }
          }
        ]
      }
    };

    return carousel;
  }
}

module.exports = RecipeList;