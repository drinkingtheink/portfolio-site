export const idleShiftMixin = {
  data() {
    return {
      shiftInterval: null,
      eyebrowInterval: null
    }
  },
  mounted() {
    this.startIdleShift();
    this.startEyebrowShift();
  },
  beforeUnmount() {
    if (this.shiftInterval) {
      clearInterval(this.shiftInterval);
    }
    if (this.eyebrowInterval) {
      clearInterval(this.eyebrowInterval);
    }
  },
  methods: {
    startIdleShift() {
      const shiftProbability = 0.7;

      const shift = () => {
        if (Math.random() > shiftProbability) return;

        const x = (Math.random() - 0.5) * 4;
        const y = (Math.random() - 0.5) * 4;
        if (this.$refs.portrait) {
          this.$refs.portrait.style.transform = `translate(${x}px, ${y}px)`;
        }
      };
      shift();
      this.shiftInterval = setInterval(shift, 6000);
    },
    startEyebrowShift() {
      const raiseEyebrow = () => {
        if (!this.$refs.portrait) return;

        const eyebrowClass = Math.random() < 0.5 ? '.left-eyebrow' : '.right-eyebrow';
        const eyebrow = this.$refs.portrait.querySelector(eyebrowClass);
        if (!eyebrow) return;

        const raiseAmount = 3 + Math.random() * 3;
        eyebrow.style.transition = 'transform 0.3s ease-out';
        eyebrow.style.transform = `translateY(-${raiseAmount}px)`;

        setTimeout(() => {
          eyebrow.style.transition = 'transform 0.5s ease-in';
          eyebrow.style.transform = '';
        }, 1500 + Math.random() * 1500);
      };

      this.eyebrowInterval = setInterval(raiseEyebrow, 15000);
    }
  }
}
