import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <main className="main">
        <h1 className="product-title">Phone model</h1>
        <div className="product-page">
          <ImageSlider />
          <ProductDetails />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
