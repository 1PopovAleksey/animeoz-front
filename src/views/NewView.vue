<template>
  <section class="new">
    <div class="new__container">
      <div class="new__offset">
        <div class="filter">
          <h2>Фильтр</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Naming",
          catagery: "cup",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
