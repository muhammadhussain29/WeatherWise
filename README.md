# WeatherWise

WeatherWise is a React-based weather application that allows users to view current weather conditions and forecasts for their city. The app supports searching by city name and uses geolocation to provide weather data based on the user's current location. WeatherWise also features a toggleable dark mode for enhanced user experience.

## Features
- **Real-time Weather Updates**: Displays current weather conditions and a weekly forecast.
- **City Search**: Search for weather details by entering a city name.
- **Geolocation Support**: Fetch weather data based on the user's location.
- **Dark Mode**: Toggle between light and dark themes.
- **Debounced Search**: Implements a delay to reduce API calls while searching for cities.
- **Weather Icons**: Displays dynamic icons based on weather conditions.

## Technologies Used
- **React**: Frontend framework for building the UI.
- **Axios**: To make API requests.
- **OpenCage API**: Converts latitude and longitude to city names.
- **Yahoo Weather API**: Provides weather data.
- **Tailwind CSS**: For responsive and modern styling.
- **use-debounce**: To optimize search functionality.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weatherwise.git
   ```
2. Navigate to the project directory:
   ```bash
   cd weatherwise
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add your API keys:
   ```env
   REACT_APP_OPENCAGE_API_KEY=your_opencage_api_key
   REACT_APP_YAHOO_WEATHER_API_KEY=your_rapidapi_key
   ```
5. Start the development server:
   ```bash
   npm start
   ```

## Usage
1. Open the app in your browser at `http://localhost:3000`.
2. Use the search bar to look for a city or allow the app to access your location for weather updates.
3. Toggle the dark mode button to switch themes.

## Project Structure
- **`src`**
  - **`components`**: Contains reusable components like `Navbar`, `Body`, `Main`, `Weekly`, `Loader`, etc.
  - **`assets`**: Stores images for weather icons.
  - **`App.js`**: Main application file.

## API Integration
1. **OpenCage API**: Used for converting latitude and longitude to a city name.
   - Endpoint: `https://api.opencagedata.com/geocode/v1/json`
   - Requires an API key.

2. **Yahoo Weather API**: Provides weather data for a given city.
   - Endpoint: `https://yahoo-weather5.p.rapidapi.com/weather`
   - Requires an API key and uses RapidAPI for authentication.

## Features Breakdown
### Navbar
- Search for a city and view autocomplete suggestions.
- Toggle between light and dark modes.

### Main Weather Display
- Shows the current weather details such as temperature, atmosphere, and wind.
- Displays appropriate weather icons based on the condition.

### Weekly Forecast
- Displays a 7-day weather forecast with key details like temperature and condition.

### Geolocation Support
- Automatically detects the user’s location using the browser’s geolocation API and fetches weather data for that location.

## License
This project is licensed under the MIT License.

## Author
- [Muhammad Hussain Mughal](https://www.linkedin.com/in/muhammad-hussain-mughal-213069248/)

## Acknowledgements
- OpenCage API
- Yahoo Weather API
- Tailwind CSS documentation
- React documentation

Feel free to contribute to the project by submitting issues or pull requests!

