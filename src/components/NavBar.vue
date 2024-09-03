<template>
    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
            <img src="https://img.favpng.com/24/22/9/bus-car-icon-png-favpng-9sy7nDFdCx7bTw7G55BzAd3du.jpg" alt="logo" class="img-fluid" loading="lazy">
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" id="navBar" aria-current="page" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" id="navBar" aria-current="page" to="/routes">Our Routes </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" id="navBar" aria-current="page" to="/offices">Booking Offices</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" id="navBar" aria-current="page" to="/contact">Contact Us </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" id="navBar" aria-current="page" to="/faq">FAQs </router-link>
            </li>
            </ul>
        </div>
      </div>
    </nav>
    </template>