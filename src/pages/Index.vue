<template>
  <div class="container">
    <Modal v-if="modalOpen" @toggleModal="toggleModal"/>

    <Header>
      <Navigation @toggleModal="toggleModal"/>
    </Header>

    <Description />

    <FormApplication ref="form" />

    <Conditions />

    <FormQuestions />

    <section class="map">
      <yandex-map
        :settings="yandexSettings"
        :coords="[55.714404, 37.719136]"
        style="width: 100%; height: 60rem; position: absolute;"
        :controls="[]"
      >
        <ymap-marker markerId="1" :coords="[55.714404, 37.719136]" />
      </yandex-map>
      <div class="map__header">Адреса офисов в Москве</div>
    </section>

    <Footer />
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";
import Navigation from "@/components/Navigation.vue";
import Header from "@/components/Header.vue";
import Conditions from "@/components/Conditions.vue";
import Description from "@/components/Description.vue";
import FormApplication from "@/components/FormApplication.vue";
import FormQuestions from "@/components/FormQuestions.vue";
import Footer from "@/components/Footer.vue";
import Modal from '@/components/Modal.vue';

export default {
  components: {
    Navigation,
    Header,
    Description,
    FormApplication,
    FormQuestions,
    Conditions,
    yandexMap,
    ymapMarker,
    Footer,
    Modal
  },
  data: () => {
    return {
      yandexSettings: {
        api:
          "3A6d943a65558c35905c86a4cf36cb2c62c1897927b66ad5a15ada713aad7c1ec6",
        lang: "ru_RU"
      },
      modalOpen: false
    }
  },
  methods: {
    toggleModal() {
      this.modalOpen = !this.modalOpen
    }
  }
};
</script>

  methods: {
    sendRequest() {
      axios.post('http://localhost:3000/api/v1/requests/', {request: {name: 'test', phone: '12345', source: 'zaim-pts'}})
    }
  }
