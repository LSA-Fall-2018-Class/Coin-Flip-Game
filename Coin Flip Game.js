
  var flipButton = document.getElementById("flipButton");

  flipButton.addEventListener('click', function(e))
  {
    flipCoin();
  });

    function flipCoin()
    {

      var flipValue = Math.floor((Math.random() * 2) + 1);

alert(flipValue);

  var coin = document.getElementById('coin');
  coin.innerHTML = flipValue;

  var numberGuessed = document.getElementById("numberGuess").value;

  if (flipValue == numberGuessed)
  {
    alert("Correct!");

  } else {

    alert("Wrong...");
  }
