// Объект с переводами интерфейса для 10 языков
const translations = {
  ru: {
    // Единицы измерения на русском языке
    app_title: "Конвертер единиц",
    length: "Длина",
    weight: "Вес",
    volume: "Объём",
    enter_value: "Введите значение",
    convert: "Конвертировать",
    theme_light: "Светлая тема",
    theme_dark: "Тёмная тема",
    error: "Введите корректное число",
    units: {
      length: ["километры", "метры", "дециметры", "сантиметры", "миллиметры"],
      weight: [
        "тонны",
        "центнеры",
        "килограммы",
        "граммы",
        "миллиграммы",
        "фунты",
        "пуды",
      ],
      volume: [
        "кубические километры",
        "кубические метры",
        "кубические дециметры",
        "кубические сантиметры",
        "литры",
        "децилитры",
        "сантилитры",
        "миллилитры",
        "баррели (нефтяные)",
        "галлоны (амер.)",
      ],
    },
  },
  en: {
    // Единицы измерения на английском языке
    app_title: "Unit Converter",
    length: "Length",
    weight: "Weight",
    volume: "Volume",
    enter_value: "Enter value",
    convert: "Convert",
    theme_light: "Light theme",
    theme_dark: "Dark theme",
    error: "Enter a valid number",
    units: {
      length: [
        "kilometers",
        "meters",
        "decimeters",
        "centimeters",
        "millimeters",
      ],
      weight: [
        "tons",
        "centners",
        "kilograms",
        "grams",
        "milligrams",
        "pounds",
        "poods",
      ],
      volume: [
        "cubic kilometers",
        "cubic meters",
        "cubic decimeters",
        "cubic centimeters",
        "liters",
        "deciliters",
        "centiliters",
        "milliliters",
        "barrels (oil)",
        "gallons (US)",
      ],
    },
  },
  es: {
    // Единицы измерения на испанском языке
    app_title: "Convertidor de unidades",
    length: "Longitud",
    weight: "Peso",
    volume: "Volumen",
    enter_value: "Ingrese valor",
    convert: "Convertir",
    theme_light: "Tema claro",
    theme_dark: "Tema oscuro",
    error: "Ingrese un número válido",
    units: {
      length: [
        "kilómetros",
        "metros",
        "decímetros",
        "centímetros",
        "milímetros",
      ],
      weight: [
        "toneladas",
        "centners",
        "kilogramos",
        "gramos",
        "miligramos",
        "libras",
        "poods",
      ],
      volume: [
        "kilómetros cúbicos",
        "metros cúbicos",
        "decímetros cúbicos",
        "centímetros cúbicos",
        "litros",
        "decilitros",
        "centilitros",
        "mililitros",
        "barriles (petróleo)",
        "galones (EE.UU.)",
      ],
    },
  },
  fr: {
    // Единицы измерения на французском языке
    app_title: "Convertisseur d'unités",
    length: "Longueur",
    weight: "Poids",
    volume: "Volume",
    enter_value: "Entrez la valeur",
    convert: "Convertir",
    theme_light: "Thème clair",
    theme_dark: "Thème sombre",
    error: "Entrez un nombre valide",
    units: {
      length: [
        "kilomètres",
        "mètres",
        "décimètres",
        "centimètres",
        "millimètres",
      ],
      weight: [
        "tonnes",
        "centners",
        "kilogrammes",
        "grammes",
        "milligrammes",
        "livres",
        "pouds",
      ],
      volume: [
        "kilomètres cubes",
        "mètres cubes",
        "décimètres cubes",
        "centimètres cubes",
        "litres",
        "décilitres",
        "centilitres",
        "millilitres",
        "barils (pétrole)",
        "gallons (US)",
      ],
    },
  },
  de: {
    // Единицы измерения на немецком языке
    app_title: "Einheitenumrechner",
    length: "Länge",
    weight: "Gewicht",
    volume: "Volumen",
    enter_value: "Wert eingeben",
    convert: "Konvertieren",
    theme_light: "Helles Thema",
    theme_dark: "Dunkles Thema",
    error: "Geben Sie eine gültige Zahl ein",
    units: {
      length: ["Kilometer", "Meter", "Dezimeter", "Zentimeter", "Millimeter"],
      weight: [
        "Tonnen",
        "Zentner",
        "Kilogramm",
        "Gramm",
        "Milligramm",
        "Pfund",
        "Pud",
      ],
      volume: [
        "Kubikkilometer",
        "Kubikmeter",
        "Kubikdezimeter",
        "Kubikzentimeter",
        "Liter",
        "Deziliter",
        "Zentiliter",
        "Milliliter",
        "Fässer (Öl)",
        "Gallonen (US)",
      ],
    },
  },
  it: {
    // Единицы измерения на итальянском языке
    app_title: "Convertitore di unità",
    length: "Lunghezza",
    weight: "Peso",
    volume: "Volume",
    enter_value: "Inserisci valore",
    convert: "Converti",
    theme_light: "Tema chiaro",
    theme_dark: "Tema scuro",
    error: "Inserisci un numero valido",
    units: {
      length: ["chilometri", "metri", "decimetri", "centimetri", "millimetri"],
      weight: [
        "tonnellate",
        "centners",
        "chilogrammi",
        "grammi",
        "milligrammi",
        "libbre",
        "pud",
      ],
      volume: [
        "chilometri cubi",
        "metri cubi",
        "decimetri cubi",
        "centimetri cubi",
        "litri",
        "decilitri",
        "centilitri",
        "millilitri",
        "barili (petrolio)",
        "galloni (USA)",
      ],
    },
  },
  pt: {
    // Единицы измерения на португальском языке
    app_title: "Conversor de unidades",
    length: "Comprimento",
    weight: "Peso",
    volume: "Volume",
    enter_value: "Insira o valor",
    convert: "Converter",
    theme_light: "Tema claro",
    theme_dark: "Tema escuro",
    error: "Insira um número válido",
    units: {
      length: [
        "quilômetros",
        "metros",
        "decímetros",
        "centímetros",
        "milímetros",
      ],
      weight: [
        "toneladas",
        "centners",
        "quilogramas",
        "gramas",
        "miligramas",
        "libras",
        "poods",
      ],
      volume: [
        "quilômetros cúbicos",
        "metros cúбicos",
        "decímetros cúbicos",
        "centímetros cúbicos",
        "litros",
        "decilitros",
        "centilitros",
        "mililitros",
        "barris (petróleo)",
        "galões (EUA)",
      ],
    },
  },
  zh: {
    // Единицы измерения на китайском языке
    app_title: "单位转换器",
    length: "长度",
    weight: "重量",
    volume: "体积",
    enter_value: "输入值",
    convert: "转换",
    theme_light: "浅色主题",
    theme_dark: "深色主题",
    error: "请输入有效数字",
    units: {
      length: ["公里", "米", "分米", "厘米", "毫米"],
      weight: ["吨", "公担", "千克", "克", "毫克", "磅", "普特"],
      volume: [
        "立方公里",
        "立方米",
        "立方分米",
        "立方厘米",
        "升",
        "分升",
        "厘升",
        "毫升",
        "桶（石油）",
        "加仑（美制）",
      ],
    },
  },
  ja: {
    // Единицы измерения на японском языке
    app_title: "単位変換ツール",
    length: "長さ",
    weight: "重さ",
    volume: "体積",
    enter_value: "値を入力",
    convert: "変換",
    theme_light: "ライトテーマ",
    theme_dark: "ダークテーマ",
    error: "有効な数字を入力してください",
    units: {
      length: [
        "キロメートル",
        "メートル",
        "デシメートル",
        "センチメートル",
        "ミリメートル",
      ],
      weight: [
        "トン",
        "ツェントナー",
        "キログラム",
        "グラム",
        "ミリグラム",
        "ポンド",
        "プード",
      ],
      volume: [
        "立方キロメートル",
        "立方メートル",
        "立方デシメートル",
        "立方センチメートル",
        "リットル",
        "デシリットル",
        "センチリットル",
        "ミリリットル",
        "バレル（石油）",
        "ガロン（米）",
      ],
    },
  },
  ar: {
    // Единицы измерения на арабском языке
    app_title: "محول الوحدات",
    length: "الطول",
    weight: "الوزن",
    volume: "الحجم",
    enter_value: "أدخل القيمة",
    convert: "تحويل",
    theme_light: "مظهر فاتح",
    theme_dark: "مظهر داكن",
    error: "أدخل رقماً صحيحاً",
    units: {
      length: ["كيلومترات", "أمتار", "ديسيمترات", "سنتيمترات", "ملليمترات"],
      weight: [
        "أطنان",
        "سنتنر",
        "كيلوغرامات",
        "غرامات",
        "ملليغرامات",
        "أرطال",
        "بود",
      ],
      volume: [
        "كيلومترات مكعبة",
        "أمتار مكعبة",
        "ديسيمترات مكعبة",
        "سنتيمترات مكعبة",
        "لترات",
        "ديسيلترات",
        "سنتيلترات",
        "ملليلترات",
        "براميل (نفط)",
        "غالونات (أمريكية)",
      ],
    },
  },
};

