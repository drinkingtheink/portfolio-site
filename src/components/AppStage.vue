<template>
  <div>
    <main class="app-stage" :class="[currentInterest]">
        <div class="small-screen-title">
          <a class="home-link" href="/" alt="My Portfolio">
            <JHMonogram class="logo small-screen" />
            <div>
              <h1 class="name mobile-display">{{ title }}</h1>
              <h2 class="fancy tagline  mobile-display">{{ tagline }}</h2>
            </div>
          </a>
        </div>
      
      <section class="side-menu">
        <div class="side-menu-display first">
          <div class="flexer">
            <a href="/" alt="My Portfolio">
              <JHMonogram class="logo side-menu" />
              <div class="header-text">
                <h1 class="name">{{ title }}</h1>
                <h2 class="fancy tagline">{{ tagline }}</h2>
              </div>
            </a>
          </div>
          <div class="me-wrapper">
            <Me class="me-img" :currentInterest="currentInterest" />
          </div>
        </div>
        <div class="side-menu-display second">
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
          <h3>Find Me:</h3>

          <div class="socials-wrapper">
            <a 
              v-for="link in socialLinks" 
              :key="link.href"
              :href="link.href"
              class="social"
              target="_blank"
            >{{ link.name }}</a>
          </div>

          <p class="copyright">Copyright ©{{ currentYear }} Jason M Harrison/DrinkingtheInk</p>
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
        <div class="link-list-wrapper" v-show="currentTopic === 'web'" >
          <div class="scroll-message" :class="{ delay: showLoading }">
            {{ scrollMessage }} 

            <div class="arrow-down"></div>
          </div>
          <AppList :appList="appList" />
        </div>
        <div class="link-list-wrapper" v-show="currentTopic === 'art'">
          <div class="scroll-message" :class="{ delay: showLoading }">
            {{ scrollMessage }} 

            <div class="arrow-down"></div>
          </div>
          <AppList :appList="artList" />
        </div>
        <div class="about-wrapper" v-show="currentTopic === 'about'">
          <About :needsCompFont="currentInterest === 'sci-fi'" />
        </div>
      </section>
    </main>

    <!-- Img Preload List -->
    <img src="../assets/bg/woodgrain.svg" style="display: none;" />
    <img src="../assets/bg/space.svg" style="display: none;" />
    <img src="../assets/bg/grass-texture.png" style="display: none;" />
  </div>
</template>

<script>
import { appList, social, artList } from '../fixtures/links'
import Me from './Me.vue'
import AppList from './AppList.vue'
import About from './About.vue'
import JHMonogram from './JHMonogram.vue'

