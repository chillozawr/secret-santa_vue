<template>
  <div class="backgrounds-wrapper">
    <div class="backgrounds">
      <div @click="$store.commit('customization/setNewBackground', 'background: yellow')" class="background back back1"></div>
      <div @click="$store.commit('customization/setNewBackground', 'background: green')" class="background back back2"></div>
      <div @click="$store.commit('customization/setNewBackground', 'background: pink')" class="background back back3"></div>
      <div @click="$store.commit('customization/setNewBackground', 'background: brown')" class="background back back4"></div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'CustomizationPage',
  computed: {
    ...mapState({
      currentBackground: state => state.customization
    })
  }
}
</script>

<style scoped lang="scss">
.backgrounds-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  right: initial;
  bottom: initial;
  transform: translate(-50%, -50%);
  margin: auto;
  padding: 20px;
  background-color: blueviolet;
  border-radius: 10px;
  box-shadow: 1px 1px 6px rgba(0,0,0,0.5);
  .backgrounds {
    background: aquamarine;
    vertical-align: center;
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    .back {
      margin-top: 25px;
      width: 40%;
      height: 40%;
    }
    .back1 {
      background: yellow;
    }
    .back:hover {
      cursor: pointer;
    }
    .back2 {
      background: green;
    }
    .back3 {
      background: pink;
    }
    .back4 {
      background: brown;
    }
  }
}
</style>