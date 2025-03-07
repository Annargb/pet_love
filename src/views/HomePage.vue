<script setup>
import BaseLayout from '@/layouts/BaseLayout.vue'
</script>

<template>
  <BaseLayout>
    <section class="hero-section">
      <h1 class="header">Take good <span class="highlight">care</span> of your small pets</h1>
      <p class="home-text">
        Choosing a pet for your home is a choice that is meant to enrich your life with immeasurable
        joy and tenderness.
      </p>
    </section>
    <picture>
      <source
        srcset="/images/mobile/home-img-mobile-1x.png 1x, /images/mobile/home-img-mobile-2x.png 2x"
        media="(max-width: 767px)"
      />

      <source
        srcset="/images/tablet/home-img-tablet-1x.png 1x, /images/tablet/home-img-tablet-2x.png 2x"
        media="(min-width: 768px) and (max-width: 1279px)"
      />

      <source
        srcset="
          /images/desktop/home-img-desktop-1x.png 1x,
          /images/desktop/home-img-desktop-2x.png 2x
        "
        media="(min-width: 1280px)"
      />

      <img src="/images/mobile/home-img-mobile-1x.png" alt="Girl with the dog" class="home-img" />
    </picture>
  </BaseLayout>
</template>

<style scoped lang="scss">
.hero-section {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 335px;
  height: 390px;
  padding: 50px 20px;
  border-radius: 30px;
  background-color: var(--orange);

  @media screen and (min-width: 768px) {
    gap: 32px;
    width: 704px;
    max-width: 704px;
    height: 496px;
    padding: 44px 32px;
    border-radius: 60px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
    width: 1216px;
    max-width: 1216px;
    height: 384px;
    padding: 32px 64px;
  }
}

.header {
  margin-top: 68px;
  font-weight: 700;
  font-size: 50px;
  line-height: 0.96;
  letter-spacing: -0.03em;
  color: var(--white);

  .highlight {
    font-weight: inherit;
    color: var(--white-1);
  }

  @media screen and (min-width: 768px) {
    margin-top: 134px;
    font-size: 80px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 146px;
    width: 760px;
    font-size: 90px;
    line-height: 0.97;
  }
}

.home-text {
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: var(--white);

  @media screen and (min-width: 768px) {
    margin-left: 385px;
    font-size: 18px;
    line-height: 1.22;
  }

  @media screen and (min-width: 1280px) {
    width: 255px;
    margin: 232px 0 0 0;
  }
}

.home-img {
  width: 100%;
  max-width: 335px;
  height: 402px;
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    max-width: 704px;
    height: 496px;
    border-radius: 60px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1216px;
    height: 384px;
  }
}
</style>
