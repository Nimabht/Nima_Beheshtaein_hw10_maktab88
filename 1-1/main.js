$(() => {
  $("#select").on("change", function () {
    $("#request-wrapper").css("display", "none");
    $("#response-wrapper").css("display", "none");
    if ($("#select").val() === "get") {
      $("#response-wrapper").css("display", "block");
    }
    if ($("#select").val() === "post") {
      $("#response-wrapper").css("display", "block");
      $("#request-wrapper").css("display", "block");
    }
  });
  $("form").submit((e) => {
    e.preventDefault();
    let url = $("#url-input").val();
    let method = $("#select").val();
    if (method === "get") {
      $.ajax({
        url,
        method,
      })
        .fail(function (_res, _textStatus, xhr) {
          alert(xhr.status);
        })
        .done(function (res, _textStatus, xhr) {
          $("#response").val(JSON.stringify(res, null, 4));
          $("#status").html(
            `PlainText: ${this.dataTypes}<br>Status ${xhr.status}`
          );
        });
    }
    if (method === "post") {
      try {
        $.ajax({
          url,
          method,
          data: JSON.parse($("#request").val()),
        })
          .fail(function (_res, _textStatus, xhr) {
            alert("page not found!");
          })
          .done(function (res, _textStatus, xhr) {
            $("#response").val(JSON.stringify(res, null, 4));
            $("#status").html(
              `PlainText: ${this.dataTypes}<br>Status ${xhr.status}`
            );
          });
      } catch (err) {
        alert(err);
      }
    }
  });
});
