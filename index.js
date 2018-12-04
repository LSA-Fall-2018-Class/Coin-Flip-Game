var flipButton = document.getElementById("flipButton");

  flipButton.addEventListener('click', function(e)
  {
    flipCoin();
  });

function flipCoin()
{
      // flip the coin, show the user the value in an alert
      var flipValue = Math.floor((Math.random() * 2) + 1);
      alert("Coin flip value was " + flipValue);

      // set the coin are on the screen to the number flipped
      var coin = document.getElementById('coin');
      coin.innerHTML = flipValue;

      // retrieve the number guessed by the user
      var numberGuessed = document.getElementById("numberGuess").value;

      // Check if the user guessed correctly
      if (flipValue == numberGuessed)
      {
        alert("Correct!");
      } else
      {
        alert("Wrong...");
      }

}   // end function flipCoin
