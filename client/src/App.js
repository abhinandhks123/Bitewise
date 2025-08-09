import React from "react";
import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Hero from "./pages/Hero";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Result from "./pages/Result";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/result" element={<Result />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
      <Analytics />
    </>
  );
}

export default App;
