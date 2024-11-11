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
    }

    const elems = document.querySelectorAll(".sidenav");
    if (M && M.Sidenav) {
        M.Sidenav.init(elems, options);
    }

    const addPoemButton = document.getElementById("add-poem");
    addPoemButton.addEventListener("click", function () {
        const poemInput = document.getElementById("poem-input");
        const vip = document.getElementById("vip");

        addNewPoem(poemInput.value, vip.checked);
    });

    const addPoemButtonFromAPI = document.getElementById("add-poem-from-api");
    addPoemButtonFromAPI.addEventListener("click", async function () {
        try {
            const poemData = await fetch("http://localhost:8000");
            const poemJson = await poemData.json();

            poemJson.forEach(poem => {
                addNewPoem(poem.poem, false);
            });
        } catch (error) {
            console.error("Failed to fetch poems from API:", error);
        }
    });
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