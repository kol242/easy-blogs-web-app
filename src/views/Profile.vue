<template>
   <div class="profile">
    <Modal v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal" />
    <div class="container">
      <h2>Account Settings</h2>
      <div class="profile-info">
        <div class="initials">{{ $store.state.profileInitials }}</div>
        <div class="input">
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" v-model="firstName" />
        </div>
        <div class="input">
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" v-model="lastName" />
        </div>
        <div class="input">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div class="input">
          <label for="email">Email:</label>
          <input disabled type="text" id="email" v-model="email" />
        </div>
        <button @click="updateProfile">Save Changes</button>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '../components/Modal.vue'
import '../assets/style/views/Profile.scss'
export default {
    name: 'profile',
    components: {
        Modal
    },
    data() {
        return {
            modalMessage: 'Changes were saved!',
            modalActive: null
        }
    },
    methods: {
        updateProfile() {
            this.$store.dispatch('updateUserSettings')
            this.modalActive = !this.modalActive
        },
        closeModal() {
            this.modalActive = !this.modalActive
        } 
    },
    computed: {
        firstName: {
            get() {
                return this.$store.state.profileFirstName
            },
            set(payload) {
                this.$store.commit('changeFirstName', payload)
            } 
        },
        lastName: {
            get() {
                return this.$store.state.profileLastName
            },
            set(payload) {
                this.$store.commit('changeLastName', payload)
            } 
        },
        username: {
            get() {
                return this.$store.state.profileUsername
            },
            set(payload) {
                this.$store.commit('changeUsername', payload)
            } 
        },
        email() {
            return this.$store.state.profileEmail
        }
    }
}
</script>