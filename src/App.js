import "./App.css";
import SupportMarket from "./pages/Service/SupportMarket/SupportMarket";
import Layout from "./modules/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Mainpage from "./pages/Mainpage/Mainpage";
import Price from "./pages/Price/Price";
import CardComponent from "./components/Test/CardComponent";
import Test from "./components/Test/Test";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/support" element={<SupportMarket />} />
          <Route index path="/" element={<Mainpage />} />
          <Route path="/price" element={<Price />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
