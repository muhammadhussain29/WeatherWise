import React from 'react';
import { Droplets, Eye, Gauge, Thermometer, Navigation, Wind } from 'lucide-react';

const WeatherBox = ({ isDarkMode, type, value }) => {
  const getIcon = () => {
    const iconClasses = `w-7 h-7 ${isDarkMode ? 'text-cyan-400' : 'text-sky-600'}`;

    switch(type) {
      case "Humidity":
        return <Droplets className={iconClasses} strokeWidth={1.5} />;
      case "Visibility":
        return <Eye className={iconClasses} strokeWidth={1.5} />;
      case "Pressure":
        return <Gauge className={iconClasses} strokeWidth={1.5} />;
      case "Wind Chills":
        return <Thermometer className={iconClasses} strokeWidth={1.5} />;
      case "Wind Direction":
        return <Navigation className={iconClasses} strokeWidth={1.5} />;
      case "Wind Speed":
        return <Wind className={iconClasses} strokeWidth={1.5} />;
      default:
        return null;
    }
  };

  const getUnit = () => {
    switch(type) {
      case "Humidity":
        return "%";
      case "Visibility":
        return "km";
      case "Pressure":
        return "mb";
      case "Wind Chills":
        return "°C";
      case "Wind Direction":
        return "°";
      case "Wind Speed":
        return "km/h";
      default:
        return "";
    }
  };

  return (
    <div className={`weather-box rounded-2xl px-5 py-5 flex flex-col gap-3 transition-theme ${isDarkMode ? 'dark-box' : 'light-box'}`}>
      <div className="flex items-center justify-between">
        <div className={`p-2 rounded-xl ${isDarkMode ? 'bg-cyan-500/20' : 'bg-sky-500/20'}`}>
          {getIcon()}
        </div>
      </div>
      <div>
        <h4 className={`text-xs font-semibold uppercase tracking-wider mb-2 transition-theme ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
          {type}
        </h4>
        <p className={`text-2xl font-bold transition-theme ${isDarkMode ? 'dark-primary' : 'light-primary'}`}>
          {value || "--"}<span className="text-lg ml-1">{getUnit()}</span>
        </p>
      </div>
    </div>
  );
};

export default WeatherBox;
