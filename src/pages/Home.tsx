import Hero from "../components/Hero";
import CategoryFilter from "../components/CategoryFilter";
import ProductGrid from "../components/ProductGrid";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <Hero />
      <CategoryFilter />
      <ProductGrid />
    </div>
  );
}
