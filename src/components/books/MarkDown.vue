<template>
  <div>
    <!-- Box menu -->
    <div class="flex flex-wrap">
      <button
        @mousedown.prevent="applyBold"
        class="format-button"
      >
        <i class="fas fa-bold"></i>
      </button>
      <button
        @mousedown.prevent="applyItalic"
        class="format-button"
      >
        <i class="fas fa-italic"></i>
      </button>
      <button
        @mousedown.prevent="applyHeading"
        class="format-button"
      >
        <i class="fas fa-heading"></i>
      </button>
      <button
        @mousedown.prevent="applyUl"
        class="format-button"
      >
        <i class="fas fa-list-ul"></i>
      </button>
      <button
        @mousedown.prevent="applyOl"
        class="format-button"
      >
        <i class="fas fa-list-ol"></i>
      </button>
      <button
        @mousedown.prevent="undo"
        class="format-button"
      >
        <i class="fas fa-undo"></i>
      </button>
      <button
        @mousedown.prevent="redo"
        class="format-button"
      >
        <i class="fas fa-redo"></i>
      </button>
    </div>
    <!-- Input -->
    <div
      @input="onInput"
      v-html="innerValue"
      contenteditable="true"
      class="wysiwyg-output outline-none border-2 w-1/3 border-solid p-4 rounded-lg border-gray-300 focus:border-green-300"
    />
  </div>
</template>

<script>
export default {
  name: "MarkDown",

  props: ["value"],

  computed: {
    innerValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },

  methods: {
    applyBold() {
      document.execCommand("bold");
    },
    applyItalic() {
      document.execCommand("italic");
    },
    applyHeading() {
      document.execCommand("formatBlock", false, "<h1>");
    },
    applyUl() {
      document.execCommand("insertUnorderedList");
    },
    applyOl() {
      document.execCommand("insertOrderedList");
    },
    undo() {
      document.execCommand("undo");
    },
    redo() {
      document.execCommand("redo");
    },
    onInput(event) {
      this.innerValue = event.target.innerHTML;
    },
  },
};
</script>

<style scoped>
  .format-button {
    border: 2px solid black;
    border-radius: 5px;
    padding: 3px 8px;
    margin-bottom: 3px;
    margin-right: 3px;
    cursor: pointer;
    transition: border-color 0.3s;
  }

  .format-button:hover {
    border-color: #00cc66; /* or any other hover color you prefer */
  }
</style>
