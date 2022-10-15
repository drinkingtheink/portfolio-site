<template>
  <main class="app-stage" :class="[currentInterest]">
    <section class="side-menu">
      <h1>Jason M. Harrison </h1>
      <h2 class="fancy">Over a Decade Working Where Art + Science Meet</h2>
      <div class="me-wrapper">
        <Me class="me" />
      </div>
      <h3>Interests:</h3>
      <div class="interests-wrapper">
        <button 
          v-for="int in interests" 
          :key="int" 
          class="int"
          :class="{ active: int === currentInterest }"
          @click="setInterest(int)"
        >{{ int }}</button>
      </div>
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
      currentInterest: null,
      interests: [
        'coding',
        'sci-fi',
        'futbol',
        'music',
      ]
    }
  },
  mounted() {
    this.currentTopic = this.topics[0];
    this.currentInterest = this.interests[0];
  },
  methods: {
    setTopic: function(topic) {
      this.currentTopic = topic;
    },
    setInterest: function(int) {
      this.currentInterest = int;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../styles/palette';
@import '../styles/typog';

.interests-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;

  button {
    width: 45%;
    margin: 5px;
    font-size: 0.9rem;
  }
}

.app-stage {
  height: 100vh;
  padding: 0 5rem;
  display: flex;
  transition: all 0.5s;
  border-top: 10px solid var(--accent);
  
  h3 {
    padding: 0 0 0.5rem 0;
    margin: 0 0 0 0.5rem 0;
    border-bottom: 2px solid var(--accent);
    color: var(--color2);
  }

  &.coding {
    background-color: #f7fff7;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%2335b4ab' fill-opacity='0.89' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");  
    h2.fancy {
      color: $colora2;
    }
  }

  &.sci-fi {
    background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='59.428' patternTransform='scale(1) rotate(25)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(235, 23%, 10%, 1)'/><path d='M0 70.975V47.881m20-1.692L8.535 52.808v13.239L20 72.667l11.465-6.62V52.808zm0-32.95l11.465-6.62V-6.619L20-13.24 8.535-6.619V6.619L20 13.24m8.535 4.927v13.238L40 38.024l11.465-6.62V18.166L40 11.546zM20 36.333L0 47.88m0 0v23.094m0 0l20 11.548 20-11.548V47.88m0 0L20 36.333m0 0l20 11.549M0 11.547l-11.465 6.619v13.239L0 38.025l11.465-6.62v-13.24L0 11.548v-23.094l20-11.547 20 11.547v23.094M20 36.333V13.24'  stroke-linecap='square' stroke-width='1.5' stroke='hsla(235, 21%, 21%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,-0.856)' fill='url(%23a)'/></svg>");

    h1 {
      color: var(--accent);
    }

    h2.fancy {
      color: $colorb6;
    }

    .pill {
      color: white;
    }

    .side-menu h3 {
      color: var(--color4);
    }
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
    color: var(--primaryDark);
  }

  .fancy {
    margin: 0;
    padding: 0;
    color: var(--primary);
    font-size: 1.25rem;
  }

  h3 {
    text-align: center;
  }

  .me-wrapper {
    padding: 1rem 0;
    display: flex;
    justify-content: center;

    #me {
      max-width: 225px;
    }
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
  border-left: 10px solid var(--primary);
  box-shadow: -1px 7px 19px -3px rgba(0,0,0,0.5);

  &:hover {
    border-color: var(--accent);

    .name a {
      color: var(--accent);
      text-decoration: none;
    }

    .pill {
      color: white;
      background-color: var(--accent);
    }
  }

  .name {
    text-transform: uppercase;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    z-index: 10;

    a {
      color: var(--primary);
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
      background-color: var(--accent);
      bottom: -10px;
      left: 0;
      transform-origin: right;
      transform: scaleX(0);
      transition: transform .3s ease-in-out;
      opacity: 0.5;
    }

    a:hover::before {
      transform-origin: left;
      transform: scaleX(1);
    }
  }

  .desc {
    color: var(--secondary);
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
    border-left: 15px solid var(--accent);
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
