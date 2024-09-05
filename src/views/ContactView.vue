<template>
    <div class="container-fluid vh-100">
    <h1>CONTACT US</h1>
    <p>If you need support with the booking process, call our 24-Hour Call Centre at +27 62 507 0288</p>
    <h3>Please note</h3>
    <p>Only use the phone numbers on the website to contact us. <br>
        Do not use numbers from Google.</p>
        <form   action="https://formspree.io/f/xdknjdbj"
        method="POST">
        <div class="row">
            <div class="col">
                <input type="text" placeholder="Enter your name" id="name" name="name"> <br>
        <input type="text" placeholder="+27 000 000 000" id="number" name="phone">
        <br>
            </div>
            <div class="col">
                <input type="email" placeholder="example@gmail.com" id="email" name="email"> <br>
                <input type="text" placeholder="Enter the subject" id="subject" name="subject">
            </div>
            <textarea name="message" id="message" rows="5" placeholder="Message"></textarea> <br>
        <button type="submit">SUBMIT</button>
        </div>
    </form>
        <div class="row">
            <div class="col">
    
        <div class="card w-75">
        <div class="card-body">
        <h5 class="card-title">VISIT OUR OFFICE</h5>
        <p class="card-text">58 Old Marine Road, Cape Town Western Cape, South AFrica</p>
        </div>
    </div>
            </div>
        <div class="col">
            <div class="card w-75" id="card">
    <div class="card-body">
    <h5 class="card-title" id="card-title">24-Hour Call Centre</h5>
    <p class="card-text" id="card-text">+27 62 507 0288 <br><i class="bi bi-whatsapp"></i><i class="bi bi-telephone"></i></p>
    </div>
</div>
            </div>
            <div class="col">
                <div class="card w-75">
        <div class="card-body">
        <h5 class="card-title">VISIT OUR OFFICE</h5>
        <p class="card-text">58 Old Marine Road, Cape Town Western Cape, South AFrica</p>
        </div>
    </div>
            </div>
    </div>
    </div>
</template>

<style scoped>
form{
    margin-right: 7rem;
}
input{
    height: 60px;
    width: 300px;
    margin-block: .8rem;
    background-color: transparent;
    /* border: 2px solid #7ddff1; */
    border-bottom: 2px solid #7ddff1;
    border-right: 2px solid #7ddff1;
    box-shadow: 4px 4px 7px #7ddff1;
    color: white;
}
textarea{
    width: 400px;
    background-color: transparent;
    /* border: 2px solid #7ddff1; */
    border-bottom: 2px solid #7ddff1;
    border-right: 2px solid #7ddff1;
    box-shadow: 4px 4px 7px #7ddff1;
    color: white;
}
button{
    width: 250px;
    height: 60px;
    margin-left: 7rem;
    margin-top: 1rem;
    background-color: #7ddff1;
    color: #001f31;
    border: 2px solid #001f31;
    box-shadow: 4px 4px 7px #7ddff1;
}
form{
    margin-top: 2rem;
}
:is(#card-title, #card-text){
    color: #001f31;
}
#card{
    background-color: #7ddff1;
    border: 4px solid #7ddff1;
}
.bi{
    padding-inline: .7rem;
}
.row{
    margin-top: 2rem;
    margin-inline-start: 2rem;
}
.card-title{
    color: white;
    text-shadow: 2px 2px 5px #7ddff1;
    padding-bottom: 2rem;
}
.card{
    background-color: transparent;
    border: 4px solid #7ddff1;
    border-radius: 5px;
}
:is(h1, p, h3) {
    color: white;
}
.container-fluid{
    background-color: #001f31;
}
h1{
    text-shadow: 2px 2px 5px #7ddff1;
    padding-bottom: 3rem;
}
h3{
    padding-top: 1rem;
    text-shadow: 2px 2px 5px #7ddff1;
}

</style>