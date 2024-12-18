import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import ArticlesList from "./ArticlesList";
import { Route, Routes } from "react-router-dom";

// display articles from api
//use components for a single article (articleCard)
// handle api fetching
//check routing
//check state to use; state, params and effect

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/articles" element={<ArticlesList />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
