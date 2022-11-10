(async function () {
  var fetcc = await fetch("http://localhost:5001/users");
  var jsson = await fetcc.json();
  render(jsson);
})();
var count = 1;
function render(arg) {
  arg.map((e) => {
    var newElement = document.createElement("tr");
    newElement.innerHTML = ` <td>1</td>
        <td>${e.userName}</td>
        <td>${e.score}</td>
        <td><button class="btn btn-primary">EDIT</button></td>
        <td><button class="btn btn-danger">Delete</button></td>`;
    $("tbody").append(newElement);
  });
}
$("#postBtn").addEventListener("click", function () {
  count++;
  var a = $("#userName").value.trim();
  var b = $("#userScore").value.trim();
  if (a.length == 0 || b.length == 0) {
    alert("iltimos malumot toldiring!");
  } else {
    fetch("http://localhost:5001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: count, userName: a, score: b }),
    });
  }
});
