
const getApiAsync = async (url) => {
    const response = await fetch(url);
    return await response.json();
}
const postApiAsync = async (url, data) => {
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response.json();
}
const putApiAsync = async (url, data) => {
    const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response.status;
}
const deleteApiAsync = async (url) => {
    const response = await fetch(url, {
        method: "DELETE"
    });
    return response.status;
}