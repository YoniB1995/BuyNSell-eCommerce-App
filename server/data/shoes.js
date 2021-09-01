const shoes = [
  {
    id:1,
    name: "Air Jordan XXXV Low Black & White",
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c540a05f-1a5f-4df6-8637-087e5cb25165/air-jordan-xxxv-low-basketball-shoe-sxct2C.png",
    description:
      "The Air Jordan XXXV Low maintains the overall aesthetic of the 34, with an updated Eclipse plate that rises higher into the upper. The edges of both Zoom Air units are now visible. The design balances cutting-edge innovations with OG details that nod to the history and heritage of the brand.",
    price: 199,
    countInStock: 15,
  },
  {
    id:2,
    name: "Air Jordan XXXV Low White ",
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a8d3b1f6-fa3a-4c5d-82e0-6265e91422bc/air-jordan-xxxv-low-basketball-shoe-sxct2C.png",
    description:
      "The Air Jordan XXXV Low maintains the overall aesthetic of the 34, with an updated Eclipse plate that rises higher into the upper. The edges of both Zoom Air units are now visible. The design balances cutting-edge innovations with OG details that nod to the history and heritage of the brand.",
    price: 199,
    countInStock: 13,
  },
  {
    id:3,
    name: "Nike Air Force Max II",
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c734c1ca-e712-4566-8d53-03660d04325c/air-force-max-ii-basketball-shoe-ZXgnrV.png",
    description:
      "The game has gone small, so bigs have to be faster, more agile and more versatile to stay relevant. Keeping pace with ever-evolving player needs, the Nike Air Force Max II provides the responsive cushioning that allows big players to keep crashing the boards and banging in the post, while helping them stay light and quick on the break.",
    price: 219,
    countInStock: 10,
  },
  {
    id:4,
    name: "Kyrie 6",
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/3a25da19-3f3f-4ecd-a1d9-4ca34e2ee76b/kyrie-6-basketball-shoe-Knb8rc.png",
    description:
      "Designed for Kyrie Irving's creative and unpredictable game, the Kyrie 6 focuses on comfort, control and energy return to help him go fast and stay fresh. Bouncy cushioning is paired with soft yet supportive foam for responsiveness and smooth heel-to-toe transitions. The midfoot strap and plush, padded collar lock him in and help keep him a step ahead of the competition.",
    price: 179,
    countInStock: 20,
  },
  {
    id:5,
    name: "Kyrie 7",
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/3bcb08b9-28ac-4612-8662-3c00976c6ebf/kyrie-7-basketball-shoe-hv6LdK.png",
    description:
      "Kyrie Irving is a creative force on and off the court. He needs his shoes to keep up with his playmaking, but also sync with his boundary-pushing style and ethos. Tuned for the next generation of energy return, control and speed, the Kyrie 7 helps players at all levels take advantage of their quick first step by optimising the shoe's fit, court feel and banking ability.",
    price: 215,
    countInStock: 25,
  },
  {
    id:6,
    name: "PG 5 ",
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/76eeff6c-3edc-4710-9b4b-ad3d3487485b/pg-5-basketball-shoe-tRSB6g.png",
    description:
      "Paul George has an effortlessly smooth, reliably steady game.He takes his time, but he's always well-positioned to make the extra pass, cut through the lane or nail a pull-up jumper.The PG 5 combines the agile low-top profile Paul likes with flexible Nike Air Strobel cushioning.The full-length Air unit is stitched directly to the upper, bringing the plush, bouncy cushioning right up under the foot—perfect for keeping PG feeling like he's moving on clouds.",
    price: 179,
    countInStock: 25,
  },
  {
    id:7,
    name: "Jordan Crater ",
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7f044c37-dd38-4383-b36f-fafbaa2b5765/jordan-crater-shoe-p61WJx.png",
    description:
      "Walk the talk in the all-new Jordan Crater, a shoe created with a total of at least 20% recycled content. The low-top is made from textiles with a stripped-down design to reduce adhesives, while the durable rubber outsole is made from at least 13% recycled Nike Grind rubber.",
    price: 215,
    countInStock: 30,
  },
  {
    id:8,
    name: "Nike React Live",
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/836a7b65-e017-4520-af4a-242735d01e76/react-live-older-shoe-fbDdR6.png",
    description:
      "Super bold, super soft and super cool—the Nike React Live isn't just any pair of sneakers. The cord that wraps around helps secure your laces and the fit. With super-comfy React foam and a breathable design, they're totally made for play and hanging out.",
    price: 95,
    countInStock: 25,
  },
  {
    id:9,
    name: "Nike Blazer Low '77",
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d8061109-e4d4-4bf9-856a-0b268a7444fa/blazer-low-77-shoe-57lxdx.png",
    description:
      "The Nike Blazer Low '77 went from a basketball must-have to an off-court legend.Now it's ready to land on your feet in a vivid summer blue tie-dye.The classic returns with a low-profile style, a leather retro Swoosh design and a super-soft collar.",
    price: 110,
    countInStock: 23,
  },
  {
    id:10,
    name: "Nike Air Max 200",
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ysahfyffq6n0bizzqisf/air-max-200-shoe-tsWJZK.png",
    description:
      "Inspired by patterns of energy radiating from Earth—like the flow of lava and the rhythmic ocean waves—the Nike Air Max 200 boasts the largest Max Air unit to date. With exceptional cushioning and modern detailing, this shoe radiates cool while providing optimal comfort.",
    price: 105,
    countInStock: 25,
  },
  {
    id:11,
    name: "Nike Zoom Mamba 3",
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/cd0k7fdrad0kptbn5cvc/zoom-mamba-3-distance-spike-XPTbxzmO.png",
    description:
      "The Nike Zoom Mamba 3 Unisex Distance Spike is designed for the steeplechase with a single-layer, open-mesh upper and perforated sockliner to help let moisture out on the fly. Their six-pin spike configuration provides a close-to-the-ground feel and incredible traction.",
    price: 450,
    countInStock: 14,
  },
  {
    id:12,
    name: "Nike React Infinity Run Flyknit 2",
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5878f982-343d-46f8-8bda-84588ad7c97c/react-infinity-run-flyknit-2-running-shoes-hD0Cd2.png",
    description:
      "A refreshed upper uses Flywire technology that combines with Flyknit for support and breathability where you need it. The high foam heights provide soft responsiveness and long-lasting comfort. It's still one of our most-tested shoes, designed to help you feel the potential when your foot hits the pavement.",
    price: 115,
    countInStock: 15,
  },
  {
    id:13,
    name: "Nike React Infinity Run Flyknit",
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/34dd40d6-7572-47f1-80ac-dd88a1b6b934/react-infinity-run-flyknit-running-shoe-4jHr6L.png",
    description:
      "The Nike React Infinity Run Flyknit is designed to help reduce injury and keep you on the run. More foam and improved upper details provide a secure and cushioned feel. Lace up and feel the potential as you hit the road.",
    price: 115,
    countInStock: 25,
  },
  {
    id:14,
    name: "Nike MD Runner 2",
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-556e01ae-b64c-4882-9330-ecf8de5d73cb/md-runner-2-shoes-PATZpBgm.png",
    description:
        "Nod to the running champ from the '90s.The Nike MD Runner 2 keeps the OG details in place with breathable mesh and soft leather details.Its low-top design adds a heritage Waffle sole and foam cushioning for comfort.",
    price: 85,
    countInStock: 35,
  },
  {
    id:15,
    name: "Nike Space Hippie 04",
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/49f8cf94-3100-425d-84f0-398cca07c6bd/space-hippie-04-shoe-jnGCxQ.png",
    description:
      "Space Hippie is a story of trash transformed. From the upper to the outsole, at least 25% of the Space Hippie 04 is made from recycled material, by weight. Not only is it the most lightweight silhouette within the collection, it also has the lowest carbon footprint. Its 'Space Waste Yarn' upper includes about 75% recycled content, by weight, made from recycled plastic bottles, T-Shirts and yarn scraps. A soft, Crater Foam midsole combines Nike grind with a blend of foams for stability and a unique aesthetic.",
    price: 100,
    countInStock: 30,
  },
  {
    id:16,
    name: "Nike Air Zoom Pulse",
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/49f8cf94-3100-425d-84f0-398cca07c6bd/space-hippie-04-shoe-jnGCxQ.png",
    description:
      "Built for and tested by nurses, the Nike Air Zoom Pulse combines cushioning and flexible traction for a comfortable, natural feel that lasts through long shifts on dry and slippery surfaces.The durable design is easy to clean, pull on and take off to keep you ready for the unexpected.",
    price: 105,
    countInStock: 55,
  },
  {
    id:17,
    name: "Nike Air Jordan 1 Mid" ,
    imageUrl:
      "https://cdn.kickscrew.com/media/catalog/product/cache/dd3ae58018643bb67b4bf8f0a77873b1/5/5/554724-074_Nike_Air_Jordan_1_Mid_Banned_Black_b.jpg",
    description:
      "Firstly arrived in 1985, Air Jordan 1 has been around for over 3 decades. The Jordan line keeps revamping the OG silhouettes with fresh colours and premium materials, and has also collaborated with different artists, designers and retailers to capture the essence of the original through a modern lens.",
    price: 145,
    countInStock: 43,
  },
  {
    id:18,
    name: "Nike Blazer Mid '77",
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f0a93845-6a47-4ce2-993a-e33cad4dc896/blazer-mid-77-shoes-XWXpXs.png",
    description:
      "The Nike Blazer Mid '77 dives into the details.Check the eyelets for jewel-encrusted accents for a subtle, yet luxurious touch.Smooth like backboard glass, suede leather on the upper delivers a crisp edge for vintage and versatile style that can work day and night.",
    price: 105,
    countInStock: 40,
  },
  {
    id:19,
    name: "Nike Air VaporMax Evo",
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f1354191-bbb7-4e5a-93b9-f118f8a5c404/air-vapormax-evo-shoe-gPhB5J.png",
    description:
      "The Nike Air VaporMax Evo puts Air Max DNA under the microscope, to showcase the distinguishing features of 7 Nike icons. From stitched overlays, to classic accents, to unbelievable comfort and overt '90s styling, it splices the must-haves of your favourite Air Max shoes onto 1 new design. Evolve your look and feel the comfort of everything Max.",
    price: 250,
    countInStock: 32,
  },
  {
    id:20,
    name: "Nike Reposto",
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5d065c50-2d2e-4758-8f7c-9a156e62bdee/reposto-shoe-qt1Tgh.png",
    description:
      "The Nike Reposto Shoe is designed to make your fit shine at any occasion. The thick foam midsole is big on comfort and style. The 'NKE 72' graphic on the side and modified Waffle outsole throwback to Nike's shoemaking heritage. Zig-zag stitching adds a craft finish for a shoe with heritage vibes and ultimate versatility.",
    price: 78,
    countInStock: 22,
  },
];

module.exports = shoes;