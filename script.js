    // function to get an element by id
    function id(elem) {
        return document.getElementById(elem)
    }

    // function to get an element by class
    function className(elem) {
        return document.getElementsByClassName(elem)
    }

    // function to create a html element with id, class and src
    function createElement(type, className, id, src) {
        var element = document.createElement(type);
        element.className = className;
        element.id = id;
        element.src = src;
        return element;
    }

    // schema with the required data types
    const gameSchema = {
        name: 'string',
        publisher: 'string',
        year: 'number',
        released: 'boolean',
        consoles: 'array',
    }

    // should return true
    const gameObject = {
        name: 'Pokemon Blue',
        publisher: 'Nintendo',
        year: 1998,
        released: true,
        consoles: ['Gameboy']
    };

    // should return true
    const gameObject2 = {
        name: 'The Last of Us Part I',
        publisher: 'Sony',
        year: 2013,
        released: true,
        consoles: ['Playstation 3', 'Playstation 4']
    };

    // should return false
    const gameObject3 = {
        name: 'Ni No Kuni',
        publisher: false,
        year: 2011,
        released: true,
        consoles: {},
    };

    // combine all objects in 1
    var gameObjects = [gameObject, gameObject2, gameObject3]

    let mainDiv = id('mainDiv'),
        cardsContainer = id('cardsContainer')


    validateObject();

    function validateObject() {
        // loop through all the gameobjects
        for (let i = 0; i < gameObjects.length; i++) {
            // create a card for every object
            let card = createElement('div', 'card', 'card' + i)
            cardsContainer.appendChild(card)

            // check the key and value in the schema and compare this with the objects
            for (const [key, value] of Object.entries(gameSchema)) {
                // if it's not the correct data type create the element but return false
                // need a extra check for the array because typeof is not working for a array
                if (typeof gameObjects[i][key] !== value && !Array.isArray(gameObjects[i][key])) {
                    // create the error message and fail icon and append it to the card
                    let wrong = createElement('div', 'wrong', 'wrong')
                    let errorMessage = `${key} is a ${typeof gameObjects[i][key]}, it should be a ${value}`
                    let failIcon = createElement('img', 'failIcon', 'failIcon', '../img/cancel.svg')
                    wrong.innerHTML = '<p>' + key + '</p>' + errorMessage
                    card.appendChild(wrong)
                    wrong.insertBefore(failIcon, wrong.childNodes[0]);
                } else {
                    // if it's the correct data type create the element and return this
                    let correct = createElement('div', 'correct', 'correct')
                    let checkMark = createElement('img', 'checkmark', 'checkmark', '../img/checked.svg')
                    correct.innerHTML = '<p>' + key + '</p>' + gameObjects[i][key]
                    card.appendChild(correct)
                    correct.insertBefore(checkMark, correct.childNodes[0]);
                }
            }
        }
    }