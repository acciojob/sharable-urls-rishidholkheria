// your code here

const submitBtn = document.getElementById('submitBtn')
submitBtn.addEventListener('click', () => {
	event.preventDefault();
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
})