export default {
  name: 'AppStage',
  props: [ 'showLoading' ],
  components: {
    Me,
    AppList,
    About,
    JHMonogram,
  },
  data() {
    return {
      stuff: 'ynwa',
      appList: appList,
      socialLinks: social,
      currentTopic: null,
      artList: artList,
      topics: [
        'web',
        'art',
        'about',
      ],
      currentInterest: null,
      interests: [
        'coding',
        'sci-fi',
        'music',
        'futbol',
      ],
      tagline: 'Over a Decade Working Where Art + Science Meet',
      title: 'Jason M Harrison',
      scrollMessage: 'Scroll for more',
    }
  },
  computed: {
    firstInterests() {
      return this.interests.filter((int) => int !== 'futbol');
    },
    currentYear() {
      var dt = new Date();
      return dt.getFullYear();
    },
  },
  mounted() {
    this.checkForQueryStrings();
  },
  methods: {
    setTopic: function(topic) {
      this.currentTopic = topic;
      this.updateTopicUrlQueryStrings(topic);
    },
    setInterest: function(int) {
      this.currentInterest = int;
      this.updateIntUrlQueryStrings(int);
    },
    checkForQueryStrings: function() {
      let queryParams = new URLSearchParams(window.location.search);
      let intQuery = queryParams.get('interest');
      let topicQuery = queryParams.get('topic');
      if (intQuery) this.currentInterest = intQuery;
      else { 
        let randoInt = this.firstInterests[Math.floor(Math.random()*this.firstInterests.length)];
        this.currentInterest = randoInt;
        this.updateIntUrlQueryStrings(randoInt);
      }
      if (topicQuery) this.currentTopic = topicQuery;
      else {  
        this.currentTopic = this.topics[0] 
        this.updateTopicUrlQueryStrings(this.topics[0]);
      }
    },
    updateIntUrlQueryStrings: function(val) {
      let queryParams = new URLSearchParams(window.location.search);
      queryParams.set(`interest`, val);
      history.replaceState(null, null, `?${queryParams.toString()}`);
    },
    updateTopicUrlQueryStrings: function(val) {
      let queryParams = new URLSearchParams(window.location.search);
      queryParams.set(`topic`, val);
      history.replaceState(null, null, `?${queryParams.toString()}`);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../styles/palette';
@import '../styles/typog';
@import '../styles/animations';

.small-screen-title {
  display: flex;
  position: relative;

  @media (min-width: 1001px) {
    display: none;
  }

  .home-link {
    display: flex;
  }

  a {
    text-decoration: none;
  }

  .logo {
    display: block;
    width: 4rem;
    padding: 0 1rem;
    margin-right: 1rem;
    border-right: 1px solid var(--primary);
  }

  .name {
    font-size: 1.4rem;
  }

  .tagline {
    font-size: 1rem;
  }
}

.sci-fi-bg {
  position: absolute;
  top: 0; left: 0;
  height: 100%; width: 100%;
  z-index: 0;
}

.interests-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;

  button {
    width: 45%;
    margin: 5px;
    font-size: 0.9rem;
    padding: 0.5rem;
  }
}

.socials-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .social {
    text-transform: uppercase;
    border-radius: 20px;
    color: var(--primary);
    background-color: var(--secondary);
    padding: 0.25rem 1rem;
    font-size: 0.8rem;
    margin: 10px 10px 0 0;
    text-decoration: none;
    transition: all .2s;

    &:hover {
      background-color: var(--primary);
      color: var(--secondary);
    }
  }
}

.art-gallery-wrapper {
  display: flex;
}

.app-stage::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 5px;
  width: 100%;
  display: block;
  background-color: var(--tertiary)
}

$appHeight: 200vh;

.app-stage {
  height: $appHeight;
  display: flex;
  transition: all 0.5s;
  border-top: 15px solid var(--accent);
  position: relative;

  @media (min-width: 1501px) {
    padding: 0 15%;
  }

  @media (min-width: 1201px) and (max-width: 1500px) {
    padding: 0 6%;
  }

  @media (min-width: 1001px) and (max-width: 1200px) {
    padding: 0 2rem;
  }  

  @media (max-width: 1000px) {
    display: block;
    height: 100%;
  }

  @media (max-width: 700px) {
    padding: 0 1rem;
  }

  header {
    display: flex;
  }

  .mobile-display {
    display: none;
    position: relative;

    @media (max-width: 1000px) {
      display: block;
      width: 100%;
      z-index: 10;
    }
  }
  
  h3 {
    padding: 0 0 0.25rem 0;
    margin: 0 0 0 0.25rem 0;
    border-bottom: 2px solid var(--secondary);
    color: var(--primaryDark);

    @media (max-width: 500px) {
      margin-top: 0.5rem;
    }
  }

  &.coding {
    background-color: var(--color3);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%2335b4ab' fill-opacity='0.89' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");  
    
    h2.fancy {
      color: $colora2;
    }

    .me {
      max-width: 210px;
    }

    .nametag {
      background-color: var(--secondary);
      color: var(--primaryDark);
    }
  }

  &.sci-fi {
    background-color: var(--color1);

    h1 {
      color: var(--accent);
    }

    h2.fancy {
      color: $colorb6;
    }

    .side-menu h3 {
      color: var(--color4);
    }

    .social {
      background-color: var(--accent);
      color: var(--color6);

      &:hover {
        background-color: var(--color6);
        color: var(--accent);
      }
    }

    &.sci-fi::before {
      background-color: transparent;
      content: '';
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: calc($appHeight - 15px);
      border-top: 5px solid white;
      filter:opacity(1);
      background-image: url("../assets/bg/space.svg");
      background-size: cover;
    }
  }

  &.futbol {
    background-color: var(--primary);
    border-top-color: white;

    h2.fancy {
      color: white;
    }

    .pill {
      color: white;
    }

    .name {
      color: black;
    }

    .side-menu {
      h3 {
        color: black;
      }
    }

    .copyright {
      color: white;
    }
  }

  &.futbol::before {
    background-color: transparent;
    background-image: url("../assets/bg/grass-texture.png");
    background-repeat: repeat;
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: calc($appHeight - 20px);
    border-top: 5px solid var(--tertiary);
    filter: opacity(0.8);
    background-size: 50%;

    @media (max-width: 500px) {
      background-size: 50%;
    }
  }

  .main-stage {
    width: 100%;
  }

  &.music {
    background-color: var(--secondary);
    background-color: #f3b562;
    background: radial-gradient(circle, rgba(243,181,98,1) 45%, rgba(238,146,41,1) 81%); 
    
    h1.name {
      color: var(--color4);
    }

    .side-menu {
      h1 {
        color: var(--color4);
      }

      h2.fancy {
        color: var(--color3);
      }
    }

    .social {
      background-color: var(--color4);
      color: white;

      &:hover {
        background-color: var(--accent);
      }
    }

    .copyright {
      color: $colord4;
    }
  }

  &.music::before {
    background-color: transparent;
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: calc($appHeight - 20px);
    background-image: url("../assets/bg/woodgrain.svg");
    border-top: 5px solid var(--tertiary);
    filter: opacity(0.5);

     @media (max-width: 1000px) {
      background-size: cover;
    }
  }
}

