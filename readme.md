# Bygga

Allt för att bygga skall vara på plats. Kör en `npm install` följt av en `npm build` så skapas en sida i `dist Den gör inte så mycket än men den fungerar att bygga. Bygget använder Parcel.

# Test

Använder Jest för test. kör dom med `npm test` och allt skall fungera. Den kollar så att alla stories man skapar och lägger till i deck har rätt format och så.

# Game loop

Man har alltås en gamestate. I den finns en lista med olika stories att välja mellan. Man anropar `nextStory(gameState)` och får tillbaks en vald story och en ny gameState.

Man kan då skriva ut storyn och valen (om man vill) sen anropar man det val man vill ha med gameState som parameter. Den resulterar i en ny gameState med resolution satt. Efter det rå repeterar man bara.

# Lägga till stories

För att lägga till stories så gör man lättast på följande sätt. I `deck1.js` så gör man en skapar man en story med

```js
const storyText "Storytext som skall sluta med . ? eller !";
const choice1 = createChoice("Choicetext.", s => setresolution("Resolutiontext.", s));
const choice2 = createChoice("Choicetext.", s => setresolution("Resolutiontext.", s));
const choice3 = createChoice("Choicetext.", s => setresolution("Resolutiontext.", s));
const story = createStory(storyText, choice1, choice2, choice3);
const deck = [story];
export story;
```

funktionen på choice är alltså en funktion som tar en gameState och returnerar en ny gameState med resolution satt. Man sätter en resoultion med `setResolution`. Resolution är alltså en ny gamestate som är resultatet av valet och resolutiontexten är beskrivande text av vad som hände när man valde det alternativet.

Mer ingående beskrivning hur det fungerar kommer.
