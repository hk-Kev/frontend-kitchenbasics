import "../styles/ProductGrid.css";
import { ProductCard } from "./ProductCard";
import blenderImg from "../assets/images/blender.png";
import platesImg from "../assets/images/plates.png";
import skilletImg from "../assets/images/skillet.png";

export default function ProductGrid() {
  return (
    <div className="product-grid">
      <ProductCard
        img={skilletImg}
        title="Signature Cast Iron Skillet"
        price="145,000"
      />
      <ProductCard
        img={platesImg}
        title="Hand-Glazed Ceramic Plate Set"
        price="85,000"
      />
      <ProductCard
        img={blenderImg}
        title="Precision Power Blender"
        price="290,000"
      />
    </div>
  );
}
