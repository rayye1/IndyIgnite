document.getElementById("createAccountButton").addEventListener("click", createAccountFunction);
document.getElementById("loginButton").addEventListener("click", loginFunction);
console.log("yos")

function loginFunction(){
	var user = document.getElementById("username").value;
	var pass = document.getElementById("password").value;

	axios.get(httpLink + '/employerLogin/employerLogin', {params: {username: user, password: pass}})
	.then((res) => {
		if(res.data.success == 1){
			console.log("User logged in successfully!");

			sessionStorage.setItem("username", user);
			sessionStorage.setItem("password", pass);

			window.location.href = '/employerJob';
			
		}else{
			//UserDoesntExist();
			console.log("Failed to log in user! User doesn't exist.");
		}
	})
	.catch((err) => {
		console.log('An error occurred while trying to log in!');
		console.log(err);
	})
}


function createAccountFunction(){

	console.log('yo')

	var user = document.getElementById("username").value;
	var pass = document.getElementById("password").value;

	axios.post(httpLink + '/employerLogin/create', {username: user, password: pass})
	.then((res) => {
		if(res.data.success == 1){
			console.log("User created!");
		}else{
			//UserAlreadyExists();
			console.log("Failed to create user! Username already taken.");
		}
	})
	.catch((err) => {
		console.log('An error occurred while trying to create a new user!');
	})
}