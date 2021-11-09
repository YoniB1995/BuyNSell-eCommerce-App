const blazers = [
  {
    id:1,
     type:"blazers",
    name: "EMBOSSED MONOGRAM SINGLE-BREASTED JACKET",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-embossed-monogram-single-breasted-jacket-ready-to-wear--HKJ42WZDC652_PM2_Front%20view.png?wid=456&hei=456",
    description:
      "Available in seasonal Navy, this elegant jacket delivers a sophisticated take on the Louis Vuitton Monogram. The iconic motif is featured as an embossed pattern, on a cotton-blend jacquard fabric. Details include a Louis Vuitton Signature lining, tonal LV stitching on the top button and the collection's engraved pin on the lapel.",
    price: 3150,
    countInStock: 15,
  },
  {
    id:2,
    type:"blazers",
    name: "DOUBLE BREASTED JACKET",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-double-breasted-jacket-ready-to-wear--HJJ89WTCX900_PM2_Front%20view.png?wid=456&hei=456",
    description:
      "In keeping with the season's focus on revisiting traditional dress codes, this elegant piece reinvents the classic double-breasted jacket. It is tailored in a regular fit from wool twill, with two large front pockets adding to the graphic feel. The collection's square LV button - in gold and black - signs the jacket at the front.",
    price: 3650,
    countInStock: 10,
  },
  {
    id:3,
    type:"blazers",
    name: "LVXNBA SUIT JACKET",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lvxnba-suit-jacket-ready-to-wear--HKJ01WZNX900_PM2_Front%20view.png?wid=456&hei=456",
    description:
      "This slim-fitting jacket gives a graphic twist to the collection's NBA theme. The iconic logo is revisited as an all-over jacquard motif, creating a high-contrast houndstooth effect. Crafted from a lightweight wool blend, it features twin flap pockets, one chest pocket and a Monogram lining.",
    price: 3400,
    countInStock: 12,
  },
  {
    id:4,
    type:"blazers",
    name: "REVERSIBLE DOUBLE FACE SAFARI JACKET",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-reversible-double-face-safari-jacket-ready-to-wear--HIJ05WTSW631_PM2_Front%20view.png?wid=456&hei=456",
    description:
      "With its slightly loose fit, this Reversible Double Face Safari Jacket is all about the season’s safari theme. Crafted from double face wool, it is a reversible piece that can be worn with its Camo Monogram interior on the outside. The Camo Monogram side has welt pockets, while the plain one features an array of roomy patch pockets.",
    price: 3500,
    countInStock: 20,
  },
  {
    id:5,
    type:"blazers",
    name: "WATERCOLOR LIGHT GRAPHIC TAILORED JACKET",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-watercolor-light-graphic-tailored-jacket-ready-to-wear--HLJ02WDA4MU1_PM2_Front%20view.png?wid=456&hei=456",
    description:
      "This slim-fitting jacket showcases the capsule's Spaced Out Multicolor Watercolor Monogram motif, inspired by watercolor painting techniques. The printed pattern adorns the jacket's pure wool fabric, with a plain lining completing the effect. Details include notch lapels, flap pockets and a top button with LV stitching.",
    price: 3950,
    countInStock: 12,
  },
  {
    id:6,
    type:"blazers",
    name: "JACKET WITH DOG PUPPET",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-jacket-with-dog-puppet-ready-to-wear--HKJ91WZVL900_PM2_Front%20view.png?wid=456&hei=456",
    description:
      "This statement piece combines the collection’s reengineered Damier motif with the 3D puppets that encapsulate the season’s LV Friends theme. A dog puppet adorns the short single-breasted jacket, with shoulder pads adding an architectural feel. The signature vibe is accentuated by an LV top button at the front, and a black Monogram Gradient lining.",
    price: 5300,
    countInStock: 22,
  },
  {
    id:7,
    type:"blazers",
    name: "70S PEAK LAPEL JACKET",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-70s-peak-lapel-jacket-ready-to-wear--HKJ60WZVY900_PM2_Front%20view.png?wid=456&hei=456",
    description:
      "This single-breasted piece showcases the revisited Monogram pattern, which adorns a 70s-style shape with wide peak lapels, tailored in a regular fit from velvet-effect fabric. Additional signatures include a single LV button on the front opening and cuffs, and a black Monogram Gradient lining.",
    price: 3950,
    countInStock: 13,
  },
  {
    id:8,
    type:"blazers",
    name: "SCULPTURAL JACKET",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sculptural-jacket-ready-to-wear--HJJ75WTCX900_PM2_Front%20view.png?wid=456&hei=456",
    description:
      "This exceptional piece channels the collection's reengineering of corporate dress codes, with a deconstructed version of the traditional suit jacket. Tailored from wool twill in a regular fit, it is broken up into pieces and reassembled with embroidered yarn, creating a sculptural effect. The back is signed with an encrusted LV Flower.",
    price: 6600,
    countInStock: 3,
  },
  {
    id:9,
    type:"blazers",
    name: "LV WAX 3-BUTTON JACKET",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-wax-3-button-jacket-ready-to-wear--HLJ76WFT3MU1_PM2_Front%20view.png?wid=456&hei=456",
    description:
      "This jacket showcases the season’s LV Wax motif, a blend of traditional African wax patterns and iconic Louis Vuitton motifs. It adorns a slightly loose-fitting jacket with small lapels, cut from a technical wool blend. Lined in plain silk, it features flap pockets and LV stitching on the top and cuff buttons.",
    price: 4000,
    countInStock: 8,
  },
  {
    id:10,
    type:"blazers",
    name: "TRAVERTINE 90'S JACKET",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-travertine-90-s-jacket-ready-to-wear--HLJ62WFS0013_PM2_Front%20view.png?wid=456&hei=456",
    description:
      "This slim-fitting jacket is all about the collection’s Trompe l’Oeil theme, with a textured jacquard weave recreating the effect of travertine marble. The chest pocket features a yellow leather penholder with an embossed Louis Vuitton signature, while the top button and cuff buttons are signed with LV stitching. Flap pockets and a plain silk lining complete the effect.",
    price: 3700,
    countInStock: 16,
  },
  {
    id:11,
    type:"blazers",
    name: "BELTED DAMIER JACKET",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-belted-damier-jacket-ready-to-wear--HLJ35WGZ8105_PM2_Front%20view.png?wid=456&hei=456",
    description:
      "This sophisticated piece incorporates subtle Damier details. The iconic motif is played on the cuff buttons and belt buckle, on a regular-fitting piece tailored from pure wool fabric. The removable belt features two patch pockets; the front opening closes with hidden metallic buttons.",
    price: 3450,
    countInStock: 15,
  },
  {
    id:12,
    type:"blazers",
    name: "MONOGRAM FLEECE JACKET",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-monogram-fleece-jacket-ready-to-wear--FLVE94HZ3806_PM2_Front%20view.png?wid=456&hei=456",
    description:
      "A sporty signature jacket that subtly defines a feminine figure. Crafted from warm fuzzy fleece in a Monogram jacquard with elasticated sides that structure the silhouette and a technical radzimir trim around the hood that nods to detailing from the runway. An LV-engraved zip pull and Monogram canvas tabs on the cuffs complete the iconic look.",
    price: 3000,
    countInStock: 20,
  },
  {
    id:13,
    type:"blazers",
    name: "STUDDED LEATHER BOMBER JACKET",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-studded-leather-bomber-jacket-ready-to-wear--FLLJ92USY900_PM2_Front%20view.png?wid=456&hei=456",
    description:
      "Iconic signatures and runway embellishments upgrade a vintage leather bomber jacket silhouette for the season. Crafted from supple lambskin with feminine gathered shoulders, sporty ribbed hems and a Monogram lining. The collection’s palladium studs hint at a Western style, while Monogram canvas accents the pockets and an LV-engraved zip pull completes the look.",
    price: 4950,
    countInStock: 18,
  },
  {
    id:14,
    type:"blazers",
    name: "CLOUD JACQUARD TUXEDO JACKET",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-cloud-jacquard-tuxedo-jacket-ready-to-wear--FLVE98IG3501_PM2_Front%20view.png?wid=456&hei=456",
    description:
        "A spirited statement jacket showcasing key codes from the collection. Tailored from a glittering geometric clouds lurex jacquard, the dreamy motif is offset with a contrasting tuxedo-style lapel. Studded leather tabs add a playful touch to the pockets, while a striking silk habotai lining can be glimpsed through the runway’s versatile slit sleeves.",
    price: 5350,
    countInStock: 4,
  },
  {
    id:15,
    type:"blazers",
    name: "SCULPTURAL LINING ASYMMETRICAL PARKA",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sculptural-lining-asymmetrical-parka-ready-to-wear--FLOW86IC4419_PM2_Front%20view.png?wid=456&hei=456",
    description:
      "Show-stopping details elevate a seasonal staple. This short asymmetrical parka has a fresh, upbeat finish in pastel washed nylon with contrast cotton canvas details that underscore an outdoorsy tone. The quilted lining is trimmed with embroidered metallic petals that introduce the runway’s sculptural volume to the cuffs, hemline, front opening and hood.",
    price: 8900,
    countInStock: 8,
  },
  {
    id:16,
    type:"blazers",
    name: "KEYS AND RIDERS JACQUARD COAT",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-keys-and-riders-jacquard-coat-ready-to-wear--FLMA92H63003_PM2_Front%20view.png?wid=456&hei=456",
    description:
      "Statement patterns by Fornasetti artfully combine to give this knee-length wool jacquard coat a graphic finish. The body features an ornate key motif, while classical horse riders highlight the sleeves. Ribbed details introduce a casual sporty spirit and a contemporary pop of color, while a Monogram lining signs the look.",
    price: 6450,
    countInStock: 23,
  },
  {
    id:17,
    type:"blazers",
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
    type:"blazers",
    name: "MINK LV BOMBER",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-mink-lv-bomber-ready-to-wear--FLLJ06FI9699_PM2_Front%20view.png?wid=456&hei=456",
    description:
      "This exotic piece cannot be shipped to San Francisco and Los Angeles, California. Please call Client Services at +1.866.VUITTON for more details.Velvety mink reimagines a zip-up bomber as a cozy, contemporary coat. Detailed with a contrast collar in soft shearling for warmth and texture, with refined leather-trimmed pockets for practicality. Ribbed details nod to the sporty spirit of the silhouette, complete with a Varsity-style LV intarsia signature. A Monogram canvas zip pull adds a classic House touch.",
    price: 16800,
    countInStock: 10,
  },
  {
    id:19,
    type:"blazers",
    name: "SPORTY LONG PARKA",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sporty-long-parka-ready-to-wear--FLOW06PG5900_PM2_Front%20view.png?wid=456&hei=456",
    description:
      "A sporty long parka refined with graphic features, a chic colorway and the Vuittamins capsule’s oversized signature. Lined with a silk blend that contrasts in texture and tone from the water-repellent nylon outer. Drawstring details at the cuffs, waist and high neck play with the volume of the silhouette, and exposed side zippers add to the versatility.",
    price: 4000,
    countInStock: 25,
  },
  {
    id:20,
    type:"blazers",
    name: "VUITTAMINS LIGHTWEIGHT HOODED PARKA",
    imageUrl:
      "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-vuittamins-lightweight-hooded-parka-ready-to-wear--FLOW07PG5401_PM2_Front%20view.png?wid=456&hei=456",
    description:
      "In the Vuittamins capsule’s lively palette, this lightweight hooded parka makes a statement in color-blocked water-repellent nylon. Adjustable cuffs and an elasticated waist add a subtle billowing effect. Concealed front pockets are fastened with snap buttons. A seasonal signature adds a graphic touch to the sleeve, complemented by a classic Monogram canvas zip pull.",
    price: 3350,
    countInStock: 20,
  },
];

module.exports = blazers;