// Array task 
var studetns = ["Usman", "Ali", "Nouman"];
//let searchstudents = studetns.findIndex(findAli);
//studetns [5] = "Zeeshan" ;
// studetns.sort();
studetns. splice(1,0, ... ["Zahid", "Anwar"]);
console. log(...studetns);
function findAli(std){
if(std == "'Ali") return true;
else return false;
}

// arrow function

/*let test = () =>{|
    return "Ali";
}
    console. log (test ());*/
    let test = () => "Ali";
    console. log (test());

// pass by type 
    let x = 20;
    function increase(x) {
    x++;
    }
    console.log(x);
    
// pass by references 
    let y = { value: 20 };
    function increaseObj(y) {
    y.value++;
    }
    increaseObj(y);
    console.log(y.value);
