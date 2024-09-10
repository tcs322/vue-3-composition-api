<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/todos">Todos</router-link>
  </nav>
  <router-view/>
</template>

<style lang="sass">
@import "./assets/styles/eti.scss"
</style>