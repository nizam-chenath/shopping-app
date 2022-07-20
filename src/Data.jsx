const DATA = [
    {
      id : 0,
      title : "iphone 11",
      price : 750,
      desc : "The iPhone is a line of smartphones designed and marketed by Apple Inc. These devices use Apple's iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
      img : "images/6s.webp"  
    },
      {
      id : 1,
      title : "iphone 12",
      price : 1050,
      desc : "The iPhone is a line of smartphones designed and marketed by Apple Inc. These devices use Apple's iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
      img : "assets/images/products/iphone12.webp"  
    },
    {
      id : 2,
      title : "iphone 13",
      price : 1250,
      desc : "The iPhone is a line of smartphones designed and marketed by Apple Inc. These devices use Apple's iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
      img : "assets/images/products/iphone13.webp"  
    },
    {
      id : 3,
      title : "iphone 13 pro",
      price : 1750,
      desc : "The iPhone is a line of smartphones designed and marketed by Apple Inc. These devices use Apple's iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
      img : "assets/images/products/iphone13pro.webp"  
    },
    // {
    //   id : 4,
    //   title : "iphone x",
    //   price : 1750,
    //   desc : "The iPhone is a line of smartphones designed and marketed by Apple Inc. These devices use Apple's iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
    //   img : "/assets/images/products/iphonex.webp"  
    // },
    // {
    //   id : 5,
    //   title : "iphone xs",
    //   price : 1750,
    //   desc : "The iPhone is a line of smartphones designed and marketed by Apple Inc. These devices use Apple's iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
    //   img : "/assets/images/products/iphonexs.webp"  
    // },
    // {
    //   id : 6,
    //   title : "iphone xs max",
    //   price : 1750,
    //   desc : "The iPhone is a line of smartphones designed and marketed by Apple Inc. These devices use Apple's iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
    //   img : "/assets/images/products/iphonexsmax.webp"  
    // },
    // {
    //   id : 7,
    //   title : "iphone xr",
    //   price : 1750,
    //   desc : "The iPhone is a line of smartphones designed and marketed by Apple Inc. These devices use Apple's iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
    //   img : "/assets/images/products/iphonexr.webp"  
    // },
    // {
    //   id : 8,
    //   title : "iphone 11 pro",
    //   price : 1750,
    //   desc : "The iPhone is a line of smartphones designed and marketed by Apple Inc. These devices use Apple's iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
    //   img : "/assets/images/products/11pro.webp"  
    // },
    // {
    //   id : 9,
    //   title : "iphone 11 pro max",
    //   price : 1750,
    //   desc : "The iPhone is a line of smartphones designed and marketed by Apple Inc. These devices use Apple's iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
    //   img : "/assets/images/products/11promax.webp"  
    // },
    // {
    //   id : 10,
    //   title : "iphone 11 mini",
    //   price : 1750,
    //   desc : "The iPhone is a line of smartphones designed and marketed by Apple Inc. These devices use Apple's iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
    //   img : "/assets/images/products/iphone11mini.webp"  
    // },
    // {
    //   id : 11,
    //   title : "iphone 12 pro",
    //   price : 1750,
    //   desc : "The iPhone is a line of smartphones designed and marketed by Apple Inc. These devices use Apple's iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
    //   img : "/assets/images/products/12pro.webp"  
    // },
    // {
    //   id : 12,
    //   title : "iphone 12 pro max",
    //   price : 1750,
    //   desc : "The iPhone is a line of smartphones designed and marketed by Apple Inc. These devices use Apple's iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
    //   img : "/assets/images/products/12promax.webp"  
    // },
    // {
    //   id : 13,
    //   title : "iphone 12 mini",
    //   price : 1750,
    //   desc : "The iPhone is a line of smartphones designed and marketed by Apple Inc. These devices use Apple's iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
    //   img : "/assets/images/products/12mini.webp"  
    // },
    // {
    //   id : 14,
    //   title : "iphone 13 mini",
    //   price : 1750,
    //   desc : "The iPhone is a line of smartphones designed and marketed by Apple Inc. These devices use Apple's iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
    //   img : "/assets/images/products/13mini.webp"  
    // },
    // {
    //   id : 15,
    //   title : "iphone 13 pro max",
    //   price : 1750,
    //   desc : "The iPhone is a line of smartphones designed and marketed by Apple Inc. These devices use Apple's iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
    //   img : "/assets/images/products/13promax.webp"  
    // },
    // {
    //   id : 16,
    //   title : "iphone 8",
    //   price : 1750,
    //   desc : "The iPhone is a line of smartphones designed and marketed by Apple Inc. These devices use Apple's iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
    //   img : "/assets/images/products/iphone8.webp"  
    // },
    // {
    //   id : 17,
    //   title : "iphone 8 plus",
    //   price : 1750,
    //   desc : "The iPhone is a line of smartphones designed and marketed by Apple Inc. These devices use Apple's iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
    //   img : "/assets/images/products/8plus.webp"  
    // },
    // {
    //   id : 18,
    //   title : "iphone 7",
    //   price : 1750,
    //   desc : "The iPhone is a line of smartphones designed and marketed by Apple Inc. These devices use Apple's iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
    //   img : "/assets/images/products/iphone7.webp"  
    // },
    // {
    //   id : 19,
    //   title : "iphone 7 plus",
    //   price : 1750,
    //   desc : "The iPhone is a line of smartphones designed and marketed by Apple Inc. These devices use Apple's iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
    //   img : "/assets/images/products/7plus.webp"  
    // },
    // {
    //   id : 20,
    //   title : "iphone 6",
    //   price : 1750,
    //   desc : "The iPhone is a line of smartphones designed and marketed by Apple Inc. These devices use Apple's iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
    //   img : "/assets/images/products/iphone6.webp"  
    // },
    // {
    //   id : 21,
    //   title : "iphone 6s",
    //   price : 1750,
    //   desc : "The iPhone is a line of smartphones designed and marketed by Apple Inc. These devices use Apple's iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
    //   img : "/assets/images/products/6s.webp"  
    // },
    // {
    //   id : 22,
    //   title : "iphone 6 plus",
    //   price : 1750,
    //   desc : "The iPhone is a line of smartphones designed and marketed by Apple Inc. These devices use Apple's iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
    //   img : "/assets/images/products/6plus.webp"  
    // },
    // {
    //   id : 23,
    //   title : "iphone 6s plus",
    //   price : 1750,
    //   desc : "The iPhone is a line of smartphones designed and marketed by Apple Inc. These devices use Apple's iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
    //   img : "/assets/images/products/6splus.webp"  
    // },
    // {
    //   id : 24,
    //   title : "APPLE Airpods Pro with MagSafe Charging Case Bluetooth Headset  (White, True Wireless)",
    //   price : 1750,
    //   desc : "The iPhone is a line of smartphones designed and marketed by Apple Inc. These devices use Apple's iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
    //   img : "/assets/images/products/airpod1.webp"  
    // },
    // {
    //   id : 25,
    //   title : "APPLE MHJD3HN/A 20 W 3 A Mobile Charger",
    //   price : 1750,
    //   desc : "The iPhone is a line of smartphones designed and marketed by Apple Inc. These devices use Apple's iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
    //   img : "/assets/images/products/charger1.webp"  
    // }
    
];
export default DATA;