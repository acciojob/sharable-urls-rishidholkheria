// your code here

const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page reload

  const name = document.getElementById("name").value.trim();
  const year = document.getElementById("year").value.trim();
  const baseUrl = "https://localhost:8080/";
  const params = new URLSearchParams();

  if (name !== "") {
    params.append("name", name);
  }
  if (year !== "") {
    params.append("year", year);
  }

  const fullUrl = params.toString() ? baseUrl + "?" + params.toString() : baseUrl;
  document.getElementById("url").textContent = fullUrl;
});


