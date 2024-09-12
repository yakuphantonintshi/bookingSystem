<template>
    <div class="container-fluid dvh-100">
        <h1>USER TABLE</h1>
  <div class="table">
    <table  v-if="users?.length">
        <tr>
        <th>USER_ID</th>
        <th>USER_NAME</th>
        <th>USER AGE</th>
        <th>EMAIL ADDRESS</th>
        <th>PHONE NUMBER</th>
        <th>GENDER</th>
        <th>AGE</th>
        <th>ROLE</th>
        <th>ACTIONS</th>
    </tr>

    <tr v-for="user in users" :key="user.userID">
        <td>{{ user.userID}}</td>
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ user.gender }}</td>
        <td>{{ user.age }}</td>
        <td>{{ user.userRole }}</td>
        <td><button type="button" class="delete" @click="deleteUser(user.userID)"><i class="bi bi-trash3"></i></button>
          <button type="button" class="edit btn-primary" @click="openEditModal(user)" data-bs-toggle="modal" data-bs-target="#editModal">
            <i class="bi bi-pencil"></i>
          </button>
             <!-- modal for editing a user -->
             <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="editModalLabel">Edit User</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="firstName" class="form-label">First Name</label>
                <input type="text" class="form-control" id="firstName" v-model="editableUser.firstName" />
              </div>
              <div class="mb-3">
                <label for="lastName" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="lastName" v-model="editableUser.lastName" />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email Address</label>
                <input type="email" class="form-control" id="email" v-model="editableUser.email" />
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">Phone Number</label>
                <input type="text" class="form-control" id="phone" v-model="editableUser.phone" />
              </div>
              <div class="mb-3">
                <label for="gender" class="form-label">Gender</label>
                <input type="text" class="form-control" id="gender" v-model="editableUser.gender" />
              </div>
              <div class="mb-3">
                <label for="age" class="form-label">Age</label>
                <input type="number" class="form-control" id="age" v-model="editableUser.age" />
              </div>
              <div class="mb-3">
                <label for="userRole" class="form-label">Role</label>
                <input type="text" class="form-control" id="userRole" v-model="editableUser.userRole" />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="saveChanges">Save changes</button>
          </div>
        </div>
      </div>
    </div>

        </td>
            


    </tr>
    </table>
    <div v-else>
        <SpinnerComp />
    </div>
  </div>
    </div>

            
</template>


<script>
import { mapState } from 'vuex';
import SpinnerComp from '@/components/SpinnerComp.vue';
export default{
  data(){
    return{

      editableUser: {},
    }
  },
    components: {
        SpinnerComp
    },
    computed: {
        ...mapState(["users"])
        
    },
    methods: {
      openEditModal(user) {
      this.editableUser = { ...user }; // Create a copy of the selected user for editing
    },

    async saveChanges() {
    try {
      await this.$store.dispatch("updateUser", {
        id: this.editableUser.userID,
        updatedUser: this.editableUser,
      });
      alert("User updated successfully!");
      location.reload();
    } catch (error) {
      console.error("Error saving changes:", error);
      alert("Failed to update user.");
    }
  },
        async getUsers() {
            await this.$store.dispatch("fetchUsers")
        },
        deleteUser(id) {
      if (confirm("are you sure you want to delete this user")) {
        this.$store.dispatch("deleteUser", { id: id });
        location.reload();
      } else {
        alert("action was aborted");
      }
    },
    },
    mounted(){
        this.getUsers();
    }
}
</script>

<style scoped>
.add{
    width: 10rem;
    height: 3rem;
    aspect-ratio: 1;
  object-fit: cover;
  position: absolute;
  margin-top: 1rem;
  right: 0;
  background: transparent;
  color: white;
  border: 2px solid #7ddff1;
}
.modal-content{
    width: 75%;
    background-color: #001f31;
}
.btn-close{
    background-color: #7ddff1;
}
input{
    display:flex;
    margin-block: 2rem;
    height: 3rem;
}
h1{
    color: white;
    text-shadow: 2px 2px 5px #7ddff1;
}

table{
  width:100dvw;
  margin-top: 2rem ;
}
th,
td {
  border: 1px solid black;
  color: white;
  height: 3rem;
}
td{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 120px;
}
th{
  background-color: #003c6c !important;
  color: white !important;
  border: 2px solid white;
}
.td-actions{
  min-width:180px;
}
/* :is(.delete, #edit){
    width: 3rem;
    background-color: transparent;
    color: #7ddff1;
    margin-inline: .8rem;
    border: 1px solid #7ddff1;
} */

:is(.delete, .edit) {
  width: 4rem;
  height: 2rem;
  margin-inline: .8rem;
  background-color: #003c6c;
  color: white;
  border: 1px solid #7ddff1;
}
:is(#close,#save){
    background-color: transparent;
    border: 2px solid #7ddff1;
}

</style>