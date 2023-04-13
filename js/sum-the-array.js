
const sumTheNbrs = () => {
    let strOfNbrs = document.getElementById("inp").value;
    let strs = strOfNbrs.split(",");
    let sum = 0;
    for(let s of strs) {
        sum += +s; // Number(s)
    }
    document.getElementById("lbl").innerText = sum;
}