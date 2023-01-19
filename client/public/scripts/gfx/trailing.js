function solve(data, k) {
  if (k == null) k = 1;

  var size = data.length;
  var last = size - 4;

  var path = "M" + [data[0], data[1]];

  for (var i = 0; i < size - 2; i += 2) {
    var x0 = i ? data[i - 2] : data[0];
    var y0 = i ? data[i - 1] : data[1];

    var x1 = data[i + 0];
    var y1 = data[i + 1];

    var x2 = data[i + 2];
    var y2 = data[i + 3];

    var x3 = i !== last ? data[i + 4] : x2;
    var y3 = i !== last ? data[i + 5] : y2;

    var cp1x = x1 + ((x2 - x0) / 6) * k;
    var cp1y = y1 + ((y2 - y0) / 6) * k;

    var cp2x = x2 - ((x3 - x1) / 6) * k;
    var cp2y = y2 - ((y3 - y1) / 6) * k;

    path += "C" + [cp1x, cp1y, cp2x, cp2y, x2, y2];
  }

  return path;
}

var p1 = document.getElementById("path"),
  p2 = document.getElementById("path2"),
  np = 25,
  M = "M",
  i = 0,
  ptdata = [];

np = 75;

document.addEventListener("mousemove", function () {
  move(event);
});
document.addEventListener("touchmove", function () {
  move(event.targetTouches[0]);
});

function move(e) {
  i++;
  // ptdata.push([e.pageX,e.pageY]);
  ptdata.push(e.pageX, e.pageY);
  if (i > np) {
    removeD();
  }
  pUpdate();
}

var ticker = new com.greensock.Ticker(45);
ticker.addEventListener("tick", removeD);

function removeD() {
  if (i > 1) {
    ptdata.splice(0, 2);
    // ptdata.shift();
    i--;
    pUpdate();
  }
}
function pUpdate() {
  p2.setAttribute("stroke-width", (i / np) * 4.5);
  // var pathD = M+ptdata.join(" ");
  var pathD = solve(ptdata, 0.9);
  p1.setAttribute("d", pathD);
  p2.setAttribute("d", pathD);
}

// function setLLenght(X){ np=X.value };
