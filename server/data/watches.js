const watches = [
  {
    id:1,
     type:"watches",
    name: "GRAND SEIKO Spring Drive Chronograph",
    imageUrl:
      "https://watchbox-cdn.imgix.net/posted-product-images/637558936926718613.jpg?h=1120&w=1120?auto=format,compress&cs=srgb&usm=5&usmrad=5&vib=5",
    description:
      "Chronograph (SBGC223) spring drive watch, features a 46.4mm titanium case with black ceramic bezel surrounding a black dial on a titanium and black ceramic bracelet with folding buckle. Functions include hours, minutes, small seconds, date, GMT and chronograph. This watch comes complete with box and papers. Majority of time remaining on the factory warranty.",
    price: 8244,
    countInStock: 15,
  },
  {
    id:2,
    type:"watches",
    name: "Sport Godzilla 65th Anniversary Limited Edition",
    imageUrl:
      "https://watchbox-cdn.imgix.net/posted-product-images/637626504684797499.jpeg?h=1120&w=1120?auto=format,compress&cs=srgb&usm=5&usmrad=5&vib=5",
    description:
      "Grand Seiko Sport Godzilla 65th Anniversary Limited Edition (SBGA405) self-winding automatic watch, features a 44.5mm titanium case surrounding a red dial on a black and red sharkskin strap with a titanium deployant buckle. Functions include hours, minutes, seconds, date and power reserve indicator. This watch comes complete with box and papers. ",
    price: 9890,
    countInStock: 10,
  },
  {
    id:3,
    type:"watches",
    name: "Sport Collection Spring Drive Chronograph",
    imageUrl:
      "https://watchbox-cdn.imgix.net/posted-product-images/637598889668674948.jpg?h=1120&w=1120?auto=format,compress&cs=srgb&usm=5&usmrad=5&vib=5",
    description:
      "Grand Seiko Sport Collection Spring Drive Chronograph (SBGC221) spring drive watch, features a 46.4mm titanium and black ceramic case surrounding a silver dial on a titanium and black ceramic bracelet with folding buckle strap. Functions include hours, minutes, small seconds, date, GMT and power reserve indicator. This watch comes complete with box and papers.",
    price: 8590,
    countInStock: 12,
  },
  {
    id:4,
    type:"watches",
    name: "Sport Spring Drive GMT Limited Edition",
    imageUrl:
      "https://watchbox-cdn.imgix.net/posted-product-images/637638511065512551.jpg?h=1120&w=1120?auto=format,compress&cs=srgb&usm=5&usmrad=5&vib=5",
    description:
      "Grand Seiko Sport Spring Drive GMT Limited Edition (SBGC231 ) spring drive watch, features a 44.5mm titanium case surrounding a brown 'Mane of the Lion' pattern dial on a titanium bracelet with folding buckle. Functions include hours, minutes, small-seconds, date, chronograph and GMT. This watch comes complete with box and papers. This is a Limited Edition piece of 500! ",
    price: 7880,
    countInStock: 20,
  },
  {
    id:5,
    type:"watches",
    name: "Sport Collection Spring Drive 20th",
    imageUrl:
      "https://watchbox-cdn.imgix.net/posted-product-images/637604739320678325.jpg?h=1120&w=1120?auto=format,compress&cs=srgb&usm=5&usmrad=5&vib=5",
    description:
      "Grand Seiko Sport Collection Spring Drive 20th & Nissan GT-R 50th Anniversary Limited Edition (SBGC229) spring drive watch, features a 46.4mm titanium and blue ceramic case surrounding a silver dial on a white alligator strap with a titanium deployant buckle. Functions include hours, minutes, small seconds, date, chronograph, GMT and power reserve indicator. This watch comes complete with box and papers. This is a Limited Edition piece of 200!",
    price: 12190,
    countInStock: 12,
  },
  {
    id:6,
    type:"watches",
    name: "Godzilla 65th Anniversary Limited Edition",
    imageUrl:
      "https://watchbox-cdn.imgix.net/posted-product-images/637655832659339247.jpg?h=1120&w=1120?auto=format,compress&cs=srgb&usm=5&usmrad=5&vib=5",
    description:
      "Godzilla 65th Anniversary Limited Edition (SBGA405) self - winding automatic watch, features a 44.5mm titanium case surrounding a red dial on a black and red leather strap with a titanium and stainless steel deployant buckle. Functions include hours, minutes, seconds, date and power reserve indicator. This watch comes complete with box and papers. ",
    price: 10040,
    countInStock: 22,
  },
  {
    id:7,
    type:"watches",
    name: "Quartz Limited Edition",
    imageUrl:
      "https://watchbox-cdn.imgix.net/posted-product-images/637654812713744062.jpg?h=1120&w=1120?auto=format,compress&cs=srgb&usm=5&usmrad=5&vib=5",
    description:
      "Sport Collection Quartz Limited Edition (SBGP015) quartz watch, features a 40mm stainless steel case with a blue ceramic bezel surrounding a blue dial on a stainless steel bracelet with folding buckle. Functions include hours, minutes, seconds and date. This watch comes complete with box and papers. This is a Limited Edition piece of 2000! Majority of time remaining on the factory warranty!",
    price: 2480,
    countInStock: 13,
  },
  {
    id:8,
    type:"watches",
    name: "Sport Quartz Diver's Limited Edition",
    imageUrl:
      "https://watchbox-cdn.imgix.net/posted-product-images/637604692462514856.jpg?h=1120&w=1120?auto=format,compress&cs=srgb&usm=5&usmrad=5&vib=5",
    description:
      "Pre-Owned Grand Seiko Sport Quartz Diver's Limited Edition (SBGX339) quartz watch, features a 43.6mm stainless steel case surrounding a black dial on a stainless steel bracelet with folding buckle. Functions include hours, minutes and seconds. This watch comes complete with box and papers. This is a Limited Edition piece of 800!",
    price: 3060,
    countInStock: 3,
  },
  {
    id:9,
    type:"watches",
    name: "Hi-Beat GMT Limited Edition",
    imageUrl:
      "https://watchbox-cdn.imgix.net/posted-product-images/637493224128946416.jpg?h=1120&w=1120?auto=format,compress&cs=srgb&usm=5&usmrad=5&vib=5",
    description:
      "Grand Seiko Hi-Beat GMT Limited Edition (SBGJ229 ) self-winding automatic watch, features a 46.4mm titanium case with a blue ceramic bezel surrounding a blue dial on a titanium and blue ceramic bracelet with folding buckle. Functions include hours, minutes, seconds, date and GMT. This watch comes complete with box and papers.",
    price: 8969,
    countInStock: 8,
  },
  {
    id:10,
    type:"watches",
    name: "Cosmograph Daytona",
    imageUrl:
      "https://watchbox-cdn.imgix.net/posted-product-images/637653092924622348.jpg?h=1120&w=1120?auto=format,compress&cs=srgb&usm=5&usmrad=5&vib=5",
    description:
      "olex Cosmograph Daytona (116518) self-winding automatic watch, features a 40mm 18k yellow gold case surrounding a black dial on a black alligator strap with an 18k yellow gold deployant buckle. Functions include hours, minutes, small seconds, chronograph and tachymeter. This watch has been serviced and comes with the original box. F Series.",
    price: 25140,
    countInStock: 16,
  },
  {
    id:11,
    type:"watches",
    name: "Submariner 116618LB",
    imageUrl:
      "https://watchbox-cdn.imgix.net/posted-product-images/637631589597893843.jpeg?h=1120&w=1120?auto=format,compress&cs=srgb&usm=5&usmrad=5&vib=5",
    description:
      "Pre-Owned Rolex Submariner (116618LB) self-winding automatic watch, features a 40mm 18k yellow gold case surrounding a blue dial on an 18k yellow gold Oyster bracelet with folding buckle. Functions include hours, minutes, seconds and date. This watch comes complete with box and papers. Scattered Serial. Time remaining on the factory warranty!",
    price: 28740,
    countInStock: 15,
  },
  {
    id:12,
    type:"watches",
    name: "Complications World Time",
    imageUrl:
      "https://watchbox-cdn.imgix.net/posted-product-images/637624819517228662.jpeg?h=1120&w=1120?auto=format,compress&cs=srgb&usm=5&usmrad=5&vib=5",
    description:
      " Pre-Owned Patek Philippe Complications World Time (5110J001) self-winding automatic watch, features a 37mm 18k yellow gold case surrounding a silver dial on a black alligator strap with an 18k yellow gold deployant buckle. Functions include hours, minutes, day/night indicator and world time. This watch comes complete with box and papers. ",
    price: 25140,
    countInStock: 20,
  },
  {
    id:13,
    type:"watches",
    name: "Cosmograph Daytona 116508",
    imageUrl:
      "https://watchbox-cdn.imgix.net/posted-product-images/637656599304503997.jpeg?h=1120&w=1120?auto=format,compress&cs=srgb&usm=5&usmrad=5&vib=5",
    description:
      "Pre-Owned Rolex Daytona (116508) self-winding automatic watch, features a 40mm 18k yellow gold case surrounding a green dial on an 18k yellow gold Oyster bracelet with folding buckle. Functions include hours, minutes, small seconds and chronograph. This watch comes complete with box and papers. Scattered Serial. Time remaining on the factory warranty!",
    price: 62560,
    countInStock: 18,
  },
  {
    id:14,
    type:"watches",
    name: "Speedmaster Moonwatch Anniversary Limited Series",
    imageUrl:
      "https://watchbox-cdn.imgix.net/posted-product-images/637431187252946937.jpg?h=1120&w=1120?auto=format,compress&cs=srgb&usm=5&usmrad=5&vib=5",
    description:
        "Omega Speedmaster Moonwatch Anniversary Limited Series (31163423003001) manual wind watch, features a 42mm 18k yellow gold case surrounding a blue dial on a brand new brown alligator strap with an 18k yellow gold deployant buckle. Functions include hours, minutes, small seconds, chronograph, tachymeter and moon phase. This watch comes complete with box and papers. This is a Limited Edition piece of 272! ",
    price: 16524,
    countInStock: 4,
  },
  {
    id:15,
    type:"watches",
    name: "Grand Complications Perpetual Calendar Tonneau",
    imageUrl:
      "https://watchbox-cdn.imgix.net/posted-product-images/637523478700118350.jpg?h=1120&w=1120?auto=format,compress&cs=srgb&usm=5&usmrad=5&vib=5",
    description:
      "Patek Philippe Grand Complications Perpetual Calendar Tonneau (5040J013) self-winding automatic watch, features a 42.5mm x 35mm 18k yellow gold case surrounding a silver dial on a brand new black alligator strap with an 18k yellow gold tang buckle. Functions include hours, minutes, day, date, month, 24-hour indicator, leap year indicator, moon phase indicator and GMT. This watch comes with the original box. We back this watch with a 2-Year WatchBox warranty!",
    price: 24420,
    countInStock: 8,
  },
  {
    id:16,
    type:"watches",
    name: "Calatrava",
    imageUrl:
      "https://watchbox-cdn.imgix.net/posted-product-images/637647218433997110.jpg?h=1120&w=1120?auto=format,compress&cs=srgb&usm=5&usmrad=5&vib=5",
    description:
      "Patek Philippe Calatrava (3919J001) manual wind watch, features a 33mm 18k yellow gold case surrounding a white dial on a black alligator strap with an 18k yellow gold tang buckle. Functions include hours, minutes and small seconds. This watch does not come with box or papers. We back this watch with a 2-Year Watchbox warranty! This watch will be ready to ship in 5-7 days!",
    price: 7880,
    countInStock: 23,
  },
  {
    id:17,
    type:"watches",
    name: "Elegance Collection Urushi Dial Model" ,
    imageUrl:
    "https://watchbox-cdn.imgix.net/posted-product-images/637604694489225722.jpg?h=1120&w=1120?auto=format,compress&cs=srgb&usm=5&usmrad=5&vib=5",
    description:
      "Grand Seiko Elegance Collection Urushi Dial Model (SBGW262) manual wind watch, features a 39mm 18k yellow gold case surrounding a black Urushi lacquer dial on a black alligator strap with an 18k yellow gold tang buckle. Functions include hours, minutes and seconds. This watch comes complete with box and papers. Majority of time remaining on the factory warranty!",
    price: 15804,
    countInStock: 15,
  },
  {
    id:18,
    type:"watches",
    name: "Grand Complications Perpetual Calendar",
    imageUrl:
      "https://watchbox-cdn.imgix.net/posted-product-images/637569422216406423.jpg?h=1120&w=1120?auto=format,compress&cs=srgb&usm=5&usmrad=5&vib=5",
    description:
      "Patek Philippe Grand Complications Perpetual Calendar (3970002R) manual wind watch, features a 36mm 18k rose gold case surrounding a silver dial on an 18k rose gold bracelet with folding buckle. Functions include hours, minutes, small seconds, day, date, month, moon phase, perpetual calendar and chronograph. This watch comes complete with box and papers. We back this watch with a 2-Year Watchbox warranty!",
    price: 86400,
    countInStock: 10,
  },
  {
    id:19,
    type:"watches",
    name: "Day-Date 228238",
    imageUrl:
      "https://watchbox-cdn.imgix.net/posted-product-images/637649041584012957.jpeg?h=1120&w=1120?auto=format,compress&cs=srgb&usm=5&usmrad=5&vib=5",
    description:
      "This item will be available to ship in 3-6 weeks. Photo is representative-only. Pre-Owned Rolex Day-Date (228238) self-winding automatic watch, features a 40mm 18k yellow gold case surrounding a black dial on an 18k yellow gold President bracelet with folding buckle. Functions include hours, minutes, seconds, day and date. This watch comes with the original box. ",
    price: 30180,
    countInStock: 25,
  },
  {
    id:20,
    type:"watches",
    name: "Logical One Limited Edition",
    imageUrl:
      "https://watchbox-cdn.imgix.net/posted-product-images/637590197457762899.jpg?h=1120&w=1120?auto=format,compress&cs=srgb&usm=5&usmrad=5&vib=5",
    description:
      "Romain Gauthier Logical One Limited Edition (MON00175) manual wind watch, features a 43mm 18k yellow gold case surrounding a black enamel and skeleton dial on a brand new brown alligator strap with an 18k yellow gold tang buckle. Functions include hours, minutes, small seconds and power reserve indicator. This watch comes complete with box and papers. This is a Limited Edition piece of 5! ",
    price: 89964,
    countInStock: 20,
  },
];

module.exports = watches;