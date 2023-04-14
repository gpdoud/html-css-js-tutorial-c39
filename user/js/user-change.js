let params = {}

const loaded = () => {
    loadMenu();
    params = getUrlParams();
    getDetailUser(params.id);
}

const getUrlParams = () => {
    let url = document.URL;
    let urlParts = url.split("?");
    let id = urlParts[1];
    let kv = id.split("=");
    let parms = {}
    parms[kv[0]] = Number(kv[1]);
    console.log(parms);
    return parms;
}

const getDetailUser = async (id) => {
    const user = await getUser(id);
    render(user);
}

const render = (user) => {
    setDetailProperty("pId", user.id);
    setDetailProperty("pFirstname", user.firstname);
    setDetailProperty("pLastname", user.lastname);
    setDetailProperty("pUsername", user.username);
    setDetailProperty("pPassword", user.password);
    setDetailProperty("pPhone", user.phone);
    setDetailProperty("pEmail", user.email);
    setDetailChecked("pReviewer", user.isReviewer);
    setDetailChecked("pAdmin", user.isAdmin);
}

const setDetailProperty = (idAttr, val) => {
    document.getElementById(idAttr).value = val;
}
const setDetailChecked = (idAttr, bool) => {
    document.getElementById(idAttr).checked = bool;
}

const save = async () => {
    console.debug("save()")
    let user = getUserFromUI();
    console.log("B4", user);
    let status = await putUser(user.id, user);
    if(status === 204) {
        location.href = "user-list.html";
    }
}

const getUserFromUI = () => {
    let user = {
        id: Number(getValFromUI("pId")),
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