import "./App.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto pt-20 px-6">
        <HeroSection />
      </div>
    </>
  );
}

export default App;
