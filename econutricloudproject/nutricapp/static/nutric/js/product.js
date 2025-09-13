// // ---------------- Fruits (20) ----------------
// const fruits = [
//   {
//     name: "Apple",
//     category: "Fruit",
//     desc: "Rich in fiber and vitamin C.",
//     more: "Apples are loaded with dietary fiber that supports healthy digestion.\nThey contain vitamin C which strengthens the immune system.\nRegular consumption may help reduce the risk of chronic diseases.\nApples are low in calories, making them ideal for weight management.\nThey support heart health by lowering cholesterol.\nGreat as a snack, in salads, or juices.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 52
//   },
//   {
//     name: "Banana",
//     category: "Fruit",
//     desc: "High in potassium and natural energy.",
//     more: "Bananas are an excellent source of potassium that helps regulate blood pressure.\nThey provide quick energy, making them great for athletes and kids.\nContain vitamin B6 which supports brain health.\nBananas aid digestion due to their fiber content.\nThey may help reduce muscle cramps and soreness.\nPerfect for smoothies, snacks, or breakfast bowls.",
//     img: "https://via.placeholder.com/150",
//     age: "Kids",
//     calories: 89
//   },
//   {
//     name: "Orange",
//     category: "Fruit",
//     desc: "Vitamin C powerhouse.",
//     more: "Oranges are best known for their high vitamin C content which boosts immunity.\nThey contain antioxidants that fight inflammation and aging.\nRegular consumption may help improve skin health and collagen production.\nThey aid hydration as they are made up mostly of water.\nSupport heart health with potassium and fiber.\nEnjoyed as fresh fruit, juice, or zest in cooking.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 47
//   },
//   {
//     name: "Grapes",
//     category: "Fruit",
//     desc: "Packed with antioxidants.",
//     more: "Grapes contain resveratrol, an antioxidant that supports heart health.\nThey are naturally hydrating and provide quick energy.\nRegular intake may improve memory and brain function.\nHelp protect against certain types of cancer due to polyphenols.\nSupport eye health with vitamin A and lutein.\nGreat eaten raw, in fruit salads, or as raisins.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 69
//   },
//   {
//     name: "Mango",
//     category: "Fruit",
//     desc: "Rich in vitamin A and sweet taste.",
//     more: "Mangoes are loaded with vitamin A which supports eye health.\nThey contain natural sugars providing quick energy.\nRich in antioxidants that promote glowing skin.\nAid digestion with enzymes like amylases.\nBoost immunity with vitamins A, C, and E.\nPerfect for smoothies, desserts, or eaten fresh.",
//     img: "https://via.placeholder.com/150",
//     age: "Teens",
//     calories: 60
//   },
//   {
//     name: "Pineapple",
//     category: "Fruit",
//     desc: "Tropical fruit that boosts immunity.",
//     more: "Pineapples contain bromelain, an enzyme aiding digestion.\nThey are rich in vitamin C which strengthens the immune system.\nMay help reduce inflammation and joint pain.\nSupport hydration due to high water content.\nBoosts skin health with antioxidants.\nEnjoyed fresh, in juices, or grilled in dishes.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 50
//   },
//   {
//     name: "Strawberry",
//     category: "Fruit",
//     desc: "Low-calorie berry rich in vitamin C.",
//     more: "Strawberries are packed with vitamin C which supports immunity.\nContain antioxidants that protect against cell damage.\nHelp regulate blood sugar due to fiber.\nSupport heart health by lowering bad cholesterol.\nLow in calories, ideal for weight management.\nDelicious fresh, in desserts, or smoothies.",
//     img: "https://via.placeholder.com/150",
//     age: "Kids",
//     calories: 32
//   },
//   {
//     name: "Blueberry",
//     category: "Fruit",
//     desc: "Brain-boosting antioxidant berry.",
//     more: "Blueberries are known as a superfood due to high antioxidants.\nSupport brain health and memory function.\nMay reduce risk of heart disease.\nContain fiber that supports digestion.\nImprove skin health with vitamin C.\nGreat in pancakes, smoothies, or eaten raw.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 57
//   },
//   {
//     name: "Papaya",
//     category: "Fruit",
//     desc: "Tropical fruit aiding digestion.",
//     more: "Papayas contain papain enzyme that helps protein digestion.\nThey are rich in vitamin C boosting immunity.\nSupport skin health with vitamin A and antioxidants.\nHelp reduce inflammation in the body.\nAid weight loss as they are low in calories.\nDelicious in salads, smoothies, or eaten plain.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 43
//   },
//   {
//     name: "Pomegranate",
//     category: "Fruit",
//     desc: "Heart-friendly antioxidant-rich fruit.",
//     more: "Pomegranates are rich in polyphenols that improve heart health.\nThey contain antioxidants which reduce inflammation.\nHelp lower blood pressure and improve circulation.\nSupport memory and brain function.\nBoost immunity and protect against infections.\nEnjoyed as seeds, juice, or in salads.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 83
//   },
//   {
//     name: "Watermelon",
//     category: "Fruit",
//     desc: "Hydrating summer fruit.",
//     more: "Watermelon is over 90% water, making it excellent for hydration.\nIt is low in calories, making it weight-loss friendly.\nContains lycopene, an antioxidant beneficial for heart health.\nSupports skin and eye health.\nNaturally refreshing and cooling in hot weather.\nEaten fresh or blended into juices and smoothies.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 30
//   },
//   {
//     name: "Kiwi",
//     category: "Fruit",
//     desc: "Vitamin C booster fruit.",
//     more: "Kiwis are extremely rich in vitamin C which boosts immunity.\nThey improve digestion due to actinidin enzyme.\nContain antioxidants that support skin health.\nHelp regulate blood pressure with potassium.\nAid sleep due to natural serotonin content.\nBest eaten fresh or added to salads.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 41
//   },
//   {
//     name: "Guava",
//     category: "Fruit",
//     desc: "Fiber and vitamin C-rich fruit.",
//     more: "Guavas are one of the richest sources of vitamin C.\nThey support digestive health due to high fiber.\nMay help regulate blood sugar levels.\nBoost immunity and protect against infections.\nPromote skin health with antioxidants.\nEnjoyed raw, juiced, or in jams.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 68
//   },
//   {
//     name: "Pear",
//     category: "Fruit",
//     desc: "Juicy fruit supporting digestion.",
//     more: "Pears are high in fiber that improves gut health.\nThey are hydrating and naturally refreshing.\nSupport heart health with antioxidants and potassium.\nLow in calories, making them great for weight control.\nMay reduce risk of type 2 diabetes.\nBest eaten raw or poached in desserts.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 57
//   },
//   {
//     name: "Peach",
//     category: "Fruit",
//     desc: "Sweet fruit rich in vitamins.",
//     more: "Peaches contain vitamins A and C which support skin health.\nThey aid digestion with dietary fiber.\nHydrating due to high water content.\nSupport heart health with antioxidants.\nGood for immunity and eye health.\nDelicious fresh, grilled, or in desserts.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 39
//   },
//   {
//     name: "Plum",
//     category: "Fruit",
//     desc: "Antioxidant-rich stone fruit.",
//     more: "Plums contain polyphenols that protect against inflammation.\nSupport digestion and relieve constipation.\nHelp regulate blood sugar levels.\nSupport bone health with vitamin K.\nBoost immunity with antioxidants.\nEaten fresh, dried (prunes), or in jams.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 46
//   },
//   {
//     name: "Cherry",
//     category: "Fruit",
//     desc: "Anti-inflammatory juicy fruit.",
//     more: "Cherries are rich in anthocyanins which reduce inflammation.\nSupport better sleep with melatonin.\nAid muscle recovery after exercise.\nHelp regulate blood pressure with potassium.\nProtect against oxidative stress with antioxidants.\nDelicious eaten fresh, in pies, or juices.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 50
//   },
//   {
//     name: "Coconut",
//     category: "Fruit",
//     desc: "Hydrating tropical fruit.",
//     more: "Coconuts provide natural electrolytes that rehydrate the body.\nCoconut water is refreshing and low in calories.\nCoconut flesh contains healthy fats for energy.\nSupports digestion and gut health.\nMay improve skin and hair health.\nUsed as water, milk, or flesh in many cuisines.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 354
//   },
//   {
//     name: "Fig",
//     category: "Fruit",
//     desc: "Sweet fruit rich in fiber.",
//     more: "Figs support digestive health due to high fiber.\nContain calcium and potassium for bone health.\nMay improve blood sugar regulation.\nRich in antioxidants that protect against aging.\nPromote healthy skin and hair.\nEaten fresh, dried, or in desserts.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 74
//   },
//   {
//     name: "Dragon Fruit",
//     category: "Fruit",
//     desc: "Exotic antioxidant-rich fruit.",
//     more: "Dragon fruit is rich in vitamin C and antioxidants.\nSupports digestion with dietary fiber.\nBoosts immunity and overall wellness.\nLow in calories and hydrating.\nPromotes healthy skin and gut microbiome.\nEnjoyed fresh, in smoothies, or fruit salads.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 60
//   },
//   // ---------------- Vegetables (20) ---------------
//   {
//     name: "Carrot",
//     category: "Vegetable",
//     desc: "Rich in beta-carotene and fiber.",
//     more: "Carrots are loaded with beta-carotene which converts into vitamin A for good vision.\nThey support immune health and skin glow.\nCarrots help regulate blood sugar due to fiber.\nLow in calories and ideal for weight management.\nSupport heart health by lowering cholesterol.\nEnjoy raw, steamed, juiced, or in soups.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 41
//   },
//   {
//     name: "Spinach",
//     category: "Vegetable",
//     desc: "Leafy green high in iron and vitamins.",
//     more: "Spinach is rich in iron which supports red blood cell production.\nContains vitamin K for strong bones.\nPacked with antioxidants that fight aging.\nLow in calories and nutrient-dense.\nSupports healthy eyes with lutein and zeaxanthin.\nGreat in salads, curries, or smoothies.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 23
//   },
//   {
//     name: "Broccoli",
//     category: "Vegetable",
//     desc: "Cruciferous vegetable full of nutrients.",
//     more: "Broccoli is high in vitamin C and vitamin K.\nContains sulforaphane, an antioxidant that may reduce cancer risk.\nSupports bone health due to calcium and vitamin K.\nBoosts immunity with antioxidants.\nAids digestion with high fiber.\nDelicious steamed, roasted, or stir-fried.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 34
//   },
//   {
//     name: "Tomato",
//     category: "Vegetable",
//     desc: "Juicy source of vitamin C and lycopene.",
//     more: "Tomatoes are rich in lycopene, an antioxidant good for heart health.\nBoost immunity with vitamin C.\nSupport healthy skin by reducing oxidative stress.\nHelp reduce the risk of certain cancers.\nAid hydration as they are 95% water.\nEnjoy raw, in sauces, soups, and salads.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 18
//   },
//   {
//     name: "Cabbage",
//     category: "Vegetable",
//     desc: "Fiber-rich cruciferous vegetable.",
//     more: "Cabbage improves digestion with fiber.\nContains vitamin K and vitamin C for immunity.\nSupports heart health by lowering cholesterol.\nHelps in weight loss as it is very low-calorie.\nRich in antioxidants that protect cells.\nGreat in salads, stir-fries, or soups.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 25
//   },
//   {
//     name: "Cauliflower",
//     category: "Vegetable",
//     desc: "Low-carb alternative rich in vitamin C.",
//     more: "Cauliflower contains vitamin C and folate.\nSupports digestion with high fiber.\nCan be used as a low-carb substitute for rice.\nPromotes heart health with antioxidants.\nStrengthens bones with vitamin K.\nTasty when roasted, mashed, or in curries.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 25
//   },
//   {
//     name: "Potato",
//     category: "Vegetable",
//     desc: "Starchy vegetable high in energy.",
//     more: "Potatoes provide carbohydrates for energy.\nContain potassium which supports heart health.\nRich in vitamin B6 for brain function.\nSupport digestion with resistant starch.\nCan be filling and nutritious when baked or boiled.\nCommonly used in curries, fries, or mashed.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 77
//   },
//   {
//     name: "Onion",
//     category: "Vegetable",
//     desc: "Flavorful bulb with antioxidants.",
//     more: "Onions are packed with antioxidants like quercetin.\nSupport heart health by reducing cholesterol.\nHave antibacterial and anti-inflammatory properties.\nBoost immunity naturally.\nAid digestion and improve metabolism.\nUsed in almost all savory dishes worldwide.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 40
//   },
//   {
//     name: "Cucumber",
//     category: "Vegetable",
//     desc: "Hydrating vegetable with minerals.",
//     more: "Cucumbers are 95% water, great for hydration.\nContain antioxidants that reduce inflammation.\nLow in calories, perfect for weight loss.\nPromote skin health and reduce puffiness.\nSupport heart health with potassium.\nBest eaten raw in salads or infused water.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 16
//   },
//   {
//     name: "Brinjal (Eggplant)",
//     category: "Vegetable",
//     desc: "Versatile vegetable high in fiber.",
//     more: "Eggplants are rich in antioxidants like nasunin.\nSupport heart health by lowering cholesterol.\nProvide fiber that aids digestion.\nHelp in weight management as they are low-calorie.\nSupport brain health with phytonutrients.\nDelicious when roasted, fried, or curried.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 25
//   },
//   {
//     name: "Capsicum (Bell Pepper)",
//     category: "Vegetable",
//     desc: "Colorful vegetable rich in vitamin C.",
//     more: "Bell peppers are loaded with vitamin C for immunity.\nContain antioxidants that fight inflammation.\nSupport eye health with carotenoids.\nLow in calories and very hydrating.\nAdd flavor and crunch to dishes.\nUsed in salads, pizzas, and stir-fries.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 31
//   },
//   {
//     name: "Peas",
//     category: "Vegetable",
//     desc: "Protein-rich green vegetable.",
//     more: "Peas are high in plant protein.\nContain vitamins A, C, and K.\nSupport digestion with fiber.\nHelp regulate blood sugar levels.\nBoost immunity with antioxidants.\nCommonly used in curries, soups, and fried rice.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 81
//   },
//   {
//     name: "Beetroot",
//     category: "Vegetable",
//     desc: "Rich in nitrates and antioxidants.",
//     more: "Beetroot supports healthy blood pressure.\nImproves stamina and athletic performance.\nRich in folate and manganese.\nSupports liver detoxification.\nPromotes glowing skin with antioxidants.\nCan be juiced, boiled, or roasted.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 43
//   },
//   {
//     name: "Bitter Gourd",
//     category: "Vegetable",
//     desc: "Bitter vegetable with medicinal value.",
//     more: "Bitter gourd helps regulate blood sugar levels.\nSupports liver health and detoxification.\nRich in vitamin C and antioxidants.\nBoosts immunity naturally.\nUsed in traditional medicine for diabetes.\nCooked in curries or consumed as juice.",
//     img: "https://via.placeholder.com/150",
//     age: "Adults",
//     calories: 17
//   },
//   {
//     name: "Drumstick (Moringa)",
//     category: "Vegetable",
//     desc: "Nutrient-rich superfood vegetable.",
//     more: "Drumsticks are high in vitamin C and iron.\nSupport bone health with calcium.\nBoost immunity and fight infections.\nAid digestion and improve metabolism.\nRich in antioxidants that protect cells.\nUsed in curries, soups, and sambar.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 37
//   },
//   {
//     name: "Okra (Ladyfinger)",
//     category: "Vegetable",
//     desc: "Slimy vegetable good for digestion.",
//     more: "Okra supports healthy digestion with soluble fiber.\nHelps regulate blood sugar levels.\nRich in vitamin C and K.\nSupports pregnancy with folate.\nLow in calories, good for weight loss.\nCooked in stir-fries and curries.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 33
//   },
//   {
//     name: "Pumpkin",
//     category: "Vegetable",
//     desc: "Orange vegetable high in beta-carotene.",
//     more: "Pumpkin is rich in vitamin A for eye health.\nSupports immunity with antioxidants.\nLow in calories and high in fiber.\nHelps in weight management.\nGreat for heart health with potassium.\nUsed in soups, pies, and curries.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 26
//   },
//   {
//     name: "Radish",
//     category: "Vegetable",
//     desc: "Crunchy root vegetable with minerals.",
//     more: "Radishes are high in water, keeping you hydrated.\nSupport digestion with fiber.\nContain vitamin C for immunity.\nHelp detoxify the liver.\nImprove skin health naturally.\nEaten raw in salads or pickled.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 16
//   },
//   {
//     name: "Sweet Potato",
//     category: "Vegetable",
//     desc: "Starchy root rich in beta-carotene.",
//     more: "Sweet potatoes are packed with vitamin A.\nProvide energy with complex carbs.\nSupport digestion with fiber.\nBoost immunity with antioxidants.\nHelp regulate blood sugar.\nBaked, boiled, or mashed as a healthy dish.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 86
//   },
// // ---------------- Grains (20) ----------------
//   {
//     name: "Rice",
//     category: "Grain",
//     desc: "Staple grain providing energy.",
//     more: "Rice is rich in carbohydrates that fuel the body.\nAvailable in white, brown, and red varieties.\nBrown rice has more fiber and nutrients.\nEasily digestible and suitable for all ages.\nSupports healthy weight when eaten in moderation.\nUsed in biryani, fried rice, and porridge.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 130
//   },
//   {
//     name: "Wheat",
//     category: "Grain",
//     desc: "Whole grain staple rich in fiber.",
//     more: "Wheat provides energy through carbohydrates.\nWhole wheat is high in fiber and aids digestion.\nSupports heart health with antioxidants.\nContains B vitamins for energy metabolism.\nUsed to make bread, chapati, and pasta.\nKeeps you fuller for longer.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 327
//   },
//   {
//     name: "Barley",
//     category: "Grain",
//     desc: "Good source of fiber and minerals.",
//     more: "Barley improves digestion and gut health due to fiber.\nContains vitamins and minerals supporting wellness.\nHelps lower cholesterol and maintain heart health.\nCan be used in soups, stews, and salads.\nSuitable for all ages as a healthy whole grain.\nSupports weight management and energy balance.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 354
//   },
//   {
//     name: "Oats",
//     category: "Grain",
//     desc: "Healthy grain rich in soluble fiber.",
//     more: "Oats contain beta-glucan that lowers cholesterol.\nSupport digestive health and gut microbiome.\nProvide slow-release energy for the day.\nGood source of protein and vitamins.\nMay help regulate blood sugar levels.\nCommonly eaten as porridge or granola.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 389
//   },
//   {
//     name: "Millet",
//     category: "Grain",
//     desc: "Ancient grain full of nutrients.",
//     more: "Millets are gluten-free and rich in minerals.\nThey aid digestion with high fiber.\nSupport heart health with magnesium.\nHelp regulate blood sugar levels.\nLow glycemic index, suitable for diabetics.\nCooked as porridge, dosa, or roti.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 378
//   },
//   {
//     name: "Corn",
//     category: "Grain",
//     desc: "Sweet grain rich in fiber.",
//     more: "Corn is rich in antioxidants like lutein and zeaxanthin.\nSupports eye health and vision.\nProvides energy with carbohydrates.\nContains vitamins B and C.\nDelicious grilled, boiled, or in soups.\nUsed to make popcorn, tortillas, and chips.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 86
//   },
//   {
//     name: "Quinoa",
//     category: "Grain",
//     desc: "Protein-rich pseudo-grain.",
//     more: "Quinoa contains all nine essential amino acids.\nGluten-free and suitable for all ages.\nSupports muscle growth and repair.\nRich in magnesium, iron, and zinc.\nHelps regulate blood sugar.\nCooked as a rice substitute or salad base.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 368
//   },
//   {
//     name: "Rye",
//     category: "Grain",
//     desc: "Fiber-rich grain used in bread.",
//     more: "Rye supports digestion with high fiber.\nHelps regulate cholesterol and blood sugar.\nContains antioxidants and B vitamins.\nSupports weight management.\nUsed in bread, crackers, and porridge.\nHas a distinct nutty flavor.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 335
//   },
//   {
//     name: "Sorghum",
//     category: "Grain",
//     desc: "Gluten-free ancient grain.",
//     more: "Sorghum is rich in antioxidants and fiber.\nSupports digestive and heart health.\nHelps in weight management.\nProvides energy with complex carbs.\nCan be popped like popcorn or ground into flour.\nCommon in porridges and flatbreads.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 329
//   },
//   {
//     name: "Buckwheat",
//     category: "Grain",
//     desc: "Nutrient-rich gluten-free grain.",
//     more: "Buckwheat is high in protein and fiber.\nSupports heart health with rutin antioxidant.\nGluten-free and suitable for celiac patients.\nHelps regulate blood sugar levels.\nRich in magnesium for energy.\nUsed in pancakes, noodles, and porridge.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 343
//   },
//   {
//     name: "Farro",
//     category: "Grain",
//     desc: "Ancient grain high in protein.",
//     more: "Farro is a great source of plant protein.\nSupports digestion with fiber.\nRich in magnesium and zinc.\nHelps maintain healthy cholesterol levels.\nKeeps you energized longer.\nUsed in salads, soups, and risotto.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 375
//   },
//   {
//     name: "Teff",
//     category: "Grain",
//     desc: "Tiny gluten-free grain from Ethiopia.",
//     more: "Teff is rich in iron and calcium.\nGluten-free and ideal for celiac diets.\nSupports bone strength and blood health.\nProvides energy with complex carbs.\nUsed to make injera bread.\nAids digestion with fiber content.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 367
//   },
//   {
//     name: "Amaranth",
//     category: "Grain",
//     desc: "High-protein gluten-free grain.",
//     more: "Amaranth contains lysine, an essential amino acid.\nRich in calcium and iron.\nSupports bone and blood health.\nHelps reduce cholesterol levels.\nGluten-free and suitable for everyone.\nCooked into porridge or popped as snack.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 371
//   },
//   {
//     name: "Freekeh",
//     category: "Grain",
//     desc: "Roasted green wheat grain.",
//     more: "Freekeh is rich in protein and fiber.\nSupports digestive health.\nProvides slow-release energy.\nHas a nutty, smoky flavor.\nUsed in salads and pilafs.\nAids in weight management.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 325
//   },
//   {
//     name: "Kamut",
//     category: "Grain",
//     desc: "Ancient wheat grain high in protein.",
//     more: "Kamut is a great source of protein and fiber.\nContains selenium which supports immunity.\nProvides magnesium for energy.\nHelps maintain healthy cholesterol.\nNutty taste and chewy texture.\nUsed in salads, soups, and bread.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 337
//   },
//   {
//     name: "Wild Rice",
//     category: "Grain",
//     desc: "Nutrient-dense aquatic grass seed.",
//     more: "Wild rice is higher in protein than regular rice.\nSupports heart health with antioxidants.\nRich in magnesium, zinc, and fiber.\nHelps regulate digestion.\nDistinct earthy flavor and chewy texture.\nServed in salads, soups, and pilafs.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 101
//   },
//   {
//     name: "Spelt",
//     category: "Grain",
//     desc: "Ancient wheat variety.",
//     more: "Spelt is high in protein and fiber.\nSupports digestion and gut health.\nRich in B vitamins and iron.\nUsed in bread, pasta, and cereals.\nNutty and slightly sweet taste.\nPromotes sustained energy.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 338
//   },
//   {
//     name: "Bulgur",
//     category: "Grain",
//     desc: "Cracked wheat used in Middle Eastern cuisine.",
//     more: "Bulgur is high in fiber and protein.\nSupports healthy digestion.\nLow glycemic index, good for diabetics.\nRich in B vitamins and minerals.\nQuick-cooking grain for busy meals.\nUsed in tabbouleh, pilafs, and soups.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 342
//   },
//   {
//     name: "Fonio",
//     category: "Grain",
//     desc: "West African ancient grain.",
//     more: "Fonio is gluten-free and nutrient-rich.\nSupports energy with complex carbs.\nEasily digestible and light.\nRich in amino acids and iron.\nCooked like couscous or porridge.\nSustains energy throughout the day.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 367
//   },
//   // ---------------- Legumes (20) ----------------
//   {
//     name: "Chickpeas",
//     category: "Legume",
//     desc: "Protein-rich legume also called garbanzo beans.",
//     more: "Chickpeas are high in plant protein, supporting muscle growth.\nThey are rich in fiber that aids digestion and weight management.\nContain iron, folate, and magnesium for energy and blood health.\nHelp regulate blood sugar levels with complex carbs.\nSupport heart health by lowering cholesterol.\nUsed in hummus, curries, and salads.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 164
//   },
//   {
//     name: "Lentils",
//     category: "Legume",
//     desc: "Nutrient-dense pulses in many colors.",
//     more: "Lentils are packed with protein and fiber.\nSupport heart health by reducing cholesterol.\nContain folate which is essential during pregnancy.\nProvide iron that helps prevent anemia.\nLow in fat but very filling.\nCooked in soups, curries, and dals.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 116
//   },
//   {
//     name: "Kidney Beans",
//     category: "Legume",
//     desc: "Dark red beans rich in protein and fiber.",
//     more: "Kidney beans provide plant-based protein for strength.\nThey support digestion with high fiber.\nHelp stabilize blood sugar levels.\nRich in iron, folate, and magnesium.\nPromote heart health by lowering cholesterol.\nCooked in curries, stews, and chili.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 127
//   },
//   {
//     name: "Black Beans",
//     category: "Legume",
//     desc: "Popular beans high in antioxidants.",
//     more: "Black beans are full of plant protein and fiber.\nContain anthocyanins, powerful antioxidants.\nSupport heart health and reduce cholesterol.\nHelp regulate blood sugar with complex carbs.\nBoost gut health with prebiotic fiber.\nCommonly used in burritos, soups, and salads.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 132
//   },
//   {
//     name: "Soybeans",
//     category: "Legume",
//     desc: "Protein-packed legume for multiple uses.",
//     more: "Soybeans contain complete protein with all amino acids.\nUsed to make tofu, soy milk, and soy sauce.\nHelp reduce cholesterol and improve heart health.\nRich in isoflavones that support hormonal balance.\nStrengthen bones with calcium and magnesium.\nVersatile for both vegetarian and vegan diets.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 173
//   },
//   {
//     name: "Green Peas",
//     category: "Legume",
//     desc: "Sweet green legume rich in protein.",
//     more: "Green peas are high in plant protein and fiber.\nContain vitamins A, C, and K for health.\nHelp regulate blood sugar.\nBoost immunity and reduce inflammation.\nSupport digestion with insoluble fiber.\nCooked in curries, soups, and stir-fries.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 81
//   },
//   {
//     name: "Pinto Beans",
//     category: "Legume",
//     desc: "Creamy beans popular in Latin cuisine.",
//     more: "Pinto beans are a great source of plant protein.\nSupport heart health by lowering cholesterol.\nProvide folate and magnesium for wellness.\nHelp stabilize blood sugar.\nUsed in burritos, stews, and refried beans.\nSupport digestive health with fiber.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 143
//   },
//   {
//     name: "Navy Beans",
//     category: "Legume",
//     desc: "Small white beans rich in fiber.",
//     more: "Navy beans help regulate cholesterol and blood sugar.\nRich in protein for muscle strength.\nContain folate and magnesium for wellness.\nBoost energy with iron content.\nPromote digestive health with fiber.\nUsed in soups, baked beans, and stews.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 140
//   },
//   {
//     name: "Mung Beans",
//     category: "Legume",
//     desc: "Tiny green beans used in Asian cuisine.",
//     more: "Mung beans are rich in protein and fiber.\nHelp detoxify and cool the body.\nSupport heart health with antioxidants.\nGood source of folate and magnesium.\nAid digestion and weight loss.\nUsed in sprouts, curries, and desserts.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 105
//   },
//   {
//     name: "Black-eyed Peas",
//     category: "Legume",
//     desc: "Cream-colored beans with a black spot.",
//     more: "Black-eyed peas are rich in protein and fiber.\nSupport digestion and heart health.\nProvide folate for cell growth.\nHelp maintain blood sugar balance.\nBoost immunity with antioxidants.\nCooked in curries, soups, and stews.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 110
//   },
//   {
//     name: "Adzuki Beans",
//     category: "Legume",
//     desc: "Small red beans popular in Asia.",
//     more: "Adzuki beans are rich in antioxidants.\nContain protein and fiber for wellness.\nSupport heart health by lowering cholesterol.\nBoost digestion and metabolism.\nUsed in sweet and savory dishes.\nCommon in Japanese red bean paste.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 128
//   },
//   {
//     name: "Lima Beans",
//     category: "Legume",
//     desc: "Creamy beans also called butter beans.",
//     more: "Lima beans provide protein and complex carbs.\nRich in iron, magnesium, and potassium.\nSupport heart health with fiber.\nHelp regulate blood sugar.\nUsed in soups, stews, and casseroles.\nLow in fat and very filling.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 115
//   },
//   {
//     name: "Fava Beans",
//     category: "Legume",
//     desc: "Ancient bean rich in nutrients.",
//     more: "Fava beans are high in protein and fiber.\nSupport brain health with L-dopa compound.\nBoost energy and immunity.\nContain folate and iron for blood health.\nPromote digestive health.\nCooked in soups, stews, or mashed.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 88
//   },
//   {
//     name: "Cranberry Beans",
//     category: "Legume",
//     desc: "Speckled beans with mild flavor.",
//     more: "Cranberry beans provide protein and fiber.\nHelp regulate cholesterol and blood sugar.\nRich in antioxidants for cell protection.\nBoost energy with iron and magnesium.\nUsed in Italian and South American dishes.\nCreamy texture when cooked.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 143
//   },
//   {
//     name: "Horse Gram",
//     category: "Legume",
//     desc: "Protein-rich legume used in India.",
//     more: "Horse gram supports weight loss.\nRich in iron and protein for strength.\nHelps regulate blood sugar.\nBoosts kidney and liver health.\nUsed in soups, curries, and powders.\nTraditional food for stamina.",
//     img: "https://via.placeholder.com/150",
//     age: "Adults",
//     calories: 321
//   },
//   {
//     name: "Pigeon Peas",
//     category: "Legume",
//     desc: "Also known as tur dal in India.",
//     more: "Pigeon peas are rich in protein and fiber.\nSupport digestion with complex carbs.\nProvide iron and folate.\nHelp regulate blood sugar levels.\nUsed in dals, curries, and soups.\nStaple in tropical countries.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 343
//   },
//   {
//     name: "Red Lentils",
//     category: "Legume",
//     desc: "Quick-cooking lentils rich in nutrients.",
//     more: "Red lentils are high in protein and iron.\nSupport heart health and digestion.\nContain antioxidants that boost immunity.\nHelp maintain blood sugar.\nUsed in dals, soups, and stews.\nEasy to cook and very filling.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 116
//   },
//   {
//     name: "White Beans",
//     category: "Legume",
//     desc: "Mild beans rich in nutrients.",
//     more: "White beans are full of protein and fiber.\nContain folate and magnesium.\nHelp lower cholesterol.\nSupport digestive and heart health.\nUsed in soups, stews, and casseroles.\nProvide long-lasting energy.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 139
//   },
//   {
//     name: "Green Gram Sprouts",
//     category: "Legume",
//     desc: "Sprouted mung beans rich in nutrients.",
//     more: "Sprouts are easy to digest and nutrient-dense.\nHigh in vitamin C and antioxidants.\nSupport immunity and metabolism.\nHelp in weight management.\nUsed in salads and sandwiches.\nBoost energy naturally.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 30
//   },
// // ---------------- Nuts (20) ----------------
//   {
//     name: "Almonds",
//     category: "Nut",
//     desc: "Crunchy nut rich in vitamin E.",
//     more: "Almonds are packed with healthy fats and protein.\nSupport brain health and memory.\nBoost heart health by reducing cholesterol.\nProvide vitamin E for glowing skin.\nHelp regulate blood sugar.\nEaten raw, roasted, or in desserts.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 579
//   },
//   {
//     name: "Walnuts",
//     category: "Nut",
//     desc: "Brain-shaped nut full of omega-3.",
//     more: "Walnuts support brain health with omega-3 fatty acids.\nBoost heart health and reduce inflammation.\nProvide antioxidants for cell protection.\nSupport better sleep with melatonin.\nPromote healthy skin and hair.\nEaten raw, roasted, or in baked goods.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 654
//   },
//   {
//     name: "Cashews",
//     category: "Nut",
//     desc: "Creamy nut rich in minerals.",
//     more: "Cashews are rich in magnesium and zinc.\nProvide protein and healthy fats.\nSupport strong bones and immunity.\nHelp boost energy levels.\nUsed in curries, sweets, and snacks.\nPromote healthy hair and skin.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 553
//   },
//   {
//     name: "Pistachios",
//     category: "Nut",
//     desc: "Green nut high in antioxidants.",
//     more: "Pistachios support heart health with good fats.\nProvide protein and fiber for digestion.\nRich in vitamin B6 for brain health.\nHelp control weight with filling nutrients.\nContain lutein for eye health.\nEaten roasted, salted, or in desserts.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 562
//   },
//   {
//     name: "Hazelnuts",
//     category: "Nut",
//     desc: "Sweet nut used in chocolates.",
//     more: "Hazelnuts are rich in vitamin E.\nSupport brain health with antioxidants.\nImprove heart health with good fats.\nStrengthen bones with magnesium.\nBoost skin health and glow.\nUsed in spreads, chocolates, and desserts.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 628
//   },
//   {
//     name: "Brazil Nuts",
//     category: "Nut",
//     desc: "Large nuts rich in selenium.",
//     more: "Brazil nuts are the best natural source of selenium.\nSupport thyroid function and immunity.\nBoost brain health with antioxidants.\nPromote heart health.\nImprove skin and hair naturally.\nEaten raw or roasted in small amounts.",
//     img: "https://via.placeholder.com/150",
//     age: "Adults",
//     calories: 659
//   },
//   {
//     name: "Pine Nuts",
//     category: "Nut",
//     desc: "Tiny nuts used in pesto.",
//     more: "Pine nuts are high in healthy fats and protein.\nSupport heart health and brain function.\nRich in antioxidants that reduce inflammation.\nProvide magnesium for energy.\nUsed in sauces, salads, and baking.\nVery calorie-dense but nutritious.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 673
//   },
//   {
//     name: "Macadamia",
//     category: "Nut",
//     desc: "Buttery nut rich in healthy fats.",
//     more: "Macadamia nuts provide monounsaturated fats for heart health.\nSupport brain function with omega-9.\nContain antioxidants for cell protection.\nBoost skin and hair health.\nLow in carbs, suitable for keto diets.\nEaten roasted, raw, or in cookies.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 718
//   },
//   {
//     name: "Chestnuts",
//     category: "Nut",
//     desc: "Low-fat nut with sweet flavor.",
//     more: "Chestnuts are lower in fat than most nuts.\nProvide complex carbohydrates for energy.\nRich in vitamin C and antioxidants.\nSupport digestion with fiber.\nUsed roasted, boiled, or in stuffing.\nGluten-free and versatile in dishes.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 245
//   },
//   {
//     name: "Pecans",
//     category: "Nut",
//     desc: "Sweet nut rich in healthy fats.",
//     more: "Pecans contain antioxidants that support heart health.\nProvide fiber and good fats.\nBoost energy with vitamins and minerals.\nSupport brain function and memory.\nUsed in pies, desserts, and snacks.\nHelp lower bad cholesterol.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 691
//   },
//   {
//     name: "Coconut",
//     category: "Nut",
//     desc: "Tropical nut high in medium-chain fats.",
//     more: "Coconut supports quick energy with MCT oils.\nBoosts metabolism and brain function.\nProvides hydration with coconut water.\nRich in fiber for digestion.\nUsed in curries, desserts, and oils.\nSupports skin and hair health.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 354
//   },
//   {
//     name: "Ginkgo Nuts",
//     category: "Nut",
//     desc: "Traditional nut used in Asian medicine.",
//     more: "Ginkgo nuts are rich in antioxidants.\nSupport brain health and circulation.\nUsed in soups and herbal remedies.\nProvide vitamins and minerals.\nShould be consumed in moderation.\nValued in traditional healing practices.",
//     img: "https://via.placeholder.com/150",
//     age: "Adults",
//     calories: 182
//   },
//   {
//     name: "Tiger Nuts",
//     category: "Nut",
//     desc: "Tubers often considered nuts.",
//     more: "Tiger nuts are rich in fiber and resistant starch.\nSupport digestion and gut health.\nProvide plant-based protein and healthy fats.\nBoost energy naturally.\nUsed in horchata and snacks.\nGluten-free and allergy-friendly.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 496
//   },
//   {
//     name: "Kola Nut",
//     category: "Nut",
//     desc: "Caffeine-containing nut.",
//     more: "Kola nuts provide natural caffeine for energy.\nUsed traditionally in African cultures.\nSupport metabolism and alertness.\nBoost digestion and circulation.\nUsed in making cola drinks.\nConsumed in moderation for energy.",
//     img: "https://via.placeholder.com/150",
//     age: "Adults",
//     calories: 150
//   },
//   {
//     name: "Acorns",
//     category: "Nut",
//     desc: "Oak tree nuts used historically.",
//     more: "Acorns provide complex carbs and fiber.\nMust be processed to remove tannins.\nRich in vitamins and minerals.\nUsed in flours, breads, and porridge.\nTraditional food in many cultures.\nSustainable and nutritious when prepared.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 387
//   },
//   {
//     name: "Water Chestnuts",
//     category: "Nut",
//     desc: "Crunchy aquatic vegetable often called nut.",
//     more: "Water chestnuts are rich in water content.\nSupport hydration and digestion.\nLow in calories but crunchy and filling.\nUsed in stir-fries and Asian dishes.\nProvide antioxidants for wellness.\nGood for weight management diets.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 97
//   },
//   {
//     name: "Candle Nuts",
//     category: "Nut",
//     desc: "Nut used as spice in Asian cuisine.",
//     more: "Candle nuts provide healthy fats.\nUsed traditionally in curries and sauces.\nRich in oils and calories.\nSupport brain function with nutrients.\nNot eaten raw due to toxicity.\nEnhance flavor in many regional dishes.",
//     img: "https://via.placeholder.com/150",
//     age: "Adults",
//     calories: 630
//   },
//   {
//     name: "Hickory Nuts",
//     category: "Nut",
//     desc: "Wild nuts similar to pecans.",
//     more: "Hickory nuts are high in healthy fats.\nProvide energy and protein.\nSupport heart and brain health.\nRich in antioxidants.\nUsed in baking, desserts, and snacks.\nValued as wild foraged food.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 657
//   },
//   {
//     name: "Shea Nuts",
//     category: "Nut",
//     desc: "Used for butter production.",
//     more: "Shea nuts provide fats used in shea butter.\nSupport skin and hair health externally.\nEdible in some regions.\nRich in healthy oils.\nUsed in cosmetics and foods.\nValued in African culture.",
//     img: "https://via.placeholder.com/150",
//     age: "Adults",
//     calories: 500
//   },
//   // ---------------- Dairy (20) ----------------
//   {
//     name: "Milk",
//     category: "Dairy",
//     desc: "Nutrient-rich liquid from cows.",
//     more: "Milk provides calcium for strong bones and teeth.\nContains protein for muscle development.\nRich in vitamin D to support bone health.\nProvides potassium to regulate blood pressure.\nEssential in children's growth and development.\nUsed in beverages, desserts, and cooking.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 42
//   },
//   {
//     name: "Cheddar Cheese",
//     category: "Dairy",
//     desc: "Aged cheese with sharp flavor.",
//     more: "Cheddar is high in calcium and protein.\nSupports bone health and muscle repair.\nRich in vitamin B12 for nerve function.\nContains fat-soluble vitamins like A and K.\nGood source of energy for daily activities.\nUsed in sandwiches, burgers, and pasta.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 402
//   },
//   {
//     name: "Yogurt",
//     category: "Dairy",
//     desc: "Fermented milk product rich in probiotics.",
//     more: "Yogurt supports gut health with live bacteria.\nProvides protein for muscle repair.\nRich in calcium for strong bones.\nContains vitamin B12 and riboflavin.\nHelps improve digestion and immunity.\nUsed in smoothies, dips, and desserts.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 59
//   },
//   {
//     name: "Butter",
//     category: "Dairy",
//     desc: "Cream-based spread high in fat.",
//     more: "Butter provides energy through fats.\nContains vitamin A for eye health.\nAdds flavor and richness to dishes.\nUsed in baking, cooking, and spreads.\nSupports fat-soluble vitamin absorption.\nShould be consumed in moderation.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 717
//   },
//   {
//     name: "Cream",
//     category: "Dairy",
//     desc: "Thick dairy product from milk fat.",
//     more: "Cream is rich in calories and fat.\nAdds texture and flavor to desserts.\nProvides fat-soluble vitamins.\nUsed in soups, sauces, and whipped toppings.\nSupports energy needs when consumed moderately.\nNot suitable for lactose-intolerant people.",
//     img: "https://via.placeholder.com/150",
//     age: "Adults",
//     calories: 340
//   },
//   {
//     name: "Paneer",
//     category: "Dairy",
//     desc: "Indian cottage cheese rich in protein.",
//     more: "Paneer is an excellent vegetarian protein source.\nProvides calcium for strong bones.\nSupports muscle growth and repair.\nEasily digestible and versatile in dishes.\nUsed in curries, snacks, and salads.\nSuitable for children and adults alike.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 265
//   },
//   {
//     name: "Mozzarella",
//     category: "Dairy",
//     desc: "Soft cheese used in pizzas.",
//     more: "Mozzarella is rich in calcium and protein.\nHas lower fat compared to some cheeses.\nSupports strong bones and teeth.\nContains probiotics that aid gut health.\nMelts well, perfect for pizza and pasta.\nEnjoyed fresh in salads like caprese.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 280
//   },
//   {
//     name: "Ghee",
//     category: "Dairy",
//     desc: "Clarified butter used in Indian cuisine.",
//     more: "Ghee supports digestion and boosts immunity.\nRich in healthy fats and fat-soluble vitamins.\nUsed traditionally for cooking and rituals.\nPromotes absorption of nutrients.\nAdds aroma and taste to food.\nConsumed in moderation for health benefits.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 900
//   },
//   {
//     name: "Kefir",
//     category: "Dairy",
//     desc: "Fermented milk drink rich in probiotics.",
//     more: "Kefir supports gut microbiome diversity.\nContains calcium and protein.\nBoosts immunity and digestion.\nMay help reduce inflammation.\nTart and refreshing in flavor.\nConsumed as a health drink worldwide.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 41
//   },
//   {
//     name: "Ricotta",
//     category: "Dairy",
//     desc: "Italian soft cheese with mild flavor.",
//     more: "Ricotta is rich in whey protein.\nLow in fat compared to hard cheeses.\nSupports bone and muscle health.\nUsed in pasta, desserts, and salads.\nContains calcium and essential amino acids.\nCreamy texture suitable for many dishes.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 174
//   },
//   {
//     name: "Swiss Cheese",
//     category: "Dairy",
//     desc: "Mild cheese with characteristic holes.",
//     more: "Swiss cheese contains calcium for bone strength.\nProvides protein for muscle repair.\nGood source of vitamin B12.\nLower sodium compared to some cheeses.\nUsed in sandwiches and fondues.\nSupports energy and metabolism.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 380
//   },
//   {
//     name: "Sour Cream",
//     category: "Dairy",
//     desc: "Fermented cream with tangy taste.",
//     more: "Sour cream adds flavor to dishes.\nContains probiotics for gut health.\nProvides fat for energy.\nUsed in dips, soups, and baked goods.\nEnhances texture in cooking.\nBest consumed moderately.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 193
//   },
//   {
//     name: "Condensed Milk",
//     category: "Dairy",
//     desc: "Sweetened milk used in desserts.",
//     more: "Condensed milk is rich in sugar and calories.\nUsed in sweets, cakes, and beverages.\nProvides calcium and protein.\nNot suitable for diabetics.\nAdds richness and sweetness to recipes.\nStored for long shelf life.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 321
//   },
//   {
//     name: "Evaporated Milk",
//     category: "Dairy",
//     desc: "Concentrated milk without added sugar.",
//     more: "Evaporated milk is thicker and creamier.\nProvides calcium and vitamins.\nUsed in baking, desserts, and coffee.\nHas longer shelf life than fresh milk.\nAdds creaminess to recipes.\nGood alternative to cream in cooking.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 134
//   },
//   {
//     name: "Skim Milk",
//     category: "Dairy",
//     desc: "Low-fat version of regular milk.",
//     more: "Skim milk provides protein without much fat.\nRich in calcium and vitamin D.\nHelps maintain weight with fewer calories.\nSupports muscle and bone health.\nUsed in smoothies and cereals.\nGood option for weight-conscious people.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 34
//   },
//   {
//     name: "Blue Cheese",
//     category: "Dairy",
//     desc: "Strong-flavored cheese with blue veins.",
//     more: "Blue cheese contains probiotics for gut health.\nRich in calcium and protein.\nUnique taste adds depth to dishes.\nSupports bone strength and immunity.\nUsed in salads, sauces, and spreads.\nConsumed in small quantities due to strong flavor.",
//     img: "https://via.placeholder.com/150",
//     age: "Adults",
//     calories: 353
//   },
//   {
//     name: "Ice Cream",
//     category: "Dairy",
//     desc: "Frozen dessert loved worldwide.",
//     more: "Ice cream provides calcium and protein.\nHigh in sugar and fat, best in moderation.\nVariety of flavors for all ages.\nUsed in sundaes, shakes, and cakes.\nBrings refreshment and joy.\nShould be balanced with healthy foods.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 207
//   },
//   {
//     name: "Whey Protein",
//     category: "Dairy",
//     desc: "Protein supplement from milk.",
//     more: "Whey protein supports muscle growth.\nRich in amino acids for recovery.\nUsed by athletes and fitness enthusiasts.\nEasily digestible protein source.\nAdded to shakes and smoothies.\nHelps meet daily protein needs.",
//     img: "https://via.placeholder.com/150",
//     age: "Adults",
//     calories: 400
//   },
//   {
//     name: "Lassi",
//     category: "Dairy",
//     desc: "Traditional Indian yogurt drink.",
//     more: "Lassi supports digestion with probiotics.\nRefreshing drink for hot weather.\nProvides protein and calcium.\nCan be sweet or salty.\nPopular across South Asia.\nBoosts energy and hydration.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 120
//   },
// // ---------------- Meat (20) ----------------
//   {
//     name: "Chicken Breast",
//     category: "Meat",
//     desc: "Lean white meat high in protein.",
//     more: "Chicken breast supports muscle building.\nLow in fat and calories compared to red meat.\nProvides B vitamins and phosphorus.\nUsed in grilling, curries, and salads.\nVersatile in global cuisines.\nPopular among fitness enthusiasts.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 165
//   },
//   {
//     name: "Beef Steak",
//     category: "Meat",
//     desc: "Rich red meat cut high in protein.",
//     more: "Beef steak provides iron for blood health.\nRich in zinc and B12.\nSupports muscle strength and repair.\nEaten grilled, roasted, or stewed.\nShould be consumed moderately.\nValued in many cuisines worldwide.",
//     img: "https://via.placeholder.com/150",
//     age: "Adults",
//     calories: 271
//   },
//   {
//     name: "Pork Chop",
//     category: "Meat",
//     desc: "Juicy cut from pork loin.",
//     more: "Pork chop is rich in protein and vitamins.\nProvides thiamine for energy metabolism.\nContains minerals like zinc and phosphorus.\nGrilled, fried, or baked in meals.\nModerate fat content compared to bacon.\nPopular in European cuisine.",
//     img: "https://via.placeholder.com/150",
//     age: "Adults",
//     calories: 231
//   },
//   {
//     name: "Lamb",
//     category: "Meat",
//     desc: "Tender red meat from sheep.",
//     more: "Lamb provides high-quality protein.\nRich in iron and vitamin B12.\nContains healthy omega-3 fats.\nSupports bone and blood health.\nRoasted, grilled, or stewed.\nConsumed in Mediterranean and Middle Eastern diets.",
//     img: "https://via.placeholder.com/150",
//     age: "Adults",
//     calories: 294
//   },
//   {
//     name: "Turkey",
//     category: "Meat",
//     desc: "Lean poultry often used in roasts.",
//     more: "Turkey is low in fat but high in protein.\nProvides tryptophan which helps relaxation.\nRich in vitamins B6 and B12.\nUsed in sandwiches, roasts, and soups.\nHealthier alternative to red meats.\nPopular during festive meals.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 189
//   },
//   {
//     name: "Duck",
//     category: "Meat",
//     desc: "Flavorful poultry with higher fat.",
//     more: "Duck meat is rich in protein and iron.\nContains more fat than chicken or turkey.\nProvides B vitamins and selenium.\nUsed in roasts, curries, and Chinese dishes.\nFlavorful meat enjoyed worldwide.\nBest in moderation due to fat content.",
//     img: "https://via.placeholder.com/150",
//     age: "Adults",
//     calories: 337
//   },
//   {
//     name: "Goat Meat",
//     category: "Meat",
//     desc: "Lean red meat eaten globally.",
//     more: "Goat meat is lower in fat than lamb or beef.\nRich in iron and protein.\nSupports muscle and bone health.\nUsed in curries, stews, and grills.\nPopular in Asian and African cuisines.\nSuitable for moderate consumption.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 143
//   },
//   {
//     name: "Bacon",
//     category: "Meat",
//     desc: "Cured pork slices high in fat.",
//     more: "Bacon is flavorful but high in sodium.\nProvides protein and B vitamins.\nBest eaten in moderation.\nUsed in breakfasts, burgers, and salads.\nAdds crispiness and taste to dishes.\nHigh fat and calories require balance.",
//     img: "https://via.placeholder.com/150",
//     age: "Adults",
//     calories: 541
//   },
//   {
//     name: "Ham",
//     category: "Meat",
//     desc: "Cured pork leg often sliced.",
//     more: "Ham provides protein and iron.\nUsed in sandwiches, pizzas, and salads.\nContains sodium due to curing.\nPopular in festive meals.\nAvailable in smoked and cooked forms.\nShould be consumed moderately.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 145
//   },
//   {
//     name: "Sausages",
//     category: "Meat",
//     desc: "Ground meat encased in skin.",
//     more: "Sausages are high in protein and fat.\nContain spices for flavor.\nUsed in breakfasts, pizzas, and grills.\nOften processed with preservatives.\nAvailable in chicken, pork, or beef varieties.\nConsume moderately for health.",
//     img: "https://via.placeholder.com/150",
//     age: "Adults",
//     calories: 301
//   },
//   {
//     name: "Salami",
//     category: "Meat",
//     desc: "Cured sausage with rich taste.",
//     more: "Salami is high in protein and fat.\nUsed in sandwiches, pizzas, and platters.\nContains sodium due to curing.\nPopular in Italian cuisine.\nRich flavor complements cheese and bread.\nShould be eaten in small portions.",
//     img: "https://via.placeholder.com/150",
//     age: "Adults",
//     calories: 336
//   },
//   {
//     name: "Veal",
//     category: "Meat",
//     desc: "Tender meat from young cattle.",
//     more: "Veal is tender and mild in flavor.\nRich in protein and nutrients.\nLower in fat compared to beef.\nUsed in roasts, cutlets, and stews.\nValued in European cuisines.\nConsumed occasionally for variety.",
//     img: "https://via.placeholder.com/150",
//     age: "Adults",
//     calories: 172
//   },
//   {
//     name: "Quail",
//     category: "Meat",
//     desc: "Small bird with delicate meat.",
//     more: "Quail meat is rich in protein.\nContains vitamins and minerals.\nLower in fat than duck.\nUsed in roasts and grills.\nConsidered a delicacy in many cuisines.\nNutritious but expensive choice.",
//     img: "https://via.placeholder.com/150",
//     age: "Adults",
//     calories: 134
//   },
//   {
//     name: "Rabbit",
//     category: "Meat",
//     desc: "Lean white meat with mild taste.",
//     more: "Rabbit meat is high in protein and low in fat.\nRich in iron and vitamin B12.\nSupports healthy bones and muscles.\nUsed in stews, grills, and curries.\nCommon in Mediterranean diets.\nVery digestible and light meat.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 173
//   },
//   {
//     name: "Beef Mince",
//     category: "Meat",
//     desc: "Ground beef used in various dishes.",
//     more: "Beef mince is versatile in cooking.\nProvides protein and iron.\nUsed in burgers, meatballs, and curries.\nCan be lean or fatty depending on cut.\nSupports muscle growth when consumed moderately.\nPopular in many global cuisines.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 250
//   },
//   {
//     name: "Duck Sausage",
//     category: "Meat",
//     desc: "Specialty sausage made from duck.",
//     more: "Duck sausage is rich in flavor.\nProvides protein and fats.\nUsed in gourmet meals.\nOften paired with wine and cheese.\nHigh in calories compared to chicken sausages.\nBest consumed occasionally.",
//     img: "https://via.placeholder.com/150",
//     age: "Adults",
//     calories: 320
//   },
//   {
//     name: "Camel Meat",
//     category: "Meat",
//     desc: "Lean red meat from camels.",
//     more: "Camel meat is high in protein.\nContains less fat than beef.\nRich in iron and vitamins.\nPopular in Middle Eastern cuisine.\nUsed in curries, grills, and stews.\nHealthy alternative to fatty meats.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 160
//   },
//   {
//     name: "Kangaroo",
//     category: "Meat",
//     desc: "Lean game meat from Australia.",
//     more: "Kangaroo meat is very high in protein.\nContains omega-3 fatty acids.\nLow in fat compared to beef.\nSustainable and eco-friendly meat option.\nUsed in steaks, burgers, and grills.\nRich flavor and nutrient profile.",
//     img: "https://via.placeholder.com/150",
//     age: "Adults",
//     calories: 98
//   },
//   {
//     name: "Buffalo Meat",
//     category: "Meat",
//     desc: "Lean red meat alternative to beef.",
//     more: "Buffalo meat has less fat than beef.\nRich in protein and iron.\nSupports muscle and blood health.\nUsed in curries, grills, and burgers.\nPopular in South Asian cuisine.\nNutritious and filling choice.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 146
//   },
//   // ---------------- Eggs (20) ----------------
//   {
//     name: "Chicken Egg",
//     category: "Egg",
//     desc: "Common poultry egg rich in protein.",
//     more: "Chicken eggs are high-quality protein sources.\nContain essential amino acids for muscle repair.\nRich in vitamins B12, D, and riboflavin.\nProvide choline for brain health.\nUsed in cooking, baking, and breakfast dishes.\nSuitable for all ages when cooked properly.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 68
//   },
//   {
//     name: "Duck Egg",
//     category: "Egg",
//     desc: "Larger egg with richer flavor.",
//     more: "Duck eggs are high in protein and healthy fats.\nProvide vitamins A, D, and B12.\nHigher in calories than chicken eggs.\nUsed in baking and gourmet dishes.\nSupports eye and bone health.\nSuitable for adults and children in moderation.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 130
//   },
//   {
//     name: "Quail Egg",
//     category: "Egg",
//     desc: "Tiny egg with delicate taste.",
//     more: "Quail eggs are rich in protein and minerals.\nHigh in vitamin B12 and selenium.\nSupports immunity and energy metabolism.\nUsed in appetizers, salads, and gourmet dishes.\nLower calories but nutrient-dense.\nGreat for kids and adults alike.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 14
//   },
//   {
//     name: "Goose Egg",
//     category: "Egg",
//     desc: "Large egg with rich taste.",
//     more: "Goose eggs are high in protein and fat.\nProvide vitamins A, D, and B12.\nUsed in baking and hearty recipes.\nSupports muscle growth and energy.\nShould be eaten in moderation due to high calories.\nDelicious in festive dishes.",
//     img: "https://via.placeholder.com/150",
//     age: "Adults",
//     calories: 266
//   },
//   {
//     name: "Turkey Egg",
//     category: "Egg",
//     desc: "Larger than chicken egg, less common.",
//     more: "Turkey eggs are rich in protein and vitamins.\nContain healthy fats for energy.\nProvide minerals like selenium and iron.\nUsed in baking or specialty dishes.\nSupports muscle and bone health.\nBest consumed moderately.",
//     img: "https://via.placeholder.com/150",
//     age: "Adults",
//     calories: 135
//   },
//   {
//     name: "Emu Egg",
//     category: "Egg",
//     desc: "Giant egg with unique taste.",
//     more: "Emu eggs are extremely large with high protein.\nProvide vitamins A, D, and B12.\nUsed in gourmet cooking and baking.\nRich in fats and calories.\nSupports muscle and overall energy.\nRare but nutritious option.",
//     img: "https://via.placeholder.com/150",
//     age: "Adults",
//     calories: 650
//   },
//   {
//     name: "Ostrich Egg",
//     category: "Egg",
//     desc: "World's largest bird egg.",
//     more: "Ostrich eggs are huge, can feed multiple people.\nRich in protein and essential nutrients.\nUsed in omelets and specialty dishes.\nHigh in calories and fat.\nContains vitamins A, D, and E.\nRarely available, considered a delicacy.",
//     img: "https://via.placeholder.com/150",
//     age: "Adults",
//     calories: 2000
//   },
//   {
//     name: "Pigeon Egg",
//     category: "Egg",
//     desc: "Small bird egg with delicate flavor.",
//     more: "Pigeon eggs are rich in protein and minerals.\nHigh in vitamin B12.\nUsed in gourmet dishes and soups.\nLow in calories compared to larger eggs.\nSupports immunity and muscle health.\nSuitable for adults and children.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 17
//   },
//   {
//     name: "Partridge Egg",
//     category: "Egg",
//     desc: "Small egg used in gourmet dishes.",
//     more: "Partridge eggs provide protein and essential nutrients.\nRich in vitamins B12, A, and D.\nUsed in appetizers and salads.\nLow calorie, nutrient-dense.\nSupports bone and muscle health.\nDelicate flavor enjoyed by food enthusiasts.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 18
//   },
//   {
//     name: "Gooseberry Egg",
//     category: "Egg",
//     desc: "Fictional/rare specialty egg.",
//     more: "Rich in protein and minerals.\nUsed in unique recipes.\nSupports overall energy.\nContains vitamins A and D.\nLow to moderate calories.\nRarely consumed, gourmet experience.",
//     img: "https://via.placeholder.com/150",
//     age: "Adults",
//     calories: 120
//   },
//   {
//     name: "Chicken Fertile Egg",
//     category: "Egg",
//     desc: "Fertile egg for incubation.",
//     more: "Rich in protein and nutrients.\nUsed in specific cooking recipes.\nContains vitamins B12, D, and A.\nSupports energy and muscle health.\nLow to moderate calories.\nShould be consumed after proper cooking.",
//     img: "https://via.placeholder.com/150",
//     age: "Adults",
//     calories: 70
//   },
//   {
//     name: "Mallard Egg",
//     category: "Egg",
//     desc: "Duck species egg.",
//     more: "Provides protein and minerals.\nRich in vitamin B12.\nUsed in cooking and baking.\nSupports immunity and energy.\nModerate calorie count.\nSuitable for adults and children.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 70
//   },
//   {
//     name: "Guinea Fowl Egg",
//     category: "Egg",
//     desc: "Small egg with delicate taste.",
//     more: "High in protein and essential minerals.\nContains vitamins B12 and D.\nUsed in gourmet cooking.\nLow calorie.\nSupports muscle and bone health.\nDelicate flavor enjoyed by many.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 35
//   },
//   {
//     name: "Hen Egg",
//     category: "Egg",
//     desc: "Common poultry egg.",
//     more: "Rich in protein and vitamins.\nSupports muscle growth.\nContains minerals like selenium.\nUsed in daily meals.\nModerate calorie count.\nSuitable for all ages.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 70
//   },
//   {
//     name: "Rooster Egg",
//     category: "Egg",
//     desc: "Rare male bird egg, mostly symbolic.",
//     more: "Used in folklore and culture.\nHigh in protein if consumed.\nContains vitamins B12, D, and A.\nRarely eaten in practice.\nLow to moderate calories.\nSupports immunity and energy.",
//     img: "https://via.placeholder.com/150",
//     age: "Adults",
//     calories: 68
//   },
//   {
//     name: "Silkie Egg",
//     category: "Egg",
//     desc: "Specialty chicken breed egg.",
//     more: "Rich in protein and nutrients.\nUsed in traditional recipes.\nSupports energy and muscle health.\nModerate calorie count.\nContains vitamins B12 and D.\nSuitable for adults.",
//     img: "https://via.placeholder.com/150",
//     age: "Adults",
//     calories: 65
//   },
//   {
//     name: "Bantam Egg",
//     category: "Egg",
//     desc: "Small egg from bantam chicken.",
//     more: "High in protein and vitamins.\nUsed in cooking and baking.\nLow calorie, nutrient-dense.\nSupports bone and muscle health.\nDelicate taste for gourmet dishes.\nSuitable for all ages.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 40
//   },
//   {
//     name: "Ameraucana Egg",
//     category: "Egg",
//     desc: "Blue/green shell chicken egg.",
//     more: "Provides protein and minerals.\nUsed in colorful cooking and baking.\nSupports immunity and energy.\nModerate calories.\nContains vitamins B12 and D.\nSuitable for all ages.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 68
//   },
//   {
//     name: "Leghorn Egg",
//     category: "Egg",
//     desc: "Popular white shell chicken egg.",
//     more: "Rich in protein and nutrients.\nSupports muscle and bone health.\nUsed in everyday cooking.\nModerate calorie count.\nContains vitamins B12 and D.\nSuitable for all ages.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 70
//   },
//   {
//     name: "Pekin Duck Egg",
//     category: "Egg",
//     desc: "Duck breed egg.",
//     more: "High in protein and minerals.\nRich in vitamins.\nUsed in cooking and baking.\nSupports energy and immunity.\nModerate calorie count.\nSuitable for adults.",
//     img: "https://via.placeholder.com/150",
//     age: "Adults",
//     calories: 130
//   },
// // ---------------- Oils (20) ----------------
//   {
//     name: "Olive Oil",
//     category: "Oil",
//     desc: "Heart-healthy cooking oil from olives.",
//     more: "Olive oil is rich in monounsaturated fats.\nContains antioxidants that reduce inflammation.\nSupports heart and brain health.\nUsed in salads, cooking, and dressings.\nPromotes healthy cholesterol levels.\nWidely used in Mediterranean cuisine.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 884
//   },
//   {
//     name: "Coconut Oil",
//     category: "Oil",
//     desc: "Oil extracted from coconut meat.",
//     more: "Coconut oil contains medium-chain triglycerides.\nProvides energy and supports metabolism.\nUsed in cooking, baking, and skin care.\nHas antibacterial and antifungal properties.\nAdds tropical flavor to dishes.\nShould be consumed in moderation.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 862
//   },
//   {
//     name: "Sunflower Oil",
//     category: "Oil",
//     desc: "Neutral cooking oil from sunflower seeds.",
//     more: "Sunflower oil is high in vitamin E.\nContains polyunsaturated fats for heart health.\nUsed in frying, baking, and salad dressings.\nSupports skin and immunity.\nLight flavor suitable for most dishes.\nModerate calorie content for energy.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 884
//   },
//   {
//     name: "Canola Oil",
//     category: "Oil",
//     desc: "Low-saturated fat oil from rapeseed.",
//     more: "Canola oil is heart-healthy.\nContains omega-3 and omega-6 fats.\nUsed in frying, baking, and salad dressings.\nNeutral flavor suitable for many dishes.\nSupports cholesterol management.\nWidely available and affordable.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 884
//   },
//   {
//     name: "Sesame Oil",
//     category: "Oil",
//     desc: "Aromatic oil from sesame seeds.",
//     more: "Sesame oil has antioxidants and healthy fats.\nUsed in Asian cuisines for flavor.\nSupports heart and skin health.\nUsed in stir-fry, dressings, and marinades.\nContains vitamin E and sesamol.\nModerate calorie content for energy.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 884
//   },
//   {
//     name: "Peanut Oil",
//     category: "Oil",
//     desc: "Oil from peanuts, high smoke point.",
//     more: "Peanut oil is rich in monounsaturated fats.\nUsed for frying, sautéing, and dressings.\nSupports heart and skin health.\nContains vitamin E and antioxidants.\nAdds a mild nutty flavor to food.\nModerate calorie content, energy-rich.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 884
//   },
//   {
//     name: "Avocado Oil",
//     category: "Oil",
//     desc: "Healthy oil from avocado fruit.",
//     more: "Avocado oil is rich in monounsaturated fats.\nSupports heart and skin health.\nUsed in cooking, salads, and dips.\nContains vitamin E and antioxidants.\nNeutral flavor suitable for many dishes.\nModerate calorie content, energy-rich.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 884
//   },
//   {
//     name: "Palm Oil",
//     category: "Oil",
//     desc: "Tropical oil from palm fruit.",
//     more: "Palm oil is high in saturated fats.\nUsed in cooking, frying, and processed foods.\nProvides energy and adds texture.\nContains vitamin E tocotrienols.\nWidely used in global food industry.\nModerate consumption recommended.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 884
//   },
//   {
//     name: "Grapeseed Oil",
//     category: "Oil",
//     desc: "Light oil from grape seeds.",
//     more: "Grapeseed oil contains polyunsaturated fats.\nRich in vitamin E and antioxidants.\nUsed in salad dressings and cooking.\nSupports heart and skin health.\nNeutral flavor suitable for many dishes.\nModerate calorie content for energy.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 884
//   },
//   {
//     name: "Flaxseed Oil",
//     category: "Oil",
//     desc: "Oil rich in omega-3 fatty acids.",
//     more: "Flaxseed oil supports heart and brain health.\nHigh in alpha-linolenic acid.\nUsed in dressings and smoothies.\nDo not heat excessively to preserve nutrients.\nContains antioxidants.\nModerate calorie content.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 884
//   },
//   {
//     name: "Walnut Oil",
//     category: "Oil",
//     desc: "Oil from walnuts with nutty flavor.",
//     more: "Walnut oil is rich in omega-3 fats.\nSupports heart and brain health.\nUsed in salads and finishing dishes.\nContains antioxidants and vitamin E.\nAdds flavor to gourmet recipes.\nModerate calorie content, energy-rich.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 884
//   },
//   {
//     name: "Almond Oil",
//     category: "Oil",
//     desc: "Oil from almonds with mild flavor.",
//     more: "Almond oil supports heart and skin health.\nRich in monounsaturated fats.\nUsed in cooking, baking, and skincare.\nContains vitamin E and antioxidants.\nLight nutty taste for various dishes.\nModerate calorie content.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 884
//   },
//   {
//     name: "Mustard Oil",
//     category: "Oil",
//     desc: "Pungent oil used in Indian cuisine.",
//     more: "Mustard oil has strong flavor and aroma.\nUsed for frying and pickling.\nContains monounsaturated fats.\nSupports heart and skin health.\nRich in antioxidants.\nModerate calorie content.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 884
//   },
//   {
//     name: "Hemp Oil",
//     category: "Oil",
//     desc: "Oil from hemp seeds rich in omega-3.",
//     more: "Hemp oil supports heart and brain health.\nRich in polyunsaturated fats.\nUsed in dressings and smoothies.\nContains vitamin E and antioxidants.\nDo not heat excessively.\nModerate calorie content.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 884
//   },
//   {
//     name: "Safflower Oil",
//     category: "Oil",
//     desc: "Neutral oil with high smoke point.",
//     more: "Safflower oil contains monounsaturated fats.\nUsed in frying, baking, and dressings.\nSupports heart and skin health.\nContains vitamin E.\nNeutral flavor suitable for many dishes.\nModerate calorie content.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 884
//   },
//   {
//     name: "Rice Bran Oil",
//     category: "Oil",
//     desc: "Oil extracted from rice bran.",
//     more: "Rice bran oil supports heart health.\nContains antioxidants and vitamin E.\nUsed for frying, baking, and dressings.\nMild flavor suitable for various dishes.\nContains polyunsaturated fats.\nModerate calorie content for energy.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 884
//   },
//   {
//     name: "Corn Oil",
//     category: "Oil",
//     desc: "Common cooking oil from corn germ.",
//     more: "Corn oil contains polyunsaturated fats.\nUsed for frying and baking.\nSupports heart health.\nContains vitamin E antioxidants.\nNeutral flavor for most dishes.\nModerate calorie content for energy.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 884
//   },
//   {
//     name: "Pumpkin Seed Oil",
//     category: "Oil",
//     desc: "Dark green oil from pumpkin seeds.",
//     more: "Pumpkin seed oil is rich in antioxidants.\nSupports heart and prostate health.\nUsed in dressings and finishing dishes.\nContains polyunsaturated fats.\nNutty flavor enhances gourmet recipes.\nModerate calorie content.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 884
//   },
//   {
//     name: "Grapeseed Oil",
//     category: "Oil",
//     desc: "Light oil from grape seeds.",
//     more: "Grapeseed oil contains polyunsaturated fats.\nRich in vitamin E and antioxidants.\nUsed in salad dressings and cooking.\nSupports heart and skin health.\nNeutral flavor suitable for many dishes.\nModerate calorie content for energy.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 884
//   },
//   {
//     name: "Macadamia Oil",
//     category: "Oil",
//     desc: "Premium oil from macadamia nuts.",
//     more: "Macadamia oil is rich in monounsaturated fats.\nSupports heart and skin health.\nUsed in cooking, baking, and dressings.\nContains antioxidants and vitamin E.\nMild flavor suitable for gourmet dishes.\nModerate calorie content.",
//     img: "https://via.placeholder.com/150",
//     age: "All Ages",
//     calories: 884
//   }
// ];
// const products = [
//   // ===== FRUITS (20) =====
//   {name:"Apple",category:"Fruit",desc:"Rich in fiber and vitamin C.",more:"Apples are loaded with dietary fiber that supports healthy digestion.\nThey contain vitamin C which strengthens the immune system.\nRegular consumption may help reduce the risk of chronic diseases.\nApples are low in calories, making them ideal for weight management.\nThey support heart health by lowering cholesterol.\nGreat as a snack, in salads, or juices.",img:"https://via.placeholder.com/150",age:"All Ages",calories:52},
//   {name:"Banana",category:"Fruit",desc:"High in potassium and energy.",more:"Bananas are an excellent source of potassium that helps regulate blood pressure.\nThey provide quick energy, making them great for athletes and kids.\nContain vitamin B6 which supports brain health.\nBananas aid digestion due to their fiber content.\nThey may help reduce muscle cramps and soreness.\nPerfect for smoothies, snacks, or breakfast bowls.",img: "https://via.placeholder.com/150",age:"All Ages",calories:89},
//   {name:"Orange",category:"Fruit",desc:"Vitamin C powerhouse.",more:"Oranges strengthen immunity and improve skin health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:47},
//   {name:"Mango",category:"Fruit",desc:"Rich in vitamins and antioxidants.",more:"Mangoes improve digestion and boost immunity.",img:"https://via.placeholder.com/150",age:"All Ages",calories:60},
//   {name:"Grapes",category:"Fruit",desc:"Packed with antioxidants.",more:"Grapes support heart health and boost energy.",img:"https://via.placeholder.com/150",age:"All Ages",calories:69},
//   {name:"Strawberry",category:"Fruit",desc:"High in vitamin C.",more:"Strawberries improve immunity and skin health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:32},
//   {name:"Pineapple",category:"Fruit",desc:"Tropical fruit with bromelain.",more:"Pineapple aids digestion and reduces inflammation.",img:"https://via.placeholder.com/150",age:"All Ages",calories:50},
//   {name:"Papaya",category:"Fruit",desc:"Rich in digestive enzymes.",more:"Papaya supports digestion and immunity.",img:"https://via.placeholder.com/150",age:"All Ages",calories:43},
//   {name:"Kiwi",category:"Fruit",desc:"Rich in vitamin C and fiber.",more:"Kiwi improves immunity and digestion.",img:"https://via.placeholder.com/150",age:"All Ages",calories:61},
//   {name:"Watermelon",category:"Fruit",desc:"Hydrating fruit.",more:"Watermelon supports hydration and heart health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:30},
//   {name:"Blueberry",category:"Fruit",desc:"Rich in antioxidants.",more:"Blueberries improve brain and heart health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:57},
//   {name:"Cherry",category:"Fruit",desc:"High in antioxidants.",more:"Cherries reduce inflammation and support sleep.",img:"https://via.placeholder.com/150",age:"All Ages",calories:50},
//   {name:"Peach",category:"Fruit",desc:"Rich in vitamins and fiber.",more:"Peaches improve digestion and skin health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:39},
//   {name:"Plum",category:"Fruit",desc:"High in antioxidants.",more:"Plums support heart health and digestion.",img:"https://via.placeholder.com/150",age:"All Ages",calories:46},
//   {name:"Pear",category:"Fruit",desc:"Rich in fiber.",more:"Pears improve digestion and heart health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:57},
//   {name:"Pomegranate",category:"Fruit",desc:"Rich in antioxidants.",more:"Pomegranates improve heart health and immunity.",img:"https://via.placeholder.com/150",age:"All Ages",calories:83},
//   {name:"Guava",category:"Fruit",desc:"Rich in vitamin C.",more:"Guava boosts immunity and aids digestion.",img:"https://via.placeholder.com/150",age:"All Ages",calories:68},
//   {name:"Lychee",category:"Fruit",desc:"Sweet tropical fruit.",more:"Lychee improves immunity and hydration.",img:"https://via.placeholder.com/150",age:"All Ages",calories:66},
//   {name:"Apricot",category:"Fruit",desc:"Rich in vitamins and fiber.",more:"Apricots improve digestion and skin health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:48},
//   {name:"Raspberry",category:"Fruit",desc:"High in fiber and antioxidants.",more:"Raspberries support heart health and immunity.",img:"https://via.placeholder.com/150",age:"All Ages",calories:52},

