let check = 0;
let arr = new Array();

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
            console.log(spaces[i]);
        }
        
    }
})(window,document,undefined)

function play(el){
    if(el.childNodes.length == 0){
        switch(check){
            case 0:
                el.classList.add("X");
                el.textContent = "X";
                check = 1;
                break;
            case 1:
                el.classList.add("O");
                el.textContent = "O";
                check = 0;
                break;
        }
        console.log("Ah yes bread");
    }
}


