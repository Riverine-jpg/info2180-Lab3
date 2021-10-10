
(function(window,document,undefined){
    window.onload = init;
    function init(){
        var size = 9;
        var board = document.getElementById('board');
        for(var i = 0;i<size;i++){
            board.children[i].classList.add("square");
            console.log(board.children[i]);
        }
    }
})(window,document,undefined)



