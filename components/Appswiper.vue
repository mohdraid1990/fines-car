<template>
  <div class="swipe">
    <h1>Документы</h1>
    <swiper
      ref="swiper"
      :slides-per-view="slidesPerView"
      :space-between="2"
      :loop="true"
      :pagination="{
        clickable: true,
        el: '.swiper-pagination',
        type: 'bullets',
      }"
      navigation
      @swiper="onSwiper"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="slider">
          <div class="text-slider">
            <p>{{ slide.title }}</p>
            <p>{{ slide.text }}</p>
          </div>
          <div class="btn">
            <a href="#">{{ slide.btn }}</a>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-button-prev" @click="goPrevSlide">
        <img src="/public/LEFT.svg" alt="Previous" />
      </div>
      <div class="swiper-button-next" @click="goNextSlide">
        <img src="/public/RIGHT.svg" alt="Next" />
      </div>
    </swiper>
    <div class="bullets">
      <div
        class="active-indicator"
        :class="{ active: swiper && swiper.isBeginning }"
      ></div>
      <div class="indicator" :class="{ active: swiper && swiper.isEnd }"></div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiper: null,
      slidesPerView: this.getSlidesPerView(),
      slides: [
        {
          title: "Лицензионный договор",
          text: "Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке.",
          btn: "Перейти",
        },
        {
          title: "Политика обработки персональных данных",
          text: "Радиус разброса ПГМ составляет до 3 метров и может регулироваться.",
          btn: "Перейти",
        },
        {
          title: "Информация об оплате",
          text: "Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.",
          btn: "Перейти",
        },
      ],
    };
  },
  mounted() {
    window.addEventListener("resize", this.updateSlidesPerView);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateSlidesPerView);
  },
  methods: {
    onSwiper(swiper) {
      this.swiper = swiper;
    },
    goPrevSlide() {
      if (this.swiper) {
        this.swiper.slidePrev();
      }
    },
    goNextSlide() {
      if (this.swiper) {
        this.swiper.slideNext();
      }
    },
    getSlidesPerView() {
      if (typeof window !== "undefined") {
        const width = window.innerWidth;
        if (width < 600) {
          return 1;
        } else if (width >= 600 && width < 1440) {
          return 2;
        } else {
          return 3;
        }
      } else {
        return 3;
      }
    },
    updateSlidesPerView() {
      this.slidesPerView = this.getSlidesPerView();
      if (this.swiper) {
        this.swiper.params.slidesPerView = this.slidesPerView;
        this.swiper.update();
      }
    },
  },
};
</script>

<style lang="scss">
.swiper {
  width: 100%;
}
.swiper-slide {
  width: auto !important;
  height: 450px !important;
}
.swipe {
  margin-top: 90px;
  margin-left: 40px;
}
h1 {
  text-align: center;
}
.slider {
  margin-top: 39px;
  width: 340px;
  height: 450px;
  background-color: #ffffff;
  border: 1px solid #eeeff1;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  cursor: pointer;
}
.swiper-wrapper {
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  align-items: center;
  margin: auto;
}

.text-slider {
  padding-left: 10px;
  p {
    &:first-of-type {
      font-family: "PT Sans", sans-serif;
      font-size: 31px;
      font-weight: 700;
      line-height: 37.2px;
      text-align: left;
      color: #1253a2;
    }
    &:last-of-type {
      font-family: "PT Sans", sans-serif;
      font-size: 18px;
      font-weight: 400;
      line-height: 21.6px;
      text-align: left;
      padding-top: 10px;
      color: #000000;
    }
  }
}
.btn {
  background-color: #0584fe;
  width: 290px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 10px;
  transition: 0.3s all ease;
  &:hover {
    background-color: #433577ee;
  }
  a {
    color: #ffffff;
    font-family: "PT Sans", sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 23.29px;
    text-align: center;
    text-decoration: none;
  }
}
.indicator {
  background: #d9d9d9;
  width: 7px;
  height: 7px;
  border-radius: 50%;
}

.swiper-button-prev,
.swiper-button-next {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}
.swiper-button-prev {
  left: 5px;
}
.swiper-button-next {
  right: 5px;
}
.swiper-button-prev:after,
.swiper-button-next:after {
  display: none;
}
.active-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #007aff;
  margin: 10px;
}

.bullets {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 599px) {
  .swiper-button-prev,
  .swiper-button-next {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    top: 73%;
    transform: translateY(-50%);
    z-index: 10;
  }
  .swiper-button-prev {
    left: 7%;
  }
  .swiper-button-next {
    left: 87%;
  }
}

@media screen and (min-width: 600px) and (max-width: 1439px) {
  .swiper-button-prev,
  .swiper-button-next {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    top: 75%;
    transform: translateY(-50%);
    z-index: 10;
  }
  .swiper-button-prev {
    left: 1%;
  }
  .swiper-button-next {
    left: 96%;
  }
}

@media screen and (min-width: 1440px) and (max-width: 1460px) {
  .swiper-button-prev,
  .swiper-button-next {
    top: 67%;
  }
  .swiper-button-prev {
    left: 11%;
  }
  .swiper-button-next {
    left: 86%;
  }
}

@media screen and (min-width: 1470px) {
  .swiper-button-prev,
  .swiper-button-next {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    top: 65%;
  }
  .swiper-button-prev {
    left: 20%;
  }
  .swiper-button-next {
    left: 78%;
  }
}
</style>
