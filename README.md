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

// Postman Api collection
{
	"info": {
		"_postman_id": "0db2d66a-5f59-4fd3-a236-ec280ba5b48d",
		"name": "Travel Itinerary",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "12132974",
		"_collection_link": "https://www.postman.com/cloudy-desert-371878/workspace/travel-itinerary-management/collection/12132974-0db2d66a-5f59-4fd3-a236-ec280ba5b48d?action=share&source=collection_link&creator=12132974"
	},
	"item": [
		{
			"name": "registration",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "x-access-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjU0ZjE1MmNlZTY1Yzg2NTM0ZmEyZWQxIiwiZW1haWwiOiJpc3BhaGFucmFobWFuMTMzQGdtYWlsLmNvbSIsImlhdCI6MTY5OTY4MTU4MCwiZXhwIjoxNjk5Njg4NzgwfQ.Qg5kfHLni6_LUvWqVjfxAXV5vQym3oJ6DhoKUj3Vs98",
						"type": "text",
						"disabled": true
					}
				],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "first_name",
							"value": "Mahmud",
							"type": "text"
						},
						{
							"key": "last_name",
							"value": "Ispahan",
							"type": "text"
						},
						{
							"key": "email",
							"value": "ispahanrahman@gmail.com",
							"type": "text"
						},
						{
							"key": "password",
							"value": "12345678",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://localhost:4001/api/registration",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4001",
					"path": [
						"api",
						"registration"
					]
				}
			},
			"response": []
		},
		{
			"name": "welcome",
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "x-access-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjU0ZjE1MmNlZTY1Yzg2NTM0ZmEyZWQxIiwiZW1haWwiOiJpc3BhaGFucmFobWFuMTMzQGdtYWlsLmNvbSIsImlhdCI6MTY5OTY4MTU4MCwiZXhwIjoxNjk5Njg4NzgwfQ.Qg5kfHLni6_LUvWqVjfxAXV5vQym3oJ6DhoKUj3Vs98",
						"type": "text"
					}
				],
				"url": {
					"raw": "http://localhost:4001/api/welcome",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4001",
					"path": [
						"api",
						"welcome"
					]
				}
			},
			"response": []
		},
		{
			"name": "login",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "email",
							"value": "ispahanrahman133@gmail.com",
							"type": "text"
						},
						{
							"key": "password",
							"value": "12345678",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://localhost:4001/api/login",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4001",
					"path": [
						"api",
						"login"
					]
				}
			},
			"response": []
		},
		{
			"name": "itinerary",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "x-access-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjU0ZjY2ODAyMzE3M2EwYTYzNTJlNzM0IiwiZW1haWwiOiJpc3BhaGFucmFobWFuQGdtYWlsLmNvbSIsImlhdCI6MTY5OTcwMjQwMCwiZXhwIjoxNjk5NzA5NjAwfQ.FNCHMvgWoOi6AQ3X3uzWib5WbHrBXedthCqt1ZNKuGA",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\r\n  \"name\": \"Trip to California\",\r\n  \"dates\": [\"2023-10-10T00:00:00.000Z\", \"2023-10-17T00:00:00.000Z\"],\r\n  \"destinations\": [\r\n    {\"city\": \"San Francisco\", \"country\": \"USA\"},\r\n    {\"city\": \"Los Angeles\", \"country\": \"USA\"}\r\n  ],\r\n  \"activities\": [\r\n    {\"name\": \"Golden Gate Bridge Tour\", \"description\": \"Visit the iconic Golden Gate Bridge and learn about its history and construction.\"},\r\n    {\"name\": \"Hollywood Walk of Fame Tour\", \"description\": \"Stroll along the Hollywood Walk of Fame and see the stars of your favorite celebrities.\"}\r\n  ],\r\n  \"transportation_details\": [\r\n    {\"type\": \"Flight\", \"details\": \"Flight number XYZ123\"},\r\n    {\"type\": \"Rental Car\", \"details\": \"Pick up at the airport\"}\r\n  ],\r\n  \"accommodation_details\": [\r\n    {\"name\": \"Hotel Indigo San Francisco\", \"address\": \"1550 Van Ness Ave, San Francisco, CA 94109\", \"bookingConfirmation\": \"1234567890\"},\r\n    {\"name\": \"The Beverly Wilshire, A Four Seasons Hotel\", \"address\": \"9500 Wilshire Blvd, Beverly Hills, CA 90212\", \"bookingConfirmation\": \"9876543210\"}\r\n  ]\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:4001/api/itinerary",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4001",
					"path": [
						"api",
						"itinerary"
					]
				}
			},
			"response": []
		},
		{
			"name": "getItineraryById",
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "x-access-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjU0ZjE1MmNlZTY1Yzg2NTM0ZmEyZWQxIiwiZW1haWwiOiJpc3BhaGFucmFobWFuMTMzQGdtYWlsLmNvbSIsImlhdCI6MTY5OTY5Mjc2NSwiZXhwIjoxNjk5Njk5OTY1fQ.gSjK9zrYx8VSYfgOPdG0V0QHBdta_4lzrsi1yfk8RZ0",
						"type": "text"
					}
				],
				"url": {
					"raw": "http://localhost:4001/api/getItineraryById/654f5569005869ed9932cac9",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4001",
					"path": [
						"api",
						"getItineraryById",
						"654f5569005869ed9932cac9"
					]
				}
			},
			"response": []
		},
		{
			"name": "getUserItineraries",
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "x-access-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjU0ZjY2ODAyMzE3M2EwYTYzNTJlNzM0IiwiZW1haWwiOiJpc3BhaGFucmFobWFuQGdtYWlsLmNvbSIsImlhdCI6MTY5OTcwMjQwMCwiZXhwIjoxNjk5NzA5NjAwfQ.FNCHMvgWoOi6AQ3X3uzWib5WbHrBXedthCqt1ZNKuGA",
						"type": "text"
					}
				],
				"url": {
					"raw": "http://localhost:4001/api/getUserItineraries/654f668023173a0a6352e734",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4001",
					"path": [
						"api",
						"getUserItineraries",
						"654f668023173a0a6352e734"
					]
				}
			},
			"response": []
		},
		{
			"name": "deleteItineraryById",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		},
		{
			"name": "updateItineraryById",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		}
	],
	"event": [
		{
			"listen": "prerequest",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		},
		{
			"listen": "test",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		}
	],
	"variable": [
		{
			"key": "baseUrl",
			"value": "https://travel-itinerary-system.vercel.app/",
			"type": "string",
			"disabled": true
		}
	]
}