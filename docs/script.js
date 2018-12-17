console.log("script lastet")

const button = document.getElementById("beregn");

const output = document.getElementById("output");

const input = document.getElementById("input").innerHTML;

const headers = new Headers();
headers.append("Content-Type", "application/json");

const fetchData = { 
    method: 'POST', 
    body: input,
    mode: 'cors',
    headers: headers
}

//fetch("https://9f22opit6e.execute-api.us-east-2.amazonaws.com/default/reisefradrag", fetchData)
fetch("https://tvoc2vu9sj.execute-api.us-east-1.amazonaws.com/beta/reisefradrag", fetchData)
  .then(function(response) {
    return response.json()
  })
  .then(function(data) {
    console.log(data);
    output.innerHTML = JSON.stringify(data);
  })
  .catch(function(e) {
    console.log(e);
  });
