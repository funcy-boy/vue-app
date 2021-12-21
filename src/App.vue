<template>
  <div>
    <Header></Header>
    <div v-show="$route.meta.show">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>

</template>

<script>

import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
}
</script>

<style>

</style>
