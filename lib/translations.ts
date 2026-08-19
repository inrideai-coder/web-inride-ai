export type Lang = "ar" | "fr" | "en";

export interface Dict {
  meta: { title: string; description: string };
  common: {
    menu: string;
    close: string;
    skip: string;
    backTop: string;
    learnMore: string;
    notFoundTitle: string;
    notFoundDesc: string;
    notFoundCta: string;
  };
  aria: { nav: string; lang: string; services: string; safety: string; support: string };
  nav: {
    home: string;
    services: string;
    ai: string;
    safety: string;
    drivers: string;
    business: string;
    news: string;
    about: string;
    support: string;
    cta: string;
    login: string;
  };
  hero: {
    badge: string;
    titleA: string;
    titleB: string;
    subtitle: string;
    ctaPwa: string;
    ctaWeb: string;
    statsRides: string;
    statsRating: string;
    statsWilayas: string;
    negChip: string;
    negYou: string;
    negYouOffer: string;
    negDriver: string;
    negDriverOffer: string;
    negAgreed: string;
    negAgreedLabel: string;
    negProposed: string;
    negCounter: string;
    negDone: string;
    phoneTitle: string;
    phoneSub: string;
    phoneFareLabel: string;
    phoneSos: string;
    phoneCancel: string;
  };
  fair: {
    kicker: string;
    title: string;
    subtitle: string;
    step1T: string;
    step1D: string;
    step2T: string;
    step2D: string;
    step3T: string;
    step3D: string;
    note: string;
  };
  services: {
    kicker: string;
    title: string;
    subtitle: string;
    riderTitle: string;
    driverTitle: string;
    s1T: string;
    s1Tag: string;
    s1D: string;
    s1R: string;
    s1Dr: string;
    s2T: string;
    s2Tag: string;
    s2D: string;
    s2R: string;
    s2Dr: string;
    s3T: string;
    s3Tag: string;
    s3D: string;
    s3R: string;
    s3Dr: string;
    s4T: string;
    s4Tag: string;
    s4D: string;
    s4R: string;
    s4Dr: string;
    s5T: string;
    s5Tag: string;
    s5D: string;
    s5R: string;
    s5Dr: string;
  };
  ai: {
    kicker: string;
    title: string;
    subtitle: string;
    f1T: string;
    f1D: string;
    f2T: string;
    f2D: string;
    f3T: string;
    f3D: string;
    f4T: string;
    f4D: string;
    f5T: string;
    f5D: string;
    f6T: string;
    f6D: string;
  };
  safety: {
    kicker: string;
    title: string;
    subtitle: string;
    c1: string;
    c2: string;
    c3: string;
    c4: string;
    c5: string;
    c6: string;
    c7: string;
    c8: string;
    c9: string;
    cta: string;
  };
  driver: {
    kicker: string;
    title: string;
    subtitle: string;
    b1: string;
    b2: string;
    b3: string;
    b4: string;
    b5: string;
    b6: string;
    cta: string;
    verTitle: string;
    verSub: string;
    verStep1: string;
    verStep2: string;
    verStep3: string;
    verStep4: string;
    verPending: string;
    verDocs: string;
    verReview: string;
    verApproved: string;
    verIdName: string;
    verIdNumber: string;
    verIdCar: string;
    verBadge: string;
  };
  rider: {
    kicker: string;
    title: string;
    subtitle: string;
    s1: string;
    s1D: string;
    s2: string;
    s2D: string;
    s3: string;
    s3D: string;
    s4: string;
    s4D: string;
    s5: string;
    s5D: string;
    s6: string;
    s6D: string;
    s7: string;
    s7D: string;
  };
  showcase: {
    kicker: string;
    title: string;
    subtitle: string;
    riderApp: string;
    driverApp: string;
    home: string;
    homeD: string;
    neg: string;
    negD: string;
    track: string;
    trackD: string;
    wallet: string;
    walletD: string;
    sos: string;
    sosD: string;
  };
  business: {
    kicker: string;
    title: string;
    subtitle: string;
    i1: string;
    i2: string;
    i3: string;
    i4: string;
    i5: string;
    i6: string;
    i7: string;
    cta: string;
    ctaSub: string;
  };
  news: {
    kicker: string;
    title: string;
    subtitle: string;
    readMore: string;
    placeholder: string;
    n1T: string;
    n1D: string;
    n1Cat: string;
    n1Date: string;
    n2T: string;
    n2D: string;
    n2Cat: string;
    n2Date: string;
    n3T: string;
    n3D: string;
    n3Cat: string;
    n3Date: string;
  };
  impact: {
    kicker: string;
    title: string;
    subtitle: string;
    i1: string;
    i1D: string;
    i2: string;
    i2D: string;
    i3: string;
    i3D: string;
    i4: string;
    i4D: string;
  };
  cities: {
    kicker: string;
    title: string;
    subtitle: string;
    available: string;
    soon: string;
    search: string;
    totalWilayas: string;
    cities: { name: string; status: "live" | "soon" }[];
  };
  download: {
    kicker: string;
    title: string;
    subtitle: string;
    playTop: string;
    playName: string;
    appleTop: string;
    appleName: string;
    huaweiTop: string;
    huaweiName: string;
    qrTitle: string;
    qrSub: string;
    qrAria: string;
  };
  finalCta: {
    title: string;
    subtitle: string;
    cta: string;
    alt: string;
    ctaDriver: string;
  };
  trust: {
    kicker: string;
    title: string;
    stat1: string;
    stat2: string;
    stat3: string;
    stat4: string;
    trust1: string;
    trust2: string;
    trust3: string;
    trust4: string;
  };
  footer: {
    tagline: string;
    aboutTitle: string;
    aboutText: string;
    servicesTitle: string;
    cityRides: string;
    interRides: string;
    express: string;
    airport: string;
    safetyTitle: string;
    riderSafety: string;
    driverSafety: string;
    docCheck: string;
    supportTitle: string;
    supportEmail: string;
    privacy: string;
    deletion: string;
    legalDocs: string;
    generalTerms: string;
    privacyPolicy: string;
    legalNote: string;
    rights: string;
    officialSite: string;
  };
}

