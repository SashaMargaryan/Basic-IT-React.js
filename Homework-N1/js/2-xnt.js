let a = [true , NaN , 'hello' , false, 1 , 2 ,-8];

let nam = [];
let bul = [];
let str = [];

for (let i = 0; i < a.length ; i++){
    if( typeof a[i] != 'boolean' && a[i] > 0  || a[i] < 0 ){
        nam.push(a[i]);

    }else if(typeof a[i] === 'string'){
        str.push(a[i])

    }else{
        bul.push(a[i])
    };
};

console.log(nam);
console.log(str);
console.log(bul);

