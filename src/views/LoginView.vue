<template>
<form >
    <h4>LOGIN</h4>

<label for="email">Enter your email</label>
<input type="text" placeholder="example@gmail.com">

<label for="password">Enter your password</label>
<input type="password">

<button type="button">LOGIN</button>

<p>Do not have an account yet? <span><a href="/register">Sign up</a></span></p>
</form>
</template>

<style scoped>
form{
    padding-bottom: 4rem;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 30rem;
    margin-top: 6rem;
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