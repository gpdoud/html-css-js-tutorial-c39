

const loaded = () => {
    loadMenu();
}


const save = async () => {
    console.debug("save()")
    let user = getUserFromUI();
    await postUser(user);
    document.location.href = "user-list.html";
}

const getUserFromUI = () => {
    let user = {
        id: getValFromUI("pId"),
        username: getValFromUI("pUsername"),
        password: getValFromUI("pPassword"),
        firstname: getValFromUI("pFirstname"),
        lastname: getValFromUI("pLastname"),
        phone: getValFromUI("pPhone"),
        email: getValFromUI("pEmail"),
        isReviewer: getChkFromUI("pReviewer"),
        isAdmin: getChkFromUI("pAdmin"),
    }
    console.debug("getUserFromUI", user);
    return user;
}

const getValFromUI = (idAttr) => {
    return document.getElementById(idAttr).value;
}
const getChkFromUI = (idAttr) => {
    return document.getElementById(idAttr).checked;
}