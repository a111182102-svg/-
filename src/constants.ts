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
    type: 'standard',
    title: '可愛人物頭像 / 3D AVATAR DESIGN',
    image: '/project.png.png',
    tags: ['3D Modeling', 'Character Design', 'Avatar'],
    description: `客製化的可愛人物頭像設計專案。\n\n以生動的眼神與精緻的服裝細節，營造出充滿生命力的角色形象。結合了現代感與童趣，適合用於個人品牌網站、社群媒體設定或是數位名片。展示出對於細節捕捉以及風格塑造的設計能力。`
  },
  {
    type: 'itinerary',
    title: '蔚藍逃離計畫：沖繩五天四夜完美旅程',
    image: 'https://images.unsplash.com/photo-1590559899731-a382839ce24b?q=80&w=1000&auto=format&fit=crop',
    tags: ['旅遊規劃', '預算管理', '行程安排', '五感體驗'],
    budget: 'NT$ 25,000 - 35,000',
    description: `從神話秘境到美式海岸，一次收齊的島嶼巡禮。\n\n【預算分配】\n機票與住宿：55% (NT$ 16,500)\n吃喝玩樂：25% (NT$ 7,500)\n當地交通：20% (NT$ 6,000)\n\n【行程價值矩陣】\n• 味蕾衝擊：串角串燒、A&W 漢堡、Yakiniku King 燒肉、暖暮拉麵、目利きの銀次、市場海鮮\n• 文化尋蹤：波上宮、王國村、達摩寺\n• 血拼指南：Ashibinaa Outlet、Aeon Mall、美國村\n• 五感體驗：瀨長島海風、玉泉洞奇景、DMM 水族館`,
    itinerary: [
      {
        day: '01',
        title: '啟程與那霸初探',
        color: 'text-[#3b82f6]',
        items: ['13:00 落地與安置 (抵達機場，搭單軌至市區)', '16:00 懸崖上的神聖 (參訪波上宮)', '入夜 炭火與微醺 (串角串燒 naha)', '21:00 回房休息儲備體力'],
        video: '/video1.mp4'
      },
      {
        day: '02',
        title: '海風、生態與血拼',
        color: 'text-[#3b82f6]',
        items: ['10:00 晨間療癒 (瀨長島觀賞飛機/塔可飯)', '13:30 DMM 水族館最新科技海洋生態', '15:30 Ashibinaa Outlet 痛快爆買', '晚間 極致海鮮盛宴 (目利きの銀次)', '21:00 休息'],
        video: '/video2.mp4'
      },
      {
        day: '03',
        title: '南部奇境與熱血之夜',
        color: 'text-[#3b82f6]',
        items: ['09:00 深入地心 (玉泉洞探索鐘乳石)', '11:00 體驗琉球文化 (王國村 / 園內午餐)', '14:30 祈福尋蹤 (探訪達摩寺)', '晚間 能量釋放 (Yakiniku King 燒肉)', '20:00 Round 1 Stadium 狂歡'],
        video: '/video3.mp4'
      },
      {
        day: '04',
        title: '西岸異國風與購物衝刺',
        color: 'text-[#3b82f6]',
        items: ['09:30 異國晨光 (美國村拍照逛街)', '午間 美式經典 (A&W 漢堡)', '15:00 終極採購任務 (Aeon Mall)', '20:00 暖心收尾 (暖暮拉麵)', '飯後回飯店散步休息'],
        video: '/video4.mp4'
      },
      {
        day: '05',
        title: '海鮮晨光與滿載而歸',
        color: 'text-[#10b981]',
        items: ['早晨儀式 (牧志公設市場澎湃海鮮)', '11:00 滿載退房 (整理戰利品)', '12:00 航向歸途 (前往那霸機場)', '14:00 搭乘班機返家']
      }
    ]
  }
];
