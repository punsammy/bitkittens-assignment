$(function(){

  $('.summon-cats').on('click', function() {
    console.log("button works")
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      // dataType: 'json'
    }).done(function() {
      $('<img>').attr('src', 'https://s3.amazonaws.com/bitmakerhq/resources/web-development/bitkittens/20160817_141210.jpeg').appendTo('#cat1')
      $('<img>').attr('src', 'https://s3.amazonaws.com/bitmakerhq/resources/web-development/bitkittens/moxie.jpg').appendTo('#cat2')
      $('<img>').attr('src', 'https://s3.amazonaws.com/bitmakerhq/resources/web-development/bitkittens/Bagheera_Mufasa.jpg').appendTo('#cat3')

    });
  });


});
