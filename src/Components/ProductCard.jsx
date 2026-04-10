import { useState } from "react";

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

  return (
    <div className="product-card">
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
          <button
            className={`product-card__like ${liked ? "product-card__like--active" : ""}`}
            onClick={() => setLiked(!liked)}
          >
            <svg width={16} height={16} viewBox="0 0 24 24"
              fill={liked ? "#ef4444" : "none"}
              stroke={liked ? "#ef4444" : "#9ca3af"}
              strokeWidth="1.8">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </button>
        </div>

        <p className="product-card__price">${price}</p>
        <StarRating rating={rating} />

        <button className="product-card__btn">Edit Product</button>
      </div>
    </div>
  );
}

export default ProductCard;