document.addEventListener('DOMContentLoaded', function () {
    var d = "\n    {\n        \"knife1\"  : \"M320,48.5 Q360,120 450,120 L640,120 L640,40 L445,40 Q370,50 320,48.5\",\n        \"knife2\"  : \"M320,46.5 Q493,54 576,40 L640,40 L640,123 S625,120 510,122 340,69 320,46.5\",\n        \"knife3\"  : \"M640,40 L640,120 L430,120 Q342,116 320,52 Q426,42.9, 510,40z\",\n        \"knife4\"  : \"M320,50 Q356,120  435,120L 610,120 L640,120 L640,40 L416,40 Q380,40 320,50\",\n        \"knife5\"  : \"M320,20 Q366,127 640,120  L640,40 L600,40 Q406,43 320,20\",\n        \"knife6\"  : \"M320,72 Q367,115 474,123 Q478,123 484,122 Q540,101 640,115 L640,40 L560,48.5 Q534,51 523,42z\",\n        \"knife7\"  : \"M320,61 Q366,136 479,123 Q600,108 640,137 L640,40 Q382,35.5  320,61\" ,\n        \"knife8\"  : \"M320,57 Q356,113  432,113L 610,113 L640,113 L640,40 Q600,38.5 574.5,33.7 Q460,53.3 320,57\",\n        \"knife9\"  : \"M320,40 Q345,124 480,120 L640,120 L640,40 L510,40z\",\n        \"knife10\" : \"M320,45 Q453,46 551,32.5 Q552.5,32 558,31.5 Q574,37 640,40 L640,108 Q546,96 477,115 Q370,100 320,45\",\n        \"knife11\" : \"M320,59 Q350,127 459,118.6 L640,112 L640,40 L476,40 Q400,64 320,59\",\n        \"knife12\" : \"M320,47 Q368,106 449,111 L640,112 L640,40 Q590,39 550,31z\",\n        \"knife13\" : \"M320,81 Q376,135 499,116 Q600,108 640,124 L640,40 Q540,39 502,43 Q392,53 320,81\",\n        \"knife14\" : \"M320,49 Q374,119 490,110.6 L640,104 L640,40 Q520,34 452,26.7 Q405,47 320,49\",\n        \"knife15\" : \"M320,58 Q344,116 470,120 L640,120 L640,40 L480,40 Q405,56 320,58\", \n        \"knife16\" : \"M320,50 Q357,117 430,115 L640,118 L640,40 Q599,41.5  594,35.5 Q430,33 320,50\",\n        \"knife17\" : \"M320,39 Q443,47 532,32.5 Q532.5,32 535,32.5 Q544,43 640,40 L640,124 S645,108 500,113 340,63 320,39\",\n        \"knife18\" : \"M320,103 Q377,114 640,121  L640,40  Q590,40 455,42 Q380,47 320,103\",\n        \"knife19\" : \"M320,18 Q443,46 600,32 Q620,42 640,40 L640,124 S635,116 500,113 340,49 320,18\",\n        \"knife21\" : \"M320,40 Q366,115 480,115 L640,115 L640,40 L560,40 Q548,35 550,35z\",\n        \"knife22\" : \"M320,20 L357,87 Q506,118 640,120 L640,40 Q480,36 320,20 \",\n        \"xvost1\"  : \"M640,40 L812,40 Q850,52 916, 59.3 Q920.4,62 920,65 Q933,113 884,147 Q882,148 880,146 Q872,136 845,120 Q810,102 760,104 Q745,103 720,111 Q718 113 716,111 Q680,95 640,120z\",\n        \"xvost2\"  : \"M640,40 S760,37 841.5,42 917,47 920,54 Q929,99 872,127 Q868,129 865,126 Q850,107 760,107 Q700,103.5 675,101 Q655,100 646,104 Q643,106.3 640,120z\",\n        \"xvost3\"  : \"M640,40 L720,40 Q830,38.1 921,54 C925,72 900,109 875.7,126 Q871,130 867.9,129 Q820,103 712,109 Q710,109 703,109 Q675,100 640,120z\",\n        \"xvost4\"  : \"M640,40  L822,40 Q850,42 920, 55.3 Q920.4,56 921,56 Q928,93 884,125 Q881,127 880,127 S854,112 844,109.4 834,105 810,107 750,110, 685,101.5 Q658,98 640,120z\",\n        \"xvost5\"  : \"M640,40  Q870,36.2 920,77 Q921,77 922,80 Q906,130 865,135 Q865,135.5 860,135 Q845,89 690,113 Q688,113 687,111 Q680,97.5 640,120z\",\n        \"xvost6\"  : \"M640,40 Q850,37 919.5,63 Q921,65 922,65 Q922,108 865,143 Q857,143.5 855,139.1 Q818,102.3 754,113.5 Q722,113.7 700,107 Q660,99.5 640,120z\",\n        \"xvost7\"  : \"M640,40 S760,40 841.5,49 920,56 922,57 Q922,105 862,139 Q847,147 840.6,148 Q835,148 836.6,147  Q835,123 790,119 S720,119 685,111 640,107 640,120z\",\n        \"xvost8\"  : \"M640,40  Q840,38.5 917,67.6 Q917.5 67.7 918,68.7 Q935,120 881,149 Q879,149.5 878,148 S861,136 841,132.5 820,133.7 814,132.5 786,107 754,121.5 Q750,121 750,120 Q721,102 694,115.5 Q692.4,115.4 690,114 Q670,100 640,120z\",\n        \"xvost9\"  : \"M640,40  Q870,35.5 915,53 C933,58 910,115 890,130 Q885,133  874,128 S843,100 790,112 700,85 640,120z\",\n        \"xvost10\" : \"M640,40 Q810,40 920,57 Q924,61 923,68 Q919,100 887,140 Q877.5,149.8 875,145 Q818,98.5 707,112 Q670,96 640,120z\",\n        \"xvost11\" : \"M640,40 L640,107 Q810,105 872,145 C880,145 949,75  912,57 Q824,37.7 640,40z\",\n        \"xvost12\" : \"M640,40 L640,107 S670,96 710,100 850,169, 920,95 Q923,91.9 922,86 Q880,41 740,40 L640,40\",\n        \"xvost13\" : \"M640,40 S660,39 734,37 845,44 870,45 Q895,45,900,37 C929,25 929,115 900,110 Q891,100 870,100  S880,100 805,104 734,105  640,100 L640,40\",\n        \"xvost14\" : \"M640,40 Q850,36 913.5,48.7 Q925,48 920,68 Q909,100 882,128 Q876,131.5 870,129.1 Q838,105.3 754,110.5 Q748,111.2 720,109 Q658,99.9 640,120z\",\n        \"xvost15\" : \"M640,40 L640,90  Q760,90 860,119  Q876,125 884,144 C885,166 983,44  860,40 Q790,38 640,40\",\n        \"xvost16\" : \"M640,40 L640,90 S695,94 705,95 825,96, 835,97 870,103 876,112  C885,124 977,44  870,40 Q790,36 640,40\",\n        \"xvost17\" : \"M640,40 L915,40 Q928,70 915,100 L840,100 L640,120z\",\n        \"xvost18\" : \"M640,40 L640,107 Q658,100.2 693,115 Q693.5 116 698,115.7 Q790,98.5 882,146 Q883,147 885,146 Q916,110 919,75 Q918,73 917,72 Q800,35 640,40\",\n        \"xvost19\" : \"M640,40 S650,40 680,41 810,37 914,56 Q915,56.3 916,58 Q920,90 899,109 Q898,111 895,112 S880,104 790,111 680,96 640,120z\"\n        \n    }";
    //parsing
    var obj = JSON.parse(d);
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var imag = document.querySelector('.adauga');
    // var imageObj = new Image();
    // imageObj.src = 'assets/fondal.jpg';
    var afis = canvas.getContext("2d");
    var spri = document.querySelector('.adaug');
    var sprite = new Image();
    sprite.src = 'assets/knife.png';
    // ctx.font = "20px Arial";
    // ctx.fillStyle = "#ff2d6f";
    // ctx.fillText("Loading", 100, 10);
    var nr = 0;
    var nc = 0;
    var dx = 50;
    var dy = 50;
    var img = new Image();
    img.src = 'assets/knife.png';
    img.onload = function () {
        setInterval(drawAll, 90);
        ctx.clearRect(0, 0, 500, 500);
        function drawAll() {
            ctx.clearRect(0, 0, 500, 500);
            ctx.drawImage(img, dx * nr, dy * nc, dx, dy, 0, 0, 100, 100);
            if (nc == 5) {
                nr++;
                nc = 0;
                if (nr == 5) {
                    nr = 0;
                    nc = 0;
                }
            }
            else {
                nc++;
            }
        }
    };
    var k = document.querySelector('#buttons').addEventListener('click', function (e) {
        var x = e.target['id'];
        console.log("ID: " + obj + ", d: " + obj[x]);
        var knife = document.querySelector('.knife_scheme');
        knife.innerHTML =
            "\n            <svg>\n            <path fill=\"lightgray\" stroke-width=\"0.6\" stroke=\"#000000\" d=\"" + obj[x] + "\" vector-effect=\"non-scaling-stroke\" transform=\"translate(-310 0)\">\n            </path>\n            </svg>\n            ";
    });
    var y = document.querySelector('#buttons1').addEventListener('click', function (e) {
        var x = e.target['id'];
        console.log("ID: " + obj + ", d: " + obj[x]);
        var knife2 = document.querySelector('.xvost_scheme');
        knife2.innerHTML = "\n            \n            <svg>\n            <path fill=\"#4B3619\" stroke-width=\"0.6\" stroke=\"#000000\" d=\"" + obj[x] + "\" vector-effect=\"non-scaling-stroke\" transform=\"translate(-610 0)\"></path>\n            </svg>\n            ";
    });
    var clicked = false;
    var cont = document.querySelector('.container');
    // let map2 = document.querySelector('.map2');
    // let map3 = document.querySelector('.map3');
    var b1 = document.querySelector('.buton1');
    // var b2 = document.querySelector('.button2');
    // var b3 = document.querySelector('.button3');
    b1.addEventListener('click', function () {
        // map2.classList.add('kaka');
        // map3.classList.add('kaka');  
        cont.classList.remove('container');
        var spc = document.querySelector('.spec');
        spc.innerHTML = '';
    });
    //  b2.addEventListener('click',function() {
    //     map.classList.add('kaka');  
    //     map3.classList.add('kaka'); 
    //     map2.classList.remove('kaka');   
    //     var spc = document.querySelector('.spec');
    //     spc.innerHTML ='';
    //  })
    //  b3.addEventListener('click',function() {
    //     map.classList.add('kaka');  
    //     map2.classList.add('kaka'); 
    //     map3.classList.remove('kaka');   
    //     var spc = document.querySelector('.spec');
    //     spc.innerHTML ='';
    //  })
});
