<template>
  <div v-for="link in appList" class="link-list" :key="link.href">
        <div class="arrow-right" />
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
</template>

<script>
export default {
  name: 'AppList',
  props: {
    currentInterest: String,
    appList: Array,
  },
}
</script>

<style lang="scss">
@import '../styles/palette';

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

    @media (max-width: 1200px) {
      padding-right: 10rem;
    }
  }

  .name, .desc {
    text-shadow: 4px 4px 2px rgba(white, 0.6);
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

.app-stage {
    &.sci-fi {
        .link-list {
            border-left-color: var(--color4);

            &:hover {
                border-left-color: var(--accent);

                .pill {
                  color: white;
                  background-color: var(--accent);
                }
            }

            .pill {
              color: white;
              background-color: var(--primary);
            }
        }
    }

    &.music {
        .link-list {
            .desc {
              color: var(--color4);
            }

            .pill {
              background-color: var(--primary);
              color: white;
            }

            &:hover {
              .desc {
                color: var(--color4);
              }

              .pill {
                color: white;
                background-color: var(--accent);
              }
            }
        }
    }

    .pill {
      color: white;
    }
}
</style>
