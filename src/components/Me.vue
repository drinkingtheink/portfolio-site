<template>
  <MeCode v-show="currentInterest === 'coding'" class="me" />
  <MeSciFi v-show="currentInterest === 'sci-fi'" class="me" />
  <MeFB v-show="currentInterest === 'futbol'" class="me" />
</template>

<script>
import MeCode from './MeCode.vue'
import MeSciFi from './MeSciFi.vue'
import MeFB from './MeFB.vue'

export default {
  name: 'Me',
  props: {
    currentInterest: String
  },
  components: {
    MeCode,
    MeSciFi,
    MeFB,
  },
}
</script>

<style lang="scss" scoped>
.cls-1{fill:#fff;}.cls-2{fill:#d19477;}.cls-3{fill:#f2ccb7;}.cls-4{fill:#281305;}.cls-5{fill:#84522c;}.cls-6{fill:#fee3d4;}.cls-7{fill:#b78b6e;}.cls-8{fill:#72b776;}.cls-9{fill:#19601b;}
</style>
