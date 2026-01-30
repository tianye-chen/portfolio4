import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Attributions } from "./Attributions";
import { Layout } from "./Components/Layout/Layout";
import { BlogList } from "./Pages/Blog/BlogList";
import { BlogPost } from "./Pages/Blog/BlogPost";

export const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/attributions" element={<Attributions />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </Layout>
    </Router>
  );
};
