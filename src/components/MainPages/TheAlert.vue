<template>
    <div class="alert-box">
      <div class="flex ">
        <!-- <i class="fa-solid fa-x border border-white rounded-full w-7 h-7 flex justify-center items-center ml-5"></i> -->
        <slot name="text"></slot>
      </div>
      <slot name="btns"></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: "TheAlert",
  };
  </script>
  
  <style scoped>
  .alert-box {
    color: white;
    border: none  ;
    padding: 15px;
    border-radius: 9999px;
    margin: 10px 0;
    width: 600px;
    position: fixed;
    right: 33%;
  }
  </style>
  