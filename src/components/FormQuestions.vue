<template>
  <section class="section section__grey">
    <div class="section__content">
      <header>
        <h3 class="heading-3">Остались вопросы? Перезвоним в течение 5 минут</h3>
        <div class="hashtags">
          <span class="hashtag">#быстраяпомощь</span>
          <span class="hashtag">#сервис</span>
          <span class="hashtag">#качество</span>
        </div>
      </header>
      <Form>
        <template v-slot:form-btn>
          <Button class="btn btn--red no-padding">Заказать звонок</Button>
        </template>
      </Form>
    </div>
  </section>
</template>

<script>
import Form from "~/components/Form.vue";

export default {
  components: {
    Form
  }
};
</script>