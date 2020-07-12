<template>
  <div class="notification" v-if="isOpen">
    <h4>{{header}}</h4>
    <div>{{content}}</div>
    <div class="close-button" @click="close">x</div>
  </div>
</template>
<script>
export default {
  name: 'notification',
  props: {
    isOpen: Boolean,
    header: String,
    content: String,
  },
  watch: {
    isOpen() {
      if (!this.isOpen) return

      setTimeout(() => this.$emit('hideNotification'), 3000)
    }
  },
  methods: {
    close() {
      this.$emit('hideNotification')
    }
  }
}
</script>
<style scoped>
.notification {
  position: absolute;
  z-index: 10;
  top: 50px;
  right: 50px;
  width: 300px;
  min-height: 20px;
  padding: 0px 20px 20px 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
  font-weight: 500;
}

.close-button {
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 20px;
  font-weight: bold;
  font-family: monospace;
}
</style>