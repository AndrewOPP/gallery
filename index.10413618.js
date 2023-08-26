!function(){var n,e=Number(prompt("Enter something"));(n=e,new Promise((function(e,o){Number.isNaN(n)&&o("Error"),n%2==0&&setTimeout((function(){return e("even")}),1e3),n%2!=0&&setTimeout((function(){return e("odd")}),2e3)}))).then((function(n){return console.log(n)})).catch((function(n){return console.log(n)}))}();
//# sourceMappingURL=index.10413618.js.map
