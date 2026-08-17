export const site = {
  name: "Onebo Business House",
  shortName: "ONEBO",
  slogan: "One day or day one.",
  description:
    "Onebo Business House — trading, bolalar kiyimlari va HoReCa professional kimyosi yo‘nalishlarini bitta ekotizimga birlashtiruvchi biznes platforma.",
  phoneDisplay: "+998 90 000 00 00",
  phoneHref: "tel:+998900000000",
  location: "Tashkent City, Shayxontohur tumani, Toshkent",
  instagram: {
    label: "@onebo.businesshouse",
    href: "https://instagram.com/onebo.businesshouse",
  },
  brands: {
    onebofx: {
      name: "onebofx",
      eyebrow: "Trading & Analytics",
      telegram: "https://t.me/onebofx",
      headline: "Bozorni tushunish — bu san’at.",
      copy:
        "Real tahlil, bozor mantiqi va intizom. OneboFX grafik ortidagi sababni ko‘rsatadi: tahlil, kontekst, risk va natija.",
      tags: ["XAUUSD", "Market insight", "Risk discipline", "Real analysis"],
    },
    babydiary: {
      name: "BabyDiary",
      eyebrow: "Bolalar kiyimlari",
      telegram: "https://t.me/babydiaryuz",
      headline: "Har bir kiyim — bir xotira.",
      copy:
        "Yumshoq estetika, qulay matolar va bolalikning eng chiroyli lahzalari uchun tanlangan kolleksiyalar. Premium hissiyot — ortiqcha shovqinsiz.",
      tags: ["0–7 yosh", "Premium basics", "Soft fabrics", "New collections"],
    },
    cleanpro: {
      name: "CleanPro HoReCa",
      eyebrow: "Professional cleaning solutions",
      telegram: "https://t.me/cleanprohoreca",
      headline: "Tozalik — bu standart emas, madaniyat.",
      copy:
        "Restoran va mehmonxonalar uchun professional tozalovchi kimyoviy vositalar: oshxona, sirtlar, sanitariya va kundalik ekspluatatsiya uchun samarali yechimlar.",
      tags: ["Kitchen care", "Surface cleaners", "Sanitization", "HoReCa supply"],
    },
  },
} as const;

export const getSiteUrl = () =>
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
