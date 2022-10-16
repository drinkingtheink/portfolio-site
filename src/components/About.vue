<template>
  <div class="about-stage">
    <h2>About Me</h2>
    <p class="intro">{{ intro }}</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
      return {
          intro: 'Hi, I\'m Jason. I\'m a Software Engineer && UI/UX/U∞ Designer from Austin, TX.',
      }
  }
}
</script>

<style lang="scss">
@import '../styles/palette';

.about-stage {
    padding: 1rem;
    background-color: var(--color3);
    color: white;
    border-top: 5px solid var(--accent);
}

.app-stage.sci-fi .about-stage {
    background-color: var(--secondary);
    color: var(--tertiary);
    
    h2, h3, h4, p, span, div {
        color: var(--tertiary);
    }
}

.app-stage.coding .about-stage, .app-stage.futbol .about-stage {
    p {
        color: var(--primaryDark);
    }
}

</style>
