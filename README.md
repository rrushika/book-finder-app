# Book Finder App
A simple frontend-only web app to search for books using the Open Library API. Users can search by title and view details such as the cover image, author(s), and first published year.

# Live Demo
You can host this using GitHub Pages, Netlify, or Vercel. (Add your deployed link here when available)

# Tech Used
HTML
CSS
Bootstrap 5
JavaScript (Vanilla)
Open Library API (https://openlibrary.org/developers/api)

# Features
Search books by title
Display cover image, title, authors, and first publish year
Mobile responsive using Bootstrap 5
Works using only frontend code — no backend needed

# Folder Structure
bash
Copy
Edit
book-finder-app/
├── index.html       # Main HTML structure
├── style.css        # Custom styles
└── script.js        # JavaScript logic for fetching and displaying data

# Screenshot
(Add a screenshot of the app here once available)

# How It Works
User enters a book title in the input field.
The app sends a request to the Open Library Search API.
It processes the results and displays a list of books.

Example API call:
pgsql
Copy
Edit
https://openlibrary.org/search.json?title=harry+potter

# Setup Instructions
Clone the repository

bash
Copy
Edit
git clone https://github.com/your-username/book-finder-app.git
Open the folder

Open index.html in a browser to run it locally

# API Reference
Open Library Search API
