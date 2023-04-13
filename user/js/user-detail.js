let params = {}

const loaded = () => {
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
    setDetailProperty("pPhone", user.phone);
    setDetailProperty("pEmail", user.email);
    setDetailProperty("pReviewer", (user.isReviewer ? "Yes" : "No"));
    setDetailProperty("pAdmin", (user.isAdmin ? "Yes" : "No"));
}

const setDetailProperty = (idAttr, val) => {
    document.getElementById(idAttr).value = val;
}