const ar: Dict = {
  meta: {
    title: "INRIDE AI — تنقّل بذكاء. تحرّك بحرية.",
    description:
      "INRIDE AI منصة تنقل ذكية في الجزائر: أسعار عادلة بالتفاوض المباشر، تنقّل حضري، سفر بين الولايات، توصيل إكسبرس، سلامة عبر GPS حيّ وتوثيق هوية. حمّل التطبيق الآن.",
  },
  common: {
    menu: "فتح القائمة",
    close: "إغلاق القائمة",
    skip: "تخطَّ إلى المحتوى",
    backTop: "العودة إلى الأعلى",
    learnMore: "اعرف المزيد",
    notFoundTitle: "الصفحة غير موجودة",
    notFoundDesc: "يبدو أن الصفحة التي تبحث عنها غير متوفرة أو أُزيلت. عد إلى الرئيسية.",
    notFoundCta: "العودة إلى الرئيسية",
  },
  aria: {
    nav: "التنقل الرئيسي",
    lang: "اختيار اللغة",
    services: "خدماتنا",
    safety: "السلامة والحماية",
    support: "الدعم والامتثال",
  },
  nav: {
    home: "الرئيسية",
    services: "الخدمات",
    ai: "الذكاء الاصطناعي",
    safety: "السلامة",
    drivers: "للسائقين",
    business: "للشركات",
    news: "الأخبار",
    about: "من نحن",
    support: "الدعم",
    cta: "حمّل التطبيق",
    login: "تسجيل الدخول",
  },
  hero: {
    badge: "حرية التفاوض والتنقل بأسعار عادلة",
    titleA: "رحلات عادلة",
    titleB: "بالسعر الذي تتفقون عليه",
    subtitle:
      "لا خوارزميات ترفع الأسعار بشكل عشوائي. أنت تقترح السعر، والسائق يقبل أو يقدّم عرضاً مقابل عبر محرك تفاوض تفاعلي — شفافية كاملة من البداية إلى النهاية.",
    ctaPwa: "حمّل تطبيق PWA",
    ctaWeb: "جرّب النسخة التجريبية",
    statsRides: "رحلة مكتملة",
    statsRating: "تقييم المستخدمين",
    statsWilayas: "ولاية مغطاة",
    negChip: "محرك التفاوض",
    negYou: "أنت",
    negYouOffer: "تقترح 800 د.ج",
    negDriver: "السائق",
    negDriverOffer: "يعرض 850 د.ج",
    negAgreed: "تم الاتفاق",
    negAgreedLabel: "السعر المتفق عليه",
    negProposed: "مقترح",
    negCounter: "عرض مقابل",
    negDone: "820 د.ج",
    phoneTitle: "وصول السائق",
    phoneSub: "Yacine B. · Dacia Logan",
    phoneFareLabel: "السعر المتفق عليه",
    phoneSos: "نظام الحماية SOS متصل",
    phoneCancel: "إلغاء الرحلة",
  },
  fair: {
    kicker: "أسعار عادلة بالاتفاق المباشر",
    title: "لا خوارزمية تفرض عليك السعر",
    subtitle:
      "في INRIDE AI، أنت الطرف الذي يحدد السعر. تجربة تفاوض تفاعلية شفافة بين الراكب والسائق، بلا رسوم مخفية ولا أسعار مفروضة.",
    step1T: "تقترح السعر",
    step1D: "حدّد المبلغ الذي يناسبك لرحلتك مباشرة من التطبيق — في المدينة أو بين الولايات.",
    step2T: "يتفاوض السائق",
    step2D: "يقبل السائق عرضك أو يقدّم عرضاً مقابلاً حتى تجدا أرضية مشتركة.",
    step3T: "تنطلق الرحلتان باتفاق",
    step3D: "بمجرد الموافقة، يُثبَّت السعر وتنطلق الرحلة بكل شفافية وأمان.",
    note: "محرك التفاوض يضمن أن تبقى كل رحلة عادلة وشفافة ومتفقاً عليها — للركاب وللسائقين على حد سواء.",
  },
  services: {
    kicker: "خدمات INRIDE AI",
    title: "تطبيق واحد.. حلول تنقّل وتوصيل متكاملة",
    subtitle: "من التنقّل اليومي في المدينة إلى السفر بين الولايات والتوصيل السريع — منصة واحدة لجميع تنقلاتك.",
    riderTitle: "للركاب",
    driverTitle: "للسائقين",
    s1T: "تنقّل في المدينة",
    s1Tag: "تنقّل حضري",
    s1D: "أسعار عادلة تتفاوض عليها مباشرة مع السائق، ووصول سريع في كل الأحياء.",
    s1R: "اطلب رحلتك، حدّد نقطتي الانطلاق والوصول، واقترح السعر الذي يناسبك.",
    s1Dr: "استقبل طلبات الرحلات القريبة واختر السعر والمسار المناسب لبرنامجك.",
    s2T: "سفر بين الولايات",
    s2Tag: "مسافات طويلة",
    s2D: "رحلات مريحة وآمنة بين ولايات الجزائر بتكلفة عادلة محددة مسبقاً.",
    s2R: "اختر الراحة والأمان في الرحلات الطويلة، بسعر عادل ومتفق عليه مسبقاً.",
    s2Dr: "ضاعف أرباحك مع رحلات بين المدن والولايات بكل سهولة.",
    s3T: "توصيل إكسبرس",
    s3Tag: "توصيل سريع",
    s3D: "توصيل سريع وآمن للمستندات والطرود والطلبات الشخصية.",
    s3R: "توصيل سريع وآمن للمستندات والطرود والطلبات عبر المنصة.",
    s3Dr: "فرص عمل مرنة مع أرباح مباشرة وسريعة.",
    s4T: "نقل المطار",
    s4Tag: "سفر ووصول مريح",
    s4D: "احجز مسبقاً وتنقّل من وإلى المطار براحة تامة وبسعر متفق عليه.",
    s4R: "احجز رحلتك إلى المطار أو منه واطمئن على الوصول في الوقت المناسب.",
    s4Dr: "استقبل رحلات المطار المجدولة وخطط لمسارك بثقة.",
    s5T: "رحلات مجدولة",
    s5Tag: "حجز مسبق",
    s5D: "احجز رحلتك مسبقاً لضمان وصولك في الوقت المناسب.",
    s5R: "احجز رحلتك مسبقاً واطمئن على وصولك في الوقت المحدد.",
    s5Dr: "خطط لرحلاتك المجدولة وضاعف أرباحك.",
  },
  ai: {
    kicker: "الذكاء الاصطناعي في قلب INRIDE AI",
    title: "محرك ذكاء اصطناعي في خدمة رحلتك",
    subtitle: "نستخدم الذكاء الاصطناعي لتحسين كل تفصيل — من السعر العادل إلى المطابقة الذكية والأمان.",
    f1T: "تسعير ذكي عادل",
    f1D: "يقترح متوسط أسعار عادلة بناءً على المنطقة والطلب والوقت — دون رفع الأسعار عشوائياً.",
    f2T: "تقدير وصول دقيق",
    f2D: "تنبؤ بوقت وصول السائق والمسار المقترح في الوقت الحقيقي عبر GPS.",
    f3T: "كشف الاحتيال",
    f3D: "رصد الحسابات المزيفة والتلاعب بالموقع وتعدد الأجهزة وتجميد الحسابات المشبوهة.",
    f4T: "مطابقة ذكية للرحلات",
    f4D: "إيجاد السائق المناسب ضمن نطاق 2 إلى 8 كلم وفق أربع استراتيجيات ترتيب ذكية.",
    f5T: "مراقبة الأمان",
    f5D: "تحليل مستمر لسلوك الرحلات، وكشف الانحرافات عن المسار، وتمرير التنبيهات تلقائياً.",
    f6T: "مساعد ذكي للدعم",
    f6D: "ردود فورية عبر النص والصوت بالعربية والفرنسية والإنجليزية، مع تذاكر دعم منظمة.",
  },
  safety: {
    kicker: "السلامة أولاً",
    title: "تسع ضمانات حماية في كل رحلة",
    subtitle: "نطبّق أعلى معايير الحماية لضمان أمان جميع مستخدمي المنصة في كل رحلة.",
    c1: "توثيق هوية صارم للسائقين والركاب",
    c2: "التحقق من رخصة القيادة ووثائق المركبة",
    c3: "التأمين إلزامي لكل مركبة على المنصة",
    c4: "مشاركة المسار المباشر مع العائلة",
    c5: "زر SOS ونظام طوارئ فوري",
    c6: "مشاركة الرحلة مع الأحباب لحظة الانطلاق",
    c7: "تقييم متبادل للسائقين والركاب بعد كل رحلة",
    c8: "دعم ومراقبة على مدار الساعة",
    c9: "حماية البيانات وفق القانون الجزائري 18-07",
    cta: "اقرأ سياسة السلامة",
  },
  driver: {
    kicker: "انضم إلى عائلة السائقين",
    title: "كن شريكنا وقد أجرك كما تريد",
    subtitle:
      "سائقون مستقلون 100%. أنت من يقبل العرض ويرفضه وتحدد أوقات عملك وأرباحك — مع كل أدوات السلامة والدعم التي تحتاجها.",
    b1: "عمولات شفافة وبدون رسوم خفية",
    b2: "أرباحك تُدفع مباشرة إلى محفظتك",
    b3: "حرية كاملة في قبول أو رفض الرحلات",
    b4: "دفعات أسبوعية وربحية يومية واضحة",
    b5: "دعم فني وسلامة على مدار الساعة",
    b6: "فترات ذروة ومسارات مقترحة ذكية",
    cta: "ابدأ التسجيل الآن",
    verTitle: "توثيق السائق في 3 خطوات",
    verSub: "عملية تحقق تدريجية وآمنة تُفعّل حسابك خلال 24 إلى 48 ساعة.",
    verStep1: "إرسال الوثائق",
    verStep2: "المراجعة الآلية واليدوية",
    verStep3: "الاعتماد والانطلاق",
    verStep4: "مفعّل بالكامل",
    verPending: "بانتظار الإرسال",
    verDocs: "تم إرسال الوثائق",
    verReview: "قيد المراجعة",
    verApproved: "تم الاعتماد",
    verIdName: "Yacine Benali",
    verIdNumber: "بطاقة التعريف · ********",
    verIdCar: "Dacia Logan · 2021 · جزائر العاصمة",
    verBadge: "موثق",
  },
  rider: {
    kicker: "تجربة الراكب",
    title: "من تحميل التطبيق إلى وجهتك في 7 خطوات",
    subtitle: "رحلة استخدام بسيطة وواضحة صُممت لتوصلك إلى وجهتك بأقل جهد وبأعلى شفافية.",
    s1: "حمّل التطبيق",
    s1D: "ثبّت INRIDE AI من متجر التطبيقات وافتح حساباً في دقيقة.",
    s2: "سجّل وأكّد رقمك",
    s2D: "تحقق من رقم هاتفك عبر رمز OTP آمن.",
    s3: "اطلب رحلتك",
    s3D: "حدّد نقطة الانطلاق والوجهة ونوع الخدمة.",
    s4: "اقترح السعر",
    s4D: "حدّد المبلغ الذي يناسبك أو اقبل السعر المتوقع.",
    s5: "تفاوض واتفق",
    s5D: "استقبل عروض السائقين واتفق على السعر النهائي.",
    s6: "تتبّع سائقك",
    s6D: "تابع وصول السائق ومسار رحلتك مباشرة على الخريطة.",
    s7: "قيّم واطمئن",
    s7D: "بعد كل رحلة، قيّم تجربتك وأرسل ملاحظاتك.",
  },
  showcase: {
    kicker: "معاينة التطبيق",
    title: "شاشات صُممت للبساطة والسرعة",
    subtitle: "واجهة عصرية تعمل بالعربية والفرنسية والإنجليزية مع دعم كامل للوضع الليلي.",
    riderApp: "تطبيق الراكب",
    driverApp: "تطبيق السائق",
    home: "الرئيسية",
    homeD: "طلب رحلة في لمسة واحدة مع عرض الأسعار المقترحة.",
    neg: "التفاوض",
    negD: "اقترح السعر واستقبل العروض المقابلة فوراً.",
    track: "التتبع المباشر",
    trackD: "تابع سائقك على الخريطة لحظة بلحظة.",
    wallet: "المحفظة",
    walletD: "رصيدك، عملياتك، ودفعات السائقين في مكان واحد.",
    sos: "الطوارئ",
    sosD: "زر SOS فوري ومشاركة الموقع مع جهات الاتصال الموثوقة.",
  },
  business: {
    kicker: "حلول الأعمال",
    title: "منصة نقل جاهزة لمؤسستك",
    subtitle: "حلول مرنة للشركات والمؤسسات في الجزائر — من أسطول واحد إلى الآلاف من الرحلات.",
    i1: "حسابات الشركات وإدارة النفقات",
    i2: "فواتير شهرية وإعداد تقارير مصاريف",
    i3: "API للتوصيل والتكامل مع متجرك",
    i4: "رحلات مخصصة لموظفيك بأسعار مفاوضة",
    i5: "لوحة تحليلات في الوقت الحقيقي",
    i6: "دعم ذو أولوية ومدير حساب مخصص",
    i7: "أسعار شراكة خاصة حسب الحجم",
    cta: "اطلب عرضاً تجارياً",
    ctaSub: "حلول نقل مخصصة لمؤسستك — تواصل معنا اليوم",
  },
  news: {
    kicker: "آخر الأخبار",
    title: "مستجدات INRIDE AI",
    subtitle: "محتوًى إخباري قابل للتحرير — يُدار عبر نظام المحتوى مستقبلاً.",
    readMore: "اقرأ المزيد",
    placeholder: "محتوى تجريبي — يستبدل عبر CMS.",
    n1T: "INRIDE AI تتوسع إلى ولايات جديدة",
    n1D: "إطلاق الخدمة تدريجياً في مدن جديدة عبر الجزائر مع مزيد من السائقين الموثقين.",
    n1Cat: "توسع",
    n1Date: "15 جويلية 2026",
    n2T: "محرك تفاوض محسّن بالذكاء الاصطناعي",
    n2D: "خوارزميات جديدة تقترح أسعاراً عادلة أسرع وأدق من أي وقت مضى.",
    n2Cat: "منتج",
    n2Date: "28 جوان 2026",
    n3T: "شراكة جديدة لخدمة الشركات",
    n3D: "حلول نقل مخصصة للشركات والمؤسسات مع فواتير وتقارير شهرية.",
    n3Cat: "شراكة",
    n3Date: "10 جوان 2026",
  },
  impact: {
    kicker: "الأثر الاجتماعي",
    title: "تكنولوجيا تخدم الجزائر",
    subtitle: "أكثر من مجرد منصة نقل — INRIDE AI تساهم في الاقتصاد المحلي والتحول الرقمي.",
    i1: "فرص دخل مرنة",
    i1D: "نوفر دخلاً إضافياً لآلاف السائقين والمرسليين في الجزائر.",
    i2: "دعم المواهب الشابة",
    i2D: "نوظف ونطوّر الكفاءات التقنية الجزائرية في قلب الفريق.",
    i3: "تنقل مستدام",
    i3D: "مشاركة الرحلات تقلل الازدحام وتخفض البصمة الكربونية.",
    i4: "تحول رقمي",
    i4D: "محرك محلي للتجارة الرقمية والخدمات الذكية.",
  },
  cities: {
    kicker: "التغطية الجغرافية",
    title: "متوفر في مدن متزايدة عبر الجزائر",
    subtitle: "ننمو تدريجياً ولايةً بولاية — تحقق من حالة مدينتك.",
    available: "متوفر",
    soon: "قريباً",
    search: "ابحث عن ولايتك",
    totalWilayas: "58 ولاية",
    cities: [
      { name: "الجزائر العاصمة", status: "live" },
      { name: "وهران", status: "live" },
      { name: "قسنطينة", status: "live" },
      { name: "سطيف", status: "live" },
      { name: "عنابة", status: "live" },
      { name: "بجاية", status: "live" },
      { name: "بسكرة", status: "live" },
      { name: "تلمسان", status: "live" },
      { name: "البيض", status: "soon" },
      { name: "تمنراست", status: "soon" },
      { name: "تبسة", status: "soon" },
      { name: "أدرار", status: "soon" },
      { name: "الشلف", status: "soon" },
      { name: "الأغواط", status: "soon" },
      { name: "أم البواقي", status: "soon" },
      { name: "باتنة", status: "soon" },
      { name: "بشار", status: "soon" },
      { name: "بليدة", status: "soon" },
      { name: "البويرة", status: "soon" },
      { name: "تيبازة", status: "soon" },
      { name: "تيارت", status: "soon" },
      { name: "تيزي وزو", status: "soon" },
      { name: "الجلفة", status: "soon" },
      { name: "جيجل", status: "soon" },
      { name: "سعيدة", status: "soon" },
      { name: "سكيكدة", status: "soon" },
      { name: "سيدي بلعباس", status: "soon" },
      { name: "قالمة", status: "soon" },
      { name: "المدية", status: "soon" },
      { name: "مستغانم", status: "soon" },
      { name: "مسيلة", status: "soon" },
      { name: "معسكر", status: "soon" },
      { name: "ورقلة", status: "soon" },
      { name: "إيليزي", status: "soon" },
      { name: "برج بوعريريج", status: "soon" },
      { name: "بومرداس", status: "soon" },
      { name: "الطارف", status: "soon" },
      { name: "تندوف", status: "soon" },
      { name: "تيسمسيلت", status: "soon" },
      { name: "الوادي", status: "soon" },
      { name: "خنشلة", status: "soon" },
      { name: "سوق أهراس", status: "soon" },
      { name: "ميلة", status: "soon" },
      { name: "عين الدفلى", status: "soon" },
      { name: "النعامة", status: "soon" },
      { name: "غرداية", status: "soon" },
      { name: "عين تموشنت", status: "soon" },
      { name: "غليزان", status: "soon" },
      { name: "تيميمون", status: "soon" },
      { name: "برج باجي مختار", status: "soon" },
      { name: "أولاد جلال", status: "soon" },
      { name: "بني عباس", status: "soon" },
      { name: "عين صالح", status: "soon" },
      { name: "عين قزام", status: "soon" },
      { name: "توقرت", status: "soon" },
      { name: "جانت", status: "soon" },
      { name: "المغير", status: "soon" },
      { name: "المنيعة", status: "soon" },
    ],
  },
  download: {
    kicker: "حمّل التطبيق",
    title: "جاهز للانطلاق مع INRIDE AI؟",
    subtitle: "حمّل التطبيق وابدأ رحلتك الأولى — مجاناً وبأسعار تتفاوض عليها بنفسك.",
    playTop: "احصل عليه من",
    playName: "Google Play",
    appleTop: "حمّله من",
    appleName: "App Store",
    huaweiTop: "احصل عليه من",
    huaweiName: "AppGallery",
    qrTitle: "امسح الرمز",
    qrSub: "لتحميل التطبيق على هاتفك",
    qrAria: "رمز QR لتحميل تطبيق INRIDE AI",
  },
  finalCta: {
    title: "نقلك بحرّيتك.. وسعرك باختيارك",
    subtitle: "انضم إلى آلاف الركاب والسائقين في الجزائر واختبر جيلاً جديداً من التنقل الذكي.",
    cta: "حمّل التطبيق الآن",
    alt: "تواصل معنا",
    ctaDriver: "سجّل ك سائق",
  },
  trust: {
    kicker: "موثوقية INRIDE AI",
    title: "منصة تنقل موثوقة في 58 ولاية",
    stat1: "رحلة مكتملة",
    stat2: "تقييم المستخدمين",
    stat3: "ولاية مغطاة",
    stat4: "سائق موثق",
    trust1: "توثيق هوية صارم",
    trust2: "تأمين إلزامي",
    trust3: "دعم 24/7",
    trust4: "دفع آمن",
  },
  footer: {
    tagline: "التنقل الذكي للجزائر، مدعوم بالذكاء الاصطناعي.",
    aboutTitle: "عن INRIDE AI",
    aboutText:
      "INRIDE AI منصة رقمية تفاعلية تربط المستخدمين وتسهّل خدمات النقل والتنقل والتوصيل. نعمل كوسطاء تقنيين نوفّر بيئة تفاوض حرة وآمنة بين الركاب والسائقين، دون التدخل المباشر في الصفقات الفردية.",
    servicesTitle: "خدماتنا",
    cityRides: "تنقّل في المدينة",
    interRides: "سفر بين الولايات",
    express: "توصيل إكسبرس",
    airport: "نقل المطار",
    safetyTitle: "السلامة والحماية",
    riderSafety: "ميثاق سلامة الركاب",
    driverSafety: "شروط سلامة السائقين",
    docCheck: "التحقق من الوثائق",
    supportTitle: "الدعم والامتثال",
    supportEmail: "الدعم: inrideai@gmail.com",
    privacy: "مركز الخصوصية وحذف البيانات",
    deletion: "طلب حذف الحساب",
    legalDocs: "الوثائق القانونية",
    generalTerms: "الشروط العامة للاستخدام",
    privacyPolicy: "سياسة الخصوصية",
    legalNote:
      "يخضع جمع البيانات ومعالجتها لأحكام القانون الجزائري رقم 18-07 المتعلق بحماية الأشخاص الطبيعيين في معالجة المعطيات ذات الطابع الشخصي.",
    rights: "© 2026 INRIDE AI. جميع الحقوق محفوظة.",
    officialSite: "الموقع الرسمي: https://inride.ai.dz",
  },
};

