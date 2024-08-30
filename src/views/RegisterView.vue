<template>
    <div class="container-fluid">
        <h1>Sign up!</h1>
        <p>Personal Information</p>
        <label>
            <input type="text" class="input" name="firstname" placeholder="Enter your firstName">
        </label> <br>
        <label>
            <input type="text" class="input" name="lastname" placeholder="Enter your lastname">
        </label> <br>
        <label>
            <input type="email" class="input" name="email" placeholder="Enter your email address">
        </label> <br>
        <label class="gender">
            Gender: <br>
        <button type="button"><input type="radio" name="color"> Male</button>
        <button type="button"><input type="radio" name="color"> Female</button> <br>  
    </label>  <br>
            <label class="date">Date of birth: <br> <input type="date" class="datee"></label>

            <p>Create your password</p>
            <label><input type="password" class="password" placeholder="New password"></label> <br>
            <label><input type="password" class="password" placeholder="Confirm password"></label>
        
    <br>
    <button type="button" class="register">Register</button>
    </div>
</template>

<style scoped>
.container-fluid{
    background-color: #40185f;
    width: 600px;
}
p{
    font-size: 1.5rem;
    margin-top: 2rem;
    text-decoration: underline;
    color: #e9aef4;
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
    border: 2px solid #9f00bb;
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
    margin-bottom: 1.5rem;
}
h1{
    color:  #e9aef4;
}
:is(.gender, .date){
    color: white;
}

</style>