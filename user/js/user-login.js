
const loaded = () => {
    
}

const login = async () => {
    let username = document.getElementById("pUsername").value;
    let password = document.getElementById("pPassword").value;
    let user = await getUserLogin(username, password);
    console.debug(user);
    if(user !== null)
        location.href = "user-list.html"
}