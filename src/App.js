import "./App.css";
import SupportMarket from "./pages/Service/SupportMarket/SupportMarket";
import Layout from "./modules/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Mainpage from "./pages/Mainpage/Mainpage";
import Price from "./pages/Price/Price";
import CardComponent from "./components/Test/CardComponent";
import Test from "./components/Test/Test";
import News from "./pages/News/News";
import FAQ from "./pages/FAQ/FAQ";

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
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
