let users = [];

const loaded = async () => {
    users = await getUsers();
    render();
}

const render = () => {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for(let user of users) {
        let tr = "</tr>";
        tr += `<td>${user.id}</td>`;
        tr += `<td>${user.firstname}</td>`;
        tr += `<td>${user.lastname}</td>`;
        tr += `<td>${user.username}</td>`;
        tr += `<td>${(user.isReviewer ? "Yes" : "No")}</td>`;
        tr += `<td>${(user.isAdmin ? "Yes" : "No")}</td>`;
        tr += "<td>";
        tr += `<a href='user-detail.html?id=${user.id}'>Detail</a> | `;
        tr += `<a href='user-change.html?id=${user.id}'>Change</a>`;
        tr += "</td>";
        tr += "</tr>";
        tbody.innerHTML += tr;
    }
}