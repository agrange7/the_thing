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

const addFilmFormElement = document.querySelector(".add-film-form");
console.log(addFilmFormElement);

addFilmFormElement.addEventListener("submit", (event)=>{
    event.preventDefault();

    const inputs = document.querySelectorAll('.add-film-form-input');
    let isValid = {
        title : false,
        image : false
    };
    console.log(isValid);
inputs.forEach ((input, index) => {
    if (input.value.trim() === ''){
        input.classList.add('add-film-form-input--invalid');
        index === 0 ? 
        isValid.title = false
        :isValid.image = false
        console.log(index);
    }   else {
        input.classList.remove('add-film-form-input--invalid');
        isValid.title = true
        isValid.image = true
    }
    console.log(isValid);
});
    if (isValid.title && isValid.image) {
    event.preventDefault();

    const title = document.getElementById("card-title").value; 
    const imageUrl = document.getElementById("card-image").value || "https://picsum.photos/200";

    console.log ({
        title,
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

    addFilmFormElement.reset();  
  }
})

const buttonFilmElement = document.querySelector(".add-film-button");

const deployMenuFilm = () => {
    addFilmFormElement.classList.toggle("add-film-form--active")
}

buttonFilmElement.addEventListener("click", deployMenuFilm);


