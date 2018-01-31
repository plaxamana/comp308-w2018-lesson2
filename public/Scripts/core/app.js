// IIFE - Immediately Invoked Function Expression
// sometimers called a self-executing annymous function

(function(){
    let name = "Philip";
    function Start(){
        console.log("application starting");
        console.log(`${name} is awesome.`);
        Main();
    }

    function Main(){
        console.log("App Started");
    }

    window.onload = start;

})();