var button = document.getElementById("button")
var image = document.getElementById("img")
var nameTag = document.getElementById("name")
var ageTag = document.getElementById("age")
var emailTag = document.getElementById("email")
var cityTag = document.getElementById("city")
var stateTag = document.getElementById("state")
var phoneTag = document.getElementById("phone")

var url = "https://randomuser.me/api/?format=json"
button.addEventListener("click" , btnClickHandler)
function btnClickHandler(){
    fetch(url).then(response => response.json()).then(json => {
        // we got result now with json.result we are aceesing results object
        // here results value is array having one element so we can directly access using index
        // otherwise we can iterate through array of results if there is more than one.
        var result = json.results[0]
       
        var name = result.name.title + " "+ result.name.first +" "+ result.name.last
        var location = result.location
        var city = location.city 
        var state = location.state        
        var email = result.email    
        var age = result.dob.age
        var phone = result.phone
        var imageUrl = result.picture.medium

        image.src = imageUrl
        nameTag.innerText = "Name :" +"  "+name 
        ageTag.innerText = "Age :" + "  "+age
        emailTag.innerText = "Email :" +"  "+email
        cityTag.innerText = "City: " +city
        stateTag.innerText = "State: " + state
        phoneTag.innerText = "Phone   :  " + "  "+phone
    }).catch(() => alert("some error occured"))
}

