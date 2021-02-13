app.component("footer-banco", {
  props: ["cantidad"],
  template: /*html*/ `
  <div class="bg-dark py-3 mt-2 text-white">
    <h3>{{texto}}</h3>
  </div>`,
  data() {
    return {
      texto: "Footer de mi sitio web",
    };
  },
  methods: {},
  computed: {},
});
