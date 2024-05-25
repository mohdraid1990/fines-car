<template>
  <div class="container">
    <div class="cards">
      <div class="card" v-for="(item, index) in items" :key="index">
        <div class="img-card">
          <img :src="item.image" :alt="item.alt" />
        </div>
        <div class="text-card">
          <p>{{ item.title }}</p>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          image: "/infinty.svg",
          alt: "#",
          title: "Неограниченый автопарк",
          description: "Можно добавить неограниченное кол-во машин и водителей",
        },
        {
          image: "/img-card-2.svg",
          alt: "#",
          title: "Сокращение затрат до 50%",
          description:
            "Максимально быстро узнаете о штрафах в автоматическом режиме, тем самым у вас есть время оплатить по скиدке",
        },
        {
          image: "/img-card-3.svg",
          alt: "#",
          title: "Безопасность",
          description:
            "Данные передаются в зашифрованном виде, они доступны только получателю",
        },
        {
          image: "/rings.svg",
          alt: "Уведомление о погашении",
          title: "Уведомление о погашении",
          description:
            "Мы оповестим вас о том, что штраф был погашен وсоответствующая запись создана в ГИС ГМП",
        },
        {
          image: "/clander.svg",
          alt: "Квитанция об оплате",
          title: "Квитанция об оплате",
          description:
            "После совершения оплаты банковской картой на Вашу электронную почту придет квитанция об успешной оплате.",
        },
        {
          image: "/download.svg",
          alt: "Все история сохраняется по каждой машине",
          title: "Все история сохраняется по каждой машине",
          description:
            "Вся история штрафов сохраняется по машине и водителю, позволяет анализировать статистику по штрафам",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 20px;
  margin-top: 20px;
  .card {
    margin: 10px;
    background-color: #fbfcfd;
    border-radius: 10px;
    text-align: center;
    width: 352px;
    display: flex;
    align-items: center;
    border: 1px solid #eeeff1;
    height: 151px;
    padding-bottom: 20px;
    .img-card {
      padding-left: 20px;
      padding-top: 20px;
    }
    .text-card {
      padding-left: 20px;
      p:first-of-type {
        font-family: "PT Sans";
        font-size: 18px;
        font-weight: 700;
        line-height: 21.6px;
        color: #1253a2;
        padding-bottom: 10px;
        text-align: left;
      }
      p:last-of-type {
        font-family: "PT Sans";
        font-size: 15px;
        font-weight: 400;
        line-height: 18px;
        color: #000000;
        text-align: left;
        width: 247.37px;
        height: 36px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .card {
    width: calc(50% - 20px);
  }
}
@media screen and (max-width: 480px) {
  .card {
    width: calc(50% - 20px);
  }
}
</style>
