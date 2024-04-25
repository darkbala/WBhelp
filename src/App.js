import "./App.css";
import SupportMarket from "./pages/Service/SupportMarket/SupportMarket";
import Layout from "./modules/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Mainpage from "./pages/Mainpage/Mainpage";
import Price from "./pages/Price/Price";
import News from "./pages/News/News";
import FAQ from "./pages/FAQ/FAQ";
import Banks from "./pages/Banks/Banks";
import About from "./pages/About/About";
import Glossary from "./pages/Glossary/Glossary";
import Scheme from "./pages/Scheme/Scheme";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/support" element={<SupportMarket />} />
          <Route index path="/" element={<Mainpage />} />
          <Route path="/price" element={<Price />} />
          <Route path="/news" element={<News />} />

          <Route path="/faq" element={<FAQ />} />
          <Route path="/banks" element={<Banks />} />
          {/*<Route path="/about" element={<About />} />*/}
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/about" element={<Scheme />} />



        </Routes>
      </Layout>
    </div>
  );
}

export default App;
