export const idleShiftMixin = {
  data() {
    return {
      shiftInterval: null
    }
  },
  mounted() {
    this.startIdleShift();
  },
  beforeUnmount() {
    if (this.shiftInterval) {
      clearInterval(this.shiftInterval);
    }
  },
  methods: {
    startIdleShift() {
      const shift = () => {
        const x = (Math.random() - 0.5) * 4;
        const y = (Math.random() - 0.5) * 4;
        if (this.$refs.portrait) {
          this.$refs.portrait.style.transform = `translate(${x}px, ${y}px)`;
        }
      };
      shift();
      this.shiftInterval = setInterval(shift, 6000);
    }
  }
}