//   // ===== VEGETABLES (20) =====
//   {name:"Carrot",category:"Vegetable",desc:"Rich in beta-carotene.",more:"Carrots improve eye health and support immunity.",img:"https://via.placeholder.com/150",age:"All Ages",calories:41},
//   {name:"Spinach",category:"Vegetable",desc:"Leafy green rich in iron.",more:"Spinach strengthens bones and immunity.",img:"https://via.placeholder.com/150",age:"All Ages",calories:23},
//   {name:"Broccoli",category:"Vegetable",desc:"High in fiber and vitamins.",more:"Broccoli supports heart health and digestion.",img:"https://via.placeholder.com/150",age:"All Ages",calories:55},
//   {name:"Cauliflower",category:"Vegetable",desc:"Rich in vitamins.",more:"Cauliflower improves digestion and supports immunity.",img:"https://via.placeholder.com/150",age:"All Ages",calories:25},
//   {name:"Cabbage",category:"Vegetable",desc:"High in fiber.",more:"Cabbage improves digestion and heart health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:26},
//   {name:"Bell Pepper",category:"Vegetable",desc:"Rich in vitamin C.",more:"Bell peppers boost immunity and improve skin health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:31},
//   {name:"Tomato",category:"Vegetable",desc:"Good source of antioxidants.",more:"Tomatoes improve heart health and skin.",img:"https://via.placeholder.com/150",age:"All Ages",calories:18},
//   {name:"Onion",category:"Vegetable",desc:"Rich in antioxidants.",more:"Onions boost immunity and heart health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:40},
//   {name:"Garlic",category:"Vegetable",desc:"Supports immunity.",more:"Garlic has antimicrobial properties and supports heart health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:149},
//   {name:"Potato",category:"Vegetable",desc:"High in carbohydrates.",more:"Potatoes provide energy and support digestion.",img:"https://via.placeholder.com/150",age:"All Ages",calories:77},
//   {name:"Sweet Potato",category:"Vegetable",desc:"Rich in fiber and vitamins.",more:"Sweet potatoes improve digestion and immunity.",img:"https://via.placeholder.com/150",age:"All Ages",calories:86},
//   {name:"Pumpkin",category:"Vegetable",desc:"High in vitamin A.",more:"Pumpkin improves vision and supports immunity.",img:"https://via.placeholder.com/150",age:"All Ages",calories:26},
//   {name:"Lettuce",category:"Vegetable",desc:"Low calorie leafy green.",more:"Lettuce aids digestion and hydration.",img:"https://via.placeholder.com/150",age:"All Ages",calories:15},
//   {name:"Cucumber",category:"Vegetable",desc:"Hydrating vegetable.",more:"Cucumber improves hydration and digestion.",img:"https://via.placeholder.com/150",age:"All Ages",calories:16},
//   {name:"Radish",category:"Vegetable",desc:"Low calorie root.",more:"Radish improves digestion and detoxification.",img:"https://via.placeholder.com/150",age:"All Ages",calories:16},
//   {name:"Zucchini",category:"Vegetable",desc:"Rich in vitamins.",more:"Zucchini supports heart health and digestion.",img:"https://via.placeholder.com/150",age:"All Ages",calories:17},
//   {name:"Green Beans",category:"Vegetable",desc:"Rich in fiber.",more:"Green beans support digestion and heart health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:31},
//   {name:"Peas",category:"Vegetable",desc:"High in protein.",more:"Peas support muscles and digestion.",img:"https://via.placeholder.com/150",age:"All Ages",calories:81},
//   {name:"Eggplant",category:"Vegetable",desc:"Contains antioxidants.",more:"Eggplant improves heart health and immunity.",img:"https://via.placeholder.com/150",age:"All Ages",calories:25},
//   {name:"Kale",category:"Vegetable",desc:"Leafy green rich in vitamins.",more:"Kale supports bones, heart, and immunity.",img:"https://via.placeholder.com/150",age:"All Ages",calories:49},

