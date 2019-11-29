<template>
  <label class="label label__agreement">
    <span class="form__agreement">
      <input v-model="checked" type="checkbox" class="form__checkbox" required="true" />
      <span>
        <span
          class="grey-dark checkbox-span"
        >Нажимая кнопку, вы даете свое согласие на обработку и хранение своих&nbsp;</span>
        <span>
          <a
            class="hyperlink"
            href="https://zdeslegko.ru/static/documents/politics.pdf"
            target="blank"
          >персональных данных.</a>
        </span>
      </span>
    </span>Подтверждение
  </label>
</template>

<script>
export default {
  data: () => {
    return {
      checked: true
    };
  }
};
</script>
