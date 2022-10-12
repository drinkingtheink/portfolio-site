<template>
  <main class="app-stage">
    <section class="side-menu">
      <Me class="me" />
      <h1>Jason M. Harrison </h1>
      <h2>Working Where Art + Science Meet</h2>
    </section>
    <section class="main-stage">
      <h3>Links to my stuff:</h3>
      <div class="link-list-wrapper">
        <div v-for="link in appList" class="link-list" :key="link.href">
          <h4 class="name"><a :href="link.href" target="_blank">{{ link.name }}</a></h4>
          <p class="desc">{{ link.desc }}</p>
          <section class="tech-display">
            <span v-for="tech in link.tech" :key="tech" class="pill">{{ tech }}</span>
          </section>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import appList from '../fixtures/links'
import Me from './Me.vue'

export default {
  name: 'HelloWorld',
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

@mixin panelBg {
  background: rgba(0,0,0,0.2);
}

@mixin panelBgDarker {
  background: rgba(0,0,0,0.4);
}

.app-stage {
  padding: 0 5rem;
  display: flex;

  h3 {
    padding: 0;
    margin: 0;
  }
}

.side-menu {
  padding: 2rem 2rem 1rem;

  .me {
    max-width: 225px;
  }
}

.link-list-wrapper {
  padding-bottom: 40rem;
  max-height: 65vh;
  overflow-x: auto;
  padding: 1rem;
}

.link-list {
  text-align: left;
  @include panelBg;
  margin-bottom: 0.5rem;
  padding: 1rem;
  transition: all 0.2s;

  &:hover {
    @include panelBgDarker;

    .name, .desc {
      color: white;
    }
  }

  .name {
    text-transform: uppercase;
    padding: 0;
    margin: 0;
  }
}
</style>
