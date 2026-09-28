export const site = {
  url: process.env.DEPLOY_SITE_URL || "https://www.cleanaircon.hk",
  name: "香港專業洗冷氣",
  nameEn: "HK AirCon Cleaning Specialists",
  phoneDisplay: "2333 4444",
  phoneTel: "+85223334444",
  whatsappDisplay: "6222 1100",
  whatsapp: "https://wa.me/85262221100",
  hours: "星期一至日 9:00–20:00",
  opens: "09:00",
  closes: "20:00",
  warrantyDays: 30,
  multiUnitDiscount: 50,
  area: "香港、九龍、新界 18 區",
  priceRange: "HK$200–HK$3,200",
  updated: "2026-09-26",
  logo: "/images/logo.png",
  hero: "/images/hero.png",
};

export const districts = [
  "中西區",
  "灣仔區",
  "東區",
  "南區",
  "油尖旺區",
  "深水埗區",
  "九龍城區",
  "黃大仙區",
  "觀塘區",
  "葵青區",
  "荃灣區",
  "屯門區",
  "元朗區",
  "北區",
  "大埔區",
  "沙田區",
  "西貢區",
  "離島區",
];

export const nav = [
  { href: "/", label: "首頁" },
  {
    href: "/services",
    label: "服務",
    children: [
      { href: "/services", label: "全部服務" },
      { href: "/services/residential", label: "住宅洗冷氣" },
      { href: "/services/commercial", label: "商業洗冷氣" },
    ],
  },
  { href: "/pricing", label: "機型及收費" },
  { href: "/cases", label: "清洗個案" },
  { href: "/knowledge", label: "冷氣知識" },
  { href: "/about", label: "關於我們" },
  { href: "/contact", label: "聯絡及預約" },
];

export const machines = [
  {
    slug: "window-ac",
    key: "窗口機",
    name: "窗口式冷氣機",
    desc: "裝喺窗口位嘅一體式冷氣機",
    where: "舊式住宅、唐樓",
    washPrice: 550,
    washRepairPrice: 750,
    priceFrom: false,
    note: "3 匹或以上窗口機加收約 HK$100；超過 3 匹需另行報價。",
    image: "/images/types/window-ac.png",
  },
  {
    slug: "split-wall",
    key: "分體機",
    name: "掛牆分體機（室內機）",
    desc: "最常見嘅掛牆分體式冷氣機",
    where: "一般住宅",
    washPrice: 650,
    washRepairPrice: 850,
    priceFrom: false,
    note: "室外機可以加購連洗。外牆位需要搭棚或吊船時，棚費另行報價。",
    image: "/images/types/split-wall.png",
  },
  {
    slug: "outdoor-unit",
    key: "分體室外機",
    name: "分體室外機（連室內機同洗）",
    desc: "室外機加購連洗，外牆需搭棚另行報價",
    where: "分體機配套（加購）",
    washPrice: 200,
    washRepairPrice: 200,
    priceFrom: false,
    note: "只限安全、師傅可以到達嘅位置。需要高空工作或者搭棚，會先評估再報價，棚費由顧客承擔。",
    image: "/images/types/outdoor-unit.png",
  },
  {
    slug: "slim-split",
    key: "口琴機",
    name: "口琴式分體機",
    desc: "纖巧長條形分體機（俗稱口琴機）",
    where: "住宅廳房、細商舖",
    washPrice: 900,
    washRepairPrice: 1100,
    priceFrom: false,
    note: "機身幼長，拆面板同風輪要預留足夠時間。",
    image: "/images/types/slim-split.png",
  },
  {
    slug: "ceiling-cassette",
    key: "天花機",
    name: "四面出風（天花機）",
    desc: "裝喺天花板嘅卡式冷氣機",
    where: "商舖、寫字樓",
    washPrice: 1100,
    washRepairPrice: 1300,
    priceFrom: false,
    note: "需要拆天花面板，施工時間會長過分體機。",
    image: "/images/types/ceiling-cassette.png",
  },
  {
    slug: "ducted",
    key: "風喉機",
    name: "風喉式冷氣機",
    desc: "連風喉系統嘅商用冷氣機",
    where: "豪宅、酒店、寫字樓",
    washPrice: 1400,
    washRepairPrice: 1600,
    priceFrom: true,
    note: "按現場風喉同機況確認最終報價，列出嘅係起步價。",
    image: "/images/types/ducted.png",
  },
  {
    slug: "floor-standing",
    key: "直立櫃式",
    name: "直立／櫃式冷氣機",
    desc: "企地式櫃機，常見於店舖同大廳",
    where: "客廳、商舖",
    washPrice: 950,
    washRepairPrice: 1150,
    priceFrom: false,
    note: "需拆前面板清洗出風口同風輪。",
    image: "/images/types/floor-standing.png",
  },
  {
    slug: "fcu",
    key: "FCU",
    name: "FCU／風機盤管",
    desc: "中央冷氣末端風機盤管，寫字樓常見",
    where: "寫字樓、大廈",
    washPrice: 1200,
    washRepairPrice: 1400,
    priceFrom: false,
    note: "會一併檢查排水盤。滴水多數同排水盤積泥有關。",
    image: "/images/types/fcu.png",
  },
  {
    slug: "vrv",
    key: "VRV",
    name: "VRV／VRF 多聯機",
    desc: "一拖多商用系統，按室內機數量計",
    where: "新型住宅、商業",
    washPrice: 1300,
    washRepairPrice: 1500,
    priceFrom: false,
    note: "按室內機數量計費。室外主機位置要先確認可唔可以安全到達。",
    image: "/images/types/vrv.png",
  },
  {
    slug: "rooftop",
    key: "天台組合式",
    name: "組合式／天台機組",
    desc: "天台大型機組，需先睇位",
    where: "工商業大廈",
    washPrice: 2800,
    washRepairPrice: 3200,
    priceFrom: true,
    note: "需先睇位，按現場情況確認最終報價，列出嘅係起步價。",
    image: "/images/types/rooftop.png",
  },
];

