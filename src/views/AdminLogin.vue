<template>
<<<<<<< HEAD

<span class="arrow"><a href="/"><i class="bi bi-arrow-left-circle"></i></a></span>
<h1>ADMIN LOGIN PAGE</h1>
<form @submit.prevent="handleSubmit">
    <h4>LOGIN</h4>

<label for="email">Enter your email</label>
<input type="email" id="email" v-model="email" placeholder="example@gmail.com" required>

<label for="password">Enter your password</label>
<input type="password" id="password" v-model="password" name="password" required>
<button type="submit" @click="Gotonext">LOGIN</button>
<span id="error-message" style="color: red;"></span>

</form>

=======
  <span class="arrow"><a href="/"><i class="bi bi-arrow-left-circle"></i></a></span>
  <h1>ADMIN LOGIN PAGE</h1>
  <form @submit.prevent="handleSubmit">
    <h4>LOGIN</h4>

    <label for="email">Enter your email</label>
    <input type="email" id="email" v-model="email" placeholder="example@gmail.com" required>

    <label for="password">Enter your password</label>
    <input type="password" id="password" v-model="password" name="password" required>
    
    <button type="submit" @click="Gotonext">LOGIN</button>
    <span id="error-message" style="color: red;"></span>
  </form>
>>>>>>> 3bcef4e1e7949a33fbb97fa72bce0dc4eab5a571
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
<<<<<<< HEAD
    Gotonext(){
      this.$router.push({name: 'adminView'})
=======
    Gotonext() {
      this.$router.push({ name: 'adminView' })
>>>>>>> 3bcef4e1e7949a33fbb97fa72bce0dc4eab5a571
    },
    handleSubmit() {
      this.$store.dispatch('login', {
        email: this.email,
        pwd: this.password,
      })
    },
  },
}
</script>

<<<<<<< HEAD

<style scoped>

@media screen and (max-width: 950px) {
 
}

.bi{
    font-size: 4rem;
    display: flex;
    margin-left: 2rem;
    margin-top: 1.5rem;
   color: #7ddff1;
}
a{
  color: transparent;
}

form{
    padding-bottom: 4rem;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin-left: 35rem; */
    margin-inline-start: 30rem;
    margin-top: 1rem;
    background-color:#001f31;
    border: 3px solid #7ddff1;
}
h1{
    color: #7ddff1;
}
input{
    width: 300px;
    height: 40px;
    border-radius: 4px;

}
label{
    font-size: 1rem;
    color: #f6f0f7;
    padding-block: 2.5rem;
}
h4{
    color: white;
    font-size: 2rem;
    font-weight: bold;
    padding-top: 2rem;
}
button{
    margin-top: 3rem;
    width: 300px;
    height: 50px;
    background-color: #001f31;
    border: 2px solid #7ddff1;
    color: white;
    font-size: 1.3rem;
}

</style>
=======
<style scoped>
/* Default styles */
.bi {
  font-size: 4rem;
  display: flex;
  margin-left: 2rem;
  margin-top: 1.5rem;
  color: #7ddff1;
}

a {
  color: transparent;
}

form {
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  background-color: #001f31;
  border: 3px solid #7ddff1;
  border-radius: 8px;
  height: 500px;
}

h1 {
  color: #7ddff1;
  text-align: center;
}

input {
  width: 100%;
  max-width: 300px;
  height: 40px;
  border-radius: 4px;
  margin-bottom: 1rem;
  padding: 0.5rem;
}

label {
  font-size: 1rem;
  color: #f6f0f7;
  margin-bottom: 0.5rem;
}

h4 {
  color: white;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

button {
  width: 100%;
  max-width: 300px;
  height: 50px;
  background-color: #001f31;
  border: 2px solid #7ddff1;
  color: white;
  font-size: 1.3rem;
  margin-top: 1rem;
  cursor: pointer;
}

/* Media query for screens 950px and smaller */
@media (max-width: 950px) {
  .bi {
    font-size: 3rem;
    margin-left: 1rem;
    margin-top: 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  label {
    font-size: 0.9rem;
  }

  input {
    height: 35px;
  }

  button {
    height: 45px;
    font-size: 1.1rem;
  }
}

/* Media query for screens 600px and smaller */
@media (max-width: 600px) {
  .bi {
    font-size: 2rem;
    margin-left: 0.5rem;
    margin-top: 0.5rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.2rem;
  }

  label {
    font-size: 0.8rem;
  }

  input {
    height: 30px;
  }

  button {
    height: 40px;
    font-size: 1rem;
  }
}
</style>
>>>>>>> 3bcef4e1e7949a33fbb97fa72bce0dc4eab5a571
