<template>
  <section class="new">
    <div class="new__container">
      <div class="new__offset">
        <div class="filter">
          <h2>Фильтр</h2>
          <ProductCard
            v-for="item in items"
            :key="item.id"
            :name="item.name"
            :category="item.category"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import ProductCard from "../components/ProductCard.vue";

export default {
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    axios.get("http://127.0.0.1:3000/new").then((res) => (this.items = res));
    console.log(this.items);
  },
  components: { ProductCard },
};
</script>

<style lang="scss" scoped></style>
