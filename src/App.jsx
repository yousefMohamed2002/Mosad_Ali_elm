import React, { useState } from 'react';
import profileImg from './assets/elm-logo.png'; 
import { 
  Linkedin, 
  FileText, 
  Phone, 
  Mail, 
  MessageCircle, 
  UserPlus 
} from 'lucide-react';

const App = () => {
  const [lang, setLang] = useState('en');
  const isRtl = lang === 'ar';

  const userData = {
    nameToSave: "Mosad Ali", 
    phone: "+201119222530",
    whatsapp: "https://wa.me/201119222530",
    email: "mosad.ali@elmdevelopments.com", 
    linkedin: "https://www.linkedin.com/in/mosad-ali-aa528b208/",
  };

  const downloadVCard = () => {
    const vcardContent = `BEGIN:VCARD
VERSION:3.0
FN:${userData.nameToSave}
TEL;TYPE=CELL:${userData.phone}
EMAIL:${userData.email}
ORG:èlm Developments
TITLE:Head of Sales
END:VCARD`;

    const blob = new Blob([vcardContent], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${userData.nameToSave}.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const content = {
    en: {
      name: "Mosad Ali",
      role: "Head Of Sales @ èlm Developments",
      skills: ["Sales Strategy", "Business Development", "CRM", "Client Relations"],
      resume: "DOWNLOAD CV",
      saveBtn: "Save Contact",
      callBtn: "Direct Call",
      expertise: "EXPERTISE",
      status: "AVAILABLE"
    },
    ar: {
      name: "مسعد علي",
      role: "مدير قطاع المبيعات @ èlm Developments",
      skills: ["إدارة المبيعات", "تطوير الأعمال", "إدارة علاقات العملاء", "التفاوض العقاري"],
      resume: "تحميل السيرة الذاتية",
      saveBtn: "حفظ جهة الاتصال",
      callBtn: "اتصال مباشر",
      expertise: "المهارات والخبرات",
      status: "متاح للتواصل"
    }
  };

  const t = content[lang];

  return (
    <div
      className={`min-h-screen bg-[#050505] text-[#e2e3dc] p-4 md:p-12 transition-all duration-500 ${
        isRtl ? 'font-arabic' : 'font-sans'
      }`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Navbar */}
        <nav className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1c18] border border-[#71815d]/20 rounded-full text-[9px] font-bold tracking-widest text-[#a3b88c]">
            <span className="w-1.5 h-1.5 bg-[#71815d] rounded-full animate-pulse"></span>
            {t.status}
          </div>
          <button
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="bg-[#fcfdf6] text-black px-5 py-2 rounded-full font-black text-[10px] uppercase hover:bg-[#71815d] hover:text-white transition-all shadow-md"
          >
            {lang === 'ar' ? 'English' : 'العربية'}
          </button>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          
          {/* Main Profile Card */}
          <div className="md:col-span-8 bg-[#0f110e] border border-white/5 rounded-[2.5rem] p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center">
            
            {/* المربع الخلفي كبير (w-28 h-28) */}
            <div className="w-28 h-28 bg-[#71815d] rounded-2xl flex items-center justify-center overflow-hidden shadow-lg shrink-0 border border-white/5">
              {/* الصورة صغيرة (w-14 h-14) داخل المربع الكبير */}
              <img
                src={profileImg} 
                alt="èlm"
                className="w-25 h-25 object-contain" 
              />
            </div>

            <div className={`text-center ${isRtl ? 'md:text-right' : 'md:text-left'}`}>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white">{t.name}</h1>
              <p className="text-[#a3b88c] font-medium text-base md:text-lg opacity-80">{t.role}</p>
            </div>
          </div>

          {/* Action Buttons Column */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <button
              onClick={downloadVCard}
              className="flex items-center justify-center gap-4 p-5 bg-[#71815d] text-white rounded-[1.8rem] hover:bg-[#5d6b4d] transition-all shadow-xl shadow-[#71815d]/5 group"
            >
              <UserPlus size={22} className="group-hover:scale-110 transition-transform" />
              <span className="font-bold text-lg">{t.saveBtn}</span>
            </button>

            <a
              href={`tel:${userData.phone}`}
              className="flex items-center justify-center gap-4 p-5 bg-[#161815] border border-white/5 rounded-[1.8rem] hover:bg-white/5 transition-all text-[#e2e3dc]"
            >
              <Phone size={18} />
              <span className="font-bold text-base">{t.callBtn}</span>
            </a>

            <div className="grid grid-cols-2 gap-4">
              <a href={`mailto:${userData.email}`} className="flex items-center justify-center p-5 bg-[#161815] border border-white/5 rounded-[1.8rem] hover:bg-white/5 transition-all">
                <Mail size={20} />
              </a>
              <a href={userData.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-center p-5 bg-[#161815] border border-white/5 rounded-[1.8rem] hover:bg-white/5 transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Expertise Section */}
          <div className="md:col-span-4 bg-[#0f110e] border border-white/5 rounded-[2.5rem] p-8">
            <h3 className="text-[9px] font-black text-[#71815d] uppercase mb-6 tracking-[0.4em]">{t.expertise}</h3>
            <div className="flex flex-col gap-2.5">
              {t.skills.map((skill) => (
                <div key={skill} className="px-5 py-3.5 bg-[#161815] border border-white/5 rounded-xl text-[11px] font-semibold text-[#c6c8c0] hover:border-[#71815d]/30 transition-colors">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Big White CV Button */}
          <div className="md:col-span-6 bg-[#fcfdf6] rounded-[2.5rem] flex flex-col items-center justify-center p-10 hover:bg-[#e2e3dc] transition-all cursor-pointer group shadow-2xl">
             <FileText size={36} className="text-black mb-3 group-hover:scale-110 transition-transform" />
             <span className="text-black font-black text-xl tracking-tighter">{t.resume}</span>
          </div>

          {/* Floating Message Icon Card */}
          <div className="md:col-span-2 bg-[#161815] rounded-[2.5rem] flex items-center justify-center hover:bg-[#25D366]/10 transition-all cursor-pointer group border border-white/5">
             <a href={userData.whatsapp} target="_blank" rel="noreferrer" className="p-8">
                <MessageCircle size={36} className="text-[#71815d] group-hover:text-[#25D366] transition-colors" fill="currentColor" />
             </a>
          </div>

        </div>

   <footer className="mt-16 pb-8 text-center opacity-40 text-[8px] font-bold tracking-[0.6em] uppercase text-white">
  Designed by CraftHub © 2026
</footer>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&family=Inter:wght@400;700;900&display=swap');
        .font-arabic { font-family: 'Cairo', sans-serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
        body { background-color: #050505; margin: 0; }
        ::selection { background: #71815d; color: white; }
      `}} />
    </div>
  );
};

export default App;