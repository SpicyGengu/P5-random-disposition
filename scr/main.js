let randomNr;
let amountSum = 0;
let startPos = 100;
let lineSpread = 20;
let maxHeight = 150;
let varChance = [];
let varAmmount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let checkbox;

function setup() {
    createCanvas(400, 400);
    checkbox = createCheckbox('label', false);
    checkbox.changed(checkedEvent);
}

function draw() {
    if(checkbox.checked()) {
        randomNr = int(randomGaussian(5.5, 1.5)); //random normal distribution
    } else {
        randomNr = int(random(0, 11)); //random lige distributionb
    }
    
    for(let i = 0; i < 11; i++) {
        if(randomNr === i) {
        varAmmount[i]++;
        }
        varChance[i] = varAmmount[i] / amountSum;
    }

    amountSum++;
        
    background(220);

    for(let i = 0; i < 11; i++) {
        line(startPos + lineSpread * i, height, startPos + lineSpread * i, maxHeight * (2 - varChance[i]));
        line(startPos + lineSpread * i, maxHeight * (2 - varChance[i]), startPos + lineSpread * (i + 1), maxHeight * (2 - varChance[i + 1]));
        circle(startPos + lineSpread * i, maxHeight * (2 - varChance[i]), 5);
    }

    text("Antal 0er: " + varAmmount[0], 20, 20);
    text("Antal 1er: " + varAmmount[1], 20, 20 + 20 * 1);
    text("Antal 2er: " + varAmmount[2], 20, 20 + 20 * 2);
    text("Antal 3er: " + varAmmount[3], 20, 20 + 20 * 3);
    text("Antal 4er: " + varAmmount[4], 20, 20 + 20 * 4);
    text("Antal 5er: " + varAmmount[5], 20, 20 + 20 * 5);
    text("Antal 6er: " + varAmmount[6], 20, 20 + 20 * 6);
    text("Antal 7er: " + varAmmount[7], 20, 20 + 20 * 7);
    text("Antal 8er: " + varAmmount[8], 20, 20 + 20 * 8);
    text("Antal 9er: " + varAmmount[9], 20, 20 + 20 * 9);
    text("Antal 10er: " + varAmmount[10], 20, 20 + 20 * 10);

    text("% 0er: " + varChance[0], 300, 20);
    text("% 1er: " + varChance[1], 300, 20 + 20 * 1);
    text("% 2er: " + varChance[2], 300, 20 + 20 * 2);
    text("% 3er: " + varChance[3], 300, 20 + 20 * 3);
    text("% 4er: " + varChance[4], 300, 20 + 20 * 4);
    text("% 5er: " + varChance[5], 300, 20 + 20 * 5);
    text("% 6er: " + varChance[6], 300, 20 + 20 * 6);
    text("% 7er: " + varChance[7], 300, 20 + 20 * 7);
    text("% 8er: " + varChance[8], 300, 20 + 20 * 8);
    text("% 9er: " + varChance[9], 300, 20 + 20 * 9);
    text("% 10er: " + varChance[10], 300, 20 + 20 * 10);
}

function checkedEvent() {
    varAmmount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    amountSum = 0;
}