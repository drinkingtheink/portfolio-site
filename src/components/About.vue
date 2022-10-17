<template>
  <div class="about-stage">
    <h2>About Me</h2>
    <p class="intro" :class="{ 'comp' : needsCompFont }">{{ intro }}</p>
    <p class="body" :class="{ 'comp' : needsCompFont }">{{ body }}</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    needsCompFont: Boolean,
  },
  data() {
      return {
          intro: 'Hi, I\'m Jason. I\'m a Software Engineer && UI/UX/U∞ Designer from Austin, TX.',
          body: 'I\'m a Software Developer at Q2 where we strengthen communities by providing modern banking solutions for community and independent banks and credit unions. I use this to host some of the fun, one-off projects I do, among other things.'
      }
  }
}
</script>

<style lang="scss">
@import '../styles/palette';

.about-stage {
    padding: 1rem 2rem;
    background-color: var(--color3);
    color: white;
    border-top: 5px solid var(--accent);
    position: relative;
    z-index: 10;
    min-height: 30rem;
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

.app-stage.music .about-stage, .app-stage.futbol .about-stage {
    p {
        color: var(--color4);
    }
}

.app-stage.futbol .about-stage {
    background-color: white;

    p {
        color: var(--secondary);
    }
}

</style>
