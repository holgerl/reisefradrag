console.log("script lastet")

const button = document.getElementById("beregn");

const output = document.getElementById("output");

const input = document.getElementById("input").innerHTML;

const fetchData = { 
    method: 'POST', 
    body: input,
    mode: 'no-cors',
    headers: new Headers()
}

fetch("https://9f22opit6e.execute-api.us-east-2.amazonaws.com/default/reisefradrag", fetchData)
  .then(function(response) {
    console.log(response);
    output.innerHTML = JSON.stringify(response.json());
  })
  .catch(function() {
    console.log(e);
  });
