
setInterval(function () {
  var datevar = new Date()
  document.getElementById('hour').innerHTML = datevar.getHours() + ':';
  document.getElementById('minute').innerHTML = datevar.getMinutes() + ':';
  document.getElementById('second').innerHTML = datevar.getSeconds();
}, 1000)
