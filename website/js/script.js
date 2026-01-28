const url =
  "https://student-api-proxy.onrender.com/api/open-library2.p.rapidapi.com/search_title/HarryPotter";
const options = {
  method: "GET",
  headers: {
    "X-API-Key":
      "689953799444f4cbe8faa3c384c56a3915078b3247b70b409cb011230b7cdbe5",
  },
};

fetch(url, options)
  .then((response) =>
    response.json().then((result) => {
      console.log(result.data); // Your API data
      console.log(`Cost: $${result.meta.cost}`);
      console.log(`Remaining: $${result.meta.remaining_budget}`);
    }),
  )
  .catch((error) => {
    console.log(error);
  });
