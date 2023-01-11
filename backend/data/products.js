const products = [
    {
        name: 'Echo Dot (Black) Combo with Wipro 9W Smart Color Bulb - Smart Home Starter Kit',
        image: '/images/echo_dot.jpg',
        description:
            'Music Sync Function: Let your light dance by changing colours with the rhythm of your favourite music. Control from anywhere: Forgot to turn off your lights? Now control lights from anywhere in the World with Wipro Smart Home App.',
        brand: 'Amazon',
        category: 'Electronics',
        price: 200.99,
        countInStock: 15,
        rating: 4.5,
        numReviews: 12,
        display: 'home'
    },
    {
        name: 'Boult Audio Newly Launched Z25 with 32H Playtime, 45ms Low Latency, Type-C Fast Charging',
        image: '/images/boult-audio.jpg',
        description:
            '32 hours of total playtime – Mammoth battery power makes the Z25 earbuds stop at nothing. 10 mins charge = 150 mins playtime. Lightning Boult Type-C fast charging makes this possible, getting your buds ready in no time.',
        brand: 'Boult Audio',
        category: 'Electronics',
        price: 20.99,
        countInStock: 20,
        rating: 4.5,
        numReviews: 12,
        display: 'home'
    },
    {
        name: 'Home Centre Montoya Compressed Wood 4-Seater Dining Set with Two Chairs and One Bench - Brown',
        image: '/images/dining-table.jpg',
        description:
            'Product Dimensions: Length (120 cm), Width (75 cm), Height (75 cm) ; Wood Type: Rubber Wood ; Primary Material: Compressed Wood Primary Material: Rubber wood, Upholstery Material: Polyester, Top Material: Wood',
        brand: 'Home Centre',
        category: 'Furniture',
        price: 29.99,
        countInStock: 0,
        rating: 4,
        numReviews: 12,
        display: 'home'
    },
    {
        name: 'Sony WH-CH510 Bluetooth Wireless On Ear Headphones with Mic (Black)',
        image: '/images/sony-headphone.jpg',
        description:
            'Bluetooth wireless technology for unrestricted movement Compact and lightweight, swivel ear cups allow easy portability.',
        brand: 'Sony',
        category: 'Electronics',
        price: 599.99,
        countInStock: 10,
        rating: 4.0,
        numReviews: 8,
        display: 'home'
    },
    {
        name: 'TP-Link Deco M4 Whole Home Mesh Wi-Fi System',
        image: '/images/tplink-wifi.jpg',
        description:
            'Deco M4 uses TP-Link Mesh technology to cover your entire home in powerful Wi-Fi, Multiple units seamlessly work together to create a home network like nothing you’ve ever experiencedDeco M4 uses TP-Link Mesh technology to cover your entire home in powerful Wi-Fi, Multiple units seamlessly work together to create a home network like nothing you’ve ever experience.',
        brand: 'TP-Link',
        category: 'Electronics',
        price: 929.99,
        countInStock: 5,
        rating: 3,
        numReviews: 12,
        display: 'home'
    },
    {
        name: 'Parker Moments Vector Timecheck Gold Trim Roller Ball Pen (Black)',
        image: '/images/parker-pen.jpg',
        description:
            'Mode: Roller ball pen, Pen opening mechanism: Cap off/cap on, Ink color: Blue, warranty: 2 years, Country of Origin: India',
        brand: 'Parker',
        category: 'Stationery',
        price: 399.99,
        countInStock: 11,
        rating: 5,
        numReviews: 12,
        display: 'home'
    },
    {
        name: 'COSMIX - My Happy Gut | For Improved Digestion, Bloating & Overall Gut Health',
        image: '/images/cosmix-healthy-gut.jpg',
        description:
            'COSMIX - My Happy Gut | For Improved Digestion, Bloating & Overall Gut Health | Natural, Plant-based Superfood Blend | 60 g Powder- Makes upto 40 servings | No Preservatives/Added Sugar |',
        brand: 'Cosmix',
        category: 'Health & Personal Care',
        price: 49.99,
        countInStock: 7,
        rating: 3.5,
        numReviews: 10,
        display: 'home'
    },
    {
        name: 'Lenovo IdeaPad Slim 3 Intel Core i3-1115G4 11th Gen 15.6" (39.62cm) FHD Laptop',
        image: '/images/lenovo-laptop.jpg',
        description:
            'Lenovo IdeaPad Slim 3 Intel Core i3-1115G4 11th Gen 15.6" (39.62cm) FHD Laptop (8GB/256GB SSD/Win 11/Office 2021/2 Year Warranty/3 Month Game Pass/Platinum Grey/1.7Kg), 81X800LCIN. Processor: 11th Gen Intel Core i3-1115G4 | Speed: 3.0 GHz (Base) - 4.1 GHz (Max) | 2 Cores | 4 Threads | 6MB Cache',
        brand: 'Lenovo',
        category: 'Electronics',
        price: 29.99,
        countInStock: 10,
        rating: 4,
        numReviews: 12,
        display: 'home'
    },
    {
        name: 'Kuber Industries Multipurpose Solitaire Storage Basket with Lid',
        image: '/images/basket.jpg',
        description:
            'Kuber Industries Multipurpose Solitaire Storage Basket with Lid|Strong Plastic Material & Side Grip|Size Small 25 x 19 x 10.5,Pack of 3. For organizing bathroom countertop, playroom, kitchen cabinet, pantry or any space in your home, office or garden. Great for storing small items and different little knick-knacks',
        brand: 'Kuber Industries',
        category: 'Home & Kitchen',
        price: 29.99,
        countInStock: 12,
        rating: 4,
        numReviews: 12,
        display: 'home'
    },
    {
        name: 'Samsung Galaxy A04e Copper, 4GB RAM, 128GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35 | 5000 mAh Battery',
        image: '/images/samsung-mobile.jpg',
        description:
            'A large 6.5″ HD+ display (720 X 1600) with a 20:9 aspect ratio for cinematic viewing Android 12 One UI Core 4.1 (Octa Core 2.3GHz ) octa core processor',
        brand: 'Samsung',
        category: 'Electronics',
        price: 29.99,
        countInStock: 0,
        rating: 4,
        numReviews: 12,
        display: 'home'
    },
    {
        name: "Rebee Vision Key and Mail Holder for Wall",
        image: "/images/key_holder.jpg",
        description: "Rebee Vision Key and Mail Holder for Wall: Key Hanger for Wall with Shelf Wood Wall Shelf with Hooks - 5 Hooks for Wall Decorative Retro Hanging Organizer Rustic Farmhouse Decor for Entryway - White.",
        brand: "Rebee vision",
        category: "Home accessories",
        price: 12.98,
        countInStock: 18,
        rating: 3.4,
        numReviews: 17,
        display: 'home_essentials'
    },
    {
        name: "LEVOIT Air Purifiers for Bedroom Home",
        image: "/images/air-purifier.jpg",
        description: "LEVOIT Air Purifiers for Bedroom Home, HEPA Filter Cleaner with Fragrance Sponge for Better Sleep, Filters Smoke, Allergies, Pet Dander, Odor, Dust, Office, Desktop, Portable, Core Mini, White.",
        brand: "LEVOIT",
        category: "Home accessories",
        price: "49",
        countInStock: "10",
        rating: "3.5",
        numReviews: "25",
        display: 'home_essentials'
    },
    {
        name: "Moforoco Shower Caddy Shelf Organizer Rack(2Pack)",
        image: "/images/shelf.jpg",
        description: "Moforoco Shower Caddy Shelf Organizer Rack(2Pack), Self Adhesive Black Bathroom Shelves Basket, Home Wall Shower Inside Organization and Storage Decor Rv Accessories, First Apartment Essentials",
        brand: "Moforoco",
        category: "Home accessories",
        price: "19",
        countInStock: "10",
        rating: "3.5",
        numReviews: "25",
        display: 'home_essentials'
    },
    {
        name: "Vetacsion 4 Pack Moveable Fridge Magnetic Spice Racks,Metal Black",
        image: "/images/fridge_rack.jpg",
        description: "Sturdy metal,painting finish,rust-proof,corrosion-resistant. No drilling or assembly required. Super strong magnet on the back. Adsorbable on other metal surface",
        brand: "Vetacsion",
        category: "Home accessories",
        price: "37",
        countInStock: "7",
        rating: "3.9",
        numReviews: "5",
        display: 'home_essentials'
    },
    {
        name: "Valentines Tiered Tray Decor(Tray Not Included)",
        image: "/images/tray_decor.jpg",
        description: "Valentines Tiered Tray Decor(Tray Not Included)-Interchangeable Seasonal Rustic Farmhouse Valentines/St. Patrick’s Day/Easter Decor with 3 Wooden Frames&9 Cards,Valentines Centerpiece for Home Kitchen",
        brand: "Lairyan",
        category: "Home accessories",
        price: "25.99",
        countInStock: "10",
        rating: "4.2",
        numReviews: "16",
        display: 'home_essentials'
    },
    {
        name: "HERJOY Dish Drying Rack, Detachable 2 Tier Dish Rack and Drainboard Set",
        image: "/images/dish_dry_rack.jpg",
        description: "HERJOY Dish Drying Rack, Detachable 2 Tier Dish Rack and Drainboard Set, Large Capacity Dish Drainer Organizer Shelf with Utensil Holder, Cup Rack for Kitchen Counter, Black",
        brand: "HERJOY",
        category: "Home accessories",
        price: "35.99",
        countInStock: "14",
        rating: "4.3",
        numReviews: "100",
        display: 'home_essentials'
    },
    {
        name: "LAKMÉ Absolute Perfect Radiance Cream Skin Brightening Day Crème, 50g",
        image: "/images/lakme_absolute.jpg",
        description: "Moisturizes and nourishes. Provides sun protection. Dermatologist Tested : Yes. Gives radiant glowing skin. Gives a fairer and illuminated look.",
        brand: "Lakme",
        category: "Beauty products",
        price: "72.99",
        countInStock: "10",
        rating: "4.7",
        numReviews: "120",
        display: 'beauty_products'
    },
    {
        name: "LAKMÉ 9 To 5 Vitamin C+ Serum (15 ml)",
        image: "/images/lakme_serum.jpg",
        description: "Moisturizes and nourishes. Provides sun protection. Dermatologist Tested : Yes. Gives radiant glowing skin. Gives a fairer and illuminated look.",
        brand: "Lakme",
        category: "Beauty products",
        price: "72.99",
        countInStock: "10",
        rating: "4.7",
        numReviews: "120",
        display: 'beauty_products'
    },
    {
        name: "Lotus Organics+ Divine Restorative Night Cream | Macadamia Nut Oil | 100% Organic | 50g",
        image: "/images/lotus_cream.jpg",
        description: "GOODNESS OF 100% CERTIFIED ORGANIC MACADAMIA NUT OIL: Crafted with 100% certified organic Macadamia Nut Oil, which smoothly dissolves and replenishes skin with lost nutrients.",
        brand: "Lotus Organics",
        category: "Beauty products",
        price: "55",
        countInStock: "15",
        rating: "4.8",
        numReviews: "90",
        display: 'beauty_products'
    },
    {
        name: "Olay Total Effects Day Cream with Vitamin B5, Niacinamide, Green Tea.",
        image: "/images/olay_red_cream.jpg",
        description: "Skin Type: Oily Skin, Dry Skin, Combination Skin. Daily, all-in-one face moisturizer for Women with SPF 15. Fights 7 signs of aging for younger-looking skin.",
        brand: "Olay",
        category: "Beauty products",
        price: "55",
        countInStock: "12",
        rating: "3.7",
        numReviews: "95",
        display: 'beauty_products'
    },
    {
        name: "The Face Shop Pomegranate and Collagen Volume Lifting Cream.",
        image: "/images/face_shop_collagen.jpg",
        description: "The Face Shop Pomegranate and Collagen Volume Lifting Cream with Pomegranate Extracts to nourish & brighten skin |Face cream for Anti-Ageing, Bright & firm Skin |Korean skin care product Suitable for all skin types, 100ml.",
        brand: "The Face Shop",
        category: "Beauty products",
        price: "65",
        countInStock: "20",
        rating: "3.5",
        numReviews: "130",
        display: 'beauty_products'
    },
    {
        name: "boAt Bassheads 100 in Ear Wired Earphones with Mic(Taffy Pink)",
        image: "/images/boat_headphones.jpg",
        description: "The perfect way to add some style and stand out from the crowd with the boAt BassHeads 100 'Hawk' inspired earphones",
        brand: "boAt",
        category: "Headphone products",
        price: "76",
        countInStock: "16",
        rating: "4.5",
        numReviews: "250",
        display: 'headphone_products'
    },
    {
        name: "realme Buds 2 Neo Wired in Ear Earphones with Mic (Blue)",
        image: "/images/realme_headphones.jpg",
        description: "LARGE 11.2mm BASS Boost Driver made of multi-layer Composite Diaphragm. Inline Remote : Yes. Experience high fidelity music with rich, deep, powerful yet accurate BASS response",
        brand: "realme",
        category: "Headphone products",
        price: "60",
        countInStock: "15",
        rating: "4.5",
        numReviews: "235",
        display: 'headphone_products'
    },
    {
        name: "boAt Rockerz 450 Bluetooth On Ear Headphones with Mic",
        image: "/images/boat_bluetooth_headphones.jpg",
        description: "boAt Rockerz 450 Bluetooth On Ear Headphones with Mic, Upto 15 Hours Playback, 40MM Drivers, Padded Ear Cushions, Integrated Controls and Dual Modes(Hazel Beige)",
        brand: "boAt",
        category: "Headphone products",
        price: "80",
        countInStock: "15",
        rating: "4.8",
        numReviews: "230",
        display: 'headphone_products'
    },
    {
        name: "Oraimo Truly Wireless Earbuds Half in Ear Bluetooth Earbuds with ENC",
        image: "/images/oraimo_earbuds.jpg",
        description: "Oraimo Truly Wireless Earbuds Half in Ear Bluetooth Earbuds with ENC,Deep Bass, 16Hrs Playtime, 13Mm Dynamic Driver, Immersive Audio, Touch Control, Voice Assistance & Fast Charging",
        brand: "Oraimo",
        category: "Headphone products",
        price: "46.99",
        countInStock: "18",
        rating: "4.3",
        numReviews: "130",
        display: 'headphone_products'
    },
    {
        name: "boAt Rockerz 245 pro Bluetooth Neckband with Beast™ Mode(Super Low Latency) for Gaming",
        image: "/images/boat_blue_headphone.jpg",
        description: "boAt Rockerz 245 pro Bluetooth Neckband with Beast™ Mode(Super Low Latency) for Gaming, ENx™ Tech for Clear Calls, ASAP™ Charge, 20HRS Playtime,IPX4, Dual Pairing & BT v5.3(Oceana Grey)",
        brand: "boAt",
        category: "Headphone products",
        price: "299.99",
        countInStock: "21",
        rating: "4.5",
        numReviews: "216",
        display: 'headphone_products'
    },
    {
        name: "boAt Rockerz 370 On Ear Bluetooth Headphones",
        image: "/images/boat_green_headphone.jpg",
        description: "boAt Rockerz 370 On Ear Bluetooth Headphones with Upto 12 Hours Playtime, Cozy Padded Earcups and Bluetooth v5.0(Gregarious Green)",
        brand: "boAt",
        category: "Headphone products",
        price: "399.99",
        countInStock: "17",
        rating: "4.6",
        numReviews: "212",
        display: 'headphone_products'
    },
]

module.exports = products;