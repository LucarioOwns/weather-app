let cValue = 0;



$('#button').on('click', function(){
  cValue = parseInt($("#cValue").val());
  console.log(cValue);

  let fTemp = (cValue * 9/5) + 32;
  console.log(fTemp);


  if(fTemp < 32) {
    $('body').css('background-image', 'url("images/winter.jpg")');
    $('#fValue').html(fTemp);
    console.log(fTemp);
  } else if (fTemp >= 33 && fTemp < 54) {
    $('body').css('background-image', 'url("images/Fall.jpg")');
    $('#fValue').html(fTemp);
    console.log(fTemp);
  } else if ( fTemp >= 53 && fTemp  < 69){
    $('body').css('background-image', 'url("images/Spring.jpg")');
    $('#fValue').html(fTemp);
    console.log(fTemp);
  } else if (fTemp >= 69 && fTemp < 90) {
    $('body').css('background-image', 'url("images/Summer.jpeg")');
    $('#fValue').html(fTemp);
    console.log(fTemp);
  }


});



// $('#button').on('click', function(){
//   let degC = $('#cValue').val();
//   let degF = (degC * (9 / 5)) + 32; 
//    console.log(convert);
//    $("#fValue").html(convert);

















// let temperature = $('');

// $('#temperature').on('input', function(){
 
    // temperature = $("#temperature").val();
    // temperature = parseInt($("#temperature").val());
    // console.log(temperature);

    // let cTemp = temperature = parseInt($("#temperature").val());
    // let fTemp = cTemp * (9 / 5) + 32;
    // console.log(fTemp);

  // temperature = $("#temperature").val();
  // temperature = parseInt($("#temperature").val());
  // // console.log(temperature);

  // let cTemp = temperature = parseInt($("#temperature").val());
  // let fTemp = (cTemp * (9/5)) + 32;
  // console.log(fTemp);
  

  // convertToFahrenheit(temperature);
  // if(temperature > 20) {
  //   console.log(temperature);
  // }
// });


// function convertToFahrenheit(celcius) {
//   return (celcius * 9/5) +32;
// }

// function convertToCelcius(fahrenheit) {
//   return ((fahrenheit - 32) * (5/9));
// }