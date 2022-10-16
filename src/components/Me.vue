<template>
  <div class="me-stage">
    <MeCode v-show="currentInterest === 'coding' || currentInterest === 'music'" class="me" />
    <MeSciFi v-show="currentInterest === 'sci-fi'" class="me" />
    <MeFB v-show="currentInterest === 'futbol'" class="me" />
    <div class="nametag">
      {{ currentInterest === 'coding' ? 'Console Cowboy' : null }}
      {{ currentInterest === 'sci-fi' ? 'Explorer' : null }}
      {{ currentInterest === 'futbol' ? 'Futbolero' : null }}
      {{ currentInterest === 'music' ? 'ACL Headliner' : null }}
    </div>
  </div>
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

<style lang="scss">
@import '../styles/typog';

.me-stage {
  position: relative;
  height: 100%;
}

.me-img {
  position: absolute;
  width: 100%;
}

#MeSciFi {
  width: 110%;
  margin-left: -18px;
}

.nametag {
  position: absolute;
  bottom: 25px;
  height: 2rem;
  width: 100%;
  text-align: center;
  margin: auto;
  left: -1rem;
  right: 0;
  padding: 0.25rem 1rem 0.5rem 1rem;
  font-family: $fancyFont;
  font-size: 1.5rem;
}

.app-stage {
  &.coding {
    .nametag {
      background-color: var(--secondary);
      color: var(--primaryDark);
    }
  }

  &.sci-fi {
    .nametag {
      background-color: var(--accent);
      color: var(--color6);
    }
  }

  &.futbol {
    .nametag {
      background-color: var(--secondary);
      color: white;
    }
  }

  &.music {
    .nametag {
      background-color: var(--primary);
      color: white;
    }
  }
}
</style>