//   // ===== GRAINS (20) =====
//   {name:"Rice",category:"Grain",desc:"Staple food rich in carbohydrates.",more:"Rice provides energy and supports digestion.",img:"https://via.placeholder.com/150",age:"All Ages",calories:130},
//   {name:"Wheat",category:"Grain",desc:"High in fiber.",more:"Wheat supports digestion and heart health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:340},
//   {name:"Barley",category:"Grain",desc:"Good source of fiber.",more:"Barley improves digestion and lowers cholesterol.",img:"https://via.placeholder.com/150",age:"All Ages",calories:354},
//   {name:"Oats",category:"Grain",desc:"Whole grain rich in fiber.",more:"Oats support heart health and digestion.",img:"https://via.placeholder.com/150",age:"All Ages",calories:389},
//   {name:"Quinoa",category:"Grain",desc:"High in protein and fiber.",more:"Quinoa supports muscles and digestion.",img:"https://via.placeholder.com/150",age:"All Ages",calories:120},
//   {name:"Corn",category:"Grain",desc:"Rich in carbohydrates.",more:"Corn provides energy and fiber.",img:"https://via.placeholder.com/150",age:"All Ages",calories:86},
//   {name:"Millet",category:"Grain",desc:"Gluten-free grain.",more:"Millet improves digestion and heart health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:119},
//   {name:"Rye",category:"Grain",desc:"High in fiber.",more:"Rye supports digestion and heart health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:335},
//   {name:"Sorghum",category:"Grain",desc:"Gluten-free grain.",more:"Sorghum aids digestion and energy.",img:"https://via.placeholder.com/150",age:"All Ages",calories:329},
//   {name:"Bulgur",category:"Grain",desc:"Rich in fiber.",more:"Bulgur supports digestion and heart health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:83},
//   {name:"Amaranth",category:"Grain",desc:"High in protein.",more:"Amaranth supports muscles and digestion.",img:"https://via.placeholder.com/150",age:"All Ages",calories:371},
//   {name:"Buckwheat",category:"Grain",desc:"Gluten-free seed grain.",more:"Buckwheat supports heart health and digestion.",img:"https://via.placeholder.com/150",age:"All Ages",calories:343},
//   {name:"Teff",category:"Grain",desc:"High in fiber.",more:"Teff improves digestion and energy.",img:"https://via.placeholder.com/150",age:"All Ages",calories:367},
//   {name:"Spelt",category:"Grain",desc:"Ancient grain.",more:"Spelt supports heart health and digestion.",img:"https://via.placeholder.com/150",age:"All Ages",calories:338},
//   {name:"Farro",category:"Grain",desc:"Whole grain.",more:"Farro improves digestion and energy.",img:"https://via.placeholder.com/150",age:"All Ages",calories:340},
//   {name:"Kamut",category:"Grain",desc:"Ancient wheat.",more:"Kamut supports digestion and heart health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:337},
//   {name:"Maize",category:"Grain",desc:"Rich in carbohydrates.",more:"Maize provides energy and fiber.",img:"https://via.placeholder.com/150",age:"All Ages",calories:86},
//   {name:"Fonio",category:"Grain",desc:"Small African grain.",more:"Fonio supports digestion and energy.",img:"https://via.placeholder.com/150",age:"All Ages",calories:360},
//   {name:"Ragi",category:"Grain",desc:"Finger millet.",more:"Ragi supports bone health and digestion.",img:"https://via.placeholder.com/150",age:"All Ages",calories:328},

