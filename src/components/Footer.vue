<template>
    <footer class="container-fluid">
      <div class="row">
          <p class="lead">Seat Saver &copy;
          <span class="shadow">
              {{ cYear }}
          </span>
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
footer{
    border-top: 4px solid #9f00bb;
    text-align: center;
    margin-top: 2rem;
}
.lead{
    color: white;
    font-weight: 700;
}

</style>