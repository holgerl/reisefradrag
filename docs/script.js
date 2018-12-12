const button = document.getElementById("beregn");

const output = document.getElementById("output");

const input = document.getElementById("input").innerHTML;

const fetchData = { 
    method: 'POST', 
    body: JSON.parse(input),
    headers: new Headers()
}

fetch("https://9f22opit6e.execute-api.us-east-2.amazonaws.com/default/reisefradrag", fetchData)
  .then(function() {
      output.innerHTML = JSON.stringify(response.json());
  });
