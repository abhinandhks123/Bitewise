import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Result.css";

const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

const Result = () => {
  const location = useLocation();
  const { mealImage } = location.state || {};
  const [foods, setFoods] = useState([]);
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
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text:
                      "Analyze the meal in this image and return JSON with a 'foods' array. " +
                      "Each item must include: name (string), quantity (string), calories (number, kcal), protein (number, grams), carbs (number, grams), fat (number, grams). " +
                      "Values must be as accurate as possible based on standard food databases."
                  },
                  {
                    inline_data: {
                      mime_type: imageFile.type,
                      data: base64Image.split(",")[1]
                    }
                  }
                ]
              }
            ]
          })
        }
      );

      const data = await res.json();
      const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

      let parsedFoods = [];
      try {
        const jsonMatch = rawText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          const parsed = JSON.parse(jsonMatch[0]);
          parsedFoods = parsed.foods || [];
        }
      } catch (e) {
        console.error("Error parsing foods JSON:", e);
      }

      setFoods(parsedFoods);
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

  const totals = foods.reduce(
    (acc, f) => {
      acc.calories += f.calories || 0;
      acc.protein += f.protein || 0;
      acc.carbs += f.carbs || 0;
      acc.fat += f.fat || 0;
      return acc;
    },
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );

  return (
    <div className="result-container">
      <h1>Meal Nutrition</h1><br/>

      {mealImage && (
        <div className="image-preview">
          <img src={URL.createObjectURL(mealImage)} alt="Meal" />
        </div>
      )}

      {loading ? (
        <p>Analyzing your meal...</p>
      ) : foods.length > 0 ? (
        <>
          <div className="cards-container">
            {foods.map((food, idx) => (
              <div key={idx} className="food-card">
                <h3>{food.name}</h3>
                <p className="quantity">{food.quantity}</p>
                <div className="nutrition">
                  <p><strong>Calories:</strong> {food.calories} kcal</p>
                  <p><strong>Protein:</strong> {food.protein} g</p>
                  <p><strong>Carbs:</strong> {food.carbs} g</p>
                  <p><strong>Fat:</strong> {food.fat} g</p>
                </div>
              </div>
            ))}
          </div>

          <div className="totals-card">
            <h2>Total</h2>
            <p><strong>Calories:</strong> {totals.calories} kcal</p>
            <p><strong>Protein:</strong> {totals.protein} g</p>
            <p><strong>Carbs:</strong> {totals.carbs} g</p>
            <p><strong>Fat:</strong> {totals.fat} g</p>
          </div>
        </>
      ) : (
        <p>Could not detect foods. Please try again.</p>
      )}

      <p className="disclaimer">
        Disclaimer: Nutrition values are estimated by AI and may not be fully accurate.
        Please verify with official sources or a certified nutritionist before making dietary decisions.
      </p>
    </div>
  );
};

export default Result;
