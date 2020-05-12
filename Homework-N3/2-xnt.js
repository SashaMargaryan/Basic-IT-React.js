// let arr = [1,2,3,4,5,6,1,2,3];
// let n =0;
// let b;
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] == arr[i]) {
//         b = arr[i];
//         n++;
//         // console.log(b, n++)
//     }
//     console.log(b, n)
// };

var arr = [1, 3, 4, 1, 1, 3, 4, 5];
var result = {};
arr.forEach(function(a){
    if (result[a] != undefined)
        ++result[a];
    else
        result[a] = 1;
});
for (var key in result)
    console.log('namber ' + key + ' == ' + result[key] + ' time');

