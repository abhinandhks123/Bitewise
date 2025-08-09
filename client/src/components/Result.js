import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const API_KEY = "YOUR_GEMINI_API_KEY"; // Replace with your key

const Result = () => {
  const location = useLocation();
  const { mealImage } = location.state || {};
  const [nutritionData, setNutritionData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (mealImage) {
      analyzeImage(mealImage);
    }
  }, [mealImage]);

  const analyzeImage = async (imageFile) => {
    setLoading(true);
    try {
      const base64Image = await toBase64(imageFile);

      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  { text: "Analyze this meal and give nutritional values in JSON format." },
                  { inline_data: { mime_type: imageFile.type, data: base64Image.split(",")[1] } }
                ]
              }
            ]
          })
        }
      );

      const data = await res.json();
      setNutritionData(data);
    } catch (err) {
      console.error("Error analyzing image:", err);
    }
    setLoading(false);
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Meal Nutrition Analysis</h1>
      {loading ? (
        <p>Analyzing your meal...</p>
      ) : (
        <>
          {nutritionData ? (
            <pre>{JSON.stringify(nutritionData, null, 2)}</pre>
          ) : (
            <p>No data found.</p>
          )}
        </>
      )}
    </div>
  );
};

export default Result;
