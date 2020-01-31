let a = 'react';
let a1 = a.split('')
let b = 'redux';
let b2 = b.split('');
let c, n = 0;

for( let i = 0; i < a1.length; i++){
    c = a1[i];
    for(let j = 0 ; j < b2.length; j++){
        if(c == b2[j]){
            console.log(c);
            n++;
        };
        
    };
    
};
console.log(n);
console.log(a1);
console.log(b2);

