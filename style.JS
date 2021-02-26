var Body = {
  SetColor: function (Bodycolor, Fontcolor) {
    document.querySelector("body").style.backgroundColor = Bodycolor;
    document.querySelector("body").style.color = Fontcolor;
  },
};
var AllLinks = {
  SetColor: function (color) {
    var alist = document.querySelectorAll("a");
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = color;
      i = ++i;
    }
  },
};
function night_day_control(click) {
  if (click.value === "night") {
    Body.SetColor("black", "#dadada");
    click.value = "day";

    AllLinks.SetColor("powderblue");
  } else {
    Body.SetColor("#dadada", "black");
    click.value = "night";

    AllLinks.SetColor("blue");
  }
}
