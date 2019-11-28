<template>
  <form class="form" @submit.prevent="submit">
    <template v-if="!submitted">
      <slot name="form-header" />
      <slot name="form-name" />
      <label class="label">
        <InputPhone />Телефон
      </label>
      <slot name="form-btn" />
      <slot name="agreement" />
    </template>
    <template v-else>
      <slot name="form-confirmed" />
      <slot name="form-submitted-message" />
      <slot name="form-submitted-btn" />
    </template>
  </form>
</template>

<script>
import axios from 'axios'

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
    },
    name() {
      return this.$store.getters.name
    },
    phone() {
      return this.$store.getters.phone
    }
  },
  methods: {
    submit() {
      // this.$store.dispatch("submitForm");
      axios.post('http://localhost:3000/api/v1/requests/', {request: {name: this.name, phone: this.phone, source: 'zaim-pts'}}).then(response => {
        console.log(response)
      })
    }
  }
};
</script>