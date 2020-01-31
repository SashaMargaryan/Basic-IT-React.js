let a = prompt('bar:');

for(let i = 0; i < a.length; i++){
    if(a[i] === a[a.length - 1 - i]){
        alert(true);
        break;
    }else{
        alert(false);
        break;
    };
};