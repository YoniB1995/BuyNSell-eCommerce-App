const bags = [
  {
    id:1,
     type:"bags",
    name: "DAUPHINE MM",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-dauphine-mm-monogram-handbags--M44391_PM2_Front%20view.png?wid=456&hei=456",
    description:
      "This Louis Vuitton classic is the latest it-bag: Nicolas Ghesquière has updated the Dauphine for the Cruise 2019 collection. With its appealing combination of Monogram and Monogram Reverse canvas plus new features like a chain strap and magnetized lock, it epitomizes the House’s flair for adapting its heritage to modern lifestyles. A must-have for Monogram lovers.",
    price: 3250,
    countInStock: 15,
  },
  {
    id:2,
    type:"bags",
    name: "SINCE 1854 DAUPHINE MM",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-since-1854-dauphine-mm-monogram-jacquard-since-1854-handbags--M57211_PM2_Front%20view.png?wid=456&hei=456",
    description:
      "The Dauphine MM handbag is made from the House’s new Jacquard Since 1854 textile, with a woven pattern of Monogram Flowers, LV Initials, and 1854s, a reference to the year of Louis Vuitton’s founding. Its elegant design, numerous inside compartments, and removable strap make it a great everyday bag.",
    price: 3800,
    countInStock: 10,
  },
  {
    id:3,
    type:"bags",
    name: "NÉONOÉ BB",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-n%C3%A9ono%C3%A9-bb-epi-leather-handbags--M57706_PM2_Front%20view.png?wid=456&hei=456",
    description:
      "The adorable NéoNoé BB bucket bag now features an embroidered Jacquard strap for stylish shoulder carry. The wide removable strap is reversible: Louis Vuitton logos on one side, Monogram Flowers on another. Made from grained Epi leather, this compact bag has two inside compartments and a central flat pocket that closes with a press stud.",
    price: 2510,
    countInStock: 12,
  },
  {
    id:4,
    type:"bags",
    name: "TWIST MM",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-twist-mm-epi-leather-handbags--M57505_PM2_Front%20view.png?wid=456&hei=456",
    description:
      "The iconic lines of the Twist MM handbag are revamped with a wide Jacquard strap. Embroidered with Louis Vuitton on one side and Monogram Blossoms on the other, the removable strap enables short cross-body carry. This Twist can also be carried by hand or worn on the elbow, thanks to a removable leather handle.",
    price: 4150,
    countInStock: 20,
  },
  {
    id:5,
    type:"bags",
    name: "LV PONT 9",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-pont-9-calfskin-leather-handbags--M57325_PM2_Front%20view.png?wid=456&hei=456",
    description:
      "The structured yet curved lines of the LV Pont 9 handbag are fashioned from smooth leather. The LV Circle, a classic House signature reinterpreted by Nicolas Ghesquière, adorns the bag’s flap and the adjustable strap’s buckle. Hidden features such as a colored leather lining and Monogram Flower magnetic closure on the flap’s underside bring subtle sophistication.",
    price: 3900,
    countInStock: 12,
  },
  {
    id:6,
    type:"bags",
    name: "ALMA BB",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-alma-bb-epi-leather-handbags--M58706_PM2_Front%20view.png?wid=456&hei=456",
    description:
      "One of the House’s most recognizable bags, the adorable Alma BB handbag gets a sporty makeover thanks to a new Jacquard strap. The fashionably wide strap is embroidered with Louis Vuitton on one side and Monogram Blossoms on the other, and features delicate stitching along its edges. Made from colorful Epi leather, this bag will definitely turn heads.",
    price: 2180,
    countInStock: 22,
  },
  {
    id:7,
    type:"bags",
    name: "BELLA",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-bella-mahina-handbags--M57856_PM2_Front%20view.png?wid=456&hei=456",
    description:
      "Fashioned from Mahina calf leather, the adorable Bella bucket bag includes a removable coin purse in matching Mahina leather. The gradient color of the leather goes from a deeper pastel tone to an almost-white at top of the bag. The perforated Monogram pattern in the Mahina leather and the color treatment give it a summery feel.",
    price: 4500,
    countInStock: 13,
  },
  {
    id:8,
    type:"bags",
    name: "LOCKME TENDER",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lockme-tender-lockme-leather-handbags--M58557_PM2_Front%20view.png?wid=456&hei=456",
    description:
      "Fashioned from supple grained calf leather, the Lockme Tender cross-body bag comes with a wide removable and adjustable strap in addition to its traditional gold-color chain. Each side of this versatile strap has a different color and texture. A metallic D-ring on the strap means it can be personalized with a charm.",
    price: 2570,
    countInStock: 3,
  },
  {
    id:9,
    type:"bags",
    name: "PETITE MALLE SOUPLE",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-petite-malle-souple-monogram-handbags--M45571_PM2_Front%20view.png?wid=456&hei=456",
    description:
      "The distinctive Petite Malle Souple is a soft handbag steeped in the House history. The Monogram canvas, riveted leather corners, and leather name tag all evoke Louis Vuitton’s legacy as a trunk maker. A gold-color nautical chain and wide removable strap, with Louis Vuitton Malletier embroidered on it, bring up-to-the-minute style.",
    price: 3000,
    countInStock: 8,
  },
  {
    id:10,
    type:"bags",
    name: "BEAUBOURG HOBO MM",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-beaubourg-hobo-mm-mahina-handbags--M56084_PM2_Front%20view.png?wid=456&hei=456",
    description:
      "The Beaubourg Hobo MM bag is made from Mahina calf leather perforated with the Monogram pattern. It boasts a stylishly braided-leather top handle, with hand-painted edge-dyeing along the braids. The leather zip pulls and large LV charm sign the bag. A detachable, wide leather strap means that this supple bag feels comfortable against the body.",
    price: 4400,
    countInStock: 16,
  },
  {
    id:11,
    type:"bags",
    name: "S LOCK SLING BAG",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-s-lock-sling-bag-monogram-macassar-canvas-bags--M45864_PM2_Front%20view.png?wid=456&hei=456",
    description:
      "The new S Lock Sling Bag keeps personal items secure with a magnetic closure inspired by Louis Vuitton’s historic trunk clasps. Monogram Macassar canvas is accented by an innovative black metal lock and touches of fluorescent yellow. A sturdy trunk-style leather handle and an adjustable strap, both adorned with the LV signature, offer multiple carry options.",
    price: 3450,
    countInStock: 15,
  },
  {
    id:12,
    type:"bags",
    name: "BRIEFCASE BACKPACK",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-briefcase-backpack-taiga-leather-bags--M30769_PM2_Front%20view.png?wid=456&hei=456",
    description:
      "The ideal business bag for men on the move, the Briefcase Backpack offers generous capacity and modern functionality. Crafted from supple Taiga leather with trunk-style reinforced corners, it can be worn cross-body on its shoulder strap, carried brief-case style thanks to a foldable handle, or as a backpack – straps and handle fit neatly into a zipped compartment.",
    price: 3550,
    countInStock: 20,
  },
  {
    id:13,
    type:"bags",
    name: "KEEPALL XS",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-keepall-xs-other-leathers-bags--M57960_PM2_Front%20view.png?wid=456&hei=456",
    description:
      "The handsome, compact Keepall XS is a scaled-down reinterpretation of Louis Vuitton’s classic Keepall bag. This Monogram Seal version features top-quality cowhide in elegant black, debossed with the iconic Monogram pattern for a rich tactile effect. With its double handle and adjustable strap, it’s a smart, practical accessory that makes a striking signature statement.",
    price: 2500,
    countInStock: 18,
  },
  {
    id:14,
    type:"bags",
    name: "DISCOVERY BACKPACK",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-discovery-backpack-damier-other-bags--N50060_PM2_Front%20view.png?wid=456&hei=456",
    description:
        "The Discovery backpack takes on an original, trendy look in Damier Salt canvas. Louis Vuitton’s iconic coated canvas is treated with the same technique used to give the House’s denim a cool rough-hewn quality. Its large capacity and ingenious design, including a special digital tablet compartment, make the Discovery a practical everyday bag.",
    price: 2550,
    countInStock: 4,
  },
  {
    id:15,
    type:"bags",
    name: "TRIO MESSENGER",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-trio-messenger-damier-other-bags--N50068_PM2_Front%20view.png?wid=456&hei=456",
    description:
      "The Trio Messenger looks more stylish than ever in Damier Salt canvas. Louis Vuitton’s iconic material is given a special treatment for an eye-catching weathered effect. Triply practical, it combines three spaces for storing everyday essentials: a large main compartment, a removable zipped pocket and a separate coin purse – plus an adjustable strap for easy carrying.",
    price: 2240,
    countInStock: 8,
  },
  {
    id:16,
    type:"bags",
    name: "TRUNK SLINGBAG",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-trunk-slingbag-damier-other-bags--N50061_PM2_Front%20view.png?wid=456&hei=456",
    description:
      "This version of the Trunk Slingbag for fall-winter 2021 features an eye-catching new material: Damier Salt canvas. The same process used to give Louis Vuitton’s denim an on-trend weathered look is applied to the House’s historic coated canvas. Compact and versatile, it has an adjustable strap for easy carrying, either cross-body or around the waist as a beltbag.",
    price: 1990,
    countInStock: 23,
  },
  {
    id:17,
    type:"bags",
    name: "METALLIC SCULPTURAL LINING BUST PARKA" ,
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-metallic-sculptural-lining-bust-parka-ready-to-wear--FLOW56IF3450_PM2_Front%20view.png?wid=456&hei=456",
    description:
      "A one-of-a-kind runway statement. This asymmetric parka introduces a dazzling palette and sculptural embellishments to the classical motifs from the Fornasetti collaboration. Gold-coated bonded raso with a cracked effect is adorned with graphic monochrome busts while the richly embroidered lining blooms with metallic fabric petals that create show-stopping texture and volume.",
    price: 11700,
    countInStock: 15,
  },
  {
    id:18,
    type:"bags",
    name: "AVENUE SLING BAG",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-avenue-sling-bag-monogram-macassar-canvas-bags--M45897_PM2_Front%20view.png?wid=456&hei=456",
    description:
      "The Avenue Sling Bag in Monogram Macassar coated canvas fits urban lifestyles perfectly: compact and sporty, with a cool and casual attitude. Its “smart” strap adjusts for left- or right-side carry. The body-friendly shape and double zip keep valuables close and secure.",
    price: 1690,
    countInStock: 10,
  },
  {
    id:19,
    type:"bags",
    name: "LOUIS VUITTON 2054 MOUNTAIN BACKPACK",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-louis-vuitton-2054-mountain-backpack-monogram-other-bags--M45603_PM2_Front%20view.png?wid=456&hei=456",
    description:
      "Part of season 2 of the LV2054 capsule collection, the Mountain Backpack mixes luxury codes with utilitarian design. Made from nylon with a gray-and-black Monogram 3D effect print, and a rainbow-color Monogram 3D lining, this outdoorsy backpack features a detachable pouch that can be removed and used as a sling bag. Wide shoulder straps ensure comfortable carry.",
    price: 4950,
    countInStock: 25,
  },
  {
    id:20,
    type:"bags",
    name: "DEAN BACKPACK",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-dean-backpack-monogram-macassar-canvas-bags--M45335_PM2_Front%20view.png?wid=456&hei=456",
    description:
      "The Dean backpack in Monogram Macassar emanates premium sportswear allure. Large enough to hold a laptop, it has three inside pockets plus a zipped front pocket to keep everything neatly organized and easily accessible. And it’s packed with refined details, like hot-stamped leather corners and an embossed Louis Vuitton flower pattern on the back",
    price: 2390,
    countInStock: 20,
  },
];

module.exports = bags;