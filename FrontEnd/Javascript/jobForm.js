document.getElementById("submit").addEventListener("click", addJob)

function addJob() {
    let name = document.getElementById("name").value; 
    let position = document.getElementById('pos').value;
    let description = document.getElementById('des').value;
    let user = sessionStorage.getItem("username");

    console.log(user);
    console.log("lol")

    axios.post(httpLink + '/jobForm/addJob', {params: {username: user, company: name, pos:position, des:description}})
			.then((res) => {
				if (res.data.success == 1) {
					console.log('successfully added job');
					window.location.href = '/employerJob';
				}
				else {
					console.log('failed to add payment');
				}
			})
}