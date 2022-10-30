<template>
  <div class="header">
    <h1 class="header__title">
      Secret Santa
    </h1>
    <router-link :to="linkPath">
      <span class="header__link">
        {{ linkName }}
      </span>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'NavigationHeader',
  props: {
    linkName: {
      type: String
    },
    linkPath: {
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-around;
  &__link {
    text-transform: uppercase;
  }
}
</style>