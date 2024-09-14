<template>
<<<<<<< HEAD
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




=======
  <div class="container vh-100">
    <div class="button-container">
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          LOGIN
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="/login">USER</a></li>
          <li><a class="dropdown-item" href="/admin">ADMIN</a></li>
        </ul>
      </div>
      <button @click="SignUpPage" type="button" class="btn">SIGN UP</button>
    </div>
    <h1>WELCOME TO SEAT SAVER🚐</h1>
    <p>Your journey, Our priority - Travel in comfort and style</p>
    <img src="https://data.textstudio.com/output/sample/animated/3/3/5/7/let-s-go-29-17533.gif" alt="gif" class="responsive-image"> 
  </div>
>>>>>>> 3bcef4e1e7949a33fbb97fa72bce0dc4eab5a571
</template>

<script>
export default {
  name: 'HomeView',
<<<<<<< HEAD
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
=======
  methods: {
    SignUpPage() {
      this.$router.push({ name: 'register' });
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: transparent;
  color: white;
}

.button-container {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 1rem;
  position: absolute;
  top: 0;
  right: 0;
  box-sizing: border-box;
}

.dropdown-button {
  width: 6rem;
  aspect-ratio: 1;
  object-fit: cover;
  box-shadow: 2px 2px 5px #7ddff1;
}

h1 {
  font-size: 5.5rem;
  font-weight: bolder;
  text-shadow: 3px 3px 4px #7ddff1;
  margin-top: 7rem;
}

p {
  font-size: 2.8rem;
  text-shadow: 3px 3px 4px #7ddff1;
  margin-top: 3rem;
}

.btn {
  width: 250px;
  height: 70px;
  background-color: transparent;
  border: 2px solid white;
  color: white;
  margin-top: 7rem;
}

.btn:hover {
>>>>>>> 3bcef4e1e7949a33fbb97fa72bce0dc4eab5a571
  background-color: #7ddff1;
  font-size: large;
  text-decoration: underline;
}

<<<<<<< HEAD
</style>


=======
.responsive-image {
  width: 100%;
  max-width: 700px;
  height: auto;
  margin-top: 1rem;
}

@media (max-width: 1000px) {
  h1 {
    font-size: 4rem;
  }

  p {
    font-size: 2rem;
  }

  .btn {
    width: 200px;
    height: 60px;
  }
}

@media (max-width: 600px) {
  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
  }

  .btn {
    width: 150px;
    height: 50px;
  }
}

@media (max-width: 300px) {
  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }

  .btn {
    width: 120px;
    height: 40px;
  }
}
</style>
>>>>>>> 3bcef4e1e7949a33fbb97fa72bce0dc4eab5a571
