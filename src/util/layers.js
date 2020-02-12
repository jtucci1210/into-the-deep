export const layers = {
    "sunlight" : {
        name: "Sunlight zone (Epipelagic Zone)",
        info: "The photic zone of the ocean where corals and plant life exists. This is the limit for most recreational diving and activities.",
        minD: 0,
        maxD: 200,
        colorId: "sunlight",
        creatures: "dolphins, turtles, and tuna."
    },

    "twilight" : {
        name: "Twilight zone (Mesopelagic Zone)",
        info: "Light can be seen above, but below is dark. This zone has the greatest change in temperature as it is where the thermocline exists between the mixing and non-mixing layers.",
        minD: 201,
        maxD: 1000,
        colorId: "twilight",
        creatures: "sharks and swordfish."
    },

    "midnight" : {
        name: "Midnight zone (Bathypelagic Zone)",
        info: "No light penetrates to this zone, keeping it in perpetual darkness. Pressure here is about 400 times that of the surface. This is the zone in which the Titanic rests",
        minD: 1001,
        maxD: 4000,
        colorId: "midnight",
        creatures: "anglerfish, giant squid, and sperm whale."
    },

    "abyssal" : {
        name: "Abyssal zone (Abyssopelagic Zone)",
        info: "The vast majority of the ocean floor is within this zone. Temperature is barely above freezing and the pressure is about 600 times that of the surface.",
        minD: 4001,
        maxD: 6000,
        colorId: "midnight",
        creatures: "dumbo octopus, gulper eel, and anglerfish."
    },

    "trenches" : {
        name: "The Trenches (Hadalpelagic Zone)",
        info: "This is the final part of the ocean, reaching down to the deepest trenches. The sheer pressure of water is too much to allow our sub to dive deeper.",
        minD: 6001,
        maxD: 11000,
        colorId: "midnight",
        creatures: "sponges, worms, and isopods."
    }
}