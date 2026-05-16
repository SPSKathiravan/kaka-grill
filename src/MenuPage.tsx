import { useState } from "react";

interface MenuItem {
  name: string;
  nameAr?: string;
  price: string;
  desc?: string;
  tag?: string;
}

interface MenuCategory {
  id: string;
  label: string;
  emoji: string;
  items: MenuItem[];
}

const FULL_MENU: MenuCategory[] = [
  {
    id: "appetizer",
    label: "Appetizer",
    emoji: "🥗",
    items: [
      { name: "Hummus", nameAr: "حمص", price: "AED 18", desc: "Creamy chickpea dip with olive oil & paprika" },
      { name: "Fattoush Salad", nameAr: "فتوش", price: "AED 20", desc: "Fresh garden greens with sumac dressing & toasted pita" },
      { name: "Tabbouleh", nameAr: "تبولة", price: "AED 18", desc: "Parsley, tomato, bulgur & lemon dressing" },
      { name: "Grilled Halloumi", nameAr: "حلومي مشوي", price: "AED 28", desc: "Golden seared halloumi with wild herbs" },
      { name: "Soup of the Day", nameAr: "شوربة اليوم", price: "AED 22", desc: "Slow-cooked, ask your server" },
      { name: "Lentil Soup", nameAr: "شوربة عدس", price: "AED 20", desc: "Classic red lentil with lemon & cumin" },
    ],
  },
  {
    id: "shawarma",
    label: "Shawarma",
    emoji: "🌯",
    items: [
      { name: "Chicken Shawarma Wrap", nameAr: "شاورما دجاج", price: "AED 22", desc: "Marinated chicken, garlic sauce, pickles in fresh bread" },
      { name: "Meat Shawarma Wrap", nameAr: "شاورما لحم", price: "AED 25", desc: "Spiced beef & lamb, tahini, tomato in fresh bread" },
      { name: "Chicken Shawarma Plate", nameAr: "طبق شاورما دجاج", price: "AED 35", desc: "Served with rice, salad & garlic sauce" },
      { name: "Meat Shawarma Plate", nameAr: "طبق شاورما لحم", price: "AED 39", desc: "Served with rice, salad & tahini" },
      { name: "Mixed Shawarma Plate", nameAr: "طبق مشكل شاورما", price: "AED 45", desc: "Chicken & meat combo with all sides", tag: "Popular" },
    ],
  },
  {
    id: "chops",
    label: "Chops",
    emoji: "🥩",
    items: [
      { name: "Lamb Chops (2 pcs)", nameAr: "ضلوع لحم", price: "AED 55", desc: "Marinated overnight in house spices, char-grilled", tag: "Bestseller" },
      { name: "Lamb Chops (4 pcs)", nameAr: "ضلوع لحم", price: "AED 99", desc: "Marinated overnight in house spices, char-grilled" },
      { name: "Veal Chops (2 pcs)", nameAr: "ضلوع عجل", price: "AED 60", desc: "Tender veal chops with herbs & garlic" },
      { name: "Veal Chops (4 pcs)", nameAr: "ضلوع عجل", price: "AED 110", desc: "Tender veal chops with herbs & garlic" },
      { name: "Mixed Chops Platter", nameAr: "طبق مشكل ضلوع", price: "AED 120", desc: "Lamb & veal chops with grilled bread & salad", tag: "Chef's Pick" },
    ],
  },
  {
    id: "awsal",
    label: "Awsal",
    emoji: "🍖",
    items: [
      { name: "Lamb Awsal", nameAr: "أوصال لحم", price: "AED 65", desc: "Slow-cooked tender lamb pieces on the bone" },
      { name: "Veal Awsal", nameAr: "أوصال عجل", price: "AED 70", desc: "Slow-cooked veal pieces with aromatic spices" },
      { name: "Awsal Platter", nameAr: "طبق أوصال", price: "AED 125", desc: "Mixed lamb & veal awsal with rice & salad", tag: "For 2" },
    ],
  },
  {
    id: "grilled-boneless",
    label: "Grilled Boneless",
    emoji: "🍢",
    items: [
      { name: "Chicken Tikka (2 skewers)", nameAr: "تكا دجاج", price: "AED 35", desc: "Yoghurt-marinated chicken, flame-grilled" },
      { name: "Shish Tawook (2 skewers)", nameAr: "شيش طاووق", price: "AED 35", desc: "Garlic & lemon marinated chicken skewers" },
      { name: "Beef Tikka (2 skewers)", nameAr: "تكا لحم", price: "AED 40", desc: "Spiced boneless beef cubes, charcoal grilled" },
      { name: "Mixed Boneless (2 skewers)", nameAr: "مشكل بلا عظم", price: "AED 45", desc: "Chicken & beef tikka combo", tag: "Min 2 Skewers" },
    ],
  },
  {
    id: "grilled-bone",
    label: "Grilled with Bone",
    emoji: "🔥",
    items: [
      { name: "Chicken on Bone (2 skewers)", nameAr: "دجاج على العظم", price: "AED 38", desc: "Whole chicken pieces marinated & grilled on coal" },
      { name: "Quail (2 skewers)", nameAr: "سمان", price: "AED 42", desc: "Whole quail, spiced & flame-grilled", tag: "Min 2 Skewers" },
      { name: "Mixed Bone Grill (2 skewers)", nameAr: "مشكل على العظم", price: "AED 48", desc: "Chicken & quail combo skewers" },
    ],
  },
  {
    id: "kabab",
    label: "Kabab",
    emoji: "🍡",
    items: [
      { name: "Seekh Kabab (2 skewers)", nameAr: "سيخ كباب", price: "AED 32", desc: "Minced beef & lamb with herbs, grilled on coal", tag: "Bestseller" },
      { name: "Chicken Kabab (2 skewers)", nameAr: "كباب دجاج", price: "AED 30", desc: "Minced chicken with spices & herbs" },
      { name: "Adana Kabab (2 skewers)", nameAr: "كباب عدنة", price: "AED 35", desc: "Spicy minced lamb with red chilli & herbs" },
      { name: "Mixed Kabab (2 skewers)", nameAr: "كباب مشكل", price: "AED 40", desc: "Seekh + chicken kabab combo", tag: "Min 2 Skewers" },
    ],
  },
  {
    id: "broasted",
    label: "Broasted",
    emoji: "🍗",
    items: [
      { name: "Quarter Broasted", nameAr: "ربع دجاج مقلي", price: "AED 28", desc: "Crispy broasted chicken quarter with fries & sauce" },
      { name: "Half Broasted", nameAr: "نصف دجاج مقلي", price: "AED 45", desc: "Half broasted chicken with fries & coleslaw" },
      { name: "Full Broasted", nameAr: "دجاج مقلي كامل", price: "AED 79", desc: "Full broasted chicken with fries, coleslaw & bread", tag: "For 2" },
      { name: "Broasted Strips", nameAr: "أصابع دجاج", price: "AED 32", desc: "Crispy chicken strips with dipping sauce" },
    ],
  },
  {
    id: "mixed-grill",
    label: "Mixed Grill",
    emoji: "🪔",
    items: [
      { name: "Mixed Grill for 1", nameAr: "مشكل مشاوي للفرد", price: "AED 75", desc: "Seekh kabab, chicken tikka, shish tawook & lamb chop" },
      { name: "Mixed Grill for 2", nameAr: "مشكل مشاوي لشخصين", price: "AED 135", desc: "Full spread — kabab, tikka, chops, awsal & grilled bread", tag: "Chef's Pick" },
      { name: "Mixed Grill for 4", nameAr: "مشكل مشاوي للعائلة", price: "AED 249", desc: "Family platter with all grills, rice & salads", tag: "Family" },
      { name: "Royal Mixed Grill", nameAr: "المشكل الملكي", price: "AED 199", desc: "Premium cuts — lamb chops, veal awsal, kabab & tikka", tag: "Premium" },
    ],
  },
  {
    id: "rice",
    label: "Rice",
    emoji: "🍚",
    items: [
      { name: "Saffron Rice", nameAr: "أرز زعفران", price: "AED 18", desc: "Fragrant basmati cooked in saffron broth" },
      { name: "Kabsa Rice", nameAr: "كبسة", price: "AED 22", desc: "Spiced rice with dried fruits & nuts" },
      { name: "Mandi Rice", nameAr: "مندي", price: "AED 22", desc: "Slow-cooked smoky rice with whole spices" },
      { name: "Plain Rice", nameAr: "أرز سادة", price: "AED 12", desc: "Steamed basmati rice" },
      { name: "Chicken Mandi (Full)", nameAr: "مندي دجاج كامل", price: "AED 89", desc: "Whole chicken over mandi rice, served with salad", tag: "For 2-3" },
      { name: "Lamb Mandi", nameAr: "مندي لحم", price: "AED 110", desc: "Tender lamb leg over mandi rice", tag: "For 2-3" },
    ],
  },
  {
    id: "mojitos",
    label: "Mojitos",
    emoji: "🍹",
    items: [
      { name: "Classic Mojito", nameAr: "موهيتو كلاسيك", price: "AED 18", desc: "Fresh mint, lime, soda & crushed ice" },
      { name: "Strawberry Mojito", nameAr: "موهيتو فراولة", price: "AED 20", desc: "Fresh strawberries, mint & lime soda" },
      { name: "Mango Mojito", nameAr: "موهيتو مانجو", price: "AED 20", desc: "Tropical mango with mint & lime" },
      { name: "Passion Fruit Mojito", nameAr: "موهيتو فاكهة العاطفة", price: "AED 22", desc: "Tangy passion fruit with fresh mint" },
      { name: "Blueberry Mojito", nameAr: "موهيتو توت", price: "AED 22", desc: "Fresh blueberries, mint & sparkling water" },
      { name: "Virgin Watermelon Mojito", nameAr: "موهيتو بطيخ", price: "AED 20", desc: "Refreshing watermelon with mint & lime", tag: "Summer Special" },
    ],
  },
  {
    id: "kulukki",
    label: "Kulukki",
    emoji: "🧋",
    items: [
      { name: "Classic Kulukki Sarbath", nameAr: "كولوكي سربات", price: "AED 18", desc: "Shaken lemon drink with basil seeds & ice" },
      { name: "Mango Kulukki", nameAr: "كولوكي مانجو", price: "AED 20", desc: "Mango base shaken with basil seeds" },
      { name: "Strawberry Kulukki", nameAr: "كولوكي فراولة", price: "AED 20", desc: "Fresh strawberry shaken drink" },
      { name: "Rose Kulukki", nameAr: "كولوكي ورد", price: "AED 18", desc: "Rose syrup with basil seeds & lemon", tag: "Fan Favourite" },
    ],
  },
  {
    id: "smoothies",
    label: "Smoothies / Juice",
    emoji: "🥤",
    items: [
      { name: "Mango Smoothie", nameAr: "سموذي مانجو", price: "AED 22", desc: "Fresh mango blended with milk & honey" },
      { name: "Strawberry Banana", nameAr: "فراولة موز", price: "AED 22", desc: "Fresh strawberry & banana blend" },
      { name: "Avocado Smoothie", nameAr: "سموذي أفوكادو", price: "AED 25", desc: "Creamy avocado with milk & honey" },
      { name: "Fresh Orange Juice", nameAr: "عصير برتقال طازج", price: "AED 18", desc: "Hand-squeezed fresh oranges" },
      { name: "Watermelon Juice", nameAr: "عصير بطيخ", price: "AED 16", desc: "Fresh watermelon, cold pressed" },
      { name: "Mixed Fruit Juice", nameAr: "عصير فواكه مشكل", price: "AED 20", desc: "Seasonal fresh fruit blend" },
      { name: "Pineapple Juice", nameAr: "عصير أناناس", price: "AED 18", desc: "Fresh cold-pressed pineapple" },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    emoji: "☕",
    items: [
      { name: "Karak Chai", nameAr: "شاي كرك", price: "AED 12", desc: "Spiced milk tea with cardamom & saffron", tag: "Must Try" },
      { name: "Mint Lemonade", nameAr: "ليمون بالنعناع", price: "AED 14", desc: "Hand-squeezed lemon with fresh mint" },
      { name: "Jallab", nameAr: "جلاب", price: "AED 16", desc: "Rose water, grape juice & pine nuts over ice" },
      { name: "Soft Drinks", nameAr: "مشروبات غازية", price: "AED 8", desc: "Pepsi, 7UP, Mirinda, Mountain Dew" },
      { name: "Water (Small)", nameAr: "ماء صغير", price: "AED 4", desc: "500ml mineral water" },
      { name: "Water (Large)", nameAr: "ماء كبير", price: "AED 6", desc: "1.5L mineral water" },
      { name: "Arabic Coffee", nameAr: "قهوة عربية", price: "AED 14", desc: "Traditional cardamom coffee with dates" },
      { name: "Turkish Coffee", nameAr: "قهوة تركية", price: "AED 12", desc: "Strong & aromatic Turkish brew" },
    ],
  },
];

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("appetizer");
  const activeCategory = FULL_MENU.find(c => c.id === activeTab)!;

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cairo:wght@400;700&family=Lora:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #0a0a0a; overflow-x: hidden; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #C0392B; border-radius: 3px; }
        .tab-scroll::-webkit-scrollbar { height: 3px; }
        .tab-scroll::-webkit-scrollbar-thumb { background: #C0392B; }
      `}</style>

      {/* Header */}
      <header style={{
        background: "rgba(10,10,10,0.97)", borderBottom: "1px solid rgba(192,57,43,0.3)",
        padding: "0 5vw", height: 70,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        position: "sticky", top: 0, zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img src="/kaka_grill_logo_transparent.png" alt="logo" style={{ width: 52, height: 52, objectFit: "contain" }} />
          <div>
            <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 22, color: "#fff", letterSpacing: 3 }}>KAKA GRILL</div>
            <div style={{ fontFamily: "'Cairo', sans-serif", fontSize: 11, color: "#C0392B" }}>القائمة الكاملة</div>
          </div>
        </div>
        <a href="/" style={{
          fontFamily: "'Bebas Neue', cursive", fontSize: 15, letterSpacing: 2,
          color: "#fff", textDecoration: "none",
          border: "1px solid rgba(255,255,255,0.2)", padding: "8px 20px",
          transition: "all 0.3s",
        }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#C0392B"; (e.currentTarget as HTMLElement).style.color = "#C0392B"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}>
          ← Back to Home
        </a>
      </header>

      {/* Page title */}
      <div style={{ textAlign: "center", padding: "60px 5vw 40px", background: "#0a0a0a" }}>
        <div style={{ fontFamily: "'Cairo', sans-serif", fontSize: 13, color: "#C0392B", letterSpacing: 6, textTransform: "uppercase", marginBottom: 12 }}>
          Explore Everything
        </div>
        <h1 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(48px,8vw,96px)", color: "#fff", letterSpacing: 4, lineHeight: 1 }}>
          FULL MENU
        </h1>
        <div style={{ width: 80, height: 3, background: "#C0392B", margin: "16px auto 0" }} />
      </div>

      {/* Category tabs — horizontal scroll */}
      <div className="tab-scroll" style={{
        display: "flex", gap: 8, overflowX: "auto",
        padding: "0 5vw 20px", scrollbarWidth: "thin",
      }}>
        {FULL_MENU.map(cat => (
          <button key={cat.id} onClick={() => setActiveTab(cat.id)} style={{
            fontFamily: "'Bebas Neue', cursive", fontSize: 14, letterSpacing: 2,
            padding: "10px 20px", whiteSpace: "nowrap",
            background: activeTab === cat.id ? "#C0392B" : "transparent",
            color: activeTab === cat.id ? "#fff" : "rgba(255,255,255,0.5)",
            border: `1px solid ${activeTab === cat.id ? "#C0392B" : "rgba(255,255,255,0.15)"}`,
            cursor: "pointer", transition: "all 0.3s", flexShrink: 0,
            clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
          }}>
            {cat.emoji} {cat.label}
          </button>
        ))}
      </div>

      {/* Items */}
      <div style={{ padding: "0 5vw 80px", maxWidth: 1300, margin: "0 auto" }}>
        {/* Category heading */}
        <div style={{ marginBottom: 32, borderLeft: "4px solid #C0392B", paddingLeft: 20 }}>
          <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 40, color: "#fff", letterSpacing: 3 }}>
            {activeCategory.emoji} {activeCategory.label}
          </h2>
          <p style={{ fontFamily: "'Cairo', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 4 }}>
            {activeCategory.items.length} items available
          </p>
        </div>

        {/* Items grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 20,
        }}>
          {activeCategory.items.map((item, i) => (
            <div key={i} style={{
              background: "linear-gradient(135deg, #161616 0%, #111 100%)",
              border: "1px solid rgba(192,57,43,0.2)",
              padding: "24px 20px",
              position: "relative", overflow: "hidden",
              transition: "all 0.3s",
              cursor: "default",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(192,57,43,0.6)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 32px rgba(192,57,43,0.12)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(192,57,43,0.2)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}>

              {/* Glow */}
              <div style={{ position: "absolute", top: 0, right: 0, width: 80, height: 80, background: "radial-gradient(circle at top right, rgba(192,57,43,0.12), transparent)" }} />

              {item.tag && (
                <span style={{
                  fontFamily: "'Bebas Neue', cursive", fontSize: 11, letterSpacing: 2,
                  background: "#C0392B", color: "#fff", padding: "3px 10px",
                  position: "absolute", top: 14, right: 14,
                }}>{item.tag}</span>
              )}

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                <div style={{ flex: 1, paddingRight: 60 }}>
                  <h3 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 20, color: "#fff", letterSpacing: 1 }}>{item.name}</h3>
                  {item.nameAr && <div style={{ fontFamily: "'Cairo', sans-serif", fontSize: 12, color: "#C0392B", marginTop: 2 }}>{item.nameAr}</div>}
                </div>
              </div>

              {item.desc && (
                <p style={{ fontFamily: "'Lora', serif", fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, marginBottom: 16 }}>
                  {item.desc}
                </p>
              )}

              <div style={{
                fontFamily: "'Bebas Neue', cursive", fontSize: 22, color: "#C0392B",
                borderTop: "1px solid rgba(192,57,43,0.2)", paddingTop: 12, marginTop: "auto",
              }}>{item.price}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer bar */}
      <div style={{
        background: "#080808", borderTop: "1px solid rgba(192,57,43,0.2)",
        padding: "24px 5vw", textAlign: "center",
        fontFamily: "'Bebas Neue', cursive", fontSize: 13, letterSpacing: 2, color: "rgba(255,255,255,0.3)",
      }}>
        © 2025 KAKA GRILL — ALL RIGHTS RESERVED 🔥 HALAL CERTIFIED
      </div>
    </>
  );
}
