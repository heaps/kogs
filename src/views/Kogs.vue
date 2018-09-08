<template>
  <div>
    <div class="page-header">
        <h1>Kogs View</h1>
    </div>
    <p class="lead">ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    <hr>
    <C1 msg="Greetings from C1 component in @/components/kogs/c1.vue"/>

  </div>
</template>

<script>
// @ is an alias to /src
import C1 from '@/components/kogs/c1.vue'

export default {
    name: 'kogs',
    components: {
        C1
    }
}
</script>