// Объект с сокращениями единиц измерения для всех языков
const unitAbbreviations = {
  километры: "км",
  kilometers: "km",
  kilómetros: "km",
  kilomètres: "km",
  Kilometer: "km",
  chilometri: "km",
  quilômetros: "km",
  公里: "km",
  キロメートル: "km",
  كيلومترات: "كم",
  метры: "м",
  meters: "m",
  metros: "m",
  mètres: "m",
  Meter: "m",
  metri: "m",
  米: "m",
  メートル: "m",
  أمتار: "م",
  дециметры: "дм",
  decimeters: "dm",
  decímetros: "dm",
  décimètres: "dm",
  Dezimeter: "dm",
  decimetri: "dm",
  分米: "dm",
  デシメートル: "dm",
  ديسيمترات: "دسم",
  сантиметры: "см",
  centimeters: "cm",
  centímetros: "cm",
  centimètres: "cm",
  Zentimeter: "cm",
  centimetri: "cm",
  厘米: "cm",
  センチメートル: "cm",
  سنتيمترات: "سم",
  миллиметры: "мм",
  millimeters: "mm",
  milímetros: "mm",
  millimètres: "mm",
  Millimeter: "mm",
  millimetri: "mm",
  毫米: "mm",
  ミリメートル: "mm",
  ملليمترات: "مم",
  тонны: "т",
  tons: "t",
  toneladas: "t",
  tonnes: "t",
  Tonnen: "t",
  tonnellate: "t",
  吨: "t",
  トン: "t",
  أطنان: "طن",
  центнеры: "ц",
  centners: "c",
  Zentner: "z",
  公担: "q",
  ツェントナー: "z",
  سنتنر: "س",
  килограммы: "кг",
  kilograms: "kg",
  kilogramos: "kg",
  kilogrammes: "kg",
  Kilogramm: "kg",
  chilogrammi: "kg",
  千克: "kg",
  キログラム: "kg",
  كيلوغرامات: "كغ",
  граммы: "г",
  grams: "g",
  gramos: "g",
  grammes: "g",
  Gramm: "g",
  grammi: "g",
  克: "g",
  グラム: "g",
  غرامات: "غ",
  миллиграммы: "мг",
  milligrams: "mg",
  miligramos: "mg",
  milligrammes: "mg",
  Milligramm: "mg",
  milligrammi: "mg",
  毫克: "mg",
  ミリグラム: "mg",
  ملليغرامات: "ملغ",
  фунты: "фунт",
  pounds: "lb",
  libras: "lb",
  livres: "lb",
  Pfund: "lb",
  libbre: "lb",
  磅: "磅",
  ポンド: "ポンド",
  أرطال: "رطل",
  пуды: "пуд",
  poods: "pood",
  pouds: "pood",
  Pud: "pood",
  pud: "pood",
  普特: "普特",
  プード: "プード",
  بود: "بود",
  "кубические километры": "км³",
  "cubic kilometers": "km³",
  "kilómetros cúbicos": "km³",
  "kilomètres cubes": "km³",
  Kubikkilometer: "km³",
  "chilometri cubi": "km³",
  立方公里: "km³",
  立方キロメートル: "km³",
  "كيلومترات مكعبة": "كم³",
  "кубические метры": "м³",
  "cubic meters": "m³",
  "metros cúbicos": "m³",
  "mètres cubes": "m³",
  Kubikmeter: "m³",
  "metri cubi": "m³",
  立方米: "m³",
  立方メートル: "m³",
  "أمتار مكعبة": "م³",
  "кубические дециметры": "дм³",
  "cubic decimeters": "dm³",
  "decímetros cúbicos": "dm³",
  "décimètres cubes": "dm³",
  Kubikdezimeter: "dm³",
  "decimetri cubi": "dm³",
  立方分米: "dm³",
  立方デシメートル: "dm³",
  "ديسيمترات مكعبة": "دسم³",
  "кубические сантиметры": "см³",
  "cubic centimeters": "cm³",
  "centímetros cúбicos": "cm³",
  "centimètres cubes": "cm³",
  Kubikzentimeter: "cm³",
  "centimetri cubi": "cm³",
  立方厘米: "cm³",
  立方センチメートル: "cm³",
  "سنتيمترات مكعبة": "سم³",
  литры: "л",
  liters: "l",
  litros: "l",
  litres: "l",
  Liter: "l",
  litri: "l",
  升: "升",
  リットル: "l",
  لترات: "ل",
  децилитры: "дл",
  deciliters: "dl",
  decilitros: "dl",
  décilitres: "dl",
  Deziliter: "dl",
  decilitri: "dl",
  分升: "dl",
  デシリットル: "dl",
  ديسيلترات: "دل",
  сантилитры: "сл",
  centiliters: "cl",
  centilitros: "cl",
  centilitres: "cl",
  Zentiliter: "cl",
  centilitri: "cl",
  厘升: "cl",
  センチリットル: "cl",
  سنتيلترات: "سل",
  миллилитры: "мл",
  milliliters: "ml",
  mililitros: "ml",
  millilitres: "ml",
  Milliliter: "ml",
  millilitri: "ml",
  毫升: "ml",
  ミリリットル: "ml",
  ملليلترات: "مل",
  "баррели (нефтяные)": "барр",
  "barrels (oil)": "bbl",
  "barriles (petróleo)": "bbl",
  "barils (pétrole)": "bbl",
  "Fässer (Öl)": "bbl",
  "barili (petrolio)": "bbl",
  "桶（石油）": "桶",
  "バレル（石油）": "バレル",
  "براميل (نفط)": "برميل",
  "галлоны (амер.)": "гал",
  "gallons (US)": "gal",
  "galones (EE.UU.)": "gal",
  "gallons (US)": "gal",
  "Gallonen (US)": "gal",
  "galloni (USA)": "gal",
  "加仑（美制）": "加仑",
  "ガロン（米）": "ガロン",
  "غالونات (أمريكية)": "غال",
};

