<template>
    <footer class="container-fluid">
      <div class="row">
          <p class="lead">Seat Saver &copy;
          <span class="shadow">
              {{ cYear }}
          </span>
            <a href="https://www.facebook.com/yakupha.ntonintshi.1" target="_blank"> <i class="bi bi-facebook"></i></a>
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank"><i class="bi bi-envelope"></i></a>
            <a href="https://www.linkedin.com/in/yakupha-ntonintshi-3b2672221/" target="_blank"><i class="bi bi-linkedin"></i></a>
      </p>
      </div>
  
    </footer>
  </template>

<script>
export default {
    name: "FooterComp",
    data(){
        return{
            cYear: new Date().getUTCFullYear()
        }
    }, 

}
</script>

<style scoped>
a{
    margin-inline: 1rem;
    font-size: 1.3rem;
    margin-top: -2rem;
    color: #7ddff1;
}
a:hover{
    font-size: 1.4rem;
}
footer{
    border-top: 4px solid #7ddff1;
    text-align: center;
    margin-top: 2rem;
}
.lead{
    color: #7ddff1;
    font-weight: 700;
}

</style>