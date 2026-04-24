import { useState } from "react";
import {useNavigate} from "react-router-dom";

function StarRating({ rating }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} width={14} height={14} viewBox="0 0 24 24"
          fill={star <= rating ? "#FF9500" : "#e5e7eb"} stroke="none">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
      <span style={{ fontSize: 12, color: "#9ca3af", marginLeft: 4 }}>(131)</span>
    </div>
  );
}

function ProductCard({ name, price, image, rating = 4 }) {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="product-card" onClick={() => navigate(`../Pages/Products.jsx/${id}`)} style={{ cursor: "pointer" }}>
      <div className="product-card__img-wrap">
        <button className="product-card__arrow product-card__arrow--left">&#8249;</button>
        <div className="product-card__img">
          {image
            ? <img src={image} alt={name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            : <div style={{ fontSize: 64 }}>⌚</div>
          }
        </div>
        <button className="product-card__arrow product-card__arrow--right">&#8250;</button>
      </div>

      <div className="product-card__body">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <p className="product-card__name">{name}</p>
        </div>
        <p className="product-card__price">${price}</p>
        <StarRating rating={rating} />
        <button className="product-card__btn"
          onClick={(e) => { e.stopPropagation(); }}>
          Edit Product
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
