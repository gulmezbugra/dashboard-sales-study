# DashStack Dashboard

## 📋 Proje Hakkında
DashStack, React ile geliştirilmiş modern bir admin dashboard uygulamasıdır. Ürün yönetimi, satış takibi ve sipariş listesi gibi temel yönetim özelliklerini içerir. React Router ile sayfalar arası geçiş ve data aktarımı desteklenmektedir.

---

## 🚀 Kurulum

### Gereksinimler
- Node.js (v18+)
- npm

### Adımlar
```bash
# Repoyu klonla
git clone https://github.com/kullaniciadi/dashstack.git

# Klasöre gir
cd dashstack

# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

---

## 📁 Proje Yapısı

```
src/
├── App.jsx                  # Root component, sayfa yönlendirmesi
├── App.css                  # Global stiller (BEM metodolojisi)
├── constants.js             # Sabit veriler, ikonlar, ürün listesi
├── styles.js                # Components içindeki stiller
└── assets/
    ├── unitedkingdom.jpg       # Birleşik Krallık bayrağı
└── Pages/
    ├── Dashboard.jsx        # Dashboard sayfası
    ├── Products.jsx         # Ürünler listesi sayfası
└── Components/
    ├── Icon.jsx             # SVG icon wrapper
    ├── Sidebar.jsx          # Sol navigasyon menüsü
    ├── Topbar.jsx           # Üst bar (arama, profil, bayrak)
    ├── StatCard.jsx         # İstatistik kartları
    ├── SalesChart.jsx       # Satış grafiği (Chart.js)
    ├── Card.jsx             # Yeniden kullanılabilir kart
    ├── DealsTable.jsx       # Sipariş tablosu
    ├── Badge.jsx            # Durum rozeti
    ├── ProductsBanner.jsx   # Promosyon banner
    ├── ProductCard.jsx      # Ürün kartı
    └── ProductDetail.jsx    # Ürün detay sayfası
```

---

## 🖥️ Sayfalar & Routing

| Route | Bileşen | Açıklama |
|-------|---------|----------|
| `/` | → `/dashboard` | Anasayfaya yönlendirir |
| `/dashboard` | `Dashboard` | İstatistikler, grafik, sipariş tablosu |
| `/products` | `Products` | Ürün listesi ve banner |
| `/products/:id` | `ProductDetail` | Ürün detay sayfası |

### Sayfalar Arası Data Aktarımı
```
ProductCard tıkla  →  navigate("/products/3")
                             ↓
                      URL: /products/3
                             ↓
                   useParams() → { id: "3" }
                             ↓
             PRODUCTS.find(p => p.id === 3)
                             ↓
                    Ürün detayı gösterilir ✅
```

---

## 🛠️ Kullanılan Teknolojiler

| Teknoloji | Versiyon | Amaç |
|-----------|----------|------|
| React | 18+ | UI framework |
| React Router DOM | 6+ | Sayfa yönlendirme |
| Chart.js | 4+ | Satış grafiği |
| react-chartjs-2 | — | Chart.js React wrapper |
| Vite | — | Build tool |
| CSS (BEM) | — | Stillendirme |

---

## 🎨 Tasarım Sistemi

Tüm stiller `App.css` içinde **BEM metodolojisi** ile yazılmıştır.

```css
/* Blok */
.stat-card { }

/* Element */
.stat-card__label { }
.stat-card__value { }

/* Modifier */
.nav-item--active { }
.badge--delivered { }
.badge--pending { }
.badge--cancelled { }
```

---

## 📦 Yeni Sayfa Ekleme

`App.jsx` içine yeni route ekle:

```jsx
import Favorites from "./components/Favorites";

<Routes>
  <Route path="/dashboard"     element={<Dashboard />} />
  <Route path="/products"      element={<Products />} />
  <Route path="/products/:id"  element={<ProductDetail />} />
  <Route path="/favorites"     element={<Favorites />} />  {/* yeni */}
</Routes>
```

---

## 🌿 Git Kullanımı

```bash
# Değişiklikleri ekle
git add .

# Commit at
git commit -m "feat: yeni özellik eklendi"

# Push et
git push

# Yeni branch oluştur
git checkout -b feat/yeni-ozellik
```

### Commit Mesajı Kuralları
| Prefix | Kullanım |
|--------|----------|
| `feat:` | Yeni özellik |
| `fix:` | Hata düzeltme |
| `style:` | Sadece görsel değişiklik |
| `refactor:` | Kod yapısı değişikliği |
| `docs:` | Dokümantasyon güncellemesi |

---

