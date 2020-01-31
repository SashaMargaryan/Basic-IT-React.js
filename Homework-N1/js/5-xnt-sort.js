let a = [9, 1, 4];
a.sort();
let min = a[0];
let max = a[a.length - 1];
let x = 0;
let a1 = [];

for(let i = min; i < max ;i++){
    if(a.indexOf(i) == -1){
        a1.push(i);
        x++;
    };
};

let f = a.concat(a1).sort();

console.log(a);
console.log(min);
console.log(max);
console.log(a1);
console.log(x);
console.log(f);   