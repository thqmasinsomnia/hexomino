

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
var filled = false;
var currPeice = 0;
var openx = 0;
var openy = 0;
var rotateCount = 0;

var piecesplaces = [];
var canBePlaced = true;

/*
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
*/


hex();

function draw() {
    background(0);
    for (var y = 0; y < 15; y++) {
        for (var x = 0; x < 15; x++) {
            if (board[x][y] == 'X') {
                fill(255);
                rect(y * 100, x * 100, 100, 100);
            }
            else if (board[x][y] != 0) {

                    if (peiceColor[board[x][y]][1] == 'G') {
                        fill(0, 255, 0);
                        rect(y * 100, x * 100, 100, 100);
                    } else if (peiceColor[board[x][y]][1] == 'R') {
                        fill(255, 0, 0);
                        rect(y * 100, x * 100, 100, 100);
                    } else if (peiceColor[board[x][y]][1] == 'B') {
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



/*
//This function is to add a selected peice to the board
function addPeice(peiceNum)
{
    const peiceLoc = [];

    for (var y = 0; y < 6; y++) {
        for (var x = 0; x < 6; x++) {
            if (peices[peiceNum][y][x] != 0) {
                peiceLoc.push([x, y]);
            }
        }
    }



    



    for (var y = 0; y < 15; y++) {
        for (var x = 0; x < 15; x++) {
            if ( != 0) {

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

//
//
//
//

function hex() {

    
    console.log("hello")
  
       
    while (!filled) {
        console.log(currPeice);
 
        findNextSpot(openx, openy);

        rotateCount = 0;
        canBePlaced = false;


        while (rotateCount < 3 && !canBePlaced) {

            getPeiceLocations(currPeice);
            checkIfPeiceCanBePlaced(canBePlaced, currPeiceLoc);
        
            if (canBePlaced) {
                placePeice(currPeiceLoc, currPeice);
            }
            else{
                rotate(peices[currPeice]);
                rotateCount += 1;
            }
        }
        
        if (canBePlaced) {
            currPeice = Math.floor(Math.random() * 35)  
            
            
        }
        else {

        
            clearBoardofPeice(currPeice)
            currPeice = Math.floor(Math.random() * 35)  

       
            
        }

        boardFilled(filled);

    }
 
}
    


   

   




function findNextSpot(openx, openy) {
    var found = false;

    while (!found) { 
        if (board[openx][openy] == 0) {
            found = true;
        }
        else
        {
            if (openx < 15) {
                openx += 1;
            }
            if (openx == 15) {
                openx = 0;
                openy += 1;
            }

        }
    }

}

function boardFilled(filled) {

    filled = true;
    for (var i = 0; i < 15; i++) {
        for (var j = 0; j < 15; j++) {
            if (board[i][j] == 0) {
                filled = false;
            }
        }
    }



}

function getPeiceLocations() {
    var count = 0;
    for (var y = 0; y < 6; y++) {
        for (var x = 0; x < 6; x++) {
            if (peices[currPeice][y][x] != 0) {
                currPeiceLoc[count][0] = x;
                currPeiceLoc[count][1] = y;
               
                count++;
                

            }
        }
    }
}

function clearCurrPeiceLoc(currPeiceLoc) {

    currPeiceLoc.pop();
    currPeiceLoc.pop();
    currPeiceLoc.pop();
    currPeiceLoc.pop();
    currPeiceLoc.pop();
    currPeiceLoc.pop();

}

function placePeice(currPeiceLoc, currPeice) {

    for (var i = 0; i < 6; i++) {
        board[currPeiceLoc[i][1] + openy][currPeiceLoc[i][0] + openx] = currPeice + 1;
    }

}

function checkIfPeiceCanBePlaced() {

    canBePlaced = true;
  

    for (var i = 0; i < 6; i++) {

     
        if (board[(currPeiceLoc[i][1] + openy)][(currPeiceLoc[i][0] + openx)] != 0) {
            canBePlaced = false;
        }
    }
 
}

function clearBoardofPeice(peiceNum) {

    for (var i = 0; i < 15; i++) {
        for (var j = 0; j < 15; j++) {
            if (board[i][j] == peiceNum) {
                board[i][j] = 0;
            }
        }
    }
    
}