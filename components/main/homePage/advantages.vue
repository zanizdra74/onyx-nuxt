<template>
  <section id="section-advantages" class="section-main">
    <h1>ПРЕИМУЩЕСТВА</h1>
    <div id="container-icons-advantages">
      <div id="low-consumption" class="item-icons-advantages" href="#">
        <div class="container-icon">
          <img class="icon-advantage" src="~/assets/icon/advantages/lowConsumption.png" alt="low consumption">
        </div>
        <div class="description-advantage">Самое низкое потребление электроэнергии в режиме полимеризации среди всех производителей</div>
      </div>
      <div id="uniform-consumption" class="item-icons-advantages" href="#">
        <div class="container-icon">
          <img class="icon-advantage" src="~/assets/icon/advantages/uniformConsumption.png" alt="uniform consumption">
        </div>
        <div class="description-advantage">Равномерное распределение воздушных потоков для минимального перепада температуры</div>
      </div>
      <div id="oven-acceleration" class="item-icons-advantages" href="#">
        <div class="container-icon">
          <img class="icon-advantage" src="~/assets/icon/advantages/ovenAcceleration.png" alt="oven acceleration">
        </div>
        <div class="description-advantage">Разгон печи с 10ºС до 200ºС - 25мин. Последующие циклы - 15мин.</div>
      </div>
      <div id="furnace-frame" class="item-icons-advantages" href="#">
        <div class="container-icon">
          <img class="icon-advantage" src="~/assets/icon/advantages/furnaceFrame.png" alt="furnace frame">
        </div>
        <div class="description-advantage">Каркас печи изготавливается только из нержавеющей стали.</div>
      </div>
      <div id="payback-period" class="item-icons-advantages" href="#">
        <div class="container-icon">
          <img class="icon-advantage" src="~/assets/icon/advantages/paybackPeriod.png" alt="payback period">
        </div>
        <div class="description-advantage">Срок окупаемости оборудования от 6 месяцев до 1 года!!!</div>
      </div>
      <div id="filtration-system" class="item-icons-advantages" href="#">
        <div class="container-icon">
          <img class="icon-advantage" src="~/assets/icon/advantages/filtrationSystem.png" alt="filtration system">
        </div>
        <div class="description-advantage">Самая эффективная система очистки фильтропатронов с применением итальянских клапанов и сопел Лаваля.</div>
      </div>
      <div id="ventilation-system" class="item-icons-advantages" href="#">
        <div class="container-icon">
          <img class="icon-advantage" src="~/assets/icon/advantages/ventilationSystem.png" alt="ventilation system">
        </div>
        <div class="description-advantage">Циркуляционные вентиляторы из нержавеющей стали с совершенной турбо улиткой собственной разработки</div>
      </div>
      <div id="technical-support" class="item-icons-advantages" href="#">
        <div class="container-icon">
          <img class="icon-advantage" src="~/assets/icon/advantages/technicalSupport.png" alt="technical support">
        </div>
        <div class="description-advantage">Обучение, техническая поддержка и послегарантийное обслуживание.</div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "advantages"
    }
</script>

<style scoped>
  #container-icons-advantages{
    display: grid;
    grid-template-areas:
      'lowConsumption uniformConsumption ovenAcceleration furnaceFrame'
      'paybackPeriod filtrationSystem ventilationSystem technicalSupport';
    grid-auto-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: 1fr 1fr;
    height: 72%;
  }
  .item-icons-advantages{
    text-align: center;
  }
  #furnace-frame{
    grid-area: furnaceFrame;

  }
  #low-consumption{
    grid-area: lowConsumption;
  }
  #uniform-consumption{
    grid-area: uniformConsumption;
  }
  #oven-acceleration{
    grid-area: ovenAcceleration;
  }
  #furnace-frame{
    grid-area: furnaceFrame;
  }
  #payback-period{
    grid-area: paybackPeriod;
  }
  #filtration-system{
    grid-area: filtrationSystem;
  }
  #ventilation-system{
    grid-area: ventilationSystem;
  }
  #technical-support{
    grid-area: technicalSupport;
  }
  .container-icon{
    width: 80px;
    height: 80px;
    margin: 20px auto;
  }
  .container-icon img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .description-advantage{
    padding: 0 10px;
  }
</style>
