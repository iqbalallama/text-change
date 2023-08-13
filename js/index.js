const textss = ['I am Allama iqbal','some are call me Iqbal Badsha','i am junior web designer'];
let count = -1;
const text = document.getElementById('text');
function animation(){
    count++
    if(count>= textss.length){
        count =0;
        text.innerText = textss[count];
    }
    else{
        text.innerText = textss[count];
    }
    setTimeout('animation()',2000)
}
window.onload = animation();