import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LoginForm from './components/LoginForm/LoginForm'
import SearchBar from "./components/SearchBar/SearchBar"
import LangSwitcher from "./components/LangSwitcher/LangSwitcher"
import './App.css'
import FeedbackForm from './components/FeedbackForm/FeedbackForm'

export default function App() {
  const [lang, setLang] = useState("uk");

  // Колбек-функція для обробки сабміту форми
  const handleLogin = (userData) => {
    // Виконуємо необхідні операції з даними
    console.log(userData);
  };

  const [coffeeSize, setCoffeeSize] = useState("sm");
  const handleSizeChange = (evt) => {
    setCoffeeSize(evt.target.value);
  };

  const [hasAccepted, setHasAccepted] = useState(false);

  const handleChange = (evt) => {
    setHasAccepted(evt.target.checked);
  };

  return (
    <div>
      <div>
        <h1>Please login to your account!</h1>
        {/* Передаємо колбек як пропс форми */}
        <LoginForm onLogin={handleLogin} />
        <SearchBar />
      </div>
      <div>
        <p>Selected language: {lang}</p>
        <LangSwitcher value={lang} onSelect={setLang} />

        <h1> Select coffee size</h1>
        <label><input type="radio" name="coffeeSize" value="sm" checked={coffeeSize === "sm"} onChange={handleSizeChange} />Small</label>
        <label><input type="radio" name="coffeeSize" value="md" checked={coffeeSize === "md"} onChange={handleSizeChange} />Medium</label>
        <label><input type="radio" name="coffeeSize" value="lg" checked={coffeeSize === "lg"} onChange={handleSizeChange} />Large</label>
        <p> Select size: {coffeeSize}</p>

        <label><input type="checkbox" name="terms" checked={hasAccepted} onChange={handleChange} />I accept terms and conditions</label>

        <button type="button" disabled={!hasAccepted}>Proceed</button>

        <FeedbackForm />


      </div>
    </div>
  );
};

