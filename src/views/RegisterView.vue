<template>
    <form @submit.prevent="validatePasswords">
      <span class="arrow">
        <a href="/"><i class="bi bi-arrow-left-circle"></i></a>
      </span>
      <div class="container-fluid">
        <h1>Sign up!</h1>
        <p>Personal Information</p>
        <label>
          <input type="text" class="input" v-model="payload.firstName" name="firstname" placeholder="Enter your firstName" required>
        </label> <br>
        <label>
          <input type="text" class="input" v-model="payload.lastName" name="lastname" placeholder="Enter your lastname" required>
        </label> <br>
        <label>
          <input type="email" class="input" v-model="payload.email" name="email" placeholder="Enter your email address" required>
        </label> <br>
  
        <label class="gender">Gender:
          <select id="gender" v-model="payload.gender" name="gender" class="dropdown" required>
            <option value="" disabled selected>Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer_not_to_say">Prefer not to say</option>
          </select>
        </label> <br>
  
        <label for="age" class="age">Age: <br>
          <input type="number" v-model="payload.age" class="ageInp" id="age" required>
        </label>
        <br>
        <label class="age">PROFILE URL</label> <br>
        <input class="input" type="image-url"> <br>

        <label class="age">USER ROLE:</label> <br>
        <input class="input" type="text"> <br>

        <label class="age">PHONE NUMBER:</label> <br>
        <input class="input" type="number">
  
        <p>Create your password</p>
        <input v-model="newPassword" class="inp" type="password" id="newPassword" name="newPassword" placeholder="New password" required>
        <input v-model="payload.pwd" class="inp" type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm password" required minlength="8">
  
        <div v-if="errorMessage" class="error">
          {{ errorMessage }}
        </div>
  
        <button type="button" class="register" @click="register()">Register</button>
        <button @click="AboutPage" type="button">move forward</button>
      </div>
    </form>
  </template>
  
  <script>
import store from '@/store';
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
  export default {
    data() {
      return {
          payload : {
          firstName: "",
          lastName: "",
          email: "",
          gender: "",
          age: 0,
          pwd: "",
          errorMessage: '',
          userProfile: '',
          phone: ''
      }
      };
    },
    methods: {
    AboutPage() {
      this.$router.push({ name: 'about' });
    },
      validatePasswords() {
        if (this.newPassword !== this.confirmPassword) {
          this.errorMessage = 'Passwords do not match.';
        } else if (!this.firstname || !this.lastname || !this.email || !this.gender || !this.dob) {
          this.errorMessage = 'Please fill in all required fields.';
        } else {
          this.errorMessage = '';

        }
      },
        register(){

        const cred = {
            firstName: this.payload.firstName,
            lastName: this.payload.lastName,
            email: this.payload.email,
            gender: this.payload.gender,
            age: this.payload.age,
            pwd: this.payload.pwd,
            userProfile: this.payload.userProfile
          }
          
         
          return store.dispatch('register', cred)
        }
      ,
      LoginPage() {
        this.$router.push({ name: 'about' });
      },
    },

  };
  </script>

  


<style scoped>
.dropdown{
    width: 250px;
    height: 35px;
}
.error {
  color: red;
  font-size: 14px;
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
.container-fluid{
    background-color: #001f31;
    width: 600px;
}
p{
    font-size: 1.5rem;
    margin-top: 2rem;
    text-decoration: underline;
    color: #7ddff1;
}
.input{
    width: 300px;
    height: 2rem;
    margin-block: 1rem;
}
button{
    margin-inline: 2rem;
    padding-inline: 5px;
    width: 100px;
    background-color: transparent;
    border: 2px solid #7ddff1;
}
.date{
    margin-top: 2rem;
}
.datee{
    margin-left: 1rem;
    width: 300px;
}
.password{
    margin-block: 1rem;
    width: 300px;
    height: 2rem;
}
.register{
    width: 200px;
    height: 50px;
    color: white;
    background-color: transparent;
    margin-bottom: 1.5rem;
    margin-top: -3.5px;
}
h1{
    color:  #7ddff1;
}
:is(.gender, .date, .age){
    color: white;
}
.gender{
    padding-top: 2rem;
}
.age{
  padding-top: 2rem;
}

.inp{
display: flex;
margin-left: 9rem;
width: 300px;
margin-block: 2rem;
}
.ageInp{
  width: 300px;
  height: 2rem;
}
@media screen and (max-width: 700px) {
 .container-fluid{
  width: 500px;
 }
}
@media screen and (max-width: 700px) {
  .container-fluid {
    width: 500px;
  }
}

@media screen and (max-width: 500px) {
  .container-fluid {
    width: 90%;
  }

  .bi {
    font-size: 3rem;
    margin-left: 1rem;
  }

  p {
    font-size: 1.2rem;
  }

  .input, .ageInp, .inp {
    width: 90%;
    margin-left: 0;
  }

  button {
    width: 90%;
    margin-inline: 0;
  }

  .register {
    width: 90%;
  }
}

@media screen and (max-width: 400px) {
  h1 {
    font-size: 1.4rem;
  }

  .bi {
    font-size: 2.5rem;
  }

  p {
    font-size: 1rem;
  }

  .input, .ageInp, .inp {
    width: 100%;
  }

  button {
    width: 100%;
    margin-inline: 0;
  }

  .register {
    width: 100%;
  }
}

@media screen and (max-width: 300px) {
  .container-fluid {
    width: 100%;
    padding: 0.5rem;
  }

  h1 {
    font-size: 1.2rem;
    text-align: center;
  }

  .bi {
    font-size: 2rem;
    margin-left: 0.5rem;
  }

  p {
    font-size: 0.9rem;
  }

  .input, .ageInp, .inp {
    width: 100%;
    margin-left: 0;
  }

  button {
    width: 100%;
    margin-inline: 0;
  }

  .register {
    width: 100%;
  }
}

</style>