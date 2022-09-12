document.getElementById("toggle").onclick = function () {
  Switch();
};
document.getElementById("toggle2").onclick = function () {
  Switch2();
};

function Switch() {
  document.getElementById("toggle").innerHTML = "On";
  document.getElementById("toggle").style.color = "#5ACDFF";
}

function Switch2() {
  document.getElementById("toggle2").innerHTML = "On";
  document.getElementById("toggle2").style.color = "#5ACDFF";
}

document.getElementsByClassName("close").onclick = function () {
  Close();
};
function Close() {
  document.getElementsById("mySidenav").style.visablity = "hidden";
}
