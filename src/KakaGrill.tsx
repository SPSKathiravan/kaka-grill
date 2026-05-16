import React, { useState, useEffect } from "react";

const T = {
  en: {
    nav: { home: "Home", menu: "Menu", gallery: "Gallery" },
    heroTooltip: "View Menu",
    preview: {
      subtitle: "Taste the Best", title: "Our Offerings",
      desc: "Discover our authentic flame-grilled dishes, crafted with premium ingredients and traditional spices. From succulent grills to perfect broasted chicken.",
      btn: "View Full Menu"
    },
    fullMenu: { back: "Back to Home", subtitle: "Complete Selection", title: "Full Menu", backToMenu: "Back to Menu" },
    gallery: { subtitle: "Visual Journey", title: "Gallery" },
    footer: {
      desc: "Premium authentic flame-grilled cuisine. Every meal a celebration of fire and flavour.",
      hours: "Opening Hours", contact: "Get in Touch", monThu: "Mon – Thu", friSat: "Fri – Sat", sun: "Sunday",
      location: "Jubail, Saudi Arabia",
      rights: "© 2026 KAKA GRILL. ALL RIGHTS RESERVED. | Crafted by Zexo Agency",
      madeWith: "Designed with passion for food lovers"
    },
    stats: [
      { num: "30+", label: "SIGNATURE SPECIALTIES", hasStar: false },
      { num: "50K+", label: "HAPPY GUESTS", hasStar: false },
      { num: "5", label: "RATED EXPERIENCE", hasStar: true },
      { num: "100%", label: "FRESH INGREDIENTS", hasStar: false },
      { num: "15+", label: "EXPERT CHEFS", hasStar: false }
    ],
    categories: {
      "Appetizers": "Appetizers",
      "Shawarma": "Shawarma",
      "Chops": "Chops",
      "Awsal": "Awsal",
      "Grilled - Boneless": "Grilled – Boneless",
      "Grilled - With Bone": "Grilled – With Bone",
      "Kabab": "Kabab",
      "Drinks": "Drinks",
      "Broasted": "Broasted",
      "Mixed Grill": "Mixed Grill",
      "Rice": "Rice",
      "Mojitos": "Mojitos",
      "Kulukki": "Kulukki",
      "Smoothie / Juice": "Smoothie / Juice"
    }
  },
  ar: {
    nav: { home: "الرئيسية", menu: "القائمة", gallery: "المعرض" },
    heroTooltip: "عرض القائمة",
    preview: {
      subtitle: "تذوق الأفضل", title: "عروضنا",
      desc: "اكتشف أطباقنا المشوية على اللهب الأصيلة، المحضرة بمكونات فاخرة وتوابل تقليدية. من المشاوي الشهية إلى البروستد المثالي.",
      btn: "عرض القائمة الكاملة"
    },
    fullMenu: { back: "العودة للرئيسية", subtitle: "تشكيلة كاملة", title: "القائمة الكاملة", backToMenu: "العودة للقائمة" },
    gallery: { subtitle: "رحلة بصرية", title: "معرض الصور" },
    footer: {
      desc: "مأكولات مشوية على اللهب أصلية وفاخرة. كل وجبة هي احتفال بالنار والنكهة.",
      hours: "ساعات العمل", contact: "تواصل معنا", monThu: "الاثنين – الخميس", friSat: "الجمعة – السبت", sun: "الأحد",
      location: "الجبيل، المملكة العربية السعودية",
      rights: "© 2026 كاكا جريل. جميع الحقوق محفوظة. | تصميم وكالة زيكسو",
      madeWith: "صُمم بشغف لمحبي الطعام"
    },
    stats: [
      { num: "+30", label: "أطباق مميزة", hasStar: false },
      { num: "+50K", label: "ضيف سعيد", hasStar: false },
      { num: "5", label: "تقييم التجربة", hasStar: true },
      { num: "100%", label: "مكونات طازجة", hasStar: false },
      { num: "+15", label: "طهاة خبراء", hasStar: false }
    ],
    categories: {
      "Appetizers": "المقبلات",
      "Shawarma": "الشاورما",
      "Chops": "ريش",
      "Awsal": "أوصال",
      "Grilled - Boneless": "مشوي بلا عظم",
      "Grilled - With Bone": "مشوي بعظم",
      "Kabab": "كباب",
      "Drinks": "المشروبات",
      "Broasted": "بروستد",
      "Mixed Grill": "مشاوي مشكلة",
      "Rice": "أرز",
      "Mojitos": "موهيتو",
      "Kulukki": "كولوكي",
      "Smoothie / Juice": "سموثي / عصير"
    }
  }
};