//   // ===== LEGUMES (20) =====
//   {name:"Lentils",category:"Legume",desc:"High in protein and fiber.",more:"Lentils aid digestion and support heart health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:116},
//   {name:"Chickpeas",category:"Legume",desc:"Rich in protein.",more:"Chickpeas support muscles and heart health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:164},
//   {name:"Kidney Beans",category:"Legume",desc:"High in protein and fiber.",more:"Kidney beans support heart and digestive health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:127},
//   {name:"Black Beans",category:"Legume",desc:"Rich in protein and fiber.",more:"Black beans improve digestion and energy.",img:"https://via.placeholder.com/150",age:"All Ages",calories:132},
//   {name:"Soybeans",category:"Legume",desc:"High in protein.",more:"Soybeans support muscles and heart health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:446},
//   {name:"Mung Beans",category:"Legume",desc:"Rich in protein and fiber.",more:"Mung beans aid digestion and boost immunity.",img:"https://via.placeholder.com/150",age:"All Ages",calories:105},
//   {name:"Peas",category:"Legume",desc:"High in protein and fiber.",more:"Peas support muscles and heart health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:81},
//   {name:"Pigeon Peas",category:"Legume",desc:"High protein legume.",more:"Pigeon peas support digestion and energy.",img:"https://via.placeholder.com/150",age:"All Ages",calories:116},
//   {name:"Lima Beans",category:"Legume",desc:"Rich in protein and fiber.",more:"Lima beans aid digestion and support muscles.",img:"https://via.placeholder.com/150",age:"All Ages",calories:115},
//   {name:"Black-eyed Peas",category:"Legume",desc:"High in protein.",more:"Black-eyed peas improve heart health and digestion.",img:"https://via.placeholder.com/150",age:"All Ages",calories:116},
//   {name:"Adzuki Beans",category:"Legume",desc:"Rich in protein.",more:"Adzuki beans support digestion and immunity.",img:"https://via.placeholder.com/150",age:"All Ages",calories:128},
//   {name:"Navy Beans",category:"Legume",desc:"High in protein and fiber.",more:"Navy beans aid digestion and support heart health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:140},
//   {name:"Cannellini Beans",category:"Legume",desc:"Rich in protein.",more:"Cannellini beans support digestion and immunity.",img:"https://via.placeholder.com/150",age:"All Ages",calories:140},
//   {name:"Fava Beans",category:"Legume",desc:"High in protein and fiber.",more:"Fava beans improve muscles and heart health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:88},
//   {name:"Green Gram",category:"Legume",desc:"High in protein.",more:"Green gram aids digestion and energy.",img:"https://via.placeholder.com/150",age:"All Ages",calories:105},
//   {name:"Broad Beans",category:"Legume",desc:"Rich in protein.",more:"Broad beans support heart health and muscles.",img:"https://via.placeholder.com/150",age:"All Ages",calories:341},
//   {name:"Split Peas",category:"Legume",desc:"High in protein and fiber.",more:"Split peas improve digestion and energy.",img:"https://via.placeholder.com/150",age:"All Ages",calories:118},
//   {name:"Lupins",category:"Legume",desc:"High in protein.",more:"Lupins support muscles and digestion.",img:"https://via.placeholder.com/150",age:"All Ages",calories:371},
//   {name:"Soy Nuts",category:"Legume",desc:"Protein-rich snack.",more:"Soy nuts boost muscles and immunity.",img:"https://via.placeholder.com/150",age:"All Ages",calories:450},

