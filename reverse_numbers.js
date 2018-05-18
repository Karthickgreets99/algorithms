//reverse 321

var reverse =  function(n) {
  var result = '';
  while (n) {
    result += (n % 10);
    result = result * 10;
    n = Math.floor(n / 10);
  }
  return result / 10;
}