<template>
    <span class="arrow"><a href="/"><i class="bi bi-arrow-left-circle"></i></a></span>
    <h1>USER LOGIN PAGE</h1>
<form @submit.prevent="handleSubmit">
    <h4>LOGIN</h4>

<label for="email">Enter your email</label>
<input type="email" id="email" v-model="email" placeholder="example@gmail.com" required>

<label for="password">Enter your password</label>
<input type="password" id="password" v-model="password" name="password" required>
<button type="submit">LOGIN</button>
<span id="error-message" style="color: red;"></span>

</form>

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
    handleSubmit() {
      console.log(this.email, this.password);
      
      this.$store.dispatch('login', {
        email: this.email,
        pwd: this.password,
      })
    },
  },
}
</script>


<style scoped>

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
    margin-left: 35rem;
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

/* Media query for 300px responsiveness */
@media (max-width: 930px) {
  form {
    width: 100%;
    margin-left: 0;
    padding: 1rem;
    border-width: 2px;
  }

  .bi {
    font-size: 2rem;
    margin-left: 1rem;
    margin-top: 1rem;
  }

  h1 {
    font-size: 1.5rem;
    text-align: center;
  }

  h4 {
    font-size: 1.5rem;
    padding-top: 1rem;
  }

  label {
    font-size: 0.9rem;
    padding-block: 1rem;
  }

  input {
    width: 90%;
    height: 35px;
  }

  button {
    width: 90%;
    height: 40px;
    font-size: 1.1rem;
  }
}

</style>