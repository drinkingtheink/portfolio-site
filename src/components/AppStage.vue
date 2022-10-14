<template>
  <main class="app-stage">
    <section class="side-menu">
      <h1>Jason M. Harrison </h1>
      <h2 class="fancy">Over a Decade Working Where Art + Science Meet</h2>
      <Me class="me" />
    </section>
    <section class="main-stage">
      <div class="link-list-wrapper">
        <div v-for="link in appList" class="link-list" :key="link.href" :style="{ backgroundImage: `url(${link.img})` }">
          <h4 class="name"><a :href="link.href" target="_blank">{{ link.name }}</a></h4>
          <p class="desc fancy">{{ link.desc }}</p>
          <section class="tech-display">
            <span v-for="tech in link.tech" :key="tech" class="pill">{{ tech }}</span>
          </section>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { appList } from '../fixtures/links'
import Me from './Me.vue'

export default {
  name: 'AppStage',
  props: {
    msg: String
  },
  components: {
    Me,
  },
  data() {
    return {
      stuff: 'ynwa',
      appList: appList,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../styles/palette';
@import '../styles/typog';

.app-stage {
  height: 100vh;
  padding: 0 5rem;
  display: flex;
  background-color: $color2;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%233d5a80' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  border-top: 10px solid $accent;

  h3 {
    padding: 0;
    margin: 0;
  }
}

.side-menu {
  padding: 2rem 2rem 1rem;
  max-width: 20rem;

  h1 {
    font-size: 2rem;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    color: $primaryDark;
  }

  .fancy {
    margin: 0;
    padding: 0;
    color: $primary;
  }

  #me {
    max-width: 225px;
    transition: all 0.2s;
    margin: 0 auto;
  }
}

.link-list-wrapper {
  padding-bottom: 40rem;
  max-height: 85vh;
  overflow-x: auto;
  padding: 1rem;
}

.link-list {
  position: relative;
  text-align: left;
  margin-bottom: 0.5rem;
  padding: 1rem;
  transition: all 0.2s;
  border-left: 10px solid transparent;
  background-size: cover;
  background-position: 20% 10%;

  &:hover {
    border-color: $accent;

    .name a {
      color: $accent;
      text-decoration: none;
    }
  }

  .name {
    text-transform: uppercase;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;

    a {
      color: $primary;
      position: relative;
      transition: all 0.4s;
      text-decoration: none;
    }

    a::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 4px;
      border-radius: 4px;
      background-color: $accent;
      bottom: 0;
      left: 0;
      transform-origin: right;
      transform: scaleX(0);
      transition: transform .3s ease-in-out;
    }

    a:hover::before {
      transform-origin: left;
      transform: scaleX(1);
    }
  }

  .desc {
    color: $primaryDark;
    font-size: 1.25rem;
  }
}
</style>
