{"changed":true,"filter":false,"title":"main.js","tooltip":"/assets/js/main.js","value":"var modal = document.getElementById(\"serviceModal\");\nvar btn = document.getElementById(\"services\");\nvar span = document.getElementsByClassName(\"close\")[0];\nvar footer = document.getElementsByClassName(\"btnclose\")[0];\nvar fsbtn = document.getElementsByClassName(\"fullService\");\n\n\nbtn.onclick = function() {\n    modal.style.display = \"block\";\n};\nspan.onclick = function() {\n    modal.style.display = \"none\";\n};\n\nwindow.onclick = function(event) {\n    if (event.target == modal) {\n        modal.style.display = \"none\";\n    }\n};\n\nfooter.onclick = function() {\n    modal.style.display = \"none\";\n};\n\n\n\nfsbtn.onclick = function() {\n    \n};\n\n\n\n","undoManager":{"mark":-2,"position":0,"stack":[[{"start":{"row":28,"column":2},"end":{"row":29,"column":0},"action":"insert","lines":["",""],"id":91},{"start":{"row":29,"column":0},"end":{"row":30,"column":0},"action":"insert","lines":["",""]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":10,"column":0},"end":{"row":11,"column":33},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":20,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1577978049399}