const MENU: any = {
  "Appetizers": [
    { name: "Muqabbilat", nameAr: "مقبلات", desc: "Mixed appetizer platter", descAr: "طبق مقبلات مشكل", price: "SAR 15.00", img: "/Muqabbilat.webp" },
    { name: "Olive Mix Salad", nameAr: "سلطة زيتون مشكل", desc: "Fresh mixed olives with herbs", descAr: "زيتون مشكل طازج مع الأعشاب", price: "SAR 10.00", img: "/Olive Mix Salad.webp" },
    { name: "Hummus", nameAr: "حمص", desc: "Creamy chickpea dip with olive oil", descAr: "حمص كريمي مع زيت الزيتون", price: "SAR 7.00", tag: "Popular", img: "/Hummus.webp" },
    { name: "Mutabbal", nameAr: "متبل", desc: "Roasted eggplant dip", descAr: "متبل باذنجان مشوي", price: "SAR 7.00", img: "/Mutabbal.webp" },
    { name: "Tabbouleh", nameAr: "تبولة", desc: "Parsley, mint, and bulgur salad", descAr: "سلطة البقدونس والنعناع والبرغل", price: "SAR 7.00", img: "/Tabbouleh.webp" },
    { name: "Green Salad", nameAr: "سلطة خضراء", desc: "Fresh garden green salad", descAr: "سلطة خضراء طازجة", price: "SAR 7.00", img: "/Green Salad.webp" },
    { name: "Baba Ghanoush", nameAr: "بابا غنوج", desc: "Smoky eggplant with veggies", descAr: "باذنجان مدخن مع الخضار", price: "SAR 7.00", img: "/Baba Ghanoush.webp" },
    { name: "Qiyar Bil Laban", nameAr: "خيار باللبن", desc: "Cucumber with yoghurt dip", descAr: "خيار مع اللبن", price: "SAR 7.00", img: "/Qiyar Bil Laban.webp" },
    { name: "Olive Salad", nameAr: "سلطة زيتون", desc: "Classic olive salad", descAr: "سلطة زيتون كلاسيكية", price: "SAR 7.00", img: "/Olive Salad.webp" },
    { name: "Garlic Sauce", nameAr: "صلصة ثوم", desc: "Creamy garlic sauce", descAr: "صلصة ثوم كريمية", price: "SAR 3 / 5", img: "/Garlic Sauce.webp" },
  ],
  "Shawarma": [
    { name: "Shawarma Plate", nameAr: "طبق شاورما", desc: "Full plate with fries and garlic sauce", descAr: "طبق كامل مع البطاطس وصلصة الثوم", price: "SAR 22 / 32 / 52", tag: "Bestseller", img: "/Shawarma plate.webp" },
    { name: "Shawarma Slices", nameAr: "شرائح شاورما", desc: "Sliced chicken shawarma portion", descAr: "وجبة شرائح شاورما دجاج", price: "SAR 15.00", img: "/Shawarma Slices.webp" },
    { name: "Shawarma Roll - Large", nameAr: "شاورما كبير", desc: "Large chicken shawarma roll", descAr: "ساندوتش شاورما دجاج كبير", price: "SAR 12.00", img: "/shawarma large.webp" },
    { name: "Shawarma Roll - Small", nameAr: "شاورما صغير", desc: "Classic chicken shawarma roll", descAr: "ساندوتش شاورما دجاج كلاسيكي", price: "SAR 8.00", img: "/shawarma small.webp" },
  ],
  "Chops": [
    { name: "Mutton Chops (Plate - 4 Pcs)", nameAr: "ريش غنم (طبق - 4 قطع)", desc: "Premium marinated mutton chops", descAr: "ريش غنم متبلة فاخرة", price: "SAR 50.00", tag: "Premium", img: "/mutton chops.webp" },
    { name: "Beef Chops (Plate - 2 Pcs)", nameAr: "ريش لحم بقري (طبق - 2 قطع)", desc: "Juicy marinated beef chops", descAr: "ريش لحم بقري متبلة طرية", price: "SAR 40.00", tag: "Premium", img: "/beef chops.webp" },
  ],
  "Awsal": [
    { name: "Beef Awsal (Per Skewer)", nameAr: "أوصال لحم بقري (للسيخ)", desc: "Tender beef chunks on skewer", descAr: "قطع لحم بقري طرية مشوية", price: "SAR 8.00", img: "/Beef Awsal.webp" },
    { name: "Camel Awsal (Per Skewer)", nameAr: "أوصال لحم إبل (للسيخ)", desc: "Juicy camel chunks on skewer", descAr: "قطع لحم إبل طرية مشوية", price: "SAR 8.00", img: "/Camel Awsal.webp" },
  ],
  "Grilled - Boneless": [
    { name: "Chicken - Red (Per Skewer)", nameAr: "دجاج أحمر (للسيخ)", desc: "Red-marinated boneless chicken skewer", descAr: "سيخ دجاج بدون عظم تتبيلة حمراء", price: "SAR 8.00", img: "/Chicken - Red (Per Skewer).webp" },
    { name: "Chicken - Hari Hari (Per Skewer)", nameAr: "دجاج هاري هاري (للسيخ)", desc: "Spicy green marinated boneless chicken", descAr: "سيخ دجاج بدون عظم تتبيلة خضراء حارة", price: "SAR 8.00", img: "/Chicken - Hari Hari (Per Skewer).webp" },
    { name: "Chicken - Malai (Per Skewer)", nameAr: "دجاج مالاي (للسيخ)", desc: "Creamy malai marinated boneless chicken", descAr: "سيخ دجاج بدون عظم تتبيلة مالاي كريمية", price: "SAR 8.00", img: "/Chicken - Malai (Per Skewer).webp" },
    { name: "Chicken - Capsicum (Per Skewer)", nameAr: "دجاج كابسيكوم (للسيخ)", desc: "Capsicum marinated boneless chicken", descAr: "سيخ دجاج بدون عظم تتبيلة فلفل", price: "SAR 8.00", img: "/Chicken - Capsicum (Per Skewer).webp" },
  ],
  "Grilled - With Bone": [
    { name: "Al Faham (Half / Full)", nameAr: "الفحم (نصف / كامل)", desc: "Charcoal grilled Arabian chicken", descAr: "دجاج عربي مشوي على الفحم", price: "SAR 20 / 40", tag: "Popular", img: "/Al Faham (Half _ Full).webp" },
    { name: "Shawaya (Half / Full)", nameAr: "شواية (نصف / كامل)", desc: "Traditional flame-grilled chicken", descAr: "دجاج مشوي على اللهب بالطريقة التقليدية", price: "SAR 18 / 36", img: "/Shawaya (Half _ Full).webp" },
    { name: "Chicken - Red (Per Skewer)", nameAr: "دجاج أحمر بعظم (للسيخ)", desc: "Red-marinated chicken with bone", descAr: "سيخ دجاج بعظم تتبيلة حمراء", price: "SAR 9.00", img: "/Grilled – With Bone Chicken - Red (Per Skewer).webp" },
    { name: "Chicken - Hari Hari (Per Skewer)", nameAr: "دجاج هاري هاري بعظم (للسيخ)", desc: "Spicy green marinated chicken with bone", descAr: "سيخ دجاج بعظم تتبيلة خضراء حارة", price: "SAR 9.00", img: "/Grilled – With Bone Chicken - Hari Hari (Per Skewer).webp" },
    { name: "Chicken - Malai (Per Skewer)", nameAr: "دجاج مالاي بعظم (للسيخ)", desc: "Creamy malai marinated chicken with bone", descAr: "سيخ دجاج بعظم تتبيلة مالاي", price: "SAR 9.00", img: "/Grilled – With Bone Chicken - Malai (Per Skewer).webp" },
    { name: "Chicken - Capsicum (Per Skewer)", nameAr: "دجاج كابسيكوم بعظم (للسيخ)", desc: "Capsicum marinated chicken with bone", descAr: "سيخ دجاج بعظم تتبيلة فلفل", price: "SAR 9.00", img: "/Grilled – With Bone Chicken - Capsicum (Per Skewer).webp" },
    { name: "Chicken - Wings (Per Skewer)", nameAr: "أجنحة دجاج (للسيخ)", desc: "Grilled chicken wings skewer", descAr: "سيخ أجنحة دجاج مشوية", price: "SAR 8.00", img: "/Chicken - Wings (Per Skewer).webp" },
  ],
  "Kabab": [
    { name: "Lamb Cheese Kabab", nameAr: "كباب لحم الحمل بالجبن", desc: "Minced lamb kabab with cheese filling", descAr: "كباب لحم حمل مفروم محشو بالجبن", price: "SAR 35.00", tag: "Premium", img: "/Lamb Cheese Kabab.webp" },
    { name: "Chicken Cheese Kabab", nameAr: "كباب دجاج بالجبن", desc: "Minced chicken kabab with cheese filling", descAr: "كباب دجاج مفروم محشو بالجبن", price: "SAR 32.00", img: "/Chicken Cheese Kabab.webp" },
    { name: "Chicken Kabab (Per Skewer)", nameAr: "كباب دجاج (للسيخ)", desc: "Spiced minced chicken kabab", descAr: "كباب دجاج مفروم متبل", price: "SAR 8.00", tag: "Popular", img: "/Chicken Kabab (Per Skewer).webp" },
    { name: "Mutton Kabab (Per Skewer)", nameAr: "كباب غنم (للسيخ)", desc: "Juicy minced mutton kabab", descAr: "كباب غنم مفروم طري", price: "SAR 8.00", img: "/Mutton Kabab (Per Skewer).webp" },
  ],
  "Drinks": [
    { name: "Kinza - Cola / Lemon / Citrus", nameAr: "كينزا - كولا / ليمون / حمضيات", desc: "Refreshing Kinza soda", descAr: "مشروب كينزا الغازي", price: "SAR 2.00", img: "/Kinza - Cola _ Lemon _ Citrus.webp" },
    { name: "Water", nameAr: "ماء", desc: "Chilled mineral water", descAr: "مياه معدنية مثلجة", price: "SAR 1.00", img: "/Water.webp" },
  ],
  "Broasted": [
    { name: "Broasted 4 Pcs", nameAr: "بروستد 4 قطع", desc: "Crispy fried chicken 4 pieces with fries", descAr: "دجاج مقلي مقرمش 4 قطع مع البطاطس", price: "SAR 22.00", img: "/Broasted 4 Pcs.webp" },
    { name: "Crispy Fried Chicken Tenders", nameAr: "ستربس دجاج مقرمش", desc: "Crispy boneless chicken tenders", descAr: "شرائح دجاج مقرمشة بدون عظم", price: "SAR 20.00", tag: "Popular", img: "/Crispy Fried Chicken Tenders.webp" },
    { name: "Broasted Slice", nameAr: "شريحة بروستد", desc: "Single crispy broasted chicken slice", descAr: "شريحة دجاج بروستد مقرمشة", price: "SAR 15.00", img: "/Broasted Slice.webp" },
    { name: "French Fries Plate", nameAr: "طبق بطاطس مقلية", desc: "Golden crispy french fries", descAr: "بطاطس مقلية ذهبية مقرمشة", price: "SAR 10.00", img: "/French Fries Plate.webp" },
    { name: "Broasted Roll", nameAr: "رول بروستد", desc: "Crispy broasted chicken roll", descAr: "رول دجاج بروستد مقرمش", price: "SAR 10.00", img: "/Broasted Roll.webp" },
  ],
  "Mixed Grill": [
    { name: "Mixed - 18 Skewer", nameAr: "مشكل 18 سيخ", desc: "6 Skewers Chicken with Bone / 12 Mix Skewers", descAr: "6 أسياخ دجاج بعظم / 12 سيخ مشكل", price: "SAR 132.00", tag: "For Sharing", img: "/Mixed - 18 Skewer.webp" },
    { name: "Mixed - 11 Skewer", nameAr: "مشكل 11 سيخ", desc: "Platter of assorted kebabs and awsal", descAr: "طبق مشاوي مشكلة متنوعة", price: "SAR 80.00", tag: "For Sharing", img: "/Mixed - 11 Skewer.webp" },
    { name: "Mixed - Chicken with Bone 8 Skewer", nameAr: "مشكل دجاج بعظم 8 أسياخ", desc: "8 Skewers Chicken with Bone", descAr: "8 أسياخ دجاج بعظم", price: "SAR 62.00", img: "/Mixed - Chicken with Bone 8 Skewer.webp" },
    { name: "Mixed - Chicken Boneless 8 Skewer", nameAr: "مشكل دجاج بدون عظم 8 أسياخ", desc: "8 Skewers Boneless Chicken", descAr: "8 أسياخ دجاج بدون عظم", price: "SAR 58.00", img: "/Mixed - Chicken Boneless 8 Skewer.webp" },
  ],
  "Rice": [
    { name: "Beef Madhgout (Full / Half)", nameAr: "مضغوط لحم بقري (كامل / نصف)", desc: "Pressure-cooked spiced beef rice", descAr: "أرز ولحم بقري مبهر مطبوخ بالضغط", price: "SAR 240 / 120", tag: "Premium", img: "/Beef Madhgout (Full _ Half).webp" },
    { name: "Mutton Waleema", nameAr: "وليمة لحم", desc: "Traditional slow-cooked mutton rice", descAr: "أرز بلحم الغنم مطبوخ ببطء بالطريقة التقليدية", price: "SAR 150.00", tag: "Feast", img: "/Mutton Waleema.webp" },
    { name: "Chicken Madhgout (Full / Half)", nameAr: "مضغوط دجاج (كامل / نصف)", desc: "Pressure-cooked spiced chicken rice", descAr: "أرز ودجاج مبهر مطبوخ بالضغط", price: "SAR 60 / 30", img: "/Chicken Madhgout (Full _ Half).webp" },
    { name: "Briyani Rice With Al Faham (Full / Half)", nameAr: "أرز برياني مع الفحم (كامل / نصف)", desc: "Fragrant biryani rice with Al Faham chicken", descAr: "أرز برياني عطري مع دجاج الفحم", price: "SAR 60 / 30", tag: "Popular", img: "/Madhgout Rice With Al Faham (Full _ Half).webp" },
    { name: "Madhgout Rice With Al Faham (Full / Half)", nameAr: "أرز مضغوط مع الفحم (كامل / نصف)", desc: "Pressure-cooked rice with Al Faham chicken", descAr: "أرز مطبوخ بالضغط مع دجاج الفحم", price: "SAR 60 / 30", img: "/Madhgout Rice With Al Faham (Full _ Half).webp" },
    { name: "Briyani Rice With Shawaya (Full / Half)", nameAr: "أرز برياني مع الشواية (كامل / نصف)", desc: "Fragrant biryani rice with grilled chicken", descAr: "أرز برياني عطري مع دجاج الشواية", price: "SAR 56 / 28", img: "/Briyani Rice With Shawaya (Full _ Half).webp" },
    { name: "Madhgout Rice With Shawaya (Full / Half)", nameAr: "أرز مضغوط مع الشواية (كامل / نصف)", desc: "Pressure-cooked rice with grilled chicken", descAr: "أرز مطبوخ بالضغط مع دجاج الشواية", price: "SAR 56 / 28", img: "/Madhgout Rice With Shawaya (Full _ Half).webp" },
  ],
  "Mojitos": [
    { name: "Strawberry Mojito", nameAr: "موهيتو فراولة", desc: "Fresh mint, lime, and strawberry", descAr: "نعناع طازج، ليمون، وفراولة", price: "SAR 12.00", tag: "Popular", img: "/Strawberry Mojito.webp" },
    { name: "Pomegranate Mojito", nameAr: "موهيتو رمان", desc: "Fresh pomegranate and mint mojito", descAr: "موهيتو رمان طازج مع النعناع", price: "SAR 12.00", img: "/Pomegranate Mojito.webp" },
    { name: "Blue Curacao Mojito", nameAr: "موهيتو بلو كوراساو", desc: "Blue curacao citrus mojito", descAr: "موهيتو بلو كوراساو حمضي", price: "SAR 12.00", img: "/Blue Curacao Mojito.webp" },
    { name: "Lime Refreshment Mojito", nameAr: "موهيتو ليمون منعش", desc: "Classic lime refreshment mojito", descAr: "موهيتو ليمون ونعناع كلاسيكي منعش", price: "SAR 12.00", img: "/Lime Refreshment Mojito.webp" },
    { name: "Mint Mojito", nameAr: "موهيتو نعناع", desc: "Pure fresh mint mojito", descAr: "موهيتو نعناع طازج خالص", price: "SAR 12.00", img: "/Mint Mint Mojito.webp" },
  ],
  "Kulukki": [
    { name: "Refreshing Kulukki", nameAr: "كولوكي منعش", desc: "Shaken iced mocktail", descAr: "موكطيل مثلج منعش مخفوق", price: "SAR 10.00", img: "/Refreshing Kulukki.webp" },
    { name: "Pineapple Kulukki", nameAr: "كولوكي أناناس", desc: "Shaken iced pineapple mocktail", descAr: "موكطيل أناناس مثلج مخفوق", price: "SAR 10.00", img: "/Pineapple Kulukki.webp" },
    { name: "Green Mango Kulukki", nameAr: "كولوكي مانجو أخضر", desc: "Shaken iced green mango mocktail", descAr: "موكطيل مانجو أخضر مثلج مخفوق", price: "SAR 10.00", tag: "Popular", img: "/Green Mango Kulukki.webp" },
    { name: "Watermelon Kulukki", nameAr: "كولوكي بطيخ", desc: "Shaken iced watermelon mocktail", descAr: "موكطيل بطيخ مثلج مخفوق", price: "SAR 10.00", img: "/Watermelon Kulukki.webp" },
    { name: "Passion Fruit Kulukki", nameAr: "كولوكي باشن فروت", desc: "Shaken iced passion fruit mocktail", descAr: "موكطيل باشن فروت مثلج مخفوق", price: "SAR 10.00", img: "/Passion Fruit Kulukki.webp" },
  ],
  "Smoothie / Juice": [
    { name: "Kit Kat Shake", nameAr: "كيت كات شيك", desc: "Blended Kit Kat chocolate shake", descAr: "شيك كيت كات شوكولاتة مخفوق", price: "SAR 15.00", img: "/Kit Kat Shake.webp" },
    { name: "Oreo Shake", nameAr: "ميلك شيك أوريو", desc: "Blended cookies and cream shake", descAr: "شيك بسكويت وكريمة مخفوق", price: "SAR 15.00", tag: "Popular", img: "/Oreo Shake.webp" },
    { name: "Ell Juice", nameAr: "عصير إل", desc: "Special Ell juice blend", descAr: "مزيج عصير إل المميز", price: "SAR 15.00", img: "/Ell Shake.webp" },
    { name: "Fresh Orange Juice", nameAr: "عصير برتقال طازج", desc: "Freshly squeezed oranges", descAr: "عصير برتقال طازج معصور", price: "SAR 12.00", img: "/Fresh Orange Juice.webp" },
    { name: "Fresh Avocado Juice", nameAr: "عصير أفوكادو طازج", desc: "Creamy fresh avocado juice", descAr: "عصير أفوكادو طازج كريمي", price: "SAR 12.00", img: "/Fresh Avocado Juice.webp" },
    { name: "Fresh Mango Juice", nameAr: "عصير مانجو طازج", desc: "Freshly blended mango juice", descAr: "عصير مانجو طازج مخلوط", price: "SAR 12.00", img: "/Fresh Mango Juice.webp" },
    { name: "Fresh Pomegranate Juice", nameAr: "عصير رمان طازج", desc: "Freshly squeezed pomegranate juice", descAr: "عصير رمان طازج معصور", price: "SAR 12.00", img: "/Fresh Pomegranate Juice.webp" },
  ],
};

