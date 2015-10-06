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


var $image1 = $('.thumb1');
var $video1 = $('.video1');
$(function() {
    $image1.on('click', function() 
    {
        $image1.hide();
        $video1.show();
        
    });
});

var $image2 = $('.thumb2');
var $video2 = $('.video2');
$(function() {
    $image2.on('click', function() 
    {
        $image2.hide();
        $video2.show();
        
    });
});

var $image3 = $('.thumb3');
var $video3 = $('.video3');
$(function() {
    $image3.on('click', function() 
    {
        $image3.hide();
        $video3.show();
        
    });
});

var $image4 = $('.thumb4');
var $video4 = $('.video4');
$(function() {
    $image4.on('click', function() 
    {
        $image4.hide();
        $video4.show();
        
    });
});

var $image5 = $('.thumb5');
var $video5 = $('.video5');
$(function() {
    $image5.on('click', function() 
    {
        $image5.hide();
        $video5.show();
        
    });
});

var $image6 = $('.thumb6');
var $video6 = $('.video6');
$(function() {
    $image6.on('click', function() 
    {
        $image6.hide();
        $video6.show();
        
    });
});

var $image7 = $('.thumb7');
var $video7 = $('.video7');
$(function() {
    $image7.on('click', function() 
    {
        $image7.hide();
        $video7.show();
        
    });
});

var $image8 = $('.thumb8');
var $video8 = $('.video8');
$(function() {
    $image8.on('click', function() 
    {
        $image8.hide();
        $video8.show();
        
    });
});

var $image9 = $('.thumb9');
var $video9 = $('.video9');
$(function() {
    $image9.on('click', function() 
    {
        $image9.hide();
        $video9.show();
        
    });
});

var $image10 = $('.thumb10');
var $video10 = $('.video10');
$(function() {
    $image10.on('click', function() 
    {
        $image10.hide();
        $video10.show();
        
    });
});