# System Architecture

## 1. Overview

The application will use a client-server architecture, consisting of a frontend, a backend, and a database.

## 2. Frontend

The frontend will be developed using React and TypeScript.

It will provide the user interface and allow users to interact with the application.

## 3. Backend

The backend will be developed using C# and ASP.NET Core Web API.

It will handle application logic, user authentication, maintenance requests, and communication with the database.

## 4. Database

MySQL will be used to store application data, including user accounts and maintenance requests.

Entity Framework Core will be used to access and manage database information.

## 5. Communication

The frontend and backend will communicate through REST API endpoints using HTTP requests and responses.

## 6. Architecture Flow

The general communication flow will be:

1. The user interacts with the frontend.
2. The frontend sends a request to the backend.
3. The backend processes the request.
4. The backend communicates with the database when necessary.
5. The result is returned to the frontend.
