let arr = [1,2,3,4,5,6,1,2,3];
let n =0;
let b;
for(let i = 0; i < arr.length; i++) {
    if(arr[i] == arr[i]) {
        b = arr[i];
        n++;
        // console.log(b, n++)
    }
    console.log(b, n)
}
// console.log(b, n++)