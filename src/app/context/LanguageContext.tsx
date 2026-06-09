import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navbar
    'nav.preorder': 'Preorder',
    'nav.features': 'Features',
    'nav.product': 'Product',
    'nav.specs': 'Specs',
    'nav.newsletter': 'Newsletter',

    // Hero
    'hero.badge': 'Now Available for Preorder',
    'hero.title': 'Babywatch',
    'hero.subtitle': 'The Next Generation Baby Monitor',
    'hero.description': 'Battery-powered, BLE-connected, and intelligent. No WiFi required, no dedicated monitor needed.',
    'hero.cta': 'Preorder Now',
    'hero.development': 'Product currently in development',

    // Features
    'features.title': 'Why Choose Babywatch?',
    'features.subtitle': 'Experience the future of baby monitoring with cutting-edge technology designed for modern parents.',
    'features.battery.title': 'Battery Driven',
    'features.battery.description': 'Long-lasting battery power means true portability without being tethered to outlets.',
    'features.movement.title': 'Intelligent Movement Detection',
    'features.movement.description': 'Advanced algorithms detect and alert you to your baby\'s movements in real-time.',
    'features.monitor.title': 'No Dedicated Monitor Needed',
    'features.monitor.description': 'Works with any smartphone that has BLE support. Use the device you already have.',
    'features.wifi.title': 'No WiFi Required',
    'features.wifi.description': 'Direct BLE connection means no internet dependency and enhanced privacy.',
    'features.range.title': 'Up to 250m Range',
    'features.range.description': 'Direct link with an impressive range of up to 250 meters gives you freedom to move.',

    // Product Showcase
    'product.title': 'Magnetic. Simple. Secure.',
    'product.subtitle': 'Designed to seamlessly attach to your baby\'s stroller or crib with our innovative magnetic mounting system.',
    'product.alt': 'Babywatch baby monitor with magnetic mounting system shown on a stroller, displaying live feed on smartphone',
    'product.inner': 'Inner Magnetic Backing',
    'product.inner.description': 'Twist to lock mechanism ensures a secure fit',
    'product.outer': 'Outer Magnetic Camera Mount',
    'product.outer.description': 'Quick-release design for easy positioning',
    'product.magnets': 'Strong Magnets',
    'product.magnets.description': 'Securely clamp through fabric for stability',

    // Tech Specs
    'specs.title': 'Technical Specifications',
    'specs.connection': 'Connection',
    'specs.connection.value': 'Bluetooth Low Energy (BLE)',
    'specs.connection.explanation': 'BLE provides a secure, direct connection between the camera and your phone without relying on internet or home networks. This means better privacy, lower power consumption, and reliable streaming even in areas with poor WiFi coverage.',
    'specs.range': 'Range',
    'specs.range.value': 'Up to 250 meters',
    'specs.range.explanation': 'With an impressive 250-meter range, you can move freely around your home, garden, or outdoor space while staying connected. Whether you\'re cooking in the kitchen or relaxing in the backyard, your baby stays within reach.',
    'specs.power': 'Power Source',
    'specs.power.value': 'Battery powered',
    'specs.power.explanation': 'Battery power means true portability — no need to stay near power outlets. Use Babywatch anywhere: in the park, at grandma\'s house, or during travel. The rechargeable battery lasts for hours of continuous monitoring.',
    'specs.compatibility': 'Compatibility',
    'specs.compatibility.value': 'Any smartphone with BLE support',
    'specs.compatibility.explanation': 'No need to buy a dedicated monitor. Babywatch works with virtually any modern smartphone (iOS or Android) that has Bluetooth support. Use the device you already carry everywhere, and share access with multiple family members.',
    'specs.mounting': 'Mounting',
    'specs.mounting.value': 'Magnetic twist-to-lock system',
    'specs.mounting.explanation': 'The innovative magnetic mounting system securely attaches to strollers, cribs, or any fabric surface. The twist-to-lock mechanism ensures the camera stays in place, while the quick-release design lets you reposition it instantly.',
    'specs.detection': 'Detection',
    'specs.detection.value': 'Intelligent movement sensing',
    'specs.detection.explanation': 'Advanced algorithms detect when your baby moves or wakes up, sending instant alerts to your phone. This smart detection helps you respond quickly while filtering out false alarms from minor movements.',
    'specs.internet': 'Internet',
    'specs.internet.value': 'No WiFi required',
    'specs.internet.explanation': 'Unlike traditional baby monitors that depend on WiFi, Babywatch uses direct BLE connection. This means no network setup, no router configuration, and no concerns about internet outages. Your baby monitor works anywhere, anytime.',

    // Preorder
    'preorder.title': 'Be the First to Experience Babywatch',
    'preorder.subtitle': 'Preorder now and secure your spot. Limited quantities available for early adopters.',
    'preorder.discount': 'Early Bird Discount',
    'preorder.delivery': 'Expected Delivery',
    'preorder.price': 'Preorder Price',
    'preorder.email.placeholder': 'Enter your email',
    'preorder.button': 'Preorder',
    'preorder.success': 'Thank you! We\'ll contact you soon with preorder details.',
    'preorder.disclaimer': 'Product currently in development. Specifications and delivery dates subject to change.',

    // Newsletter
    'newsletter.title': 'Stay Updated',
    'newsletter.subtitle': 'Subscribe to our newsletter for the latest updates on Babywatch development, launch dates, and exclusive offers.',
    'newsletter.email.placeholder': 'Your email address',
    'newsletter.button': 'Subscribe',
    'newsletter.success': 'Thank you for subscribing! Check your inbox for confirmation.',

    // Footer
    'footer.tagline': 'The next generation of baby monitoring technology. Simple, secure, and always connected.',
    'footer.company': 'Company',
    'footer.contact': 'Contact',
    'footer.copyright': '2026 Rehka Solution GmbH. All rights reserved.',

    // Pitch
    'pitch.intro': 'Babywatch is the tiny baby camera that goes wherever your baby goes.',
    'pitch.description': 'Magnetically mount it to a stroller, crib, or travel cot and stream video directly to your smartphone — no separate monitor, no shared Wi-Fi, no complicated setup. With a direct BLE connection, babywatch keeps things simple, private, and portable.',
    'pitch.usage': 'Whether you\'re at home, visiting family, or out for a walk, babywatch helps you keep an eye on your little one from the device already in your pocket.',
    'pitch.tagline': 'Babywatch — peace of mind, always within reach.',
  },
  de: {
    // Navbar
    'nav.preorder': 'Vorbestellen',
    'nav.features': 'Funktionen',
    'nav.product': 'Produkt',
    'nav.specs': 'Spezifikationen',
    'nav.newsletter': 'Newsletter',

    // Hero
    'hero.badge': 'Jetzt zur Vorbestellung verfügbar',
    'hero.title': 'Babywatch',
    'hero.subtitle': 'Das Babyphone der nächsten Generation',
    'hero.description': 'Batteriebetrieben, BLE-verbunden und intelligent. Kein WLAN erforderlich, kein separater Monitor benötigt.',
    'hero.cta': 'Jetzt vorbestellen',
    'hero.development': 'Produkt befindet sich derzeit in der Entwicklung',

    // Features
    'features.title': 'Warum Babywatch wählen?',
    'features.subtitle': 'Erleben Sie die Zukunft der Babyüberwachung mit modernster Technologie für moderne Eltern.',
    'features.battery.title': 'Batteriebetrieben',
    'features.battery.description': 'Langlebige Batterieleistung bedeutet echte Portabilität ohne Steckdosenzwang.',
    'features.movement.title': 'Intelligente Bewegungserkennung',
    'features.movement.description': 'Fortschrittliche Algorithmen erkennen und melden die Bewegungen Ihres Babys in Echtzeit.',
    'features.monitor.title': 'Kein separater Monitor erforderlich',
    'features.monitor.description': 'Funktioniert mit jedem Smartphone mit BLE-Unterstützung. Verwenden Sie das Gerät, das Sie bereits haben.',
    'features.wifi.title': 'Kein WLAN erforderlich',
    'features.wifi.description': 'Direkte BLE-Verbindung bedeutet keine Internetabhängigkeit und erhöhte Privatsphäre.',
    'features.range.title': 'Bis zu 250m Reichweite',
    'features.range.description': 'Direkte Verbindung mit einer beeindruckenden Reichweite von bis zu 250 Metern gibt Ihnen Bewegungsfreiheit.',

    // Product Showcase
    'product.title': 'Magnetisch. Einfach. Sicher.',
    'product.subtitle': 'Entwickelt, um nahtlos am Kinderwagen oder Kinderbett Ihres Babys mit unserem innovativen magnetischen Befestigungssystem zu befestigen.',
    'product.alt': 'Babywatch Babyphone mit magnetischem Befestigungssystem am Kinderwagen, zeigt Live-Übertragung auf Smartphone',
    'product.inner': 'Innere magnetische Rückseite',
    'product.inner.description': 'Dreh-Verriegelungsmechanismus gewährleistet sicheren Halt',
    'product.outer': 'Äußere magnetische Kamerahalterung',
    'product.outer.description': 'Schnellverschluss-Design für einfache Positionierung',
    'product.magnets': 'Starke Magnete',
    'product.magnets.description': 'Sicheres Klemmen durch Stoff für Stabilität',

    // Tech Specs
    'specs.title': 'Technische Spezifikationen',
    'specs.connection': 'Verbindung',
    'specs.connection.value': 'Bluetooth Low Energy (BLE)',
    'specs.connection.explanation': 'BLE bietet eine sichere, direkte Verbindung zwischen Kamera und Smartphone ohne Abhängigkeit von Internet oder Heimnetzwerken. Das bedeutet besseren Datenschutz, geringeren Stromverbrauch und zuverlässiges Streaming auch in Bereichen mit schlechter WLAN-Abdeckung.',
    'specs.range': 'Reichweite',
    'specs.range.value': 'Bis zu 250 Meter',
    'specs.range.explanation': 'Mit einer beeindruckenden Reichweite von 250 Metern können Sie sich frei in Ihrem Zuhause, Garten oder im Freien bewegen und bleiben dabei verbunden. Ob Sie in der Küche kochen oder im Garten entspannen, Ihr Baby bleibt in Reichweite.',
    'specs.power': 'Stromquelle',
    'specs.power.value': 'Batteriebetrieben',
    'specs.power.explanation': 'Batteriebetrieb bedeutet echte Portabilität — keine Notwendigkeit, in der Nähe von Steckdosen zu bleiben. Verwenden Sie Babywatch überall: im Park, bei Oma oder auf Reisen. Der wiederaufladbare Akku hält stundenlang für kontinuierliche Überwachung.',
    'specs.compatibility': 'Kompatibilität',
    'specs.compatibility.value': 'Jedes Smartphone mit BLE-Unterstützung',
    'specs.compatibility.explanation': 'Kein separater Monitor erforderlich. Babywatch funktioniert mit praktisch jedem modernen Smartphone (iOS oder Android) mit Bluetooth-Unterstützung. Verwenden Sie das Gerät, das Sie bereits überall dabei haben, und teilen Sie den Zugriff mit mehreren Familienmitgliedern.',
    'specs.mounting': 'Befestigung',
    'specs.mounting.value': 'Magnetisches Dreh-Verriegelungssystem',
    'specs.mounting.explanation': 'Das innovative magnetische Befestigungssystem lässt sich sicher an Kinderwagen, Kinderbetten oder jeder Stoffoberfläche befestigen. Der Dreh-Verriegelungsmechanismus sorgt dafür, dass die Kamera an Ort und Stelle bleibt, während das Schnellverschluss-Design eine sofortige Neupositionierung ermöglicht.',
    'specs.detection': 'Erkennung',
    'specs.detection.value': 'Intelligente Bewegungserkennung',
    'specs.detection.explanation': 'Fortschrittliche Algorithmen erkennen, wenn sich Ihr Baby bewegt oder aufwacht, und senden sofortige Benachrichtigungen an Ihr Telefon. Diese intelligente Erkennung hilft Ihnen, schnell zu reagieren, während Fehlalarme durch geringfügige Bewegungen herausgefiltert werden.',
    'specs.internet': 'Internet',
    'specs.internet.value': 'Kein WLAN erforderlich',
    'specs.internet.explanation': 'Im Gegensatz zu herkömmlichen Babyphones, die auf WLAN angewiesen sind, nutzt Babywatch eine direkte BLE-Verbindung. Das bedeutet keine Netzwerkeinrichtung, keine Router-Konfiguration und keine Sorgen über Internetausfälle. Ihr Babyphone funktioniert überall, jederzeit.',

    // Preorder
    'preorder.title': 'Seien Sie die Ersten, die Babywatch erleben',
    'preorder.subtitle': 'Bestellen Sie jetzt vor und sichern Sie sich Ihren Platz. Begrenzte Mengen für Erstanwender verfügbar.',
    'preorder.discount': 'Frühbucher-Rabatt',
    'preorder.delivery': 'Voraussichtliche Lieferung',
    'preorder.price': 'Vorbestellungspreis',
    'preorder.email.placeholder': 'Geben Sie Ihre E-Mail ein',
    'preorder.button': 'Vorbestellen',
    'preorder.success': 'Vielen Dank! Wir werden Sie bald mit Vorbestellungsdetails kontaktieren.',
    'preorder.disclaimer': 'Produkt befindet sich derzeit in der Entwicklung. Spezifikationen und Liefertermine können sich ändern.',

    // Newsletter
    'newsletter.title': 'Bleiben Sie auf dem Laufenden',
    'newsletter.subtitle': 'Abonnieren Sie unseren Newsletter für die neuesten Updates zur Babywatch-Entwicklung, Starttermine und exklusive Angebote.',
    'newsletter.email.placeholder': 'Ihre E-Mail-Adresse',
    'newsletter.button': 'Abonnieren',
    'newsletter.success': 'Vielen Dank für Ihr Abonnement! Überprüfen Sie Ihr Postfach zur Bestätigung.',

    // Footer
    'footer.tagline': 'Die nächste Generation der Babyüberwachungstechnologie. Einfach, sicher und immer verbunden.',
    'footer.company': 'Unternehmen',
    'footer.contact': 'Kontakt',
    'footer.copyright': '2026 Rehka Solution GmbH. Alle Rechte vorbehalten.',

    // Pitch
    'pitch.intro': 'Babywatch ist die winzige Babykamera, die überall hingeht, wo Ihr Baby hingeht.',
    'pitch.description': 'Befestigen Sie sie magnetisch an einem Kinderwagen, Kinderbett oder Reisebett und streamen Sie Videos direkt auf Ihr Smartphone — kein separater Monitor, kein gemeinsames WLAN, keine komplizierte Einrichtung. Mit einer direkten BLE-Verbindung hält Babywatch alles einfach, privat und tragbar.',
    'pitch.usage': 'Ob Sie zu Hause sind, Familie besuchen oder spazieren gehen, Babywatch hilft Ihnen, Ihr Kleines im Auge zu behalten — mit dem Gerät, das bereits in Ihrer Tasche ist.',
    'pitch.tagline': 'Babywatch — Seelenfrieden, immer in Reichweite.',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
