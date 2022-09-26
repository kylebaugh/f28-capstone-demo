
const baseURL = 'http://localhost:4567'

// Step 1: Select Elements

const addButton = document.querySelector('#addDrink')
const showDrinks = document.querySelector('#drinkDisplay')

// Step 2: Write functions

const createDrinkCard = (drink) => {
    const drinkCard = document.createElement('section')
    drinkCard.classList.add('drink-card')

    drinkCard.innerHTML = `
        <img alt='drink image' src='${drink.picture}'>
        <p>${drink.name}</p>
        <p>${drink.flavor}</p>
        <section>
            <button>Down</button>
            ${drink.likes}
            <button>Up</button>
        </section>
        `

    showDrinks.appendChild(drinkCard)
}

const getAllDrinks = () => {
    axios.get(`${baseURL}/getDrinks`)
        .then((res) => {
            showDrinks.innerHTML = ''
            let drinks = res.data
            for(let i = 0; i < drinks.length; i++){
                createDrinkCard(drinks[i])
            }

        })
}

const addDrink = () => {
                showDrinks.innerHTML = ''

    let name = document.querySelector('#nameInput')
    let flavor = document.querySelector('#flavorInput')
    let image = document.querySelector('#imageInput')

    let bodyObj = {
        name, 
        picture: image,
        flavor
    }

    axios.post(`${baseURL}/addDrink`, bodyObj)
        .then((res) => {
            console.log(res.data)

            showDrinks.innerHTML = ''

            name.value = ''
            flavor.value = ''
            image.value = ''

            let drinks = res.data
            for(let i = 0; i < drinks.length; i++){
                createDrinkCard(drinks[i])
            }

        })
        .catch((err) => {
            console.log(err)
        })
}

// Step 3: Combine with event listener

addButton.addEventListener('click', addDrink)


getAllDrinks()