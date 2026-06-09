import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Pitch } from './components/Pitch';
import { Features } from './components/Features';
import { ProductShowcase } from './components/ProductShowcase';
import { TechSpecs } from './components/TechSpecs';
import { Preorder } from './components/Preorder';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { useFavicon } from './hooks/useFavicon';
import faviconIcon from '../imports/icon.png';

export default function App() {
  useFavicon(faviconIcon);

  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Pitch />
        <Preorder />
        <Features />
        <ProductShowcase />
        <TechSpecs />
        <Newsletter />
        <Footer />
      </div>
    </LanguageProvider>
  );
}