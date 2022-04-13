<template>
  <main class="main">
    <section class="main-item__container _container">
      <PostItem
        v-for="post in posts"
        :photo="post.urls.small"
        :name="post.user.name"
        :userPhoto="post.user.profile_image.medium"
        :views="post.statistics.views.total"
        :tag="post.user.username"
        :userSrc="post.user.links.html"
        :key="post.id"
      />
      <FooterBlock :countPages="countPages" :pageNumber="pageNumber" />
    </section>
  </main>
</template>

<script>
import PostItem from "@/components/PostItem";
import { mapMutations, mapState } from "vuex";
import FooterBlock from "@/components/FooterBlock";
export default {
  name: "HomeView",
  components: {
    FooterBlock,
    PostItem,
  },
  data: () => ({
    pageNumber: 1,
  }),
  computed: {
    ...mapState(["posts", "countPages"]),
  },
  methods: {
    ...mapMutations(["addPosts", "changeCountPages"]),
  },
  beforeRouteUpdate(page) {
    this.pageNumber = Number(page.params.page);
    fetch(
      `https://api.unsplash.com/users/masoodaslami/photos?client_id=xyNXBOlI_8YShyK9L6ior2QShRLNNx0xPxRlluLyGYg&per_page=8&page=${page.params.page}&stats=true`,
      {
        method: "GET",
      }
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        this.changeCountPages(Math.ceil(data[0].user.total_photos / 8));
        this.addPosts(data);
      });
  },
  created() {
    this.pageNumber = Number(this.$route.params.page);
 
    fetch(
      `https://api.unsplash.com/users/masoodaslami/photos?client_id=xyNXBOlI_8YShyK9L6ior2QShRLNNx0xPxRlluLyGYg&per_page=8&page=${this.$route.params.page}&stats=true`,
      {
        method: "GET",
      }
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        this.changeCountPages(Math.ceil(data[0].user.total_photos / 8));
        this.addPosts(data);
      });
  },
};
</script>
<style lang="scss">
.main {
  display: flex;
  justify-content: center;
  align-items: center;
}
._container {
  overflow: hidden;
  max-width: 1000px;
  margin: 0px auto;
  padding: 0px 20px;
  box-sizing: content-box;
}

.main-item__container {
    padding-bottom: 60px;
}
@media (min-width: 320px) {
  .main-item__container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding-right: 0px;
    padding-left: 0px;
    .main-item {
      padding-right: 0px;
      padding-left: 0px;
      .main-item__img img {
        width: 320px;
        height: 230px;
      }
    }
  }
}

@media (min-width: 480px) {
  .main-item__container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding-right: 20px;
    padding-left: 20px;
    .main-item {
      .main-item__img img {
          width: 440px;
          height: 300px;
      }
    }
  }
}

@media (min-width: 768px) {
  .main-item__container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding-right: 54px;
    padding-left: 54px;
    .main-item:not(:nth-child(2n)) {
      padding-right: 20px;
    }
    .main-item {
      .main-item__img img {
            width: 320px;
            height: 230px;
      }
    }
  }
}

@media (min-width: 1000px) {
  .main-item__container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding-right: 54px;
    padding-left: 54px;
    .main-item:nth-child(odd) {
      padding-right: 10px;
      padding-left: 20px;
    }
    .main-item:nth-child(even) {
      padding-right: 20px;
      padding-left: 10px;
    }
    .main-item {
      .main-item__img img {
          width: 320px;
          height: 230px;
      }
    }
  }
}
</style>
