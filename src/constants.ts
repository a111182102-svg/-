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
    { name: 'Instagram', url: 'https://www.instagram.com/wumin.__.0327/?hl=zh-tw', icon: Instagram },
    { name: 'YouTube', url: 'https://www.youtube.com/@-kd8ch', icon: Youtube },
    { name: 'Facebook', url: 'https://www.facebook.com/wu.minmin.37167/', icon: Facebook },
    { name: 'X', url: '#', icon: Twitter },
  ]
};

export const INTRO_TEXT = "我是一位對航運業產生好奇的人，從就學期間開始對船舶的運作、航行安全與國際貿易產生興趣。透過學校課程與實習的經驗，我學習到了航海儀器的操作、貨物裝卸的安全、電子海圖的運用及航運管理等知識，也培養出嚴謹的學習態度與良好的團隊合作精神。我深知航運業講求紀律、效率與專業，因此我願意不斷的學習、接受挑戰，與團隊共同提升航運業的服務品質，並在未來成為值得信賴的專業航運人員。";

export const EXPERIENCES = [
  {
    date: '2025-09-02 ~ 2025-09-06',
    title: '日本沖繩：第一次跟同學出國',
    items: ['和同學一起討論做旅行前的規劃', '體驗當地的文化特色', '去古蹟探訪當地的歷史']
  },
  {
    date: '2025-05-22 ~ 2025-06-06',
    title: '教育部實習船：御風輪',
    items: ['在船上認識了許多在學校裡沒看過的設備', '學會了船上設施的操作', '去日本當地體驗了寺廟的參拜']
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
    { name: '台語', level: '精通', cert: 'EZ' }
  ],
  professional: [
    {
      category: '四小證',
      items: ['基本安全', '基礎滅火', '基礎急救', '救生艇筏']
    },
    {
      category: '證照',
      items: ['進階滅火', '醫療急救', '航行當值']
    },
    {
      category: '其他證照',
      items: ['無']
    }
  ]
};

export const PROJECTS = [
  {
    type: 'standard',
    title: '可愛人物頭像 / 3D AVATAR DESIGN',
    image: './project.jng',
    tags: ['3D Modeling', 'Character Design', 'Avatar'],
    description: `客製化的可愛人物頭像設計專案。\n\n以生動的眼神與精緻的服裝細節，營造出充滿生命力的角色形象。展示出對於細節捕捉以及風格塑造的設計能力。`
  },
  {
    type: 'itinerary',
    title: '蔚藍逃離計畫：沖繩五天四夜完美旅程',
    image: 'https://images.unsplash.com/photo-1590559899731-a382839ce24b?q=80&w=1000&auto=format&fit=crop',
    tags: ['旅遊規劃', '預算管理', '行程安排'],
    budget: 'NT$ 25,000 - 35,000',
    description: `從神話秘境到美式海岸，一次收齊的島嶼巡禮。`,
    itinerary: [
      { day: '01', title: '啟程與那霸初探', color: 'text-[#3b82f6]', items: ['13:00 落地與安置', '16:00 波上宮'], video: './video1.mp4' },
      { day: '05', title: '海鮮晨光與滿載而歸', color: 'text-[#10b981]', items: ['牧志公設市場', '14:00 返家'] }
    ]
  }
];
