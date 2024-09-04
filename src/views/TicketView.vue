<template>
    <form>
        <div class="ticket">
            <h1>BOOK YOUR TICKET!</h1>
        </div>
        <button type="button" class="one-way">One way</button>
        <button type="button" class="return">Return</button>
            <div class="container-fluid vh-100">
    <select id="departure" name="departure" class="dropdown" required>
            <option value="" disabled selected>Departing from</option>
            <option value="male">mthatha</option>
          </select>
          <select id="travelling" name="travelling" class="dropdown" required>
            <option value="" disabled selected>Travelling To</option>
            <option value="male">cape town</option>
          </select>

          <input type="date">

          <select id="people" name="people" class="dropdown" required>
            <option value="" disabled selected ></option>
            <option value="male">mthatha</option>
          </select>
          <button type="button" class="find">FIND TICKET</button>
        </div>
   </form>
  
</template>

<style scoped>
.find{
    background-color: #7ddff1;
    color: #001f31;
    margin-left: 10rem;
}
.return{
    background-color: transparent;
    border: 2px solid #7ddff1;
    color: white;
}
.ticket{
    background-color: #001f31;
    padding-bottom: 3rem;
    color: white;
}
h1{
    font-weight: bold;
    font-size: 3rem;
    text-shadow: 2px 2px 5px #7ddff1;
}
form{
    background-color: #001f31;
    padding-top: 3rem;
}
.container-fluid{
    display: flex;
    flex-direction: column;
    width: 500px;
    gap: 2rem;
}
button{
    margin-bottom: 1.5rem;
    width: 150px;
    height: 3rem;
}
.container-fluid{
    background-color: #001f31;
}
:is(input, select){
    height: 2rem;
    background-color: transparent;
    border-top: 2px solid #7ddff1;
    border-left: 2px solid #7ddff1;
    color: white;
}
.one-way{
    background-color: #7ddff1;
    color: #001f31;
    border: #001f31;
}

</style>