const GALLERY = [
  { url: "/image_160ebc.webp", captionEn: "", captionAr: "" },
  { url: "/kabab night.webp", captionEn: "", captionAr: "" },
  { url: "/Fine Dining.webp", captionEn: "", captionAr: "" },
  { url: "/Our Ambiences.webp", captionEn: "", captionAr: "" },
  { url: "/image_15bc9f.webp", captionEn: "", captionAr: "" },
  { url: "/image_15b904.webp", captionEn: "", captionAr: "" },
];

const HERO_LOGO_URL = "https://z-cdn-media.chatglm.cn/files/933628ef-8a0b-48de-8f7e-f895e3699f2c.png?auth_key=1876156089-472319959e514a4795f3481a1a120baf-0-1358440605b60dd368f4ed8d883b6bca";

const HERO_VIDEO_URL = "kathirwebsite.mp4";
const OFFERING_VIDEO_1 = "websitekaka2.mp4";
const OFFERING_VIDEO_2 = "websitekaka3.mp4";

const CATEGORY_ICONS: any = {
  "Appetizers": "fa-leaf",
  "Shawarma": "fa-bread-slice",
  "Chops": "fa-bone",
  "Awsal": "fa-fire",
  "Grilled - Boneless": "fa-fire-flame-simple",
  "Grilled - With Bone": "fa-fire-flame-curved",
  "Kabab": "fa-utensils",
  "Drinks": "fa-glass-water",
  "Broasted": "fa-bowl-food",
  "Mixed Grill": "fa-layer-group",
  "Rice": "fa-seedling",
  "Mojitos": "fa-martini-glass",
  "Kulukki": "fa-wine-glass-alt",
  "Smoothie / Juice": "fa-glass-whiskey",
};

const GLOBAL_STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Cairo:wght@400;600;700&family=Outfit:wght@300;400;500;600;700&family=Cinzel:wght@400;600;700&display=swap');

:root {
  --primary: #C0392B;
  --primary-bright: #e84335;
  --primary-glow: rgba(192, 57, 43, 0.6);
  --primary-subtle: rgba(192, 57, 43, 0.12);
  --bg-dark: #060606;
  --bg-card: #0e0e0e;
  --bg-card2: #141414;
  --text-main: #f0f0f0;
  --text-muted: #777;
  --glass: rgba(8, 8, 8, 0.9);
  --border: rgba(255,255,255,0.06);
  --border-hover: rgba(255,255,255,0.15);
  --gold: #c9a96e;
  --gold-bright: #e8c98a;
  --gold-subtle: rgba(201,169,110,0.1);
  --ember: #ff6b35;
  --transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'Outfit', sans-serif;
  --font-ar: 'Cairo', sans-serif;
  --font-price: 'Cinzel', Georgia, serif;
}

*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }

body {
  background-color: var(--bg-dark);
  color: var(--text-main);
  overflow-x: hidden;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  font-family: var(--font-body);
  direction: ltr !important;
  max-width: 100vw;
}
body.ar-mode { font-family: var(--font-ar); }

::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: var(--bg-dark); }
::-webkit-scrollbar-thumb { background: linear-gradient(180deg, var(--gold-bright), var(--gold)); border-radius: 10px; }

.ambient-bg {
  position: fixed; inset: 0; pointer-events: none; z-index: 0;
  background:
    radial-gradient(ellipse 80% 50% at 15% 10%, rgba(201,169,110,0.04) 0%, transparent 55%),
    radial-gradient(ellipse 60% 40% at 85% 85%, rgba(201,169,110,0.03) 0%, transparent 55%),
    radial-gradient(ellipse 50% 60% at 50% 50%, rgba(255,255,255,0.02) 0%, transparent 70%);
}

h1, h2, h3, h4 { font-family: var(--font-display); letter-spacing: 0.01em; }

.section-header { text-align: center; margin-bottom: 4rem; width: 100%; display: flex; flex-direction: column; align-items: center; }
.section-subtitle {
  color: var(--gold); font-size: 0.72rem; letter-spacing: 0.28em; font-weight: 600;
  margin-bottom: 1rem; text-transform: uppercase; font-family: var(--font-body);
  display: inline-flex; align-items: center; gap: 14px;
}
.section-subtitle::before, .section-subtitle::after {
  content: ''; display: block; width: 40px; height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold));
}
.section-subtitle::after { background: linear-gradient(90deg, var(--gold), transparent); }
.section-title {
  font-size: clamp(2.5rem, 8vw, 5.5rem); color: #fff; margin: 0;
  line-height: 1.2; padding-bottom: 0.15em;
  font-family: var(--font-display); font-weight: 700; font-style: italic;
  background: linear-gradient(135deg, #ffffff 30%, rgba(201,169,110,0.7) 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}

.reveal { opacity: 0; transform: translateY(60px); transition: opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1); }
.reveal.active { opacity: 1; transform: translateY(0); }
.reveal-scale { opacity: 0; transform: scale(0.85); transition: opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1); }
.reveal-scale.active { opacity: 1; transform: scale(1); }
.reveal-left { opacity: 0; transform: translateX(-50px); transition: opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1); }
.reveal-left.active { opacity: 1; transform: translateX(0); }
.reveal-right { opacity: 0; transform: translateX(50px); transition: opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1); }
.reveal-right.active { opacity: 1; transform: translateX(0); }

.offering-image-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 200px;
  gap: 16px;
  width: 100%;
  position: relative;
  z-index: 2;
}
.oig-main {
  grid-column: 1 / -1;
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 20px;
  border: 1px solid var(--border);
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  display: block;
  background: #0a0a0a;
}
.oig-video-tile {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  border: 1px solid var(--border);
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  display: block;
  background: #0a0a0a;
  transition: transform 0.6s cubic-bezier(0.16,1,0.3,1), box-shadow 0.6s;
}
.oig-video-tile:hover {
  transform: scale(1.02);
  box-shadow: 0 16px 40px rgba(192,57,43,0.25), 0 0 0 1px rgba(192,57,43,0.2);
}

.nav-wrapper {
  position: fixed; top: 0; left: 0; width: 100%; z-index: 1000;
  padding: 1.5rem 5vw; transition: var(--transition); pointer-events: none;
}
.nav-wrapper.scrolled { padding: 0.8rem 4vw; }

nav {
  pointer-events: auto;
  max-width: 1200px; margin: 0 auto;
  background: rgba(12, 12, 12, 0.85); backdrop-filter: saturate(180%) blur(20px); -webkit-backdrop-filter: saturate(180%) blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 60px; padding: 0.6rem 1rem 0.6rem 2rem;
  display: flex; justify-content: space-between; align-items: center;
  box-shadow: 0 10px 40px rgba(0,0,0,0.5);
  transition: var(--transition);
  position: relative;
}
.nav-wrapper.scrolled nav {
  background: rgba(8, 8, 8, 0.95);
  border-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 15px 50px rgba(0,0,0,0.7);
}

.nav-logo { height: 36px; width: auto; object-fit: contain; cursor: pointer; transition: 0.4s; filter: drop-shadow(0 2px 8px rgba(0,0,0,0.6)); flex-shrink: 0; }
.nav-logo:hover { transform: scale(1.05); filter: drop-shadow(0 4px 15px rgba(192,57,43,0.4)); }

.nav-links-container {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 40px; padding: 4px 6px;
  display: flex; align-items: center;
}

.nav-links { display: flex; gap: 0.5rem; list-style: none; align-items: center; margin: 0; padding: 0; }

