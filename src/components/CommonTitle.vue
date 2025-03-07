<template>
  <h1 class="register-title"><slot></slot></h1>
</template>

<style scoped lang="scss">
.register-title {
  font-weight: 700;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.03em;
  color: var(--text-color);

  @media screen and (min-width: 768px) {
    font-size: 54px;
  }
}
</style>
