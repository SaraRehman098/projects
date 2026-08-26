function calculateTip() {
  total_bill = +document.getElementById("tb1").value;
  tip_percentage = +document.getElementById("tp1").value;
  no_of_people = +document.getElementById("np").value;
  res = (total_bill + (total_bill * tip_percentage) / 100) / no_of_people;
  document.getElementById("res").innerHTML = "your bill is " + res;
}
