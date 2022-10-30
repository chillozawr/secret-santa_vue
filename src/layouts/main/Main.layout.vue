<template>
  <div class="main-section" v-bind:style=currentBackground>
    <navigation-header
      :link-name="linkName"
      :link-path="linkPath"
    />
    <router-view />
  </div>
</template>

<script>
import NavigationHeader from "@/components/header/NavigationHeader";
import {mapState} from "vuex";

export default {
  name: 'MainLayout',
  components: {
    NavigationHeader
  },
  data() {
    return {
      linkName: '',
      linkPath: ''
    }
  },
  created() {
    this.setHeaderData(this.$route.meta.name, this.$route.meta.path)
  },
  beforeUpdate() {
    this.setHeaderData(this.$route.meta.name, this.$route.meta.path)
  },
  computed: {
    ...mapState({
      currentBackground: state => state.customization.currentBackground
    })
  },
  methods: {
    setHeaderData(name, path) {
      this.linkName = name
      this.linkPath = path
    }
  }
}
</script>

<style scoped lang="scss">
  .main-section {
    height: 1000px;
  }
</style>