export const washIncludes = [
  "拆洗隔塵網及外殼",
  "高壓清洗冷排同風輪",
  "清理去水盤及去水喉",
  "除霉消毒，清水過清並開機吹乾",
  "完成後測試冷凍效果",
  "完成後 30 日保養，有問題免費跟進",
];

export const repairIncludes = [
  "包括洗冷氣全部步驟",
  "檢查雪種壓力及電路",
  "檢查摩打、電容、壓縮機",
  "維修零件先報價後開工",
];

export const quotedSeparately = [
  "室外機加購每部 HK$200，只限安全、師傅可以到達嘅位置",
  "外牆需搭棚或吊船時，棚費由顧客承擔，先上門睇位報價",
  "3 匹或以上窗口機加收約 HK$100；超過 3 匹需另行報價",
  "星期六、日及公眾假期服務可能加收，預約時會同你說明",
  "偏遠地區（離島、東涌、馬灣、愉景灣）或需加收車費",
  "風喉機及天台組合式機組按現場情況確認最終報價",
  "加雪種同更換零件按實際工序，開工前報價",
];

export const cleanSteps = [
  "檢查機身同試機",
  "拆出隔塵網同面板",
  "清洗冷排、風輪同排水盤",
  "消毒同抹乾",
  "裝回試機，交代保養建議",
];

export const visitSteps = [
  { title: "報機型同數量", text: "網上預約或 WhatsApp 報機型同數量，即時睇到預計費用。" },
  { title: "上門檢查", text: "師傅上門檢查冷氣機狀況，確認機型同施工位置。" },
  { title: "包好牆身地面", text: "開工前用防水布包好牆身、地面同傢俬。" },
  { title: "深層清洗消毒", text: "拆件清洗冷排、風輪同去水盤，除霉消毒。" },
  { title: "通去水並試機", text: "通去水、裝返、開機測試冷凍效果。" },
  { title: "清理現場", text: "收拾防水布同工具，交代保養建議。" },
];

