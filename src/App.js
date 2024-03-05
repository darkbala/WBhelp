import "./App.css";
import SupportMarket from "./pages/Service/SupportMarket/SupportMarket";
import Layout from "./modules/Layout/Layout";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route  path="/support" element={<SupportMarket />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
