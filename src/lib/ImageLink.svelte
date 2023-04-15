<template>
    <a href={link}>
      <img src={imageSrc} alt={imageAlt}>
    </a>
  </template>
  
  <script>
    export let imageSrc;
    export let imageAlt;
    export let link;
  </script>
  
  <style>
    /* Add any styles for the image here */
    img {
      width: 100%;
      height: auto;
    }
  </style>