

function fetchDogPictures(numImages = 1) {
    const url = `https://dog.ceo/api/breeds/image/random/${numImages}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('Fetched data:', data.message);

            if (data.message.length === 0) {
                console.log('No images received');
                return;
            }

            data.message.forEach(imageUrl => {
                const breed = extractBreeedName(imageUrl);
                const formattedbreed = formatbreed(breed);

                fetchWikipediaContent(formattedbreed)
                    .then(wikiContent => {
                        createBreedElement(formattedbreed, imageUrl, wikiContent);
                    });
            });
        })
        //.catch(error => {
          //  console.error('Error fetching the dog pictures:', error);
        //});
}

function extractBreeedName(url) {
    const parts = url.split('/');
    const breedPart = parts[parts.length - 2];

    return breedPart.includes('-') ? breedPart.split('-').reverse().join(' ') : breedPart.replace('-', ' ');
}

function formatbreed(breed) {
    const specialCases = {
        'frise bichon': 'Bichon Frise',
        'terrier yorkshire': 'Yorkshire Terrier',
    };

    if (specialCases[breed.toLowerCase()]) {
        return specialCases[breed.toLowerCase()];
    }

    return breed
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function fetchWikipediaContent(breed) {
    const apiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(breed)}`;

    return fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Wikipedia page not found for ${breed}`);
            }
            return response.json();
        })
        .then(data => data.extract)
        .catch(error => {
            console.error('Error, wikipedia fetch failed:', error);
            return 'breed info unavailable.';
        });
}

function createBreedElement(breed, imageUrl, wikiContent) {
    const container = document.querySelector('.container');

    const wikiContentDiv = document.createElement('div');
    wikiContentDiv.className = 'wiki-content';

    const imgContainer = document.createElement('div');
    imgContainer.className = 'img-container';

    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = `Image of ${breed}`;
    image.className = 'breed-image'; 

    imgContainer.appendChild(image);

    const wikiTextDiv = document.createElement('div');
    wikiTextDiv.className = 'wiki-text';

    const header = document.createElement('h1');
    header.textContent = breed;
    header.className = 'breed-header'; 

    const description = document.createElement('p');
    description.textContent = wikiContent;
    description.className = 'description'; 

    wikiTextDiv.appendChild(header);
    wikiTextDiv.appendChild(description);

    wikiContentDiv.appendChild(imgContainer);
    wikiContentDiv.appendChild(wikiTextDiv);

    container.appendChild(wikiContentDiv);

    console.log(`Displayed content for ${breed}`);
}


fetchDogPictures(5);