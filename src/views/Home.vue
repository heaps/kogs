<template>
  <div>
    <div class="page-header">
        <h1>Popular Kogs</h1>
    </div>
    <p class="lead">Kogs are a set of components currently being added to the evolving edtech specifications that allow for the creation of reusable widgets or components in web documents and web applications. The intention behind them is to bring component-based content creation to the World Wide Web.</p>
    <hr>
    <HelloWorld msg="Greetings from HelloWorld.Vue"/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/home/HelloWorld.vue'

export default {
    name: 'home',
    components: {
        HelloWorld
    }
}
</script>
