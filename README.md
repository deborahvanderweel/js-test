# Games Validator
Hey hallo!
Voor deze opdracht heb ik een game validator gemaakt. 
Je kunt de validator bekijken door de `index.html` te openen in je browser. 

## Uitwerking
Ik heb een validator gemaakt die je game objecten checkt en laat zien of deze correct is of niet. 
Het gameSchema checkt de juiste datatypes. Deze vind je in het `script.js` bestand.

```javascript
    const gameSchema = {
        name: 'string',
        publisher: 'string',
        year: 'number',
        released: 'boolean',
        consoles: 'array',
    }
```

Daaronder zie je de verschillende objecten die true of false teruggeven. In mijn huidige validator zijn 2 objecten correct en 1 object is onjuist.

```javascript
  // should return true
    const gameObject = {
        name: 'Pokemon Blue',
        publisher: 'Nintendo',
        year: 1998,
        released: true,
        consoles: ['Gameboy']
    };
```
```javascript
    // should return true
    const gameObject2 = {
        name: 'The Last of Us Part I',
        publisher: 'Sony',
        year: 2013,
        released: true,
        consoles: ['Playstation 3', 'Playstation 4']
    };
```
```javascript
    // should return false
    const gameObject3 = {
        name: 'Ni No Kuni',
        publisher: false,
        year: 2011,
        released: true,
        consoles: {},
    };
```
## Hoe test ik dit nou?
Goeie vraag!
- Je kunt in de `script.js` de huidige objecten aanpassen en spelen met de verschillende data types. 
- Ook kun je een nieuw object toevoegen en checken of deze werkt. 

#### let op: 
Vergeet niet na het toevoegen van een nieuw object deze ook toe te voegen aan regel `57`! Anders neemt hij het object niet mee in de check!
```javascript
    var gameObjects = [gameObject, gameObject2, gameObject3]
```