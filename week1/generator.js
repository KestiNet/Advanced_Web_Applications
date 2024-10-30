function randomTextGenerator(count) {
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
}