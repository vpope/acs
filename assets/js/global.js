$('.carousel').carousel({
  interval: 3000
});

(function () {
  var contactInProgress = false;

  $('.contact-form').submit(function () {
    $('.contact-form [type="submit"]').hide();

    $.ajax({
      type: "POST",
      url: "/api/email",
      // The key needs to match your method's input parameter (case-sensitive).
      data: JSON.stringify({
        name: $('[name="name"]').val(),
        message: $('[name="message"]').val(),
        email: $('[name="email"]').val(),
        phone: $('[name="phone"]').val()
      }),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function(data){
        $('.contact-form [type="submit"]').show();
        alert('Sent');
        $('#myModal').modal('hide');
      },
      failure: function(errMsg) {
        $('.contact-form [type="submit"]').show();
        alert('Did not send');
        $('#myModal').modal('hide');
      }
    });
    return false;
  });
}());


