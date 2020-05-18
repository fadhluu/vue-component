<template>
  <div class="user">
    <h1>User Component</h1>
    <p>I'm an awesome user!</p>
    <hr />
    <div class="row">
      <div class="col-6">
        <app-user-detail></app-user-detail>
      </div>
      <div class="col-6">
        <app-user-edit></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from './UserDetail';
import UserEdit from './UserEdit';

export default {
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user {
  background: #3498db;
  padding: 2rem 1rem 1rem 1rem;
  border: 0.5px solid #2980b9;
  margin-top: 1rem;
  color: #ecf0f1;
  border-radius: 8px;
}
hr {
  border: 0.5px solid #2980b9;
}
</style>