.nav-link {
  color: rgba(255,255,255,0.7); text-decoration: none; font-weight: 500; font-size: 0.85rem;
  transition: var(--transition); cursor: pointer;
  padding: 8px 20px; border-radius: 30px; letter-spacing: 0.05em; text-transform: uppercase;
  white-space: nowrap;
}
.nav-link:hover, .nav-link.active { background: rgba(255, 255, 255, 0.08); color: #fff; }

.nav-right { display: flex; align-items: center; gap: 0.75rem; flex-shrink: 0; }

.lang-toggle {
  background: var(--primary); color: white;
  padding: 8px 18px; border-radius: 40px; border: none;
  font-family: var(--font-body); font-weight: 600; font-size: 0.82rem;
  transition: var(--transition); letter-spacing: 0.06em; cursor: pointer;
  box-shadow: 0 4px 15px rgba(192,57,43,0.4);
  white-space: nowrap;
}
.lang-toggle:hover {
  background: var(--primary-bright); transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(192,57,43,0.6);
}

.hamburger { display: none; color: #fff; font-size: 1.3rem; cursor: pointer; background: none; border: none; padding: 6px 8px; line-height: 1; }

/* Enhanced Fullscreen Mobile Overlay UI */
.mobile-nav-dropdown {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(4, 4, 4, 0.98);
  padding: 7rem 2rem 3rem;
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  z-index: 999;
  flex-direction: column;
  justify-content: flex-start;
  gap: 12px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease, transform 0.4s ease;
  transform: translateY(-20px);
}
.mobile-nav-dropdown.open { 
  display: flex; 
  opacity: 1; 
  pointer-events: auto; 
  transform: translateY(0);
}
.mobile-nav-link {
  color: rgba(255,255,255,0.85); text-decoration: none; font-weight: 600; font-size: 1.3rem;
  cursor: pointer; padding: 18px 24px; border-radius: 16px;
  letter-spacing: 0.06em; text-transform: uppercase; transition: var(--transition);
  border: 1px solid rgba(255,255,255,0.02);
  background: rgba(255,255,255,0.02);
  display: flex; align-items: center; justify-content: space-between;
}
.mobile-nav-link::after {
  content: '→'; font-size: 1.1rem; color: var(--gold); opacity: 0.5; transition: transform 0.3s;
}
.mobile-nav-link:active, .mobile-nav-link.active {
  background: rgba(192,57,43,0.15);
  border-color: rgba(192,57,43,0.3);
  color: #fff;
}
.mobile-nav-link:active::after { transform: translateX(4px); opacity: 1; }

.mobile-nav-dropdown .mobile-lang-wrap {
  margin-top: auto;
  padding: 10px;
  border-top: 1px solid rgba(255,255,255,0.08);
  display: flex;
  justify-content: center;
}

/* Premium Back Button Styles */
.back-btn-container {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  position: absolute;
  top: 120px;
  left: 5vw;
  z-index: 100;
}
.back-btn-container-static {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 1rem;
  margin-bottom: 2rem;
}
.back-btn-modern {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #fff;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 50px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.4);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  font-family: var(--font-body);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}
.back-btn-modern i {
  font-size: 1.1rem;
  color: var(--gold-bright);
  transition: transform 0.3s ease;
}
.back-btn-modern:active, .back-btn-modern:hover {
  background: rgba(255,255,255,0.18);
  border-color: rgba(255,255,255,0.5);
  transform: translateY(-2px) scale(0.98);
  box-shadow: 0 4px 20px rgba(0,0,0,0.5);
}
.back-btn-modern:hover i {
  transform: translateX(-4px);
}

@media (max-width: 768px) {
  .back-btn-container {
    position: relative;
    top: auto;
    left: auto;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }
}
@media (max-width: 640px) {
  .back-btn-modern {
    padding: 8px 18px;
    font-size: 0.78rem;
  }
  .back-btn-container {
    margin-bottom: 1.5rem;
    margin-top: 1rem;
  }
}

#home {
  height: 100svh;
  min-height: 600px;
  width: 100%; position: relative; display: flex; align-items: center; justify-content: center; overflow: hidden;
}

.hero-video-bg {
  position: absolute; inset: 0; width: 100%; height: 100%;
  object-fit: cover; z-index: -2;
  filter: brightness(0.45) saturate(1.3);
  pointer-events: none;
}

.hero-overlay {
  position: absolute; inset: 0; z-index: -1;
  background:
    radial-gradient(ellipse 120% 80% at 50% 60%, rgba(0,0,0,0.1) 0%, rgba(6,6,6,0.97) 85%),
    linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 40%);
}

.book-table-float-btn {
  position: fixed;
  right: 20px;
  bottom: 32px;
  z-index: 900;
  width: 76px;
  height: 76px;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 35%, rgba(232,67,53,0.32) 0%, rgba(192,57,43,0.10) 70%);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1.5px solid rgba(232, 67, 53, 0.65);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  animation: clocheSlideIn 1.2s 0.8s cubic-bezier(0.16,1,0.3,1) both, btnGlowPulse 2.8s ease-in-out infinite 2s;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  box-shadow:
    0 0 0 1px rgba(192,57,43,0.2),
    0 0 20px rgba(192,57,43,0.45),
    0 0 50px rgba(192,57,43,0.20),
    0 8px 32px rgba(0,0,0,0.6);
}

@keyframes btnGlowPulse {
  0%, 100% {
    box-shadow:
      0 0 0 1px rgba(192,57,43,0.2),
      0 0 20px rgba(192,57,43,0.45),
      0 0 50px rgba(192,57,43,0.20),
      0 8px 32px rgba(0,0,0,0.6);
  }
  50% {
    box-shadow:
      0 0 0 1px rgba(232,67,53,0.4),
      0 0 32px rgba(232,67,53,0.70),
      0 0 80px rgba(192,57,43,0.35),
      0 8px 32px rgba(0,0,0,0.7);
  }
}

.book-table-float-btn:hover, .book-table-float-btn:active {
  background: radial-gradient(circle at 40% 35%, rgba(232,67,53,0.45) 0%, rgba(192,57,43,0.20) 70%);
  transform: scale(1.1);
  box-shadow:
    0 0 0 1px rgba(232,67,53,0.5),
    0 0 40px rgba(232,67,53,0.75),
    0 0 90px rgba(192,57,43,0.40),
    0 12px 40px rgba(0,0,0,0.7);
}

.book-table-float-btn .bt-float-icon {
  font-size: 1.4rem;
  color: #ff4a3a;
  filter: drop-shadow(0 0 8px rgba(255,74,58,0.95)) drop-shadow(0 0 16px rgba(232,67,53,0.6));
  position: relative; z-index: 2;
}

.rotating-text-wrapper {
  position: absolute; inset: -13px;
  animation: rotateText 14s linear infinite;
  pointer-events: none;
}
.rotating-text-svg { width: 100%; height: 100%; overflow: visible; }
.rotating-text {
  font-family: var(--font-body);
  font-size: 10px;
  font-weight: 700;
  fill: var(--gold-bright);
  letter-spacing: 0.18em;
}
@keyframes rotateText {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@keyframes clocheSlideIn {
  0%   { opacity: 0; transform: translateY(50px); }
  100% { opacity: 1; transform: translateY(0); }
}

.btn {
  padding: 10px 22px; font-weight: 600; font-size: 0.78rem; letter-spacing: 0.09em;
  text-transform: uppercase; text-decoration: none; cursor: pointer;
  display: inline-flex; align-items: center; justify-content: center; gap: 10px;
  border: none; transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); border-radius: 4px;
  font-family: var(--font-body); position: relative; overflow: hidden;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  min-height: 48px;
}
.btn::before {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%);
  opacity: 0; transition: opacity 0.4s;
}
.btn:hover::before { opacity: 1; }
.btn-primary {
  background: linear-gradient(135deg, #d64132 0%, #8b1a12 100%);
  color: white;
  box-shadow: 0 4px 24px rgba(192,57,43,0.4), inset 0 1px 0 rgba(255,255,255,0.12);
}
.btn-primary:hover, .btn-primary:active {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 16px 48px rgba(192,57,43,0.55), inset 0 1px 0 rgba(255,255,255,0.12);
}
.btn-outline {
  background: rgba(255,255,255,0.04); color: white;
  border: 1px solid rgba(255,255,255,0.15); backdrop-filter: blur(10px);
}
.btn-outline:hover, .btn-outline:active {
  background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.4);
  transform: translateY(-2px);
}

section { padding: 7rem 5vw; position: relative; z-index: 1; }

.logo-divider {
  width: 100%; display: flex; justify-content: center; align-items: center;
  gap: 20px; padding: 2.5rem 0; position: relative; z-index: 1;
}
.logo-divider-line {
  flex: 1; max-width: 200px; height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
  animation: lineGlow 3s ease-in-out infinite alternate;
}
@keyframes lineGlow { 0% { opacity: 0.4; } 100% { opacity: 1; } }

.stats-strip {
  background: #080808;
  border-top: 1px solid rgba(255,255,255,0.05);
  border-bottom: 1px solid rgba(255,255,255,0.05);
  padding: 12px 0;
  position: relative; z-index: 1; overflow: hidden; width: 100%;
}
.stats-marquee {
  display: flex; overflow: hidden; width: 100%;
  mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
}
.stats-marquee-track {
  display: flex; flex-shrink: 0; min-width: 100%;
  align-items: center; justify-content: flex-start;
  animation: scrollMarquee 30s linear infinite;
}
.stats-marquee:hover .stats-marquee-track { animation-play-state: paused; }
@keyframes scrollMarquee { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }

.stat-item { display: flex; flex-direction: row; align-items: center; gap: 10px; }
.stat-number {
  font-size: 1rem; font-weight: 700; line-height: 1; font-family: var(--font-body);
  background: linear-gradient(180deg, #ffffff 0%, #e8c98a 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  margin: 0; display: flex; align-items: center; gap: 6px; letter-spacing: 0.02em;
}
.stat-number i { font-size: 0.8em; color: #e8c98a; -webkit-text-fill-color: initial; }
.stat-label { color: #c9a96e; font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 500; font-family: var(--font-body); margin: 0; white-space: nowrap; }
.stat-separator { color: rgba(201,169,110,0.3); margin: 0 2rem; font-size: 0.8rem; }

.gallery-accordion { display: flex; gap: 12px; max-width: 1300px; margin: 0 auto; height: 480px; width: 100%; }
.gallery-accordion-item { position: relative; flex: 1; border-radius: 20px; background: var(--bg-card); border: 1px solid rgba(255,255,255,0.05); overflow: hidden; cursor: pointer; transition: all 0.6s cubic-bezier(0.25, 1, 0.3, 1); }
.gallery-accordion-item.active { flex: 8; border-color: rgba(192, 57, 43, 0.5); box-shadow: 0 10px 40px rgba(0,0,0,0.5); }
.gallery-accordion-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: grayscale(80%) brightness(0.3); transition: all 0.6s cubic-bezier(0.25, 1, 0.3, 1); }
.gallery-accordion-item.active .gallery-accordion-bg { filter: grayscale(0%) brightness(0.8); transform: scale(1.02); }
.gallery-accordion-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 40%, transparent 100%); opacity: 0; transition: opacity 0.6s; }
.gallery-accordion-item.active .gallery-accordion-overlay { opacity: 1; }
.gallery-collapsed-content { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; padding: 24px 0; z-index: 2; transition: opacity 0.3s; }
.gallery-accordion-item.active .gallery-collapsed-content { opacity: 0; pointer-events: none; }
.gallery-num { font-size: 1.3rem; font-family: var(--font-body); font-weight: 700; color: rgba(255,255,255,0.3); margin-bottom: auto; }
.gallery-vertical-text { writing-mode: vertical-rl; transform: rotate(180deg); font-size: 0.9rem; font-weight: 600; letter-spacing: 0.1em; color: rgba(255,255,255,0.6); white-space: nowrap; }
.gallery-expanded-content { position: absolute; inset: 0; padding: 30px; display: flex; flex-direction: column; justify-content: flex-end; z-index: 3; opacity: 0; transform: translateY(20px); transition: opacity 0.4s 0.2s, transform 0.4s 0.2s; }
.gallery-accordion-item.active .gallery-expanded-content { opacity: 1; transform: translateY(0); }
.gallery-expanded-title { font-size: clamp(1.5rem, 4vw, 2.5rem); color: white; font-family: var(--font-display); font-style: italic; margin-bottom: 0; text-shadow: 0 2px 10px rgba(0,0,0,0.8); }

.gallery-accordion-bg[src=""],
.gallery-accordion-bg:not([src]) {
  display: none;
}

