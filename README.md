# Weather Forecast Web Application
## Hosted Link:- https://weekly-test-1-seven.vercel.app/

## Overview
The Weather App is a simple web application that fetches weather data using an API based on user input. 
Users can enter a location, and the app provides the current weather details along with hourly and 3-day forecasts.

## Usage
- Enter Location or Coordinates:
Use the input field with the id locationInput to enter a location.
- Get Current Weather:
Click the "Get Weather" button (id: searchButton) to fetch and display the current weather for the specified location.
- Current Weather Section:
View the current weather details, including temperature, humidity, wind speed, and conditions in the "Current Weather" section.


## Prerequisites
- Ensure you have an internet connection to fetch weather data from the API.

## Code Structure
- HTML: The structure of the web page is defined in index.html.
- CSS: Styling is applied through the style.css file.
- JavaScript: The functionality and API interactions are implemented in index.js.

## API Key
To fetch weather data, you might need an API key. Replace the placeholder in the index.js file with your actual API key.

## Technologies Used
- HTML5: Structure and layout of the web page.
- CSS3: Styling for a clean and user-friendly interface.
- JavaScript (ES6+): Fetching data from the API and manipulating the DOM.
- Weather API: Utilizing a weather API for real-time weather data.
  
## Getting Started

Before you start using this application, you need to have a few things ready:

- **RapidAPI Key**: To access weather data, you'll need to obtain an API key
- from RapidAPI. Replace the `apiKey` variable in the JavaScript code with your own key.

## Installation

1. **Clone the Repository**: Clone this repository to your local machine using the following command:

    ```bash
    git clone <repository_url>
    ```

2. **Open the Application**: Simply open the `index.html` file in your web browser to use the application.

## How to Use

Follow these steps to get weather information for your desired location:

1. **Enter Location**: Type the location you want to check the weather for in the provided input field.

2. **Click "Search"**: Press the "Search" button to initiate the weather data retrieval.

3. **View Weather Information**: The application will fetch and display the current weather data for the specified location, which includes:

    - Temperature
    - Humidity
    - Wind Speed
    - Weather Conditions


## Attribution

This application makes use of the WeatherAPI service provided by RapidAPI.
Please ensure you comply with RapidAPI's terms and conditions and give proper attribution when using their service.
