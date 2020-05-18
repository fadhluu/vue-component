<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <app-user></app-user>
      </div>
    </div>
  </div>
</template>

<script>
import User from './components/User';

export default {
  name: 'App',
  components: {
    appUser: User,
  },
};
</script>

<style>
body {
  background-color: #ecf0f1;
}
</style>