footer { background: linear-gradient(180deg, #060606 0%, #000 100%); padding: 5rem 5vw 2rem; position: relative; z-index: 1; overflow: hidden; }
.footer-glow { position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 60%; height: 200px; background: radial-gradient(ellipse at top, rgba(201,169,110,0.08) 0%, transparent 70%); pointer-events: none; }
.footer-grid { display: grid; grid-template-columns: 1.5fr 1.2fr 1.2fr; gap: 4rem; max-width: 1200px; margin: 0 auto 4rem; align-items: flex-start; text-align: left; }
.footer-col p { color: var(--text-muted); font-size: 0.92rem; line-height: 1.8; margin-bottom: 0.8rem; }

.footer-col h4 {
  color: white;
  margin-bottom: 1.5rem;
  font-size: 1.05rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-family: var(--font-body);
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 0;
  background: linear-gradient(135deg, #ffffff 0%, var(--gold-bright) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  padding-bottom: 0.75rem;
}
.footer-col h4::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 36px;
  height: 2px;
  background: linear-gradient(90deg, var(--gold), transparent);
  border-radius: 2px;
}

.social-links-pill { display: inline-flex; align-items: center; gap: 14px; margin-top: 0.5rem; text-decoration: none; transition: var(--transition); cursor: pointer; }
.social-links-pill:hover .social-icon-wrapper { border-color: var(--primary); background: rgba(192, 57, 43, 0.1); transform: scale(1.05); }
.social-icon-wrapper { width: 40px; height: 40px; border-radius: 50%; background: transparent; border: 1px solid rgba(255, 255, 255, 0.15); color: white; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; transition: var(--transition); }
.ig-handle { color: rgba(255, 255, 255, 0.95); font-size: 1.05rem; font-family: var(--font-body); font-weight: 500; letter-spacing: 0.02em; transition: var(--transition); }
.social-links-pill:hover .ig-handle { color: var(--gold); }
.footer-card { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 14px; padding: 20px; transition: var(--transition); }
.footer-card:hover { border-color: rgba(201,169,110,0.2); background: rgba(255,255,255,0.03); }
.footer-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem; color: var(--text-muted); font-size: 0.88rem; border-bottom: 1px dashed rgba(255,255,255,0.1); padding-bottom: 10px; gap: 8px; }
.footer-row:last-child { margin-bottom: 0; border-bottom: none; padding-bottom: 0; }
.footer-row span:last-child { color: var(--gold-bright); font-weight: 600; direction: ltr; white-space: nowrap; }

.footer-contact-item { display: flex; align-items: center; gap: 14px; margin-bottom: 1.2rem; color: var(--text-muted); font-size: 0.9rem; transition: var(--transition); text-decoration: none; }
.footer-contact-item:hover { color: white; transform: translateX(4px); }
.footer-contact-icon { width: 34px; height: 34px; border-radius: 10px; background: rgba(201,169,110,0.1); color: var(--gold); display: flex; align-items: center; justify-content: center; font-size: 0.95rem; flex-shrink: 0; transition: var(--transition); }
.footer-contact-item:hover .footer-contact-icon { background: var(--gold); color: black; box-shadow: 0 4px 15px rgba(201,169,110,0.4); }
.footer-contact-text { display: flex; flex-direction: column; justify-content: center; overflow: hidden; }
.footer-contact-value { direction: ltr; font-weight: 500; color: rgba(255,255,255,0.8); font-size: 0.95rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.footer-bottom { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border); padding-top: 2rem; color: rgba(255,255,255,0.4); font-size: 0.78rem; letter-spacing: 0.04em; font-family: var(--font-body); }

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  padding: 0 5vw 6rem;
}

.category-card {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 18px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.55s cubic-bezier(0.16,1,0.3,1), box-shadow 0.55s cubic-bezier(0.16,1,0.3,1), border-color 0.4s;
  aspect-ratio: 1 / 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1.5rem 1rem;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}

.category-card::before {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(192,57,43,0) 0%, rgba(192,57,43,0.06) 100%);
  opacity: 0; transition: opacity 0.5s;
}
.category-card:hover::before, .category-card:active::before { opacity: 1; }

.category-card:hover, .category-card:active {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(192,57,43,0.25);
  border-color: rgba(192,57,43,0.3);
}

.category-card-icon {
  width: 52px; height: 52px;
  border-radius: 50%;
  background: rgba(192,57,43,0.12);
  border: 1px solid rgba(192,57,43,0.25);
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 0.9rem;
  font-size: 1.3rem;
  color: var(--primary-bright);
  transition: all 0.5s cubic-bezier(0.16,1,0.3,1);
  position: relative; z-index: 1;
}
.category-card:hover .category-card-icon, .category-card:active .category-card-icon {
  background: rgba(192,57,43,0.25);
  border-color: rgba(192,57,43,0.6);
  transform: scale(1.12);
  box-shadow: 0 0 24px rgba(192,57,43,0.3);
}

.category-card-name {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.2;
  margin-bottom: 0.35rem;
  position: relative; z-index: 1;
}

.category-card-count {
  font-family: var(--font-body);
  font-size: 0.68rem;
  font-weight: 500;
  color: var(--gold);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  position: relative; z-index: 1;
}

.category-card-arrow {
  position: absolute;
  bottom: 14px; right: 14px;
  width: 26px; height: 26px;
  border-radius: 50%;
  background: rgba(192,57,43,0.15);
  border: 1px solid rgba(192,57,43,0.2);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.7rem;
  color: var(--primary-bright);
  opacity: 0;
  transform: translateX(-6px);
  transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
}
.category-card:hover .category-card-arrow {
  opacity: 1;
  transform: translateX(0);
}

@keyframes cardEnter {
  0%   { opacity: 0; transform: translateY(40px) scale(0.92); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}
.category-card.animate-in { animation: cardEnter 0.6s cubic-bezier(0.16,1,0.3,1) both; }

@keyframes pageSlideIn {
  0%   { opacity: 0; transform: translateX(40px); }
  100% { opacity: 1; transform: translateX(0); }
}
@keyframes pageSlideOut {
  0%   { opacity: 1; transform: translateX(0); }
  100% { opacity: 0; transform: translateX(-40px); }
}
.detail-page { animation: pageSlideIn 0.5s cubic-bezier(0.16,1,0.3,1) both; min-height: 100vh; }
.detail-page.exit { animation: pageSlideOut 0.32s cubic-bezier(0.16,1,0.3,1) both; }

.menu-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px; max-width: 1300px; margin: 0 auto; width: 100%;
}

.menu-card {
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: 20px; position: relative; overflow: hidden;
  display: flex; flex-direction: column;
  transition: transform 0.6s cubic-bezier(0.16,1,0.3,1), box-shadow 0.6s cubic-bezier(0.16,1,0.3,1), border-color 0.5s;
}
.menu-card::before {
  content: ''; position: absolute; inset: 0; z-index: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 55%);
  pointer-events: none;
}
.menu-card:hover {
  transform: translateY(-10px) scale(1.01);
  box-shadow: 0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(192,57,43,0.2);
  border-color: rgba(192,57,43,0.25);
}

.menu-card-img-wrap { position: relative; overflow: hidden; height: auto; width: 100%; }
.menu-card-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 1s cubic-bezier(0.16,1,0.3,1), filter 0.6s; }
.menu-card:hover .menu-card-img { transform: scale(1.1); filter: brightness(1.1) saturate(1.2); }
.menu-card-img-overlay { position: absolute; inset: 0; background: linear-gradient(to top, var(--bg-card) 0%, rgba(0,0,0,0.2) 50%, transparent 100%); }

.menu-card-content { padding: 1.3rem 1.4rem 1.4rem; display: flex; flex-direction: column; flex-grow: 1; position: relative; z-index: 2; text-align: left; }
.card-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px; gap: 10px; }
.item-tag { font-size: 0.65rem; font-weight: 700; color: var(--gold-bright); background: var(--gold-subtle); border: 1px solid rgba(201,169,110,0.2); border-radius: 20px; padding: 3px 10px; text-transform: uppercase; letter-spacing: 0.09em; white-space: nowrap; flex-shrink: 0; font-family: var(--font-body); }
.item-name { font-size: 1.2rem; color: white; line-height: 1.2; font-weight: 600; font-family: var(--font-display); }
.item-name-alt { color: rgba(192,57,43,0.75); font-size: 0.85rem; font-weight: 600; margin: 5px 0 12px; display: block; }
.item-desc { color: var(--text-muted); font-size: 0.85rem; margin-bottom: 18px; line-height: 1.65; flex-grow: 1; }

.menu-card-footer {
  display: flex; justify-content: space-between; align-items: center;
  border-top: 1px solid var(--border); padding-top: 14px; margin-top: auto;
}

.item-price {
  font-size: 1.1rem;
  font-weight: 700;
  font-family: var(--font-price);
  direction: ltr;
  letter-spacing: 0.04em;
  background: linear-gradient(135deg, #f0d080 0%, #c9a96e 45%, #e8c98a 75%, #a07840 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 1px 4px rgba(201,169,110,0.35));
}

.card-footer-logo {
  height: 24px; width: auto; object-fit: contain;
  opacity: 0.6; filter: brightness(0) invert(1);
  transition: opacity 0.4s, transform 0.4s;
}
.menu-card:hover .card-footer-logo { opacity: 1; filter: none; transform: scale(1.05); }

.category-detail-hero {
  position: relative; padding: 7rem 5vw 3rem; overflow: hidden; text-align: center;
}
.category-detail-hero::before {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(192,57,43,0.1) 0%, transparent 70%);
  pointer-events: none;
}

.category-detail-icon-large {
  width: 72px; height: 72px; border-radius: 50%;
  background: rgba(192,57,43,0.15); border: 1px solid rgba(192,57,43,0.3);
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 1.2rem; font-size: 1.8rem; color: var(--primary-bright);
  box-shadow: 0 0 40px rgba(192,57,43,0.2);
  animation: iconPop 0.6s 0.15s cubic-bezier(0.16, 1, 0.3, 1) both;
}
@keyframes iconPop {
  0%   { opacity: 0; transform: scale(0.5); }
  100% { opacity: 1; transform: scale(1); }
}
@keyframes itemCardEnter {
  0%   { opacity: 0; transform: translateY(40px) scale(0.94); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}
.menu-card.animate-in { animation: itemCardEnter 0.5s cubic-bezier(0.16,1,0.3,1) both; }

.booking-page-container {
  max-width: 800px; margin: 0 auto;
  padding: 2rem 5vw 6rem; position: relative; z-index: 1;
}
.booking-form-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 2.5rem 2rem;
  box-shadow: 0 30px 60px rgba(0,0,0,0.6);
}
.bt-row { display: flex; gap: 16px; margin-bottom: 16px; }
.bt-field { flex: 1; display: flex; flex-direction: column; text-align: left; }
.bt-label { font-size: 0.82rem; color: rgba(255,255,255,0.7); margin-bottom: 8px; font-weight: 500; font-family: var(--font-body); }
.bt-input {
  background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px;
  padding: 13px 14px; color: white; font-family: var(--font-body); font-size: 0.95rem;
  transition: all 0.3s; width: 100%;
  min-height: 52px;
}
.bt-input:focus { outline: none; border-color: var(--primary); background: rgba(192,57,43,0.05); }
.bt-input option { background-color: var(--bg-card); color: white; }
.bt-textarea { resize: vertical; min-height: 100px; }

@media (max-width: 900px) {
  .nav-links-container { display: none !important; }
  .hamburger { display: flex !important; align-items: center; justify-content: center; }
  nav { padding: 0.7rem 1.2rem; border-radius: 50px; }
  .nav-wrapper { padding: 1rem 4vw; }
  .nav-wrapper.scrolled { padding: 0.7rem 4vw; }

  .gallery-accordion { flex-direction: column; height: auto; gap: 10px; }
  .gallery-accordion-item { min-height: 80px; border-radius: 16px; }
  .gallery-accordion-item.active { min-height: 280px; }
  .gallery-collapsed-content { flex-direction: row; padding: 0 24px; justify-content: space-between; }
  .gallery-vertical-text { writing-mode: horizontal-tb; transform: none; }
  .gallery-num { margin-bottom: 0; font-size: 1.1rem; }
  .gallery-expanded-content { padding: 24px; }

  .footer-grid { grid-template-columns: 1fr; gap: 2.5rem; }
  .footer-bottom { flex-direction: column; gap: 0.75rem; text-align: center; }

  #menu-preview > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
  .offering-image-grid { order: 1; }
  .offering-content { order: 2; text-align: center !important; }
  .offering-content .section-subtitle { justify-content: center !important; }
  .offering-content h2 { text-align: center !important; }
  .offering-content > div { justify-content: center !important; }
  .offering-content > p { text-align: center; }

  .book-table-float-btn { width: 70px; height: 70px; right: 18px; bottom: 28px; }
}

