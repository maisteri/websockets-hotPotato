const PORT = 3000
const MAX_TIME = 30
const HANDS_BURNED = 5
const CLIENT = {
  MESSAGE: {
    NEW_USER: 'NEW_USER',
    PASS_POTATO: 'PASS_POTATO',
    HANDS_BURNED: 'HANDS_BURNED',
  },
}
const SERVER = {
  MESSAGE: {
    PLAYER_ASSIGNMENT: 'PLAYER_ASSIGNMENT',
    GAME_FULL: 'GAME_FULL',
  },
  BROADCAST: {
    COUNTDOWN: 'COUNTDOWN',
    NEW_POTATO_HOLDER: 'NEW_POTATO_HOLDER',
    GAME_OVER: 'GAME_OVER',
  },
}

// This check allows the module to be used in the client and the server
if (typeof module !== 'undefined' && module.exports) {
  module.exports = exports = {
    PORT,
    MAX_TIME,
    HANDS_BURNED,
    CLIENT,
    SERVER,
  }
}

