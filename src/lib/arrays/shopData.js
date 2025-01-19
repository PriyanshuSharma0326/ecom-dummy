const shopData = [
    {
        "products": [
            {
                "price": "39",
                "desc": "The RAVPower 20000mAh Power Bank is a high-capacity portable charger with complete charging protections and RAVPower's iSmart technology. It has an LED indicator to display the available power level and charging status. The power bank is compatible with almost all USB-powered devices and has an 18W PD and QC output for fast charging speeds. It can recharge your new iPhone back to 50% in as quickly as 30 minutes and can be recharged in 5 and a half hours with an 18W PD charging adapter. It's available in black and white colors.",
                "name": "RAVPower 20000mAh Power Bank",
                "id": "b020e096-1c4d-407b-a79c-636d80b38671",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/RAVPower%2020000mAh%20Power%20Bank?alt=media&token=6a0fd3ab-6057-4a37-937d-9ca6e20c3b27"
            },
            {
                "name": "Beats Solo Pro Headphones",
                "desc": "Introducing the Beats Solo Pro Headphones, a true masterpiece of audio innovation and style. With their Pro Sound System, Active Noise Cancelling, Apple H1 Chip, and sleek design, these headphones offer an unparalleled listening experience. Immerse yourself in crystal-clear sound quality, enjoy complete peace and quiet, and experience seamless connectivity. The Beats Solo Pro headphones combine cutting-edge technology with elegant aesthetics. They're not just headphones; they're a statement of sophistication and a must-have accessory for any music lover or audiophile. Elevate your audio experience with the Beats Solo Pro headphones today.",
                "id": "96d448c8-0b2d-4ca9-8864-98f678f3ffe1",
                "price": "299",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Beats%20Solo%20Pro%20Headphones?alt=media&token=bf3b8596-24de-49d6-b8ff-729ed08ffd99"
            },
            {
                "desc": "Introducing the Bose QuietComfort 35 II Headphones, a pinnacle of audio excellence and comfort. Equipped with industry-leading noise cancellation technology, these headphones transport you to a world of pure, uninterrupted sound. With built-in Google Assistant and Alexa, you can control your music, receive notifications, and manage tasks effortlessly. The premium materials and plush ear cushions ensure long-lasting comfort during extended listening sessions. Elevate your audio experience with the Bose QuietComfort 35 II headphones today, where unparalleled sound quality meets luxurious comfort and convenience.",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Bose%20QuietComfort%2035%20II%20Headphones?alt=media&token=540bc510-80a2-4960-9b93-f8238990e590",
                "name": "Bose QuietComfort 35 II Headphones",
                "price": "299",
                "id": "019243ed-df53-462c-b543-3971ca0cc36d"
            },
            {
                "id": "f1bc4882-55c5-45c2-856f-1bdf41ad89f1",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Apple%20AirPods%20Pro?alt=media&token=439f9586-1ecd-40bd-8713-9d3cf3e4ed63",
                "desc": "Introducing the Apple AirPods Pro, the epitome of wireless earbud innovation and immersive sound. These cutting-edge earbuds feature active noise cancellation, adaptive EQ, and transparency mode, allowing you to customize your listening experience. With the Apple-designed H1 chip, they deliver seamless connectivity to your devices and hands-free access to Siri. The sweat and water-resistant design ensures durability during workouts and daily life, while the customizable silicone tips provide a secure, comfortable fit. Elevate your audio experience with the Apple AirPods Pro, where state-of-the-art technology meets exceptional sound quality in a compact, stylish package.",
                "name": "Apple AirPods Pro",
                "price": "249"
            },
            {
                "desc": "Introducing the Anker PowerCore 26800mAh Power Bank, a portable powerhouse for your devices. With a generous 26800mAh capacity, it keeps you connected and charged on the move. Featuring three high-speed USB ports, it can charge multiple devices simultaneously at full speed, ideal for travel and outdoor activities. Equipped with advanced PowerIQ and VoltageBoost technologies, it ensures efficient charging, while the MultiProtect safety system guarantees device protection. Elevate your mobile charging with the Anker PowerCore 26800mAh Power Bank, your ultimate solution for on-the-go power.",
                "id": "12e1f326-7bb6-4dca-ae69-57f25f25a450",
                "name": "Anker PowerCore 26800mAh Power Bank",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Anker%20PowerCore%2026800mAh%20Power%20Bank?alt=media&token=78b31334-d026-44b9-96fe-395427dfbc64",
                "price": "49"
            },
            {
                "price": "379",
                "name": "Sony WH-1000XM4 Headphones",
                "desc": "Introducing the Sony WH-1000XM4 Headphones, the pinnacle of audio and noise-cancellation tech. Immerse in unparalleled audio with industry-leading noise-canceling, adaptive sound, and up to 30 hours of battery life. With speak-to-chat, touch controls, and plush comfort, these headphones redefine convenience and style. Elevate your sound with Sony WH-1000XM4, where innovation meets audio excellence in a sleek package.",
                "id": "3a776eb9-ccae-4e6b-b208-24a643be7109",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Sony%20WH-1000XM4%20Headphones?alt=media&token=81ece026-7c15-4d2a-b80a-a55bd01070e4"
            },
            {
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/JBL%20Flip%205%20Portable%20Bluetooth%20Speaker?alt=media&token=cf2c173b-dc9b-4a5e-aad4-61c114f6f605",
                "price": "99",
                "desc": "Introducing the JBL Flip 5 Portable Bluetooth Speaker, your ultimate on-the-go sound companion. This compact and rugged speaker delivers JBL's signature high-quality audio with a whopping 20 hours of playtime, making it perfect for outdoor adventures. Waterproof and durable, it's ideal for beach trips, pool parties, and more. With effortless Bluetooth connectivity and a range of stylish colors, the JBL Flip 5 combines performance and style seamlessly. Elevate your music experience with the JBL Flip 5, and take your tunes wherever you go.",
                "name": "JBL Flip 5 Portable Bluetooth Speaker",
                "id": "1bd6ea55-6279-4e55-aedc-9c66e048fcdd"
            },
            {
                "id": "65461ee4-1658-4913-be45-ffe3bd6612fb",
                "name": "Samsung Galaxy Buds Pro",
                "price": "189",
                "desc": "Introducing the Samsung Galaxy Buds Pro, where innovation and audio excellence meet. These true wireless earbuds feature custom-designed 2-way speakers that deliver immersive sound, while active noise cancellation ensures a distraction-free listening experience. With up to 8 hours of playback time and touch controls for music and calls, they're perfect for daily use. Seamlessly connect to Samsung devices, and their IPX7 water and sweat resistance make them ideal for workouts. Elevate your audio with the Galaxy Buds Pro, combining cutting-edge features and superior sound in one sleek package.",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Samsung%20Galaxy%20Buds%20Pro?alt=media&token=c8615861-faec-4d40-8a31-8621fa4d8221"
            }
        ],
        "id": 8,
        "title": "Accessories",
        "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/accessories.png?alt=media&token=1ce2586d-6a4e-4827-b943-f6a1b570a2b2&_gl=1*hqb7mr*_ga*MTUzNjc3MDU5Mi4xNjkzNzk5NTQ3*_ga_CW55HF8NVT*MTY5NjM5OTgyOC45Ny4xLjE2OTY0MDIxMzUuMy4wLjA."
    },
    {
        "title": "Camera",
        "id": 7,
        "minAmount": 399,
        "products": [
            {
                "desc": "The Nikon D850 is a powerhouse of a camera, designed for professionals and advanced enthusiasts. With a massive 45.7-megapixel full-frame sensor, it captures incredibly detailed images. Its 153-point autofocus system ensures precise focus, even on fast-moving subjects. The D850 also offers 4K UHD video recording, a tilting touchscreen LCD, and exceptional low-light performance. With its rugged build and high-speed shooting capabilities, the Nikon D850 is a top choice for demanding photographers. Elevate your photography to new heights with this remarkable DSLR.",
                "id": "795a2a75-6fc3-4cb7-af47-8c72093b363e",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Nikon%20D850?alt=media&token=3a666d51-335d-44ea-9858-507787241b20",
                "name": "Nikon D850",
                "price": "2799"
            },
            {
                "name": "Sony Alpha a7 III",
                "price": "1999",
                "id": "b9585be0-b1b8-4d72-a6db-4a0b93e0cbe9",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Sony%20Alpha%20a7%20III?alt=media&token=fb82a08f-c15f-45ce-9629-58ffe8fc2f4b",
                "desc": "The Sony Alpha a7 III is a versatile mirrorless camera that excels in both photography and videography. It features a 24.2-megapixel full-frame sensor for superb image quality and impressive low-light performance. With 693 phase-detection autofocus points, it delivers rapid and accurate focusing. The a7 III can record 4K video with exceptional detail, and its 5-axis in-body stabilization ensures steady shots. This camera is a game-changer for creators, offering professional-grade features in a compact and portable package. Capture the world with unmatched precision and clarity using the Sony Alpha a7 III."
            },
            {
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Fujifilm%20X-T4?alt=media&token=341fe9ca-f582-47b0-9b13-38f94d77cdbc",
                "name": "Fujifilm X-T4",
                "desc": "The Fujifilm X-T4 is a cutting-edge mirrorless camera designed for photographers and videographers seeking exceptional versatility and performance. With a 26.1-megapixel APS-C sensor, it produces high-quality images. Its advanced autofocus system with 425 phase-detection points ensures fast and accurate focusing. The X-T4 also supports 4K video recording at 60fps, making it a powerful tool for videography. With in-body image stabilization, a tilting touchscreen, and a durable build, the X-T4 empowers creatives to capture their vision with precision and style. Experience the next level of photography and videography with the Fujifilm X-T4.",
                "price": "1699",
                "id": "820d5f2b-db21-4a03-ada3-bf28173b62d0"
            },
            {
                "id": "6bea39ed-d6b2-49d3-91e2-b4340019ffe6",
                "price": "1799",
                "desc": "The Panasonic Lumix GH5 is a flagship mirrorless camera designed for professional videography and photography. Equipped with a 20.3-megapixel Micro Four Thirds sensor, it excels in both stills and 4K video recording at 60fps. Its high-speed autofocus system, Dual Image Stabilization, and V-LogL recording capabilities make it a top choice for filmmakers. The GH5 also offers rugged weather-sealed construction and a versatile articulating touchscreen, providing creative freedom and reliability in challenging conditions. Unlock your creative potential with the Panasonic Lumix GH5.",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Panasonic%20Lumix%20GH5?alt=media&token=a2957975-6e0e-40b6-8d0a-35991dec3b04",
                "name": "Panasonic Lumix GH5"
            },
            {
                "id": "6a71cd7b-1404-4097-a8ea-d1060829bc74",
                "name": "Olympus OM-D E-M1 Mark III",
                "price": "1499",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Olympus%20OM-D%20E-M1%20Mark%20III?alt=media&token=84ac5384-4ab1-40e1-acc9-e95c94291ff7",
                "desc": "The Olympus OM-D E-M1 Mark III is a high-performance mirrorless camera built for professionals and enthusiasts alike. Featuring a 20.4-megapixel Micro Four Thirds sensor, it delivers exceptional image quality. Its advanced 121-point phase-detection autofocus system ensures swift and precise focusing. With 4K video recording, 5-axis in-body stabilization, and a weather-sealed design, this camera is a versatile tool for both photography and videography. The E-M1 Mark III's compact form factor and robust features make it perfect for capturing stunning imagery in any environment. Elevate your photography game with the Olympus OM-D E-M1 Mark III."
            },
            {
                "id": "7d5afbf0-34ba-4c3f-823c-2ec72214d5ac",
                "desc": "The Leica Q2 is a remarkable compact full-frame digital camera that embodies the essence of elegance and performance. With a 47.3-megapixel sensor, it captures stunningly detailed photographs. The camera boasts a fast fixed 28mm Summilux lens for exceptional image quality. The Q2 is also weather-sealed, making it suitable for various shooting conditions. Its intuitive handling and 4K video capabilities make it a perfect choice for discerning photographers seeking both style and substance. Elevate your photography with the Leica Q2, where craftsmanship meets cutting-edge technology.",
                "name": "Leica Q2",
                "price": "4995",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Leica%20Q2?alt=media&token=6cdc35e2-dbec-4a83-817c-2fafba1a55ae"
            },
            {
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/GoPro%20Hero%209%20Black?alt=media&token=c38f7496-167c-445e-ad29-3f7e2c4d074c",
                "desc": "The GoPro Hero 9 Black is the ultimate action camera, designed to capture your adventures with stunning clarity and versatility. With its 23.6-megapixel sensor, it delivers sharp 5K video and 20MP photos. The Hero 9 Black boasts HyperSmooth 3.0 stabilization for ultra-smooth footage, and it's rugged, waterproof, and even features a front-facing display for vlogging. With TimeWarp 3.0, live streaming, and an array of mounts and accessories, it's the perfect companion for thrill-seekers and content creators alike. Capture your world like never before with the GoPro Hero 9 Black.",
                "name": "GoPro Hero 9 Black",
                "price": "399",
                "id": "9ada7f39-5d04-441d-b1f4-fe28d77002e0"
            },
            {
                "name": "Canon EOS 5D Mark IV",
                "price": "2099",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Canon%20EOS%205D%20Mark%20IV?alt=media&token=643fcbda-99f1-42fa-819a-bf4455d9bc57",
                "desc": "Introducing the Canon EOS 5D Mark IV - your gateway to unparalleled photography and videography. This exceptional DSLR camera boasts a remarkable 30.4-megapixel full-frame sensor, delivering stunningly detailed images and 4K video recording. Its 61-point autofocus system ensures razor-sharp precision, while built-in Wi-Fi and GPS provide seamless connectivity. With robust build quality and outstanding low-light performance, the Mark IV is the perfect choice for your creative journey. Elevate your photography game today!",
                "id": "a5f37ebc-377a-459e-bea8-9c0504fc6e79"
            }
        ],
        "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/camera.jpg?alt=media&token=489cd691-3a91-4d0a-a6bd-c4df46fd039c&_gl=1*1jdk11m*_ga*MTUzNjc3MDU5Mi4xNjkzNzk5NTQ3*_ga_CW55HF8NVT*MTY5NjQ3NTU5MC4xMDMuMS4xNjk2NDc1ODA3LjQ4LjAuMA.."
    },
    {
        "minAmount": 129,
        "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/home-appliances.jpg?alt=media&token=6312f7aa-9969-4e9a-b020-2ca75df3abd6&_gl=1*rx5r62*_ga*MTUzNjc3MDU5Mi4xNjkzNzk5NTQ3*_ga_CW55HF8NVT*MTY5NjM5OTgyOC45Ny4xLjE2OTY0MDIxOTAuOS4wLjA.",
        "title": "Home Appliances",
        "id": 5,
        "products": [
            {
                "price": "499",
                "desc": "The iRobot Roomba Vacuum Cleaner is your smart and efficient cleaning companion. Equipped with advanced technology, it uses sensors and mapping to navigate your home, ensuring comprehensive coverage. With its powerful suction and multi-surface brushes, it effortlessly tackles dirt, pet hair, and debris on carpets and hard floors. You can control it through a smartphone app or voice commands for added convenience. With automatic docking and self-recharging, the Roomba ensures your floors stay spotless without hassle. Experience a cleaner home with the convenience of the iRobot Roomba Vacuum Cleaner.",
                "name": "iRobot Roomba Vacuum Cleaner",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/iRobot%20Roomba%20Vacuum%20Cleaner?alt=media&token=c737ddca-bd76-484a-9a5e-d7c8bb335797",
                "id": "809eb1f4-1c3a-422a-94c9-a2c8364746a7"
            },
            {
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Dyson%20Air%20Purifier?alt=media&token=4640ffc3-d7e7-4fb8-bd5a-ed9aead9eef3",
                "price": "399",
                "desc": "The Dyson Air Purifier is a cutting-edge device designed to enhance the quality of the air you breathe indoors. Equipped with HEPA and activated carbon filters, it effectively removes dust, allergens, pollutants, and odors from your environment. Its smart sensors constantly monitor air quality and adjust settings accordingly. With Wi-Fi connectivity and a user-friendly app, you can control it remotely. The sleek and modern design makes it a stylish addition to any room. Breathe cleaner and fresher air with the Dyson Air Purifier, promoting a healthier living space for you and your family.",
                "name": "Dyson Air Purifier",
                "id": "723dbf0a-8f55-4f5c-807c-8cc733fc457c"
            },
            {
                "price": "999",
                "name": "Samsung Refrigerator",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Samsung%20Refrigerator?alt=media&token=bcd7ba0c-b7bc-4716-a30f-65a2f8256644",
                "id": "6b67e108-7df8-4544-afdb-713559ae4bb0",
                "desc": "The Samsung Refrigerator seamlessly blends style and functionality with its spacious compartments, Twin Cooling Plus technology, precise digital controls, and smart features. Elevate your kitchen with advanced food preservation, convenient accessibility, and a sleek, modern design that complements any decor, all while keeping your groceries fresh and accessible."
            }
        ]
    },
    {
        "products": [
            {
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Breville%20Toaster%20Oven?alt=media&token=a9fd51f1-6b43-48fb-b717-2986514bb6a5",
                "name": "Breville Toaster Oven",
                "desc": "The Breville Toaster Oven is a versatile kitchen appliance that delivers precision toasting and cooking. With adjustable settings and a spacious interior, it accommodates various food items. Its convection technology ensures even cooking, while smart features like preset functions and an LCD screen simplify operation. Upgrade your kitchen with Breville's culinary excellence.",
                "price": "249",
                "id": "a3f1d367-ca12-4b9e-8bfe-d4f930fb20a2"
            },
            {
                "name": "KitchenAid Stand Mixer",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/KitchenAid%20Stand%20Mixer?alt=media&token=cff0c5eb-1e48-469d-b3ab-e86dd47905dd",
                "id": "9f856477-d75e-43cc-a2cc-8a55efd316d7",
                "price": "299",
                "desc": "The KitchenAid Stand Mixer is a culinary powerhouse, perfect for mixing, kneading, and whipping. With a robust motor and various attachments, it effortlessly handles a wide range of kitchen tasks. Its iconic design adds a touch of elegance to your kitchen while making cooking and baking a breeze. Elevate your culinary creations with KitchenAid."
            },
            {
                "price": "129",
                "id": "3227cb8c-5833-4bbf-a0e3-49e2f16fc8ad",
                "name": "Cuisinart Food Processor",
                "desc": "The Cuisinart Food Processor is your kitchen's ultimate workhorse. With a powerful motor and a variety of blades and discs, it effortlessly chops, slices, shreds, and purees ingredients. Its spacious bowl and intuitive controls make food prep a breeze. Streamline your cooking and save time with the Cuisinart Food Processor.",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Cuisinart%20Food%20Processor?alt=media&token=fc1225c6-90e4-4a5d-97ad-2fcedef3ca9d"
            },
            {
                "id": "2adbf106-a216-4f10-a927-34541f36b5f4",
                "name": "Ninja Blender",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Ninja%20Blender?alt=media&token=b56a91ee-ca34-4962-9a10-41bbd35755d1",
                "desc": "The Ninja Blender is a versatile kitchen appliance that takes your blending game to the next level. With a powerful motor and multiple blades, it effortlessly blends, purees, and crushes ingredients. Whether it's smoothies, soups, or sauces, the Ninja Blender delivers consistent results and makes food preparation a breeze.",
                "price": "99"
            },
            {
                "name": "Breville Toaster",
                "price": "79",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Breville%20Toaster?alt=media&token=0a35b978-c384-4cce-8fb5-b798c973a248",
                "desc": "The Breville Toaster is a sleek and efficient addition to your kitchen. With customizable browning settings and wide slots, it toasts bread, bagels, and more to perfection. Its stylish design and user-friendly controls elevate your morning routine while ensuring the perfect toast every time. Upgrade your breakfast experience with Breville.",
                "id": "b9b4840f-2afb-4fa6-833c-2771f9db0d68"
            },
            {
                "name": "Keurig Coffee Maker",
                "price": "129",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Keurig%20Coffee%20Maker?alt=media&token=5ea2875b-05b5-42fa-ab1f-317f3ce786c5",
                "desc": "The Keurig Coffee Maker is a convenient and efficient way to brew your favorite coffee. With its single-serve design and wide range of coffee pod options, it delivers a perfect cup of coffee at the touch of a button. Enjoy quality coffee quickly and effortlessly with Keurig.",
                "id": "ab1e155e-6e21-4160-83a8-078ed239b769"
            },
            {
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Hamilton%20Beach%20Microwave?alt=media&token=fdb42dbb-04ef-4214-b14a-c3414d4512a2",
                "desc": "The Hamilton Beach Microwave is a reliable kitchen appliance designed for quick and efficient heating and cooking. With various power levels and presets, it easily handles a range of tasks. Its user-friendly interface and compact design make it a practical addition to any kitchen, providing convenient and consistent results.",
                "price": "89",
                "name": "Hamilton Beach Microwave",
                "id": "d5a62cae-6972-4577-a224-0887373e85b4"
            },
            {
                "price": "149",
                "id": "4d95ea3f-181a-4e76-8a25-545f67a57645",
                "desc": "The Instant Pot Pressure Cooker is a versatile kitchen appliance that revolutionizes cooking. It combines multiple functions like pressure cooking, slow cooking, and more in one device. With smart programming and safety features, it makes meal preparation fast, easy, and delicious. Elevate your culinary creations with the Instant Pot.",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Instant%20Pot%20Pressure%20Cooker?alt=media&token=9bcfd70c-ed52-403b-936c-ef34d54c3ad2",
                "name": "Instant Pot Pressure Cooker"
            },
            {
                "price": "499",
                "id": "8a87d909-e0fe-4d8f-9f7a-4d4db56ad9d5",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Bosch%20Dishwasher?alt=media&token=ccaf6f03-22a8-46ee-80ec-def30763bac5",
                "name": "Bosch Dishwasher",
                "desc": "The Bosch Dishwasher is a high-performance appliance that streamlines your dishwashing routine. With advanced cleaning technology and multiple wash cycles, it efficiently removes stains and grime. Its quiet operation and energy-efficient design make it a practical addition to any kitchen, ensuring sparkling dishes with minimal hassle. Upgrade your kitchen with Bosch."
            }
        ],
        "title": "Kitchen Appliances",
        "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/kitchen-appliances.jpg?alt=media&token=7f025531-3e4b-4cc2-bdb8-f62bc877df45&_gl=1*1emp19d*_ga*MTUzNjc3MDU5Mi4xNjkzNzk5NTQ3*_ga_CW55HF8NVT*MTY5NjQ3NTU5MC4xMDMuMS4xNjk2NDc1OTAxLjM5LjAuMA..",
        "minAmount": 79,
        "id": 6
    },
    {
        "id": 3,
        "title": "Laptops",
        "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/laptops.jpg?alt=media&token=bbf2ad7a-d373-4b33-a518-a82eadaaeb58&_gl=1*hgsr8o*_ga*MTUzNjc3MDU5Mi4xNjkzNzk5NTQ3*_ga_CW55HF8NVT*MTY5NjU4MjA2MS4xMTUuMS4xNjk2NTgzNjA2LjYuMC4w",
        "products": [
            {
                "desc": "The Dell XPS 13 boasts impressive specs, featuring a stunning InfinityEdge display that showcases visuals with virtually no borders. Powered by high-performance processors, it excels in productivity and multimedia tasks. With configurations offering up to Intel Core i9 processors, ample RAM, and fast SSD storage, it provides a seamless computing experience. Its premium build quality, lightweight design, and extended battery life make it a versatile choice for professionals and creators alike. Elevate your computing with the Dell XPS 13.",
                "name": "Dell XPS 13",
                "id": "189bc22c-ed78-4ac2-84f1-e9b233754278",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Dell%20XPS%2013?alt=media&token=3367b955-482e-47e8-8e37-ab751cc2b070",
                "price": "1299"
            },
            {
                "id": "817d7e36-cb84-4027-a6f5-65118d0b56d2",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/MacBook%20Pro%2013-inch?alt=media&token=c1a982e3-41e4-4e3e-a5dd-a10f2bb577bf",
                "price": "1499",
                "desc": "The 13-inch MacBook Pro is a versatile laptop designed for power and portability. It features a high-resolution Retina display for crisp visuals. With options for Intel Core i5 or i7 processors, up to 32GB of RAM, and fast SSD storage up to 4TB, it offers exceptional performance. The Magic Keyboard provides a comfortable typing experience, and Thunderbolt 3 ports enhance connectivity. This laptop is perfect for professionals and creatives seeking both power and mobility in their computing needs.",
                "name": "MacBook Pro 13-inch"
            },
            {
                "name": "HP Spectre x360",
                "price": "1199",
                "id": "89d0f330-5386-4600-8134-7b8285185860",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/HP%20Spectre%20x360?alt=media&token=cb40968a-5fd6-416a-9ef6-e3170f53b15d",
                "desc": "The HP Spectre x360 is a premium 2-in-1 laptop that combines style and versatility. It boasts a stunning high-resolution display, offering vibrant visuals in both laptop and tablet modes. Powered by Intel Core processors, with options for up to 16GB of RAM and fast SSD storage, it excels in performance. The sleek and convertible design, along with long battery life, makes it perfect for on-the-go professionals and creative users. Elevate your computing experience with the HP Spectre x360."
            },
            {
                "name": "Lenovo ThinkPad X1 Carbon",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Lenovo%20ThinkPad%20X1%20Carbon?alt=media&token=bf41f352-12ac-4f1e-b9a2-539c6b50c5ef",
                "id": "1d4c278f-c30c-4c81-babb-2a7079e1833c",
                "price": "1399",
                "desc": "The Lenovo ThinkPad X1 Carbon is a top-tier business laptop renowned for its durability and performance. It features a high-resolution display, providing sharp visuals for work and entertainment. Powered by Intel Core processors, with configurations offering up to 32GB of RAM and fast SSD storage, it excels in productivity tasks. The legendary ThinkPad keyboard ensures comfortable typing, and its slim and lightweight design is ideal for professionals on the move. Experience premium computing with the Lenovo ThinkPad X1 Carbon."
            },
            {
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Asus%20ROG%20Zephyrus%20G14?alt=media&token=865f8c23-5fe9-4dc2-a932-1c7fde8e2e0e",
                "id": "a51a830f-3d9d-4154-8789-5d9dfb6aa119",
                "price": "1299",
                "desc": "The Asus ROG Zephyrus G14 is a high-performance gaming laptop designed for serious gamers and content creators. It boasts a 14-inch QHD display with a fast refresh rate for immersive gaming and content creation. Powered by AMD Ryzen processors and Nvidia RTX graphics, it offers exceptional gaming performance. The compact and stylish design, coupled with long battery life, makes it suitable for both gaming and productivity on the go. Elevate your gaming experience with the Asus ROG Zephyrus G14.",
                "name": "Asus ROG Zephyrus G14"
            },
            {
                "price": "999",
                "id": "a11db218-a6e4-434a-bd3a-3bfb6123fff2",
                "name": "Acer Swift 5",
                "desc": "The Acer Swift 5 is an ultra-lightweight and portable laptop designed for productivity and mobility. It features a crisp and vibrant display, perfect for work and entertainment. Powered by Intel Core processors, with options for ample RAM and fast SSD storage, it excels in day-to-day tasks. Its slim and sleek design, along with a long battery life, makes it an excellent choice for professionals and students on the move. Experience the perfect blend of performance and portability with the Acer Swift 5.",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Acer%20Swift%205?alt=media&token=b205bef4-5f7c-4c74-a7f7-6172c2b29abf"
            },
            {
                "desc": "The Microsoft Surface Laptop 4 is a premium laptop that combines elegance with performance. It offers a high-resolution PixelSense touchscreen display, ideal for work and entertainment. Powered by both Intel Core and AMD Ryzen processors, with configurations offering ample RAM and fast SSD storage, it excels in various tasks. Its sleek and lightweight design, along with a comfortable keyboard, makes it a versatile choice for professionals and students. Elevate your computing experience with the Microsoft Surface Laptop 4.",
                "name": "Microsoft Surface Laptop 4",
                "price": "1399",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Microsoft%20Surface%20Laptop%204?alt=media&token=29b69f6f-9f37-408d-ad8d-7bc7b17f586a",
                "id": "708d9a44-e9b4-4d64-a070-791499d8bc55"
            },
            {
                "name": "Razer Blade 15",
                "id": "859e18f5-6216-4828-b17a-848f6c4d3052",
                "price": "1799",
                "desc": "The Razer Blade 15 is a high-performance gaming laptop that blends power with style. It features a stunning high-refresh-rate display, ideal for gaming and content creation. Powered by Intel Core processors and Nvidia RTX graphics, it offers exceptional gaming performance. Its sleek and premium design, along with customizable RGB lighting, makes it a favorite among gamers and enthusiasts. Elevate your gaming experience with the Razer Blade 15.",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Razer%20Blade%2015?alt=media&token=d74e1cd5-a14e-4eb2-b610-9bd359c158ee"
            },
            {
                "desc": "The Alienware x14 R2 Gaming Laptop is a high-end gaming powerhouse. It boasts a stunning high-refresh-rate display with Nvidia G-Sync technology for seamless gaming visuals. Powered by Intel Core processors and Nvidia RTX graphics, it delivers top-tier gaming performance. Its futuristic design, customizable RGB lighting, and premium build quality cater to avid gamers seeking both power and style. Elevate your gaming experience with the Alienware x14 R2 Gaming Laptop.",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Alienware%20x14%20R2%20Gaming%20Laptop?alt=media&token=5cdcfd57-3418-4a6b-9bc9-a512abef0cf4",
                "name": "Alienware x14 R2 Gaming Laptop",
                "price": "1499",
                "id": "c03b84bc-5349-41b4-bf94-089815791b20"
            }
        ],
        "minAmount": 999
    },
    {
        "id": 1,
        "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/mobiles-tablets.jpg?alt=media&token=a24c3a97-470a-4f1e-9959-d5fd5a1d541d&_gl=1*103pksu*_ga*MTUzNjc3MDU5Mi4xNjkzNzk5NTQ3*_ga_CW55HF8NVT*MTY5NjQ3NTU5MC4xMDMuMS4xNjk2NDc1OTU1LjUxLjAuMA..",
        "title": "Mobiles & Tablets",
        "products": [
            {
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/OnePlus%209?alt=media&token=a5055f6e-ec61-41bb-ad2c-069d1503d1ef",
                "name": "OnePlus 9",
                "id": "af747270-7abf-4bdc-b6b0-9ce4b7576278",
                "desc": "Introducing the OnePlus 9, a smartphone that blends cutting-edge technology and sleek design seamlessly. With a powerful camera system, including a 48MP main sensor co-developed with Hasselblad, a smooth 120Hz Fluid AMOLED display, the lightning-fast Qualcomm Snapdragon 888 chipset, and 5G connectivity, this phone ensures you stay ahead in the mobile world. Its slim and stylish design, complete with Gorilla Glass protection, exudes sophistication, while OxygenOS offers a clean and intuitive user experience. Elevate your mobile experience with the OnePlus 9, where innovation meets elegance.",
                "price": "699"
            },
            {
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Xiaomi%20Mi%2011?alt=media&token=c4faf09f-3a3d-426b-a7a8-5701e8d73cbc",
                "desc": "Introducing the Xiaomi Mi 11, a smartphone that redefines technology and style. With a 108MP triple camera system, a stunning 6.81-inch AMOLED display, Qualcomm Snapdragon 888 chipset, 5G connectivity, and MIUI 12, this phone delivers a remarkable mobile experience. Capture pro-grade photos and enjoy vibrant visuals with the Mi 11's display. The powerful Snapdragon 888 chipset ensures swift performance, while MIUI 12 offers a user-friendly interface. Its sleek and modern design, combined with Corning Gorilla Glass protection, adds a touch of elegance and durability to your daily life. Elevate your mobile experience with the Xiaomi Mi 11, where innovation meets beauty.",
                "name": "Xiaomi Mi 11",
                "price": "799",
                "id": "03bb91bc-2cd1-4227-8559-a0c7fbc0408a"
            },
            {
                "desc": "Introducing the Sony Xperia 1 III, a smartphone that embodies innovation and sophistication. With a cutting-edge camera system featuring ZEISS optics, a 4K OLED HDR display, Qualcomm Snapdragon 888 chipset, 5G connectivity, and Sony's signature UI, this phone offers an unmatched mobile experience. Capture breathtaking photos with precision and enjoy stunning visuals on the Xperia 1 III's 4K OLED display. The Snapdragon 888 chipset ensures blazing-fast performance, while Sony's UI provides a seamless user experience. Crafted with a sleek and premium design, this phone is both stylish and durable. Elevate your mobile experience with the Sony Xperia 1 III, where innovation meets elegance.",
                "name": "Sony Xperia 1 III",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Sony%20Xperia%201%20III?alt=media&token=681351b8-1991-4523-85bc-1ad927554d4e",
                "price": "1099",
                "id": "6da7e650-dff7-471e-91ef-aeb454a954bf"
            },
            {
                "desc": "Introducing the LG G8 ThinQ, a smartphone that combines innovation and practicality. Featuring a dual-camera system, a brilliant 6.1-inch OLED display, Qualcomm Snapdragon 855 chipset, 4G connectivity, and LG's intuitive UX, this phone offers a well-rounded mobile experience. Capture sharp photos and enjoy vibrant visuals on the G8 ThinQ's OLED display. The Snapdragon 855 chipset ensures smooth performance, while LG's user-friendly interface simplifies your interactions. With a sleek and ergonomic design, this phone is comfortable to hold and use daily. Elevate your mobile experience with the LG G8 ThinQ, where functionality meets style.",
                "id": "08953d1d-7e7e-4d13-a37f-18c7028101f3",
                "price": "499",
                "name": "LG G8 ThinQ",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/LG%20G8%20ThinQ?alt=media&token=a442f1b5-7eca-4102-81c2-441115c1e202"
            },
            {
                "desc": "Introducing the Huawei P50 Pro, a smartphone that epitomizes innovation and excellence. With a cutting-edge camera system developed in partnership with Leica, an immersive 6.6-inch OLED display, Huawei's powerful Kirin 9000E chipset, 5G connectivity, and HarmonyOS, this phone offers an exceptional mobile experience. Capture stunning photos and enjoy vibrant visuals on the P50 Pro's OLED display. The Kirin 9000E chipset ensures smooth and efficient performance, while HarmonyOS provides a seamless and intuitive user interface. Crafted with a sleek and elegant design, this phone is a testament to Huawei's commitment to quality and innovation. Elevate your mobile experience with the Huawei P50 Pro, where innovation meets excellence.",
                "id": "7ff076f5-7493-4518-9c74-ba6ab937c494",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Huawei%20P50%20Pro?alt=media&token=29721427-c8ec-48e1-aae2-97da3e991fbb",
                "price": "1299",
                "name": "Huawei P50 Pro"
            },
            {
                "price": "1499",
                "name": "iPhone 15 Pro",
                "id": "9770a89c-881b-4a36-a5d2-cdc0abeffffb",
                "desc": "Introducing the Apple iPhone 15 Pro, a smartphone that combines power and elegance in a sustainable design. The iPhone 15 Pro features a Pro Camera System with a 48MP main camera, 5x telephoto zoom, and second-generation sensor-shift optical image stabilization. It also has a Super Retina XDR Display with a resolution of 2556x1179 and a 120Hz ProMotion refresh rate. The A17 Pro chip and 5G connectivity provide lightning-fast performance, and the latest iOS 17 offers powerful features and privacy protection. The iPhone 15 Pro is designed with sustainability in mind, featuring 20% recycled or renewable content and a titanium frame. It is also splash, water, and dust resistant with an IP68 rating. The iPhone 15 Pro is not just a phone; it's a creative tool and a statement of sophistication.",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/iPhone%2015%20Pro?alt=media&token=2e01bd0b-fe30-4b49-a87f-f5c7f2434d75"
            },
            {
                "desc": "Introducing the Apple iPhone 13 Pro, a masterpiece of innovation and style. With its Pro Camera System, Super Retina XDR Display, A15 Bionic Chip, 5G connectivity, and the latest iOS 15, this smartphone offers an unparalleled experience. Capture professional-quality photos and videos, enjoy stunning visuals, and experience lightning-fast performance. The iPhone 13 Pro combines power and elegance in a sustainable design, featuring Ceramic Shield and Face ID security. It's not just a phone; it's a creative tool and a statement of sophistication. Elevate your mobile experience with the iPhone 13 Pro today.",
                "price": "799",
                "name": "iPhone 13 Pro",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/iPhone%2013%20Pro?alt=media&token=38083f37-6b4c-4e74-9734-3e20391124e8",
                "id": "d660850a-1ea1-49e1-bf3e-1c8255cce7af"
            },
            {
                "desc": "Introducing the Google Pixel 6 Pro, a smartphone that combines innovation and style. With a Pro Camera System, including a 50MP primary sensor, OLED Display with ProMotion, Google Tensor Chip, 5G connectivity, and robust security features like Face Unlock and the Titan M2 chip, this phone delivers top-notch performance and photography capabilities, all wrapped in an elegant design. It's the perfect choice for those who demand a premium mobile experience.",
                "name": "Google Pixel 6 Pro",
                "price": "699",
                "id": "43d3f9db-5824-4ea2-b15c-0c623aeb9a6b",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Google%20Pixel%206%20Pro?alt=media&token=d9672a47-41da-4dab-967a-643306ae1025"
            },
            {
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Samsung%20Galaxy%20S21%20Ultra?alt=media&token=79c9b811-2cdd-44c2-ac83-2c8a443f2d92",
                "id": "4ff24b42-6a8c-4a45-a8df-ee14cac17b1b",
                "price": "999",
                "desc": "Introducing the Samsung Galaxy S21 Ultra, a triumph of innovation and sophistication. With its Ultra Camera System, Dynamic AMOLED 2X Display, Exynos 2100 Chipset, 5G connectivity, and the latest Android experience, this smartphone delivers an unrivaled journey into the digital world. Capture pro-grade photos and videos, immerse yourself in breathtaking visuals, and revel in blazing-fast performance. The Galaxy S21 Ultra seamlessly blends power and style, all within an eco-conscious design, featuring Gorilla Glass Victus and advanced security features like Face Recognition and Ultrasonic Fingerprint Unlock. It's not just a phone; it's your creative canvas and an embodiment of refined taste. Elevate your mobile experience with the Samsung Galaxy S21 Ultra today.",
                "name": "Samsung Galaxy S21 Ultra"
            }
        ],
        "minAmount": 449
    },
    {
        "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/tv.jpg?alt=media&token=9498b807-e5dc-490b-84be-3aad329e25e5&_gl=1*1k6rrlr*_ga*MTUzNjc3MDU5Mi4xNjkzNzk5NTQ3*_ga_CW55HF8NVT*MTY5NjQ3NTU5MC4xMDMuMS4xNjk2NDc1OTg4LjE4LjAuMA..",
        "id": 2,
        "minAmount": 799,
        "products": [
            {
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Samsung%20QLED%20Q90T?alt=media&token=c0f9ee67-1cc1-40d0-be0c-aa1ea951aa90",
                "name": "Samsung QLED Q90T",
                "id": "1d4e55ca-693d-47a2-9305-9593859a21e2",
                "price": "1499",
                "desc": "The Samsung QLED Q90T is a premium 4K smart TV that delivers stunning visuals and immersive entertainment. With a high-resolution QLED display, Quantum HDR technology, and Direct Full Array backlighting, it offers vibrant colors and deep contrast. Powered by Tizen OS, it provides access to a variety of streaming apps and services. With sleek design and voice control, the Q90T enhances your home entertainment experience."
            },
            {
                "desc": "The LG OLED C1 is a top-tier 4K smart TV known for its exceptional picture quality. Featuring OLED technology, it delivers perfect blacks and vibrant colors. With AI-enhanced processing, it optimizes content for stunning clarity. The webOS platform offers easy access to streaming services and apps. With a sleek design and voice control, the C1 elevates your home entertainment experience to the next level.",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/LG%20OLED%20C1?alt=media&token=c6069866-75ae-46ad-a4da-0b9e2090ff31",
                "price": "1699",
                "name": "LG OLED C1",
                "id": "a1cd5a6d-adb8-479b-bc55-816bd7225950"
            },
            {
                "id": "2310f3b7-aca1-40ff-9b0c-a7a2d183cedf",
                "name": "Sony Bravia XR A80J",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Sony%20Bravia%20XR%20A80J?alt=media&token=6013e5c3-9441-4b7a-a086-ee750c5a8d8b",
                "price": "1599",
                "desc": "The Sony Bravia XR A80J is a high-end 4K OLED smart TV known for its impressive picture quality and advanced features. With OLED technology, it delivers deep blacks and vibrant colors. Powered by the Bravia XR processor, it offers AI-enhanced picture and sound quality. Access streaming services and apps with ease through the Android TV platform. The A80J's sleek design and compatibility with voice control enhance your home entertainment experience."
            },
            {
                "name": "TCL 6-Series",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/TCL%206-Series?alt=media&token=2a775223-0a4a-495d-accf-483378076339",
                "id": "952ae343-42bd-4799-b899-2dd6d768c439",
                "price": "899",
                "desc": "The TCL 6-Series is a popular 4K smart TV known for its great value and impressive performance. Featuring QLED technology, it offers vibrant colors and sharp contrast. With Dolby Vision HDR, it delivers stunning picture quality. Access streaming content and apps through the Roku platform, and enjoy a user-friendly interface. The 6-Series combines affordability with quality, making it a solid choice for home entertainment."
            },
            {
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Vizio%20OLED%20H1?alt=media&token=f04e8045-00be-4c54-8245-873fd4fef38f",
                "price": "1399",
                "name": "Vizio OLED H1",
                "id": "d74ed46c-91e0-4ad8-91e6-d33a9075f833",
                "desc": "The Vizio OLED H1 is a premium 4K OLED smart TV known for its exceptional picture quality and competitive pricing. With OLED technology, it offers deep blacks and vibrant colors. Dolby Vision HDR enhances contrast and colors for stunning visuals. The SmartCast platform provides access to popular streaming services and apps. The Vizio OLED H1 is a value-packed option for those seeking high-quality home entertainment."
            },
            {
                "desc": "The Hisense U8G is a high-performance 4K smart TV that offers outstanding picture quality and features. With Quantum Dot technology, it delivers vivid colors and excellent contrast. Dolby Vision HDR enhances the viewing experience. Powered by Android TV, it provides access to a wide range of apps and streaming services. The U8G's sleek design and competitive pricing make it a compelling choice for home entertainment.",
                "name": "Hisense U8G",
                "id": "865f30d3-0723-434a-88dc-cdae37e9dc6b",
                "price": "999",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Hisense%20U8G?alt=media&token=459b489f-cfb3-45d9-ab2d-86e26e816d0b"
            },
            {
                "name": "Panasonic JZ2000",
                "price": "1799",
                "id": "be0f487f-e3a0-4dad-930e-c76312c65b28",
                "desc": "The Panasonic JZ2000 is a top-of-the-line 4K OLED TV renowned for its exceptional picture quality and advanced features. With OLED technology, it delivers deep blacks and vibrant colors. It supports both Dolby Vision and HDR10+ for stunning contrast and color accuracy. The JZ2000 boasts a customized OLED panel for improved brightness and sound quality. With the smart platform, you can access various streaming services and apps. Its premium design and features make it a flagship choice for home entertainment.",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Panasonic%20JZ2000?alt=media&token=6efd2aa2-e860-4765-a525-0042f2e7613f"
            },
            {
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Sony%20X80J?alt=media&token=c1b5d16b-3183-415b-a007-feb7ba0da697",
                "price": "799",
                "desc": "The Sony X80J is a versatile 4K LED smart TV known for its quality and accessibility. With a high-resolution display, it offers clear visuals. It supports HDR for improved contrast and color. Powered by Google TV, it provides access to a wide range of apps and streaming services. The X80J's sleek design and affordability make it a solid choice for home entertainment.",
                "name": "Sony X80J",
                "id": "caeb357e-4b8c-4188-b2b7-0d724f4f2f36"
            }
        ],
        "title": "Televisions"
    },
    {
        "products": [
            {
                "desc": "The Samsung Front Load Washer is a high-performance laundry appliance designed for efficiency and convenience. With a front-loading design, it provides a spacious drum for larger loads. Its advanced features include multiple wash cycles, variable spin speeds, and a user-friendly control panel. The washer also boasts energy-efficient technology, making it an eco-friendly choice for clean and fresh clothes. Upgrade your laundry routine with the Samsung Front Load Washer.",
                "id": "96484ebb-64a0-4f17-814b-ef759a0f88ff",
                "name": "Samsung Front Load Washer",
                "price": "699",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Samsung%20Front%20Load%20Washer?alt=media&token=c78f8a59-6fcb-4c3e-8a16-06f04b0f7fc2"
            },
            {
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/LG%20Top%20Load%20Washer?alt=media&token=399248a8-198d-47b6-acbc-41b52fd55725",
                "name": "LG Top Load Washer",
                "id": "f53f45f7-01b1-44d8-9e55-f9de72412b02",
                "price": "599",
                "desc": "The LG Top Load Washer is a reliable and efficient laundry appliance. With its top-loading design, it offers a generous drum capacity for handling large loads of laundry. Featuring various wash cycles, water temperature options, and user-friendly controls, it caters to a range of laundry needs. Its advanced technology ensures thorough cleaning while conserving energy. Simplify your laundry routine with the LG Top Load Washer."
            },
            {
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Whirlpool%20High-Efficiency%20Washer?alt=media&token=7f799c91-4023-4c14-bbb8-413dd0365d47",
                "id": "d8d8ddb6-936c-49a3-8384-0e0f24119904",
                "price": "499",
                "name": "Whirlpool High-Efficiency Washer",
                "desc": "The Whirlpool High-Efficiency Washer is a top-performing laundry appliance known for its reliability and eco-friendliness. With its high-efficiency design, it conserves water and energy while delivering powerful cleaning performance. It offers a range of wash cycles and customization options to suit different laundry needs. The washer's advanced technology ensures clean and fresh clothes while minimizing environmental impact. Simplify your laundry tasks with the Whirlpool High-Efficiency Washer."
            },
            {
                "id": "eb9726bf-7668-4b80-8fe7-60b95a6ce54f",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/Bosch%20Compact%20Washer?alt=media&token=d113fbf7-2810-46e1-8a2c-8a321c239a80",
                "desc": "The Bosch Compact Washer is a space-saving and high-performance laundry appliance. Its compact design makes it ideal for small living spaces or apartments. Despite its size, it offers a range of wash cycles and features to accommodate various laundry needs. Known for its reliability and efficiency, this washer ensures clean and fresh clothes with minimal energy and water consumption. Simplify your laundry routine with the Bosch Compact Washer.",
                "price": "799",
                "name": "Bosch Compact Washer"
            }
        ],
        "imageURL": "https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/washing-machine.jpg?alt=media&token=545caf44-dbab-44ea-8399-5ee4a2ebc5aa&_gl=1*1w14kqi*_ga*MTUzNjc3MDU5Mi4xNjkzNzk5NTQ3*_ga_CW55HF8NVT*MTY5NjQ3NTU5MC4xMDMuMS4xNjk2NDc2MDMyLjU1LjAuMA..",
        "title": "Washing Machines",
        "minAmount": 349,
        "id": 4
    }
];

export {
    shopData,
}
