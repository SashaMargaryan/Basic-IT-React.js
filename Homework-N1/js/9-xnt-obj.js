let a = [
    {
        name : "Davit",
        age : 20
    },
    {
        name : "Ani",
        age : 30
    },
    {
        name : 'Anna',
        age : 25
    }
];

let foo = (x) => {

for (let i in a){
    if(a[i].name.slice(0,2).toLocaleLowerCase() == x){
        z.push(a[i]);
    };
};
};

let z = [];
let y = 'an';
foo(y);
console.log(z)

