/**
 * Couple-specific content for the Duulat & Adema invitation template.
 * Change this file (and assets under /public/assets) for each new couple.
 * Do not edit section components unless you need a layout change.
 */
export const weddingConfig = {
  templateId: "duulatadema",
  defaultLang: "ru",

  couple: {
    first: "Дуулат",
    second: "Адэма",
  },

  /** ISO datetime used by the countdown (Bishkek UTC+6) */
  dateIso: "2026-04-19T17:00:00+06:00",
  timezone: "Asia/Bishkek",

  date: {
    day: 19,
    monthIndex: 3, // April (0-based)
    year: 2026,
    time: "17:00",
    displayShort: "19.04.2026",
    displayWithTime: "19.04.2026 / 17:00",
    monthName: {
      ru: "Апрель",
      kz: "Сәуір",
    },
    weekDays: {
      ru: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
      kz: ["Дү", "Се", "Сә", "Бе", "Жұ", "Сн", "Же"],
    },
  },

  hero: {
    save: {
      ru: "SAVE",
      kz: "SAVE",
    },
    the: {
      ru: "The",
      kz: "The",
    },
    date: {
      ru: "DATE",
      kz: "DATE",
    },
    musicPress: {
      ru: "НАЖМИТЕ",
      kz: "БАСЫҢЫЗ",
    },
    musicRing: {
      ru: "музыка",
      kz: "ән",
    },
  },

  welcome: {
    greetingScript: {
      ru: "Уважаемые гости!",
      kz: "Құрметті қонақтар!",
    },
    greetingSerif: {
      ru: "Уважаемые гости!",
      kz: "Құрметті қонақтар!",
    },
    body: {
      ru: "В этот особенный момент нашей жизни мы хотим быть рядом с дорогими людьми. С огромной радостью приглашаем вас разделить с нами наш праздник-нашу свадьбу!",
      kz: "Өміріміздің осы ерекше сәтінде біз қымбатты адамдармен бірге болғымыз келеді. Сіздерді тойымыз — үйлену тойымызды бірге атап өтуге шын жүректен шақырамыз!",
    },
    cta: {
      ru: "Разделите этот праздник вместе с нами!",
      kz: "Осы мерекені бізбен бірге бөлісіңіз!",
    },
  },

  album: {
    hint: {
      ru: "Позднее по этой ссылке вы сможете увидеть и отправить все фото и видео нашего торжества",
      kz: "Кейінірек осы сілтеме арқылы тойдың барлық фото мен видеосын көріп, жібере аласыз",
    },
    url: "https://t.me/+RcyYzlFpvtJkY2Ni",
  },

  venue: {
    addressLabel: {
      ru: "Адрес",
      kz: "Мекенжай",
    },
    address: {
      ru: 'г. Бишкек, ресторан "Анель Гранд",\nул. Мадиева 22а',
      kz: 'Бішкек қ., "Анель Гранд" мейрамханасы,\nМадиева к-сі 22а',
    },
    mapUrl: "https://2gis.kg/bishkek/geo/70000001079817962",
    instagramUrl:
      "https://www.instagram.com/anel_grand_hall?igsh=MW5hbGhuZmFxcXh5Yg==",
    servicesHint: {
      ru: "(нажмите логотипы сервисов чтобы перейти)",
      kz: "(өту үшін сервис логотиптерін басыңыз)",
    },
  },

  countdown: {
    titleScript: {
      ru: "До свадьбы осталось",
      kz: "Тойға дейін қалды",
    },
    titleSerif: {
      ru: "До события осталось",
      kz: "Оқиғаға дейін қалды",
    },
    labels: {
      days: { ru: "Дней", kz: "Күн" },
      hours: { ru: "Часов", kz: "Сағат" },
      minutes: { ru: "Минут", kz: "Минут" },
      seconds: { ru: "Секунд", kz: "Секунд" },
    },
  },

  rsvp: {
    title: {
      ru: "Анкета гостя",
      kz: "Қонақ сауалнамасы",
    },
    intro: {
      ru: "Мы будем ждать обратного ответа от вас.\nБудьте с нами, чтобы наполнить этот день еще\nбольшим счастьем и радостью.",
      kz: "Сізден жауап күтеміз.\nОсы күнді одан да үлкен бақыт пен қуанышқа\nтолтыру үшін бізбен бірге болыңыз.",
    },
    nameLabel: {
      ru: "Ваше имя",
      kz: "Атыңыз",
    },
    attendLabel: {
      ru: "Вы будете на торжестве?",
      kz: "Тойға келесіз бе?",
    },
    options: [
      {
        value: "yes",
        label: {
          ru: "Я с удовольствием приду",
          kz: "Қуана келемін",
        },
      },
      {
        value: "no",
        label: {
          ru: "К сожалению не смогу присутствовать",
          kz: "Өкінішке орай қатыса алмаймын",
        },
      },
    ],
    submit: {
      ru: "Отправить",
      kz: "Жіберу",
    },
    success: {
      ru: "Спасибо! Ваш ответ получен.",
      kz: "Рахмет! Жауабыңыз қабылданды.",
    },
    error: {
      ru: "Не удалось отправить. Попробуйте ещё раз.",
      kz: "Жіберу мүмкін болмады. Қайта көріңіз.",
    },
  },

  closing: {
    respectfully: {
      ru: "С уважением и любовью",
      kz: "Құрметпен және махаббатпен",
    },
    siteLabel: {
      ru: "Сайт приглашение",
      kz: "Шақыру сайты",
    },
  },

  contacts: {
    whatsapp: {
      label: "Whatsapp",
      url: "https://wa.me/996776161601",
    },
    instagram: {
      label: "Instagram",
      url: "https://www.instagram.com/priglasi_ava/",
    },
  },

  media: {
    heroPhoto: "/assets/hero-couple.jpg",
    albumPhoto: "/assets/photo-hands-ring.jpg",
    rsvpPhoto: "/assets/photo-hands-close.jpg",
    mapIcon: "/assets/icon-map.svg",
    venueInstagramIcon: "/assets/icon-ig.svg",
    whatsappIcon: "/assets/icon-whatsapp.webp",
    instagramIcon: "/assets/icon-ig.svg",
    chevrons: "/assets/icon-chevrons.webp",
    heartCalendar: "/assets/icon-heart.svg",
    plane: "/assets/icon-paper-plane.svg",
    arrowCurve: "/assets/icon-arrow-curve.svg",
    calendarClock: "/assets/icon-calendar-clock.svg",
    heartbeat: "/assets/deco-heartbeat-line.png",
    music:
      "https://dl.dropboxusercontent.com/scl/fi/pm91cj6u0mun366ed7fax/MOT_-_Svadebnaya_-SkySound.cc.mp3?rlkey=1sh7hvxqs7bu4ky60v3j3l5p8&st=94zexxvq",
  },
};
