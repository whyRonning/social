<template>
  <footer class="footer-nav">
    <div class="footer-nav_container _container">
      <nav
        class="footer-nav__menu"
        v-if="countPages > 6 && pageNumber > 3 && pageNumber < countPages - 2"
      >
        <ul class="footer-nav__menu__list">
          <PageTitle :pageNumber="pageNumber" :number="1" />
          <p class="footer-nav__menu__list__skip">...</p>
          <PageTitle :pageNumber="pageNumber" :number="pageNumber - 1" />
          <PageTitle :pageNumber="pageNumber" :number="pageNumber" />
          <PageTitle :pageNumber="pageNumber" :number="pageNumber + 1" />
          <p class="footer-nav__menu__list__skip">...</p>
          <PageTitle :pageNumber="pageNumber" :number="countPages" />
        </ul>
      </nav>
      <nav
        class="footer-nav__menu"
        v-else-if="countPages > 5 && pageNumber < 4"
      >
        <ul class="footer-nav__menu__list">
          <PageTitle :pageNumber="pageNumber" :number="1" />
          <PageTitle :pageNumber="pageNumber" :number="2" />
          <PageTitle :pageNumber="pageNumber" :number="3" />
          <PageTitle :pageNumber="pageNumber" :number="4" />
          <p class="footer-nav__menu__list__skip">...</p>
          <PageTitle :pageNumber="pageNumber" :number="countPages" />
        </ul>
      </nav>
      <nav
        class="footer-nav__menu"
        v-else-if="countPages > 5 && pageNumber + 2 >= countPages"
      >
        <ul class="footer-nav__menu__list">
          <PageTitle :pageNumber="pageNumber" :number="1" />
          <p class="footer-nav__menu__list__skip">...</p>
          <PageTitle :pageNumber="pageNumber" :number="countPages - 3" />
          <PageTitle :pageNumber="pageNumber" :number="countPages - 2" />
          <PageTitle :pageNumber="pageNumber" :number="countPages - 1" />
          <PageTitle :pageNumber="pageNumber" :number="countPages" />
        </ul>
      </nav>
      <nav class="footer-nav__menu" v-else>
        <ul class="footer-nav__menu__list">
          <PageTitle
            v-for="numOfPage in countPages"
            :pageNumber="pageNumber"
            :number="numOfPage"
            :key="numOfPage"
          />
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
import PageTitle from "@/components/PageTitle";

export default {
  name: "FooterBlock",
  props: {
    countPages: Number,
    pageNumber: Number,
  },
  components: {
    PageTitle,
  },
};
</script>

<style lang="scss" scoped>
.footer-nav {
  position: fixed;
  bottom: 0;
  min-height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000;
  opacity: 0.9;
}

.footer-nav__menu__list {
  display: flex;
  justify-content: center;
  align-items: center;
  .footer-nav__menu__list__skip {
    color:white
  }
}
</style>
