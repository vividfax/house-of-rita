let words = [""];

function setup() {

    createCanvas(windowWidth, windowHeight);
    background(107, 113, 126);
    fill("#FFE8E1");
    textSize(40);
    textFont("Lora");
}

function draw() {

    background(107, 113, 126, 7);
    text(words.join(" "), 10, 10, width-10, height-10);
}

function keyPressed() {

    if (keyCode >= 65 && keyCode <= 90) {
        words[words.length-1] += key;
    } else if (keyCode == 32 && words[words.length-1].length > 0) {

        let input = words[words.length-1];

        if (!RiTa.hasWord(input)) {
            input = RiTa.spellsLike(input, {limit:1});
        } else {
            input = RiTa.rhymes(input, {limit:1});
        }

        if (input != "") {
            words[words.length-1] = input;
        }

        words.push("");
    }
}