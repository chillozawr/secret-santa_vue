<template>
  <div>
    <button @click="resetGame">Reset</button>
    <input
      v-model="playerName"
      type="text"
      @keydown.enter="createPlayer"
    >
    <button @click="createPlayer" >
      add player
    </button>
    <div v-if="players.length">
      <h3>Players:</h3>
      <div
        v-for="player in players"
        :key="player.id"
      >
        {{player.name}}
      </div>
    </div>
    <button @click="startGame">
      Start
    </button>
    <div v-if="bindedPlayers.length">
      <h3>Калибровка игроков: </h3>
      <div
        v-for="player in bindedPlayers"
        :key="player.id">
        {{player.name}} ====> {{player.bindedPerson}}
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: 'GamePage',
  data() {
    return {
      playerName: ''
    }
  },
  computed: {
    ...mapState({
      players: state => state.players.players,
      bindedPlayers: state => state.players.bindedPlayers,
      currentBackground: state => state.customization
    })
  },
  methods: {
    ...mapActions('players', ['addPlayer', 'bindPlayersAct', 'reset']),
    createPlayer() {
      if (this.playerName) {
        this.addPlayer(this.playerName)
        this.playerName = ''
      }
    },
    startGame() {
      this.bindPlayersAct(this.players);
    },
    resetGame() {
      this.reset();
    }
  }
}
</script>

<style scoped lang="scss">

</style>
