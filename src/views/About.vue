<template>
  <div>
    <div class="page-header">
        <h1>About View</h1>
    </div>
    <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <hr>
    <C1 msg="Greetings from C1 component in @/components/about/c1.vue"/>

  </div>
</template>

<script>
// @ is an alias to /src
import C1 from '@/components/about/c1.vue'

export default {
    name: 'about',
    components: {
        C1
    }
}
</script>
