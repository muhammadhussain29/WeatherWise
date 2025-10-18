import React from 'react';
import { MapPin, Calendar, Sunrise, Sunset } from 'lucide-react';

const LocationDetails = (props) => {
  const location = props.location || {};
  const current_observation = props.current_observation || {};
  const astronomy = current_observation.astronomy || {};

  return (
    <div className={`glass-card md:w-1/3 w-full rounded-3xl px-8 py-10 flex flex-col gap-6 transition-theme ${props.isDarkMode ? 'dark-bg-contrast dark-shadow' : 'light-bg-contrast light-shadow'}`}>
      <h2 className={`text-3xl md:text-4xl font-bold tracking-tight mb-4 transition-theme ${props.isDarkMode ? 'dark-secondary' : 'light-secondary'}`}>
        Location Info
      </h2>

      <div className="flex flex-col gap-5">
        <div className={`weather-box rounded-2xl p-6 transition-theme ${props.isDarkMode ? 'dark-box' : 'light-box'}`}>
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-xl ${props.isDarkMode ? 'bg-cyan-500/20' : 'bg-sky-500/20'}`}>
              <MapPin className={`w-6 h-6 ${props.isDarkMode ? 'text-cyan-400' : 'text-sky-600'}`} />
            </div>
            <div className="flex-1">
              <p className={`text-xs font-semibold uppercase tracking-wider mb-2 transition-theme ${props.isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Location
              </p>
              <p className={`text-xl font-bold mb-1 transition-theme ${props.isDarkMode ? 'dark-secondary' : 'light-secondary'}`}>
                {location.city || "Unknown"}
              </p>
              <p className={`text-sm transition-theme ${props.isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {location.region ? `${location.region}, ` : ""}{location.country || ""}
              </p>
            </div>
          </div>
        </div>

        <div className={`weather-box rounded-2xl p-6 transition-theme ${props.isDarkMode ? 'dark-box' : 'light-box'}`}>
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-xl ${props.isDarkMode ? 'bg-cyan-500/20' : 'bg-sky-500/20'}`}>
              <Calendar className={`w-6 h-6 ${props.isDarkMode ? 'text-cyan-400' : 'text-sky-600'}`} />
            </div>
            <div className="flex-1">
              <p className={`text-xs font-semibold uppercase tracking-wider mb-2 transition-theme ${props.isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Date & Time
              </p>
              <p className={`text-lg font-bold mb-1 transition-theme ${props.isDarkMode ? 'dark-secondary' : 'light-secondary'}`}>
                {new Date().toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'short',
                  day: 'numeric'
                })}
              </p>
              <p className={`text-sm transition-theme ${props.isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {new Date().toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className={`weather-box rounded-2xl p-6 transition-theme ${props.isDarkMode ? 'dark-box' : 'light-box'}`}>
            <div className="flex flex-col items-center gap-3">
              <div className={`p-2.5 rounded-xl ${props.isDarkMode ? 'bg-cyan-500/20' : 'bg-sky-500/20'}`}>
                <Sunrise className={`w-7 h-7 ${props.isDarkMode ? 'text-cyan-400' : 'text-sky-600'}`} />
              </div>
              <p className={`text-xs font-semibold uppercase tracking-wider transition-theme ${props.isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Sunrise
              </p>
              <p className={`text-lg font-bold transition-theme ${props.isDarkMode ? 'dark-primary' : 'light-primary'}`}>
                {astronomy.sunrise || "--:--"}
              </p>
            </div>
          </div>

          <div className={`weather-box rounded-2xl p-6 transition-theme ${props.isDarkMode ? 'dark-box' : 'light-box'}`}>
            <div className="flex flex-col items-center gap-3">
              <div className={`p-2.5 rounded-xl ${props.isDarkMode ? 'bg-cyan-500/20' : 'bg-sky-500/20'}`}>
                <Sunset className={`w-7 h-7 ${props.isDarkMode ? 'text-cyan-400' : 'text-sky-600'}`} />
              </div>
              <p className={`text-xs font-semibold uppercase tracking-wider transition-theme ${props.isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Sunset
              </p>
              <p className={`text-lg font-bold transition-theme ${props.isDarkMode ? 'dark-primary' : 'light-primary'}`}>
                {astronomy.sunset || "--:--"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
