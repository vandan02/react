import React from 'react';
import Timer from './timer'; // Import the Timer component
import './index.css'

const Showdata = () => {
    let data=[
        {
          "id": 1,
          "name": "Wireless Noise-Cancelling Headphones",
          "description": "Premium headphones with active noise-cancellation.",
          "price": 249.99,
          "image": "https://fakeimg.pl/500x500/ff6600",
          "rating": 4.5,
          "brand": "Sony",
          "color": "Black",
          "connectivity": "Bluetooth",
          "wireless": true
        },
        {
          "id": 2,
          "name": "Smartphone Camera Gimbal",
          "description": "Stabilize your smartphone videos with this advanced gimbal.",
          "price": 159.99,
          "image": "https://fakeimg.pl/500x500/33aa33",
          "rating": 4.2,
          "brand": "DJI",
          "compatibility": "iOS, Android",
          "weight": "250g"
        },
        {
          "id": 3,
          "name": "Professional DSLR Camera",
          "description": "Capture stunning photos with this high-end DSLR camera.",
          "price": 1899.99,
          "image": "https://fakeimg.pl/500x500/4466cc",
          "rating": 4.8,
          "brand": "Canon",
          "resolution": "24.2MP",
          "sensor": "Full-frame"
        },
        {
          "id": 4,
          "name": "Ultrabook Laptop",
          "description": "Slim and lightweight laptop for productivity on the go.",
          "price": 999.99,
          "image": "https://fakeimg.pl/500x500/990099",
          "rating": 4.6,
          "brand": "Lenovo",
          "screen_size": "14 inches",
          "storage": "512GB SSD",
          "ram": "16GB"
        },
        {
          "id": 5,
          "name": "Fitness Tracker Watch",
          "description": "Monitor your health and activity with this smartwatch.",
          "price": 89.99,
          "image": "https://fakeimg.pl/500x500/0099cc",
          "rating": 4,
          "brand": "Fitbit",
          "display": "Color touchscreen",
          "heart_rate_monitor": true,
          "waterproof": true
        },
        {
          "id": 6,
          "name": "Gaming Console",
          "description": "Immerse yourself in gaming with the latest console.",
          "price": 399.99,
          "image": "https://fakeimg.pl/500x500/ff3399",
          "rating": 4.9,
          "brand": "Sony",
          "storage": "1TB",
          "resolution": "4K",
          "games_included": 2
        },
        {
          "id": 7,
          "name": "Wireless Charging Pad",
          "description": "Charge your devices wirelessly with this sleek charging pad.",
          "price": 39.99,
          "image": "https://fakeimg.pl/500x500/ffcc00",
          "rating": 4.3,
          "brand": "Anker",
          "compatibility": "Qi-enabled devices",
          "output_power": "10W",
          "color": "White"
        },
        {
          "id": 8,
          "name": "Robot Vacuum Cleaner",
          "description": "Keep your floors clean with this smart robot vacuum.",
          "price": 299.99,
          "image": "https://fakeimg.pl/500x500/66cc66",
          "rating": 4.7,
          "brand": "iRobot",
          "suction_power": "2000Pa",
          "battery_life": "90 minutes",
          "mapping_technology": true
        },
        {
          "id": 9,
          "name": "Bluetooth Speaker",
          "description": "Portable speaker with powerful sound and long battery life.",
          "price": 79.99,
          "image": "https://fakeimg.pl/500x500/ff9933",
          "rating": 4.5,
          "brand": "JBL",
          "output_power": "20W",
          "battery_life": "12 hours",
          "waterproof": true
        },
        {
          "id": 10,
          "name": "Portable External SSD",
          "description": "Fast and compact external SSD for data storage and transfer.",
          "price": 149.99,
          "image": "https://fakeimg.pl/500x500/3399ff",
          "rating": 4.8,
          "brand": "Samsung",
          "storage_capacity": "500GB",
          "interface": "USB 3.2 Gen 2",
          "color": "Blue"
        },
        {
          "id": 11,
          "name": "Electric Scooter",
          "description": "Eco-friendly electric scooter for urban commuting.",
          "price": 349.99,
          "image": "https://fakeimg.pl/500x500/ff6666",
          "rating": 4.6,
          "brand": "Xiaomi",
          "max_speed": "25 km/h",
          "range": "20 km",
          "weight_capacity": "100 kg"
        },
        {
          "id": 12,
          "name": "Kitchen Blender",
          "description": "Powerful blender for smoothies, soups, and more.",
          "price": 89.99,
          "image": "https://fakeimg.pl/500x500/33cc99",
          "rating": 4.4,
          "brand": "Vitamix",
          "power": "1200W",
          "speeds": "Variable speed control",
          "color": "Green"
        },
        {
          "id": 13,
          "name": "Wireless Gaming Mouse",
          "description": "Precision gaming mouse with customizable RGB lighting.",
          "price": 59.99,
          "image": "https://fakeimg.pl/500x500/993366",
          "rating": 4.7,
          "brand": "Logitech",
          "dpi_range": "100 - 16000",
          "wireless": true,
          "buttons": 6
        },
        {
          "id": 14,
          "name": "Fitness Treadmill",
          "description": "High-performance treadmill for home workouts.",
          "price": 899.99,
          "image": "https://fakeimg.pl/500x500/66cccc",
          "rating": 4.5,
          "brand": "ProForm",
          "max_speed": "18 km/h",
          "incline_levels": 15,
          "display": "Touchscreen",
          "foldable": true
        },
        {
          "id": 15,
          "name": "Smart Thermostat",
          "description": "Programmable thermostat for energy-efficient temperature control.",
          "price": 129.99,
          "image": "https://fakeimg.pl/500x500/cc9966",
          "rating": 4.3,
          "brand": "Nest",
          "compatibility": "iOS, Android",
          "connectivity": "Wi-Fi",
          "voice_control": true
        },
        {
          "id": 16,
          "name": "Portable Solar Charger",
          "description": "Charge your devices using solar power on the go.",
          "price": 49.99,
          "image": "https://fakeimg.pl/500x500/ff9900",
          "rating": 4.2,
          "brand": "Goal Zero",
          "capacity": "10000mAh",
          "solar_panel_power": "7W",
          "waterproof": true
        },
        {
          "id": 17,
          "name": "Yoga Mat",
          "description": "High-quality yoga mat for comfortable workouts.",
          "price": 29.99,
          "image": "https://fakeimg.pl/500x500/99cc99",
          "rating": 4.6,
          "brand": "Liforme",
          "material": "Eco-friendly TPE",
          "thickness": "5mm",
          "color": "Purple"
        },
        {
          "id": 18,
          "name": "Portable Bluetooth Projector",
          "description": "Project your favorite content anywhere with this compact projector.",
          "price": 179.99,
          "image": "https://fakeimg.pl/500x500/ff66cc",
          "rating": 4.3,
          "brand": "Anker",
          "resolution": "720p",
          "connectivity": "Bluetooth, Wi-Fi",
          "battery_life": "3 hours"
        },
        {
          "id": 19,
          "name": "Electric Toothbrush",
          "description": "Advanced electric toothbrush for effective oral care.",
          "price": 69.99,
          "image": "https://fakeimg.pl/500x500/009966",
          "rating": 4.5,
          "brand": "Oral-B",
          "brushing_modes": [
            "Clean",
            "Whitening",
            "Sensitive"
          ],
          "timer": true,
          "color": "Blue"
        },
        {
          "id": 20,
          "name": "Indoor Plant Set",
          "description": "Assortment of low-maintenance indoor plants.",
          "price": 39.99,
          "image": "https://fakeimg.pl/500x500/99cc00",
          "rating": 4.8,
          "brand": "Greenspaces",
          "plants_included": [
            "Snake Plant",
            "Pothos",
            "Succulent"
          ],
          "pot_material": "Ceramic",
          "pot_color": "Assorted"
        },
        {
          "id": 21,
          "name": "Smart Doorbell Camera",
          "description": "Monitor your doorstep with this video doorbell.",
          "price": 149.99,
          "image": "https://fakeimg.pl/500x500/ff9966",
          "rating": 4.7,
          "brand": "Ring",
          "video_resolution": "1080p",
          "field_of_view": "160 degrees",
          "connectivity": "Wi-Fi"
        },
        {
          "id": 22,
          "name": "Electric Standing Desk",
          "description": "Adjustable standing desk for ergonomic workspace setup.",
          "price": 349.99,
          "image": "https://fakeimg.pl/500x500/336699",
          "rating": 4.6,
          "brand": "Vari",
          "adjustable_height": true,
          "max_height": "50 inches",
          "color": "Black"
        },
        {
          "id": 23,
          "name": "Instant Pot",
          "description": "Multi-functional pressure cooker for quick and easy meals.",
          "price": 79.99,
          "image": "https://fakeimg.pl/500x500/996633",
          "rating": 4.4,
          "brand": "Instant Pot",
          "cooking_modes": [
            "Pressure Cook",
            "Slow Cook",
            "Steam"
          ],
          "capacity": "6 quarts",
          "color": "Stainless Steel"
        },
        {
          "id": 24,
          "name": "Outdoor Backpack",
          "description": "Durable backpack for outdoor adventures and travel.",
          "price": 89.99,
          "image": "https://fakeimg.pl/500x500/99cc99",
          "rating": 4.5,
          "brand": "Osprey",
          "capacity": "40 liters",
          "waterproof": true,
          "color": "Green"
        },
        {
          "id": 25,
          "name": "Home Security Camera System",
          "description": "Comprehensive home security camera system with multiple cameras.",
          "price": 299.99,
          "image": "https://fakeimg.pl/500x500/990000",
          "rating": 4.7,
          "brand": "Arlo",
          "number_of_cameras": 4,
          "resolution": "1080p",
          "night_vision": true
        },
        {
          "id": 26,
          "name": "Portable Bluetooth Speaker",
          "description": "Compact speaker for music on the go.",
          "price": 49.99,
          "image": "https://fakeimg.pl/500x500/ffcc00",
          "rating": 4.3,
          "brand": "JBL",
          "output_power": "10W",
          "battery_life": "8 hours",
          "color": "Yellow"
        },
        {
          "id": 27,
          "name": "Cookware Set",
          "description": "Complete set of high-quality cookware for your kitchen.",
          "price": 199.99,
          "image": "https://fakeimg.pl/500x500/336699",
          "rating": 4.6,
          "brand": "Calphalon",
          "pieces_included": 10,
          "material": "Stainless Steel"
        },
        {
          "id": 28,
          "name": "Fitness Resistance Bands Set",
          "description": "Set of versatile resistance bands for home workouts.",
          "price": 29.99,
          "image": "https://fakeimg.pl/500x500/009966",
          "rating": 4.5,
          "brand": "Fit Simplify",
          "levels_of_resistance": [
            "Light",
            "Medium",
            "Heavy"
          ],
          "material": "Latex",
          "color": "Assorted"
        },
        {
          "id": 29,
          "name": "Ergonomic Office Chair",
          "description": "Comfortable and supportive chair for productive work.",
          "price": 249.99,
          "image": "https://fakeimg.pl/500x500/996633",
          "rating": 4.4,
          "brand": "Herman Miller",
          "adjustable_height": true,
          "lumbar_support": true,
          "color": "Black"
        },
        {
          "id": 30,
          "name": "Wireless Charging Stand",
          "description": "Charging stand for wireless charging of devices at a convenient angle.",
          "price": 39.99,
          "image": "https://fakeimg.pl/500x500/ff9933",
          "rating": 4.5,
          "brand": "Belkin",
          "compatibility": "Qi-enabled devices",
          "color": "Silver"
        },
        {
          "id": 31,
          "name": "Drip Coffee Maker",
          "description": "Classic drip coffee maker for brewing your favorite coffee.",
          "price": 49.99,
          "image": "https://fakeimg.pl/500x500/cc9966",
          "rating": 4.3,
          "brand": "Cuisinart",
          "capacity": "12 cups",
          "color": "Stainless Steel"
        },
        {
          "id": 32,
          "name": "Wireless Sport Earbuds",
          "description": "Sweat-resistant earbuds for active workouts.",
          "price": 79.99,
          "image": "https://fakeimg.pl/500x500/336699",
          "rating": 4.6,
          "brand": "Bose",
          "connectivity": "Bluetooth",
          "battery_life": "10 hours",
          "color": "Blue"
        },
        {
          "id": 33,
          "name": "Garden Tool Set",
          "description": "Complete set of gardening tools for tending to your garden.",
          "price": 59.99,
          "image": "https://fakeimg.pl/500x500/99cc99",
          "rating": 4.7,
          "brand": "Fiskars",
          "tools_included": [
            "Trowel",
            "Pruners",
            "Cultivator",
            "Weeder"
          ],
          "material": "Stainless Steel"
        },
        {
          "id": 34,
          "name": "Solar-Powered Outdoor Lights",
          "description": "Set of energy-efficient outdoor lights powered by solar panels.",
          "price": 29.99,
          "image": "https://fakeimg.pl/500x500/ff9966",
          "rating": 4.4,
          "brand": "URPOWER",
          "number_of_lights": 6,
          "light_color": "Warm White",
          "waterproof": true
        },
        {
          "id": 35,
          "name": "Fitness Exercise Ball",
          "description": "Stability ball for core workouts and stretching.",
          "price": 19.99,
          "image": "https://fakeimg.pl/500x500/0099cc",
          "rating": 4.2,
          "brand": "Trideer",
          "size": "65 cm",
          "material": "Anti-burst PVC",
          "color": "Blue"
        },
        {
          "id": 36,
          "name": "Bluetooth Karaoke Microphone",
          "description": "Wireless microphone for karaoke and music enjoyment.",
          "price": 39.99,
          "image": "https://fakeimg.pl/500x500/993366",
          "rating": 4.3,
          "brand": "BONAOK",
          "connectivity": "Bluetooth",
          "color": "Rose Gold"
        },
        {
          "id": 37,
          "name": "Digital Drawing Tablet",
          "description": "High-precision drawing tablet for digital artists.",
          "price": 199.99,
          "image": "https://fakeimg.pl/500x500/ffcc00",
          "rating": 4.6,
          "brand": "Wacom",
          "active_area": "10 x 6 inches",
          "pen_pressure_levels": 8192,
          "connectivity": "USB, Bluetooth"
        },
        {
          "id": 38,
          "name": "Reusable Water Bottle",
          "description": "Eco-friendly water bottle for staying hydrated on the go.",
          "price": 19.99,
          "image": "https://fakeimg.pl/500x500/336699",
          "rating": 4.5,
          "brand": "Hydro Flask",
          "capacity": "32 oz",
          "material": "Stainless Steel",
          "color": "Midnight Black"
        },
        {
          "id": 39,
          "name": "Home Theater Projector",
          "description": "Create a cinematic experience at home with this HD projector.",
          "price": 299.99,
          "image": "https://fakeimg.pl/500x500/99cc99",
          "rating": 4.4,
          "brand": "Epson",
          "resolution": "1080p",
          "brightness": "3000 lumens"
        },
        {
          "id": 40,
          "name": "Cordless Vacuum Cleaner",
          "description": "Powerful cordless vacuum for efficient cleaning.",
          "price": 179.99,
          "image": "https://fakeimg.pl/500x500/009966",
          "rating": 4.7,
          "brand": "Dyson",
          "battery_life": "40 minutes",
          "attachments": [
            "Crevice tool",
            "Soft dusting brush"
          ],
          "color": "Iron"
        },
        {
          "id": 41,
          "name": "Fitness Jump Rope",
          "description": "Adjustable jump rope for cardio workouts.",
          "price": 14.99,
          "image": "https://fakeimg.pl/500x500/ff6600",
          "rating": 4.2,
          "brand": "Survival and Cross",
          "adjustable_length": true,
          "material": "Steel cable",
          "color": "Orange"
        },
        {
          "id": 42,
          "name": "Smart Wi-Fi Plug",
          "description": "Control your devices remotely with this smart plug.",
          "price": 24.99,
          "image": "https://fakeimg.pl/500x500/993366",
          "rating": 4.4,
          "brand": "TP-Link",
          "compatibility": "iOS, Android",
          "voice_control": true,
          "color": "White"
        },
        {
          "id": 43,
          "name": "Bluetooth Keyboard",
          "description": "Wireless keyboard for comfortable typing on various devices.",
          "price": 49.99,
          "image": "https://fakeimg.pl/500x500/cc9966",
          "rating": 4.3,
          "brand": "Logitech",
          "connectivity": "Bluetooth",
          "compatible_devices": [
            "PC",
            "Mac",
            "Tablet"
          ],
          "color": "Gold"
        },
        {
          "id": 44,
          "name": "Resistance Band Set",
          "description": "Set of resistance bands for versatile strength training.",
          "price": 34.99,
          "image": "https://fakeimg.pl/500x500/336699",
          "rating": 4.6,
          "brand": "FITFORT",
          "levels_of_resistance": [
            "Light",
            "Medium",
            "Heavy"
          ],
          "material": "Latex",
          "color": "Assorted"
        },
        {
          "id": 45,
          "name": "Smart Wi-Fi Light Bulb",
          "description": "Control your lighting with this smart LED light bulb.",
          "price": 19.99,
          "image": "https://fakeimg.pl/500x500/99cc99",
          "rating": 4.7,
          "brand": "LIFX",
          "compatibility": "iOS, Android",
          "color_options": [
            "Warm White",
            "Cool White",
            "RGB"
          ],
          "color": "White"
        },
        {
          "id": 46,
          "name": "Wireless Charging Mouse Pad",
          "description": "Mouse pad with built-in wireless charging for your devices.",
          "price": 29.99,
          "image": "https://fakeimg.pl/500x500/ff9966",
          "rating": 4.4,
          "brand": "Logitech",
          "wireless_charging_standard": "Qi",
          "color": "Gray"
        },
        {
          "id": 47,
          "name": "Camping Tent",
          "description": "Spacious tent for outdoor camping adventures.",
          "price": 149.99,
          "image": "https://fakeimg.pl/500x500/0099cc",
          "rating": 4.3,
          "brand": "Coleman",
          "capacity": "6 people",
          "waterproof": true,
          "color": "Blue"
        },
        {
          "id": 48,
          "name": "Smart Home Security System",
          "description": "Complete smart security system for your home.",
          "price": 399.99,
          "image": "https://fakeimg.pl/500x500/993366",
          "rating": 4.7,
          "brand": "SimpliSafe",
          "components_included": [
            "Motion sensor",
            "Door/window sensor",
            "Base station"
          ],
          "connectivity": "Wi-Fi",
          "color": "White"
        },
        {
          "id": 49,
          "name": "Fitness Tracker Smartwatch",
          "description": "Smartwatch with fitness tracking and health monitoring features.",
          "price": 129.99,
          "image": "https://fakeimg.pl/500x500/cc9966",
          "rating": 4.5,
          "brand": "Garmin",
          "activities_tracked": [
            "Steps",
            "Heart rate",
            "Sleep"
          ],
          "waterproof": true,
          "color": "Copper"
        },
        {
          "id": 50,
          "name": "Bluetooth Car Speakerphone",
          "description": "Hands-free car speakerphone for safer driving.",
          "price": 39.99,
          "image": "https://fakeimg.pl/500x500/336699",
          "rating": 4.2,
          "brand": "Jabra",
          "connectivity": "Bluetooth",
          "battery_life": "20 hours",
          "color": "Black"
        }
      ]
  return (
    <div >
    
      <Timer initialHours={0} initialMinutes={59} initialSeconds={59} />

    
      <div className="flex">
      {data.map((item) => (
     
  <div key={item.id} className="item">
    <img src={item.image} alt={item.name} />
    <h2>{item.name}</h2>
    <p>{item.description}</p>
    <span>Price: ${item.price}</span>
    <span>Rating: {item.rating}</span>
    <br />
    <br />
    <button onClick={() => alert(`${item.name} added to cart!`)}>
      Add to Cart
    </button>
</div>
))}
      </div>
    </div>
  );
};

export default Showdata;

