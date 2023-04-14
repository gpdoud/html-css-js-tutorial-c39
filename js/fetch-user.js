const baseurl = "http://localhost:5000";
const userurl = `${baseurl}/api/users`;

const getUsers = async () => {
    const json = await getApiAsync(userurl);
    console.debug(json);
    return json;
}
const getUser = async (id) => {
    const json = await getApiAsync(`${userurl}/${id}`);
    console.debug("getUser", json);
    return json;
}
const postUser = async (user) => {
    const json = await postApiAsync(`${userurl}`, user);
    console.debug("New User: ", json);
    return json;
}
const putUser = async (id, user) => {
    const status = await putApiAsync(`${userurl}/${id}`, user);
    console.log(status);
    return status;
}
const deleteUser = async (id) => {
    const status = await deleteApiAsync(`${userurl}/${id}`);
    console.log(status);
    return status;
}