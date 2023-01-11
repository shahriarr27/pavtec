$(document).ready(function () {
  var aboutUsBtn = $('#aboutUsBtn');
  var aboutUsBtnMbl = $('#aboutUsBtnMbl');
  var aboutUs = $('#aboutUs');
  aboutUsBtn.on('click', function () {
    aboutUs.toggleClass('show-content');
  });
  var closeBtn = $('#closeBtn');
  closeBtn.on('click', function () {
    aboutUs.removeClass('show-content');
  });
  aboutUsBtnMbl.on('click', function () {
    aboutUs.toggleClass('show-content');
  });

  var buyModal = $('#modal');

  $("form").submit(function(event) {
    event.preventDefault();
    var submitButton = $("#buyBtn");
    submitButton.html("<span class='spinner-border spinner-border-sm' role='status' aria-hidden='true'></span> sending...");
    setTimeout(function() {
      $.ajax({
        type: "POST",
        url: "submit.php",
        data: $("form").serialize(),
        success: function(response) {
          submitButton.html("out of stock");
          submitButton.prop("disabled", true);

          //pop up modal
          buyModal.addClass('show');
        }
      });
    }, 1000);
  });

  //close the modal
  $('#modal-close-btn').on('click', function(){
    buyModal.removeClass('show');
  });
});