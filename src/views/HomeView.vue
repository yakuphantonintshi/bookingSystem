<template>
<div class="container">
 <h1> WELCOME TO SEAT SAVER🚐</h1>
 <p>Your journey, Our priority - Travel in comfort and style</p>
 <img src="https://data.textstudio.com/output/sample/animated/3/3/5/7/let-s-go-29-17533.gif" alt="gif" height="300px" width="700px"> <br>
 <button @click="LoginPage" type="button" class="btn">LOGIN</button>
 <button @click="SignUpPage" type="button" class="btn">SIGN UP</button>
</div>


</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    LoginPage() {
      this.$router.push({ name: 'login' });
    },
    SignUpPage() {
      this.$router.push({name: 'register' })
    }
  },
};
</script>


<style scoped>
h1{
  color: white;
  padding-top: 7rem;
  font-size: 5.5rem;
  font-weight: bolder;
  text-shadow: 3px 3px 4px #7ddff1;
  
}
p{
  font-size: 2.8rem;
  color: white;
  text-shadow: 3px 3px 4px #7ddff1;
  padding-top: 3rem;
}

.btn{
  width: 250px;
  height: 70px;
  background-color: transparent;  
  border: 2px solid white;
  color: white;
  /* margin-top: 1rem; */
  margin-inline: 3rem;
}
.btn:hover{
  color: white;
  background-color: #7ddff1;
  font-size: large;
  text-decoration: underline;
}

</style>


