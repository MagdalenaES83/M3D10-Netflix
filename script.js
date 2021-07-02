//window.onload = () =>{
   //alert("hello world")

// token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNmQyM2IzNTgxNzAwMTVjMjI3NTEiLCJpYXQiOjE2MjUyMTE5MzksImV4cCI6MTYyNjQyMTUzOX0.sqR7yOhKlqGFnaw6vg1Rf6InreVSCgTBHxpudMbcFAo

/*fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNmQyM2IzNTgxNzAwMTVjMjI3NTEiLCJpYXQiOjE2MjUyMTE5MzksImV4cCI6MTYyNjQyMTUzOX0.sqR7yOhKlqGFnaw6vg1Rf6InreVSCgTBHxpudMbcFAo"
}
}*/
/*
POST https://striveschool-api.herokuapp.com/api/account/login
{
    "username": "testusername",
    "password":"pass"
}   
*//*
const url = "https://striveschool-api.herokuapp.com/api/movies/"
const headers = new Headers ({
    "Content-Type":  "application/json", 
    "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNmQyM2IzNTgxNzAwMTVjMjI3NTEiLCJpYXQiOjE2MjUyMTE5MzksImV4cCI6MTYyNjQyMTUzOX0.sqR7yOhKlqGFnaw6vg1Rf6InreVSCgTBHxpudMbcFAo"
})


const movies = (e) => {
    console.log(123)
    e.preventDefault()
    try {
        let dataFromForm = {
            name: document.querySelector('#name').value,
            description: document.querySelector('#description').value,
            brand: document.querySelector('#category').value,
            imageUrl: document.querySelector('#imgURL').value,
                    }
        console.log(dataFromForm)

        fetch(url, {
            method: "POST",
            body: JSON.stringify(dataFromForm),//get Information from the form in object format,
            headers: {
                "Content-Type": "application/json",
                "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNmQyM2IzNTgxNzAwMTVjMjI3NTEiLCJpYXQiOjE2MjUyMTE5MzksImV4cCI6MTYyNjQyMTUzOX0.sqR7yOhKlqGFnaw6vg1Rf6InreVSCgTBHxpudMbcFAo"
            }
        })
            .then(resp => resp.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    } catch (err) {
        alert(err)
    }
}

document.getElementById("getText").addEventListener("click", movies()); */


//document.getElementById("getMovie").addEventListener("click", getMovie);



function addMovie(e){
    e.preventDeFault();

    let dataFromForm = {
    title :  document.getElementById("title").value,
    description : document.getElementById("description").value,
    category :  document.getElementById("category").value,
    poster :  document.getElementById("poster").value,
    }
    console.log(dataFromForm)

    fetch("movies.json", { 
        method: "POST",
        body: JSON.stringify(dataFromForm),
        headers: {"Accept" : "application/json text/plain, */*" ,  "Content-Type": "application/json",}          
        },    
          )
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
     } 

document.getElementById("addMovie").addEventListener("submit",addMovie)
