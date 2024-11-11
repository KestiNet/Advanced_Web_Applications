function initialize() {
    const options = {
        edge: "right",
        draggable: false,
        inDuration: 250,
        outDuration: 200,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null,
        preventScrolling: true
    };

    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, options);

    const addPoemButton = document.getElementById("add-poem");
    if (addPoemButton) {
        addPoemButton.addEventListener("click", async function () {
            const poemInput = document.getElementById("poem-input");
            const vip = document.getElementById("vip");

            try {
                const poemData = await fetch("http://localhost:8000", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ poem: poemInput.value })
                });

                // Check if response is JSON before parsing
                const contentType = poemData.headers.get("content-type");
                if (contentType && contentType.includes("application/json")) {
                    const poemsJson = await poemData.json();
                    console.log(poemsJson);
                } else {
                    console.error("Server response is not JSON:", await poemData.text());
                }

                addNewPoem(poemInput.value, vip.checked);
            } catch (error) {
                console.error("Error adding poem:", error);
            }
        });
    }

    const addPoemButtonFromAPI = document.getElementById("add-poem-from-api");
    if (addPoemButtonFromAPI) {
        addPoemButtonFromAPI.addEventListener("click", async function () {
            try {
                const poemData = await fetch("http://localhost:8000");
                
                const contentType = poemData.headers.get("content-type");
                if (contentType && contentType.includes("application/json")) {
                    const poemsJson = await poemData.json();
                    poemsJson.forEach(poem => {
                        addNewPoem(poem.poem, false);
                    });
                } else {
                    console.error("Server response is not JSON:", await poemData.text());
                }
            } catch (error) {
                console.error("Failed to fetch poems from API:", error);
            }
        });
    }
}

function addNewPoem(poem, vip) {
    const theWall = document.getElementById("the-wall");
    let newListItem = document.createElement("li");

    if (vip === true) {
        newListItem.classList.add("vip");
    }
    newListItem.classList.add("col", "s6", "m4", "l3");
    newListItem.appendChild(document.createTextNode(poem));
    theWall.appendChild(newListItem);
}

initialize();