$(() => {
  $("form").submit((e) => {
    e.preventDefault();
    let firstnameValue = $("#firstname").val();
    let lastnameValue = $("#lastname").val();
    let emailValue = $("#email").val();
    let passwordValue = $("#password").val();
    $("#firstnameHelp").html(validator(firstnameValue, "firstname"));
    $("#lastnameHelp").html(validator(lastnameValue, "lastname"));
    $("#emailHelp").html(validator(emailValue, "email"));
    $("#passwordHelp").html(validator(passwordValue, "password"));
  });
});
