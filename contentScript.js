// Add JQuery
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);



function changeToShtok(text) { 
	allWords = text.split(" ");
	for (let i = 1; i < allWords.length; i++) {
		currentWord = allWords[i];
		if (currentWord.indexOf('<') !== -1) {
			console.log('breaking');
			break;
		}

		if (i % 8 === 0) {
			if (currentWord.search(/[\u0590-\u05FF]/) >= 0) {
				currentWord = "שתוק";

			} else {
				currentWord = "shtok";

			}
			
		}
		allWords[i] = currentWord;
	}
	
	return allWords.join(" ");
}


let paragraphsElements = document.getElementsByTagName("p");
for (let i = 0 ; i < paragraphsElements.length; i++) {
	paragraphsElements[i].innerHTML = changeToShtok(paragraphsElements[i].innerHTML);

}
