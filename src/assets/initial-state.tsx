export const initialState = {
  player: {
    health: 100,
    attack: 2,
    defense: 3,
    inventory: [],
    abilities: [],
  },
  monsters: {
    goblin: {
      name: "Goblin",
      health: 30,
      attack: 5,
    },
    dragon: {
      name: "Dragão",
      health: 300,
      attack: 25,
    },
  },
  currentScene: "start",
  messages: [
    {
      sender: "narrator",
      text: "Você é Alex, um jovem explorador do planeta Terra.",
    },
  ],
};
