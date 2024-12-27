$(document).ready(function(){
  $("#firstNameSearch").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      var firstName = $(this).find(".first-name").text().toLowerCase();
      $(this).toggle(firstName.indexOf(value) > -1);
    });
  });

  $("#lastNameSearch").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      var lastName = $(this).find(".last-name").text().toLowerCase();
      $(this).toggle(lastName.indexOf(value) > -1);
    });
  });

  $("#emailSearch").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      var email = $(this).find(".email").text().toLowerCase();
      $(this).toggle(email.indexOf(value) > -1);
    });
  });
});
