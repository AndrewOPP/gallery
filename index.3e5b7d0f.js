const e=Number(prompt("Enter something"));var o;(o=e,new Promise(((e,t)=>{Number.isNaN(o)&&t("Error"),o%2==0&&setTimeout((()=>e("even")),1e3),o%2!=0&&setTimeout((()=>e("odd")),2e3)}))).then((e=>console.log(e))).catch((e=>console.log(e)));
//# sourceMappingURL=index.3e5b7d0f.js.map
