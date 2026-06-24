import "../styles/ProductCard.css";
interface ProductCardProp {
  img: string;
  title: string;
  price: string;
}

export function ProductCard({ img, title, price }: ProductCardProp) {
  return (
    <div className="product-card">
      <img src={img} alt={title} className="product-img" />
      <h3 className="product-name">{title}</h3>
      <p className="product-price">{price} rwf</p>
    </div>
  );
}