//   // ===== NUTS (20) =====
//   {name:"Almonds",category:"Nut",desc:"High in healthy fats.",more:"Almonds support heart and brain health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:579},
//   {name:"Walnuts",category:"Nut",desc:"Rich in omega-3 fats.",more:"Walnuts support brain health and immunity.",img:"https://via.placeholder.com/150",age:"All Ages",calories:654},
//   {name:"Cashews",category:"Nut",desc:"Rich in healthy fats.",more:"Cashews boost heart and brain health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:553},
//   {name:"Pistachios",category:"Nut",desc:"High in protein.",more:"Pistachios support heart and weight management.",img:"https://via.placeholder.com/150",age:"All Ages",calories:562},
//   {name:"Hazelnuts",category:"Nut",desc:"Rich in vitamins and minerals.",more:"Hazelnuts improve heart and brain health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:628},
//   {name:"Macadamia",category:"Nut",desc:"High in fats.",more:"Macadamia supports heart health and energy.",img:"https://via.placeholder.com/150",age:"All Ages",calories:718},
//   {name:"Brazil Nuts",category:"Nut",desc:"Rich in selenium.",more:"Brazil nuts improve immunity and heart health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:659},
//   {name:"Pecans",category:"Nut",desc:"High in antioxidants.",more:"Pecans support heart and brain health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:691},
//   {name:"Chestnuts",category:"Nut",desc:"Low in fat.",more:"Chestnuts support digestion and energy.",img:"https://via.placeholder.com/150",age:"All Ages",calories:213},
//   {name:"Pine Nuts",category:"Nut",desc:"Rich in healthy fats.",more:"Pine nuts improve heart and brain health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:673},
//   {name:"Peanuts",category:"Nut",desc:"High in protein.",more:"Peanuts boost muscles and heart health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:567},
//   {name:"Coconut",category:"Nut",desc:"Rich in healthy fats.",more:"Coconut improves heart and digestion.",img:"https://via.placeholder.com/150",age:"All Ages",calories:354},
//   {name:"Marcona Almonds",category:"Nut",desc:"Spanish variety.",more:"Marcona almonds support heart health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:575},
//   {name:"Tiger Nuts",category:"Nut",desc:"Sweet tuber.",more:"Tiger nuts support digestion and energy.",img:"https://via.placeholder.com/150",age:"All Ages",calories:496},
//   {name:"Ginkgo Nuts",category:"Nut",desc:"Rich in antioxidants.",more:"Ginkgo nuts support brain and heart health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:182},
//   {name:"Kola Nuts",category:"Nut",desc:"Used as stimulant.",more:"Kola nuts boost energy and alertness.",img:"https://via.placeholder.com/150",age:"All Ages",calories:97},
//   {name:"Sacha Inchi",category:"Nut",desc:"Rich in omega-3.",more:"Sacha inchi supports heart and brain.",img:"https://via.placeholder.com/150",age:"All Ages",calories:446},
//   {name:"Beechnuts",category:"Nut",desc:"High in fat.",more:"Beechnuts boost energy and heart health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:650},
//   {name:"Candlenuts",category:"Nut",desc:"High in fat.",more:"Candlenuts support heart and energy.",img:"https://via.placeholder.com/150",age:"All Ages",calories:700},
//   {name:"Pili Nuts",category:"Nut",desc:"Rich in fats.",more:"Pili nuts boost energy and immunity.",img:"https://via.placeholder.com/150",age:"All Ages",calories:719},

