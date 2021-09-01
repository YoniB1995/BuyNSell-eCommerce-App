const screens = [
  {
    id:1,
    name: "iPhone 12 Pro Max",
    imageUrl:
      "https://images.unsplash.com/photo-1603921326210-6edd2d60ca68?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGlwaG9uZSUyMDEyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    description:
      "The iPhone 12 Pro is the larger of two pro-level phones in Apple's 2020 iPhone lineup. It has a glass and stainless-steel design with flat edges. The camera system is best-in-class with better stabilization and larger sensors.",
    price: 899,
    countInStock: 18,
  },
  {
    id:2,
    name: "MacBook Pro 16' ",
    imageUrl:
      "https://www.apple.com/v/macbook-pro-13/f/images/overview/macbook_pro_16__fkgofdas6o66_large.jpg",
    description:
      "The Apple M1 chip gives the 13‑inch MacBook Pro speed and power beyond belief. With up to 2.8x CPU performance. Up to 5x the graphics speed. Our most advanced Neural Engine for up to 11x faster machine learning. And up to 20 hours of battery life — the longest of any Mac ever. It’s our most popular pro notebook, taken to a whole new level.",
    price: 1099,
    countInStock: 10,
  },
  {
    id:3,
    name: "iPhone 11",
    imageUrl:
      "https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGlwaG9uZSUyMDExfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description:
      "The iPhone 11 is a smartphone designed, developed, and marketed by Apple Inc. It is the 13th generation, lower-priced iPhone, succeeding the iPhone XR.",
    price: 799,
    countInStock: 10,
  },
  {
    id:4,
    name: "Samsung Galaxy A12 64GB",
    imageUrl:
      "https://d3m9l0v76dty0.cloudfront.net/system/photos/6342524/large/c5c8efa8052646a3dd32d0b7eeed2927.jpg",
    description:
      "nternational Model, Compatible with Most GSM Carriers like T-Mobile, AT&T, Metro PCS, etc Will NOT work with CDMA Carriers Such as Verizon, Sprint, Boost . RAM 4GB, ROM 64GB Internal Memory ; Micro SD (Up to 1TB), Android 10 Mediatek MT6765 Helio P35 (12 nm) Chipset, Octa-core (4x2.35 GHz Cortex-A53, PowerVR GE8320 GPU",
    price: 190,
    countInStock: 20,
  },
  {
    id:5,
    name: "Samsung A12 Case,Galaxy A12 Case,with HD Screen Protector.",
    imageUrl:
      "https://m.media-amazon.com/images/I/616jXkh0ovL._AC_SL1010_.jpg",
    description:
      "Compatible Model: Perfect Designed for Samsung Galaxy A12; Package includes a free PET HD Screen Protector (Plastic). Refined Design: Soft TPU case, brushed back and carbon fiber design provides extra grip and is comfortable in the hand,anti-fingerprints, non slip, anti scratch.",
    price: 9.98,
    countInStock: 80,
  },
  {
    id:6,
    name: "SAMSUNG Galaxy S21 Ultra 5G ",
    imageUrl:
      "https://m.media-amazon.com/images/I/61O45C5qASL._AC_SL1000_.jpg",
    description:
      "PRO-GRADE CAMERA: Zoom in close with 100X Space Zoom, and take photos and videos like a pro with our easy-to-use, multi-lens camera.SHARP 8K VIDEO: Capture your life’s best moments in head-turning, super-smooth, cinema quality 8K Video. MULTIPLE WAYS TO RECORD: Create share-ready videos and GIFs with multi-cam recording and automatic, professional-style effects.",
    price: 999,
    countInStock: 40,
  },
  {
    id:7,
    name: "SAMSUNG Galaxy Z Flip 3 5G ",
    imageUrl:
      "https://m.media-amazon.com/images/I/71InZW4fuvL._AC_SL1500_.jpg",
    description:
      "Flex Your Best Angle: With Flex Mode, just unfold your mobile phone’s screen to your best angle for hands-free pics and video calls; Choose what you want to capture, set it down, stand back and shoot your best shot. A Camera That Goes Steady: Thanks to Samsung Galaxy Z Flip3’s Super Steady* feature, you can just set it down and strike a pose for picture perfect selfies",
    price: 999,
    countInStock: 50,
  },
  {
    id:8,
    name: "SAMSUNG Galaxy S21 Ultra 5G Factory",
    imageUrl:
      "https://m.media-amazon.com/images/I/61O45C5qASL._AC_SL1000_.jpg",
    description:
      "PRO-GRADE CAMERA: Zoom in close with 100X Space Zoom, and take photos and videos like a pro with our easy-to-use, multi-lens camera.SHARP 8K VIDEO: Capture your life’s best moments in head-turning, super-smooth, cinema quality 8K Video. MULTIPLE WAYS TO RECORD: Create share-ready videos and GIFs with multi-cam recording and automatic, professional-style effects.",
    price: 999,
    countInStock: 40,
  },
  {
    id:9,
    name: "Navy SAMSUNG Galaxy S20 FE 5G",
    imageUrl:
      "https://m.media-amazon.com/images/I/71RxOftVoQL._AC_SL1500_.jpg",
    description:
      "PRO-GRADE CAMERA: Features high-powered, pro lenses for beautiful photographs in any light with 3X optical zoom. 30X SPACE ZOOM: Zoom in close from afar or magnify details of something nearby with the power of 30X Space Zoom. SINGLE-TAKE AI: One tap of the screen captures multiple images and videos all at once.",
    price: 549,
    countInStock: 45,
  },
  {
    id:10,
    name: "Cloud Galaxy S21 Ultra 5G Factory",
    imageUrl:
      "https://m.media-amazon.com/images/I/712iry8nIYL._AC_SL1500_.jpg",
    description:
      "PRO-GRADE CAMERA: Features high-powered pro lenses for beautiful photographs in any light with 3X optical zoom.30X SPACE ZOOM: Zoom in close from afar or magnify details of something nearby with the power of 30X Space Zoom. POWER OF 5G: Get next-level power with Samsung Galaxy 5G: more sharing, more gaming, and more experiences.",
    price: 799,
    countInStock: 40,
  },
  {
    id:11,
    name: "iPhone 11 Pro",
    imageUrl:
      "https://m.media-amazon.com/images/I/710OiyvrXgS._AC_SL1500_.jpg",
    description:
      "This device is locked to Verizon only and not compatible with any other carrier. Successfully passed a full diagnostic test which ensures like-new functionality and removal of any prior-user personal information. Inspected and guaranteed to have minimal cosmetic damage, which is not noticeable when the device is held at arm's length.",
    price: 638,
    countInStock: 15,
  },
  {
    id:12,
    name: "Apple iPhone X 64GB Silver",
    imageUrl:
      "https://m.media-amazon.com/images/I/61pjImQoRyL._AC_SL1500_.jpg",
    description:
      "This device is locked to T-Mobile only and not compatible with any other carrier. The device does not come with headphones or a SIM card. It does include a charger and charging cable that may be generic, in which case it will be UL or Mfi (Made for iPhone) Certified.Inspected and guaranteed to have minimal cosmetic damage, which is not noticeable when the device is held at arms length.",
    price: 450,
    countInStock: 20,
  },
  {
    id:13,
    name: "Microsoft Surface Pro 7 – 12.3",
    imageUrl:
      "https://m.media-amazon.com/images/I/71kBlSKi3eL._AC_SL1500_.jpg",
    description:
      "Next-gen, best-in-class laptop with the versatility of a studio and tablet, so you can type, touch, draw, write, work, and play more naturally. Standout design that won’t weigh you down — ultra-slim and light Surface Pro 7 starts at just 1.70 pounds.Aspect ratio: 3:2 . All-day battery life upto 10.5 hours, plus the ability to go from empty to full faster — about 80% in just over an hour",
    price: 655,
    countInStock: 18,
  },
  {
    id:14,
    name: "Microsoft Surface Book 3 (SNK-00001)",
    imageUrl:
      "https://m.media-amazon.com/images/I/51IGcAb2aFL._AC_SL1253_.jpg",
    description:
        "This device is locked to T-Mobile only and not compatible with any other carrier. The device does not come with headphones or a SIM card. It does include a charger and charging cable that may be generic, in which case it will be UL or Mfi (Made for iPhone) Certified.Inspected and guaranteed to have minimal cosmetic damage, which is not noticeable when the device is held at arms length.",
    price: 3298,
    countInStock: 40,
  },
  {
    id:15,
    name: "Acer Predator Helios 300 PH315-54-760S Gaming Laptop",
    imageUrl:
      "https://m.media-amazon.com/images/I/719Hcr4vHPS._AC_SL1500_.jpg",
    description:
      "Extreme Performance: Crush the competition with the impressive power and speed of the 11th Generation Intel Core i7-11800H processor, featuring 8 cores and 16 threads to divide and conquer any task or run your most intensive games. Using Alexa on your PC is as easy as asking a question. Just ask and Alexa can check your calendar, create lists, play music, answer questions, read the news and more.",
    price: 1299,
    countInStock: 35,
  },
  {
    id:16,
    name: "Acer Nitro 5 AN517-54-77KG Gaming Laptop",
    imageUrl:
      "https://m.media-amazon.com/images/I/81WvbTbx22S._AC_SL1500_.jpg",
    description:
      "Dominate the Game: Great performance meets long battery life with the Intel Core i7-11800H Processor - up to 4.6GHz, 8 cores, 16 threads, 24MB Intel Smart Cache. Visual Intensity: Explore game worlds in Full HD detail on the 17.3 .widescreen LED-backlit IPS display with 1920 x 1080 resolution, 144Hz refresh rate and 80% screen-to-body/16:9 aspect ratio",
    price: 1180,
    countInStock: 28,
  },
  {
    id:17,
    name: "2021 Newest Acer Aspire 5 15.6" ,
    imageUrl:
      "https://m.media-amazon.com/images/I/51P0aFGxPnL._AC_.jpg",
    description:
      "[Display]- 15.6 inches Full HD (1920 x 1080) Widescreen LED backlit IPS Display; AMD Radeon Vega 3 Mobile Graphics.\n [Processor] AMD Ryzen 3 3350U (2.60 GHz, up to 3.50 GHz with Turbo Boost, 4 MB Cache, 2 Cores ), 3-cell lithium-ion, up to 6 hours battery life mixed-use",
    price: 999,
    countInStock: 43,
  },
  {
    id:18,
    name: "Lenovo IdeaPad 3 15.6' Laptop",
    imageUrl:
      "https://m.media-amazon.com/images/I/61d+9L5LZMS._AC_SL1060_.jpg",
    description:
      "【Upgraded】 Seal is opened for upgrade ONLY, 1-years warranty on Upgraded to 20GB DDR4, 512GB SSD from TWE, and original 1-Year Manufacture warranty on remaining components. \n【 AMD Ryzen 5 5500U】 (6Core / 12Threads, 2.1 / 4.0GHz, 3MB L2 / 8MB L3 Cache), AMD Radeon 7 Graphics. Backlit Keyboard, English (US); Fingerprint Reader, Touch Style.",
    price: 708,
    countInStock: 55,
  },
  {
    id:19,
    name: "2021 Newest HP 14 HD Laptop Light-Weight",
    imageUrl:
      "https://m.media-amazon.com/images/I/81NvTUBf9ZS._AC_SL1500_.jpg",
    description:
      "✔【14' HD Display】14' HD(1366 x 768) Display with micro-edge bezel design, WLED-backlit, BrightView, Enjoy your entertainment with the great quality and high-definition detail of 1 million pixels \n ✔【Upgrade to 16GB RAM】Substantial high-bandwidth RAM to smoothly run your games and photo- and video-editing applications, as well as multiple programs and browser tabs all at once",
    price: 540,
    countInStock: 25,
  },
  {
    id:20,
    name: "2021 Dell Inspiron 15.6'Touchscreen Laptop",
    imageUrl:
      "https://m.media-amazon.com/images/I/618JrdYSvnL._AC_SL1500_.jpg",
    description:
      "【10th Generation Intel Core i5-1035G1】Base 1.0GHz, Up to 3.60GHz, 4 cores, 6MB Cache, 8 Threads with Intel UHD Graphics. It can respond to your basic demands to the intensive ones and handles your tasks for each day. \n 【15.6 FHD Display 】15.6-inch Full HD (1920 x 1080) Anti-Glare LED-Backlit Touchscreen Display.",
    price: 799,
    countInStock: 35,
  },
];

module.exports = screens;