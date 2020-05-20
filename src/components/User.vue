<template>
  <div class="user">
    <h1>User Component</h1>
    <p>I'm {{ name }}!</p>
    <button @click="changeName()" class="btn btn-warning">
      Change my name
    </button>
    <hr />
    <div class="row">
      <div class="col-6">
        <app-user-detail
          :name="name"
          @nameWasReset="name = $event"
          :resetFn="resetName"
          :userAge="userAge"
        ></app-user-detail>
      </div>
      <div class="col-6">
        <app-user-edit :userAge="userAge"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from './UserDetail';
import UserEdit from './UserEdit';

export default {
  data() {
    return {
      name: 'Fadhlu',
      userAge: 25,
    };
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit,
  },
  methods: {
    changeName() {
      this.name = 'Sasa';
    },
    resetName() {
      this.name = 'Fadhlu';
    },
  },
};
</script>

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
