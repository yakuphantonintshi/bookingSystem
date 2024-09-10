<template>
    <div class="container-fluid vh-100">
        <h1>USER TABLE</h1>
        <button class="add" >ADD A NEW USER</button>
        <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
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
        <th><button type="button" class="delete" @click="deleteUser(user.userID)"><i class="bi bi-trash3"></i></button>
             <button  type="button" id="edit" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-pencil"></i>
             </button>
             <!-- modal for editing a user -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
  </div>
        <div class="modal-footer">
        <button type="button" id="close" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" id="save" class="btn btn-primary">Save changes</button>
        </div>
    </div>
    </div>
    </div>

        </th>
            


    </tr>
    </table>
    <div v-else>
        <SpinnerComp />
    </div>
    </div>

            
</template>


<script>
import { mapState } from 'vuex';
import SpinnerComp from '@/components/SpinnerComp.vue';
export default{
    components: {
        SpinnerComp
    },
    computed: {
        ...mapState(["users"])
        
    },
    methods: {
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
  top: 1rem;
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
  /* border-collapse: collapse; */
  border: 4px solid white;
  color: white;
  height: 3rem;
}
td{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 120px;
}
.td-actions{
  min-width:180px;
}
:is(.delete, #edit){
    width: 3rem;
    background-color: transparent;
    color: #7ddff1;
    margin-inline: .8rem;
    border: 1px solid #7ddff1;
}
:is(#close,#save){
    background-color: transparent;
    border: 2px solid #7ddff1;
}

</style>