<template>
  <form class="form" @submit.prevent="submit">
    <template v-if="!submitted">
      <slot name="form-header" />
      <slot name="form-name" />
      <InputPhone />
      <slot name="form-btn" />
      <slot name="agreement" />
    </template>
    <template v-else>
      <slot name='form-confirmed'/>
      <slot name='form-submitted-message'/>
      <slot name='form-submitted-btn'/>
    </template>
  </form>
</template>

<script>
import Button from "~/components/Button.vue";
import InputPhone from "~/components/InputPhone.vue";

export default {
  components: {
    Button,
    InputPhone
  },
  data: () => {
    return {
      checked: true
    };
  },
  computed: {
    submitted() {
      return this.$store.getters.submitted;
    }
  },
  methods: {
    submit() {
      this.$store.dispatch("submitForm");
    }
  }
};
</script>