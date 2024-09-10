<template>
  <div class="container-fluid dvh-100">

  <h1 class="fade-in">WELCOME TO SEAT SAVER</h1>
  <div class="row">
    <div class="col">
        <img src="https://d3rh8m1rlgcp00.cloudfront.net/wp-content/uploads/2023/04/Busbody-Banner.jpeg" class="slide-in" alt="picture" width="650px" height="500px">
    </div>
    <div class="col">
<p class="paragraph">Experience Full Luxury Bus Travel with SEAT SAVER</p>
<p>Since 2020, SEAT SAVER has been dedicated to providing passengers with a full luxury travel experience. We connect cities and families, giving you the chance to visit your loved ones across South Africa with ease and comfort.

Our luxury coaches are designed to be both safe and affordable, ensuring you travel in style without breaking the bank. At SEAT SAVER, we strive to deliver premium service at affordable prices, making your journey as enjoyable as the destination.</p>
<button @click="TicketPage" type="button">Book your ticket <span><i class="bi bi-arrow-right-circle-fill"></i></span></button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'AboutView',
  methods: {
    TicketPage() {
      this.$router.push({ name: 'tickets' });
    },
  }
};
</script>

<style scoped>

.fade-in {
            animation: fadeIn 5s ease-in-out;
        }

        @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }

.slide-in {
   animation: slideIn 2s ease-out forwards;
   transform: translateX(-100%);
   opacity: 0;
  }

  @keyframes slideIn {
            0% { transform: translateX(-100%); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
        }
span{
  font-size: 1.5rem;
  margin-left: 1rem;
}
h1{
  text-shadow: 3px 3px 5px #7ddff1;
  color: white;
  padding-bottom: 2rem;
  font-weight: bold;
  font-size: 3rem;
}
.paragraph{
  font-size: 1.9rem;
  color: white;
  font-weight: bolder;
  /* background-color: #e16ef6; */
  text-shadow: 4px 1px 2px #7ddff1;
}
img{
  border: 4px solid #7ddff1;
  box-shadow: 3px 3px 20px #7ddff1;
}
.container-fluid{
  background-color: #001f31;
}
nav{
  background-color: white;
}
p{
  font-size: 1.5rem;
  color: white;
}
button{
  width: 190px;
  height: 55px;
  margin-top: .9rem;
  margin-left: 28rem;
  /* margin-top: 4.5rem; */
  margin-bottom: 3rem;
  border-radius: 6px;
  color: white;
  background-color: transparent;
  border: 3px solid #7ddff1;
}
button:hover{
  background-color: #7ddff1;
}

</style>