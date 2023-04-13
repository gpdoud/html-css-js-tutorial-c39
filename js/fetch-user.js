const baseurl = "http://localhost:5000";
const userurl = `${baseurl}/api/users`;

const getUsers = async () => {
    const json = await getApiAsync(userurl);
    console.log(json);
}
const getUser = async (id) => {
    const json = await getApiAsync(`${userurl}/${id}`);
    console.log(json);
}
const postUser = async (user) => {
    const json = await postApiAsync(`${userurl}`, user);
    console.log("New User: ", json);
}
const putUser = async (id, user) => {
    const status = await putApiAsync(`${userurl}/${id}`, user);
    console.log(status);
}
const deleteUser = async (id) => {
    const status = await deleteApiAsync(`${userurl}/${id}`);
    console.log(status);
}