const allRecipes = '<h2>고구마죽</h2>' +
  '<h2>누룽지 두부 계란죽</h2>' +
  '<h2>두부 곤약 나물 비빔밥</h2>' +
  '<h2>닭개장 비빔밥</h2>' +
  '<h2>취나물 비빔밥 & 청국장 쌈장</h2>' +
  '<h2>해물 채소장을 넣은 곰취 쌈밥</h2>' +
  '<h2>단호박 케일밥</h2>' +
  '<h2>오색영양밥 롤</h2>' +
  '<h2>새우 두부 계란찜</h2>' +
  '<h2>북엇국</h2>' +
  '<h2>두부 표고 완자탕</h2>' +
  '<h2>황태해장국</h2>' +
  '<h2>된장국</h2>' +
  '<h2>표고버섯 청경채국</h2>' +
  '<h2>치커리샐러드</h2>' +
  '<h2>구운 가지 닭가슴살 샐러드</h2>' +
  '<h2>딸기 샐러드</h2>' +
  '<h2>유자꿀드레싱을 곁들인 곤드레 단호박 크로켓 샐러드</h2>' +
  '<h2>그린 매쉬드포테이토</h2>' +
  '<h2>모과 소스를 곁들인 채소두부</h2>' +
  '<h2>버섯구이와 두부타르타르 소스</h2>' +
  '<h2>새우살 두부완자 샐러드와 매실 생강 소스</h2>' +
  '<h2>구운채소 요리</h2>' +
  '<h2>브로콜리 콜리플라워 샐러드와 두유 요거트 소스</h2>' +
  '<h2>메밀 비빔국수</h2>' +
  '<h2>약재 소스를 곁들인 닭가슴살롤</h2>' +
  '<h2>대구구이</h2>' +
  '<h2>동태살구이</h2>' +
  '<h2>곤드레도우와 레몬허니 소스 피자</h2>' +
  '<h2>청국장 실곤약 파스타</h2>' +
  '<h2>고소하고 담백한 너트국수</h2>' +
  '<h2>메밀국수</h2>' +
  '<h2>적양배추 순두부 푸딩</h2>' +
  '<h2>청포묵을 이용한 사과오렌지 젤리</h2>' +
  '<h2>당근 오렌지 주스</h2>' +
  '<h2>누룽지 요거트 파르페</h2>' +
  '<h2>짜장면</h2>' +
  '<h2>칠곡석류국수</h2>' +
  '<h2>세 가지 소스의 파스타</h2>' +
  '<h2>블랙빈 곤약국수</h2>' +
  '<h2>닭가슴살 브로콜리 만두</h2>' +
  '<h2>구운고등어 & 감자수제비 파스타</h2>' +
  '<h2>두유 파스타</h2>' +
  '<h2>김치필라프 크런치롤</h2>' +
  '<h2>굴 쌈밥</h2>' +
  '<h2>된장찌개</h2>' +
  '<h2>된장부대찌개</h2>' +
  '<h2>청국장찌개</h2>' +
  '<h2>고구마 무스 야채 말이</h2>' +
  '<h2>닭가슴살 오꼬노미야끼</h2>' +
  '<h2>제육볶음 또띠아 피자</h2>' +
  '<h2>치즈 크러스트 튜나</h2>' +
  '<h2>돼지보쌈</h2>' +
  '<h2>두부 카나페</h2>' +
  '<h2>양배추 감자전</h2>' +
  '<h2>발사믹 비네그레트를 이용한 쿠스쿠스 샐러드</h2>' +
  '<h2>찹쌀버섯탕수와 블루베리 소스</h2>' +
  '<h2>채소크로켓</h2>' +
  '<h2>삼겹살 토마토 로메스코소스</h2>' +
  '<h2>머쉬룸 치킨 브리또</h2>' +
  '<h2>우둔살 쌈</h2>' +
  '<h2>누룽지 카나페</h2>' +
  '<h2>와인두부를 이용한  치즈 요거트 카나페</h2>' +
  '<h2>돌나물 샐러드</h2>' +
  '<h2>유자 얼갈이 배추김치</h2>' +
  '<h2>전복김치</h2>' +
  '<h2>단호박 들깨 꽁치조림</h2>' +
  '<h2>카레장</h2>' +
  '<h2>동태 백김치 말이</h2>' +
  '<h2>꽈리고추 명태찜</h2>' +
  '<h2>비트 피클</h2>' +
  '<h2>석류 보쌈김치</h2>' +
  '<h2>사과진피 코다리조림</h2>' +
  '<h2>유자 대구조림</h2>' +
  '<h2>파프리카 물김치</h2>' +
  '<h2>고추장 라따뚜이</h2>' +
  '<h2>깻잎 두부 참치 말이</h2>' +
  '<h2>치즈 감자전</h2>' +
  '<h2>치킨 화이타</h2>' +
  '<h2>단호박 닭고기 들깨탕</h2>' +
  '<h2>아보카도샐러드 & 병아리콩 그라탕</h2>' +
  '<h2>두부김치버거</h2>' +
  '<h2>삼합 말이</h2>' +
  '<h2>민들레 샐러드</h2>' +
  '<h2>토마토 가지 카프레제</h2>' +
  '<h2>버섯샐러드</h2>' +
  '<h2>우렁된장소스 배추롤</h2>' +
  '<h2>인삼떡갈비</h2>' +
  '<h2>초계탕과 사색곤약</h2>' +
  '<h2>호박잎 삼계탕</h2>' +
  '<h2>황태미역 곤약스프</h2>' +
  '<h2>훈제오리 샐러드</h2>' +
  '<h2>훈제오리 구이 요리</h2>' +
  '<h2>전복찜</h2>' +
  '<h2>검은콩국수</h2>' +
  '<h2>겨자소스로 구운 산마샐러드</h2>' +
  '<h2>닭고기 김치찌개</h2>' +
  '<h2>완자 김치찌개</h2>' +
  '<h2>콩비지찌개</h2>' +
  '<h2>오징어 김치찌개</h2>' +
  '<h2>해물 김치찌개</h2>' +
  '<h2>부대찌개</h2>' +
  '<h2>나가사키 부대찌개</h2>' +
  '<h2>닭가슴살 부대찌개</h2>' +
  '<h2>쑥갓 부대찌개</h2>' +
  '<h2>들깨 순두부찌개</h2>' +
  '<h2>버섯순두부찌개</h2>' +
  '<h2>토란순두부찌개</h2>' +
  '<h2>토마토 파스타</h2>' +
  '<h2>다이어트국수</h2>' +
  '<h2>오징어구이</h2>' +
  '<h2>배숙구이</h2>' +
  '<h2>등심 스테이크</h2>' +
  '<h2>오징어콩순대</h2>' +
  '<h2>장조림</h2>' +
  '<h2>토마토 소고기찜</h2>' +
  '<h2>삼치구이</h2>' +
  '<h2>삼겹살꼬치구이</h2>' +
  '<h2>새우아욱죽</h2>' +
  '<h2>까르보나라뇨끼</h2>' +
  '<h2>호박죽</h2>' +
  '<h2>떡갈비 라이스버거</h2>' +
  '<h2>고추김치</h2>' +
  '<h2>누룽닭</h2>' +
  '<h2>광어스테이크</h2>' +
  '<h2>치즈감자크로켓</h2>' +
  '<h2>코코넛밀크 카레</h2>' +
  '<h2>소고기리조또롤</h2>' +
  '<h2>새우와스테이크</h2>' +
  '<h2>통삼겹살 구이</h2>' +
  '<h2>햄버거스테이크</h2>' +
  '<h2>유자삼치구이</h2>' +
  '<h2>냉토마토파스타</h2>' +
  '<h2>닭고기또띠아</h2>' +
  '<h2>닭고기스테이크</h2>' +
  '<h2>오징어순대</h2>' +
  '<h2>연어차우더스프</h2>' +
  '<h2>시금치브로컬리 파스타</h2>' +
  '<h2>광어스테이크</h2>' +
  '<h2>연근부각</h2>' +
  '<h2>콜라비오미자 물김치</h2>' +
  '<h2>크림소스치킨롤</h2>' +
  '<h2>표고버섯 감자찜</h2>' +
  '<h2>해물애호박 전병말이</h2>' +
  '<h2>아몬드치킨볼</h2>' +
  '<h2>생선베이컨말이</h2>' +
  '<h2>콩고기샐러드</h2>' +
  '<h2>퀴노아닭가슴살샐러드</h2>' +
  '<h2>바나나크림파스타</h2>' +
  '<h2>황태포당면국수</h2>' +
  '<h2>닭갈비볶음면</h2>' +
  '<h2>오색볶음면</h2>' +
  '<h2>로제소스라면</h2>' +
  '<h2>라면월남쌈튀김</h2>' +
  '<h2>삼겹살라면</h2>' +
  '<h2>유자샐러드라면</h2>' +
  '<h2>주꾸미머리순대</h2>' +
  '<h2>매실동치미</h2>' +
  '<h2>조기까스</h2>' +
  '<h2>파인애플볶음밥</h2>' +
  '<h2>연근초무침</h2>' +
  '<h2>코다리맑은찜</h2>' +
  '<h2>뿌리채소두부선</h2>' +
  '<h2>사과장아찌</h2>' +
  '<h2>해물들깨탕</h2>' +
  '<h2>참외깍두기</h2>' +
  '<h2>새콤한연어샐러드</h2>' +
  '<h2>논우렁순무섞박지</h2>' +
  '<h2>코다리맑은탕</h2>' +
  '<h2>애호박들깨볶음</h2>' +
  '<h2>고구마바나나샐러드</h2>' +
  '<h2>누룽지새우튀김</h2>' +
  '<h2>백김치주꾸미샐러드</h2>' +
  '<h2>닭고기월남쌈</h2>' +
  '<h2>양배추롤</h2>' +
  '<h2>단호박소고기롤</h2>' +
  '<h2>생선카레튀김</h2>' +
  '<h2>삼겹가지볶음</h2>' +
  '<h2>주꾸미샐러드</h2>' +
  '<h2>삼겹선</h2>' +
  '<h2>연어오븐구이</h2>' +
  '<h2>와사비 연어초밥</h2>' +
  '<h2>원소병</h2>' +
  '<h2>전복리조또</h2>' +
  '<h2>참깨흑임 자연두부샐러드</h2>' +
  '<h2>초계탕</h2>' +
  '<h2>콩나물부추볶음</h2>' +
  '<h2>콩비지포카치아 샌드위치</h2>' +
  '<h2>파프리카더덕소고기깻잎롤</h2>' +
  '<h2>해물아란치니</h2>' +
  '<h2>호박잎삼계</h2>' +
  '<h2>노른자크림 육회샐러드</h2>' +
  '<h2>닭고기 완자삼계죽</h2>' +
  '<h2>대하 마늘볶음밥</h2>' +
  '<h2>두부 카프레제</h2>' +
  '<h2>미역볶음밥</h2>' +
  '<h2>청국장볶음밥</h2>' +
  '<h2>해물볶음밥</h2>' +
  '<h2>토마토카레 채소볶음밥</h2>' +
  '<h2>구운주먹밥</h2>' +
  '<h2>깐풍주먹밥</h2>' +
  '<h2>닭봉주먹밥</h2>' +
  '<h2>봄주먹밥</h2>' +
  '<h2>깻잎장아찌롤</h2>' +
  '<h2>참치비빔밥롤</h2>' +
  '<h2>새싹참치김밥</h2>' +
  '<h2>연어주먹밥튀김</h2>' +
  '<h2>오징어불고기김밥</h2>' +
  '<h2>닭가슴살청포묵비빔밥</h2>' +
  '<h2>족발수육</h2>' +
  '<h2>삼색소면</h2>' +
  '<h2>돼지수육맑은전골</h2>' +
  '<h2>채소비빔밥</h2>' +
  '<h2>열무김치파스타</h2>' +
  '<h2>해초갈비찜</h2>' +
  '<h2>버섯곤드레밥</h2>' +
  '<h2>전복죽</h2>' +
  '<h2>주꾸미연포탕</h2>' +
  '<h2>함초소고기말이</h2>' +
  '<h2>근채류주먹밥</h2>' +
  '<h2>단호박약식</h2>' +
  '<h2>달콤스테이크</h2>' +
  '<h2>삼색샌드위치</h2>' +
  '<h2>황태탕수육</h2>' +
  '<h2>핫도그</h2>' +
  '<h2>스테이크카나페</h2>' +
  '<h2>꽃밥</h2>' +
  '<h2>버섯만두찜</h2>' +
  '<h2>떡갈비주먹밥</h2>' +
  '<h2>홍합죽</h2>' +
  '<h2>샐러드돈가스</h2>' +
  '<h2>조개크림파스타</h2>' +
  '<h2>닭날개튀김</h2>' +
  '<h2>해산물리조또</h2>' +
  '<h2>떡완자조림</h2>' +
  '<h2>닭고기채소스파게티</h2>' +
  '<h2>닭만두</h2>' +
  '<h2>쇠고기표고찜</h2>' +
  '<h2>떡갈비찜</h2>' +
  '<h2>해산물두부샌드</h2>' +
  '<h2>단호박제육볶음</h2>' +
  '<h2>버섯콩불고기</h2>' +
  '<h2>차돌박이볶음</h2>' +
  '<h2>토마토오리볶음</h2>' +
  '<h2>토마토두루치기</h2>' +
  '<h2>검은콩피시볼조림</h2>' +
  '<h2>대하조림</h2>' +
  '<h2>묵은지가지말이</h2>' +
  '<h2>함초타락죽</h2>' +
  '<h2>황태두부무국</h2>' +
  '<h2>삼합잡채</h2>' +
  '<h2>고등어카레탕수</h2>' +
  '<h2>효도강정</h2>' +
  '<h2>비트양파김치</h2>' +
  '<h2>관자브로콜리스프</h2>' +
  '<h2>곤약냉잡채</h2>' +
  '<h2>미역 닭가슴살전</h2>' +
  '<h2>두가지묵샐러드</h2>' +
  '<h2>블루베리양갱</h2>' +
  '<h2>장어찜</h2>' +
  '<h2>두부까나페</h2>' +
  '<h2>두부청국장죽</h2>' +
  '<h2>망고샐러드</h2>' +
  '<h2>토마토젤리</h2>' +
  '<h2>닭가슴살 샌드 스테이크</h2>' +
  '<h2>맥적구이</h2>' +
  '<h2>채소어묵</h2>' +
  '<h2>주꾸미보리죽</h2>' +
  '<h2>오렌지삼겹찜</h2>' +
  '<h2>소고기볼게살타르</h2>' +
  '<h2>밥크로켓</h2>' +
  '<h2>가지토마토구이</h2>' +
  '<h2>함박스테이크</h2>' +
  '<h2>냉파스타</h2>' +
  '<h2>과일겉절이</h2>' +
  '<h2>버섯탕수</h2>' +
  '<h2>아보카도 연어샐러드</h2>' +
  '<h2>오렌지마리네이드 돼지고기</h2>' +
  '<h2>인삼갈비탕</h2>' +
  '<h2>치킨 카레</h2>' +
  '<h2>콩라미수</h2>' +
  '<h2>크림치즈 망고무스</h2>' +
  '<h2>컵토마토</h2>' +
  '<h2>해산물 훈제연어롤</h2>' +
  '<h2>감닭떡갈비</h2>' +
  '<h2>겨자아욱쌈밥</h2>' +
  '<h2>다마고도후</h2>' +
  '<h2>단호박생채</h2>' +
  '<h2>머스터드 드레싱 샐러드</h2>' +
  '<h2>키위샐러드</h2>' +
  '<h2>어묵 아스파라거스 샐러드</h2>' +
  '<h2>마고구마 샐러드</h2>' +
  '<h2>유자청 가지 연근 샐러드</h2>' +
  '<h2>두유 드레싱 샐러드</h2>' +
  '<h2>배즙 오징어 샐러드</h2>' +
  '<h2>케일 오미자 샐러드</h2>' +
  '<h2>꼬막 달래 된장 무침</h2>' +
  '<h2>양송이 두부 구이</h2>' +
  '<h2>베이컨 가지 말이</h2>' +
  '<h2>동태살 채소 말이</h2>' +
  '<h2>고등어 찜</h2>' +
  '<h2>미트소스 크로켓</h2>' +
  '<h2>비지 쇠고기말이 구이</h2>' +
  '<h2>구운 두부 위에 올린 모듬 채소구이</h2>' +
  '<h2>청국장소스 연어 스테이크</h2>' +
  '<h2>두부곤약조림</h2>' +
  '<h2>아귀나가사키조림</h2>' +
  '<h2>카레가자미조림</h2>' +
  '<h2>타콤소스닭조림</h2>' +
  '<h2>토마토콩조림</h2>' +
  '<h2>관자해장국</h2>' +
  '<h2>들깨해장국</h2>' +
  '<h2>들깨수제비</h2>' +
  '<h2>대구지리탕</h2>' +
  '<h2>양지해장국</h2>' +
  '<h2>토마토돼지고기해장국</h2>' +
  '<h2>효종갱</h2>' +
  '<h2>해물토마토김치찌개</h2>' +
  '<h2>버섯 두유 소스 볶음</h2>' +
  '<h2>송이버섯 볶음</h2>' +
  '<h2>돼지사태 채소볶음</h2>' +
  '<h2>땅콩소스 버섯가지나물</h2>' +
  '<h2>닭다리 구이</h2>' +
  '<h2>고등어 카레 조림</h2>' +
  '<h2>두부적</h2>' +
  '<h2>블루베리 소스를 곁들인 단호박 두부전</h2>' +
  '<h2>소금물에 찐 시금치 두부선</h2>' +
  '<h2>곤약 냉채</h2>' +
  '<h2>낙지샐러드</h2>' +
  '<h2>다시마 쌈</h2>' +
  '<h2>두부 크림 브릴레</h2>' +
  '<h2>레몬들깨 소스 떡꼬치</h2>' +
  '<h2>고구마 석류 과편</h2>' +
  '<h2>고구마 단호박 맛탕</h2>' +
  '<h2>키위 팬케이크</h2>' +
  '<h2>허니레몬 그린티 푸딩</h2>' +
  '<h2>더덕생채를 곁들인 삼겹살 찜</h2>' +
  '<h2>오렌지비네거 드레싱을 곁들인 가자미와 연어</h2>' +
  '<h2>백김치 떡갈비</h2>' +
  '<h2>단호박 참치 더덕말이</h2>' +
  '<h2>흑초 고추장소스 두부스테이크</h2>' +
  '<h2>로제 고추장 햄 참치말이</h2>' +
  '<h2>라이스버거</h2>' +
  '<h2>찹쌀소고기 야채 구이</h2>' +
  '<h2>고추장전</h2>' +
  '<h2>새우단배추된장국</h2>' +
  '<h2>검은콩보리된장찌개</h2>' +
  '<h2>단호박배추된장국</h2>' +
  '<h2>된장냉국</h2>' +
  '<h2>들깨된장육개장</h2>' +
  '<h2>삼색묵냉국</h2>' +
  '<h2>샤브된장국</h2>' +
  '<h2>완자된장국</h2>' +
  '<h2>산나물된장찌개</h2>' +
  '<h2>토마토요구르트된장국</h2>' +
  '<h2>굴림만두된장국</h2>' +
  '<h2>해물순두부된장찌개</h2>' +
  '<h2>곤약함박스테이크</h2>' +
  '<h2>조개찜</h2>' +
  '<h2>청국장 두부 검은깨 냉스프</h2>' +
  '<h2>호박 고구마 스프</h2>' +
  '<h2>흑마늘 치킨 안심 스테이크</h2>' +
  '<h2>두부 안심 스테이크</h2>' +
  '<h2>삼치 스테이크</h2>' +
  '<h2>삼겹살 스테이크</h2>' +
  '<h2>코다리 스테이크</h2>' +
  '<h2>두부곤약국수</h2>' +
  '<h2>부추된장칼국수</h2>' +
  '<h2>당근파스타 다시마롤</h2>' +
  '<h2>감자밥</h2>' +
  '<h2>시금치 리조또</h2>' +
  '<h2>삼색 닭 만둣국</h2>' +
  '<h2>된장비빔밥</h2>' +
  '<h2>북어비빔밥</h2>' +
  '<h2>무 현미밥</h2>' +
  '<h2>비트 알리오올리오</h2>' +
  '<h2>베이컨 컵밥</h2>' +
  '<h2>볶음밥 만두</h2>' +
  '<h2>폴렌타 샐러드</h2>' +
  '<h2>매실드레싱 해산물샐러드</h2>' +
  '<h2>청포묵 샐러드</h2>' +
  '<h2>오렌지 시금치 샐러드</h2>' +
  '<h2>참치 아보카도 카프레제</h2>' +
  '<h2>고추장 감자 샐러드</h2>' +
  '<h2>두릅 샐러드</h2>' +
  '<h2>새우탬벨</h2>' +
  '<h2>바나나 구이</h2>' +
  '<h2>과일 소스 고구마 무스</h2>' +
  '<h2>과일무스 테린</h2>' +
  '<h2>가지볶음밥</h2>' +
  '<h2>닭고기볶음밥</h2>' +
  '<h2>토마토라면</h2>' +
  '<h2>토마토샐러드라면</h2>' +
  '<h2>검은깨라면크로켓</h2>' +
  '<h2>김말이두부스테이크</h2>' +
  '<h2>연어롤샐러드</h2>' +
  '<h2>비타민이유식</h2>' +
  '<h2>한입꼬치구이</h2>' +
  '<h2>간장곤약볶음국수</h2>' +
  '<h2>닭가슴살리조또</h2>' +
  '<h2>녹차귀리라떼</h2>' +
  '<h2>계란숙샐러드</h2>' +
  '<h2>한식풍닭가슴살스테이크</h2>' +
  '<h2>강황고구마밥</h2>' +
  '<h2>된장시금치옹심이</h2>' +
  '<h2>수제 두부 소시지가 버섯 소스에 풍덩!</h2>' +
  '<h2>속이 비치는 곤드레 새우만두</h2>' +
  '<h2>쑥을 곁들인 삼색 단호박 어만두</h2>' +
  '<h2>단호박찜</h2>' +
  '<h2>감자무스를 곁들인 버섯 새우 스테이크</h2>' +
  '<h2>산마 떡갈비와 무화과발사믹 소스</h2>' +
  '<h2>두부구이</h2>' +
  '<h2>애호박 두부 구이</h2>' +
  '<h2>양배추 고기말이</h2>' +
  '<h2>매생이순두부탕</h2>' +
  '<h2>맑은 부대찌개</h2>' +
  '<h2>비지감자탕</h2>' +
  '<h2>양배추한방김치</h2>' +
  '<h2>오이고추소박이</h2>' +
  '<h2>실치오이 초절임</h2>' +
  '<h2>비트무절임</h2>' +
  '<h2>봄나물겉절이</h2>' +
  '<h2>블루베리 물김치</h2>' +
  '<h2>포도 백김치피클</h2>' +
  '<h2>감귤 김치</h2>' +
  '<h2>콜리플라워 김치</h2>' +
  '<h2>두부달걀덮밥</h2>' +
  '<h2>봄나물밥</h2>' +
  '<h2>가지연어구이</h2>' +
  '<h2>갈릭칩동태구이</h2>' +
  '<h2>고구마두부스테이크</h2>' +
  '<h2>닭가슴살카나페</h2>' +
  '<h2>삼색꼬치구이</h2>' +
  '<h2>꽁치채소말이</h2>' +
  '<h2>차돌박이구이</h2>' +
  '<h2>간장아귀찜</h2>' +
  '<h2>견과류통삼겹살찜</h2>' +
  '<h2>닭가슴살말이</h2>' +
  '<h2>두부말이찜</h2>' +
  '<h2>미나리명태찜</h2>' +
  '<h2>불고기덮밥</h2>' +
  '<h2>바비큐리조또</h2>' +
  '<h2>콩국수</h2>' +
  '<h2>모듬해물찜</h2>' +
  '<h2>크렌베리귀리밥</h2>' +
  '<h2>블루베리냉스프</h2>' +
  '<h2>토마토제철나물 샐러드</h2>' +
  '<h2>브로콜리스프</h2>' +
  '<h2>초계샐러드</h2>' +
  '<h2>토마토맑은장국</h2>' +
  '<h2>매생이찰범벅</h2>' +
  '<h2>통삼겹맥적구이</h2>' +
  '<h2>닭가슴살샌드스테이크</h2>' +
  '<h2>치즈리조또</h2>' +
  '<h2>가지말이샐러드</h2>' +
  '<h2>숙주 품은 치킨 덮밥</h2>' +
  '<h2>키위 소고기 볶음밥</h2>' +
  '<h2>오리 볶음밥</h2>' +
  '<h2>수제  간장으로 맛을 낸 떡갈비와 오색견과류 영양밥</h2>' +
  '<h2>된장 크림 소스를 곁들인 잡곡 오므라이스</h2>' +
  '<h2>고구마의 달콤함을 품은 드라이 커리</h2>' +
  '<h2>산나물밥과 유부견과류 양념장</h2>' +
  '<h2>삼색 더덕 초밥</h2>' +
  '<h2>유자등갈비구이</h2>' +
  '<h2>실곤약팟타야</h2>' +
  '<h2>닭고기라이스롤</h2>' +
  '<h2>닭강정</h2>' +
  '<h2>소고기꼬치구이</h2>' +
  '<h2>황태볶음면</h2>' +
  '<h2>토마토덮밥</h2>' +
  '<h2>표고크림파스타</h2>' +
  '<h2>떡갈비동치미국수</h2>' +
  '<h2>백김치닭살샐러드</h2>' +
  '<h2>단호박크림파스타</h2>' +
  '<h2>바지락실곤약파스타</h2>' +
  '<h2>황태리조또</h2>' +
  '<h2>깻잎애호박찜</h2>' +
  '<h2>닭순대</h2>' +
  '<h2>도라지 유자청생채</h2>' +
  '<h2>돼지고기 숙주덮밥</h2>' +
  '<h2>두부스테이크</h2>' +
  '<h2>들깨곤약수제비</h2>' +
  '<h2>먹물소스를 곁들인 토마토피클</h2>' +
  '<h2>묵은지고등어와 새우말이꼬치</h2>' +
  '<h2>버섯배추말이</h2>' +
  '<h2>봄날의 연못</h2>' +
  '<h2>산나물 유부초밥</h2>' +
  '<h2>삼삼한 롤</h2>' +
  '<h2>삼색채소 냉파스타</h2>' +
  '<h2>새우보리죽 고등어스테이크</h2>' +
  '<h2>카스텔라케이크와 해독주스</h2>' +
  '<h2>토마토김치</h2>' +
  '<h2>닭가슴살스튜</h2>' +
  '<h2>가지겉절이</h2>' +
  '<h2> 동치미</h2>' +
  '<h2>장어수육구이</h2>' +
  '<h2>미역줄기두부무침</h2>' +
  '<h2>맑은육개장</h2>' +
  '<h2>주꾸미보양샐러드</h2>' +
  '<h2>전복내장밥</h2>' +
  '<h2>카레감자전</h2>' +
  '<h2>두부채소샐러드</h2>' +
  '<h2>더덕비트물김치</h2>' +
  '<h2>연어허브스테이크</h2>' +
  '<h2>해물칼국수</h2>' +
  '<h2>버섯리조또</h2>' +
  '<h2>삼색소고기만두</h2>' +
  '<h2>콩가루비빔밥</h2>' +
  '<h2>인삼닭살찜</h2>' +
  '<h2>양배추버섯말이</h2>' +
  '<h2>단호박떡갈비</h2>' +
  '<h2>배추만두탕</h2>' +
  '<h2>해산물누들볶음</h2>' +
  '<h2>허브닭스테이크</h2>' +
  '<h2>새우완자찜</h2>' +
  '<h2>두부된장무침</h2>' +
  '<h2>귀리죽</h2>' +
  '<h2>탕평채</h2>' +
  '<h2>토마토백김치</h2>' +
  '<h2>둥지튀김</h2>' +
  '<h2>들깨죽</h2>' +
  '<h2>매실소스를 곁들인 돼지고기만두</h2>' +
  '<h2>머스터드튤립치킨</h2>' +
  '<h2>미니함박스테이크</h2>' +
  '<h2>바다완자탕</h2>' +
  '<h2>삼계치킨</h2>' +
  '<h2>삼계치킨롤</h2>' +
  '<h2>새우완자탕</h2>' +
  '<h2>연어비트 절임샐러드</h2>' +
  '<h2>장어조림</h2>' +
  '<h2>불고기미니볼</h2>' +
  '<h2>훈제연어롤</h2>' +
  '<h2>크림닭</h2>' +
  '<h2>등심채소롤</h2>' +
  '<h2>유부완자탕</h2>' +
  '<h2>미니밥버거</h2>' +
  '<h2>파프리카볶음밥</h2>' +
  '<h2>리코타치즈돈가스</h2>' +
  '<h2>삼겹살부추찜</h2>' +
  '<h2>전복죽</h2>' +
  '<h2>오징어초무침</h2>' +
  '<h2>들깨칼국수</h2>' +
  '<h2>소불고기</h2>' +
  '<h2>숙주라면</h2>' +
  '<h2>곤약냉면</h2>' +
  '<h2>갈비찜</h2>' +
  '<h2>토마토소스닭갈비</h2>' +
  '<h2>골뱅이무침</h2>' +
  '<h2>떡갈비와 미니잡곡밥</h2>' +
  '<h2>리코타소스 연어샐러드</h2>' +
  '<h2>망고무스케이크와 마카롱</h2>' +
  '<h2>머쉬룸 닭스테이크</h2>' +
  '<h2>미역소스와 타르타르</h2>' +
  '<h2>오리스테이크</h2>' +
  '<h2>너비아니구이와 쌈밥</h2>' +
  '<h2>배추관자카나페</h2>' +
  '<h2>관자버터구이</h2>' +
  '<h2>단호박리조또</h2>' +
  '<h2>토마토떡볶이</h2>' +
  '<h2>소고기채소볶음</h2>' +
  '<h2>양송이크림볶음밥</h2>' +
  '<h2>해물우동볶음</h2>' +
  '<h2>단호박닭꼬치</h2>' +
  '<h2>떡갈비콩나물밥</h2>' +
  '<h2>크림치즈떡볶이</h2>' +
  '<h2>목살스테이크</h2>' +
  '<h2>치킨완자스프</h2>' +
  '<h2>돼지고기말이튀김</h2>' +
  '<h2>단호박피자</h2>' +
  '<h2>L.A갈비</h2>' +
  '<h2>닭고기파스타</h2>' +
  '<h2>두릅부추 소고기말이</h2>' +
  '<h2>두부 비빔호박쌈</h2>' +
  '<h2>두부곤약파스타</h2>' +
  '<h2>두유 파스타</h2>' +
  '<h2>라따뚜이</h2>' +
  '<h2>라이스페이퍼 롤</h2>' +
  '<h2>브로컬리 단호박스프와 완두콩퓨레</h2>' +
  '<h2>새송이등갈비</h2>' +
  '<h2>소안심 야채 호박잎쌈</h2>' +
  '<h2>양배추 고기말이</h2>' +
  '<h2>양배추 쌈말이</h2>' +
  '<h2>연어샐러드</h2>' +
  '<h2>타다키 부추샐러드</h2>' +
  '<h2>장어구이</h2>' +
  '<h2>안심스테이크</h2>' +
  '<h2>로제파스타</h2>' +
  '<h2>쪽갈비구이</h2>' +
  '<h2>베이컨밀푀유</h2>' +
  '<h2>실곤약냉파스타</h2>' +
  '<h2>명란프리타타</h2>' +
  '<h2>양송이구이</h2>' +
  '<h2>연어스테이크</h2>' +
  '<h2>매운닭날개구이</h2>' +
  '<h2>카레죽</h2>';

  module.exports = allRecipes;

  