

function rotate(matrix) {
    const n = matrix.length;
    const x = Math.floor(n / 2);
    const y = n - 1;
    for (let i = 0; i < x; i++) {
        for (let j = i; j < y - i; j++) {
            k = matrix[i][j];
            matrix[i][j] = matrix[y - j][i];
            matrix[y - j][i] = matrix[y - i][y - j];
            matrix[y - i][y - j] = matrix[j][y - i]
            matrix[j][y - i] = k
        }
    }
}
/* https://code.likeagirl.io/rotate-an-2d-matrix-90-degree-clockwise-without-create-another-array-49209ea8b6e6 */

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

                    if (peiceColor[peiceNum][1] == 'G') {
                        fill(0, 255, 0);
                        rect(y * 100, x * 100, 100, 100);
                    } else if (peiceColor[peiceNum][1] == 'R') {
                        fill(255, 0, 0);
                        rect(y * 100, x * 100, 100, 100);
                    } else if (peiceColor[peiceNum][1] == 'B') {
                        fill(0, 0, 255);
                        rect(y * 100, x * 100, 100, 100);
                    } else {
                        fill(255, 255, 0);
                        rect(y * 100, x * 100, 100, 100);
                    }
                   
                }
            }
        }
    }
}


/*
function draw() {
    background(0);
    for (var y = 0; y < 15; y++) {
        for (var x = 0; x < 15; x++) {
            if (board[x][y] == 'X') {
                fill(255);
                rect(y * 100, x * 100, 100, 100);
            }
            else if (board[x][y] != 0) {
                fill(255,0,0);
                rect(y * 100, x * 100, 100, 100);
            }
        }
    }
}


hex();
*/

//This function is to add a selected peice to the board
function addPeice(peiceNum) {
    for (var y = 0; y < 15; y++) {
        for (var x = 0; x < 15; x++) {
            if (peices[peiceNum][y][x] != 0) {

            }
                
        }
    }

}


/*
function hex() {
    const peiceLoc = [];
    var peiceSel = 0;
    var done = false;
      while (!done) {

       


          for (var y = 0; y < 15; y++) {
              for (var x = 0; x < 15; x++) {

              }
          }





        done = true;
        for (var y = 0; y < 15; y++) {
            for (var x = 0; x < 15; x++) {
                if (board[x][y] == 0) {
                    done = false;
                }
            }
        }


    }

   
}
*/