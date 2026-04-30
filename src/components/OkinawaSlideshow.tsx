import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plane, MapPin, Utensils, ShoppingBag, Waves, Fish, Camera, Map, Compass, ChevronRight, Train, Landmark, Flame, Shell, Quote } from 'lucide-react';

const slides = [
  { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }
];

export const OkinawaSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  const renderSlide = () => {
    switch(currentSlide) {
      case 0:
        return (
          <div className="w-full h-full relative bg-[#f1efe7] overflow-hidden flex flex-col">
            <div className="h-[60%] w-full relative">
              <img src="https://images.unsplash.com/photo-1590559899731-a382839ce24b?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Okinawa" />
            </div>
            <div className="absolute bottom-10 left-10 bg-[#f4ebdc] p-8 border-b-4 border-red-500 shadow-xl max-w-xl">
              <h1 className="text-4xl font-bold text-[#1e3a5f] mb-2 font-serif">蔚藍逃離計畫：<br/>沖繩五天四夜完美旅程</h1>
              <p className="text-gray-700 mt-4 text-lg">從神話秘境到美式海岸，一次收齊的島嶼巡禮</p>
              <div className="absolute -top-4 -right-4 text-[#d64045] opacity-50"><MapPin size={32} /></div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="w-full h-full bg-[#f4ebdc] p-12 flex items-center justify-between">
            <div className="w-1/2">
              <h2 className="text-5xl font-bold text-[#1e3a5f] mb-12 font-serif">NT$ 25,000<br/>- 35,000</h2>
              <div className="relative w-64 h-64 rounded-full border-[16px] border-[#1e3a5f] flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-[16px] border-[#d64045]" style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 100%, 50% 100%)' }}></div>
                <div className="absolute inset-0 rounded-full border-[16px] border-[#e28743]" style={{ clipPath: 'polygon(50% 50%, 0 100%, 0 50%)' }}></div>
                <div className="text-center font-bold text-gray-700 space-y-1">
                  <div className="text-[#1e3a5f]">機票與住宿 55%</div>
                  <div className="text-[#d64045]">吃喝玩樂 25%</div>
                  <div className="text-[#e28743]">當地交通 20%</div>
                </div>
              </div>
            </div>
            <div className="w-1/2 h-full flex flex-col justify-center">
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-6 border-b border-gray-400 pb-2">情緒曲線 Timeline</h3>
              <div className="flex justify-between items-end h-48 border-b-2 border-dashed border-gray-400 relative pb-4">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-red-400/30 -z-10"></div>
                {/* SVG Curve Mock */}
                <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M 0,80 Q 25,80 50,20 T 100,60" fill="none" stroke="#d64045" strokeWidth="2" strokeOpacity="0.5" />
                </svg>
                {['Day 1 輕快與初探', 'Day 2 海上與體驗', 'Day 3 奇境與熱血', 'Day 4 西岸與血拼', 'Day 5 大海與賦歸'].map((day, i) => (
                   <div key={i} className="flex flex-col items-center gap-2 relative">
                     <div className="w-4 h-4 bg-white border-2 border-[#d64045] rounded-full z-10" />
                     <div className="text-xs font-bold text-center w-20 text-[#1e3a5f]">{day}</div>
                   </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="w-full h-full bg-[#f4ebdc] flex">
            <div className="w-1/3 bg-[#d64045] h-full relative overflow-hidden">
               <img src="https://images.unsplash.com/photo-1610011559816-1f6cc3ec3c30?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover opacity-80 mix-blend-multiply" alt="Shrine" />
            </div>
            <div className="w-2/3 p-12 flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-[#1e3a5f] mb-12 font-serif border-l-4 border-[#d64045] pl-4">Day 1 | 啟程與那霸初探</h2>
              
              <div className="relative pl-12 space-y-12 border-l-4 border-[#1e3a5f] ml-6">
                <div className="relative">
                  <div className="absolute -left-[3.2rem] bg-white p-2 border-4 border-[#1e3a5f] rounded-full text-[#1e3a5f]">
                    <Plane size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a5f]">13:00 - 14:30 落地與安置</h3>
                  <p className="text-gray-600 mt-2">抵達那霸機場，搭乘單軌列車直達市區，進行飯店 Check-in。</p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-[3.2rem] bg-white p-2 border-4 border-[#1e3a5f] rounded-full text-[#1e3a5f]">
                    <Landmark size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a5f]">16:00 懸崖上的神聖</h3>
                  <p className="text-gray-600 mt-2">參訪波上宮，感受沖繩獨特的信仰建築與海景交融。</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[3.2rem] bg-white p-2 border-4 border-[#1e3a5f] rounded-full text-[#1e3a5f]">
                    <Utensils size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a5f]">入夜 - 21:00 炭火與微醺</h3>
                  <p className="text-gray-600 mt-2">晚餐於「串角串燒 naha」大啖烤肉串，隨後回房休息，為明日儲備體力。</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="w-full h-full flex flex-col font-sans">
             <div className="h-1/2 flex">
                <div className="w-1/2 h-full"><img src="https://images.unsplash.com/photo-1549444455-ea6672322588?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Sea" /></div>
                <div className="w-1/2 h-full bg-[#e3d7bf] p-10 flex flex-col justify-center">
                   <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4 border-b pb-4 border-[#1e3a5f]">Day 2 | 海風、生態與血拼</h2>
                   <h3 className="text-[#1e3a5f] font-bold text-xl mb-2">晨間療癒</h3>
                   <p className="text-gray-700">早餐後，10:00 前往瀨長島近距離觀賞飛機起降。<br/>午餐安排道地美食「塔可飯 (Taco Rice)」。</p>
                </div>
             </div>
             <div className="h-1/2 flex">
                <div className="w-1/2 h-full bg-white p-10 flex flex-col justify-center">
                   <div className="mb-6">
                     <h3 className="text-[#d64045] font-bold text-xl mb-2 flex items-center gap-2"><Fish size={20}/> 午後雙重奏</h3>
                     <p className="text-gray-700 text-sm">13:30 進入 DMM 水族館體驗最新科技的海洋生態；<br/>15:30 轉戰 Ashibinaa Outlet 展開第一波痛快爆買。</p>
                   </div>
                   <div>
                     <h3 className="text-[#1e3a5f] font-bold text-xl mb-2 flex items-center gap-2"><Utensils size={20}/> 夜間饗宴</h3>
                     <p className="text-gray-700 text-sm">晚餐於知名居酒屋「目利きの銀次」享用極致海鮮盛宴，21:00 休息。</p>
                   </div>
                </div>
                <div className="w-1/2 h-full"><img src="https://images.unsplash.com/photo-1579991953-e3804fed824c?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Aquarium" /></div>
             </div>
          </div>
        );
      case 4:
         return (
          <div className="w-full h-full relative bg-[#1a0f0f] p-12 text-white overflow-hidden">
             <div className="absolute inset-0 opacity-40">
               <img src="https://images.unsplash.com/photo-1518151859817-80a969df2bc3?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="Cave" />
             </div>
             <div className="relative z-10 flex flex-col h-full justify-between pb-8">
               <h2 className="text-5xl font-bold mb-12 text-center text-white border-b border-red-500/50 pb-6">Day 3 | 南部奇境與熱血之夜</h2>
               
               <div className="flex flex-col gap-10">
                 <div className="flex items-center gap-6 bg-black/50 p-6 rounded-lg border border-red-900/50 hover:bg-black/70 transition-colors">
                   <Map className="text-[#d64045] w-12 h-12 flex-shrink-0" />
                   <div>
                     <h3 className="text-2xl font-bold text-red-200 mb-2">09:00 - 11:00 深入地心</h3>
                     <p className="text-gray-300">前往玉泉洞探索壯麗鐘乳石，隨後遊覽王國村體驗琉球古老文化。午餐直接於園內享用在地美食。</p>
                   </div>
                 </div>

                 <div className="flex items-center gap-6 bg-black/50 p-6 rounded-lg border border-red-900/50 hover:bg-black/70 transition-colors self-end w-4/5">
                   <Landmark className="text-[#e28743] w-12 h-12 flex-shrink-0" />
                   <div>
                     <h3 className="text-2xl font-bold text-orange-200 mb-2">14:30 祈福尋蹤</h3>
                     <p className="text-gray-300">探訪達摩寺，感受寧靜的在地信仰氛圍。</p>
                   </div>
                 </div>

                 <div className="flex items-center gap-6 bg-black/50 p-6 rounded-lg border border-red-900/50 hover:bg-black/70 transition-colors">
                   <Flame className="text-[#d64045] w-12 h-12 flex-shrink-0" />
                   <div>
                     <h3 className="text-2xl font-bold text-red-200 mb-2">晚間 - 20:00 能量釋放</h3>
                     <p className="text-gray-300">晚餐直奔「Yakiniku King 燒肉」無限量補充體力；20:00 殺入「Round 1 Stadium」遊樂場狂歡至深夜。</p>
                   </div>
                 </div>
               </div>
             </div>
          </div>
         );
      case 5:
        return (
          <div className="w-full h-full bg-[#f4ebdc] p-10 flex flex-col">
            <h2 className="text-4xl font-bold text-[#1e3a5f] border-b-2 border-gray-400 pb-4 mb-10">Day 4 | 西岸異國風與購物衝刺</h2>
            <div className="flex-1 flex gap-6 justify-center items-center">
              
              <div className="bg-white p-4 pb-12 rounded-sm shadow-xl transform -rotate-3 w-[30%]">
                 <div className="bg-gray-200 h-40 mb-4 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1549444455-ea6672322588?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="USA Village" />
                 </div>
                 <h4 className="font-bold text-[#1e3a5f] mb-2 text-sm">09:30 - 10:30 異國晨光</h4>
                 <p className="text-xs text-gray-600 leading-relaxed">前往美國村，穿梭於色彩繽紛的街區拍照逛街。</p>
              </div>

              <div className="bg-white p-4 pb-12 rounded-sm shadow-xl transform rotate-2 w-[30%] mt-8">
                 <div className="bg-gray-200 h-40 mb-4 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1481437153805-01f11ed7e1c8?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Mall" />
                 </div>
                 <h4 className="font-bold text-[#1e3a5f] mb-2 text-sm">午間美食 / 終極購物</h4>
                 <p className="text-xs text-gray-600 leading-relaxed">午餐大口咬下著名的「A&W 漢堡」。15:00 前往 Aeon Mall 展開最後一波大規模免稅購物。</p>
              </div>

              <div className="bg-white p-4 pb-12 rounded-sm shadow-xl transform -rotate-2 w-[30%] -mt-8">
                 <div className="bg-gray-200 h-40 mb-4 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1557872943-16a5ac26437e?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Ramen" />
                 </div>
                 <h4 className="font-bold text-[#1e3a5f] mb-2 text-sm">20:00 暖心收尾</h4>
                 <p className="text-xs text-gray-600 leading-relaxed">晚餐享用九州大賞「暖暮拉麵」，以濃郁豚骨湯頭撫慰身心，飯後飯店散步休息。</p>
              </div>

            </div>
          </div>
        );
      case 6:
        return (
          <div className="w-full h-full bg-[#f4ebdc] flex items-center p-12 gap-12">
            <div className="w-1/2 h-full relative overflow-hidden rounded-lg shadow-2xl border-4 border-white">
              <img src="https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Seafood" />
            </div>
            <div className="w-1/2">
              <h2 className="text-4xl font-bold text-[#1e3a5f] mb-10 border-b-4 border-[#10b981] pb-4 inline-block">Day 5 | 海鮮晨光<br/>與滿載而歸</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-[#1e3a5f] font-bold text-xl mb-2 flex items-center gap-2"><Fish size={20} className="text-[#10b981]" /> 早晨儀式</h3>
                  <p className="text-gray-700">深入牧志公設市場，用澎湃新鮮的海鮮作為與沖繩最後的道別。</p>
                </div>
                
                <div className="border-t border-gray-300 pt-8">
                  <h3 className="text-[#1e3a5f] font-bold text-xl mb-2 flex items-center gap-2"><ShoppingBag size={20} className="text-[#10b981]" /> 11:00 滿載退房</h3>
                  <p className="text-gray-700">整理戰利品與回憶，辦理 Check-out。</p>
                </div>

                <div className="border-t border-gray-300 pt-8">
                  <h3 className="text-[#1e3a5f] font-bold text-xl mb-2 flex items-center gap-2"><Plane size={20} className="text-[#10b981]" /> 12:00 - 14:00 航向歸途</h3>
                  <p className="text-gray-700">前往那霸機場，搭乘 14:00 班機返家。</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="w-full h-full bg-[#f4ebdc] p-10 flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold text-[#1e3a5f] mb-12">行程價值矩陣</h2>
            
            <div className="relative w-full max-w-2xl aspect-video grid grid-cols-2 grid-rows-2 gap-4">
               {/* Center axes */}
               <div className="absolute top-1/2 left-0 w-full h-1 bg-[#d64045] rounded-full -translate-y-1/2 z-10" />
               <div className="absolute top-0 left-1/2 w-1 h-full bg-[#d64045] rounded-full -translate-x-1/2 z-10" />
               
               {/* Quad 1 */}
               <div className="p-6 flex flex-col items-center justify-center text-center">
                 <Utensils size={32} className="text-[#1e3a5f] mb-4" />
                 <h3 className="font-bold text-[#1e3a5f] text-lg mb-2 relative">味蕾衝擊
                   <span className="absolute -bottom-1 left-1/4 w-1/2 h-[2px] bg-red-400"></span>
                 </h3>
                 <p className="text-xs text-gray-600 font-medium">串角串燒、A&W 漢堡<br/>Yakiniku King 燒肉<br/>暖暮拉麵、目利きの銀次、市場海鮮</p>
               </div>

               {/* Quad 2 */}
               <div className="p-6 flex flex-col items-center justify-center text-center">
                 <Landmark size={32} className="text-[#1e3a5f] mb-4" />
                 <h3 className="font-bold text-[#1e3a5f] text-lg mb-2 relative">文化尋蹤
                    <span className="absolute -bottom-1 left-1/4 w-1/2 h-[2px] bg-red-400"></span>
                 </h3>
                 <p className="text-xs text-gray-600 font-medium">波上宮<br/>王國村<br/>達摩寺</p>
               </div>

               {/* Quad 3 */}
               <div className="p-6 flex flex-col items-center justify-center text-center">
                 <ShoppingBag size={32} className="text-[#1e3a5f] mb-4" />
                 <h3 className="font-bold text-[#1e3a5f] text-lg mb-2 relative">血拼指南
                    <span className="absolute -bottom-1 left-1/4 w-1/2 h-[2px] bg-red-400"></span>
                 </h3>
                 <p className="text-xs text-gray-600 font-medium">Ashibinaa Outlet<br/>Aeon Mall<br/>美國村</p>
               </div>

               {/* Quad 4 */}
               <div className="p-6 flex flex-col items-center justify-center text-center">
                 <Waves size={32} className="text-[#1e3a5f] mb-4" />
                 <h3 className="font-bold text-[#1e3a5f] text-lg mb-2 relative">五感體驗
                    <span className="absolute -bottom-1 left-1/4 w-1/2 h-[2px] bg-red-400"></span>
                 </h3>
                 <p className="text-xs text-gray-600 font-medium">瀨長島海風<br/>玉泉洞奇景<br/>DMM 水族館</p>
               </div>
            </div>

            <div className="mt-8 border-2 border-[#d64045] bg-white py-3 px-8 shadow-[4px_4px_0px_0px_#d64045]">
               <p className="text-sm font-bold text-[#1e3a5f]">一切準備就緒，隨時出發。預算控制內的高質感假期，等你點頭。</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div className="w-full aspect-[16/9] bg-white border-b-2 border-black relative overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full h-full absolute inset-0"
        >
          {renderSlide()}
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 right-4 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-colors border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] ${currentSlide === idx ? 'bg-[#3b82f6]' : 'bg-white hover:bg-gray-200'}`}
          />
        ))}
      </div>
      
      <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs font-mono font-bold tracking-widest z-20 shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] border border-white">
        AUTOPLAY SLIDESHOW ({currentSlide + 1}/{slides.length})
      </div>
    </div>
  );
};
