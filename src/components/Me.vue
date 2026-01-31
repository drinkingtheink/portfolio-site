<template>
  <div class="me-stage">
      <MeCode v-show="currentInterest === 'coding'" class="me" />

      <MeSciFi v-show="currentInterest === 'sci-fi'" class="me" />

      <MeFB v-show="currentInterest === 'futbol'" class="me" />

      <MeMusic v-show="currentInterest === 'music'" class="me" />

    <div class="nametag">
      {{ currentInterest === 'coding' ? 'Console Cowboy' : null }}
      {{ currentInterest === 'sci-fi' ? 'Explorer' : null }}
      {{ currentInterest === 'futbol' ? 'Futbolero' : null }}
      {{ currentInterest === 'music' ? 'Tunesmith' : null }}
    </div>
  </div>
</template>

<script>
import MeCode from './MeCode.vue'
import MeSciFi from './MeSciFi.vue'
import MeFB from './MeFB.vue'
import MeMusic from './MeMusic.vue'

export default {
  name: 'Me',
  props: {
    currentInterest: String
  },
  components: {
    MeCode,
    MeSciFi,
    MeFB,
    MeMusic,
  },
}
</script>

<style lang="scss">
@import '../styles/typog';

@keyframes blurz {
  from {
    filter: blur(10px);
    opacity: 0.2;
    transform: translateY(20px);
  }

  to {
    filter: blur(0);
    opacity: 1;
    transform: translateY(0);
  }
}

.me {
  animation-name: blurz;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

.me-stage {
  position: relative;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.me-img {
  position: absolute;
  width: 100%;

  @media (max-width: 1000px) {
    bottom: 0;
  }

  @media (max-width: 700px) {
    max-width: 22rem;
  }
}

#MeSciFi {
  width: 110%;
  margin-left: -18px;
}

.nametag {
  position: absolute;
  bottom: 20px;
  height: calc(2rem + 30px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  left: -1rem;
  right: 0;
  padding: 0 1rem;
  font-family: $fancyFont;
  font-size: 1.5rem;
  transition: all 0.5s;
  border-bottom: 3px solid var(--tertiary);
  z-index: 10;

  @media (max-width: 1000px) {
    bottom: 0;
  }
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
      border-color: white;
    }
  }

  &.music {
    .nametag {
      background-color: var(--primary);
      color: white;
      border-color: var(--accent);
    }
  }
}
</style>
