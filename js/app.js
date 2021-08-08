let localDataRegisteredUsers = JSON.parse(window.localStorage.getItem("registeredUser"))
let currentLoginFullNameSpan = document.getElementById("full-name-user")
let currentLoginBalance = document.getElementById("user-balance-money")
let currentLoginEmailPARSED = JSON.parse(window.localStorage.getItem("currentLoginEmail"))

for (let i = 0; i < localDataRegisteredUsers.length; i++){
    if (currentLoginEmailPARSED === localDataRegisteredUsers[i].username) {
        currentLoginFullNameSpan.textContent = localDataRegisteredUsers[i].name;
        let toLocalMoney = localDataRegisteredUsers[i].balance.toLocaleString('en-US');
        currentLoginBalance.textContent = toLocalMoney
    }
}


// class User {
// 	constructor(email, name, balance){
//         this.email = email
//         this.name = name
// 		this.balance = balance

// 	}

//     checkNameAndBalance(){
//         let localDataRegisteredUsers = JSON.parse(window.localStorage.getItem("registeredUser"))

//         for (let i = 0; i < localDataRegisteredUsers.length; i++){
//             if (this.email === localDataRegisteredUsers[i].username) {
//                 let current = {
//                     fullName: localDataRegisteredUsers[i].name,
//                     balance: localDataRegisteredUsers[i].balance
//                 } 
//                 return current;
//             }
//         }
//     }


// function getFullNameAndBalanceDisplay(){
//     let currentLoginFullNameSpan = document.getElementById("full-name-user")
//     let currentLoginEmailPARSED = JSON.parse(window.localStorage.getItem("currentLoginEmail"))
//     let localDataRegisteredUsers = JSON.parse(window.localStorage.getItem("registeredUser"))


//     // currentLoginFullNameSpan.textContent = currentLoginEmailPARSED.toUpperCase()
//     let currentEmailLogined = new User(currentLoginEmailPARSED)

//     console.log(currentEmailLogined)
// }

function getExpense(){
    let expenseAmount = document.getElementById("expense-amount-input").value
    let expenseFor = document.getElementById("expense-for").value
    let localDataRegisteredUsers = JSON.parse(window.localStorage.getItem("registeredUser"))
    let currentLoginEmailPARSED = JSON.parse(window.localStorage.getItem("currentLoginEmail"))
    // console.log(expenseAmount)
    // console.log(expenseFor)
    let expenseData = {
        expenseA: expenseAmount,
        expenseF: expenseFor
    }

    // console.log(expenseData)

    for (let i = 0; i < localDataRegisteredUsers.length; i++){
        if (currentLoginEmailPARSED === localDataRegisteredUsers[i].username){
            localDataRegisteredUsers[i].list.push(expenseData)
            console.log(localDataRegisteredUsers[i].list)
            localStorage.setItem("registeredUser", JSON.stringify(localDataRegisteredUsers))
        }
    }
}
