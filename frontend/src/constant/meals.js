import hero from "../assets/menu/sv.png"
const meals = [
  {
    id: 1,
    title: "Dal Bhat Tarkari",
    desc: "Classic Nepali meal of rice, lentils, and seasonal curry.",
    ingredients: ["Rice", "Masoor dal", "Turmeric", "Salt", "Seasonal vegetables", "Mustard oil"],
    steps: [
      "Cook rice until fluffy.",
      "Boil lentils with turmeric and salt, then temper with garlic and cumin.",
      "Prepare seasonal curry with spices and mustard oil.",
      "Serve together with achar."
    ],
    time: "30 min",
    serve: "2-4",
    price: "Rs. 249",
    img:hero,
  },
  {
    id: 2,
    title: "Chicken Momo",
    desc: "Stuffed dumplings with spiced chicken filling & tomato chutney.",
    ingredients: ["Chicken mince", "Onion", "Garlic", "Ginger", "Flour", "Tomato", "Spices"],
    steps: [
      "Prepare chicken filling with spices and onion.",
      "Roll out dough and fill with mixture.",
      "Steam for 15 minutes.",
      "Serve hot with tomato chutney."
    ],
    img: hero,
    time: "25 min",
    serve: "2-3",
    price: "Rs. 299"
  },
  {
    id: 3,
    title: "Veg Thukpa",
    desc: "Warm noodle soup with Himalayan spices.",
    ingredients: ["Noodles", "Vegetables", "Garlic", "Ginger", "Chili", "Soy sauce"],
    steps: [
      "Boil noodles separately.",
      "Prepare soup base with garlic, ginger, and spices.",
      "Add vegetables and simmer.",
      "Serve hot with noodles."
    ],
    img: hero,
    time: "20 min",
    serve: "1-2",
    price: "Rs. 199"
  },
  {
    id: 4,
    title: "Sel Roti",
    desc: "Traditional Nepali rice doughnut, crispy outside, soft inside.",
    ingredients: ["Rice flour", "Milk", "Sugar", "Ghee", "Cardamom"],
    steps: [
      "Prepare thick batter with rice flour and milk.",
      "Add sugar, cardamom, and mix well.",
      "Deep fry in ring shapes until golden brown."
    ],
    img: "/images/selroti.jpg",
    time: "40 min",
    serve: "3-5",
    price: "Rs. 149"
  },
  {
    id: 5,
    title: "Chatamari",
    desc: "Rice crepe often called Nepali pizza.",
    ingredients: ["Rice flour", "Egg", "Minced meat", "Onion", "Green chili"],
    steps: [
      "Prepare rice flour batter.",
      "Cook crepe on a pan.",
      "Top with egg, onion, and minced meat.",
      "Cook until toppings are done."
    ],
    img: "/images/chatamari.jpg",
    time: "25 min",
    serve: "2-3",
    price: "Rs. 179"
  },
  {
    id: 6,
    title: "Yomari",
    desc: "Steamed sweet dumpling filled with jaggery and sesame.",
    ingredients: ["Rice flour", "Jaggery", "Sesame seeds", "Ghee"],
    steps: [
      "Prepare rice flour dough.",
      "Fill with jaggery and sesame paste.",
      "Shape into fish-like dumplings.",
      "Steam for 15 minutes."
    ],
    img: "/images/yomari.jpg",
    time: "35 min",
    serve: "2-3",
    price: "Rs. 159"
  },
  {
    id: 7,
    title: "Gundruk Sadeko",
    desc: "Fermented leafy greens tossed with chili and mustard oil.",
    ingredients: ["Gundruk", "Onion", "Green chili", "Mustard oil", "Salt"],
    steps: [
      "Soak gundruk in warm water.",
      "Squeeze out water and chop.",
      "Mix with onion, chili, and mustard oil.",
      "Serve as a side dish."
    ],
    img: "/images/gundruk.jpg",
    time: "15 min",
    serve: "2-3",
    price: "Rs. 129"
  },
  {
    id: 8,
    title: "Aloo Tama",
    desc: "Potato and bamboo shoot curry with beans.",
    ingredients: ["Potato", "Bamboo shoots", "Black-eyed beans", "Spices", "Tomato"],
    steps: [
      "Cook beans until soft.",
      "Add potato and bamboo shoots.",
      "Prepare curry with tomato and spices.",
      "Simmer until thick."
    ],
    img: "/images/alootama.jpg",
    time: "30 min",
    serve: "2-4",
    price: "Rs. 219"
  },
  {
    id: 9,
    title: "Kwati",
    desc: "Festive soup of nine sprouted beans, rich in protein.",
    ingredients: ["Mixed sprouted beans", "Garlic", "Ginger", "Spices"],
    steps: [
      "Pressure cook beans until soft.",
      "Prepare masala base with garlic and ginger.",
      "Mix with beans and simmer.",
      "Serve hot."
    ],
    img: "/images/kwati.jpg",
    time: "35 min",
    serve: "3-4",
    price: "Rs. 239"
  },
  {
    id: 10,
    title: "Samay Baji",
    desc: "Traditional Newari platter with beaten rice and accompaniments.",
    ingredients: ["Beaten rice", "Boiled egg", "Buff meat", "Achar", "Beans", "Spices"],
    steps: [
      "Prepare all accompaniments.",
      "Arrange beaten rice, egg, meat, and achar on a plate.",
      "Serve as a festive platter."
    ],
    img: "/images/samaybaji.jpg",
    time: "45 min",
    serve: "3-5",
    price: "Rs. 349"
  }
];

export default meals;
