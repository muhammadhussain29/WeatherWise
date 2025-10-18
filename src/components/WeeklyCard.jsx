import React from 'react';
import { Cloud, CloudRain, CloudSnow, Wind, CloudLightning, CloudFog, Sun, CloudDrizzle } from 'lucide-react';

const WeeklyCard = ({ isDarkMode, forecast }) => {
  const getWeatherIcon = (condition) => {
    const iconClasses = `w-14 h-14 mx-auto ${isDarkMode ? 'text-cyan-400' : 'text-sky-500'}`;
    const conditionLower = condition.toLowerCase();

    if (conditionLower.includes("cloudy") && !conditionLower.includes("partly")) {
      return <Cloud className={iconClasses} strokeWidth={1} />;
    }
    if (conditionLower.includes("partly cloudy") || conditionLower.includes("partial")) {
      return <CloudDrizzle className={iconClasses} strokeWidth={1} />;
    }
    if (conditionLower.includes("rain")) {
      return <CloudRain className={iconClasses} strokeWidth={1} />;
    }
    if (conditionLower.includes("snow")) {
      return <CloudSnow className={iconClasses} strokeWidth={1} />;
    }
    if (conditionLower.includes("wind")) {
      return <Wind className={iconClasses} strokeWidth={1} />;
    }
    if (conditionLower.includes("storm") || conditionLower.includes("thunder")) {
      return <CloudLightning className={iconClasses} strokeWidth={1} />;
    }
    if (conditionLower.includes("fog") || conditionLower.includes("haze")) {
      return <CloudFog className={iconClasses} strokeWidth={1} />;
    }
    return <Sun className={iconClasses} strokeWidth={1} />;
  };

  const getDayName = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  return (
    <div className={`weather-box rounded-2xl p-6 flex flex-col items-center gap-4 transition-theme ${isDarkMode ? 'dark-box' : 'light-box'}`}>
      <p className={`text-sm font-bold uppercase tracking-wider transition-theme ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
        {getDayName(forecast.date)}
      </p>

      <div className="my-3">
        {getWeatherIcon(forecast.text || forecast.condition?.text || "sunny")}
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-2 items-baseline">
          <span className={`text-2xl font-bold transition-theme ${isDarkMode ? 'gradient-text-dark' : 'gradient-text-light'}`}>
            {forecast.high || forecast.temperature?.high || "--"}&deg;
          </span>
          <span className={`text-lg font-medium transition-theme ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            {forecast.low || forecast.temperature?.low || "--"}&deg;
          </span>
        </div>
      </div>

      <p className={`text-xs text-center font-medium transition-theme ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
        {forecast.text || forecast.condition?.text || "Sunny"}
      </p>
    </div>
  );
};

export default WeeklyCard;