export const promises = [
  { title: "服務保證", text: "完工 30 日內，清洗引起嘅滴水同異味免費跟進。零件同雪種另行報價。" },
  { title: "開工先包好", text: "開工前用防水布包好牆身、地面同傢俬。" },
  { title: "專業清洗", text: "用冷氣專用清潔劑拆洗冷排、風輪同去水盤，完工試機，並影相比客人。" },
  { title: "全港服務", text: "香港、九龍、新界 18 區都去到。周末、偏遠、搭棚同大匹數會預約時講明。" },
];

export const whyPhotos = [
  { image: "/images/why/why-04.jpg", label: "窗口機冷排積塵" },
  { image: "/images/why/why-01.jpg", label: "冷排積塵" },
  { image: "/images/why/why-05.jpg", label: "隔塵網塞住" },
  { image: "/images/why/why-06.jpg", label: "隔塵網積塵" },
  { image: "/images/why/why-16.jpg", label: "去水盤積塵" },
  { image: "/images/why/why-19.jpg", label: "去水盤積泥" },
  { image: "/images/why/why-21.jpg", label: "室外機散熱片積塵" },
  { image: "/images/why/why-08.jpg", label: "風輪發霉" },
];

export const residentialPoints = [
  "屋苑、村屋、唐樓都有服務",
  "開工前會用防水布包好牆身同傢俬",
  "有小朋友或者寵物嘅家庭都可以放心",
  "預約時間彈性，星期六日照做",
  "清洗後即場試機，確認冷氣正常",
  "兩部或以上同時清洗，每部減 HK$50",
];

export const commercialPoints = [
  "寫字樓、商舖、食肆、學校都接",
  "天花機、FCU、VRV、風喉機、天台組合式都做得",
  "可安排非辦公時間施工，減少影響營業",
  "大量機組可分批處理",
  "提供清洗報告方便公司存檔",
  "可簽定期保養合約",
];

export const cases = [
  { id: "sha-tin", district: "沙田", region: "新界", machine: "split-wall", body: "住宅掛牆分體機，隔塵網積滿塵，散熱片同風輪發霉，出風有霉味。拆洗隔塵網、高壓清洗散熱片同風輪後回復乾淨。" },
  { id: "kwun-tong", district: "觀塘", region: "九龍", machine: "ceiling-cassette", body: "寫字樓四面出風，隔塵網塞滿塵，冷氣唔夠凍。" },
  { id: "tseung-kwan-o", district: "將軍澳", region: "新界", machine: "window-ac", body: "舊式窗口機，機底積水同生霉，需要拆機深層清洗。" },
  { id: "tsuen-wan", district: "荃灣", region: "新界", machine: "slim-split", body: "睡房口琴機，風輪有黑色霉斑，吹出嚟有霉味。" },
  { id: "wan-chai", district: "灣仔", region: "香港島", machine: "ducted", body: "餐廳風喉機，油煙積聚喺冷排，需要專用清潔劑處理。" },
  { id: "yuen-long", district: "元朗", region: "新界", machine: "outdoor-unit", body: "村屋室外機散熱片塞滿落葉同塵，影響散熱。" },
  { id: "kowloon-city", district: "九龍城", region: "九龍", machine: "split-wall", body: "有小朋友家庭，定期清洗減少塵蟎同致敏原。" },
  { id: "kwai-tsing", district: "葵青", region: "新界", machine: "fcu", body: "工廈 FCU 風機盤管，排水盤積泥，出現滴水問題。" },
  { id: "central-western", district: "中西區", region: "香港島", machine: "vrv", body: "商業大廈 VRV 多聯機室內機，季度保養清洗。" },
  { id: "sham-shui-po", district: "深水埗", region: "九龍", machine: "window-ac", body: "劏房窗口機，長期開冷氣，隔塵網同冷排嚴重積塵。" },
  { id: "tai-po", district: "大埔", region: "新界", machine: "floor-standing", body: "店舖直立櫃式冷氣，出風口積塵，需拆面板清洗。" },
  { id: "tuen-mun", district: "屯門", region: "新界", machine: "split-wall", body: "客廳分體機，冷氣滴水，清通去水喉後回復正常。" },
  { id: "eastern", district: "東區", region: "香港島", machine: "ceiling-cassette", body: "診所天花機，要求消毒清洗，保持空氣衛生。" },
  { id: "yau-tsim-mong", district: "油尖旺", region: "九龍", machine: "ducted", body: "美容院風喉機，出風量減弱，清洗風輪同隔塵網。" },
  { id: "north", district: "北區", region: "新界", machine: "split-wall", body: "新樓入伙前清洗，去除裝修期間積落嘅塵。" },
  { id: "sai-kung", district: "西貢", region: "新界", machine: "outdoor-unit", body: "海邊單位室外機，鹽分侵蝕散熱片，清洗同防鏽處理。" },
  { id: "wong-tai-sin", district: "黃大仙", region: "九龍", machine: "slim-split", body: "長者家庭，冷氣有怪聲，清洗同檢查風輪。" },
  { id: "southern", district: "南區", region: "香港島", machine: "rooftop", body: "天台組合式機組，年度大型清洗保養。" },
  { id: "islands", district: "離島", region: "新界", machine: "window-ac", body: "東涌住宅，兩部窗口機一齊清洗，享多部優惠。" },
  { id: "school", district: "沙田（學校）", region: "新界", machine: "fcu", body: "學校課室 FCU，暑假前全面清洗。" },
];

