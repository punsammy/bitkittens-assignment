$(function(){

  $('.summon-cats').on('click', function() {
    console.log("button works")
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET'
    });
  });


});
