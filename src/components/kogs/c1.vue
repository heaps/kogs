<template>
  <div>
    <h1>Kogs Component</h1>
    <p class="text-muted">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'ComponentOne',
  props: {
    msg: String
  }
}
</script>