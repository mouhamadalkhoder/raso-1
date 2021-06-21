$(document).ready(function () {
  $("#trB").click(function () {
    $(".english").hide();
    $(".turkish").show();
    $("#trB").hide();
    $("#enB").show();

    localStorage.setItem("lastname", "english");
    a = localStorage.getItem("lastname");
  });

  $("#enB").click(function () {
    $(".turkish").hide();
    $(".english").show();
    $("#enB").hide();
    $("#trB").show();
    localStorage.removeItem("lastname");

    localStorage.setItem("lastname", "english");
    a = localStorage.getItem("lastname");
  });
  a = localStorage.getItem("lastname");
  if (a == "turkish") {
    $(document).ready(function () {
      $(".english").hide();
      $(".turkish").show();
      $("#trB").hide();
      $("#enB").show();
    });
  } else {
    $(document).ready(function () {
      $(".english").show();
      $(".turkish").hide();
      $("#enB").hide();
      $("#trB").show();
    });
  }
});
