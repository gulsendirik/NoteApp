# Note Management System

## Getting Started

## Installation

Clone the repository 

    git clone git@github.com:gulsendirik/NoteApp.git

Switch to the folder

    cd backend 

Install all the dependencies using composer 

    composer install

Copy the example env file and make the required configuration changes in the .env file

    cp .env.example .env

Run the database migrations (Set the database connection in .env before migrating)

    php artisan migrate

Start the local development server

    php artisan serve

You can now access the server at http://localhost:8000


Switch to the folder

    cd frontend

Installation

    npm install

To start server

    npm start

To visit app

    localhost:3000