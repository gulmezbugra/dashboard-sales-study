import { useParams, useNavigate } from "react-router-dom";
import { PRODUCTS } from "../constants.js";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = PRODUCTS.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <main className="main">
        <p>Ürün bulunamadı.</p>
        <button onClick={() => navigate("/products")}>Geri Dön</button>
      </main>
    );
  }

  return (
    <main className="main">

      <button className="detail__back" onClick={() => navigate("/products")}>
        ← Ürünlere Dön
      </button>

      <div className="detail__card">

        <div className="detail__img-wrap">
          <div style={{ fontSize: 120 }}>{product.emoji}</div>
        </div>

        <div className="detail__info">
          <span className="detail__category">{product.category}</span>
          <h1 className="detail__name">{product.name}</h1>
          <p className="detail__desc">{product.description}</p>

          <div className="detail__meta">
            <div className="detail__meta-item">
              <span className="detail__meta-label">Fiyat</span>
              <span className="detail__meta-value">${product.price}</span>
            </div>
            <div className="detail__meta-item">
              <span className="detail__meta-label">Stok</span>
              <span className="detail__meta-value">{product.stock} adet</span>
            </div>
            <div className="detail__meta-item">
              <span className="detail__meta-label">Puan</span>
              <span className="detail__meta-value">{"⭐".repeat(product.rating)}</span>
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
            <button className="detail__btn-primary">Satın Al</button>
            <button className="detail__btn-secondary">Düzenle</button>
          </div>
        </div>
      </div>
    </main>
  );
}
