/*function randomTextGenerator(count) {
	const words = [
		"Beneath", "the", "sprawling", "canopy", "of", "ancient", "trees", "sunlight", "filtered", "through", 
"the", "leaves", "casting", "dappled", "patterns", "across", "the", "forest", "floor", "The", 
"air", "was", "cool", "and", "filled", "with", "the", "earthy", "aroma", "of", 
"moss", "and", "damp", "soil", "Birds", "chattered", "in", "the", "distance", "their", 
"songs", "weaving", "together", "a", "melody", "that", "felt", "timeless", "as", "if", 
"it", "had", "been", "sung", "for", "centuries", "Nearby", "a", "small", "brook", 
"trickled", "over", "smooth", "stones", "its", "gentle", "sound", "adding", "a", "soothing", 
"rhythm", "to", "the", "quiet", "scene", "A", "fox", "emerged", "from", "the", 
"underbrush", "its", "sleek", "coat", "catching", "the", "light", "as", "it", "paused", 
"alert", "and", "curious", "It", "was", "a", "world", "untouched", "a", "hidden", 
"sanctuary", "where", "nature", "ruled", "supreme", "and", "every", "creature", "played", "its", 
"part", "in", "an", "unspoken", "harmony", "that", "few", "were", "privileged", "to", 
"witness"
	];
	let text = '';
	for (let i = 0; i < wordcount; i++){
		text += words[Math.floor(Math.random() * words.length)] + ' ';
	}
	return text.trim() + '.';
}*/
console.log('script loaded');
// Create the main div with the 'wiki-item' class
window.onload = function(){
	for(let i =1; i <= 5; i++){
	const wikiItem = document.createElement('div');
	wikiItem.className = 'wiki-item';

	// Create the header (h1) with the 'wiki-header' class
	const wikiHeader = document.createElement('h1');
	wikiHeader.className = 'wiki-header';
	wikiHeader.textContent = 'Breed X'; // Add text content

	// Create the content div with the 'wiki-content' class
	const wikiContent = document.createElement('div');
	wikiContent.className = 'wiki-content';

	// Create the paragraph with the 'wiki-text' class
	const wikiText = document.createElement('p');
	wikiText.className = 'wiki-text';
	wikiText.textContent = 'Some text about this breed.'; // Add text content

	// Create the img container div with the 'img-container' class
	const imgContainer = document.createElement('div');
	imgContainer.className = 'img-container';

	// Create the image element with the 'wiki-img' class
	const wikiImg = document.createElement('img');
	wikiImg.className = 'wiki-img';
	wikiImg.src = ''; // Correct variable name
	// Append the image to the img container
	imgContainer.appendChild(wikiImg);

	// Append the paragraph and img container to the content div
	wikiContent.appendChild(wikiText);
	wikiContent.appendChild(imgContainer);

	// Append the header and content div to the main div
	wikiItem.appendChild(wikiHeader);
	wikiItem.appendChild(wikiContent);

	// Append the entire structure to the body or any other container
	document.body.appendChild(wikiItem);
}
}