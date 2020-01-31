let a = ['aas', 'asda' , 'aas' ,'asda','sada' ];
let b = a.length;
let min = a[0];
let a2 = [];

for(let i = 0 ; i < b; i++){  // kgtni amena mecher@
    if(a[i] > min ){
        a2.push(a[i])
    };
};
console.log(a2);

var arr = ['a', 'asd', 'asfd'];
var lg = 0;
var lo;
let arr2 = [];
for(var i=0; i < arr.length; i++){   // kgtni anenamech@
    if(arr[i].length > lg){
         lg = arr[i].length;
        lo = arr[i];
        
    };      
}; 
arr2.push(lo);

console.log(arr2);

