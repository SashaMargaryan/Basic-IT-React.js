
function Foo(x,y,z){
    let tiv = document.getElementById('tiv').value;
    let p = document.getElementById('p');
    let i1 = document.getElementById('i1');
    let i2 = document.getElementById('i2');
    let i3 = document.getElementById('i3');
    let i4 = document.getElementById('i4');

    if(tiv > y && i3.style.display == 'none' && i4.style.display == 'block'){
        setTimeout(() => {
            i3.style.display = 'block'
           },0)
           setTimeout(() => {
            i3.style.display = 'none'
           },5000);
    
           setTimeout(() => {
           i4.style.display = 'none'
           },0)
           setTimeout(() => {
           i4.style.display = 'block'
           },5000);
    };
 
    if(tiv > z && i1.style.display == 'none' && i2.style.display == 'block' ){
       tiv = tiv - y;
      
       setTimeout(() => {
            i1.style.display = 'block'
       },4000)
       setTimeout(() => {
            i1.style.display = 'none'
       },9000);
       setTimeout(() => {
        aud2.play();
       },5000);
      

       setTimeout(() => {
        i2.style.display = 'none'
       },4000)
       setTimeout(() => {
        i2.style.display = 'block'
       },9000);
        

       if(tiv>0){
       aud.play();
       };

        p.innerHTML = `cher manr@ ${tiv} dram`;
       
    }else if(tiv < z){
        x=(x + y) - tiv;
        p.innerHTML = `cez chi heiqum ${x} dram`;
        
    };

};
function ins(num){
    document.form.tex.value = document.form.tex.value + num
};
function B(){
    let x = document.form.tex.value;
    document.form.tex.value = x.substring(0, x.length-1)
};
function C(){
    document.form.tex.value = '';
};
