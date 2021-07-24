function populateJobs() {
	
	let user = sessionStorage.getItem('username');
	console.log('user is: ' + user);

	axios.get(httpLink + '/employeeJob/getJobs', {params: {username: user}})
	.then((res) => {
        console.log(res);

        let tableElement = document.getElementById('job-table');

        res.data.forEach((item, index) => {
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


			tableRow.appendChild(companyName);
			tableRow.appendChild(position);
            tableRow.appendChild(des);

			tableElement.appendChild(tableRow);
		})
	})
	.catch((err) => {
		console.log('error retrieving jobs');
		console.log(err);
	})

	console.log('something didnt happen');
}