const loadMenu = () => {
    let body = document.getElementsByTagName("body")[0];
    let nav = "<nav><ul>";
    nav += `<li><a href='user-list.html'>User</a></li>`;
    nav += "</ul></nav>";
    body.innerHTML = nav + body.innerHTML;
}