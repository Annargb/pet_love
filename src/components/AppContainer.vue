<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 10px 20px;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 16px 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
}
</style>