//   // ===== DAIRY (20) =====
//   {name:"Milk",category:"Dairy",desc:"Rich in calcium.",more:"Milk strengthens bones and teeth.",img:"https://via.placeholder.com/150",age:"All Ages",calories:42},
//   {name:"Cheese",category:"Dairy",desc:"High in protein.",more:"Cheese supports bone and muscle health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:402},
//   {name:"Yogurt",category:"Dairy",desc:"Probiotic-rich.",more:"Yogurt improves digestion and immunity.",img:"https://via.placeholder.com/150",age:"All Ages",calories:59},
//   {name:"Butter",category:"Dairy",desc:"Rich in fats.",more:"Butter provides energy and fat-soluble vitamins.",img:"https://via.placeholder.com/150",age:"All Ages",calories:717},
//   {name:"Cream",category:"Dairy",desc:"High in fat.",more:"Cream adds flavor and energy.",img:"https://via.placeholder.com/150",age:"All Ages",calories:340},
//   {name:"Paneer",category:"Dairy",desc:"High in protein.",more:"Paneer supports muscles and bones.",img:"https://via.placeholder.com/150",age:"All Ages",calories:265},
//   {name:"Kefir",category:"Dairy",desc:"Fermented milk.",more:"Kefir improves digestion and immunity.",img:"https://via.placeholder.com/150",age:"All Ages",calories:41},
//   {name:"Ghee",category:"Dairy",desc:"Clarified butter.",more:"Ghee supports energy and fat-soluble vitamin absorption.",img:"https://via.placeholder.com/150",age:"All Ages",calories:900},
//   {name:"Condensed Milk",category:"Dairy",desc:"Sweet milk.",more:"Condensed milk provides energy and sweetness.",img:"https://via.placeholder.com/150",age:"All Ages",calories:321},
//   {name:"Evaporated Milk",category:"Dairy",desc:"Concentrated milk.",more:"Evaporated milk provides calcium and protein.",img:"https://via.placeholder.com/150",age:"All Ages",calories:134},
//   {name:"Sour Cream",category:"Dairy",desc:"Tangy flavor.",more:"Sour cream adds taste and calcium.",img:"https://via.placeholder.com/150",age:"All Ages",calories:193},
//   {name:"Ricotta",category:"Dairy",desc:"Soft cheese.",more:"Ricotta supports muscles and bones.",img:"https://via.placeholder.com/150",age:"All Ages",calories:174},
//   {name:"Mozzarella",category:"Dairy",desc:"Soft cheese.",more:"Mozzarella supports calcium and protein.",img:"https://via.placeholder.com/150",age:"All Ages",calories:280},
//   {name:"Swiss Cheese",category:"Dairy",desc:"Hard cheese.",more:"Swiss cheese supports bones and muscles.",img:"https://via.placeholder.com/150",age:"All Ages",calories:380},
//   {name:"Cheddar",category:"Dairy",desc:"Hard cheese.",more:"Cheddar improves bones and energy.",img:"https://via.placeholder.com/150",age:"All Ages",calories:403},
//   {name:"Feta",category:"Dairy",desc:"Soft cheese.",more:"Feta improves heart and bone health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:264},
//   {name:"Goat Cheese",category:"Dairy",desc:"Soft cheese.",more:"Goat cheese supports bones and digestion.",img:"https://via.placeholder.com/150",age:"All Ages",calories:364},
//   {name:"Blue Cheese",category:"Dairy",desc:"Strong-flavored cheese.",more:"Blue cheese improves calcium intake.",img:"https://via.placeholder.com/150",age:"All Ages",calories:353},
//   {name:"Provolone",category:"Dairy",desc:"Semi-hard cheese.",more:"Provolone supports bones and muscles.",img:"https://via.placeholder.com/150",age:"All Ages",calories:351},

