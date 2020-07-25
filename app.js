setInterval(function () {
  var dateVar = new Date()
  var displayHour = dateVar.getHours()
  var displayMinute = dateVar.getMinutes()
  var displaySecond = dateVar.getSeconds()

  if (displayHour === 0) {
    displayHour = '12'
  } else if (displayHour < 10) {
    displayHour = '0' + displayHour
  }
  else if (displayHour >= 12) {
    displayHour = displayHour - 12;
    document.getElementById('timeOfDay').innerHTML = ' PM'
  }

  if (displayMinute < 10) {
    displayMinute = '0' + displayMinute
  }

  if (displaySecond < 10) {
    displaySecond = '0' + displaySecond
  }

  document.getElementById('hour').innerHTML = displayHour + ':';
  document.getElementById('minute').innerHTML = displayMinute + ':';
  document.getElementById('second').innerHTML = displaySecond + ''

}, 1000)
