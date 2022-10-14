<template>
  <main class="app-stage">
    <section class="side-menu">
      <h1>Jason M. Harrison </h1>
      <h2 class="fancy">Over a Decade Working Where Art + Science Meet</h2>
      <Me class="me" />
    </section>
    <section class="main-stage">
      <div class="topic-selection">
        <button 
          v-for="topic in topics" 
          :key="topic" 
          :class="{ active: topic === currentTopic }"
          @click="setTopic(topic)"
        >{{ topic }}</button>
      </div>
      <div class="link-list-wrapper">
        <div v-for="link in appList" class="link-list" :key="link.href">
          <div class="arrow-right"></div>
          <div class="link-info">
            <h4 class="name"><a :href="link.href" target="_blank">{{ link.name }}</a></h4>
            <p class="desc fancy">{{ link.desc }}</p>
            <section class="tech-display">
              <span v-for="tech in link.tech" :key="tech" class="pill">{{ tech }}</span>
            </section>
            <div class="fade-over" />
            <img :style="{ backgroundImage: `url(${link.img})` }" class="link-img" />
          </div>
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
      currentTopic: null,
      topics: [
        'software',
        'design',
      ],
    }
  },
  mounted() {
    this.currentTopic = this.topics[0];
  },
  methods: {
    setTopic: function(topic) {
      this.currentTopic = topic;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../styles/palette';
@import '../styles/typog';

.app-stage {
  // background: linear-gradient(to bottom left, $primary 50%, $secondary 50%);
  height: 100vh;
  padding: 0 5rem;
  display: flex;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%2398c1d9' fill-opacity='0.8' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");  border-top: 10px solid $accent;

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
  margin-bottom: 1rem;
  transition: all 0.2s;
  border-left: 10px solid $primary;
  box-shadow: -1px 7px 19px -3px rgba(0,0,0,0.5);

  &:hover {
    border-color: $accent;

    .name a {
      color: $accent;
      text-decoration: none;
    }

    .pill {
      color: white;
      background-color: $accent;
    }
  }

  .name {
    text-transform: uppercase;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    z-index: 10;

    a {
      color: $primary;
      position: relative;
      transition: all 0.4s;
      text-decoration: none;
      display: block;
    }

    a::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 4px;
      border-radius: 4px;
      background-color: rgba($accent, 0.5);
      bottom: -10px;
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
    z-index: 10;
    padding-right: 20rem;
  }
}

.link-info {
  position: relative;
  z-index: 10;
  overflow: hidden;
  padding: 1rem 2rem;

  .desc, .name, .tech-display {
    position: relative;
    z-index: 10;
  }

  .link-img {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    filter: saturate(5);
    transition: all 0.4s;
    background-size: cover;
    scale: 1.1;
  }
}

.link-list:hover {
  .link-img {
    filter: saturate(1);
    background-position: 20%;
    scale: 1;
  }

  .arrow-right {
    opacity: 1;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 15px solid $accent;
  }
}

.arrow-right {
  transition: all 0.3s;
  opacity: 0;
  border-top-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
}

.fade-over {
  position: absolute;
  z-index: 2;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to left, rgba(255,0,0,0) 0%, rgba(255,255,255,1) 60%);
}

.topic-selection {
  display: flex;
  justify-content: space-around;
  padding: 2rem 0 1rem 0;

  button {
    width: 48%;
  }
}
</style>
