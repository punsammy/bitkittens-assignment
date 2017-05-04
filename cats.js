$(function(){

  $('.summon-cats').on('click', function() {
    // console.log("button works")
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'json'
    }).done(function(data) {
      var catBox = data['cats'];
      for (var i = 0; i < catBox.length; i++) {
        cat = catBox[i]
        id = '#cat' + (i + 1)

        $('<img>').attr('src', cat.photo ).appendTo(id)
      }

    });

  });

});

// var catContainer = $('<div>');
//
// var catPicSrc = 'https://s3.amazonaws.com/bitmakerhq/resources/web-development/bitkittens/' + cat.address;
// $('<img>').attr('src', catPicSrc).appendTo(catContainer);
//
// // $('<h2>').html(cat.photo).appendTo(catContainer);
//
// console.log('Clicked on Cat link')

// Attempt at doing it in one line
// $('img').attr('src', 'https://s3.amazonaws.com/bitmakerhq/resources/web-development/bitkittens/20160817_141210.jpeg').appendTo($('<body>').('div'))
// One way of doing it. Not most efficient.
// $('<img>').attr('src', 'https://s3.amazonaws.com/bitmakerhq/resources/web-development/bitkittens/moxie.jpg').appendTo('#cat2')
// $('<img>').attr('src', 'https://s3.amazonaws.com/bitmakerhq/resources/web-development/bitkittens/Bagheera_Mufasa.jpg').appendTo('#cat3')
// $('<img>').attr('src', 'https://s3.amazonaws.com/bitmakerhq/resources/web-development/bitkittens/20160817_141210.jpeg').appendTo(id);
