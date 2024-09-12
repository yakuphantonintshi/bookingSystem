<template>
<div class="container">
<div class="dropdown-container">
 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQuxDKercWzY3oZxi1fR5mTrB4gagb6-Af5g&s" alt="icon"  class="dropdown-icon dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">
<ul class="dropdown-menu">
 <li><a class="dropdown-item" href="/login">USER</a></li>
 <li><a class="dropdown-item" href="/admin">ADMIN</a></li>
</ul>
</div>
<h1> WELCOME TO SEAT SAVER🚐</h1>
 <p>Your journey, Our priority - Travel in comfort and style</p>
 <img src="https://data.textstudio.com/output/sample/animated/3/3/5/7/let-s-go-29-17533.gif" alt="gif" height="300px" width="700px"> <br>
 <button @click="SignUpPage" type="button" class="btn">SIGN UP</button>
</div>




</template>

<script>
export default {
  name: 'HomeView',
  data(){
    return{
      isDropdownVisible: true
    }
  },
  methods: {
    SignUpPage() {
      this.$router.push({name: 'register' })
    }
  },

};
</script>


<style scoped>
.dropdown-button{
  width: 6rem;
  aspect-ratio: 1;
  object-fit: cover;
  position: absolute;
  top: 0;
  right: 0;
  box-shadow: 2px 2px 5px#7ddff1;
}
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
  margin-top: -4rem;
  margin-inline: 3rem;
}
.btn:hover{
  color: white;
  background-color: #7ddff1;
  font-size: large;
  text-decoration: underline;
}

</style>


