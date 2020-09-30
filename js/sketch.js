// Opdracht 4A: Order matters!

function setup () {
  createCanvas (750,750)
  background (240)
}

function draw () {
    // figuur 1
    noStroke ()
    fill (200)
    rect (50, 75, 200, 200)

    noStroke ()
    fill (255,125,50)
    ellipse (250,175,200,200)

    fill (255)
    rect (250,175, 100, 100)

    fill (200)
    rect (150,175, 100, 100)

    stroke (0)
    strokeWeight (7)
    point (250,175)

    // figuur 2
    noStroke ()
    fill (255,125,50)
    ellipse (600,175,200,200)
    
    noStroke ()
    fill (200)
    rect (400,75,200,200)

    stroke (0)
    strokeWeight (7)
    point (600,175)
}
