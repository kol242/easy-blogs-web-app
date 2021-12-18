<template>
  <div class="modal">
    <div class="modal-content">
      <p>{{ this.modalMessage }}</p>
      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
import '../assets/style/Modal.scss'
export default {
  props: ["modalMessage"],
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>