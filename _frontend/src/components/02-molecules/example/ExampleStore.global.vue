<script>
export default {
  name: 'ExampleStore',
  data() {
    return {};
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    increase() {
      this.$store.dispatch('increment');
    },
  },
};
</script>
