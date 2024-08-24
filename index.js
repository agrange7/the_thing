const menuElement = document.querySelector (".nav-menu")
const ulElement = document.querySelector (".nav-ul")

function openMenu(){
    if (ulElement.classList.contains("nav-ul--open")){
        ulElement.classList.remove("nav-ul--open")
    }
    else {
        ulElement.classList.add("nav-ul--open")  
    }
}

menuElement.addEventListener("click", openMenu)

document
.querySelector("add-film-form")
.addEventListener("submit", function(event){
    event.preventDefault();

    const title = document.getElementById("card-title").value; 
    const description = document.getElementById("card-description").value;
    const imageUrl = document.getElementById("card-image").value || "https://picsum.photos/200";


    console.log ({
        title,
        description,
        imageUrl,
    });

    const cardContainer = document.querySelector(".all-films-container");
    const newCard = document.createElement("div");
    newCard.className = "all-films-resume films-container-hover";

    newCard.innerHTML = `
            <img
              class="all-films-img films-img-hover"
              src= ${imageUrl}
              alt=""
            />
            <div class="all-films-hover hover--opacity">
              <p class="all-films-hover-paragraph">${title}</p>
            </div>
    `;    

    cardContainer.appendChild(newCard)

    document.querySelector("add-film-form").reset();
    
})