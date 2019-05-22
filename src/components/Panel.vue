<script>
  export default {
    props: {
      title: {
        type: String
      }
    }
  };
</script>


<template>
  <div>
    <h2>{{ title }}</h2>
    <slot/>
  </div>
</template>
