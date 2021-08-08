let registeredUser = [
    {
        name: "Admin",
        username: "admin@mail.com",
        password: "admin123123",
        balance: 24000,
		list: [],
		history: [],
    },
]

// localStorage.setItem("registeredUser", JSON.stringify(registeredUser))


class User {
	constructor(name, username, password, listItem){
        this.name = name
		this.username = username
		this.password = password
        this.list = listItem
	}

	save(){

		let newUser = {
            name: this.name,
			username: this.username,
			password: this.password,
			balance: 24000,
			list: [],
			history: [],
		}

		registeredUser.push(newUser)	
		localStorage.setItem("registeredUser", JSON.stringify(registeredUser))
	}

	login(){
		let localDataRegisteredUsers = JSON.parse(window.localStorage.getItem("registeredUser"))

		for (let i = 0; i < localDataRegisteredUsers.length; i++){
			if (localDataRegisteredUsers[i].username === this.username && localDataRegisteredUsers[i].password === this.password){
				localStorage.setItem("currentLoginEmail", JSON.stringify(this.username))
				alert("Login Success")
				// window.location.replace("index.html")
				return true
				
			}
		}
		alert("Login Failed")
		return false
	}
//end of class User
}


function register(){
	localStorage.setItem("registeredUser", JSON.stringify(registeredUser))

    let fullName = document.getElementById("full-name-input").value
	let usernameEmail = document.getElementById("email-input").value
	let userPassword = document.getElementById("password-input").value
	let userPasswordConfirm = document.getElementById("confirm-password-input").value
	let localDataRegisteredUsers = JSON.parse(window.localStorage.getItem("registeredUser"))

	    for(i = 0; i < localDataRegisteredUsers.length; i++){
	        if (usernameEmail === localDataRegisteredUsers[i].username){
	            alert("Please use another mail")
	            return
	        } else if (usernameEmail.value === ""){
	            alert("Register an account")
	            return
	        } else if (userPassword.length < 8){
	            alert("Password less than 8 not allowed")
	            return
	        } else if (userPassword !== userPasswordConfirm){
	            alert("Check password confirmation")
	            return
	        } 
	    }

        let newUser = new User(fullName, usernameEmail, userPassword)
	    // console.log(localDataRegisteredUsers)

	    newUser.save()
		alert("Register Success")
}

function login(){
	let usernameEmail = document.getElementById("email-input-login").value
	let userPassword = document.getElementById("password-input-login").value

	let userLoginIn = new User(null, usernameEmail, userPassword)
	let isUserLogin = userLoginIn.login()

	if (isUserLogin){
		window.location.replace("app.html")
	} 

}





// register(usernameEmail, userPassword, userPasswordConfirm)

// class Uber{
// 	constructor(email, password){
// 		this.email = email
// 		this.password = password
// 	}

// }


// class UberList extends Uber{
	
// }