<template>
<div class="container">
 <h1> WELCOME TO SEAT SAVER🚐</h1>
 <p>Your journey, Our priority - Travel in comfort and style</p>
 <button @click="LoginPage" type="button" class="btn">GET STARTED</button>
</div>


</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    LoginPage() {
      this.$router.push({ name: 'login' });
    },
  },
};
</script>


<style scoped>
h1{
  color: white;
  padding-top: 7rem;
  font-size: 5.5rem;
  font-weight: bolder;
  
}
p{
  font-size: 2.5rem;
  color: #e181f2;
  padding-top: 7rem;
  text-shadow: 1px 1px 1px white;
}

.btn{
  width: 250px;
  height: 70px;
  background-color: #9f00bb;
  border: 2px solid white;
  color: white;
  margin-top: 8rem;
}
.btn:hover{
  color: white;
  background-color: #9f00bb;
  font-size: large;
  text-decoration: underline;
}

</style>


