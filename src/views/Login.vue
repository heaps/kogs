<template>
  <div>
    <div class="page-header">
        <h1>Login View</h1>
    </div>
    <p class="lead">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
    <hr>
    <C1 msg="Greetings from C1 component in @/components/login/c1.vue"/>

  </div>
</template>

<script>
// @ is an alias to /src
import C1 from '@/components/login/c1.vue'

export default {
    name: 'login',
    components: {
        C1
    }
}
</script>
