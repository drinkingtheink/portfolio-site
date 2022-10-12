<template>
  <main class="app-stage">
    <section class="side-menu">
      <h1>Jason M. Harrison </h1>
      <h2>Working Where Art + Science Meet</h2>
    </section>
    <section class="main-stage">
      <h3>Links to my stuff:</h3>
      <div v-for="link in linkList" class="link-list" :key="link.href">
        <h4 class="name">{{ link.name }}</h4>
        <p class="desc">{{ link.desc }}</p>
        <section class="tech-display">
          <span v-for="tech in link.tech" :key="tech" class="pill">{{ tech }}</span>
        </section>
      </div>
    </section>
  </main>
</template>

<script>
import linkList from '../fixtures/links'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      stuff: 'ynwa',
      linkList: linkList,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.app-stage {
  padding: 0 10rem;
  display: flex;
}

.side-menu {
  padding-right: 2rem;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.link-list {
  text-align: left;
  background: rgba(0,0,0,0.2);
  margin-bottom: 0.5rem;
  padding: 1rem;

  .name {
    text-transform: uppercase;
    padding: 0;
    margin: 0;
  }
}
</style>
