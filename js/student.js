

let students = [
    { name: "John", likeTopic: "C#", dislikeTopic: "STS" },
    { name: "Jane", likeTopic: "Java", dislikeTopic: "VSC" },
    { name: "Pat", likeTopic: "SQL", dislikeTopic: "ADS" }
]

const add = () => {
    let nameCtrl = document.getElementById("pName");
    let favCtrl = document.getElementById("pLikeTopic");
    let leastFavCtrl = document.getElementById("pDislikeTopic");

    let newName = nameCtrl.value;
    let newLikeTopic = favCtrl.value;
    let newDislikeTopic = leastFavCtrl.value;

    console.debug("newName", newName, "fav", newLikeTopic, "least", newDislikeTopic);
    
    let newStudent = {
        name: newName, likeTopic: newLikeTopic, dislikeTopic: newDislikeTopic
    }

    students.push(newStudent);
    console.log("Student added ...");
    render();
}

const render = () => {
    console.log("In render()");
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for(let student of students) {
        console.log(`${student.name} | ${student.likeTopic} | ${student.dislikeTopic}`);
        let row = "<tr>";
        row += `<td>${student.name}</td>`;
        row += `<td>${student.likeTopic}</td>`;
        row += `<td>${student.dislikeTopic}</td>`;
        row += "</tr>";
        tbody.innerHTML += row;
    }
}

const loaded = () => {
    console.log("In loaded()");
    // let bodiesCtrl = document.getElementsByTagName("body")
    // let bodyCtrl = bodiesCtrl[0];
    // bodyCtrl.style.fontFamily = "Arial";
    // let tableCtrl = document.getElementsByTagName("table")[0];
    // tableCtrl.style.width = "50%";
    render();
}