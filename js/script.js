// HYPERCODEX ------- //
// Expérimentation 1 - Mise en page générative
let cols, rows;
let spacing = 250;
let scale = 0.3;
let size = [];
let habitus;
let mouseDist = 400;
let randomWord = 'O'
// let words = ["ici\nune chose et son contraire cohabitent\nle nouveau et l'ancien ne s'excluent pas mutuellement",
//     "je ne suis réductible à rien j'avance masquée",
//     "je suis à la fois ce qui existe et n'existe pas encore\nnous n'inventons rien que des outils sur la page\nc'est une combine une machination\nnous en appelons aux formes résiduelles\npour le partage des eaux\nle liquide la pression l'espace\nsont encore là\nprenez-les sinon il ne restera rien",
//     "j'apprends à parler comme un robot j'oublie les petites choses les détails je réponds le néant le tout à la fois\nje retourne aux racines pour créer les mots de demain",
//     "je donne aux mots passes une mise à jour un nouveau visage",
//     "le roi est nu au fond\ntout est comme avant\ncheval de Troie des matériaux bruts\non nous cache quelque chose mais quoi"
// ]

function preload() {
    habitus = loadFont('assets/fonts/habitus-medium.otf')
}

function setup() {
    console.log('Page Loaded');
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    cols = width / spacing;
    rows = height / spacing;
}

function draw() {
    background(220);
    let halfSpacing = spacing / 2;
    for (let i = 0; i < cols; i++) {
        let x = halfSpacing + i * spacing;
        for (let j = 0; j < rows; j++) {
            let y = halfSpacing + j * spacing;
            let distance = dist(mouseX, mouseY, x, y);
            if (distance < mouseDist) {
                size[i + j * cols] = distance * scale; // Store directly in a 1D array
                // rect(x, y, size[i + j * cols], size[i + j * cols]);
                textAlign(CENTER, CENTER)
                textFont(habitus)
                textSize(size[i + j * cols])
                text(randomWord, x, y);

            } else {
                size[i + j * cols] = 0; // Avoid storing unused values
            }
        }
    }
}

function mousePressed() {
    spacing = random(100, 250)
    scale = random(0.1, 0.8)
    mouseDist = random(100, 800)

    generateRandomWord();
}


function generateRandomWord() {
    let randomIndex = Math.floor(Math.random() * words.length);
    randomWord = words[randomIndex];
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}