export const caseRegions = ["香港島", "九龍", "新界"];

export function casePhoto(index, side) {
  const id = String(index + 1).padStart(2, "0");
  return `/images/cases/case-${id}-${side}.png`;
}

export const faqs = [
  {
    q: "洗冷氣幾錢？",
    a: "按機型收費：窗口機 HK$550、分體機 HK$650、口琴機 HK$900、直立櫃式 HK$950、天花機 HK$1,100、FCU HK$1,200、VRV HK$1,300、風喉機 HK$1,400 起、天台組合式 HK$2,800 起；室外機加購 HK$200。",
    href: "/pricing",
    linkLabel: "睇晒 10 款收費",
  },
  {
    q: "洗一部冷氣要幾耐？",
    a: "分體機同窗口機一般約 1 小時；天花機、風喉機等要拆天花配件，時間會長啲。",
    href: "/services",
    linkLabel: "睇清洗步驟",
  },
  {
    q: "幾耐洗一次冷氣好？",
    a: "一般家庭每年一次；有小朋友、寵物、鼻敏感人士或者用得密，建議 6–9 個月一次。",
    href: "/knowledge/aircon-cleaning-price-guide",
    linkLabel: "睇價錢指南",
  },
  {
    q: "包唔包洗室外機？",
    a: "室外機可以加購（HK$200／部），但只限安全、師傅可以到達嘅位置。需要高空工作或者搭棚，會先評估再報價。",
    href: "/services/outdoor-unit",
    linkLabel: "睇室外機收費",
  },
  {
    q: "洗冷氣會唔會整污糟屋企？",
    a: "開工前會用防水布包好牆身、地面同傢俬，洗完會清理現場。",
    href: "/services/residential",
    linkLabel: "睇住宅服務",
  },
  {
    q: "洗完冷氣會唔會凍啲、慳電啲？",
    a: "散熱片同風輪積塵清走後，風量同製冷一般會改善，冷氣機唔使咁辛苦，亦有助慳電。",
    href: "/services",
    linkLabel: "睇洗冷氣包括咩",
  },
  {
    q: "冷氣滴水，洗冷氣可以解決嗎？",
    a: "好多滴水係因為去水喉或者去水盤塞，洗冷氣時會一齊通去水。如果係安裝斜度或者零件問題，可以揀「洗 + 維修」。",
    href: "/services",
    linkLabel: "睇洗 + 維修",
  },
  {
    q: "冷氣唔凍係咪一定要加雪種？",
    a: "唔一定。隔塵網同散熱片積塵都會令冷氣唔凍。師傅會先檢查，如真係需要加雪種或換零件，會先報價，你同意先做。",
    href: "/pricing",
    linkLabel: "睇收費方式",
  },
  {
    q: "用咩清潔劑？有小朋友同寵物安唔安全？",
    a: "我哋用冷氣專用清潔劑，洗完會用清水過清，並開機吹乾，有小朋友同寵物嘅家庭都可以放心。",
    href: "/services/residential",
    linkLabel: "睇住宅安排",
  },
  {
    q: "洗 + 維修點收費？",
    a: "洗冷氣按機型收費。網站價係標準機。零件、雪種、周末、偏遠、搭棚同大匹數會預約或開工前講明。",
    href: "/pricing",
    linkLabel: "睇機型價錢",
  },
  {
    q: "服務範圍係邊？",
    a: "全港十八區，港島、九龍、新界都有服務。偏遠地區或者離島會預先講清楚安排。",
    href: "/cases",
    linkLabel: "睇各區個案",
  },
  {
    q: "商舖同寫字樓可唔可以預約？",
    a: "可以。天花機、FCU、VRV、風喉機、天台組合式都做得，可以安排非辦公時間施工。",
    href: "/services/commercial",
    linkLabel: "睇商業服務",
  },
  {
    q: "點樣預約？",
    a: "喺聯絡及預約填姓名、電話、地址、機型、數量同方便日期，即時睇到估價；亦可以直接打電話或 WhatsApp。",
    href: "/contact",
    linkLabel: "去預約",
  },
  {
    q: "可唔可以改期？",
    a: "可以，請盡早聯絡我哋，我哋會幫你重新安排。",
    href: "/contact",
    linkLabel: "聯絡我哋",
  },
];

