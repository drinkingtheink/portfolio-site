<template>
  <main class="app-stage" :class="[currentInterest]">
    <h1 class="name mobile-display">Jason M. Harrison </h1>
    <h2 class="fancy tagline  mobile-display">Over a Decade Working Where Art + Science Meet</h2>
    
    <section class="side-menu">
      <div class="side-menu-display first">
        <h1 class="name">Jason M. Harrison </h1>
        <h2 class="fancy tagline">Over a Decade Working Where Art + Science Meet</h2>
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
        <AppList :appList="appList" />
      </div>
      <div class="link-list-wrapper" v-show="currentTopic === 'art'">
        <AppList :appList="artList" />
      </div>
      <div class="about-wrapper" v-show="currentTopic === 'about'">
        <About :needsCompFont="currentInterest === 'sci-fi'" />
      </div>
    </section>
  </main>
</template>

<script>
import { appList, social, artList } from '../fixtures/links'
import Me from './Me.vue'
import AppList from './AppList.vue'
import About from './About.vue'

export default {
  name: 'AppStage',
  components: {
    Me,
    AppList,
    About,
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
    }
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
        this.currentInterest = this.interests[0];
        this.updateIntUrlQueryStrings(this.interests[0]);
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

$appHeight: 150vh;

.app-stage {
  height: $appHeight;
  display: flex;
  transition: all 0.5s;
  border-top: 15px solid var(--accent);

  @media (min-width: 1600px) {
    padding: 0 15%;
  }


  @media (max-width: 1200px) {
    padding: 0 2rem;
  }  

  @media (max-width: 1000px) {
    display: block;
    height: 100%;
  }

  @media (max-width: 700px) {
    padding: 0 1rem;
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
      top: 15px; left: 0;
      width: 100%; height: calc($appHeight - 15px);
      background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='29' height='50.115' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(235, 23%, 10%, 1)'/><path d='M14.5 6.628L8.886 3.372v-6.515L14.502-6.4l5.612 3.257-.001 6.514zm0 50.06l-5.613-3.256v-6.515l5.614-3.258 5.612 3.257-.001 6.515zm14.497-25.117l-5.612-3.257v-6.515L29 18.541l5.612 3.257-.001 6.515zm-29 0l-5.612-3.257v-6.515L0 18.541l5.612 3.257v6.515zM14.5 11.82L4.36 5.967l.002-11.706 10.14-5.855L24.638-5.74l-.001 11.707zm0 50.06L4.36 56.028l.002-11.706 10.14-5.855 10.137 5.852-.001 11.707zm14.498-25.118L18.858 30.91l.002-11.707L29 13.349l10.137 5.853-.001 11.706zm-29 0l-10.139-5.852.002-11.707L0 13.349l10.138 5.853-.002 11.706zm14.501-19.905L0 8.488.002-8.257l14.5-8.374L29-8.26l-.002 16.745zm0 50.06L0 58.548l.002-16.745 14.5-8.373L29 41.8l-.002 16.744zM28.996 41.8l-14.498-8.37.002-16.744L29 8.312l14.498 8.37-.002 16.745zm-29 0l-14.498-8.37.002-16.744L0 8.312l14.498 8.37-.002 16.745z'  stroke-linejoin='round' stroke-linecap='round' stroke-width='0.5' stroke='hsla(55, 2%, 29%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
      border-top: 5px solid white;
      filter:opacity(1);
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

    h2.tagline {
      color: var(--accent);
    }

    .side-menu {
      h1 {
        color: var(--color4);
      }

      h2.fancy {
        color: var(--accent);
      }
    }

    .social {
      background-color: var(--color4);
      color: white;
    }
  }

  &.music::before {
    background-color: transparent;
    content: '';
    position: absolute;
    top: 15px; left: 0;
    width: 100%; height: calc($appHeight - 15px);
    background-image: url("../assets/woodgrain.svg");
    border-top: 5px solid var(--tertiary);
    filter: opacity(0.5);

     @media (max-width: 1000px) {
      background-size: cover;
    }
  }
}

h1.name {
  margin-bottom: 0;

  @media (max-width: 800px) {
    text-align: center;
  }
}

h2.tagline {
  margin-top: 0;

  @media (max-width: 800px) {
    font-size: 1.25rem;
    text-align: center;
  }
}

.side-menu {
  padding: 2rem 2rem 1rem;
  max-width: 20rem;
  position: relative;
  z-index: 10;

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

  h1 {
    font-size: 2rem;
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
    font-size: 1.25rem;
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
  max-height: 120vh;
  overflow-x: auto;
  padding: 1rem;

  @media (max-width: 700px) {
    padding: 1rem 0;
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
</style>