//   // ===== MEAT (20) =====
//   {name:"Chicken",category:"Meat",desc:"Rich in protein.",more:"Chicken supports muscles and energy.",img:"https://via.placeholder.com/150",age:"All Ages",calories:239},
//   {name:"Beef",category:"Meat",desc:"High in protein and iron.",more:"Beef supports muscles and energy.",img:"https://via.placeholder.com/150",age:"All Ages",calories:250},
//   {name:"Lamb",category:"Meat",desc:"Rich in protein.",more:"Lamb supports muscles and heart health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:294},
//   {name:"Pork",category:"Meat",desc:"High in protein.",more:"Pork improves energy and muscles.",img:"https://via.placeholder.com/150",age:"All Ages",calories:242},
//   {name:"Turkey",category:"Meat",desc:"Lean protein source.",more:"Turkey supports muscles and immunity.",img:"https://via.placeholder.com/150",age:"All Ages",calories:189},
//   {name:"Duck",category:"Meat",desc:"Rich in protein and fat.",more:"Duck supports muscles and energy.",img:"https://via.placeholder.com/150",age:"All Ages",calories:337},
//   {name:"Goat",category:"Meat",desc:"High protein meat.",more:"Goat supports muscles and energy.",img:"https://via.placeholder.com/150",age:"All Ages",calories:122},
//   {name:"Venison",category:"Meat",desc:"Lean red meat.",more:"Venison supports muscles and heart health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:158},
//   {name:"Rabbit",category:"Meat",desc:"Lean protein.",more:"Rabbit supports muscles and digestion.",img:"https://via.placeholder.com/150",age:"All Ages",calories:173},
//   {name:"Bison",category:"Meat",desc:"High protein meat.",more:"Bison supports muscles and energy.",img:"https://via.placeholder.com/150",age:"All Ages",calories:143},
//   {name:"Sausage",category:"Meat",desc:"Processed meat.",more:"Sausage provides protein and energy.",img:"https://via.placeholder.com/150",age:"All Ages",calories:301},
//   {name:"Bacon",category:"Meat",desc:"Processed pork.",more:"Bacon provides protein and fat.",img:"https://via.placeholder.com/150",age:"All Ages",calories:541},
//   {name:"Ham",category:"Meat",desc:"Cured meat.",more:"Ham provides protein and energy.",img:"https://via.placeholder.com/150",age:"All Ages",calories:145},
//   {name:"Salami",category:"Meat",desc:"Cured meat.",more:"Salami supports energy and protein.",img:"https://via.placeholder.com/150",age:"All Ages",calories:336},
//   {name:"Prosciutto",category:"Meat",desc:"Cured Italian ham.",more:"Prosciutto supports protein intake.",img:"https://via.placeholder.com/150",age:"All Ages",calories:158},
//   {name:"Chorizo",category:"Meat",desc:"Spicy cured meat.",more:"Chorizo boosts protein and energy.",img:"https://via.placeholder.com/150",age:"All Ages",calories:455},
//   {name:"Liver",category:"Meat",desc:"Rich in iron.",more:"Liver supports blood and immunity.",img:"https://via.placeholder.com/150",age:"All Ages",calories:135},
//   {name:"Kidney",category:"Meat",desc:"Rich in protein.",more:"Kidney supports muscles and energy.",img:"https://via.placeholder.com/150",age:"All Ages",calories:103},
//   {name:"Tongue",category:"Meat",desc:"High protein meat.",more:"Tongue supports muscles and energy.",img:"https://via.placeholder.com/150",age:"All Ages",calories:284},
//   {name:"Heart",category:"Meat",desc:"Rich in protein and iron.",more:"Heart supports muscles and blood health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:112},

