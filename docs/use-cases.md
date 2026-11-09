 Use Cases

1. Introduction

This document describes the main interactions between users and the Maintenance Request Management System.

 2. Actors

The application has three types of users:

- User: Submits maintenance requests and tracks their status.
- Technician: Views and manages maintenance requests.
- Administrator: Manages users and request categories.

 3. Main Use Cases

 User
- Register an account.
- Log in and log out.
- Create a maintenance request.
- View submitted requests.
- Check the status of a request.

 Technician
- Log in.
- View maintenance requests.
- Update request status.
- Add observations to a request.

 Administrator
- Log in.
- View and manage user accounts.
- Manage request categories.

 4. Typical Application Flow

1. A user logs into the application.
2. The user creates a maintenance request.
3. The request is saved in the database with the initial status.
4. A technician views the submitted request.
5. The technician updates its status as the work progresses.
6. The user can check the latest status of the request.