const fr: Dict = {
  meta: {
    title: "INRIDE AI — Mobilité intelligente & prix justes | Algérie",
    description:
      "INRIDE AI est une plateforme de mobilité intelligente pour l'Algérie : prix justes par négociation directe, courses en ville, voyages inter-wilayas, livraison express, sécurité GPS en direct et vérification d'identité. Téléchargez l'application.",
  },
  common: {
    menu: "Ouvrir le menu",
    close: "Fermer le menu",
    skip: "Aller au contenu",
    backTop: "Retour en haut",
    learnMore: "En savoir plus",
    notFoundTitle: "Page introuvable",
    notFoundDesc: "La page que vous cherchez n'existe pas ou a été déplacée. Retournez à l'accueil.",
    notFoundCta: "Retour à l'accueil",
  },
  aria: {
    nav: "Navigation principale",
    lang: "Sélecteur de langue",
    services: "Nos services",
    safety: "Sécurité",
    support: "Support et conformité",
  },
  nav: {
    home: "Accueil",
    services: "Services",
    ai: "Intelligence artificielle",
    safety: "Sécurité",
    drivers: "Chauffeurs",
    business: "Entreprises",
    news: "Actualités",
    about: "À propos",
    support: "Support",
    cta: "Télécharger l'appli",
    login: "Connexion",
  },
  hero: {
    badge: "Liberté de négociation et déplacements à prix juste",
    titleA: "Des courses justes",
    titleB: "au prix que vous acceptez",
    subtitle:
      "Pas d'algorithmes qui gonflent les prix au hasard : vous proposez le tarif, le conducteur l'accepte ou fait une contre-offre via notre moteur de négociation interactif — en toute transparence.",
    ctaPwa: "Télécharger l'appli PWA",
    ctaWeb: "Essayer la version démo",
    statsRides: "Courses effectuées",
    statsRating: "Note moyenne",
    statsWilayas: "Wilayas couvertes",
    negChip: "Moteur de négociation",
    negYou: "Vous",
    negYouOffer: "Vous proposez 800 DZD",
    negDriver: "Le chauffeur",
    negDriverOffer: "Propose 850 DZD",
    negAgreed: "Accord trouvé",
    negAgreedLabel: "Prix convenu",
    negProposed: "Proposé",
    negCounter: "Contre-offre",
    negDone: "820 DZD",
    phoneTitle: "Votre chauffeur arrive",
    phoneSub: "Yacine B. · Dacia Logan",
    phoneFareLabel: "Tarif convenu",
    phoneSos: "Protection SOS et sécurité connectées",
    phoneCancel: "Annuler la course",
  },
  fair: {
    kicker: "Des courses équitables au prix convenu",
    title: "Aucun algorithme ne décide du prix",
    subtitle:
      "Sur INRIDE AI, c'est vous qui fixez le prix. Une expérience de négociation interactive et transparente entre passager et conducteur, sans frais cachés ni prix imposés.",
    step1T: "Vous proposez le prix",
    step1D: "Indiquez le montant qui vous convient directement depuis l'application — en ville ou entre wilayas.",
    step2T: "Le conducteur négocie",
    step2D: "Le conducteur accepte votre offre ou fait une contre-offre jusqu'à trouver un terrain d'entente.",
    step3T: "La course démarre d'un commun accord",
    step3D: "Dès l'accord, le prix est fixé et la course démarre en toute transparence et sécurité.",
    note: "Le moteur de négociation garantit que chaque trajet reste équitable, transparent et convenu — pour les passagers comme pour les conducteurs.",
  },
  services: {
    kicker: "Services INRIDE AI",
    title: "Une seule appli .. des solutions de mobilité & de livraison",
    subtitle: "Du quotidien en ville aux voyages inter-wilayas et à la livraison express — une plateforme pour tous vos déplacements.",
    riderTitle: "Pour les passagers",
    driverTitle: "Pour les conducteurs",
    s1T: "Courses en ville",
    s1Tag: "Mobilité urbaine",
    s1D: "Des prix justes négociés directement avec le conducteur, et un service rapide dans tous les quartiers.",
    s1R: "Demandez votre course, définissez le départ et l'arrivée, et proposez le prix qui vous convient.",
    s1Dr: "Recevez les demandes proches de vous et choisissez le prix et le trajet qui correspondent à votre planning.",
    s2T: "Voyages inter-wilayas",
    s2Tag: "Longue distance",
    s2D: "Des trajets confortables et sûrs entre les wilayas algériennes à un coût juste fixé à l'avance.",
    s2R: "Choisissez le confort et la sécurité sur les longs trajets, à un prix équitable fixé à l'avance.",
    s2Dr: "Doublez vos gains grâce aux trajets inter-villes et inter-wilayas, en toute simplicité.",
    s3T: "Livraison express",
    s3Tag: "Livraison rapide",
    s3D: "Livraison rapide et sécurisée de documents, colis et commandes personnelles.",
    s3R: "Livraison rapide et sécurisée de documents, colis et commandes via la plateforme.",
    s3Dr: "Des opportunités de travail flexibles avec des gains directs et rapides.",
    s4T: "Transferts aéroport",
    s4Tag: "Voyage et arrivée sereins",
    s4D: "Réservez à l'avance et rejoignez l'aéroport en tout confort, à un prix convenu.",
    s4R: "Réservez votre trajet vers ou depuis l'aéroport et arrivez à l'heure en toute sérénité.",
    s4Dr: "Recevez les trajets aéroport planifiés et organisez votre journée en confiance.",
    s5T: "Courses planifiées",
    s5Tag: "Réservation anticipée",
    s5D: "Réservez votre trajet à l'avance pour garantir votre arrivée à l'heure.",
    s5R: "Réservez votre trajet à l'avance et voyagez en toute sérénité.",
    s5Dr: "Planifiez vos trajets programmés et maximisez vos revenus.",
  },
  ai: {
    kicker: "L'IA au cœur d'INRIDE AI",
    title: "Un moteur d'IA au service de votre trajet",
    subtitle: "Nous utilisons l'intelligence artificielle pour améliorer chaque détail — du prix juste au matching intelligent et à la sécurité.",
    f1T: "Tarification juste et intelligente",
    f1D: "Suggère des prix moyens équitables selon la zone, la demande et l'heure — sans hausse aléatoire.",
    f2T: "Estimation d'arrivée précise",
    f2D: "Prévision du temps d'arrivée du conducteur et de l'itinéraire en temps réel via GPS.",
    f3T: "Détection de fraude",
    f3D: "Détection des faux comptes, de la falsification de localisation et des multi-appareils, avec gel des comptes suspects.",
    f4T: "Matching intelligent",
    f4D: "Trouver le bon conducteur dans un rayon de 2 à 8 km selon quatre stratégies de classement.",
    f5T: "Surveillance de sécurité",
    f5D: "Analyse continue du comportement des courses, détection des déviations et alertes automatiques.",
    f6T: "Assistant de support intelligent",
    f6D: "Réponses immédiates en texte et en voix en arabe, français et anglais, avec tickets de support organisés.",
  },
  safety: {
    kicker: "La sécurité avant tout",
    title: "Neuf garanties de protection à chaque course",
    subtitle: "Nous appliquons les normes de protection les plus élevées pour garantir la sécurité de tous les utilisateurs, à chaque trajet.",
    c1: "Vérification stricte de l'identité des conducteurs et passagers",
    c2: "Vérification du permis de conduire et des documents du véhicule",
    c3: "Assurance obligatoire pour chaque véhicule sur la plateforme",
    c4: "Partage de l'itinéraire en direct avec la famille",
    c5: "Bouton SOS et système d'urgence immédiat",
    c6: "Partage de la course avec vos proches dès le départ",
    c7: "Évaluation mutuelle des conducteurs et passagers après chaque course",
    c8: "Support et surveillance 24h/24",
    c9: "Protection des données selon la loi algérienne 18-07",
    cta: "Lire la charte de sécurité",
  },
  driver: {
    kicker: "Rejoignez la famille des chauffeurs",
    title: "Soyez notre partenaire, gagnez comme vous le voulez",
    subtitle:
      "Chauffeurs 100% indépendants. C'est vous qui acceptez ou refusez, vous fixez vos horaires et vos gains — avec tous les outils de sécurité et de support dont vous avez besoin.",
    b1: "Commissions transparentes sans frais cachés",
    b2: "Vos gains versés directement sur votre portefeuille",
    b3: "Liberté totale d'accepter ou de refuser les courses",
    b4: "Versements hebdomadaires et gains quotidiens clairs",
    b5: "Support technique et sécurité 24h/24",
    b6: "Heures de pointe et itinéraires suggérés intelligemment",
    cta: "Commencer l'inscription",
    verTitle: "Vérification du chauffeur en 3 étapes",
    verSub: "Un processus de vérification progressif et sécurisé qui active votre compte sous 24 à 48 heures.",
    verStep1: "Envoi des documents",
    verStep2: "Revue automatique et manuelle",
    verStep3: "Approbation et démarrage",
    verStep4: "Entièrement activé",
    verPending: "En attente d'envoi",
    verDocs: "Documents envoyés",
    verReview: "En cours de vérification",
    verApproved: "Approuvé",
    verIdName: "Yacine Benali",
    verIdNumber: "Carte d'identité · ********",
    verIdCar: "Dacia Logan · 2021 · Alger",
    verBadge: "Vérifié",
  },
  rider: {
    kicker: "Expérience passager",
    title: "Du téléchargement de l'appli à votre destination en 7 étapes",
    subtitle: "Un parcours simple et clair, conçu pour vous mener à destination avec un minimum d'effort et un maximum de transparence.",
    s1: "Téléchargez l'application",
    s1D: "Installez INRIDE AI depuis le store et créez un compte en une minute.",
    s2: "Inscrivez-vous et vérifiez",
    s2D: "Confirmez votre numéro de téléphone avec un code OTP sécurisé.",
    s3: "Demandez votre course",
    s3D: "Indiquez le point de départ, la destination et le type de service.",
    s4: "Proposez votre prix",
    s4D: "Fixez le montant qui vous convient ou acceptez le prix estimé.",
    s5: "Négociez et accordez-vous",
    s5D: "Recevez les offres des conducteurs et convenez du prix final.",
    s6: "Suivez votre conducteur",
    s6D: "Suivez l'arrivée du conducteur et l'itinéraire en direct sur la carte.",
    s7: "Évaluez et partez serein",
    s7D: "Après chaque course, évaluez votre expérience et partagez vos remarques.",
  },
  showcase: {
    kicker: "Aperçu de l'application",
    title: "Des écrans pensés pour la simplicité et la vitesse",
    subtitle: "Une interface moderne disponible en arabe, français et anglais, avec un mode sombre complet.",
    riderApp: "Application passager",
    driverApp: "Application chauffeur",
    home: "Accueil",
    homeD: "Demander une course en un geste avec les prix suggérés.",
    neg: "Négociation",
    negD: "Proposez votre prix et recevez les contre-offres en temps réel.",
    track: "Suivi en direct",
    trackD: "Suivez votre conducteur sur la carte à chaque instant.",
    wallet: "Portefeuille",
    walletD: "Solde, opérations et versements des chauffeurs au même endroit.",
    sos: "Urgence",
    sosD: "Bouton SOS immédiat et partage de position avec vos contacts de confiance.",
  },
  business: {
    kicker: "Solutions entreprises",
    title: "Une plateforme de mobilité prête pour votre organisation",
    subtitle: "Des solutions flexibles pour les entreprises en Algérie — d'une seule flotte à des milliers de trajets.",
    i1: "Comptes d'entreprise et gestion des dépenses",
    i2: "Facturation mensuelle et rapports de frais",
    i3: "API de livraison et intégration à votre boutique",
    i4: "Trajets dédiés pour vos employés à prix négocié",
    i5: "Tableau de bord d'analyses en temps réel",
    i6: "Support prioritaire et responsable de compte dédié",
    i7: "Tarifs de partenariat selon le volume",
    cta: "Demander une offre",
    ctaSub: "Solutions de transport sur mesure pour votre organisation — contactez-nous",
  },
  news: {
    kicker: "Actualités",
    title: "Les nouveautés d'INRIDE AI",
    subtitle: "Contenu éditorial modifiable — géré via le système de contenu à terme.",
    readMore: "Lire la suite",
    placeholder: "Contenu de démonstration — remplacé via le CMS.",
    n1T: "INRIDE AI s'étend à de nouvelles wilayas",
    n1D: "Déploiement progressif dans de nouvelles villes à travers l'Algérie, avec plus de conducteurs vérifiés.",
    n1Cat: "Expansion",
    n1Date: "15 juillet 2026",
    n2T: "Moteur de négociation amélioré par l'IA",
    n2D: "De nouveaux algorithmes suggèrent des prix justes plus rapidement et avec plus de précision.",
    n2Cat: "Produit",
    n2Date: "28 juin 2026",
    n3T: "Nouveau partenariat pour les entreprises",
    n3D: "Solutions de mobilité dédiées aux entreprises avec facturation et rapports mensuels.",
    n3Cat: "Partenariat",
    n3Date: "10 juin 2026",
  },
  impact: {
    kicker: "Impact social",
    title: "Une technologie au service de l'Algérie",
    subtitle: "Plus qu'une plateforme de transport — INRIDE AI contribue à l'économie locale et à la transformation numérique.",
    i1: "Opportunités de revenus flexibles",
    i1D: "Un revenu complémentaire pour des milliers de chauffeurs et coursiers en Algérie.",
    i2: "Soutien aux jeunes talents",
    i2D: "Nous recrutons et développons les compétences techniques algériennes au cœur de l'équipe.",
    i3: "Mobilité durable",
    i3D: "Le partage des trajets réduit la congestion et l'empreinte carbone.",
    i4: "Transformation numérique",
    i4D: "Un moteur local pour le commerce numérique et les services intelligents.",
  },
  cities: {
    kicker: "Couverture géographique",
    title: "Disponible dans de plus en plus de villes d'Algérie",
    subtitle: "Nous grandissons wilaya par wilaya — vérifiez la disponibilité de votre ville.",
    available: "Disponible",
    soon: "Bientôt",
    search: "Recherchez votre wilaya",
    totalWilayas: "58 wilayas",
    cities: [
      { name: "Alger", status: "live" },
      { name: "Oran", status: "live" },
      { name: "Constantine", status: "live" },
      { name: "Sétif", status: "live" },
      { name: "Annaba", status: "live" },
      { name: "Béjaïa", status: "live" },
      { name: "Biskra", status: "live" },
      { name: "Tlemcen", status: "live" },
      { name: "El Bayadh", status: "soon" },
      { name: "Tamanrasset", status: "soon" },
      { name: "Tébessa", status: "soon" },
      { name: "Adrar", status: "soon" },
      { name: "Chlef", status: "soon" },
      { name: "Laghouat", status: "soon" },
      { name: "Oum El Bouaghi", status: "soon" },
      { name: "Batna", status: "soon" },
      { name: "Béchar", status: "soon" },
      { name: "Blida", status: "soon" },
      { name: "Bouira", status: "soon" },
      { name: "Tipaza", status: "soon" },
      { name: "Tiaret", status: "soon" },
      { name: "Tizi Ouzou", status: "soon" },
      { name: "Djelfa", status: "soon" },
      { name: "Jijel", status: "soon" },
      { name: "Saïda", status: "soon" },
      { name: "Skikda", status: "soon" },
      { name: "Sidi Bel Abbès", status: "soon" },
      { name: "Guelma", status: "soon" },
      { name: "Médéa", status: "soon" },
      { name: "Mostaganem", status: "soon" },
      { name: "M'sila", status: "soon" },
      { name: "Mascara", status: "soon" },
      { name: "Ouargla", status: "soon" },
      { name: "Illizi", status: "soon" },
      { name: "Bordj Bou Arréridj", status: "soon" },
      { name: "Boumerdès", status: "soon" },
      { name: "El Tarf", status: "soon" },
      { name: "Tindouf", status: "soon" },
      { name: "Tissemsilt", status: "soon" },
      { name: "El Oued", status: "soon" },
      { name: "Khenchela", status: "soon" },
      { name: "Souk Ahras", status: "soon" },
      { name: "Mila", status: "soon" },
      { name: "Aïn Defla", status: "soon" },
      { name: "Naâma", status: "soon" },
      { name: "Ghardaïa", status: "soon" },
      { name: "Aïn Témouchent", status: "soon" },
      { name: "Relizane", status: "soon" },
      { name: "Timimoun", status: "soon" },
      { name: "Bordj Badji Mokhtar", status: "soon" },
      { name: "Ouled Djellal", status: "soon" },
      { name: "Béni Abbès", status: "soon" },
      { name: "Aïn Sefra", status: "soon" },
      { name: "Aïn Guezzam", status: "soon" },
      { name: "Touggourt", status: "soon" },
      { name: "Djanet", status: "soon" },
      { name: "El M'Ghair", status: "soon" },
      { name: "El Meniaa", status: "soon" },
    ],
  },
  download: {
    kicker: "Téléchargez l'application",
    title: "Prêt à démarrer avec INRIDE AI ?",
    subtitle: "Téléchargez l'application et effectuez votre première course — gratuitement et à un prix que vous négociez vous-même.",
    playTop: "Disponible sur",
    playName: "Google Play",
    appleTop: "Télécharger sur",
    appleName: "l'App Store",
    huaweiTop: "Disponible sur",
    huaweiName: "AppGallery",
    qrTitle: "Scannez le code",
    qrSub: "pour télécharger l'application sur votre téléphone",
    qrAria: "Code QR pour télécharger l'application INRIDE AI",
  },
  finalCta: {
    title: "Voyagez librement.. au prix que vous choisissez",
    subtitle: "Rejoignez des milliers de passagers et chauffeurs en Algérie et découvrez une nouvelle génération de mobilité intelligente.",
    cta: "Télécharger l'appli",
    alt: "Nous contacter",
    ctaDriver: "Devenir chauffeur",
  },
  trust: {
    kicker: "Fiabilité INRIDE AI",
    title: "Une plateforme de transport de confiance dans 58 wilayas",
    stat1: "Courses effectuées",
    stat2: "Note moyenne",
    stat3: "Wilayas couvertes",
    stat4: "Chauffeurs vérifiés",
    trust1: "Vérification stricte d'identité",
    trust2: "Assurance obligatoire",
    trust3: "Support 24h/24",
    trust4: "Paiement sécurisé",
  },
  footer: {
    tagline: "La mobilité intelligente pour l'Algérie, propulsée par l'IA.",
    aboutTitle: "À propos d'INRIDE AI",
    aboutText:
      "INRIDE AI est une plateforme numérique interactive qui connecte les utilisateurs et facilite les services de transport, de mobilité et de livraison. Nous agissons comme intermédiaires techniques offrant un environnement de négociation libre et sécurisé entre passagers et conducteurs, sans intervenir directement dans les transactions individuelles.",
    servicesTitle: "Nos services",
    cityRides: "Courses en ville",
    interRides: "Voyages inter-wilayas",
    express: "Livraison express",
    airport: "Transferts aéroport",
    safetyTitle: "Sécurité & protection",
    riderSafety: "Charte de sécurité des passagers",
    driverSafety: "Conditions de sécurité des conducteurs",
    docCheck: "Vérification des documents",
    supportTitle: "Support & conformité",
    supportEmail: "Support : inrideai@gmail.com",
    privacy: "Centre de confidentialité & suppression des données",
    deletion: "Demande de suppression de compte",
    legalDocs: "Documents légaux",
    generalTerms: "Conditions générales d'utilisation",
    privacyPolicy: "Politique de confidentialité",
    legalNote:
      "La collecte et le traitement des données sont soumis aux dispositions de la loi algérienne n° 18-07 relative à la protection des personnes physiques dans le traitement des données à caractère personnel.",
    rights: "© 2026 INRIDE AI. Tous droits réservés.",
    officialSite: "Site officiel : https://inride.ai.dz",
  },
};

