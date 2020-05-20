<template>
  <div class="user-detail">
    <h3>You can see user details here</h3>
    <p>List of users details:</p>
    <li>Name: {{ name }}</li>
    <li>Name Reversed: {{ reverseName() }}</li>
    <li>Age: {{ userAge }}</li>
    <hr />
    <button @click="resetName" class="btn btn-danger">
      Reset Name From Emit
    </button>
    <button @click="resetFn" class="btn btn-danger">Reset Name</button>
  </div>
</template>

<script>
import { eventBus } from '../main';

export default {
  props: {
    name: {
      type: String,
    },
    userAge: Number,
    resetFn: Function,
  },
  methods: {
    reverseName() {
      return this.name
        .split('')
        .reverse()
        .join('');
    },
    resetName() {
      this.name = 'Fadhlu';
      this.$emit('nameWasReset', this.name);
    },
  },
  created() {
    eventBus.$on('increaseAge', (age) => {
      this.userAge = age;
    });
    eventBus.$on('decreaseAge', (age) => {
      this.userAge = age;
    });
  },
};
</script>

<style scoped>
.user-detail {
  background: #2ecc71;
  padding: 16px;
  border-radius: 8px;
}

li {
  list-style: none;
}
</style>
