<template>
  <div class="info-card" :class="{ 'bordered-card': hasBorder }">
    <div v-if="!hideHeader" class="card-title">
      <slot name="header" />
    </div>
    <div class="card-content">
      <slot name="content" />
    </div>
    <div v-if="!hideFooter" class="card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'card-info',
  props: {
    hideHeader: Boolean,
    hideFooter: Boolean,
    hasBorder: Boolean,
  }
}
</script>
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
  padding: 15px 24px;
  border-bottom: 1px solid #D8DCE3;
}

.card-content {
  display: flex;
  align-items: center;
  padding: 9px 28px 28px 28px;
}

.card-footer {
  display: flex;
  background: #D1E1FA;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 0px 0px 10px 10px;
  padding: 5px;
}

.bordered-card .card-content {
  border: 1px solid #000000;
  border-radius: 10px 10px 0px 0px;
}

.bordered-card .card-footer {
  border: 1px solid #000000;
  border-radius: 0px 0px 10px 10px;
  border-top: 0px;
}

</style>