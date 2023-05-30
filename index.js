// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function prependCat(name){
    const catnew = [name, ...cats] ;
    return catnew; 

}

function appendCat(name){
    const catnew = [...cats, name] ;
    return catnew;
}

function removeLastCat(){
    const newarr = cats.slice(0,cats.length-1)
    return newarr;
}

function removeFirstCat(){
    const neww = cats.slice(1);
    return neww;
}