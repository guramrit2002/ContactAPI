# Contact CRUD API

The Contact CRUD API is a web service that allows you to manage contact information. It enables you to perform basic CRUD (Create, Read, Update, Delete) operations on contact records.

## Features

- **Create:** Add new contacts with details such as name, email, and phone number.
- **Read:** Retrieve a list of all contacts or fetch a specific contact by ID.
- **Update:** Modify the details of an existing contact.
- **Delete:** Remove a contact from the database.

## Prerequisites

Before you get started, make sure you have the following installed:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- MongoDB: [Download and Install MongoDB](https://www.mongodb.com/try/download/community)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/contact-crud-api.git
2. Navigate to the project directory:

   ```bash
   cd ContactAPI
   
3. Install project dependencies::

   ```bash
   npm install

3. Install project dependencies::

   ```bash
   npm install
4. Start the server:
   ```bash
   npm start

## API Endpoints

- **GET api/contacts:** Retrieve a list of all contacts.
- **GET api/contacts/:id:** Retrieve a specific contact by providing the contact's ID.
- **POST api/contacts:** Create a new contact by providing contact details in the request body.
- **PUT api/contacts/:id:** Update an existing contact by providing the contact's ID and the updated details in the request body.
- **DELETE api/contacts/:id:** Delete a contact by providing the contact's ID.

## Usage
You can interact with the API endpoints using tools like Postman or by sending HTTP requests using curl or your preferred API client.
