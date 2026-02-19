const randomButton = document.querySelector("#random-btn");
const listGroup = document.querySelector(".list-group");

const loadBooksByTitle = async (bookTitle) => {
  const url = `https://student-api-proxy.onrender.com/api/open-library2.p.rapidapi.com/search_title/${bookTitle}&limit=1`;
  const options = {
    method: "GET",
    headers: {
      "X-API-Key":
        "689953799444f4cbe8faa3c384c56a3915078b3247b70b409cb011230b7cdbe5",
    },
  };

  const response = await fech(url, options);
  const result = await response.json();
  const data = getSampleBooks(); //result.data;
  const books = data.books;
  console.log(books);

  listGroup.innerHTML = "";

  books.forEach((book) => {
    const listItem = `<li class="list-group-item">${book.title} - ${book.author}</li>`;
    listGroup.insertAdjacentHTML("beforeend", listItem);
  });

  console.log(books);
};

loadBooksByTitle("sample");

randomButton.addEventListener("click", loadBooksByTitle);
randomButton.books = "Harry Potter";