const en: Dict = {
  meta: {
    title: "INRIDE AI — Smart Mobility & Fair Pricing | Algeria",
    description:
      "INRIDE AI is a smart mobility platform for Algeria: fair negotiated pricing, city rides, inter-wilaya travel and express delivery. Live GPS safety, identity verification and SOS support. Download the app.",
  },
  common: {
    menu: "Open menu",
    close: "Close menu",
    skip: "Skip to content",
    backTop: "Back to top",
    learnMore: "Learn more",
    notFoundTitle: "Page not found",
    notFoundDesc: "The page you are looking for doesn't exist or has been moved. Head back home.",
    notFoundCta: "Back to home",
  },
  aria: {
    nav: "Main navigation",
    lang: "Language selector",
    services: "Our services",
    safety: "Safety",
    support: "Support & compliance",
  },
  nav: {
    home: "Home",
    services: "Services",
    ai: "AI",
    safety: "Safety",
    drivers: "Drivers",
    business: "Business",
    news: "News",
    about: "About",
    support: "Support",
    cta: "Download the app",
    login: "Sign in",
  },
  hero: {
    badge: "Free negotiation and fair-priced rides",
    titleA: "Fair rides",
    titleB: "at the price you agree on",
    subtitle:
      "No algorithms inflating fares at random: you propose the price, the driver accepts it or makes a counter-offer through our interactive negotiation engine — fully transparent.",
    ctaPwa: "Download the PWA app",
    ctaWeb: "Try the demo version",
    statsRides: "Rides delivered",
    statsRating: "Average rating",
    statsWilayas: "Wilayas covered",
    negChip: "Negotiation engine",
    negYou: "You",
    negYouOffer: "You offer 800 DZD",
    negDriver: "The driver",
    negDriverOffer: "Counters 850 DZD",
    negAgreed: "Agreed",
    negAgreedLabel: "Agreed fare",
    negProposed: "Proposed",
    negCounter: "Counter-offer",
    negDone: "820 DZD",
    phoneTitle: "Driver arriving",
    phoneSub: "Yacine B. · Dacia Logan",
    phoneFareLabel: "Agreed fare",
    phoneSos: "SOS protection & safety connected",
    phoneCancel: "Cancel ride",
  },
  fair: {
    kicker: "Fair rides at the price you agree on",
    title: "No algorithm decides the price",
    subtitle:
      "On INRIDE AI, you set the price. An interactive, transparent negotiation experience between passenger and driver — no hidden fees, no imposed fares.",
    step1T: "You propose the price",
    step1D: "Set the amount that suits you directly in the app — in the city or between wilayas.",
    step2T: "The driver negotiates",
    step2D: "The driver accepts your offer or makes a counter-offer until you find common ground.",
    step3T: "The ride starts by agreement",
    step3D: "Once agreed, the fare is locked and the ride starts in full transparency and safety.",
    note: "The negotiation engine keeps every trip fair, transparent and agreed — for passengers and drivers alike.",
  },
  services: {
    kicker: "INRIDE AI services",
    title: "One app .. smart mobility & delivery solutions",
    subtitle: "From daily city rides to inter-wilaya travel and express delivery — one platform for all your journeys.",
    riderTitle: "For passengers",
    driverTitle: "For drivers",
    s1T: "City rides",
    s1Tag: "Urban mobility",
    s1D: "Fair fares negotiated directly with the driver, with fast service across every neighbourhood.",
    s1R: "Request your ride, set pickup and drop-off, and propose the price that suits you.",
    s1Dr: "Receive nearby ride requests and choose the price and trip that fit your schedule.",
    s2T: "Inter-wilaya travel",
    s2Tag: "Long distance",
    s2D: "Comfortable, safe trips between Algerian wilayas at a fair cost fixed in advance.",
    s2R: "Choose comfort and safety on long trips at a fair, agreed price.",
    s2Dr: "Double your earnings with inter-city and inter-wilaya trips, easily.",
    s3T: "Express delivery",
    s3Tag: "Fast delivery",
    s3D: "Fast, secure delivery of documents, parcels and personal orders.",
    s3R: "Fast, secure delivery of documents, parcels and orders through the platform.",
    s3Dr: "Flexible work opportunities with direct, fast earnings.",
    s4T: "Airport transfers",
    s4Tag: "Hassle-free travel",
    s4D: "Book in advance and get to the airport in total comfort at an agreed price.",
    s4R: "Book your airport trip and arrive on time, stress-free.",
    s4Dr: "Get scheduled airport trips and plan your day with confidence.",
    s5T: "Scheduled rides",
    s5Tag: "Advance booking",
    s5D: "Book your ride in advance to guarantee on-time arrival.",
    s5R: "Book your ride in advance and travel with peace of mind.",
    s5Dr: "Plan your scheduled trips and maximize your earnings.",
  },
  ai: {
    kicker: "AI at the heart of INRIDE AI",
    title: "An AI engine serving your ride",
    subtitle: "We use artificial intelligence to refine every detail — from fair pricing to smart matching and safety.",
    f1T: "Fair smart pricing",
    f1D: "Suggests fair average fares based on area, demand and time — no random surges.",
    f2T: "Accurate arrival estimates",
    f2D: "Predicts the driver's arrival time and route in real time via GPS.",
    f3T: "Fraud detection",
    f3D: "Detects fake accounts, location spoofing and multi-device abuse, freezing suspicious accounts.",
    f4T: "Smart ride matching",
    f4D: "Finds the right driver within a 2–8 km radius using four smart ranking strategies.",
    f5T: "Safety monitoring",
    f5D: "Continuous ride behaviour analysis, route-deviation detection and automatic alerts.",
    f6T: "Smart support assistant",
    f6D: "Instant text and voice replies in Arabic, French and English, with organised support tickets.",
  },
  safety: {
    kicker: "Safety first",
    title: "Nine safety guarantees on every ride",
    subtitle: "We apply the highest protection standards to keep every platform user safe, on every trip.",
    c1: "Strict identity verification for drivers and passengers",
    c2: "Driving licence and vehicle document checks",
    c3: "Insurance required for every vehicle on the platform",
    c4: "Live route sharing with family",
    c5: "SOS button and instant emergency system",
    c6: "Trip sharing with loved ones from the start",
    c7: "Mutual ratings after every ride",
    c8: "24/7 support and monitoring",
    c9: "Data protection under Algerian Law 18-07",
    cta: "Read the safety charter",
  },
  driver: {
    kicker: "Join the driver family",
    title: "Be our partner, earn your way",
    subtitle:
      "100% independent drivers. You accept or decline, you set your hours and your earnings — with all the safety and support tools you need.",
    b1: "Transparent commissions with no hidden fees",
    b2: "Earnings paid straight to your wallet",
    b3: "Full freedom to accept or decline rides",
    b4: "Weekly payouts and clear daily earnings",
    b5: "24/7 technical support and safety",
    b6: "Smart peak hours and suggested routes",
    cta: "Start registration now",
    verTitle: "Driver verification in 3 steps",
    verSub: "A progressive, secure verification process that activates your account within 24–48 hours.",
    verStep1: "Submit documents",
    verStep2: "Automated & human review",
    verStep3: "Approval & go live",
    verStep4: "Fully activated",
    verPending: "Awaiting submission",
    verDocs: "Documents submitted",
    verReview: "Under review",
    verApproved: "Approved",
    verIdName: "Yacine Benali",
    verIdNumber: "ID card · ********",
    verIdCar: "Dacia Logan · 2021 · Algiers",
    verBadge: "Verified",
  },
  rider: {
    kicker: "Rider experience",
    title: "From downloading the app to your destination in 7 steps",
    subtitle: "A simple, clear journey designed to get you to your destination with minimal effort and maximum transparency.",
    s1: "Download the app",
    s1D: "Install INRIDE AI from the store and create an account in a minute.",
    s2: "Register & verify",
    s2D: "Confirm your phone number with a secure OTP code.",
    s3: "Request your ride",
    s3D: "Set the pickup, destination and service type.",
    s4: "Propose your price",
    s4D: "Set the amount you want or accept the estimated fare.",
    s5: "Negotiate & agree",
    s5D: "Receive driver offers and agree on the final fare.",
    s6: "Track your driver",
    s6D: "Follow the driver's arrival and your route live on the map.",
    s7: "Rate & relax",
    s7D: "After every ride, rate your experience and share your feedback.",
  },
  showcase: {
    kicker: "App preview",
    title: "Screens built for simplicity and speed",
    subtitle: "A modern interface available in Arabic, French and English with full dark mode support.",
    riderApp: "Rider App",
    driverApp: "Driver App",
    home: "Home",
    homeD: "Request a ride in one tap with suggested fares.",
    neg: "Negotiation",
    negD: "Propose your price and receive counter-offers in real time.",
    track: "Live tracking",
    trackD: "Follow your driver on the map at every moment.",
    wallet: "Wallet",
    walletD: "Balance, transactions and driver payouts in one place.",
    sos: "Emergency",
    sosD: "Instant SOS button and location sharing with trusted contacts.",
  },
  business: {
    kicker: "Business solutions",
    title: "A mobility platform ready for your organisation",
    subtitle: "Flexible solutions for companies in Algeria — from a single fleet to thousands of trips.",
    i1: "Corporate accounts and expense management",
    i2: "Monthly invoicing and expense reports",
    i3: "Delivery API and store integration",
    i4: "Dedicated employee trips at negotiated rates",
    i5: "Real-time analytics dashboard",
    i6: "Priority support and dedicated account manager",
    i7: "Volume-based partnership pricing",
    cta: "Request a quote",
    ctaSub: "Custom transport solutions for your organisation — get in touch today",
  },
  news: {
    kicker: "Latest news",
    title: "INRIDE AI updates",
    subtitle: "Editable editorial content — managed through the content system in the future.",
    readMore: "Read more",
    placeholder: "Demo content — replaced via CMS.",
    n1T: "INRIDE AI expands to new wilayas",
    n1D: "Rolling out gradually to new cities across Algeria with more verified drivers.",
    n1Cat: "Expansion",
    n1Date: "July 15, 2026",
    n2T: "AI-powered negotiation engine upgrade",
    n2D: "New algorithms suggest fairer prices faster and more accurately than ever before.",
    n2Cat: "Product",
    n2Date: "June 28, 2026",
    n3T: "New business partnership",
    n3D: "Dedicated mobility solutions for companies with monthly invoicing and reports.",
    n3Cat: "Partnership",
    n3Date: "June 10, 2026",
  },
  impact: {
    kicker: "Social impact",
    title: "Technology serving Algeria",
    subtitle: "More than a ride platform — INRIDE AI contributes to the local economy and digital transformation.",
    i1: "Flexible income opportunities",
    i1D: "Extra income for thousands of drivers and couriers across Algeria.",
    i2: "Supporting young talent",
    i2D: "We hire and grow Algerian technical talent at the heart of the team.",
    i3: "Sustainable mobility",
    i3D: "Ride sharing reduces congestion and lowers the carbon footprint.",
    i4: "Digital transformation",
    i4D: "A local driver for digital commerce and smart services.",
  },
  cities: {
    kicker: "Coverage",
    title: "Available in more and more cities across Algeria",
    subtitle: "Growing wilaya by wilaya — check the availability of your city.",
    available: "Available",
    soon: "Coming soon",
    search: "Search your wilaya",
    totalWilayas: "58 wilayas",
    cities: [
      { name: "Algiers", status: "live" },
      { name: "Oran", status: "live" },
      { name: "Constantine", status: "live" },
      { name: "Sétif", status: "live" },
      { name: "Annaba", status: "live" },
      { name: "Béjaïa", status: "live" },
      { name: "Biskra", status: "live" },
      { name: "Tlemcen", status: "live" },
      { name: "El Bayadh", status: "soon" },
      { name: "Tamanrasset", status: "soon" },
      { name: "Tébessa", status: "soon" },
      { name: "Adrar", status: "soon" },
      { name: "Chlef", status: "soon" },
      { name: "Laghouat", status: "soon" },
      { name: "Oum El Bouaghi", status: "soon" },
      { name: "Batna", status: "soon" },
      { name: "Béchar", status: "soon" },
      { name: "Blida", status: "soon" },
      { name: "Bouira", status: "soon" },
      { name: "Tipaza", status: "soon" },
      { name: "Tiaret", status: "soon" },
      { name: "Tizi Ouzou", status: "soon" },
      { name: "Djelfa", status: "soon" },
      { name: "Jijel", status: "soon" },
      { name: "Saïda", status: "soon" },
      { name: "Skikda", status: "soon" },
      { name: "Sidi Bel Abbès", status: "soon" },
      { name: "Guelma", status: "soon" },
      { name: "Médéa", status: "soon" },
      { name: "Mostaganem", status: "soon" },
      { name: "M'sila", status: "soon" },
      { name: "Mascara", status: "soon" },
      { name: "Ouargla", status: "soon" },
      { name: "Illizi", status: "soon" },
      { name: "Bordj Bou Arréridj", status: "soon" },
      { name: "Boumerdès", status: "soon" },
      { name: "El Tarf", status: "soon" },
      { name: "Tindouf", status: "soon" },
      { name: "Tissemsilt", status: "soon" },
      { name: "El Oued", status: "soon" },
      { name: "Khenchela", status: "soon" },
      { name: "Souk Ahras", status: "soon" },
      { name: "Mila", status: "soon" },
      { name: "Aïn Defla", status: "soon" },
      { name: "Naâma", status: "soon" },
      { name: "Ghardaïa", status: "soon" },
      { name: "Aïn Témouchent", status: "soon" },
      { name: "Relizane", status: "soon" },
      { name: "Timimoun", status: "soon" },
      { name: "Bordj Badji Mokhtar", status: "soon" },
      { name: "Ouled Djellal", status: "soon" },
      { name: "Béni Abbès", status: "soon" },
      { name: "Aïn Sefra", status: "soon" },
      { name: "Aïn Guezzam", status: "soon" },
      { name: "Touggourt", status: "soon" },
      { name: "Djanet", status: "soon" },
      { name: "El M'Ghair", status: "soon" },
      { name: "El Meniaa", status: "soon" },
    ],
  },
  download: {
    kicker: "Download the app",
    title: "Ready to get moving with INRIDE AI?",
    subtitle: "Download the app and take your first ride — free, at a price you negotiate yourself.",
    playTop: "Get it on",
    playName: "Google Play",
    appleTop: "Download on the",
    appleName: "App Store",
    huaweiTop: "Get it on",
    huaweiName: "AppGallery",
    qrTitle: "Scan the code",
    qrSub: "to download the app on your phone",
    qrAria: "QR code to download the INRIDE AI app",
  },
  finalCta: {
    title: "Move freely.. pay your price",
    subtitle: "Join thousands of passengers and drivers across Algeria and experience a new generation of smart mobility.",
    cta: "Download the app now",
    alt: "Contact us",
    ctaDriver: "Become a driver",
  },
  trust: {
    kicker: "INRIDE AI Trust",
    title: "A trusted transport platform across 58 wilayas",
    stat1: "Rides completed",
    stat2: "User rating",
    stat3: "Wilayas covered",
    stat4: "Verified drivers",
    trust1: "Strict identity verification",
    trust2: "Mandatory insurance",
    trust3: "24/7 support",
    trust4: "Secure payments",
  },
  footer: {
    tagline: "Smart mobility for Algeria, powered by AI.",
    aboutTitle: "About INRIDE AI",
    aboutText:
      "INRIDE AI is an interactive digital platform connecting users and facilitating transport, mobility and delivery services. We act as technical intermediaries providing a free and safe negotiation environment between passengers and drivers, without intervening directly in individual transactions.",
    servicesTitle: "Our services",
    cityRides: "City rides",
    interRides: "Inter-wilaya rides",
    express: "Express delivery",
    airport: "Airport transfers",
    safetyTitle: "Safety & protection",
    riderSafety: "Passenger safety charter",
    driverSafety: "Driver safety terms",
    docCheck: "Document verification",
    supportTitle: "Support & compliance",
    supportEmail: "Support: inrideai@gmail.com",
    privacy: "Privacy center & data deletion",
    deletion: "Account deletion request",
    legalDocs: "Legal documents",
    generalTerms: "General Terms of Use",
    privacyPolicy: "Privacy Policy",
    legalNote:
      "Data collection and processing are subject to the provisions of Algerian Law No. 18-07 on the protection of natural persons in the processing of personal data.",
    rights: "© 2026 INRIDE AI. All rights reserved.",
    officialSite: "Official website: https://inride.ai.dz",
  },
};

export const DICTS: Record<Lang, Dict> = { ar, fr, en };

export const LANGS: { code: Lang; label: string; dir: "ltr" | "rtl"; name: string }[] = [
  { code: "ar", label: "ع", dir: "rtl", name: "العربية" },
  { code: "fr", label: "FR", dir: "ltr", name: "Français" },
  { code: "en", label: "EN", dir: "ltr", name: "English" },
];
