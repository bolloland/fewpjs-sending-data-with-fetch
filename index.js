// Add your code here
let body = document.querySelector("body")

const submitData = (userName, userEmail) => {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(resp => resp.json())
    .then(json => {document.body.innerHTML = json["id"]})
    .catch(function(error) {
        alert("OOPS! ALL BERRIES!"),
        document.body.innerHTML = error.message
    })
}
// const showData = (id) => {
//     let div = document.createElement("div")
//     console.log(id)
//     div.innerText = `${id}`
//     body.appendChild(div)
    
// }


submitData("bob", "bob@gmail.com")