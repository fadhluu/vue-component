<template>
  <div class="user-edit">
    <h3>You may edit the user here</h3>
    <p>Edit me!</p>

    <p>
      User Age:
      <span class="badge badge-warning" @click="decreaseAge">-</span>
      {{ userAge }}
      <span class="badge badge-primary" @click="increaseAge">
        +
      </span>
    </p>
  </div>
</template>

<script>
import { eventBus } from '../main';

export default {
  props: {
    userAge: Number,
  },
  methods: {
    increaseAge() {
      eventBus.increaseAge((this.userAge += 1));
    },
    decreaseAge() {
      eventBus.decreaseAge((this.userAge -= 1));
    },
  },
};
</script>

<style scoped>
.user-edit {
  background-color: #e74c3c;
  padding: 16px;
  border-radius: 8px;
}
.badge {
  cursor: pointer;
}
</style>
