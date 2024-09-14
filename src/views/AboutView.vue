<template>
  <div class="container-fluid dvh-100">

  <h1 class="fade-in">ABOUT US</h1>
  <div class="row">
    <div class="col">
<p class="paragraph">Experience Full Luxury Bus Travel with SEAT SAVER</p>
<p>Since 2020, SEAT SAVER has been dedicated to providing passengers with a full luxury travel experience. We connect cities and families, giving you the chance to visit your loved ones across South Africa with ease and comfort.

Our luxury coaches are designed to be both safe and affordable, ensuring you travel in style without breaking the bank. At SEAT SAVER, we strive to deliver premium service at affordable prices, making your journey as enjoyable as the destination.</p>

  <h3>Our Journey</h3>
<p>

Seat Saver started with a simple idea: to revolutionize the way people book and experience bus travel. Over the years, we have expanded our services to cover a wide range of routes, constantly improving our offerings to meet the evolving needs of our passengers. From our humble beginnings to becoming a leading provider in the industry, our commitment to excellence has been unwavering.</p>
<h3>Our Services</h3>
<p>

We offer a variety of services designed to enhance your travel experience:

Easy Booking: Book your tickets online with just a few clicks. <br>
Comfortable Buses: Travel in style and comfort with our modern fleet.
24/7 Support: Our customer service team is always here to assist you.</p>

<button @click="TicketPage" type="button">Book your ticket <span><i class="bi bi-arrow-right-circle-fill"></i></span></button>
    </div>
    <div class="col">
        <img src="https://yakuphantonintshi.github.io/myimages/Images/blueBuses.jpg" class="slide-in" alt="picture" width="650px" height="500px">
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

span {
  font-size: 1.5rem;
  margin-left: 1rem;
}

h1, h3 {
  text-shadow: 3px 3px 5px #7ddff1;
  color: white;
  padding-bottom: 2rem;
  font-weight: bold;
}

.paragraph {
  font-size: 1.9rem;
  color: white;
  font-weight: bolder;
  text-shadow: 4px 1px 2px #7ddff1;
}

img {
  border: 4px solid #7ddff1;
  box-shadow: 3px 3px 20px #7ddff1;
  width: 90%;
  height: auto;
}

.container-fluid {
  background-color: transparent;
}

nav {
  background-color: white;
}

p {
  font-size: 1.3rem;
  color: white;
}

button {
  width: 300px;
  height: 70px;
  margin-top: 0.9rem;
  margin-left: auto; /* Center alignment for responsiveness */
  margin-right: auto;
  border-radius: 6px;
  color: black;
  background-color: #7ddff1;
  border: 3px solid #7ddff1;
}

button:hover {
  background-color: #001f31;
  color: #7ddff1;
}

/* Media query for screens up to 1000px */
@media (max-width: 1000px) {
  h1 {
    font-size: 3rem;
  }

  .paragraph {
    font-size: 1.2rem;
  }

  p {
    font-size: 1.2rem;
  }

  button {
    width: 250px;
    height: 60px;
  }

  img {
    width: 100%;
    height: auto;
  }
}

/* Media query for screens up to 930px */
@media (max-width: 930px) {
  h1 {
    font-size: 2.5rem;
  }

  .paragraph {
    font-size: 1.7rem;
  }

  p {
    font-size: 1.3rem;
  }

  button {
    width: 200px;
    height: 50px;
  }

  img {
    width: 90%;
  }
}

/* Media query for screens up to 600px */
@media (max-width: 600px) {
  h1 {
    font-size: 2rem;
  }

  .paragraph {
    font-size: 1.5rem;
  }

  p {
    font-size: 1.2rem;
  }

  button {
    width: 170px;
    height: 45px;
  }

  img {
    width: 100%;
  }
}

/* Media query for screens up to 400px */
@media (max-width: 400px) {
  h1 {
    font-size: 1.5rem;
  }

  .paragraph {
    font-size: 1.2rem;
  }

  p {
    font-size: 1rem;
  }

  button {
    width: 160px;
    height: 40px;
  }

  img {
    width: 100%;
  }
}

/* Media query for screens up to 300px */
@media (max-width: 300px) {
  h1 {
    font-size: 1.2rem;
    text-align: center;
  }

  .paragraph {
    font-size: 1rem;
  }

  p {
    font-size: 0.9rem;
  }

  button {
    width: 140px;
    height: 35px;
    font-size: 0.8rem;
  }

  img {
    width: 100%;
  }
}

</style>