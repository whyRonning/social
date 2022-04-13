<template>
  <article class="main-item">
    <div class="main-item__author">
      <div class="main-item__author-icon">
        <img :src="userPhoto" alt="" />
      </div>
      <div class="main-item__author-text">
        <div class="main-item__name">
          <a :href="userSrc">{{ name }}</a>
        </div>
        <div class="main-item__tag">@{{ tag }}</div>
      </div>
    </div>
    <div class="main-item__img _ibg">
      <img :src="photo" alt="" />
    </div>
    <div class="main-item__views">
      <div class="main-item__count">{{ views }}</div>
      <div class="main-item__icon">
        <img src="../assets/Eye.png" alt="" />
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "PostItem",
  props: {
    photo: String,
    name: String,
    userPhoto: String,
    views: Number,
    tag: String,
    userSrc: String,
  },
};
</script>

<style lang="scss" scoped>
.main-item__author {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  .main-item__author-icon {
    padding-right: 10px;
    img {
      border-radius:50px;
    }
  }
  .main-item__name {
    padding-bottom: 3px;
    padding-left: 3px;
    color: #333333;
    font-weight: 700;
    a {
      color: #333333;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .main-item__tag {
    color: #8d8d8d;
  }
}
.main-item__views {
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 8px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.main-item__count {
  color: #8d8d8d;
  font-weight: 700;
  line-height: 14px;
}

.main-item__icon {
  margin-left: 5px;
}
@media (min-width: 320px) {
  .main-item {
    padding-right: 0px;
    padding-left: 0px;
  }
  .main-item__container {
    padding-right: 0px;
    padding-left: 0px;
  }
  .main-item__img {
    img {
      width: 320px;
      height: 230px;
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
  }
  .main-item__img {
    img {
      width: 440px;
      height: 300px;
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
  }
  .main-item:not(:nth-child(2n)) {
    padding-right: 20px;
  }
  .main-item__img {
    img {
      width: 320px;
      height: 230px;
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
  }
  .main-item:nth-child(odd) {
    padding-right: 10px;
    padding-left: 20px;
  }
  .main-item:nth-child(even) {
    padding-right: 20px;
    padding-left: 10px;
  }
  .main-item__img {
    img {
      width: 320px;
      height: 230px;
    }
  }
}
</style>
