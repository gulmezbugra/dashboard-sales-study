export const icons = {
  dashboard: "M3 3h7v7H3zm11 0h7v7h-7zM3 14h7v7H3zm11 0h7v7h-7z",
  products:  "M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16",
  favorites: "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z",
  inbox:     "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm18 2l-10 7L2 6",
  orders:    "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 3h6v4H9z",
  stock:     "M1 3h15v13H1zM16 8h4l3 3v5h-7zM5.5 21a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM18.5 21a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
  settings:  "M12 15a3 3 0 100-6 3 3 0 000 6zm0 0v6m0-18v3M4.22 4.22l2.12 2.12m11.32 11.32l2.12 2.12M2 12h3m14 0h3M4.22 19.78l2.12-2.12m11.32-11.32l2.12-2.12",
  logout:    "M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4m7 14l5-5-5-5m5 5H9",
  bell:      "M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0",
  search:    "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  chevron:   "M6 9l6 6 6-6",
  trendUp:   "M23 6l-9.5 9.5-5-5L1 18M17 6h6v6",
  trendDown: "M23 18l-9.5-9.5-5 5L1 6M17 18h6v-6",
};

export const nav_main = [
  { label: "Dashboard",     icon: icons.dashboard },
  { label: "Products",      icon: icons.products },
  { label: "Favorites",     icon: icons.favorites },
  { label: "Inbox",         icon: icons.inbox },
  { label: "Order Lists",   icon: icons.orders },
  { label: "Product Stock", icon: icons.stock },
];

export const nav_pages = [
  "Pricing", "Calendar", "To-Do", "Contact",
  "Invoice", "UI Elements", "Team", "Table",
];

export const STAT_CARDS = [
  {
    label: "Total User",
    value: "40,689",
    change: "8.5% Up from yesterday",
    direction: "up",
    iconBg: "#ede9fe",
    iconColor: "#7c3aed",
    iconPath: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zm14 10v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
  },
  {
    label: "Total Order",
    value: "10,293",
    change: "1.3% Up from past week",
    direction: "up",
    iconBg: "#fef3c7",
    iconColor: "#d97706",
    iconPath: "M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0",
  },
  {
    label: "Total Sales",
    value: "$89,000",
    change: "4.3% Down from yesterday",
    direction: "down",
    iconBg: "#d1fae5",
    iconColor: "#059669",
    iconPath: "M23 6l-9.5 9.5-5-5L1 18M17 6h6v6",
  },
  {
    label: "Total Pending",
    value: "2,040",
    change: "1.8% Up from yesterday",
    direction: "up",
    iconBg: "#fee2e2",
    iconColor: "#ef4444",
    iconPath: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-14v4l3 3",
  },
];

export const DEALS = [
  { name: "Apple Watch", emoji: "⌚", location: "6096 Marjolaine Landing", datetime: "12.09.2026 – 12:53 PM", piece: 423, amount: "$34,295", status: "Delivered" }
];

export const SALES_DATA = [22, 31, 27, 64, 34, 42, 39, 95, 47, 68, 58, 72, 63, 55, 61, 57, 65, 60, 58, 64, 62, 67, 63, 70];

export const PRODUCTS = [
  {
    id: 1,
    name: "Apple Watch Series 4",
    price: 120.00,
    rating: 4,
    emoji:"⌚",
    category : "Wearable",
    stock: 43,
    description:"Apple Watch Series 4 (44 mm) Gümüş Rengi Alüminyum Kasa ve Beyaz Spor Kordon Akıllı Saat"
  },
  {
    id: 2,
    name: "MacBook Pro 14\"",
    price: 1329.99,
    rating: 5,
    emoji: "💻",
    category: "Laptop",
    stock: 12,
    description: "Apple MacBook Pro M4 16GB 512GB SSD macOS 14 inç Taşınabilir Bilgisayar Uzay Siyahı MW2U3TUA",
  },
  {
    id: 3,
    name: "iPhone 15",
    price: 629.99,
    rating: 5,
    emoji: "📱",
    category: "Phone",
    stock: 78,
    description: "iPhone 15 Pro, titanium kasası ve Pro kamera sistemiyle fotoğrafçılığı yeniden tanımlar.",
  },
];
