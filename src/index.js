var $ = require("jquery");
$('form').submit(function(event){
  event.preventDefault();
  $.ajax({
    url:'www.youtube.com',
    type:'POST',
    data: {
      email: 'rty@gmail.com'
    },
    success: function(response){
      console.log(response);
    }
  });
})
console.log($('form'));
console.log("It's Working");
