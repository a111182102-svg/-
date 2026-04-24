import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export const PERSONAL_INFO = {
  name: '吳淯民',
  studentId: 'A111182102',
  email: 'a111182102@nkust.edu.tw',
  birthdate: '2007-03-27',
  bloodType: 'AB型',
  zodiac: '牡羊座',
  socials: [
    { name: 'LinkedIn', url: '#', icon: Linkedin },
    { name: 'Instagram', url: '#', icon: Instagram },
    { name: 'YouTube', url: '#', icon: Youtube },
    { name: 'Facebook', url: '#', icon: Facebook },
    { name: 'X', url: '#', icon: Twitter },
  ]
};

export const INTRO_TEXT = "我是一位對航運業產生好奇的人，從就學期間開始對船舶的運作、航行安全與國際貿易產生興趣。透過學校課程與實習的經驗，我學習到了航海儀器的操作、貨物裝卸的安全、電子海圖的運用及航運管理等知識，也培養出嚴謹的學習態度與良好的團隊合作精神。我深知航運業講求紀律、效率與專業，因此我願意不斷的學習、接受挑戰，與團隊共同提升航運業的服務品質，並在未來成為值得信賴的專業航運人員。";

export const EXPERIENCES = [
  {
    date: '2025-09-02 ~ 2025-09-06',
    title: '日本沖繩：第一次跟同學出國',
    items: [
      '和同學一起討論做旅行前的規劃',
      '體驗當地的文化特色',
      '去古蹟探訪當地的歷史'
    ]
  },
  {
    date: '2025-05-22 ~ 2025-06-06',
    title: '教育部實習船：御風輪',
    items: [
      '在船上認識了許多在學校裡沒看過的設備',
      '學會了船上設施的操作',
      '去日本當地體驗了寺廟的參拜'
    ]
  }
];

export const EDUCATIONS = [
  {
    date: '2022-09 ~ 迄今',
    school: '國立高雄科技大學',
    department: '航運技術系',
    degree: '學士'
  }
];

export const SKILLS = {
  languages: [
    { name: '英文', level: '精通', cert: 'TOEIC 676' },
    { name: '日文', level: '略懂', cert: 'N2' },
    { name: '韓文', level: '普通', cert: 'TOPIK I' },
    { name: '台語', level: '精通', cert: '' }
  ],
  professional: [
    {
      category: '顧客關係管理',
      items: ['會員經營', '會員行銷']
    },
    {
      category: '品牌行銷',
      items: ['社群行銷', '行銷策略', '異業合作', '廣告投放', '廣告投放策略制定']
    },
    {
      category: '電商官網管理',
      items: ['GA', 'Search Console', '品牌金流', '物流管理', '商品訂單管理']
    }
  ],
  software: [
    {
      category: '辦公應用軟體',
      items: [
        'Microsoft Office: Word、Excel、Outlook、Powerpoint',
        'iWork: Pages、Numbers、Keynote'
      ]
    },
    {
      category: '專案應用軟體',
      items: [
        'Google Workspace: Gmail、Calendar、Drive、Meet、Sites',
        'Asana、Trello'
      ]
    }
  ],
  certificates: [
    'Google Analytics (分析) 個人認證資格',
    'Google Ads 搜尋廣告認證'
  ]
};

export const PROJECTS = [
  {
    title: '沖繩五天四夜旅遊計畫',
    image: 'https://images.unsplash.com/photo-1590559899731-a382839ce24b?q=80&w=1000&auto=format&fit=crop',
    tags: ['旅遊規劃', '預算管理', '行程安排'],
    description: `地點：日本沖繩\n預算預估：約台幣 25,000 - 35,000 元\n\nDay 1：那霸週邊\n- 13:00 抵達機場，搭單軌至市區\n- 14:30 飯店 Check-in\n- 16:00 波上宮\n- 晚餐：串角串燒 naha\n- 21:00 休息\n\nDay 2：瀨長島與購物\n- 早餐：飯店\n- 10:00 瀨長島看飛機\n- 午餐：塔可飯\n- 13:30 DMM 水族館\n- 15:30 Ashibinaa Outlet\n- 晚餐：目利きの銀次\n- 21:00 休息\n\nDay 3：南部文化\n- 09:00 前往玉泉洞\n- 11:00 玉泉洞 + 王國村\n- 午餐：園內在地美食\n- 14:30 達摩寺\n- 晚餐：Yakiniku King 燒肉\n- 20:00 Round 1 Stadium\n\nDay 4：美國村與購物\n- 09:30 前往美國村\n- 10:30 美國村拍照逛街\n- 午餐：A&W 漢堡\n- 15:00 Aeon Mall 購物\n- 晚餐：暖暮拉麵\n- 20:00 飯店休息或散步\n\nDay 5：回程\n- 早餐：牧志公設市場吃海鮮\n- 11:00 退房\n- 12:00 前往機場\n- 14:00 回程班機`
  }
];
