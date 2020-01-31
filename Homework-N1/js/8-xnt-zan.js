let x = (a, b) => {
    a.sort();
    b.sort();
    JSON.stringify(a) === JSON.stringify(b) ? alert(true) : alert(false);
};

let a1 = [1, 2 , 3];
let b1 = [3 , 2, 1];
x(a1, b1);