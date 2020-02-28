let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];


 var when_random = Math.floor(Math.random()*when.length); 
 var what_random = Math.floor(Math.random()*what.length); 
 var who_random = Math.floor(Math.random()*who.length); 

 let cadena = who[who_random] + " "+ what[what_random] +" " +when[when_random];
 document.querySelector("#oracion").innerHTML= cadena;