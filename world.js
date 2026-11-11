console.log("WORLD JS IS CONNECTED!");

document.addEventListener("DOMContentLoaded", function() {
	const lookup = document.getElementById("lookup");
	const lookupCities = document.getElementById("lookup-cities");
	const countryInput = document.getElementById("country");
	const result = document.getElementById("result");

	lookup.addEventListener("click", function() {
		console.log("LOOKUP BUTTON CLICKED!");

		const country = countryInput.value.trim();

		fetch("world.php?country=" + country)
			.then(response => response.text())
			.then(data => {
				result.innerHTML = data;
			})
			.catch(error => {
				console.log(error);
				result.innerHTML = "Error occurred while searching";
			});

	});

	lookupCities.addEventListener("click", function() {
                console.log("LOOKUP CITIES BUTTON CLICKED!");

                const country = countryInput.value.trim();

                fetch("world.php?country=" + country + "&lookup=cities")
                        .then(response => response.text())
                        .then(data => {
                                result.innerHTML = data;
                        })
                        .catch(error => {
                                console.log(error);
                                result.innerHTML = "Error occurred while searching";
                        });

        });
});
