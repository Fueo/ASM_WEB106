const search_btn = document.querySelector(".search-button-mobile");
const search_group = document.querySelector(".search-group");

const showSearchGroup = () => {
    if (search_group.style.display === "") {
        search_group.style = "display: block; position: fixed; top: 68px; right: 6%; margin-left: 32px; width: 200px; height: 32px;";
        search_btn.src = "img/icon/close.png";
    }
    else {
        search_group.style = null;
        search_btn.src = "img/icon/Search.png";
    }
}

search_btn.addEventListener("click", showSearchGroup)