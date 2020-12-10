<template>
  <div class="app">
    <div class="sidenav">
      <router-link to="/" :class="{ active: currentRoute === 'InputView' }"
        >Input
      </router-link>
      <router-link to="/positives" :class="{ active: currentRoute === 'PositivesView' }"
        >Upvotes</router-link
      >
      <router-link to="/negatives" :class="{ active: currentRoute === 'NegativesView' }"
        >Downvotes</router-link
      >
    </div>
    <router-view class="main" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'App',
  computed: {
    currentRoute(): string {
      return this.$route.name ? this.$route.name : ''
    },
  },
})
</script>

<style lang="scss">
@import '@/styles/variables.scss';
html,
body {
  margin: 0;
  background-color: rgb(240, 240, 240);
}
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .sidenav {
    height: 100%;
    width: 160px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    padding-top: 1rem;

    .active {
      color: $color-primary;
    }
  }

  .sidenav a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 25px;
    color: $color-secondary;
    display: block;
    text-align: left;
  }

  .sidenav a:hover {
    color: $color-primary;
  }

  .main {
    margin-left: 160px;
    padding: 0px 10px;
  }

  @media screen and (max-height: 450px) {
    .sidenav {
      padding-top: 15px;
    }
    .sidenav a {
      font-size: 18px;
    }
  }
}
</style>
