<template>
  <section class="section conditions">
    <div class="section__content">
      <h2 class="heading-3">Условия финансирования</h2>
      <div class="hashtags">
        <span class="hashtag">#деньгивыгодно</span>
        <span class="hashtag">#лучшее</span>
        <span class="hashtag">#деньгиподавто</span>
      </div>
      <div class="conditions__icons">
        <div class="conditions__icons-item">
          <span class="conditions__icon-box">
            <Passport clas="conditions__icon" />
          </span>
          <p class="conditions__text">Гражданство РФ, возраст 21–70 лет</p>
        </div>
        <div class="conditions__icons-item">
          <span class="conditions__icon-box">
            <Calendar clas="conditions__icon" />
          </span>
          <p class="conditions__text">Срок – до 36 месяцев</p>
        </div>
        <div class="conditions__icons-item">
          <span class="conditions__icon-box">
            <Accept clas="conditions__icon" />
          </span>
          <p class="conditions__text">Досрочное погашение без переплаты и штрафов</p>
        </div>
        <div class="conditions__icons-item">
          <span class="conditions__icon-box">
            <Car clas="conditions__icon" />
          </span>
          <p class="conditions__text">Год выпуска авто – не старше 15 лет, регистрация РФ</p>
        </div>
        <div class="conditions__icons-item">
          <span class="conditions__icon-box">
            <Document clas="conditions__icon" />
          </span>
          <p
            class="conditions__text"
          >Документы для оформления: паспорт, СТС, ПТС, нотариальная доверенность РФ (если не собственник)</p>
        </div>
        <div class="conditions__icons-item">
          <span class="conditions__icon-box">
            <Crash clas="conditions__icon" />
          </span>
          <p
            class="conditions__text"
          >Состояние автомобиля – без сильных повреждений, технически исправным</p>
        </div>
      </div>
    </div>
    <g-image src="~/assets/images/car.png" alt="Автомобиль" class="conditions__image" />
  </section>
</template>

<script>
import Accept from "@/assets/icons/accept.svg";
import Calendar from "@/assets/icons/calendar.svg";
import Car from "@/assets/icons/car.svg";
import Crash from "@/assets/icons/crash.svg";
import Document from "@/assets/icons/document.svg";
import Passport from "@/assets/icons/passport.svg";

export default {
  components: {
    Accept,
    Calendar,
    Car,
    Crash,
    Document,
    Passport
  }
};
</script>
