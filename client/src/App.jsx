import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Attributions } from "./Attributions";
import { Layout } from "./Components/Layout/Layout";
import { BlogList } from "./Pages/Blog/BlogList";
import { BlogPost } from "./Pages/Blog/BlogPost";
import { Editor } from "./Pages/Blog/Editor";

export const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/attributions" element={<Attributions />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/blog/editor" element={<Editor />} />
        </Routes>
      </Layout>
    </Router>
  );
};
