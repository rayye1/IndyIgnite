document.getElementById("createAccountButton").addEventListener("click", createAccountFunction);
document.getElementById("loginButton").addEventListener("click", loginFunction);

function loginFunction(){
	var user = document.getElementById("username").value;
	var pass = document.getElementById("password").value;

	axios.get(httpLink + '/employeeLogin/employeeLogin', {params: {username: user, password: pass}})
	.then((res) => {
		if(res.data.success == 1){
			console.log("User logged in successfully!");

			sessionStorage.setItem("usernameEmployee", user);
			sessionStorage.setItem("passwordEmployee", pass);

			window.location.href = '/empMain';
			
		}else{
			alert('Failed to login, User does not check out')
			console.log("Failed to log in user! User doesn't exist.");
		}
	})
	.catch((err) => {
		console.log('An error occurred while trying to log in!');
		console.log(err);
	})
}


function createAccountFunction(){

	console.log('what')

	var user = document.getElementById("username").value;
	var pass = document.getElementById("password").value;

	axios.post(httpLink + '/employeeLogin/create', {username: user, password: pass})
	.then((res) => {
		if(res.data.success == 1){
			console.log("User created!");
		}else{
			alert('Username Taken')
			console.log("Failed to create user! Username already taken.");
		}
	})
	.catch((err) => {
		console.log('An error occurred while trying to create a new user!');
	})
}