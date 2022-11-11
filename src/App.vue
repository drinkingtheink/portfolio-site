<template>
  <Loading v-show="showLoading" />
  <AppStage v-if="showStage" />
</template>

<script>
import AppStage from './components/AppStage.vue'
import Loading from './components/Loading.vue'

export default {
  name: 'App',
  components: {
    AppStage,
    Loading,
  },
  data() {
    return {
      showLoading: false,
      showStage: false,
    }
  },
  mounted() {
    let hasVisited = sessionStorage.getItem('dti-visited');

    if (!hasVisited) {
      this.showLoading = true;
    }

    this.showLoading = !hasVisited;
    this.showStage = true;
  },
}
</script>

<style lang="scss">
@import './styles/base';

.app-stage.futbol {

    .JH-monogram.logo.side-menu {
      border-color: var(--secondary);

      .mono-cls-1 {
        fill: white;
      }
    }
  }
</style>
