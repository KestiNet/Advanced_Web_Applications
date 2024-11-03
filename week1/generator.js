

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
                const breed = breeedName(imageUrl);
                const breedFormat = breeder(breed);

                fetchWikiPedia(breedFormat)
                    .then(wikiContent => {
                        template(breedFormat, imageUrl, wikiContent);
                    });
            });
        })
      
}

function breeedName(url) {
    const parts = url.split('/');
    const breedPart = parts[parts.length - 2];

    return breedPart.includes('-') ? breedPart.split('-').reverse().join(' ') : breedPart.replace('-', ' ');
}

function breeder(breed) {

    return breed
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function fetchWikiPedia(breed) {
    const apiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(breed)}`;

    return fetch(apiUrl)
        .then(response => {
     
            return response.json();
        })
        .then(data => data.extract)

}

function template(breed, imageUrl, wikiContent) {
    const container = document.querySelector('.container');

    const wikiDiv = document.createElement('div');
    wikiDiv.className = 'wiki-content';

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

    wikiDiv.appendChild(imgContainer);
    wikiDiv.appendChild(wikiTextDiv);

    container.appendChild(wikiDiv);

    console.log(`Displayed content for ${breed}`);
}


fetchDogPictures(5);