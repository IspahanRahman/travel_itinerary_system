# travel_itinerary_system

Introduction
The Travel Itinerary Management System is a web application that allows users to create, manage their travel itineraries. It provides a user to sign up and login, creating itinerary, storing travel information, and organizing travel details.

Features
The Travel Itinerary Management System offers the following key features:

Create and manage itineraries: Easily create new itineraries and add destinations, activities, transportation, and accommodation details.

Populate with user information: Link each itinerary to a user, allowing for personalized travel planning and easy access to past itineraries.

Strict populate: Ensure data integrity by populating itinerary fields with user information, preventing inconsistencies.

Validate itinerary data: Implement validation rules to ensure itinerary dates contain exactly two dates.

StrictPopulateError handling: Handle StrictPopulateErrors gracefully, providing clear error messages and options to override strict population.

Installation
To install the Travel Itinerary Management System, follow these steps:

Prerequisites: Ensure you have Node.js and MongoDB installed on your system.

Clone the repository: Clone the project repository from GitHub using the following command:

Bash
git clone https://github.com/IspahanRahman/travel_itinerary_system.git

Install dependencies: Navigate into the project directory and install the project's dependencies using the following command:
Bash
npm install

Environment variables: Set the appropriate environment variables for database connection and other configurations.

Start the application: Run the application using the following command:

Bash
node index.js

Usage
Once the application is running, you can access it through your web browser at the specified port (e.g., http://localhost:3000). You can then create an account, log in, and start creating and managing your travel itineraries.

