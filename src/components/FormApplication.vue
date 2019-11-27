<template>
  <section class="section section__grey">
    <div class="section__content">
      <header>
        <h3 class="heading-3">Быстрое получение денег под Залог ПТС</h3>
        <div class="hashtags">
          <span class="hashtag">#простополучить</span>
          <span class="hashtag">#моментальноденьги</span>
          <span class="hashtag">#займденег</span>
        </div>
      </header>
      <article>
        <div class="form-application__step">
          <span class="form-application__step-number">1</span>
          <span
            class="form-application__step-text"
          >Отправьте заявку и получите предварительное одобрение по телефону</span>
        </div>
        <Form :class="{'form--flex': submitted}">
          <template v-slot:form-name>
            <label class="label"><input type="text" class="form__name form__input" placeholder="Ваше имя" />Имя</label>
          </template>
          <template v-slot:form-btn>
            <Button class="btn btn--red form-application__button">Отправить заявку</Button>
          </template>
          <template v-slot:agreement>
            <Checkbox class="label__agreement--application" />
          </template>
          <template v-slot:form-confirmed>
            <div class="form__submitted-icon form__submitted-icon--left"></div>
          </template>

          <template v-slot:form-submitted-message>
            <h4
              class="heading-4"
            >Спасибо за обращение! Менеджеры свяжутся с Вами в течение 5 минут</h4>
          </template>
        </Form>
        <div class="form-application__step">
          <span class="form-application__step-number">2</span>
          <span
            class="form-application__step-text"
          >Приезжайте в офис для оценки авто и заключения договора</span>
        </div>
        <div class="form-application__step">
          <span class="form-application__step-number">3</span>
          <span class="form-application__step-text">Получайте деньги и подарочную карту Лукойл</span>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import Form from "~/components/Form.vue";
import Checkbox from "~/components/Checkbox.vue";

export default {
  components: {
    Form,
    Checkbox
  },
  computed: {
    submitted() {
      return this.$store.getters.submitted;
    }
  }
};
</script>
