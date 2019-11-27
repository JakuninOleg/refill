<template>
  <div class="modal">
    <div class="modal__content">
      <div class="modal__header">
        <span>Заказать обратный звонок</span>
        <span class="modal__close" @click="toggleModal">x</span>
      </div>

      <div class="modal__body">
        <Form class="form__modal">
          <template v-slot:form-header>
            <h4
              class="heading-4 text-center"
            >Заполните форму и менеджеры свяжутся с Вами в течение 5 минут</h4>
          </template>

          <template v-slot:form-name>
            <input type="text" class="form__name form__input" placeholder="Ваше имя" />
          </template>

          <template v-slot:form-btn>
            <Button class="btn btn--red">Отправить</Button>
          </template>

          <template v-slot:agreement>
            <Checkbox class="form__agreement--modal" />
          </template>

          <template v-slot:form-confirmed>
            <div class="form__submitted-icon"></div>
          </template>

          <template v-slot:form-submitted-message>
            <h4
              class="form__submitted-message heading-4 heading-4--modal text-center"
            >Спасибо за обращение! Менеджеры свяжутся с Вами в течение 5 минут</h4>
          </template>

          <template v-slot:form-submitted-btn>
            <Button class="btn btn--yellow btn--modal" @click="toggleModal">Закрыть</Button>
          </template>

        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "@/components/Form";
import Checkbox from "@/components/Checkbox";

export default {
  components: {
    Form,
    Checkbox
  },
  methods: {
    toggleModal() {
      this.$emit("toggleModal");
    }
  }
};
</script>
