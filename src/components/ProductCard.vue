<template>
  <div>
    <h3>{{ name }}</h3>
    <p>{{ category }}</p>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: { name: String, category: String },
};
</script>

<style lang="scss" scoped></style>
