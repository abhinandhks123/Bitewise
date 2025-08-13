import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/BlogDetail.css";
const blogs = [
  {
    id: 1,
    title: "AI Calorie Counter: Instantly Analyse Your Meal from a Photo",
    date: "August 13, 2025",
    image: "https://microbenotes.com/wp-content/uploads/2024/08/Food-and-Nutrition.jpeg",
    excerpt:
      "Stop guessing your calories. Discover how our AI calorie counter can scan your meal photo and give you instant, accurate nutrition info.",
    content: `If you’ve ever tried counting calories by hand, you know how tedious it can be. Manually searching for each ingredient, estimating portion sizes, and calculating macros can easily take 10 minutes or more — and even then, you might still be wrong. That’s where our **AI calorie counter** changes the game. 

By simply snapping or uploading a photo of your meal, our AI Meal Analyser uses advanced image recognition to instantly detect foods, estimate portion sizes, and calculate the total **calories, protein, carbs, and fats** in seconds. No more manual logging, no more guessing. This isn’t just faster — it’s more accurate, too. Our algorithm is trained on thousands of real-world meals, so it can even detect hidden ingredients like sauces, oils, or toppings that many people forget to log. 

Beyond calorie counting, the AI also gives you personalised **nutrition tips** based on your goals. Trying to lose weight? It will highlight where you can cut excess calories. Want to build muscle? It will suggest ways to increase protein intake. Simply put, it’s like having a personal nutritionist in your pocket.

Here’s how easy it is to use:
1. Take a clear photo of your meal.
2. Upload it to our AI Meal Analyser.
3. Get instant calorie count, macro breakdown, and actionable tips.

Whether you’re a busy professional, fitness enthusiast, or someone just starting their healthy eating journey, our AI tool makes tracking effortless and sustainable. No more food scales, no more spreadsheets — just quick, accurate results anytime, anywhere.

If you’re tired of wasting time on outdated tracking methods, it’s time to try the future of nutrition. See how simple and accurate calorie tracking can be.  
**Start your free scan now:** https://bitewise.life/`
  },
  {
    id: 2,
    title: "5 Proven Reasons to Switch to AI Meal Tracking Today",
    date: "August 13, 2025",
    image: "https://img.freepik.com/free-photo/real-food-pyramid-assortment-top-view_23-2150238927.jpg?semt=ais_hybrid&w=740&q=80",
    excerpt:
      "Meal tracking apps are useful, but AI meal tracking is faster, smarter, and more accurate. Here’s why you should make the switch now.",
    content: `Traditional meal tracking apps have been around for years, but they still rely on you typing in every food and portion manually. That’s time-consuming, prone to error, and honestly — boring. Our **AI meal tracker** eliminates all of that.

Here’s why switching to AI meal tracking will change your nutrition game forever:

1. **Zero Typing** – Just take a photo of your meal and let AI do the work. No typing, no searching through endless databases.
2. **Better Accuracy** – AI image recognition can detect portion sizes and hidden calories you might miss.
3. **Hidden Calorie Tracking** – Oils, dressings, and sauces often go unlogged. Our AI identifies them instantly.
4. **Fits Your Lifestyle** – Whether you eat at home, at work, or in restaurants, snapping a quick photo is easy.
5. **Turns Tracking into a Habit** – When tracking takes 2 seconds, you actually stick with it.

Our AI tool doesn’t just tell you numbers — it gives **personalised feedback** so you know what to adjust. It’s perfect for weight loss, muscle gain, or simply maintaining a balanced diet without stress.

Why keep struggling with outdated tracking methods when AI makes it effortless?  
**Try our AI Meal Analyser free today:** https://bitewise.life/`
  },
  {
    id: 3,
    title: "Macro Tracking Made Simple with AI: No Weighing, No Guessing",
    date: "August 13, 2025",
    image: "https://media.istockphoto.com/id/997087146/photo/healthy-foods-containing-vitamin-d.jpg?s=612x612&w=0&k=20&c=96eikST44ESdfPeOB2yp3ixzy_LiOvreA096gLKHqEA=",
    excerpt:
      "Macros are key for weight loss, muscle gain, and energy. Learn how AI can track them automatically from your food photo.",
    content: `If you’re serious about fitness or health, you’ve probably heard about tracking **macros** — protein, carbohydrates, and fats. They’re the building blocks of your diet, and getting the right balance is essential for hitting your goals. The problem? Manual macro tracking is slow, and food scales aren’t always practical. That’s where our **AI macro tracker** comes in.

With our AI Meal Analyser, you can:
- Upload a photo of your meal
- Get an instant breakdown of protein, carbs, and fats
- Compare against your daily macro targets
- Receive smart suggestions for improvement

No weighing, no measuring, no spreadsheets. The AI handles everything in seconds, giving you more time to focus on your workouts and life. This tool is especially useful if you’re trying to:
- Build muscle by hitting your protein goals
- Lose fat by controlling carb intake
- Maintain steady energy by balancing macros

The best part? You can track on the go. Whether you’re eating at home, at work, or out with friends, all you need is your phone camera.  
**Start tracking smarter today:** https://bitewise.life/`
  },
  {
    id: 4,
    title: "The Quickest Way to Find Out Your Meal’s Calories",
    date: "August 13, 2025",
    image: "https://www.blackmores.com.au/_next/image?url=%2F-%2Fmedia%2Fbklau%2Fhealth-hub%2Feveryday-health%2F6-essential-nutrients-for-wellbeing%2Fnutrient-rich-diet.jpg&w=3840&q=75",
    excerpt:
      "Still searching for each food item manually? There’s a faster way — AI photo calorie counting.",
    content: `Guessing calories is one of the most common reasons diets fail. Underestimating just a few meals per week can easily sabotage your progress. The fastest solution? An **AI calorie counter** that can scan your meal photo and give you accurate results instantly.

With our AI Meal Analyser, here’s all you do:
1. Snap a clear photo of your meal.
2. Upload it to our tool.
3. Get calories, macros, and nutrition tips in seconds.

The AI can recognise complex dishes, estimate portion sizes, and account for extras like sauces or oils. This means you’ll always know exactly what you’re eating — without spending time searching and logging manually.

If you’re ready to stop guessing and start making data-driven food choices, try it for yourself.  
**Instantly analyse your next meal here:** https://bitewise.life/`
  },
  {
    id: 5,
    title: "The Future of Healthy Eating is AI — And It’s Here Now",
    date: "August 13, 2025",
    image: "data:image/jpeg;base64,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",
    excerpt:
      "From calorie tracking to personalised meal suggestions, AI is transforming healthy eating. Here’s why you should start using it today.",
    content: `Healthy eating has always been about making informed choices — but until now, getting accurate nutrition info has been slow and inconvenient. AI is changing that. Our **AI Meal Analyser** is part of a new wave of tools making nutrition fast, accurate, and accessible for everyone.

Here’s how it’s transforming healthy eating:
- **Instant calorie counting** from meal photos
- **Macro tracking** without weighing or typing
- **Personalised suggestions** for your goals
- **Habit building** through effortless daily tracking

AI doesn’t just save you time — it empowers you with real data so you can make smarter food decisions every day. Whether you’re a busy parent, a gym-goer, or someone just starting their health journey, this tool adapts to you.

The future of healthy eating is already here. Don’t wait to catch up.  
**Discover the future of nutrition now — free:** https://bitewise.life/ `
  }
];


const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <p style={{ padding: "20px" }}>Blog not found.</p>;
  }

  return (
    <div className="blog-detail-container">
      <img src={blog.image} alt={blog.title} className="detail-image" />
      <h1>{blog.title}</h1>
      <p className="blog-date">{blog.date}</p>
      <p className="blog-full-content">{blog.content}</p>
      <Link to="/blog" className="back-link">
        ← Back to Blogs
      </Link>
      <Link to="/" className="back-link" style={{
    color: "#16423C",
    textDecoration: "none",
    fontWeight: "bold",
    padding: "10px 20px",
    border: "2px solid ",
    borderRadius: "4px",
    backgroundColor: "#E9EFEC"
  }}>Try Now</Link>
    </div>
  );
};

export default BlogDetail;
