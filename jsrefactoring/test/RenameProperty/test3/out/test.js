function Point1D(xCoord) {
  this.x = xCoord;
}

function Point2D(xCoord, yCoord) {
  this.x /* -> x */ = xCoord;
  this.y = yCoord;
}

var d = document;
var x = d.getElementById('xIn').value;
var y = d.getElementById('yIn').value;
if(y !== undefined)
    p = new Point2D(parseFloat(x),
                    parseFloat(y));
else
    p = new Point1D(parseFloat(x));
var n = p.x;