export const priceFactors = [
  { title: "機型", text: "天花機、風喉機要拆天花配件，工序多過窗口機同分體機。" },
  { title: "匹數", text: "大匹數機身大、部件多。" },
  { title: "室外機位置", text: "只可以喺安全、可到達嘅位置清洗；需要高空工作要另外評估。" },
  { title: "機況", text: "嚴重發霉、去水喉塞、滴水，可能需要額外處理。" },
  { title: "地點同樓層", text: "偏遠地區或者冇升降機，可能會有額外安排。" },
];

export const quoteQuestions = [
  "包唔包室外機？",
  "包唔包通去水？",
  "有冇除霉消毒？",
  "洗完有冇試機同保養跟進？",
  "到場後有冇任何額外收費？",
];

export const saveTips = [
  { title: "一次過洗幾部", text: "一次上門處理晒，慳時間。兩部或以上同時清洗，每部減 HK$50。" },
  { title: "避開夏天高峰", text: "春季或者秋季預約，時間較易揀。" },
  { title: "每月自己洗隔塵網", text: "可以延長深層清洗之間嘅時間。" },
];

export const articleFaqs = [
  {
    q: "洗一部冷氣要幾耐？",
    a: "分體機同窗口機一般約 1 小時，天花機同風喉機會長啲。",
  },
  {
    q: "洗完會唔會即刻凍啲？",
    a: "積塵清走之後，風量同製冷通常會改善；如果係雪種不足或者零件老化，就要檢查維修。",
  },
  {
    q: "點預約？",
    a: "喺聯絡及預約揀機型同數量，即時睇到估價。",
    href: "/contact",
    linkLabel: "去預約",
  },
];

