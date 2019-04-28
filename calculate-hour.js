var today = new Date();

var month = ("0" + (today.getMonth() + 1)).slice(-2);

var date = ("0" + today.getDate()).slice(-2);

var hour = today.getHours();

if (hour < 5) {
  hour = "1-Matutinum.html"
}
else if (hour < 6) {
  hour = "2-Laudes.html"
}
else if (hour < 9) {
  hour = "3-Prima.html"
}
else if (hour < 12) {
  hour = "4-Tertia.html"
}
else if (hour < 15) {
  hour = "5-Sexta.html"
}
else if (hour < 18) {
  hour = "6-Nona.html"
}
else if (hour < 21) {
  hour = "7-Vespera.html"
}
else {
  hour = "8-Completorium.html"
}

var hour_link = "Text/" + month + "-" + date + "-2019-" + hour

function brevFunction() {
  window.location.href = hour_link;
};
