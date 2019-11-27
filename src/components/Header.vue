<template>
  <header class="header">
    <div class="header__inner">
      <slot />
      <div class="header__content">
        <div class="header__content-top">
          <span class="header__text--date">только до 28 декабря</span>
          <span class="header__text">для всех, кто хочет найти лучшее предложение</span>
        </div>
        <h1 class="header__heading">
          Здесь заправляют бесплатно!
        </h1>
        <div class="header__content-bottom">
        <h2 class="header__heading--secondary">
          <span class="header__text--gift">дарим&nbsp;</span>
          <span class="header__text--petrol">до 100 литров бензина&nbsp;</span>
          <span class="header__text--pts">+ деньги под птс</span>
        </h2>
        <Button @click.native="scrollToForm" class="btn header__btn btn--red">
          Получить
        </Button>
        </div>
      </div>
    </div>
    <g-image src="~/assets/images/gauge.png" alt="Спидометр" class="header__image" />
  </header>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  components: {
    Button
  },
  methods: {
    scrollToForm() {
      this.$parent.$refs.form.$el.scrollIntoView({
        block: "center",
        behavior: "smooth"
      });
    }
  }
};
</script>