@media (max-width: 768px) {
  .bt-row { flex-direction: column; gap: 12px; margin-bottom: 12px; }
  .booking-form-card { padding: 1.8rem 1.4rem; border-radius: 18px; }

  section { padding: 5rem 4vw; }

  .category-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
    padding: 0 4vw 4rem;
  }

  .menu-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 0 4vw;
  }
  .menu-card-img-wrap { height: auto; }

  .category-detail-hero { padding: 7rem 4vw 2.5rem; }

  .section-header { margin-bottom: 2.5rem; }

  .offering-image-grid { grid-template-rows: auto 140px; }
  .oig-main { height: 220px; }

  footer { padding: 4rem 4vw 1.5rem; }
  .footer-row { font-size: 0.82rem; }
  .footer-contact-value { font-size: 0.88rem; }

  .book-table-float-btn { width: 68px; height: 68px; right: 16px; bottom: 26px; }
  .book-table-float-btn .bt-float-icon { font-size: 1.25rem; }
  
  .back-btn-container {
    position: relative;
    top: auto;
    left: auto;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }
}

@media (max-width: 640px) {
  .nav-wrapper { padding: 0.8rem 3vw; }
  nav { padding: 0.6rem 1rem; }
  .nav-logo { height: 30px; }
  .lang-toggle { padding: 7px 14px; font-size: 0.78rem; min-height: 38px; }

  #home { min-height: 100svh; }

  .stat-number { font-size: 0.9rem; }
  .stat-label { font-size: 0.64rem; letter-spacing: 0.08em; }
  .stat-separator { margin: 0 1.2rem; }

  .section-title { font-size: clamp(2rem, 9vw, 3rem); }
  .section-subtitle { font-size: 0.65rem; letter-spacing: 0.2em; gap: 10px; }
  .section-subtitle::before, .section-subtitle::after { width: 24px; }
  .section-header { margin-bottom: 2rem; }

  section { padding: 4rem 4vw; }

  .category-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    padding: 0 4vw 3rem;
  }
  .category-card { border-radius: 16px; padding: 1.4rem 1rem; }
  .category-card-icon { width: 48px; height: 48px; font-size: 1.2rem; margin-bottom: 0.75rem; }
  .category-card-name { font-size: 1rem; }
  .category-card-count { font-size: 0.64rem; }
  .category-card-arrow { display: none; }

  .menu-grid { gap: 16px; padding: 0 4vw; }
  .menu-card-img-wrap { height: auto; }
  .menu-card-content { padding: 1.2rem 1.3rem 1.3rem; }
  .item-name { font-size: 1.15rem; }
  .item-desc { font-size: 0.84rem; }
  .item-price { font-size: 1rem; }
  
  /* Fast touchscreen tap visual responses */
  .menu-card:hover { transform: none; box-shadow: none; border-color: var(--border); }
  .menu-card:active { transform: scale(0.975); border-color: rgba(192,57,43,0.35); background: rgba(192,57,43,0.03); }

  .category-detail-hero { padding: 6rem 4vw 2rem; }
  .category-detail-icon-large { width: 64px; height: 64px; font-size: 1.6rem; margin-bottom: 1rem; }

  .offering-image-grid { grid-template-rows: auto 130px; gap: 12px; }
  .oig-main { height: 200px; border-radius: 16px; }
  .oig-video-tile { border-radius: 16px; }

  .gallery-accordion-item.active { min-height: 240px; }
  .gallery-expanded-title { font-size: 1.4rem; }

  footer { padding: 3.5rem 4vw 2rem; }
  .footer-grid { gap: 2rem; }
  .footer-col h4 { font-size: 0.9rem; margin-bottom: 1.2rem; }
  .footer-bottom { font-size: 0.72rem; gap: 0.5rem; }

  .booking-page-container { padding: 1.5rem 4vw 5rem; }
  .booking-form-card { padding: 1.5rem 1.2rem; border-radius: 16px; }
  .bt-input { padding: 12px 12px; font-size: 0.9rem; min-height: 50px; }
  .bt-label { font-size: 0.78rem; }

  .logo-divider { padding: 2rem 0; }
  .logo-divider-line { max-width: 100px; }

  .book-table-float-btn { width: 66px; height: 66px; right: 14px; bottom: 28px; }
  .rotating-text-wrapper { inset: -11px; }
  .rotating-text { font-size: 9.5px; }
  .book-table-float-btn .bt-float-icon { font-size: 1.2rem; }
  
  .back-btn-modern {
    padding: 8px 18px;
    font-size: 0.78rem;
  }
  .back-btn-container {
    margin-bottom: 1.5rem;
    margin-top: 1rem;
  }
}

@media (max-width: 480px) {
  .nav-logo { height: 28px; }
  .lang-toggle { padding: 6px 12px; font-size: 0.74rem; }
  nav { padding: 0.55rem 0.9rem; }

  .category-grid { gap: 10px; padding: 0 3vw 2.5rem; }
  .category-card { padding: 1.2rem 0.8rem; border-radius: 14px; }
  .category-card-icon { width: 44px; height: 44px; font-size: 1.1rem; margin-bottom: 0.65rem; }
  .category-card-name { font-size: 0.92rem; }
  .category-card-count { font-size: 0.6rem; }

  .menu-grid { gap: 14px; padding: 0 3vw; }
  .menu-card-img-wrap { height: auto; }

  section { padding: 3.5rem 3vw; }
  .category-detail-hero { padding: 5.5rem 3vw 1.8rem; }

  .offering-image-grid { gap: 10px; grid-template-rows: auto 115px; }
  .oig-main { height: 185px; border-radius: 14px; }

  .section-title { font-size: clamp(1.8rem, 10vw, 2.5rem); }

  .gallery-accordion-item.active { min-height: 220px; }

  .booking-form-card { padding: 1.2rem 1rem; }

  .book-table-float-btn { width: 60px; height: 60px; right: 12px; bottom: 24px; }
  .rotating-text-wrapper { inset: -10px; }
  .rotating-text { font-size: 9px; }
  .book-table-float-btn .bt-float-icon { font-size: 1.1rem; }
}

@media (max-width: 360px) {
  .category-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; padding: 0 3vw 2rem; }
  .category-card { padding: 1rem 0.7rem; border-radius: 12px; }
  .category-card-name { font-size: 0.85rem; }
  .category-card-icon { width: 40px; height: 40px; font-size: 1rem; }
  .section-title { font-size: clamp(1.6rem, 11vw, 2.2rem); }
  .menu-card-img-wrap { height: auto; }
  .lang-toggle { padding: 5px 10px; font-size: 0.7rem; }

  .book-table-float-btn { width: 56px; height: 56px; right: 10px; bottom: 20px; }
  .rotating-text { font-size: 8.5px; }
  .book-table-float-btn .bt-float-icon { font-size: 1rem; }
}

@media (hover: none) and (pointer: coarse) {
  .menu-card:hover { transform: none; box-shadow: none; border-color: var(--border); }
  .menu-card:active { transform: scale(0.975); border-color: rgba(192,57,43,0.35); }
  .menu-card:hover .menu-card-img { transform: none; filter: none; }

  .btn:hover { transform: none; }
  .btn:active { transform: scale(0.97); opacity: 0.9; }

  .category-card:hover { transform: none; box-shadow: none; border-color: var(--border); }
  .category-card:active {
    transform: scale(0.95);
    border-color: rgba(192,57,43,0.4);
    box-shadow: 0 10px 30px rgba(0,0,0,0.4);
    background: rgba(192,57,43,0.06);
  }
  .category-card:active .category-card-icon {
    background: rgba(192,57,43,0.25);
    border-color: rgba(192,57,43,0.5);
  }

  .footer-contact-item:hover { transform: none; color: var(--text-muted); }
  .nav-logo:hover { transform: none; }

  .nav-link { min-height: 48px; display: flex; align-items: center; justify-content: center; }
  .mobile-nav-link { min-height: 52px; display: flex; align-items: center; }
  .hamburger { min-width: 44px; min-height: 44px; }
  .lang-toggle { min-height: 40px; }

  .book-table-float-btn:active {
    transform: scale(0.93) !important;
    box-shadow:
      0 0 0 1px rgba(232,67,53,0.5),
      0 0 40px rgba(232,67,53,0.8),
      0 0 80px rgba(192,57,43,0.4),
      0 8px 32px rgba(0,0,0,0.7) !important;
  }
}

@media (max-height: 500px) and (orientation: landscape) {
  #home { min-height: 100svh; }
  .book-table-float-btn { bottom: 14px; }
}

