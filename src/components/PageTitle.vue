<template>
  <li class="footer-nav__menu__item">
    <router-link :class="titleClass" :to="'/' + number">
      {{ number }}
    </router-link>
  </li>
</template>
<script>
export default {
  name: "PageTitle",
  props: {
    number: Number,
    pageNumber: Number,
  },
  computed: {
    titleClass() {
      return {
        selected: this.number === this.pageNumber,
        "footer-nav__menu__link": true,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.footer-nav__menu__item {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  text-align: center;
  .footer-nav__menu__link {
    color: #ffffff;
  }
  .selected {
    font-size: 15px;
    font-weight: 700;
  }
}
</style>
