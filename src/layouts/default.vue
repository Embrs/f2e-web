<script setup>
</script>

<template lang="pug">
#Layout
  .pages-area
    RouterView(v-slot="{ Component }")
      transition(name="page" mode="out-in")
        component(:is="Component")
</template>

<style lang="scss" scoped>
#Layout {

}
</style>
