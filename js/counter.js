
let nbr = 0;

const render = () => {
    let inpCtrl = document.getElementsByTagName("input")[0]
    inpCtrl.value = nbr;

    inpCtrl.style.color = nbr % 2 == 0 ? "red" : "black";
    inpCtrl.style.fontStyle = nbr % 3 == 0 ? "italic" : "normal";
    inpCtrl.style.fontWeight = nbr % 7 == 0 ? "bold" : "normal";
}

const inc = () => {
    nbr++;
    render();
}

const dec = () => {
    nbr--;
    render();
}

const loaded = () => {
    let inpCtrl = document.getElementsByTagName("input")[0];
    inpCtrl.style.textAlign = "center";
}