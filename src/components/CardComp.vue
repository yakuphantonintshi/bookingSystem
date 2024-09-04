<template>
    <div class="card">
     <div class="card-header">
      <slot name="cardHeader"></slot>
  
     </div>
  
     <div class="card-body">
      <slot name="cardBody"></slot>
     </div>
     </div>
  </template>
  
  <script>
  export default {
      name: "CardComp"
}
  </script>
  
  <style scoped>
  .card {
      width: 18rem;
      border: 3px solid #7ddff1;
      background-color: transparent;
      margin: 1em;
  }
  .card-body{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  </style>