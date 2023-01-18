let id = window.location.search.split("=")[1];
let user = users.filter((u) => u.id == id)[0];
console.log(user);
$(() => {
  $(".card").html(`<div class="banner">
        <img src="${user.avatar}" alt="${user.id}">
      </div>
      <h2 class="name">${user.first_name} ${user.last_name}</h2>
      <ul class="list-group">
        <li class="list-group-item">UID: ${user.id}</li>
        <li class="list-group-item">Email: ${user.email}</li>
      </ul>
      <a class="h4 text-center mt-4 text-decoration-none text-primary" href="../index.html">Back</a>`);
});
