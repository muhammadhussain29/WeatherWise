import React from 'react';
import WeeklyCard from './WeeklyCard.jsx';
import { CalendarDays } from 'lucide-react';

const Weekly = (props) => {
  const forecasts = props.forecasts || [];

  return (
    <div className={`glass-card rounded-3xl px-8 py-10 transition-theme ${props.isDarkMode ? 'dark-bg-contrast dark-shadow' : 'light-bg-contrast light-shadow'}`}>
      <div className="flex items-center gap-3 mb-8">
        <div className={`p-2 rounded-xl ${props.isDarkMode ? 'bg-cyan-500/20' : 'bg-sky-500/20'}`}>
          <CalendarDays className={`w-7 h-7 ${props.isDarkMode ? 'text-cyan-400' : 'text-sky-600'}`} />
        </div>
        <h2 className={`text-3xl md:text-4xl font-bold tracking-tight transition-theme ${props.isDarkMode ? 'dark-secondary' : 'light-secondary'}`}>
          7-Day Forecast
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
        {forecasts.length > 0 ? (
          forecasts.map((forecast, index) => (
            <WeeklyCard
              key={index}
              isDarkMode={props.isDarkMode}
              forecast={forecast}
            />
          ))
        ) : (
          <p className={`col-span-full text-center py-12 transition-theme ${props.isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            No forecast data available
          </p>
        )}
      </div>
    </div>
  );
};

export default Weekly;
