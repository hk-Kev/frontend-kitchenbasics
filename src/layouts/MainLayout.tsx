import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function MainLayout() {
  return (
    <div>
      <Navbar />

      <main>
        {/* Outlet is where the child route pages will appear */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
