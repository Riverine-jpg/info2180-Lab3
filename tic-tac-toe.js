let check = 0;
let arr = new Array();
let sol = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]];
let plays = 0;

(function(window,document,undefined){
    window.onload = init;
    function init(){
        var size = 9;
        
        var board = document.getElementById('board');
        var spaces = board.children;
        for(var i = 0;i<size;i++){
            spaces[i].classList.add("square");
            spaces[i].id = i
            spaces[i].onclick = function() {play(this)};
            spaces[i].onmouseover = function() {hover(this)};
            spaces[i].onmouseout = function() {remhover(this)};
        }
        document.getElementsByClassName("btn")[0].addEventListener("click", function(){resetter(spaces)});
        
    }
})(window,document,undefined)

function play(el){
    var winner;
    var stat = document.getElementById("status");
    if(el.childNodes.length == 0 && stat.className != "you-won"){
        switch(check){
            case 0:
                el.classList.add("X");
                el.textContent = "X";
                arr[el.id] = "X"
                check = 1;
                plays++;
                break;
            case 1:
                el.classList.add("O");
                el.textContent = "O";
                arr[el.id] = "O"
                check = 0;
                plays++;
                break;
        }
        switch(wincheck()){
            case "X":
                stat.textContent = "Congratulations! X is the Winner!"
                stat.classList.add("you-won");
                break;
            case "O":
                stat.textContent = "Congratulations! O is the Winner!"
                stat.classList.add("you-won");
            case "N":
                stat.textContent = "Congratulations! Nobody Wins!"
                stat.classList.add("you-won");
        }

    }
}

function wincheck(){
    var w = "X";
    var win = null;
    var solc = 0;

    for(var i of sol){
        solc = 0;
        for(var j = 0;j < i.length; j++){
            if(arr[i[j]] == null){
                break;
            }
            else{
                if(j == 0){
                    w = arr[i[j]];
                    solc++;
                }else if(arr[i[j]]==w){
                    solc++;
                }

            }
        }
        if(solc == 3){
            win = w;
            break;
        }
    }
    if(plays == 9 && win == null){
        return "N"
    }
    return win;

}


function hover(el){
    el.classList.add("hover");
}

function remhover(el){
    el.classList.remove("hover");
}


function resetter(spaces){
    var size = 9;
    check = 0;
    plays = 0;
    arr = [];
    for(var i = 0;i<size;i++){
        spaces[i].setAttribute("class","square");
        spaces[i].textContent = '';
    }
    document.getElementById("status").textContent = "Move your mouse over a square and click to play an X or an O.";
    document.getElementById("status").classList.remove("you-won");

}
