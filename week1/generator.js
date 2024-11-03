function createWikiItem(breed, imageUrl, wikiText) {
    const mainContainer = document.querySelector('.container');

    const wikiItem = document.createElement('div');
    wikiItem.className = 'wiki-item';

    const wikiHeader = document.createElement('h1');
    wikiHeader.textContent = breed;
    wikiHeader.className = 'wiki-header';

    const wikiContent = document.createElement('div');
    wikiContent.className = 'wiki-content';

    const wikiParagraph = document.createElement('p');
    wikiParagraph.textContent = wikiText;
    wikiParagraph.className = 'wiki-text';

    const imgContainer = document.createElement('div');
    imgContainer.className = 'img-container';

    const wikiImg = document.createElement('img');
    wikiImg.src = imageUrl;
    wikiImg.alt = `Image of ${breed}`;
    wikiImg.className = 'wiki-img';

    imgContainer.appendChild(wikiImg);
    wikiContent.appendChild(wikiParagraph);
    wikiContent.appendChild(imgContainer);

    wikiItem.appendChild(wikiHeader);
    wikiItem.appendChild(wikiContent);

    mainContainer.appendChild(wikiItem);

    console.log(`Displayed content for ${breed}`);
}



function fetchDogImages(numImages = 1) {
    const apiUrl = `https://dog.ceo/api/breeds/image/random/${numImages}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log('Fetched images:', data.message);

            if (data.message.length === 0) {
                console.log('No images received');
                return;
            }

            data.message.forEach(imageUrl => {
                const breedName = extractBreedName(imageUrl);
                const formattedBreed = formatBreedName(breedName);

                fetchWikiData(formattedBreed)
                    .then(wikiText => {
                        createWikiItem(formattedBreed, imageUrl, wikiText);
                    });
            });
        });
}

function extractBreedName(url) {
    const parts = url.split('/');
    const breedSegment = parts[parts.length - 2];

    return breedSegment.includes('-') ? breedSegment.split('-').reverse().join(' ') : breedSegment.replace('-', ' ');
}

function formatBreedName(breed) {
    return breed
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function fetchWikiData(breed) {
    const wikiApiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(breed)}`;

    return fetch(wikiApiUrl)
        .then(response => response.json())
        .then(data => data.extract);
}



fetchDogImages(5);