<template>
    <span class="arrow"><a href="/"><i class="bi bi-arrow-left-circle"></i></a></span>
<form >
    <h4>LOGIN</h4>

<label for="email">Enter your email</label>
<input type="email" id="email" placeholder="example@gmail.com" required>

<label for="password">Enter your password</label>
<input type="password" id="password" name="password" required
         minlength="8" >
  <small>Password must be at least 8 characters long and contain at least one number, one lowercase letter, and one uppercase letter.</small>

<button type="submit">LOGIN</button>
<span id="error-message" style="color: red;"></span>

</form>

</template>



<style scoped>

.arrow{
    font-size: 4rem;
    display: flex;
    margin-left: 2rem;
    margin-top: 1.5rem;
    color: #be2fd7;
}

form{
    padding-bottom: 4rem;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 30rem;
    margin-top: 1rem;
    background-color: #40185f;
    border: 3px solid #9f00bb;
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
    text-align: start;
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
    background-color: #9f00bb;
    color: white;
    font-size: 1.3rem;
}
a{
    color: #9f00bb;
}
p{
    color: white;
    padding-top: 2rem;
}


</style>