window.onload = function(){
    var canvas = document.getElementById("canvas1");
    var ctx = canvas.getContext("2d");

    var W = window.innerWidth;
    var H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    var max = 3;
    var waves = [];
    for(var i = 0; i<max; i++){
        waves.push({
            x: 0,
            c: Math.random()*100,
            d: Math.random()*100+70,
            s: Math.random(),
            y: 0
        })
    }
    var inc = 0;
    function drawWaves(){
        // alert('hi');
        ctx.clearRect(0, 0, W, H);
        ctx.strokeStyle = "white";
        ctx.fillStyle = "rgba(255, 255, 255, 0.2)"
        for(var i = 0; i<3; i++){
            w = waves[i];
            ctx.beginPath();
            ctx.moveTo(0, 300);
            ctx.lineTo(0, 100+w.y);
            for(var x = 0; x<= W; x=x+5){
                w.y = Math.sin(x/w.d-inc*w.s)*w.c;
                ctx.lineTo(x, 100+w.y);
                ctx.stroke();
            }
            ctx.lineTo(W, 300);
            ctx.lineTo(0, 300);
            ctx.closePath();
            ctx.fill();
            inc+=0.01;
        }

        ctx.stroke();
    }
    // function moveWaves(){
    //     for (var i = 0; i<max; i++){

    //     }
    // }
    setInterval(drawWaves, 25);
    // drawWaves();
}