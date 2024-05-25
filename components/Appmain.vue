<template>
  <main>
    <div class="container">
      <div class="content-main">
        <div class="title">
          <h1>Проверьте штрафы и зарегистрируйтесь в 1 клик</h1>
        </div>
        <form @submit.prevent="handleSubmit">
          <div class="form-1">
            <div :class="['numb-car', { error: errors.carNumber }]">
              <label for="carNumber">Номер автомобиля</label>
              <input
                type="text"
                id="carNumber"
                v-model="form.carNumber"
                @focus="clearError('carNumber')"
              />
            </div>

            <div :class="['dist', { error: errors.region }]">
              <label for="region">Регион</label>
              <input
                type="text"
                id="region"
                v-model="form.region"
                @focus="clearError('region')"
              />
            </div>
          </div>

          <div class="registration" :class="{ error: errors.registration }">
            <label for="registration">Свидетельство о регистрации ТС </label>
            <input
              type="text"
              id="registration"
              v-model="form.registration"
              @focus="clearError('registration')"
            />
          </div>

          <div class="service">
            <button type="submit" class="btn-1">
              Проверить штрафы <img src="/public/arrow-right.svg" alt="" />
            </button>
            <a class="btn-2" href="https://www.youtube.com/">
              <img src="/public/youtube.svg" alt="" /> О сервисе
              <span>(1 мин. 20 сек)</span>
            </a>
          </div>

          <div class="text-1">
            <p>
              Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки
              персональных данных и принимаете оферту
            </p>
          </div>

          <div class="images">
            <img src="/public/image 2.png" alt="" />
          </div>
        </form>

        <div v-if="submitted" class="notification">
          Данные были отправлены успешно!
        </div>
      </div>
    </div>
    <div class="text-2">
      <h1>Плюсы использования сервиса «Компас» для анализа штрафов</h1>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      form: {
        carNumber: "",
        region: "",
        registration: "",
      },
      errors: {
        carNumber: false,
        region: false,
        registration: false,
      },
      submitted: false,
    };
  },
  methods: {
    handleSubmit() {
      this.errors = {
        carNumber: !this.form.carNumber,
        region: !this.form.region,
        registration: !this.form.registration,
      };

      if (
        !this.errors.carNumber &&
        !this.errors.region &&
        !this.errors.registration
      ) {
        this.submitted = true;
        // Here you can also add the logic to actually submit the form data.
      }
    },
    clearError(field) {
      this.errors[field] = false;
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  margin-top: 50px;
  margin-right: 10px;
  position: relative;

  .container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .title {
    width: 620px;
    height: 98px;
    margin-left: 40px;

    h1 {
      font-family: PT Sans;
      font-size: 41px;
      font-weight: 700;
      line-height: 49.2px;
      text-align: left;
      color: #000000;
    }
  }

  .form-1 {
    display: flex;
    margin-top: 20px;
    align-items: center;
    gap: 25px;
    margin-left: 45px;
    flex-wrap: wrap;

    .numb-car,
    .dist {
      display: flex;
      flex-direction: column;

      label {
        font-family: "PT Sans", sans-serif;
        font-size: 12px;
        font-weight: 400;
        line-height: 14.4px;
        margin-bottom: 5px;
      }

      input {
        height: 40px;
        border: 1px solid #bcbcbc;
        border-radius: 5px;
        outline: none;
        padding: 15px;
        transition: border-color 0.3s, box-shadow 0.3s;

        &:focus {
          border-color: #0584fe;
          box-shadow: 0 0 5px rgba(0, 132, 254, 0.5);
        }
      }

      &.error input {
        border-color: red;
      }
    }

    .numb-car {
      input {
        width: 320px;
      }
    }

    .dist {
      input {
        width: 213px;
      }
    }
  }

  .registration {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    margin-left: 45px;

    label {
      font-family: "PT Sans", sans-serif;
      font-size: 12px;
      font-weight: 400;
      line-height: 14.4px;
      margin-bottom: 5px;
    }

    input {
      width: 563px;
      height: 40px;
      border: 1px solid #bcbcbc;
      border-radius: 5px;
      outline: none;
      padding: 15px;
      transition: border-color 0.3s, box-shadow 0.3s;

      &:focus {
        border-color: #0584fe;
        box-shadow: 0 0 5px rgba(0, 132, 254, 0.5);
      }
    }

    &.error input {
      border-color: red;
    }
  }

  .service {
    padding-top: 15px;
    display: flex;
    align-items: center;
    margin-left: 47px;
    gap: 10px;

    .btn-1 {
      display: flex;
      gap: 10px;
      width: 210px;
      height: 45px;
      background-color: #0584fe;
      border: none;
      border-radius: 5px;
      font-family: PT Sans;
      font-size: 18px;
      font-weight: 400;
      line-height: 23.29px;
      transition: 0.3s all ease;
      color: #ffffff;
      cursor: pointer;
      align-items: center;
      justify-content: center;

      img {
        padding-top: 4px;
      }

      &:hover {
        background-color: #37475794;
      }
    }

    .btn-2 {
      width: 258px;
      height: 45px;
      border: 1px solid #0584fe;
      border-radius: 5px;
      font-family: PT Sans;
      font-size: 18px;
      font-weight: 400;
      line-height: 23.29px;
      transition: 0.3s all ease;
      background-color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      color: #000000;
      cursor: pointer;

      &:hover {
        background-color: #5392d188;
        color: #ffffff;
      }

      span {
        font-family: PT Sans;
        font-size: 15px;
        font-weight: 400;
        line-height: 19.41px;
        text-align: left;
        color: #1253a2;
      }
    }
  }

  .text-1 {
    width: 563px;
    height: 38px;
    margin-left: 47px;
    margin-top: 15px;

    p {
      font-family: PT Sans;
      font-size: 13px;
      font-weight: 400;
      line-height: 15.6px;
      text-align: left;
      color: #8f8f8f;
    }
  }

  .images {
    position: absolute;
    top: 0%;
    right: 20%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .text-2 {
    text-align: center;
    margin-top: 50px;

    p {
      font-family: PT Sans;
      font-size: 34px;
      font-weight: 700;
      line-height: 40.8px;
      text-align: left;
      color: #000000;
    }
  }

  .notification {
    margin-top: 20px;
    font-family: PT Sans;
    font-size: 16px;
    color: green;
    text-align: center;
  }
}

@media screen and (min-width: 340px) and (max-width: 550px) {
  .container {
    max-width: 380px;
  }

  main .images {
    display: none;
  }

  main .title {
    width: 350px;
    margin-left: 18px;

    h1 {
      font-size: 26px;
    }
  }

  .form-1 {
    width: 350px;
    margin-left: 27px !important;

    .numb-car {
      input {
        width: 280px !important;
      }
    }

    .dist {
      input {
        width: 280px !important;
      }
    }
  }
  main .registration[data-v-db4c8f18] {
    margin-left: 27px !important;
  }
  main .registration input[data-v-db4c8f18] {
    width: 280px;
  }

  main .service[data-v-db4c8f18] {
    padding-top: 21px;
    margin-left: -7px;
    gap: 16px;
    width: 350px;
    flex-direction: column;
  }

  main .text-1[data-v-db4c8f18] {
    width: 350px;
    height: 38px;
    margin-left: 10px;
  }
}

@media screen and (min-width: 600px) and (max-width: 850px) {
  .container {
    max-width: 720px;
  }

  main .images {
    display: none;
  }
}

@media screen and (min-width: 900px) and (max-width: 1200px) {
  main .images {
    top: 19%;
    right: 1%;
    width: 380px;
  }
}

@media screen and (min-width: 1300px) and (max-width: 1500px) {
  main .images {
    right: 9%;
  }
}
</style>
