const url = "http://192.168.100.8:3000/3dves/lite/customerData/entities/sons/21/0";

function getListName() {
    return fetch(url)
        .then(response => response.json())
        .then(dataElements => dataElements.map(data => { return {image: "https://2.gravatar.com/avatar/b5d5383385b2dd615bb34a7114d3f49f?s=256&d=identicon&r=G", name: data.name}}))
}

export { getListName }