export const layers = {
    sunlight = {
        name: "Sunlight zone (Epipelagic Zone)",
        minD: 0,
        maxD: 200,
        creatures: ["dolphins", "turtles", "tuna"]
    },

    twilight = {
        name: "Twilight zone (Mesopelagic Zone)",
        minD: 201,
        maxD: 1000,
        creatures: ["sharks", "swordfish"]
    },

    midnight = {
        name: "Midnight zone (Bathypelagic Zone)",
        minD: 1001,
        maxD: 4000,
        creatures: ["anglerfish", "giant squid", "sperm whale"]
    },

    abyssal = {
        name: "Abyssal zone (Abyssopelagic Zone)",
        minD: 4001,
        maxD: 6000,
        creatures: ["dumbo octopus", "gulper eel", "anglerfish"]
    },

    trenches = {
        name: "The Trenches (Hadalpelagic Zone)",
        minD: 6001,
        maxD: 11000
    }
}