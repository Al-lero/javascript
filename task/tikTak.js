
function create(length,width,peaice,newpeace){
    let twoDimensionalArray = new Array(length).fill(null).map(() => new Array (width).fill(peaice).concat(newpeace));
    return twoDimensionalArray;
}
console.log(create(3,3,"x","o"));

