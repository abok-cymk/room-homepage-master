import About from "./components/About";
import HomepageCarousel from "./components/HomepageCarousel";

export default function App () {
  return (
    <>
      <header className="relative">
        <HomepageCarousel />
      </header>
      <main><About /></main>
      
    </>
  );
}


