import { link } from "fs";

export const navItems = [
  { name: "Biz haqimizda", link: "#about" },
  { name: "Portfolio", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Biz uchun har bir loyiha g‘oya va ishonch uyg‘unligidir.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Biznesingizni global miqyosga olib chiqamiz.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Dasturchilar",
    description: "Professional",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Chiroyli va qulay UI/UX dizaynlar",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Qulay web-site va telegram botlar",
    description: "Edev.uz",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Birga loyiha boshlashni xohlaysizmi?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Summarizer",
    des: "OpenAI GPT modeli yordamida qisqacha ma'lumotlar tayyorlovchi ilova.",
    img: "/p1.png",
    link: "ai-summarizer-ku.netlify.app",
  },
  {
    id: 2,
    title: "Gamming",
    des: "Oyin haqida landing-page",
    img: "/p2.png",
    link: "https://gaming-ku.netlify.app/",
  },
  {
    id: 3,
    title: "Elaro Baby",
    des: "Elaro Baby uchun yaratilgan telegram bot",
    img: "/p5.jpg",
    link: "https://t.me/elarobaby_bot",
  },
  {
    id: 4,
    title: "Green Leaf",
    des: "Green Leaf uchun yaratilgan telegram bot",
    img: "/p6.jpg",
    link: "https://t.me/GreenLeaf_uz_Bot",
  },
  {
    id: 3,
    title: "Favvora",
    des: "Favvora choyxonasi uchun qr codli menu",
    img: "/p3.png",
    link: "https://wonderful-souffle-e953f2.netlify.app/",
  },
  {
    id: 4,
    title: "Muxriddin",
    des: "Muxriddin oshmarkazi uchun qr codli menu",
    img: "/p4.png",
    link: "https://dulcet-dragon-567fe0.netlify.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Edev.uz bilan ishlash juda oson va samarali. Ularning dizayn xizmatlari aniq va estetik jihatdan mukammal. Mening biznesim uchun ideal veb-sayt yaratdilar. Har doim professional yondoshuvni ko'rsatdilar. Tavsiya qilaman!",
    name: "Umid Zuxirddinovich",
    title: "",
  },
  {
    quote:
      "Edev.uz kompaniyasidan veb-sayt yaratish xizmatlarini olish juda yaxshi tajriba bo'ldi. Ularning jamoasi juda tez va samarali ishlaydi. Saytimizni qisqa vaqt ichida yaratib, barcha talablarimizni inobatga olishdi. Yangi loyiha uchun albatta ular bilan ishlayman.",
    name: "Qodir Tolipov",
    title: "",
  },
  {
    quote:
      "Edev.uz kompaniyasining Telegram botidan foydalangach, xizmat olish juda osonlashdi. Bot orqali har doim tezkor javoblar oldim va sayt yaratish jarayonida har bir qadamni kuzatish imkoniga ega bo'ldim. Ularning jamoasi juda professional va yuqori sifatli xizmatlarni taqdim etadi.",
    name: "Madina Nurhanova",
    title: "",
  },
  {
    quote:
      "Edev.uz bilan ishlash juda yaxshi tajriba bo'ldi. Ularning Telegram botidan foydalanganda, har qanday savolga javobni tezda olish imkoniyatim bo'ldi. Telegram bot jarayonida ularning jamoasi juda aniq va professionallikka asoslangan. O'zaro aloqada bo'lish juda oson.",
    name: "Elaro baby",
    title: "",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Website",
    desc: "Bizning jamoamiz siz uchun zamonaviy, moslashuvchan va SEO-ga moslashtirilgan veb-saytlar yaratadi. Sizning brendingizga mos keladigan, funksional va estetika jihatidan mukammal bo'lgan veb-saytlar orqali biznesingizni internetda yuqori pog‘onaga olib chiqamiz.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Telegram botlar",
    desc: "Biz foydalanuvchilaringiz bilan tezkor va qulay muloqot qilish uchun zamonaviy Telegram botlarini yaratamiz. Botlarimiz avtomatlashtirilgan xizmatlar, mijoz qo'llab-quvvatlashi, buyurtmalarni boshqarish va boshqa ko'plab funksiyalarni bajaradi.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "IT Konsalting",
    desc: "Biznesingizni raqamli transformatsiya qilishda yordam beramiz. Zamonaviy texnologiyalar va yechimlar orqali biznesingiz samaradorligini oshirishga yordam beramiz.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Mobil ilovalar",
    desc: "Biznesingizning mobil mavjudligini oshirish uchun iOS va Android platformalarida intuitiv hamda boy funksiyalarga ega mobil ilovalarni taqdim etamiz.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 5,
    title: "Grafik Dizayn",
    desc: "Bizning jamoamiz siz uchun zamonaviy, moslashuvchan va SEO-ga moslashtirilgan veb-saytlar yaratadi. Sizning brendingizga mos keladigan, funksional va estetika jihatidan mukammal bo'lgan veb-saytlar orqali biznesingizni internetda yuqori pog‘onaga olib chiqamiz.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 6,
    title: "SMM - Ijtimoiy Tarmoqlar Marketingi",
    desc: "Ijtimoiy tarmoqlarda brendingizni rivojlantirish va auditoriyangizni oshirish uchun professional SMM xizmatlari. Bizning jamoamiz sizning kontentingizni yoritish va mijozlar bilan muloqotni oshirishga yordam beradi.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
