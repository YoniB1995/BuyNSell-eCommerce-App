const games = [
  {
    id:1,
    name: "Oculus Quest 2 — Advanced",
    imageUrl:
      "https://m.media-amazon.com/images/I/615YaAiA-ML._SL1500_.jpg",
    description:
      "Next-level Hardware - Make every move count with a blazing-fast processor and our highest-resolution display. All-In-One Gaming - With backward compatibility, you can explore new titles and old favorites in the expansive Quest content library",
    price: 299,
    countInStock: 15,
  },
  {
    id:2,
    name: "SAMSUNG HMD Odyssey+ Windows Mixed Reality ",
    imageUrl:
      "https://m.media-amazon.com/images/I/71x89-gSQVL._AC_SL1500_.jpg",
    description:
      "3K anti-sde AMOLED display (2880x1600) with wide 110O field of view. Direct Full Array Backlight 4X: Concentrated Zones of Precision-Controlled LEDs Auto-Adjust Contrast Between Pure Whites and Ultra-Deep Blacks, Revealing Hidden Details in Even the Darkest Scenes",
    price: 939,
    countInStock: 10,
  },
  {
    id:3,
    name: "Sony Playstation Gift Card 50$",
    imageUrl:
      "https://m.media-amazon.com/images/I/619IviEX+6S._SL1500_.jpg",
    description:
      "The Ultimate Entertainment Card, No returns and no refunds on gift cards.",
    price: 49,
    countInStock: 10,
  },
  {
    id:4,
    name: "SONY PlayStation 4 Slim 1TB Console",
    imageUrl:
      "https://m.media-amazon.com/images/I/61OL2zIliML._SL1500_.jpg",
    description:
      "Includes a new slim 1TB PlayStation 4 system, a matching DualShock 4 Wireless Controller. Play online with your friends, save games online and more with PlayStation Plus membership (sold separately).All the greatest, games, TV, music and more. Connect with your friends to broadcast and celebrate your epic moments at the press of the Share button to Twitch, YouTube, Facebook and Twitter.",
    price: 311,
    countInStock: 20,
  },
  {
    id:5,
    name: "NBA 2K22 - PlayStation 4",
    imageUrl:
      "https://m.media-amazon.com/images/I/814IztfQ5LL._SL1500_.jpg",
    description:
      "A WORLD OF BASKETBALL: NBA 2K22 puts the entire basketball universe in your hands. PLAY NOW in real NBA and WNBA environments against authentic teams and players. Build your own dream team in MyTEAM with today’s stars and yesterday’s legends.",
    price: 59,
    countInStock: 80,
  },
  {
    id:6,
    name: "NBA 2K22 75th Anniversary Edition - PlayStation 4",
    imageUrl:
      "https://m.media-amazon.com/images/I/81TuYMuk9CL._SL1500_.jpg",
    description:
      "A WORLD OF BASKETBALL: NBA 2K22 puts the entire basketball universe in your hands. PLAY NOW in real NBA and WNBA environments against authentic teams and players. Build your own dream team in MyTEAM with today’s stars and yesterday’s legends..",
    price: 99,
    countInStock: 40,
  },
  {
    id:7,
    name: "NBA 2K22 75th Anniversary Edition - X-Box Series X ",
    imageUrl:
      "https://m.media-amazon.com/images/I/815NWDxEw1L._SL1346_.jpg",
    description:
      "A WORLD OF BASKETBALL: NBA 2K22 puts the entire basketball universe in your hands. PLAY NOW in real NBA and WNBA environments against authentic teams and players. Build your own dream team in MyTEAM with today’s stars and yesterday’s legends..",
    price: 99,
    countInStock: 50,
  },
  {
    id:8,
    name: "Xbox Series X",
    imageUrl:
      "https://m.media-amazon.com/images/I/41OH7dLwaJL._SL1280_.jpg",
    description:
      "Introducing Xbox Series X, the fastest, most powerful Xbox ever. Play thousands of titles from four generations of consoles-all games look and play best on Xbox Series X. Experience next-gen speed and performance with the Xbox velocity architecture, powered by a custom SSD and integrated software.",
    price: 820,
    countInStock: 40,
  },
  {
    id:9,
    name: "Xbox One Limited Edition Call of Duty: Advanced Warfare Bundle",
    imageUrl:
      "https://m.media-amazon.com/images/I/51NSV2JMRYL.jpg",
    description:
      "What's in the box: Limited edition Xbox One console with custom skin; 1TB hard drive for extra space to store games; Call of Duty Advanced Warfare download token; Limited edition wireless controller with custom skin; chat headset; HDMI cable; power supply. Xbox One brings together games, live TV and your favorite entertainment apps, including Amazon Instant Video, ESPN, Netflix, and Xbox Music",
    price: 325,
    countInStock: 45,
  },
  {
    id:10,
    name: "Xbox One S 2TB Limited Edition Console - Gears of War 4 Bundle",
    imageUrl:
      "https://m.media-amazon.com/images/I/719g3vUqljL._SL1236_.jpg",
    description:
      "This bundle includes: Custom Xbox One S 2TB Console and Crimson Omen controller, vertical stand, full game download of Gears of War 4: Ultimate Edition (card with code included in box) which includes a 4 day early access to the game, Vintage Limited Edition Console Pack, exclusive in-game items, six Gear Packs, and a Season Pass for even more exclusive content, including six additional Gear Packs.",
    price: 465,
    countInStock: 40,
  },
  {
    id:11,
    name: "Microsoft Xbox 360 Elite 120GB Console Bundle",
    imageUrl:
      "https://m.media-amazon.com/images/I/71v+76MkqiL._SL1500_.jpg",
    description:
      "This pre-owned product has been professionally inspected, tested and cleaned by Amazon-qualified suppliers. There will be no visible cosmetic imperfections when held at an arm’s length. Products with batteries will exceed 80% capacity relative to new.",
    price: 268,
    countInStock: 15,
  },
  {
    id:12,
    name: "Madden NFL 22 - Xbox Series X",
    imageUrl:
      "https://m.media-amazon.com/images/I/61VsVZcu78S._SL1000_.jpg",
    description:
      "Pre-Order Madden NFL 22 to receive- Franchise: 20 Staff Points-Face Of The Franchise & The Yard: The General Player Class Starting at Level 10. Tom Brady Gear Capsule",
    price: 51,
    countInStock: 20,
  },
  {
    id:13,
    name: "Call of Duty: Black Ops Cold War (Xbox X)",
    imageUrl:
      "https://m.media-amazon.com/images/I/81duXjS1JvS._SL1500_.jpg",
    description:
      "As Elite operatives, you will Follow the trail of a shadowy Figure named perseus who is on a mission to destabilize the global balance of power and change the course of history. Descend into the dark center of this global conspiracy alongside iconic characters woods, Mason and hudson and a new cast of operatives attempting to stop a plot decades in the making.",
    price: 37,
    countInStock: 18,
  },
  {
    id:14,
    name: "PlayStation 5 Console",
    imageUrl:
      "https://m.media-amazon.com/images/I/619BkvKW35L._SL1500_.jpg",
    description:
        "Lightning Speed - Harness the power of a custom CPU, GPU, and SSD with Integrated I/O that rewrite the rules of what a PlayStation console can do. Stunning Games - Marvel at incredible graphics and experience new PS5 features.",
    price: 3298,
    countInStock: 40,
  },
  {
    id:15,
    name: "Marvel's Spider-Man: Miles Morales",
    imageUrl:
      "https://m.media-amazon.com/images/I/71bqboqDUiL._SL1361_.jpg",
    description:
      "Miles Morales discovers explosive powers that set him apart from his mentor, Peter Parker. Master his unique, bio-electric venom blast attacks and covert camouflage power alongside spectacular web-slinging acrobatics, gadgets and skills. ",
    price: 49,
    countInStock: 35,
  },
  {
    id:16,
    name: "Lost Judgment - PlayStation 5",
    imageUrl:
      "https://m.media-amazon.com/images/I/71h3Ir-lMKL._SL1476_.jpg",
    description:
      "Put Yagami’s distinct martial arts forms to the test in order get to the bottom of the case. Harness the Crane, Tiger, and new Snake stance, a graceful style that can deflect and return an opponent’s strikes, using their energy against them",
    price: 59,
    countInStock: 28,
  },
  {
    id:17,
    name: "The Medium - PlayStation 5" ,
    imageUrl:
      "https://m.media-amazon.com/images/I/81s30U2xKYL._SL1476_.jpg",
    description:
      "The Medium is a third-person psychological horror game that features patented dual-reality gameplay and an original soundtrack co-composed by Arkadiusz Reikowski and Akira Yamaoka",
    price: 49,
    countInStock: 43,
  },
  {
    id:18,
    name: "Observer: System Redux - PlayStation 5",
    imageUrl:
      "https://m.media-amazon.com/images/I/81umIJWeYaS._SL1476_.jpg",
    description:
      "You play as Daniel lazarski, an elite investigator of the future portrayed by late cyberpunk icon rutger hauer - as an observer, you hack into the minds of Suspects to extract clues and evidence.",
    price: 29,
    countInStock: 55,
  },
  {
    id:19,
    name: "Dying Light 2 Stay Human (Deluxe Edition) – PlayStation 5",
    imageUrl:
      "https://m.media-amazon.com/images/I/81+NdKy+OUS._SL1500_.jpg",
    description:
      "Pre-Order to Receive the “Reload Pack DLC” Including: Reload Outfit, Reload Weapon Skin, Reload Paraglider Skin. VAST OPEN WORLD - Participate in the life of a city engulfed in a new dark era. Discover different paths and hidden passages, as you explore its multiple levels and locations",
    price: 79,
    countInStock: 25,
  },
  {
    id:20,
    name: "Recon 500 Wired Multiplatform Gaming Headset ",
    imageUrl:
      "https://m.media-amazon.com/images/I/81s9O8qgVvL._SL1500_.jpg",
    description:
      "Turtle Beach 60mm Eclipse dual drivers – The world’s first gaming headset with all-new patented dual drivers that separate high and low frequencies for ultra-detailed gaming audio across a massive soundstage; US Patent No. US9686604B2 . Pro-level comms - developed for professional gaming, The truspeak Removable, noise-cancelling microphone delivers reliable, clear chat",
    price: 79,
    countInStock: 35,
  },
];

module.exports = games;