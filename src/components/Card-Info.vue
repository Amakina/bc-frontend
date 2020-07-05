<template>
  <div class="info-card">
    <div class="card-title">
      <slot name="header" />
    </div>
    <div class="card-content">
      <slot name="content" />
    </div>
  </div>
</template>
<style scoped>

.info-card {
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  background: #FFFFFF;
  border-radius: 10px;
  margin-bottom: 46px;
}

.card-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 21px 24px;
  border-bottom: 1px solid #D8DCE3;
}

.card-content {
  display: flex;
  align-items: center;
  padding: 24px;
}

</style>