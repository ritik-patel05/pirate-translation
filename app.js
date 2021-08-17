let inputTxt = document.querySelector('#txt-input');
let translateBtn = document.querySelector('#btn-translate');
let outputDiv = document.querySelector('#output');

function translateString() {
	console.log('Click happened');
	let query = inputTxt.value;

	let url =
		'https://api.funtranslations.com/translate/pirate.json?text=' + query;

	console.log(url);
	fetch(url)
		.then((response) => response.json())
		.then((json) => {
			console.log(json);
			outputDiv.innerText = json.contents.translated;
		})
		.catch((error) => alert('Some error occurred'));
}

translateBtn.addEventListener('click', translateString);