// Объект с коэффициентами конвертации для всех единиц и языков
const conversionRates = {
  length: {
    километры: 1000,
    kilometers: 1000,
    kilómetros: 1000,
    kilomètres: 1000,
    Kilometer: 1000,
    chilometri: 1000,
    quilômetros: 1000,
    公里: 1000,
    キロメートル: 1000,
    كيلومترات: 1000,
    метры: 1,
    meters: 1,
    metros: 1,
    mètres: 1,
    Meter: 1,
    metri: 1,
    米: 1,
    メートル: 1,
    أمتار: 1,
    дециметры: 0.1,
    decimeters: 0.1,
    decímetros: 0.1,
    décimètres: 0.1,
    Dezimeter: 0.1,
    decimetri: 0.1,
    分米: 0.1,
    デシメートル: 0.1,
    ديسيمترات: 0.1,
    сантиметры: 0.01,
    centimeters: 0.01,
    centímetros: 0.01,
    centimètres: 0.01,
    Zentimeter: 0.01,
    centimetri: 0.01,
    厘米: 0.01,
    センチメートル: 0.01,
    سنتيمترات: 0.01,
    миллиметры: 0.001,
    millimeters: 0.001,
    milímetros: 0.001,
    millimètres: 0.001,
    Millimeter: 0.001,
    millimetri: 0.001,
    毫米: 0.001,
    ミリメートル: 0.001,
    ملليمترات: 0.001,
  },
  weight: {
    тонны: 1000,
    tons: 1000,
    toneladas: 1000,
    tonnes: 1000,
    Tonnen: 1000,
    tonnellate: 1000,
    吨: 1000,
    トン: 1000,
    أطنان: 1000,
    центнеры: 100,
    centners: 100,
    Zentner: 100,
    公担: 100,
    ツェントナー: 100,
    سنتنر: 100,
    килограммы: 1,
    kilograms: 1,
    kilogramos: 1,
    kilogrammes: 1,
    Kilogramm: 1,
    chilogrammi: 1,
    千克: 1,
    キログラム: 1,
    كيلوغرامات: 1,
    граммы: 0.001,
    grams: 0.001,
    gramos: 0.001,
    grammes: 0.001,
    Gramm: 0.001,
    grammi: 0.001,
    克: 0.001,
    グラム: 0.001,
    غرامات: 0.001,
    миллиграммы: 0.000001,
    milligrams: 0.000001,
    miligramos: 0.000001,
    milligrammes: 0.000001,
    Milligramm: 0.000001,
    milligrammi: 0.000001,
    毫克: 0.000001,
    ミリグラム: 0.000001,
    ملليغرامات: 0.000001,
    фунты: 0.453592,
    pounds: 0.453592,
    libras: 0.453592,
    livres: 0.453592,
    Pfund: 0.453592,
    libbre: 0.453592,
    磅: 0.453592,
    ポンド: 0.453592,
    أرطال: 0.453592,
    пуды: 16.3805,
    poods: 16.3805,
    pouds: 16.3805,
    Pud: 16.3805,
    pud: 16.3805,
    普特: 16.3805,
    プード: 16.3805,
    بود: 16.3805,
  },
  volume: {
    "кубические километры": 1e9,
    "cubic kilometers": 1e9,
    "kilómetros cúбicos": 1e9,
    "kilomètres cubes": 1e9,
    Kubikkilometer: 1e9,
    "chilometri cubi": 1e9,
    立方公里: 1e9,
    立方キロメートル: 1e9,
    "كيلومترات مكعبة": 1e9,
    "кубические метры": 1,
    "cubic meters": 1,
    "metros cúбicos": 1,
    "mètres cubes": 1,
    Kubikmeter: 1,
    "metri cubi": 1,
    立方米: 1,
    立方メートル: 1,
    "أمتار مكعبة": 1,
    "кубические дециметры": 0.001,
    "cubic decimeters": 0.001,
    "decímetros cúбicos": 0.001,
    "décimètres cubes": 0.001,
    Kubikdezimeter: 0.001,
    "decimetri cubi": 0.001,
    立方分米: 0.001,
    立方デシメートル: 0.001,
    "ديسيمترات مكعبة": 0.001,
    "кубические сантиметры": 0.000001,
    "cubic centimeters": 0.000001,
    "centímetros cúбicos": 0.000001,
    "centimètres cubes": 0.000001,
    Kubikzentimeter: 0.000001,
    "centimetri cubi": 0.000001,
    立方厘米: 0.000001,
    立方センチメートル: 0.000001,
    "سنتيمترات مكعبة": 0.000001,
    литры: 0.001,
    liters: 0.001,
    litros: 0.001,
    litres: 0.001,
    Liter: 0.001,
    litri: 0.001,
    升: 0.001,
    リットル: 0.001,
    لترات: 0.001,
    децилитры: 0.0001,
    deciliters: 0.0001,
    decilitros: 0.0001,
    décilitres: 0.0001,
    Deziliter: 0.0001,
    decilitri: 0.0001,
    分升: 0.0001,
    デシリットル: 0.0001,
    ديسيلترات: 0.0001,
    сантилитры: 0.00001,
    centiliters: 0.00001,
    centilitros: 0.00001,
    centilitres: 0.00001,
    Zentiliter: 0.00001,
    centilitri: 0.00001,
    厘升: 0.00001,
    センチリットル: 0.00001,
    سنتيلترات: 0.00001,
    миллилитры: 0.000001,
    milliliters: 0.000001,
    mililitros: 0.000001,
    millilitres: 0.000001,
    Milliliter: 0.000001,
    millilitri: 0.000001,
    毫升: 0.000001,
    ミリリットル: 0.000001,
    ملليلترات: 0.000001,
    "баррели (нефтяные)": 158.987,
    "barrels (oil)": 158.987,
    "barriles (petróleo)": 158.987,
    "barils (pétrole)": 158.987,
    "Fässer (Öl)": 158.987,
    "barili (petrolio)": 158.987,
    "桶（石油）": 158.987,
    "バレル（石油）": 158.987,
    "براميل (نفط)": 158.987,
    "галлоны (амер.)": 3.78541,
    "gallons (US)": 3.78541,
    "galones (EE.UU.)": 3.78541,
    "gallons (US)": 3.78541,
    "Gallonen (US)": 3.78541,
    "galloni (USA)": 3.78541,
    "加仑（美制）": 3.78541,
    "ガロン（米）": 3.78541,
    "غالونات (أمريكية)": 3.78541,
  },
};

