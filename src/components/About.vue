<template>
  <div class="about-stage fade">
    <h2>About Me</h2>
    <p class="intro" :class="{ 'comp' : needsCompFont }">{{ intro }}</p>
    <p class="body" :class="{ 'comp' : needsCompFont }">
        I'm a Staff Software Engineer at <a href="https://www.q2.com/" alt="Visit Q2 Software">Q2</a> where we strengthen communities by providing modern banking solutions for community and independent banks and credit unions. I write core features for millions of users across multiple teams and in multiple repos. I use this to host some of the fun, one-off projects I do, among other things.
    </p>

    <p class="body" :class="{ 'comp' : needsCompFont }">
        I started as a designer and I'm still drawn to the calling. I like to illustrate, design posters or music-related artwork, play with photography and, well, anything else that gets the rods and cones going.
    </p>

    <p class="body" :class="{ 'comp' : needsCompFont }">
        As soon as I realized coding was basically puzzle solving, I was immediately drawn to it as well. Organizing data, catering exciting experiences and pushing the artistic boundaries of the browser joined my other passions that you see played out before you on my site.
    </p>

     <p class="body" :class="{ 'comp' : needsCompFont }">
        Thanks so much for visiting. Cheers. - J(a)SON
    </p>
    <JHMonogram class="about-logo" />
  </div>
</template>

<script>
import JHMonogram from './JHMonogram.vue'

export default {
  name: 'About',
  props: {
    needsCompFont: Boolean,
  },
  components: {
    JHMonogram,
  },
  data() {
      return {
          intro: 'Hi, I\'m Jason. I\'m a Software Engineer && UI/UX/U∞ Designer from Austin, TX. The combination of this skill set is starting to be referred to as a Design Technologist. Whatever you want to call it; I like to design it and I like to make it work beautifully. And for as many people as possible.',
      }
  }
}
</script>

<style lang="scss">
@import '../styles/palette';
@import '../styles/animations';

.about-stage {
    position: relative;
    padding: 1rem 2rem;
    background-color: var(--color3);
    color: white;
    border-top: 5px solid var(--accent);
    position: relative;
    z-index: 10;
    min-height: 30rem;
    animation-delay: 0.1s;

    .about-logo {
        position: absolute;
        width: 7rem;
        bottom: 2rem;
        right: 2rem;
        opacity: 0.25;
        color: var(--accent);
    }

    a {
        color: var(--accent);
        font-weight: bold;
        transition: all 0.2s;

        &:hover {
            color: var(--primary);
        }
    }
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

.app-stage.music .about-stage {
    background-color: white;

    h2 {
        color: var(--color4);
    }
}

</style>
