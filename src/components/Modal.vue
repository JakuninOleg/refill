<template>
  <div class="modal">
    <div class="modal__content">
      <Form>
        <template v-slot:form-name>
          <input type="text" class="form__name form__input" placeholder="Ваше имя" />
        </template>
        <template v-slot:form-btn>
          <Button class="btn btn--red no-padding">Отправить</Button>
        </template>
      </Form>
    </div>
  </div>
</template>

<script>
import Form from "@/components/Form";

export default {
  components: {
    Form
  }
};
</script>