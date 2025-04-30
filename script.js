function searchBooks() {
  const query = document.getElementById("searchInput").value.trim();
  const resultsContainer = document.getElementById("bookResults");
  resultsContainer.innerHTML = "";

  if (!query) return;

  fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(query)}`)
    .then(response => response.json())
    .then(data => {
      if (!data.docs.length) {
        resultsContainer.innerHTML = `<p class="text-center text-danger">No books found.</p>`;
        return;
      }

      data.docs.slice(0, 12).forEach(book => {
        const coverId = book.cover_i;
        const coverUrl = coverId
          ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
          : 'https://via.placeholder.com/150x250?text=No+Cover';

        const title = book.title || "N/A";
        const author = book.author_name ? book.author_name.join(", ") : "Unknown Author";
        const year = book.first_publish_year || "N/A";

        const card = `
          <div class="col-md-3">
            <div class="card h-100 shadow-sm">
              <img src="${coverUrl}" class="card-img-top" alt="Book Cover">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">${title}</h5>
                <p class="card-text mb-1"><strong>Author:</strong> ${author}</p>
                <p class="card-text"><strong>Published:</strong> ${year}</p>
              </div>
            </div>
          </div>
        `;
        resultsContainer.innerHTML += card;
      });
    })
    .catch(error => {
      resultsContainer.innerHTML = `<p class="text-center text-danger">Error fetching data.</p>`;
      console.error("Error:", error);
    });
}
