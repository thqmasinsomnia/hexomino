

function setup() {
    createCanvas(1500, 1500);
    frameRate(10);
}
var peiceNum = 0;   
function draw() {
    background(0)
    fill(255);
    rect(600, 600, 300, 300);
    
    
    if (mouseIsPressed) {

        if (peiceNum < 35) {
            peiceNum += 1;
        }
        else {
            peiceNum = 0;
        }
    } else {
        for (var y = 0; y < 6; y++) {
            for (var x = 0; x < 6; x++) {
                if (peices[peiceNum][x][y] != 0) {
                    fill(255, 0, 0);
                    rect(y * 100, x * 100, 100, 100);
                }
            }
        }
    }
}
/*


*/

