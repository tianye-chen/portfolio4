import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Attributions } from "./Attributions";
import { Layout } from "./Components/Layout/Layout";
import { Blog } from "./Pages/Blog/Blog";

export const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/attributions" element={<Attributions />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Layout>
    </Router>
  );
};