//   // ===== EGGS (20) =====
//   {name:"Chicken Egg",category:"Egg",desc:"High in protein.",more:"Eggs support muscles and brain health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:155},
//   {name:"Duck Egg",category:"Egg",desc:"Rich in protein and fat.",more:"Duck eggs support energy and brain health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:185},
//   {name:"Quail Egg",category:"Egg",desc:"Small protein-rich egg.",more:"Quail eggs support immunity and muscles.",img:"https://via.placeholder.com/150",age:"All Ages",calories:158},
//   {name:"Goose Egg",category:"Egg",desc:"Large protein-rich egg.",more:"Goose eggs support muscles and energy.",img:"https://via.placeholder.com/150",age:"All Ages",calories:185},
//   {name:"Turkey Egg",category:"Egg",desc:"High in protein.",more:"Turkey eggs improve muscles and energy.",img:"https://via.placeholder.com/150",age:"All Ages",calories:155},
//   {name:"Ostrich Egg",category:"Egg",desc:"Very large egg.",more:"Ostrich eggs support energy and protein.",img:"https://via.placeholder.com/150",age:"All Ages",calories:155},
//   {name:"Emu Egg",category:"Egg",desc:"Large egg rich in protein.",more:"Emu eggs improve muscles and energy.",img:"https://via.placeholder.com/150",age:"All Ages",calories:155},
//   {name:"Pheasant Egg",category:"Egg",desc:"Small protein-rich egg.",more:"Pheasant eggs support muscles and immunity.",img:"https://via.placeholder.com/150",age:"All Ages",calories:155},
//   {name:"Goose Bantam Egg",category:"Egg",desc:"Tiny egg.",more:"Supports muscles and immunity.",img:"https://via.placeholder.com/150",age:"All Ages",calories:150},
//   {name:"Duck Bantam Egg",category:"Egg",desc:"Small protein-rich egg.",more:"Supports muscles and immunity.",img:"https://via.placeholder.com/150",age:"All Ages",calories:150},
//   {name:"Silkie Chicken Egg",category:"Egg",desc:"Small egg.",more:"Supports energy and muscles.",img:"https://via.placeholder.com/150",age:"All Ages",calories:150},
//   {name:"Arowana Egg",category:"Egg",desc:"Fish egg.",more:"Rich in protein and omega-3.",img:"https://via.placeholder.com/150",age:"All Ages",calories:140},
//   {name:"Caviar",category:"Egg",desc:"Fish eggs.",more:"Supports brain and heart health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:264},
//   {name:"Trout Egg",category:"Egg",desc:"Rich in protein.",more:"Supports muscles and brain health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:143},
//   {name:"Salmon Egg",category:"Egg",desc:"Rich in omega-3.",more:"Supports heart and brain health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:156},
//   {name:"Sturgeon Egg",category:"Egg",desc:"Protein-rich caviar.",more:"Supports muscles and brain.",img:"https://via.placeholder.com/150",age:"All Ages",calories:250},
//   {name:"Flying Fish Egg",category:"Egg",desc:"Rich in omega-3.",more:"Supports heart and brain.",img:"https://via.placeholder.com/150",age:"All Ages",calories:150},
//   {name:"Roe",category:"Egg",desc:"Fish eggs.",more:"Supports heart and brain.",img:"https://via.placeholder.com/150",age:"All Ages",calories:200},
//   {name:"Lumpfish Egg",category:"Egg",desc:"Small caviar.",more:"Supports heart and muscles.",img:"https://via.placeholder.com/150",age:"All Ages",calories:150},
//   {name:"Capelin Egg",category:"Egg",desc:"Rich in protein.",more:"Supports muscles and heart.",img:"https://via.placeholder.com/150",age:"All Ages",calories:140},

//   // ===== OILS (20) =====
//   {name:"Olive Oil",category:"Oil",desc:"Healthy oil from olives.",more:"Olive oil supports heart health and skin.",img:"https://via.placeholder.com/150",age:"All Ages",calories:884},
//   {name:"Coconut Oil",category:"Oil",desc:"Used in cooking and baking.",more:"Coconut oil supports heart and energy.",img:"https://via.placeholder.com/150",age:"All Ages",calories:862},
//   {name:"Sunflower Oil",category:"Oil",desc:"Rich in vitamin E.",more:"Sunflower oil supports heart and skin.",img:"https://via.placeholder.com/150",age:"All Ages",calories:884},
//   {name:"Canola Oil",category:"Oil",desc:"Low saturated fat.",more:"Canola oil supports heart health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:884},
//   {name:"Sesame Oil",category:"Oil",desc:"Rich in antioxidants.",more:"Sesame oil supports heart and skin health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:884},
//   {name:"Peanut Oil",category:"Oil",desc:"High smoke point.",more:"Peanut oil supports heart and energy.",img:"https://via.placeholder.com/150",age:"All Ages",calories:884},
//   {name:"Avocado Oil",category:"Oil",desc:"Rich in healthy fats.",more:"Avocado oil supports heart and brain.",img:"https://via.placeholder.com/150",age:"All Ages",calories:884},
//   {name:"Flaxseed Oil",category:"Oil",desc:"High in omega-3.",more:"Flaxseed oil supports heart and brain health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:884},
//   {name:"Grapeseed Oil",category:"Oil",desc:"Rich in antioxidants.",more:"Grapeseed oil supports heart and skin.",img:"https://via.placeholder.com/150",age:"All Ages",calories:884},
//   {name:"Walnut Oil",category:"Oil",desc:"Rich in omega-3.",more:"Walnut oil supports brain and heart health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:884},
//   {name:"Almond Oil",category:"Oil",desc:"Rich in vitamin E.",more:"Almond oil supports skin and heart health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:884},
//   {name:"Pumpkin Seed Oil",category:"Oil",desc:"Rich in antioxidants.",more:"Supports heart and prostate health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:884},
//   {name:"Hemp Oil",category:"Oil",desc:"Rich in omega-3 and 6.",more:"Supports brain and heart health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:884},
//   {name:"Safflower Oil",category:"Oil",desc:"Low saturated fat.",more:"Supports heart and skin.",img:"https://via.placeholder.com/150",age:"All Ages",calories:884},
//   {name:"Rice Bran Oil",category:"Oil",desc:"Rich in antioxidants.",more:"Supports heart and brain health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:884},
//   {name:"Mustard Oil",category:"Oil",desc:"Used in cooking.",more:"Supports heart and immunity.",img:"https://via.placeholder.com/150",age:"All Ages",calories:884},
//   {name:"Palm Oil",category:"Oil",desc:"High smoke point.",more:"Supports energy and cooking needs.",img:"https://via.placeholder.com/150",age:"All Ages",calories:884},
//   {name:"Corn Oil",category:"Oil",desc:"Rich in polyunsaturated fat.",more:"Supports heart health and energy.",img:"https://via.placeholder.com/150",age:"All Ages",calories:884},
//   {name:"Soybean Oil",category:"Oil",desc:"High in omega-6.",more:"Supports heart and energy.",img:"https://via.placeholder.com/150",age:"All Ages",calories:884},
//   {name:"Camelina Oil",category:"Oil",desc:"Rich in omega-3.",more:"Supports heart and brain health.",img:"https://via.placeholder.com/150",age:"All Ages",calories:884}
// ];


// // Populate category filter
// const categoryFilter = document.getElementById("categoryFilter");
// const categories = [...new Set(products.map(p => p.category))];
// categories.forEach(cat => {
//   const option = document.createElement("option");
//   option.value = cat;
//   option.textContent = cat;
//   categoryFilter.appendChild(option);
// });

// const grid = document.getElementById("foodGrid");
// const searchInput = document.getElementById("search");
// const ageFilter = document.getElementById("ageFilter");

// // Modal elements
// const modal = document.getElementById("myModal");
// const modalImg = document.getElementById("modalImg");
// const modalTitle = document.getElementById("modalTitle");
// const modalDesc = document.getElementById("modalDesc");
// const modalExtra = document.getElementById("modalExtra");
// const closeBtn = document.querySelector(".close");

// // Render products
// function renderProducts(list) {
//   grid.innerHTML = "";
//   if (list.length === 0) {
//     grid.innerHTML = "<p style='grid-column: 1/-1; text-align:center;color:#777;'>No products found.</p>";
//     return;
//   }
//   list.forEach(p => {
//     const card = document.createElement("div");
//     card.className = "card";
//     card.innerHTML = `
//       <img src="${p.img}" alt="${p.name}" class="card-img">
//       <h3>${p.name}</h3>
//       <p>${p.desc}</p>
//     `;
//     card.querySelector(".card-img").addEventListener("click", () => {
//       modal.style.display = "block";
//       modalImg.src = p.img;
//       modalTitle.textContent = p.name;
//       modalDesc.textContent = p.more || p.desc;
//       modalExtra.textContent = `Category: ${p.category} | Age Group: ${p.age} | Calories: ${p.calories}`;
//     });
//     grid.appendChild(card);
//   });
// }

// // Filters
// function applyFilters() {
//   const searchValue = searchInput.value.toLowerCase();
//   const selectedCategory = categoryFilter.value;
//   const selectedAge = ageFilter.value;

//   const filtered = products.filter(p => {
//     const matchesSearch = p.name.toLowerCase().includes(searchValue) || p.desc.toLowerCase().includes(searchValue);
//     const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
//     const matchesAge = selectedAge === "all" || p.age === selectedAge || p.age === "All Ages";
//     return matchesSearch && matchesCategory && matchesAge;
//   });
//   renderProducts(filtered);
// }

// searchInput.addEventListener("input", applyFilters);
// categoryFilter.addEventListener("change", applyFilters);
// ageFilter.addEventListener("change", applyFilters);

// // Initial render
// renderProducts(products);

// // Modal close
// closeBtn.addEventListener("click", () => modal.style.display = "none");
// window.addEventListener("click", e => { if (e.target === modal) modal.style.display = "none"; });