export const pages = {
  home: {
    title: "洗冷氣｜香港專業洗冷氣｜窗口機 $550 起 全港上門",
    description:
      "香港專業洗冷氣提供全港 18 區上門洗冷氣同維修。窗口機 HK$550 起、分體機 HK$650 起，明碼實價，完工保養 30 日。",
    h1: "洗冷氣，搵香港專業洗冷氣就啱",
    answer:
      "香港專業洗冷氣提供全港 18 區上門清洗同維修，窗口機 HK$550 起、分體機 HK$650 起，完工有 30 日保養。",
  },
  services: {
    title: "洗冷氣服務｜住宅及商業清洗、洗+維修｜香港專業洗冷氣",
    description:
      "上門深層清洗隔塵網、冷排、風輪同去水盤，亦可一併檢查雪種同零件。住宅、寫字樓、商舖都接，先報價後開工。",
    h1: "洗冷氣服務",
    answer: "我哋上門深層清洗隔塵網、冷排、風輪同去水盤，亦可以一併檢查維修，住宅同商舖都接。",
  },
  residential: {
    title: "住宅洗冷氣｜屋苑、村屋、唐樓上門清洗｜香港專業洗冷氣",
    description:
      "屋苑、村屋同唐樓上門洗冷氣。開工前包好牆身同傢俬，星期六日都做，兩部或以上每部減 HK$50。",
    h1: "住宅洗冷氣",
    answer: "屋苑、村屋同唐樓都可以預約，開工前會包好牆身同傢俬，星期六日都上門。",
  },
  commercial: {
    title: "商業洗冷氣｜寫字樓、商舖、食肆、學校｜香港專業洗冷氣",
    description:
      "天花機、FCU、VRV、風喉機同天台機組清洗。可安排非辦公時間、分批施工，並提供清洗報告。",
    h1: "商業洗冷氣",
    answer: "天花機、FCU、VRV、風喉機同天台機組都可以做，並可安排非辦公時間施工。",
  },
  pricing: {
    title: "洗冷氣價錢 2026｜窗口機 $550、分體機 $650 起",
    description:
      "2026 年香港洗冷氣明碼收費：窗口機 HK$550、分體機 HK$650 起，共 10 款機型。兩部或以上每部減 HK$50。",
    h1: "洗冷氣價錢 2026",
    answer: "窗口機 HK$550 起，分體機 HK$650 起，共 10 款機型明碼實價；兩部或以上每部減 HK$50。",
  },
  cases: {
    title: "洗冷氣個案｜全港 18 區清洗紀錄｜香港專業洗冷氣",
    description:
      "各區清洗問題同處理結果，並對照機型收費。",
    h1: "全港 18 區清洗個案",
    answer: "由沙田分體機霉味到南區天台機組，以下係各區清洗問題同處理結果。",
  },
  knowledge: {
    title: "冷氣知識｜洗冷氣價錢指南及保養貼士｜香港專業洗冷氣",
    description: "洗冷氣點計錢、幾耐洗一次、報價前要問清嘅五件事。一文睇晒 2026 年香港收費同保養週期。",
    h1: "冷氣知識",
    answer: "呢度集中講洗冷氣點計錢、幾耐洗一次，同埋報價前要問清嘅五件事。",
  },
  article: {
    title: "洗冷氣價錢指南 2026｜10 款機型收費一覽同慳錢貼士",
    description:
      "2026 年香港洗冷氣價錢：窗口機 HK$550、分體機 HK$650 起。一文睇機型、匹數、位置同機況點樣影響報價。",
    h1: "洗冷氣價錢指南 2026",
    answer: "2026 年窗口機洗冷氣 HK$550、分體機 HK$650 起，價錢主要睇機型、匹數、位置同機況。",
  },
  faq: {
    title: "洗冷氣常見問題｜價錢、時間、室外機同保養",
    description:
      "洗冷氣幾錢、要幾耐、包唔包室外機、滴水同雪種點算。香港專業洗冷氣用短句答你最常問嘅問題。",
    h1: "洗冷氣常見問題",
    answer: "分體機同窗口機大約洗 1 小時，室外機可加購 HK$200，完成後有 30 日保養。",
  },
  about: {
    title: "關於我們｜香港專業洗冷氣",
    description:
      "香港專業洗冷氣專注全港上門洗冷氣同維修，用明碼實價幫家庭同公司保持冷氣乾淨、慳電、耐用，完工保養 30 日。",
    h1: "關於香港專業洗冷氣",
    answer: "我哋專注香港上門洗冷氣同維修，用明碼實價幫家庭同公司保持冷氣乾淨、慳電、耐用。",
  },
  contact: {
    title: "預約洗冷氣｜電話 2333 4444 及 WhatsApp",
    description:
      "填機型同數量即時睇到預計費用，再用 WhatsApp 發送。亦可以直接致電 2333 4444。營業時間星期一至日 9:00–20:00。",
    h1: "預約洗冷氣",
    answer: "填機型同數量即可睇到預計費用，亦可以直接致電 2333 4444 或 WhatsApp 6222 1100。",
  },
};