@supports (padding: env(safe-area-inset-bottom)) {
  .book-table-float-btn {
    bottom: calc(28px + env(safe-area-inset-bottom));
    right: max(14px, env(safe-area-inset-right) + 8px);
  }
  footer {
    padding-bottom: calc(2rem + env(safe-area-inset-bottom));
  }
}
`;

function BookTableFloatingBtn({ onClick, lang }: { onClick: () => void; lang: string }) {
  const textEn = " ★ BOOK TABLE ★ BOOK TABLE ★";
  const textAr = " ★ احجز طاولة ★ احجز طاولة ★";
  const text = lang === "en" ? textEn : textAr;
  return (
    <div className="book-table-float-btn" onClick={onClick} role="button" aria-label="Book a Table">
      <div className="rotating-text-wrapper">
        <svg viewBox="0 0 100 100" className="rotating-text-svg">
          <path id="circlePathBT" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
          <text className="rotating-text">
            <textPath href="#circlePathBT" startOffset="0%">{text}</textPath>
          </text>
        </svg>
      </div>
      <div className="bt-float-icon"><i className="fas fa-concierge-bell"></i></div>
    </div>
  );
}

function Navbar({ currentView, setCurrentView, lang, setLang }: { currentView: string; setCurrentView: (v: string) => void; lang: "en" | "ar"; setLang: (l: "en" | "ar") => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const text = (T as any)[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60 || currentView !== "home");
      if (currentView === "home") {
        const scrollPos = window.scrollY + 150;
        const galleryEl = document.getElementById("gallery");
        if (galleryEl && scrollPos >= galleryEl.offsetTop) setActiveSection("gallery");
        else setActiveSection("home");
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentView]);

  useEffect(() => {
    const handler = (e: any) => {
      if (menuOpen && !e.target.closest('nav')) setMenuOpen(false);
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [menuOpen]);

  const handleNav = (view: string, scrollTo?: string) => {
    setMenuOpen(false);
    if (scrollTo) {
      setCurrentView("home");
      setTimeout(() => document.getElementById(scrollTo)?.scrollIntoView({ behavior: "smooth" }), 50);
    } else {
      setCurrentView(view);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className={`nav-wrapper ${scrolled || currentView !== "home" ? "scrolled" : ""}`}>
      <nav>
        <img src={HERO_LOGO_URL} alt="Kaka Grill" className="nav-logo" onClick={() => handleNav("home")} />
        <div className="nav-links-container">
          <ul className="nav-links">
            <li><a className={`nav-link ${currentView === "home" && activeSection === "home" ? "active" : ""}`} onClick={() => handleNav("home")}>{text.home}</a></li>
            <li><a className={`nav-link ${currentView === "menu" ? "active" : ""}`} onClick={() => handleNav("menu")}>{text.menu}</a></li>
            <li><a className={`nav-link ${activeSection === "gallery" ? "active" : ""}`} onClick={() => handleNav("home", "gallery")}>{text.gallery}</a></li>
          </ul>
        </div>
        <div className="nav-right">
          <button className="lang-toggle" onClick={() => setLang(lang === "en" ? "ar" : "en")}>
            {lang === "en" ? "عربي" : "English"}
          </button>
          <button className="hamburger" onClick={(e) => { e.stopPropagation(); setMenuOpen(v => !v); }} aria-label="Menu">
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>
        <div className={`mobile-nav-dropdown ${menuOpen ? 'open' : ''}`}>
          <a className={`mobile-nav-link ${currentView === "home" && activeSection === "home" ? "active" : ""}`} onClick={() => handleNav("home")}>{text.home}</a>
          <a className={`mobile-nav-link ${currentView === "menu" ? "active" : ""}`} onClick={() => handleNav("menu")}>{text.menu}</a>
          <a className={`mobile-nav-link ${activeSection === "gallery" ? "active" : ""}`} onClick={() => handleNav("home", "gallery")}>{text.gallery}</a>
          <div className="mobile-lang-wrap">
            <button className="lang-toggle" onClick={() => setLang(lang === "en" ? "ar" : "en")}>
              {lang === "en" ? "عربي" : "English"}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

function Hero() {
  return (
    <header id="home">
      <video
        className="hero-video-bg"
        src={HERO_VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="hero-overlay" />
    </header>
  );
}

function StatsStrip({ lang }: { lang: "en" | "ar" }) {
  const statsArray = (T as any)[lang].stats;
  const items = statsArray.map((s: any, i: number) => (
    <React.Fragment key={i}>
      <div className="stat-item">
        <div className="stat-number">
          {s.num}
          {s.hasStar && <i className="fas fa-star" style={{ color: '#c9a96e' }}></i>}
        </div>
        <div className="stat-label">{s.label}</div>
      </div>
      <div className="stat-separator">✦</div>
    </React.Fragment>
  ));
  return (
    <div className="stats-strip reveal">
      <div className="stats-marquee">
        <div className="stats-marquee-track">{items}</div>
        <div className="stats-marquee-track" aria-hidden="true">{items}</div>
      </div>
    </div>
  );
}

function HomeMenuPreview({ onNavigateToMenu, lang }: { onNavigateToMenu: () => void; lang: "en" | "ar" }) {
  const text = (T as any)[lang].preview;
  const isEn = lang === "en";

  return (
    <section id="menu-preview" style={{ padding: "7rem 5vw", position: "relative", zIndex: 2, background: "transparent" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" } as any}>
        <div className="offering-image-grid reveal-left">
          <video
            className="oig-main"
            src="kakamain.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            style={{ objectFit: "cover", display: "block" }}
          />
          <video
            className="oig-video-tile"
            src={OFFERING_VIDEO_1}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          <video
            className="oig-video-tile"
            src={OFFERING_VIDEO_2}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>

        <div className="offering-content reveal-right" style={{ textAlign: isEn ? "left" : "right" } as any}>
          <span className="section-subtitle" style={{ justifyContent: isEn ? "flex-start" : "flex-end", marginBottom: "1rem" }}>
            {isEn ? "Our Selection" : "تشكيلتنا"}
          </span>
          <h2 className="section-title" style={{ fontSize: "clamp(2rem, 6vw, 4rem)", marginBottom: "1.8rem", textAlign: isEn ? "left" : "right" } as any}>
            {text.title}
          </h2>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.2rem", flexDirection: isEn ? "row" : "row-reverse" } as any}>
            <span style={{ fontSize: "clamp(2.5rem, 8vw, 4rem)", fontWeight: "700", color: "var(--gold)", lineHeight: "1", fontFamily: "var(--font-display)" }}>
              15+
            </span>
            <span style={{ fontSize: "1rem", color: "rgba(255,255,255,0.9)", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.05em", maxWidth: "200px", lineHeight: "1.3" } as any}>
              {isEn ? "Years of Flavour Excellence" : "سنوات من التميز في النكهة"}
            </span>
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: "1.8", marginBottom: "1.8rem" }}>
            {text.desc}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", marginBottom: "2rem", justifyContent: isEn ? "flex-start" : "flex-end" } as any}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--gold)", fontSize: "0.88rem", fontWeight: "500" }}>
              <i className="fas fa-star"></i> 4.9/5 • {isEn ? "Loved by thousands" : "محبوب من قبل الآلاف"}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", border: "1px solid rgba(201,169,110,0.3)", borderRadius: "40px", padding: "5px 14px", color: "var(--gold-bright)", fontSize: "0.82rem", fontWeight: "600", background: "rgba(201,169,110,0.05)" }}>
              <i className="fas fa-check-circle"></i> {isEn ? "100% Quality Assured" : "جودة مضمونة 100%"}
            </div>
          </div>
          <button onClick={onNavigateToMenu} className="btn btn-primary" style={{ padding: "14px 32px", fontSize: "0.88rem", borderRadius: "8px", width: "100%", maxWidth: "280px" }}>
            <i className="fas fa-utensils"></i> {text.btn}
          </button>
        </div>
      </div>
    </section>
  );
}

function LogoDivider() {
  return (
    <div className="logo-divider">
      <div className="logo-divider-line" />
      <img src={HERO_LOGO_URL} alt="" style={{ height: "28px", filter: "grayscale(1) brightness(2.5)", opacity: 0.7, transition: '0.4s' } as any} onMouseEnter={(e: any) => { e.target.style.opacity = '1'; e.target.style.filter = 'none'; }} onMouseLeave={(e: any) => { e.target.style.opacity = '0.7'; e.target.style.filter = 'grayscale(1) brightness(2.5)'; }} />
      <div className="logo-divider-line" style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />
    </div>
  );
}

function BookTablePage({ onNavigateHome, lang }: { onNavigateHome: () => void; lang: "en" | "ar" }) {
  const [form, setForm] = useState({ name: "", phone: "", date: "", time: "", members: "2", table: "Indoor", message: "" });
  const [sending, setSending] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleChange = (e: any) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSend = () => {
    if (!form.name || !form.phone || !form.date || !form.time) {
      alert(lang === "en" ? "Please fill in all required fields." : "يرجى ملء جميع الحقول المطلوبة.");
      return;
    }
    setSending(true);
    const timeFormatted = (() => {
      const [h, m] = form.time.split(":");
      const hour = parseInt(h, 10);
      const ampm = hour >= 12 ? "PM" : "AM";
      const h12 = hour % 12 || 12;
      return `${h12}:${m} ${ampm}`;
    })();
    const msg = lang === "en"
      ? `*Table Booking Request — KAKA GRILL*\n\nName: ${form.name}\nPhone: ${form.phone}\nDate: ${form.date}\nTime: ${timeFormatted}\nMembers: ${form.members}\nTable Preference: ${form.table}${form.message ? `\nMessage: ${form.message}` : ""}\n\n_Sent via kakagrill.com_`
      : `*طلب حجز طاولة — كاكا جريل*\n\nالاسم: ${form.name}\nالهاتف: ${form.phone}\nالتاريخ: ${form.date}\nالوقت: ${timeFormatted}\nعدد الأشخاص: ${form.members}\nتفضيل الطاولة: ${form.table}${form.message ? `\nملاحظة: ${form.message}` : ""}\n\n_أُرسل عبر kakagrill.com_`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/966557820123?text=${encoded}`, "_blank");
    setTimeout(() => { setSending(false); }, 800);
  };

  const isAr = lang === "ar";
  const label = (en: string, ar: string) => isAr ? ar : en;

  return (
    <div className="detail-page" style={{ position: "relative", zIndex: 1 }}>
      <div className="category-detail-hero" style={{ padding: "9rem 5vw 3rem" }}>
        
        {/* NEW MODERN BACK BUTTON */}
        <div className="back-btn-container">
          <button className="back-btn-modern" onClick={onNavigateHome}>
            <i className="fas fa-arrow-left"></i> {(T as any)[lang].fullMenu.back}
          </button>
        </div>

        <div className="category-detail-icon-large"><i className="fas fa-calendar-check"></i></div>
        <div className="section-header" style={{ marginBottom: 0 }}>
          <span className="section-subtitle">{label("Reserve Your Experience", "احجز تجربتك")}</span>
          <h2 className="section-title">{label("Book a Table", "احجز طاولة")}</h2>
        </div>
      </div>

      <div className="booking-page-container">
        <div className="booking-form-card animate-in">
          <div className="bt-row">
            <div className="bt-field">
              <label className="bt-label">{label("Full Name *", "الاسم الكامل *")}</label>
              <input className="bt-input" name="name" value={form.name} onChange={handleChange} placeholder={label("Your name", "اسمك")} />
            </div>
            <div className="bt-field">
              <label className="bt-label">{label("Phone Number *", "رقم الهاتف *")}</label>
              <input className="bt-input" name="phone" value={form.phone} onChange={handleChange} placeholder="+966 5X XXX XXXX" dir="ltr" type="tel" />
            </div>
          </div>
          <div className="bt-row">
            <div className="bt-field">
              <label className="bt-label">{label("Date *", "التاريخ *")}</label>
              <input className="bt-input" type="date" name="date" value={form.date} onChange={handleChange} min={new Date().toISOString().split("T")[0]} />
            </div>
            <div className="bt-field">
              <label className="bt-label">{label("Time *", "الوقت *")}</label>
              <input className="bt-input" type="time" name="time" value={form.time} onChange={handleChange} />
            </div>
          </div>
          <div className="bt-row">
            <div className="bt-field">
              <label className="bt-label">{label("Number of Members", "عدد الأشخاص")}</label>
              <select className="bt-input" name="members" value={form.members} onChange={handleChange}>
                {["1","2","3","4","5","6","7","8","9","10+"].map(v => <option key={v} value={v}>{v} {label("Person(s)", "شخص")}</option>)}
              </select>
            </div>
            <div className="bt-field">
              <label className="bt-label">{label("Table Preference", "تفضيل الطاولة")}</label>
              <select className="bt-input" name="table" value={form.table} onChange={handleChange}>
                <option value="Indoor">{label("Indoor", "داخلي")}</option>
                <option value="Outdoor">{label("Outdoor", "خارجي")}</option>
                <option value="Private Room">{label("Private Room", "غرفة خاصة")}</option>
                <option value="VIP Section">{label("VIP Section", "قسم VIP")}</option>
              </select>
            </div>
          </div>
          <div className="bt-field" style={{ width: "100%", marginBottom: "20px" }}>
            <label className="bt-label">{label("Special Requests (optional)", "طلبات خاصة (اختياري)")}</label>
            <textarea className="bt-input bt-textarea" name="message" value={form.message} onChange={handleChange} placeholder={label("Any متطلبات غذائية، مناسبة، أو ملاحظات خاصة...")} rows={4} />
          </div>
          <div style={{ textAlign: "center", marginTop: "1.5rem" } as any}>
            <button className="btn btn-primary" onClick={handleSend} disabled={sending} style={{ padding: "15px 32px", fontSize: "0.95rem", borderRadius: "8px", width: "100%" }}>
              {sending ? <><i className="fas fa-circle-notch fa-spin"></i> {label("Processing...", "جاري المعالجة...")}</> : <><i className="fab fa-whatsapp" style={{ fontSize: "1.2rem" }}></i> {label("Confirm via WhatsApp", "تأكيد عبر واتساب")}</>}
            </button>
            <p style={{ marginTop: "1rem", color: "var(--text-muted)", fontSize: "0.82rem" }}>
              {label("Your booking request will be sent directly to our team on WhatsApp.", "سيتم إرسال طلب حجزك مباشرةً لفريقنا عبر واتساب.")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FullMenuPage({ onNavigateHome, onSelectCategory, lang }: { onNavigateHome: () => void; onSelectCategory: (cat: string) => void; lang: "en" | "ar" }) {
  const text = (T as any)[lang].fullMenu;
  const catText = (T as any)[lang].categories;
  const categories = Object.keys(T.en.categories);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "1rem 5vw 0" }}>
        
        {/* NEW MODERN BACK BUTTON */}
        <div className="back-btn-container-static">
          <button onClick={onNavigateHome} className="back-btn-modern">
            <i className="fas fa-arrow-left"></i> {text.back}
          </button>
        </div>

      </div>
      <section style={{ paddingTop: "0.5rem", paddingBottom: "2rem" }}>
        <div className="section-header reveal">
          <span className="section-subtitle">{text.subtitle}</span>
          <h2 className="section-title">{text.title}</h2>
        </div>
      </section>
      <div className="category-grid">
        {categories.map((cat, index) => {
          const count = (MENU[cat] || []).length;
          const icon = CATEGORY_ICONS[cat] || "fa-utensils";
          return (
            <div
              key={cat}
              className="category-card animate-in"
              style={{ animationDelay: `${index * 0.05}s` } as any}
              onClick={() => onSelectCategory(cat)}
            >
              <div className="category-card-icon">
                <i className={`fas ${icon}`}></i>
              </div>
              <div className="category-card-name">{catText[cat]}</div>
              {count > 0 && (
                <div className="category-card-count">
                  {count} {lang === "en" ? "items" : "أصناف"}
                </div>
              )}
              <div className="category-card-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CategoryDetailPage({ category, onBack, lang }: { category: string; onBack: () => void; lang: "en" | "ar" }) {
  const text = (T as any)[lang].fullMenu;
  const catText = (T as any)[lang].categories;
  const items = MENU[category] || [];
  const icon = CATEGORY_ICONS[category] || "fa-utensils";
  const [exiting, setExiting] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, [category]);

  const handleBack = () => {
    setExiting(true);
    setTimeout(() => onBack(), 300);
  };

  return (
    <div className={`detail-page${exiting ? ' exit' : ''}`} style={{ minHeight: "100vh", position: "relative", zIndex: 1 }}>
      <div className="category-detail-hero">
        
        {/* NEW MODERN BACK BUTTON */}
        <div className="back-btn-container">
          <button className="back-btn-modern" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i> {text.backToMenu}
          </button>
        </div>

        <div className="category-detail-icon-large">
          <i className={`fas ${icon}`}></i>
        </div>
        <div className="section-header" style={{ marginBottom: "0" }}>
          <span className="section-subtitle">
            {lang === "en" ? "Our Selection" : "تشكيلتنا"}
          </span>
          <h2 className="section-title">{catText[category]}</h2>
        </div>
      </div>

      <section style={{ paddingTop: "1.5rem", paddingBottom: "5rem" }}>
        <div className="menu-grid">
          {items.map((item: any, index: number) => (
            <div
              key={item.name}
              className="menu-card animate-in"
              style={{ animationDelay: `${index * 0.07}s` } as any}
            >
              <div className="menu-card-img-wrap">
                <img src={item.img} alt={item.name} className="menu-card-img" loading="lazy" />
                <div className="menu-card-img-overlay" />
              </div>
              <div className="menu-card-content">
                <div className="card-header">
                  <h3 className="item-name">{lang === "en" ? item.name : item.nameAr}</h3>
                  {item.tag && <span className="item-tag">{item.tag}</span>}
                </div>
                <span className="item-name-alt" style={{ fontFamily: lang === "en" ? "var(--font-ar)" : "var(--font-body)" }}>
                  {lang === "en" ? item.nameAr : item.name}
                </span>
                <p className="item-desc">{lang === "en" ? item.desc : item.descAr}</p>
                <div className="menu-card-footer">
                  <span className="item-price">{item.price}</span>
                  <img src={HERO_LOGO_URL} alt="Kaka Grill" className="card-footer-logo" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function GallerySection({ lang }: { lang: "en" | "ar" }) {
  const text = (T as any)[lang].gallery;
  const [activeIdx, setActiveIdx] = React.useState(0);

  const handleImgError = (e: any) => {
    e.target.style.display = 'none';
    const parent = e.target.parentElement;
    if (parent && !parent.querySelector('.gallery-fallback-bg')) {
      parent.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)';
    }
  };

  return (
    <section id="gallery" style={{ background: "linear-gradient(180deg, var(--bg-dark) 0%, #040404 100%)" }}>
      <div className="section-header reveal">
        <span className="section-subtitle">{text.subtitle}</span>
        <h2 className="section-title">{text.title}</h2>
      </div>
      <div className="gallery-accordion reveal-scale">
        {GALLERY.map((img, i) => {
          const isActive = activeIdx === i;
          const numLabel = `0${i + 1}`;
          return (
            <div key={i} className={`gallery-accordion-item ${isActive ? 'active' : ''}`}
              onMouseEnter={() => setActiveIdx(i)}
              onClick={() => setActiveIdx(i)}
            >
              <img
                src={img.url}
                alt={img.captionEn}
                className="gallery-accordion-bg"
                loading="lazy"
                onError={handleImgError}
              />
              <div className="gallery-accordion-overlay" />
              <div className="gallery-collapsed-content">
                <span className="gallery-num">{numLabel}</span>
                <div className="gallery-vertical-text">{lang === "en" ? img.captionEn : img.captionAr}</div>
              </div>
              <div className="gallery-expanded-content">
                <h3 className="gallery-expanded-title">{lang === "en" ? img.captionEn : img.captionAr}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Footer({ lang }: { lang: "en" | "ar" }) {
  const text = (T as any)[lang].footer;
  return (
    <footer>
      <div className="footer-glow" />
      <div className="footer-grid">
        <div className="footer-col" style={{ paddingRight: '1rem' }}>
          <img src={HERO_LOGO_URL} alt="Logo" style={{ height: "52px", marginBottom: "20px", filter: "drop-shadow(0 4px 20px rgba(192,57,43,0.3))", display: "block" }} />
          <p>{text.desc}</p>
          <a href="https://www.instagram.com/kakagrilljubail?igsh=dnd1NndpcnptYXU1&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-links-pill" title="Follow us on Instagram">
            <div className="social-icon-wrapper"><i className="fab fa-instagram"></i></div>
            <span className="ig-handle">@kakagrilljubail</span>
          </a>
        </div>
        <div className="footer-col">
          <h4>{text.hours}</h4>
          <div className="footer-card">
            <div className="footer-row"><span>{text.monThu}</span><span>12:00 PM – 11:00 PM</span></div>
            <div className="footer-row"><span>{text.friSat}</span><span>12:00 PM – 1:00 AM</span></div>
            <div className="footer-row"><span>{text.sun}</span><span>1:00 PM – 11:00 PM</span></div>
          </div>
        </div>
        <div className="footer-col">
          <h4>{text.contact}</h4>
          <a href="https://maps.app.goo.gl/oFsvv6URY4f3gdUg7?g_st=ic" target="_blank" rel="noopener noreferrer" className="footer-contact-item">
            <div className="footer-contact-icon"><i className="fas fa-map-marker-alt"></i></div>
            <div className="footer-contact-text"><span className="footer-contact-value">{text.location}</span></div>
          </a>
          <a href="tel:+966557820123" className="footer-contact-item">
            <div className="footer-contact-icon"><i className="fas fa-phone-alt"></i></div>
            <div className="footer-contact-text"><span className="footer-contact-value" style={{ direction: "ltr" }}>+966 55 782 0123</span></div>
          </a>
          <a href="mailto:info@kakagrill.com" className="footer-contact-item">
            <div className="footer-contact-icon"><i className="fas fa-envelope-open-text"></i></div>
            <div className="footer-contact-text"><span className="footer-contact-value" style={{ direction: "ltr" }}>info@kakagrill.com</span></div>
          </a>
        </div>
      </div>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="footer-bottom">
          <span>{text.rights}</span>
          <span>{text.madeWith} <i className="fas fa-heart" style={{ color: 'var(--primary)', margin: '0 4px' }}></i></span>
        </div>
      </div>
    </footer>
  );
}

export default function KakaGrillWebsite() {
  const [currentView, setCurrentView] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [lang, setLang] = useState<"en" | "ar">("en");

  useEffect(() => {
    if (lang === "ar") document.body.classList.add("ar-mode");
    else document.body.classList.remove("ar-mode");
    document.body.style.direction = "ltr";
    document.body.removeAttribute("dir");
  }, [lang]);

  useEffect(() => {
    let meta = document.querySelector('meta[name="viewport"]') as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta') as HTMLMetaElement;
      meta.name = 'viewport';
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'width=device-width, initial-scale=1.0, viewport-fit=cover');
  }, []);

  useEffect(() => {
    if (!document.querySelector('link[href*="font-awesome"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
      document.head.appendChild(link);
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add("active"); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.08 });
    const t = setTimeout(() => {
      ["reveal", "reveal-left", "reveal-right", "reveal-scale"].forEach(cls => {
        document.querySelectorAll(`.${cls}:not(.active)`).forEach(el => observer.observe(el));
      });
    }, 100);
    return () => { clearTimeout(t); observer.disconnect(); };
  }, [currentView, selectedCategory, lang]);

  const goToMenu = () => { setCurrentView("menu"); setSelectedCategory(null); window.scrollTo(0, 0); };
  const goHome = () => { setCurrentView("home"); setSelectedCategory(null); window.scrollTo(0, 0); };
  const goToBooking = () => { setCurrentView("booking"); setSelectedCategory(null); window.scrollTo(0, 0); };
  const handleSelectCategory = (cat: string) => { setSelectedCategory(cat); window.scrollTo(0, 0); };
  const handleBackToMenu = () => { setSelectedCategory(null); window.scrollTo(0, 0); };

  return (
    <div className="kaka-grill-app" style={{ overflowX: 'hidden', width: '100%' }}>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_STYLES }} />
      <div className="ambient-bg" />
      <BookTableFloatingBtn onClick={goToBooking} lang={lang} />
      <Navbar
        currentView={currentView}
        setCurrentView={(v: string) => { setCurrentView(v); setSelectedCategory(null); }}
        lang={lang}
        setLang={setLang}
      />

      {currentView === "home" ? (
        <>
          <Hero />
          <StatsStrip lang={lang} />
          <HomeMenuPreview onNavigateToMenu={goToMenu} lang={lang} />
          <LogoDivider />
          <GallerySection lang={lang} />
        </>
      ) : currentView === "booking" ? (
        <BookTablePage onNavigateHome={goHome} lang={lang} />
      ) : selectedCategory ? (
        <CategoryDetailPage category={selectedCategory} onBack={handleBackToMenu} lang={lang} />
      ) : (
        <FullMenuPage onNavigateHome={goHome} onSelectCategory={handleSelectCategory} lang={lang} />
      )}

      <Footer lang={lang} />
    </div>
  );
}