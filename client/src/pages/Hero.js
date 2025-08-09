import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Hero.css";
import HowItWorks from "../components/HowItWorks";
import WhyUse from "../components/WhyUse"


const Hero = () => {
  const [mealImage, setMealImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMealImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleAnalyze = () => {
    if (!mealImage) {
      alert("Please upload a meal image first!");
      return;
    }
    navigate("/result", { state: { mealImage } });
  };

  return (
    <section className="hero">
      <h1>Snap, Analyze</h1>
      <h2>Eat Smarter</h2>

      <div className="upload-analyze">
        {/* Hidden file input */}
        <input
          type="file"
          accept="image/*"
          id="mealUpload"
          onChange={handleImageUpload}
          style={{ display: "none" }}
        />

        {/* Styled label acts like a button */}
        <label htmlFor="mealUpload" className="upload-btn" style={{ border:"1px solid #75a47f",color:"#75a47f",textAlign:"center",fontSize:"14px",padding:"10px 20px",borderRadius:"5px" }}>
          {preview ? "Change " : "Upload Meal"}
        </label>

        {preview && (
          <div style={{ marginTop: "10px" }}>
            <img
              src={preview}
              alt="Preview"
              style={{ maxWidth: "80px",maxHeight:"30px", borderRadius: "10px" }}
            />
          </div>
        )}

        <button className="analyze" onClick={handleAnalyze}>
          Analyze
        </button>
      </div>

      <p>100% free | No login needed</p>
      
      <HowItWorks/>
      <WhyUse/>
    </section>
  );
};

export default Hero;
