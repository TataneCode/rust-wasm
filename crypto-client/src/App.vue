<script setup lang="ts">
</script>

<template>
  <div class="page">
    <div class="top">
      <header>
        <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125"/>
        <img alt="Cross" class="logo" src="./assets/cross-circle.svg" width="50" height="50"/>
        <img alt="Rust logo" class="logo" src="./assets/rust-logo-blk.svg" width="125"
             height="125"/>
      </header>
    </div>
    <div class="content">
      <main>
        <router-view/>
      </main>
    </div>
    <div class="bottom">

    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
