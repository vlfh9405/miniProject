const productData = [
  {
    id: 1, pdName: '기본 티셔츠', price: 9900, category: '상의',
    description: '편안한 기본 면 티셔츠', stock: 10, image: '/images/tshirt1.jpg'
  },
  {
    id: 2, pdName: '청바지', price: 29900, category: '하의',
    description: '스트레이트 핏 데님 청바지', stock: 15, image: '/images/jeans1.jpg'
  },
  {
    id: 3, pdName: '반팔 셔츠', price: 19900, category: '상의',
    description: '시원한 반팔 셔츠', stock: 20, image: '/images/shirt1.jpg'
  },
  {
    id: 4, pdName: '후드티', price: 35900, category: '상의',
    description: '기모 후드티로 따뜻함을 더해요', stock: 12, image: '/images/hoodie1.jpg'
  },
  {
    id: 5, pdName: '트레이닝 팬츠', price: 24900, category: '하의',
    description: '활동성이 좋은 트레이닝 팬츠', stock: 18, image: '/images/training1.jpg'
  },
  {
    id: 6, pdName: '슬랙스', price: 39900, category: '하의',
    description: '깔끔한 핏의 슬랙스', stock: 13, image: '/images/slacks1.jpg'
  },
  {
    id: 7, pdName: '카라티', price: 27900, category: '상의',
    description: '격식 있는 자리에도 어울리는 카라티', stock: 8, image: '/images/poloshirt1.jpg'
  },
  {
    id: 8, pdName: '니트', price: 34900, category: '상의',
    description: '포근한 니트웨어', stock: 11, image: '/images/knit1.jpg'
  },
  {
    id: 9, pdName: '반바지', price: 19900, category: '하의',
    description: '여름철 시원한 반바지', stock: 22, image: '/images/shorts1.jpg'
  },
  {
    id: 10, pdName: '레깅스', price: 18900, category: '하의',
    description: '편안한 신축성의 레깅스', stock: 16, image: '/images/leggings1.jpg'
  },
  {
    id: 11, pdName: '셔츠 자켓', price: 44900, category: '아우터',
    description: '간절기에 입기 좋은 셔츠형 자켓', stock: 9, image: '/images/shirtjacket1.jpg'
  },
  {
    id: 12, pdName: '경량 패딩', price: 59900, category: '아우터',
    description: '가볍고 따뜻한 경량 패딩', stock: 14, image: '/images/padding1.jpg'
  },
  {
    id: 13, pdName: '야상 자켓', price: 69900, category: '아우터',
    description: '군더더기 없는 디자인의 야상', stock: 10, image: '/images/fieldjacket1.jpg'
  },
  {
    id: 14, pdName: '플리스 자켓', price: 32900, category: '아우터',
    description: '부드럽고 포근한 플리스 자켓', stock: 7, image: '/images/fleece1.jpg'
  },
  {
    id: 15, pdName: '코튼 팬츠', price: 27900, category: '하의',
    description: '부드러운 면 소재의 팬츠', stock: 13, image: '/images/cottonpants1.jpg'
  },
  {
    id: 16, pdName: '린넨 셔츠', price: 29900, category: '상의',
    description: '통기성이 좋은 린넨 셔츠', stock: 17, image: '/images/linenshirt1.jpg'
  },
  {
    id: 17, pdName: '데님 자켓', price: 49900, category: '아우터',
    description: '빈티지 감성의 데님 자켓', stock: 6, image: '/images/denimjacket1.jpg'
  },
  {
    id: 18, pdName: '하프코트', price: 74900, category: '아우터',
    description: '포멀한 스타일의 하프코트', stock: 5, image: '/images/halfcoat1.jpg'
  },
  {
    id: 19, pdName: '맨투맨', price: 24900, category: '상의',
    description: '베이직한 디자인의 맨투맨', stock: 20, image: '/images/sweatshirt1.jpg'
  },
  {
    id: 20, pdName: '기모 바지', price: 32900, category: '하의',
    description: '겨울철 따뜻한 기모 바지', stock: 10, image: '/images/fleecypants1.jpg'
  },
  {
    id: 21, pdName: 'V넥 니트', price: 37900, category: '상의',
    description: '깔끔한 라인의 V넥 니트', stock: 12, image: '/images/vneckknit1.jpg'
  },
  {
    id: 22, pdName: '크롭 자켓', price: 58900, category: '아우터',
    description: '트렌디한 크롭 디자인 자켓', stock: 8, image: '/images/cropjacket1.jpg'
  },
  {
    id: 23, pdName: '밴딩 팬츠', price: 22900, category: '하의',
    description: '허리 밴딩으로 편안한 착용감', stock: 14, image: '/images/bandingpants1.jpg'
  },
  {
    id: 24, pdName: '롱 슬리브', price: 15900, category: '상의',
    description: '기본 이너로 좋은 롱 슬리브 티셔츠', stock: 21, image: '/images/longsleeve1.jpg'
  },
  {
    id: 25, pdName: '베스트 자켓', price: 46900, category: '아우터',
    description: '실용적인 포켓이 달린 베스트 자켓', stock: 9, image: '/images/vest1.jpg'
  },
  {
    id: 26, pdName: '하이웨스트 팬츠', price: 34900, category: '하의',
    description: '다리가 길어 보이는 하이웨스트 디자인', stock: 12, image: '/images/highwaist1.jpg'
  },
  {
    id: 27, pdName: '크루넥 스웨터', price: 39900, category: '상의',
    description: '간절기에 어울리는 크루넥 니트', stock: 11, image: '/images/crewneck1.jpg'
  },
  {
    id: 28, pdName: '윈드브레이커', price: 58900, category: '아우터',
    description: '바람을 막아주는 기능성 자켓', stock: 6, image: '/images/windbreaker1.jpg'
  },
  {
    id: 29, pdName: '스키니진', price: 31900, category: '하의',
    description: '슬림핏의 기본 스키니진', stock: 16, image: '/images/skinnyjeans1.jpg'
  },
  {
    id: 30, pdName: '셔츠 블라우스', price: 30900, category: '상의',
    description: '여성스러운 핏의 블라우스', stock: 10, image: '/images/blouse1.jpg'
  }
];

export default productData;
