function populateJobs() {
	
	let user = sessionStorage.getItem('username');
	console.log('user is: ' + user);

	axios.get(httpLink + '/employerJob/getJobs', {params: {username: user}})
	.then((res) => {
        console.log(res);

        let tableElement = document.getElementById('job-table');

        res.data.forEach((item, index) => {
			// let name = item.username;
            let company = item.company
            let title = item.title
            let description = item.description

			let tableRow = document.createElement('tr')

			let companyName = document.createElement('td');
			companyName.appendChild(document.createTextNode(company));

			let position = document.createElement('td');
			position.appendChild(document.createTextNode(title));

            let des = document.createElement('td');
			des.appendChild(document.createTextNode(description));

            let jobID = item.job_id;
            let rem = document.createElement('td');
			
			let remove_btn = document.createElement('button');
			//remove_btn.style.margin = "30px";
			remove_btn.addEventListener('click', remove(item.employer_username, item.job_id))
			remove_btn.classList.add("button1");
			remove_btn.setAttribute('onclick', 'location.reload()');
			remove_btn.appendChild(document.createTextNode('Remove'));
			rem.appendChild(remove_btn);


			tableRow.appendChild(companyName);
			tableRow.appendChild(position);
            tableRow.appendChild(des);
            tableRow.append(rem);

			tableElement.appendChild(tableRow);
		})
	})
	.catch((err) => {
		console.log('error retrieving jobs');
		console.log(err);
	})

	console.log('something didnt happen');
}

function remove(user, job_id) {
	return function() {
        console.log(user + " yo " + job_id)
		axios.post(httpLink + '/employerJob/remove', {username: user, job: job_id})
		.then((res) => {
			if (res.data.success == 1) {
				console.log("Successful removal");
			}
			else {
				console.log("Removal incomplete")
			}
		}).catch((err) => {
			console.log('An error occurred while removing job');
		})
	}
}