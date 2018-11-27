let btn1 = $('#btn1');
let btn2 = $('#btn2');
let btn3 = $('#btn3');
let btn4 = $('#btn4');
let btn5 = $('#btn5');
let btn6 = $('#btn6');
let btn7 = $('#btn7');
let btn8 = $('#btn8');
let btn9 = $('#btn9');
let scoreO = $('#scoreO');
let scoreX = $('#scoreX');
let scoreDraw = $('#draw');
let button = $('button');
let reset = $('#reset');
let p = $('p');

/* ---------- Event listener ---------- */

reset.on('click', resetGame);
button.on('click', startGame);

/* ---------- Start the game and make each turn ---------- */

let counter = 0;
let swapTurn = true;
let winX = 0;
let winO = 0;
let draw = 0;

function startGame(e) {
    let clickedButton = $(event.target);
    if (swapTurn) {
        clickedButton.addClass('button-x');
        clickedButton.text('x').attr('disabled', 'disabled');;
        checkWinner('button-x');
        swapTurn = false;
        counter ++;
    } else {
        clickedButton.addClass('button-o');
        clickedButton.text('o').attr('disabled', 'disabled');
        checkWinner('button-o');
        swapTurn = true;
        counter ++;  
        }
}

/* ---------- Check patterns to win the game ---------- */

function checkWinner(str) {
    if (btn1.hasClass(str) && btn2.hasClass(str) && btn3.hasClass(str)) {
        winner(str);
    }
    else if (btn1.hasClass(str) && btn4.hasClass(str) && btn7.hasClass(str)) {
        winner(str);
    }
    else if (btn1.hasClass(str) && btn5.hasClass(str) && btn9.hasClass(str)) {
        winner(str);
    }
    else if (btn3.hasClass(str) && btn5.hasClass(str) && btn7.hasClass(str)) {
        winner(str);
    }
    else if (btn4.hasClass(str) && btn5.hasClass(str) && btn6.hasClass(str)) {
        winner(str);
    }
    else if (btn7.hasClass(str) && btn8.hasClass(str) && btn9.hasClass(str)) {
        winner(str);
    }
    else if (btn2.hasClass(str) && btn5.hasClass(str) && btn8.hasClass(str)) {
        winner(str);
    }
    else if (btn3.hasClass(str) && btn6.hasClass(str) && btn9.hasClass(str)) {
        winner(str);
    }
    else if (counter === 8) {
        winner('none');
    }
}

/* ---------- Disable the buttons and declare a winner ---------- */

function winner(str) { 
        button.attr('disabled', 'disabled');
        p.append().attr('id', 'pTag');
    if (str === 'button-x') {
        p.append('Contgratulations! X is the winner'); 
        winX ++;
        scoreX.text('Player X:' + '  ' + winX);
        } 
    else if (str === 'button-o') {
        p.append('Contgratulations! O is the winner');
        winO ++;
        scoreO.text('Player O:' + '  ' + winO);
    } 
    else if (str === 'none') {
        p.append('Sorry! it´s a draw');
        draw ++;
        scoreDraw.text('Draw:' + ' ' + draw);
    }
}

/* ---------- Reset the game ---------- */

function resetGame() {
    button.removeClass("button-x");
    button.removeClass("button-o");
    button.removeAttr("disabled");
    button.text('');
    p.text('');
    p.removeAttr("id");
    counter = 0;
}