// Основная функция, выполняемая после загрузки DOM
document.addEventListener("DOMContentLoaded", () => {
  // Текущий язык по умолчанию
  let currentLanguage = "ru";

  // Получаем элементы управления
  const themeSwitcher = document.getElementById("theme-switcher");
  const languageSwitcher = document.getElementById("language-switcher");
  const languageDropdown = document.getElementById("language-dropdown");

  // Функция перевода интерфейса на выбранный язык
  function translateInterface(lang) {
    // Устанавливаем текущий язык
    currentLanguage = lang;

    // Обновляем основные элементы интерфейса
    document.getElementById("app-title").textContent =
      translations[lang].app_title;
    document.getElementById("value-input").placeholder =
      translations[lang].enter_value;
    document.getElementById("convert-btn").textContent =
      translations[lang].convert;

    // Обновляем опции выбора типа единиц измерения
    Array.from(document.getElementById("unit-type").options).forEach(
      (option) => {
        option.textContent = translations[lang][option.value];
      }
    );

    // Обновляем текст переключателя темы
    themeSwitcher.textContent = document.body.classList.contains("dark-theme")
      ? translations[lang].theme_light
      : translations[lang].theme_dark;

    // Помечаем активный язык в выпадающем списке
    document.querySelectorAll(".language-option").forEach((option) => {
      option.classList.remove("active");
      if (option.dataset.lang === lang) option.classList.add("active");
    });

    // Инициализируем выпадающие списки единиц измерения
    initUnitSelects();

    // Сохраняем выбранный язык в localStorage
    localStorage.setItem("language", lang);
  }

  // Функция инициализации выпадающих списков единиц измерения
  function initUnitSelects() {
    // Получаем выбранный тип единиц измерения
    const unitType = document.getElementById("unit-type").value;
    const fromUnit = document.getElementById("from-unit");
    const toUnit = document.getElementById("to-unit");

    // Сохраняем текущие значения для восстановления
    const currentFrom = fromUnit.value;
    const currentTo = toUnit.value;

    // Заполняем списки единицами измерения для текущего языка
    fromUnit.innerHTML = translations[currentLanguage].units[unitType]
      .map((unit) => `<option>${unit}</option>`)
      .join("");

    toUnit.innerHTML = translations[currentLanguage].units[unitType]
      .map((unit) => `<option>${unit}</option>`)
      .join("");

    // Восстанавливаем предыдущие значения, если они есть в новом списке
    if (translations[currentLanguage].units[unitType].includes(currentFrom)) {
      fromUnit.value = currentFrom;
    }

    if (translations[currentLanguage].units[unitType].includes(currentTo)) {
      toUnit.value = currentTo;
    }

    // Если выбраны одинаковые единицы, меняем целевую единицу
    if (fromUnit.value === toUnit.value) {
      const fromIndex = translations[currentLanguage].units[unitType].indexOf(
        fromUnit.value
      );
      const toIndex =
        (fromIndex + 1) % translations[currentLanguage].units[unitType].length;
      toUnit.value = translations[currentLanguage].units[unitType][toIndex];
    }

    // Сбрасываем результат конвертации
    document.getElementById("result").className = "result";
    document.getElementById("result").textContent = "";
  }

  // Функция форматирования числа с пробелами между разрядами
  function formatNumberWithSpaces(numStr) {
    // Удаляем все символы, кроме цифр и точек
    const cleaned = numStr.replace(/[^\d.]/g, "");

    // Разделяем на целую и дробную части
    const parts = cleaned.split(".");
    let integerPart = parts[0];
    const decimalPart = parts.length > 1 ? "." + parts.slice(1).join("") : "";

    // Добавляем пробелы между разрядами в целой части
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    // Возвращаем объединённые части
    return integerPart + decimalPart;
  }

  // Функция очистки числа от форматирования (пробелов) и замены запятых на точки
  function cleanNumber(numStr) {
    return numStr.replace(/\s/g, "").replace(/,/g, ".");
  }

  // Обработчик ввода значения для конвертации
  document
    .getElementById("value-input")
    .addEventListener("input", function (e) {
      // Заменяем все запятые на точки
      let newValue = this.value.replace(/,/g, ".");

      // Если значение начинается с точки, добавляем ноль перед ней
      if (newValue.startsWith(".")) {
        newValue = "0" + newValue;
      }

      // Сохраняем позицию курсора перед изменением значения
      const cursorPos = this.selectionStart;
      const oldValue = this.value;

      // Форматируем число с пробелами
      this.value = formatNumberWithSpaces(newValue);

      // Корректируем позицию курсора после изменения значения
      const diff = this.value.length - oldValue.length;
      this.setSelectionRange(cursorPos + diff, cursorPos + diff);
    });

  // Обработчик нажатия кнопки конвертации
  document.getElementById("convert-btn").addEventListener("click", function () {
    // Получаем данные для конвертации
    const type = document.getElementById("unit-type").value;
    const fromUnit = document.getElementById("from-unit").value;
    const toUnit = document.getElementById("to-unit").value;
    const valueInput = cleanNumber(
      document.getElementById("value-input").value
    );
    const value = parseFloat(valueInput);
    const resultElement = document.getElementById("result");

    // Проверяем, что введено корректное число
    if (isNaN(value)) {
      resultElement.textContent = translations[currentLanguage].error;
      resultElement.className = "result error";
      return;
    }

    // Выполняем конвертацию
    const result =
      (value * conversionRates[type][fromUnit]) / conversionRates[type][toUnit];

    // Форматируем введённое значение и результат
    const formattedValue = formatNumberWithSpaces(value.toString());
    const formattedResult = formatNumberWithSpaces(
      result.toFixed(6).replace(/\.?0+$/, "")
    );

    // Получаем сокращения единиц измерения
    const fromAbbr = unitAbbreviations[fromUnit] || fromUnit;
    const toAbbr = unitAbbreviations[toUnit] || toUnit;

    // Отображаем результат
    resultElement.textContent = `${formattedValue} ${fromAbbr} = ${formattedResult} ${toAbbr}`;
    resultElement.className = "result active";
  });

  // Обработчик изменения исходной единицы измерения
  document.getElementById("from-unit").addEventListener("change", function () {
    const unitType = document.getElementById("unit-type").value;
    const fromUnit = this.value;
    const toUnit = document.getElementById("to-unit");

    // Если выбраны одинаковые единицы, меняем целевую единицу
    if (fromUnit === toUnit.value) {
      const fromIndex =
        translations[currentLanguage].units[unitType].indexOf(fromUnit);
      const toIndex =
        (fromIndex + 1) % translations[currentLanguage].units[unitType].length;
      toUnit.value = translations[currentLanguage].units[unitType][toIndex];
    }

    // Сбрасываем результат конвертации
    document.getElementById("result").className = "result";
    document.getElementById("result").textContent = "";
  });

  // Обработчик изменения целевой единицы измерения
  document.getElementById("to-unit").addEventListener("change", function () {
    const unitType = document.getElementById("unit-type").value;
    const toUnit = this.value;
    const fromUnit = document.getElementById("from-unit");

    // Если выбраны одинаковые единицы, меняем исходную единицу
    if (toUnit === fromUnit.value) {
      const toIndex =
        translations[currentLanguage].units[unitType].indexOf(toUnit);
      const fromIndex =
        (toIndex + 1) % translations[currentLanguage].units[unitType].length;
      fromUnit.value = translations[currentLanguage].units[unitType][fromIndex];
    }

    // Сбрасываем результат конвертации
    document.getElementById("result").className = "result";
    document.getElementById("result").textContent = "";
  });

  // Обработчик открытия/закрытия выпадающего списка языков
  languageSwitcher.addEventListener("click", function () {
    languageDropdown.classList.toggle("show");
  });

  // Обработчики выбора языка
  document.querySelectorAll(".language-option").forEach((option) => {
    option.addEventListener("click", function () {
      translateInterface(this.dataset.lang);
      languageDropdown.classList.remove("show");
    });
  });

  // Закрытие выпадающего списка языков при клике вне его
  document.addEventListener("click", function (event) {
    if (
      !languageSwitcher.contains(event.target) &&
      !languageDropdown.contains(event.target)
    ) {
      languageDropdown.classList.remove("show");
    }
  });

  // Обработчик изменения типа единиц измерения
  document
    .getElementById("unit-type")
    .addEventListener("change", initUnitSelects);

  // Обработчик переключения темы
  themeSwitcher.addEventListener("click", function () {
    if (document.body.classList.contains("dark-theme")) {
      // Переключаем на светлую тему
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
      this.textContent = translations[currentLanguage].theme_dark;
    } else {
      // Переключаем на темную тему
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
      this.textContent = translations[currentLanguage].theme_light;
    }

    // Сохраняем выбранную тему в localStorage
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-theme") ? "dark" : "light"
    );
  });

  // Восстановление сохраненных настроек при загрузке
  const savedLanguage = localStorage.getItem("language") || "ru";
  translateInterface(savedLanguage);
  initUnitSelects();

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    themeSwitcher.textContent = translations[savedLanguage].theme_dark;
  } else {
    themeSwitcher.textContent = translations[savedLanguage].theme_light;
  }
});
