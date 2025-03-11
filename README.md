# **Weather API**
A simple and efficient Weather API that provides weather information for specified cities with Redis caching to improve performance.

## Features
Get weather data for any city

Option to specify date (defaults to today)

Redis caching for improved performance

Rate limiting to prevent abuse

Proper error handling

Asynchronous request processing

## Prerequisites
Node.js

Redis database

Weather API key (from a third-party provider) here used API is Visual Crossing’s API

## API Endpoints
GET /weather
Fetches weather data for a specified city.
### Query Parameters:
city (required): The name of the city for which to fetch weather data

date (optional): The date for which to fetch weather data in format YYYY-MM-DD (defaults to today)

### Rate Limiting
The API includes rate limiting to prevent abuse:

100 requests per IP address per 15 minutes

Uses the express-rate-limit middleware

### Caching
Redis is used for caching weather data:
Weather data is cached by city name
Cache TTL is set to 10 minutes (600 seconds)
Cached results are returned without calling the external API

### Implementation Notes
The API uses the asyncHandler utility to wrap async route handlers and catch errors

The getTodayDate() function provides the current date in YYYY-MM-DD format when no date is specified

Redis caching improves performance by storing results for 10 minutes

The API makes external calls to a weather data provider using environment variables for the URL and API key

>[!NOTE]
># Project
>[Visit the Project](https://roadmap.sh/projects/weather-api-wrapper-service)