export function hkd(amount) {
  return `HK$${amount.toLocaleString("zh-HK")}`;
}

export function priceLabel(amount, from = false) {
  return `${hkd(amount)}${from ? " 起" : ""}`;
}

export function findMachine(slug) {
  return machines.find((item) => item.slug === slug) ?? null;
}

export function machineByKey(key) {
  return machines.find((item) => item.key === key) ?? null;
}

export function quote(machine, service, qty) {
  const count = Math.min(50, Math.max(1, Math.trunc(Number(qty)) || 1));
  const unit = service === "repair" ? machine.washRepairPrice : machine.washPrice;
  const discountEach = count >= 2 ? site.multiUnitDiscount : 0;
  const total = (unit - discountEach) * count;
  return { qty: count, unit, discountEach, total };
}

export function serviceLabel(service) {
  return service === "repair" ? "洗+維修" : "洗冷氣";
}

export function bookingMessage({
  name,
  phone,
  address,
  date,
  machineName,
  service,
  qty,
  total,
  discountEach,
}) {
  const lines = ["我想預約洗冷氣"];
  if (name) lines.push(`姓名：${name}`);
  if (phone) lines.push(`電話：${phone}`);
  if (address) lines.push(`地址：${address}`);
  if (date) lines.push(`方便日期：${date}`);
  lines.push(`機型：${machineName}`);
  lines.push(`服務：${serviceLabel(service)}`);
  lines.push(`數量：${qty} 部`);
  lines.push(`預計費用：${hkd(total)}`);
  if (discountEach) lines.push(`已計多部優惠：每部減 ${hkd(discountEach)}`);
  lines.push("最終以上門檢查為準。");
  return lines.join("\n");
}

export function whatsappHref(text) {
  return `${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function contactHref({ slug, service, qty }) {
  const params = new URLSearchParams({ type: slug, service, qty: String(qty) });
  return `/contact?${params.toString()}`;
}

export function machineMeta(machine) {
  const wash = hkd(machine.washPrice);
  const repair = hkd(machine.washRepairPrice);
  return {
    title: `${machine.key}洗冷氣價錢｜${wash} 起｜香港專業洗冷氣`,
    description: `${machine.name}：${machine.desc}。洗冷氣 ${wash} 起，洗+維修 ${repair} 起。全港 18 區上門，完工保養 ${site.warrantyDays} 日。`,
    h1: `${machine.name}洗冷氣`,
    answer: `${machine.name}洗冷氣 ${wash} 起，洗+維修 ${repair} 起。${machine.desc}。`,
  };
}

export function casesForMachine(slug) {
  return cases.filter((item) => item.machine === slug);
}

export function allHtmlPaths() {
  return [
    "/",
    "/services",
    "/services/residential",
    "/services/commercial",
    ...machines.map((item) => `/services/${item.slug}`),
    "/pricing",
    "/cases",
    "/knowledge",
    "/knowledge/aircon-cleaning-price-guide",
    "/faq",
    "/about",
    "/contact",
  ];
}

export function absolute(path) {
  if (path === "/") return `${site.url}/`;
  return `${site.url}${path}`;
}
