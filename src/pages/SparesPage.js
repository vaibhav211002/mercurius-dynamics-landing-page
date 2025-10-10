import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './SparesPage.css';

const SparesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedLetter, setSelectedLetter] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 }
  };

  const brands = {
    'A': ['AA Electric', 'ABB', 'Acme Electric Corporation', 'Acrison', 'Addison', 'Adlee Powertronic', 'Advanced Illumination', 'Advanced Micro Controls (AMCI)', 'Advantech', 'Ahuja', 'Aira Euro Automation', 'Airtac', 'Alfa Laval', 'Allen Bradley', 'Alstom', 'Alstrut', 'Althen Sensors & Controls', 'Amphenol', 'Anchor (Panasonic)', 'Anergy Instruments', 'Anver Corporation', 'Anybus (HMS Networks)', 'Apex Dynamics', 'Arcol', 'Arcotronics Italia', 'Argo-Hytos', 'Arthur G Russell', 'ASC Capacitors', 'ASCO Numatics', 'Athena Controls', 'Atlas Copco', 'Atlas Electric', 'Automatic Electric', 'Autonics', 'Autonix', 'Avery Weigh-Tronix', 'Axiom Controls'],
    'B': ['B&R Automation', 'Bajaj Electricals', 'Baldor', 'Balluff', 'Bals', 'Banner Engineering', 'Baumüller', 'BCH Electric', 'BD|Sensors', 'Becker Pumps', 'Beckhoff Automation', 'Belden', 'Belimo', 'Beta Electric', 'Bharat Bijlee', 'Bimed Technik', 'Black Box', 'BLACK+DECKER', 'Block Transformatoren Elektronik GmbH', 'Bofa', 'Bonfiglioli', 'Bosch', 'Bosch Rexroth', 'British Encoder', 'BTH Sensor', 'Burgmann', 'Bürkert', 'Busak+Shamban', 'Bussmann'],
    'C': ['Camozzi', 'Cands Electricals', 'Carborundum Universal', 'Carel Industries', 'Carling Technologies', 'Carlo Gavazzi', 'Carrlane', 'Caryaire', 'Chieftec', 'Ciese Electronic', 'Cisco', 'CKD Corporation', 'Clean Seal', 'Clipsal', 'Cloostermans', 'Coel Motori Srl', 'Cognex Corporation', 'Conec', 'Connectwell', 'Contact Industries', 'Contrex', 'Contrinex', 'Control Techniques', 'Conzerv', 'Cornell Dubilier Electronics', 'Cosmotec', 'Crompton', 'Crouzet', 'Crydom', 'Cummins', 'Curtis Instruments'],
    'D': ['D-Link', 'Dainfuse', 'Danfoss', 'Datalogic', 'Dell', 'Delta Electronics', 'Demag Cranes', 'Deublin', 'Deutschmann Automation', 'Devanshi Electronics', 'Ditec', 'DME', 'Dollex', 'Domino', 'Ducati Energia', 'Dwyer', 'Dynapar Encoders'],
    'E': ['E+E Elektronik', 'E-T-A Engineering Technology', 'Eaton', 'Ebm-Papst', 'Edmund Optics', 'Elcontrol Energy Net', 'Electronic Automation (EAPL)', 'Electronicon Kondensatoren GmbH', 'Elettro', 'Elgi Equipments', 'Elmex', 'Elo Touch', 'Elpress', 'Elpro International', 'Eltrac Technologies', 'Emerson', 'Emis', 'Endress+Hauser', 'Enerdoor', 'English Electric', 'EPCOS', 'Epson', 'Equitron Medica Instruments', 'Erhardt+Leimer', 'Eti Group', 'ETP', 'Euchner', 'Eupec', 'Eurotherm'],
    'F': ['Fabco-Air', 'FAG', 'Fairchild', 'Fanon', 'Fanuc (GE Fanuc)', 'Fastec Imaging', 'Fatek Automation', 'Ferraz Shawmut', 'Festo', 'Finder', 'Finmotor', 'FIP', 'Fleetguard', 'Flexlink', 'Flintec', 'Fluke', 'Flux Pumps', 'Forbes Marshall', 'Fotek', 'Frizlen', 'Fuji Electric', 'Fujifilm', 'FYH'],
    'G': ['Gates Corporation', 'Gauges Bourdon', 'GEA Group', 'Gefran', 'Gemco', 'GEMÜ', 'General Electric (GE)', 'General Industrial Controls (GIC)', 'GF Piping Systems (+GF+)', 'GGM', 'Globe Motors', 'Globtek Inc', 'Godrej', 'Graymills', 'Greystone', 'Grundfos', 'GSE Scale Systems', 'Guru Electronics'],
    'H': ['Habasit', 'Hager', 'Hammond Manufacturing', 'Hankison', 'Harting', 'Havells', 'Hensel Electric', 'Hewlett-Packard (HP)', 'Hillson Footwear', 'Hilscher', 'Hilti', 'Hirschmann', 'Hiwin', 'Honeywell', 'Hossbach Sensor Technologie', 'HPL Electric & Power', 'Hubbell', 'Hydac'],
    'I': ['ICM Controls', 'Ideal Electrical', 'IDEC Corporation', 'IFM Electronic', 'IGUS', 'IKO', 'IMI Norgren', 'INA', 'Indoasian', 'Ingersoll Rand', 'Instron', 'Intermec', 'Intorq', 'IXYS Corporation'],
    'J': ['J-Bals', 'Jainghai', 'Jainson', 'Jamicon', 'Janatics', 'Jayashree Electron', 'Jean Mueller', 'Johnson Controls', 'Jumo'],
    'K': ['Kaeser Kompressoren', 'Kaku', 'Kanson Electronics', 'Kaori Heat Treatment', 'Karam Safety', 'Kaycee', 'KEB', 'Kemet Corporation', 'Kendrion', 'Kennedy', 'Kensonic', 'Keyence', 'Kikawa Pumps', 'Kinequip', 'Koganei', 'Koyo', 'KSR Kübler', 'Kubler', 'Kusam-Meco', 'Kyoritsu'],
    'L': ['Lapp Group', 'Lauritz Knudsen', 'Lechler', 'Legrand', 'Leister', 'LEM', 'Lenze', 'Leone Relay', 'Leuze', 'Leviton', 'Lightwave', 'Lin Engineering', 'LINAK', 'Lirrd Relays', 'Littelfuse', 'Loctite', 'Lovato Electric', 'Lowara', 'LS Electric', 'Lubi Electronics', 'Lumberg', 'Lutron Instruments', 'Lutze Group', 'LXE'],
    'M': ['Mac Valves', 'Maniks', 'Mark-10', 'Markem-Imaje', 'Masibus', 'Mastech', 'Maxxair', 'McGill', 'Mean Well', 'Mecair Srl', 'Mechatronics Fan Group', 'Meco Instruments', 'Megadyne', 'Mencom Corporation', 'Mennekes', 'Mercotac', 'Mersen', 'Messer Cutting Systems', 'Messung', 'Metrosil', 'Mettler Toledo', 'Mextech', 'MGM-Varvel', 'Michell Instruments', 'Micropump', 'Minilec', 'Miranda Tools', 'Misati', 'Misumi', 'Mitsubishi Electric', 'Moba Mobile Automation', 'Mold Masters', 'Molex', 'Monroe Electronics', 'Motorola', 'Moxa', 'MSF-Vathauer Antriebstechnik', 'Multicomp', 'Multispan', 'Murrelektronik'],
    'N': ['Nalco by Ecolab', 'Nalco Water', 'Newport Electronics', 'Nidec Corporation', 'Nilfisk', 'Nippon Chemi-Con', 'NMB Technologies', 'Nordson', 'Novotechnik', 'NSD Corporation', 'NSK', 'NTE Electronics', 'NTN', 'nVent-Hoffman'],
    'O': ['OEN', 'OEZ', 'OKS', 'OLI Vibrators', 'Omega Engineering', 'Omron', 'Optex', 'Optima Packaging', 'Orange Electric', 'Oriental Motor', 'Osna Electronics', 'Otis'],
    'P': ['Pall Corporation', 'Panasonic', 'Panduit', 'Pantech Instruments', 'Paramount Industries', 'Parker', 'Patlite', 'PC Electric (PCE)', 'Pentair', 'Pepperl+Fuchs', 'Perma', 'Pfannenberg', 'Philips', 'Phoenix Contact', 'Piab', 'Pilz', 'Pizzato Elettrica', 'PLA Relays', 'Polycab', 'Polykap', 'Pomona Electronics', 'Posital Fraba', 'Pro-Face (Schneider Electric)', 'Prok Devices', 'ProSoft Technology', 'PSG Dover', 'Puls', 'Punch Industry'],
    'R': ['Radix Electrosystems', 'Raychem RPG', 'RDP Health', 'Red Lion Controls', 'Rehau', 'Reliance Electric', 'Rexnord', 'Rishabh Instruments', 'Rittal', 'RJS Technologies', 'RKC Instruments', 'ROPEX', 'Rosemount', 'Ross Controls', 'Rotex', 'Rotoflux', 'Rotometrics', 'Rotronic', 'RS PRO'],
    'S': ['Saint-Gobain', 'Salzer', 'Sanyo Denki', 'Sartorius', 'Schaffner', 'Schaltbau', 'Schmersal', 'Schneider Electric', 'Schott AG', 'Schrack', 'Secure Meters', 'Seiki Corporation', 'Sekisui', 'Selec Controls', 'Semikron', 'SensoPart', 'SEW-Eurodrive', 'Shavison Electronics', 'Shavo Norgren', 'Shimpo Instruments', 'Shurflo', 'SIBA', 'Sibass Electric', 'SICK Sensors', 'Siemens', 'Sigmatek', 'Sipin Technology', 'SKF', 'SMC Corporation', 'Socomec', 'Song Chuan', 'Spark Motors', 'Spirax Sarco', 'Sprecher+Schuh', 'SPX Flow', 'Stachl Elektronik', 'Stanley', 'Stanvac', 'Stäubli', 'Stronger', 'Sumake', 'Sumtak', 'Sunflow', 'Sunon', 'Switron', 'SWR Engineering', 'Syrelec', 'Syska', 'System Sensor'],
    'T': ['Takamisawa Cybernetics', 'Tandler', 'Taparia', 'Target Electricals', 'TB Wood\'s', 'Techno Pneumatics', 'Teknic Electric', 'Teknic Euchner', 'Telco Sensors', 'Telemecanique', 'Telsonic Ultrasonics', 'TEMCO', 'Texas Instruments', 'THK', 'Thomas & Betts', 'Thomson Linear', 'Tidar', 'Tidland', 'Timken', 'Toa Corporation', 'Toshiba', 'Trombetta', 'Tsubaki', 'Turck'],
    'U': ['UL Group', 'Unison', 'United Automation'],
    'V': ['Venus', 'Vertex', 'Videojet', 'Vincotech', 'Volkmann GmbH', 'Vollschutz'],
    'W': ['WAGO', 'Waldmann Lighting', 'Walther Electric', 'Walther Praezision', 'WAMGROUP', 'Watlow', 'Weidmüller', 'Weishaupt', 'Wenglor', 'WIKA', 'Wilkerson Corporation', 'Wipro', 'Wittenstein Alpha', 'Wöhner'],
    'X': ['Xiamen Faratronic', 'XP Power'],
    'Y': ['Yaskawa', 'Yokogawa Electric', 'York Controls', 'Yuken'],
    'Z': ['Zephyr', 'Zero-Max', 'Zimmer Group', 'Zuiko Corporation']
  };

  const categories = ['All', 'Automation', 'Electrical', 'Mechanical'];

  // Advanced search functionality
  const getAllBrands = () => {
    return Object.values(brands).flat();
  };

  const getSearchSuggestions = (term) => {
    if (term.length < 2) return [];
    const allBrands = getAllBrands();
    return allBrands
      .filter(brand => brand.toLowerCase().includes(term.toLowerCase()))
      .slice(0, 8)
      .sort();
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowSuggestions(value.length >= 2);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setSelectedLetter('');
    setShowSuggestions(false);
  };

  const handleLetterFilter = (letter) => {
    setSelectedLetter(selectedLetter === letter ? '' : letter);
    setSearchTerm('');
    setShowSuggestions(false);
  };

  const filteredBrands = Object.entries(brands).filter(([letter, brandList]) => {
    // Filter by selected letter
    if (selectedLetter && letter !== selectedLetter) {
      return false;
    }
    
    // Filter by search term
    if (searchTerm) {
      return brandList.some(brand => 
        brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return true;
  });

  const suggestions = getSearchSuggestions(searchTerm);
  const totalBrands = getAllBrands().length;
  const filteredBrandsCount = filteredBrands.reduce((count, [, brandList]) => count + brandList.length, 0);

  return (
    <div className="spares-page">
      {/* Hero Section */}
      <section className="spares-hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            {...fadeInUp}
          >
            <h1 className="hero-title">
              <span className="title-main">Industrial </span>
              <span className="title-accent"> Spares & Components</span>
            </h1>
            <p className="hero-description">
                  Genuine OEM-certified parts from the world’s leading manufacturers, covering both current and discontinued models for every industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="spares-content">
        <div className="container">
          {/* Introduction */}
          {/* Why Choose Us */}
          <motion.div 
            className="why-choose-section"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <h3>Why Choose Us?</h3>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4>100% Genuine OEM Certified Components</h4>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7H7C5.89543 7 5 7.89543 5 9V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4>Wide Multi-Brand Availability</h4>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor"/>
                  </svg>
                </div>
                <h4>Quick Sourcing & Delivery</h4>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
                  </svg>
                </div>
                <h4>Expert Guidance on Replacements</h4>
              </div>
            </div>
          </motion.div>

          {/* Advanced Search and Filter */}
          <motion.div 
            className="search-filter-section"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <div className="search-header">
              <h3>Find Your Brand</h3>
              <div className="search-stats">
                <span className="total-brands">Total: {totalBrands} brands</span>
                {(searchTerm || selectedLetter) && (
                  <span className="filtered-brands">Showing: {filteredBrandsCount} brands</span>
                )}
              </div>
            </div>

            <div className="search-bar">
              <div className="search-input-wrapper">
                <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input
                  type="text"
                  placeholder="Search brands... (e.g., Siemens, ABB, Schneider)"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onFocus={() => setShowSuggestions(searchTerm.length >= 2)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                />
                {searchTerm && (
                  <button className="clear-search-btn" onClick={handleClearSearch}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                )}
              </div>
              
              {/* Search Suggestions */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="search-suggestions">
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="suggestion-item"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      <svg className="suggestion-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{suggestion}</span>
                    </div>
                  ))}
                </div>
              )}

            </div>

            {/* Alphabet Filter */}
            <div className="alphabet-filter">
              <div className="filter-label">Filter by Letter:</div>
              <div className="alphabet-buttons">
                {Object.keys(brands).map(letter => (
                  <button
                    key={letter}
                    className={`alphabet-btn ${selectedLetter === letter ? 'active' : ''}`}
                    onClick={() => handleLetterFilter(letter)}
                  >
                    {letter}
                  </button>
                ))}
                <button
                  className={`alphabet-btn clear-filter ${!selectedLetter ? 'active' : ''}`}
                  onClick={() => handleLetterFilter('')}
                >
                  All
                </button>
              </div>
            </div>
            
            {/* <div className="category-tabs">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-tab ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div> */}
          </motion.div>

          {/* Brands Section */}
          <motion.div 
            className="brands-section"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <h3>Brands We Support (A–Z)</h3>
            
            <div className="brands-listing">
              {filteredBrands.map(([letter, brandList], index) => (
                <div
                  key={letter}
                  className="brand-letter-section"
                >
                  <div className="letter-header">
                    <div className="letter-badge">{letter}</div>
                    <div className="letter-line"></div>
                  </div>
                  
                  <div className="brands-grid">
                    {brandList.map((brand, brandIndex) => (
                      <div
                        key={brand}
                        className="brand-card"
                      >
                        <span className="brand-name">{brand}</span>
                        <Link to="/request-quote" className="brand-contact-btn">
                          Get Quote
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SparesPage;
