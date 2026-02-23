const booksList = document.querySelector(".list-group");
const searchInput = document.querySelector("#search-box");

const loadBooksBySearch = async (search_title) => {
  const url = `https://student-api-proxy.onrender.com/api/open-library2.p.rapidapi.com/search_title/${search_title}&limit=1`;
  const options = {
    method: "GET",
    headers: {
      "X-API-Key":
        "689953799444f4cbe8faa3c384c56a3915078b3247b70b409cb011230b7cdbe5",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const data = result.data; //getSampleBooks();
  const books = data.books;

  books.forEach((book) => {
    const listItem = `<li class="list-group-item">
              <div class="books.title">${book.title}
              </div>
            </li>`;
    booksList.insertAdjacentHTML("beforeend", listItem);
    // console.log(book.title);
  });
};
booksList.innerHTML = "";

searchInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    const searchTerm = searchInput.value.trim();
    loadBooksBySearch(searchTerm);
  }
});