h1.name {
  margin-bottom: 0;
}

h2.tagline {
  margin-top: 0;
  color: var(--color3);

  @media (max-width: 800px) {
    font-size: 1.25rem;
  }
}

.side-menu {
  padding: 2rem 2rem 1rem 0;
  max-width: 20rem;
  position: relative;
  z-index: 10;

  a {
    text-decoration: none;
  }

  @media (max-width: 1000px) {
    display: flex;
    width: 100%;
    max-width: 100%;
    padding-top: 0;

    .side-menu-display {
      width: 50%;
      padding-right: 2rem;

      &.first {
        h1.name, h2.tagline {
          display: none;
        }
      }
    }
  }

  @media (max-width: 700px) {
    display: block;
    padding: 0;

    .side-menu-display {
      width: 100%;
      padding-right: 0;
    }
  }

  .logo.side-menu {
    width: 3rem;
    padding: 0.5rem 0.5rem 0.5rem 0;
    position: absolute;
    border-right: 1px solid var(--secondary);

    @media (max-width: 1000px) {
      display: none;
    }
  }

  .header-text {
    padding-left: 4.5rem;
  }

  h1 {
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    color: var(--primaryDark);

    @media (max-width: 1000px) {
      display: none;
    }
  }

  .fancy {
    margin: 0;
    padding: 0;
    color: var(--primary);
    font-size: 1rem;
  }

  h2.tagline {
    @media (max-width: 1000px) {
      display: none;
    }
  }

  h3 {
    text-align: center;
  }

  .me-wrapper {
    position: relative;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    height: 20rem;

    @media (max-width: 1000px) {
      padding: 0;
    }
  }
}

.link-list-wrapper {
  padding-bottom: 100rem;
  max-height: 50rem;
  overflow-x: auto;
  padding: 1rem;
  padding-top: 0;
  border-top: 5px solid var(--accent);
  border-bottom: 5px solid var(--accent);
  position: relative;

  @media (max-width: 700px) {
    padding: 0 0 1rem 0;
  }
}

@keyframes revealSelf {
  from {
    transform: translateY(-50px);
  }
  to {
    transform: translateY(0);
  }
}

.scroll-message {
  animation: revealSelf 1s;
  width: 100%;
  color: white;
  text-align: center;
  position: sticky;
  top: 0;
  background-color: var(--accent);
  margin: 0 auto;
  z-index: 100;
  box-shadow: 0 0 3px 3px rgba(0,0,0,0.4);
  padding: 5px 0 8px 0;
  border-bottom: 3px solid var(--primary);
  font-size: 0.8rem;

  @media (max-width: 700px) {
    // width: 100%;
  }

  &.delay {
    animation-delay: 4.5s;
  }

  .arrow-down {
    position: absolute;
    z-index: 99;
    width: 0; 
    height: 0; 
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    border-top: 20px solid var(--accent);
  }
}

.topic-selection {
  display: flex;
  justify-content: space-around;
  padding: 2rem 0 1rem 0;

  button {
    width: 100%;
    margin-right: 10px;
  }
}

.copyright {
  text-align: center;
  font-size: 0.75rem;
  margin-top: 1rem;
  padding: 0.25rem;
  color: var(--tertiary);
  border-radius: 10px;
}

</style>
