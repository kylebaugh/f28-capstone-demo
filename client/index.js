
const baseURL = 'http://localhost:4567'

// Step 1: Select Elements

const addButton = document.querySelector('#addDrink')

// Step 2: Write functions

const addDrink = () => {
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
        })
        .catch((err) => {
            console.log(err)
        })
}

// Step 3: Combine with event listener

addButton.addEventListener('click', addDrink)