<template>
  <section>
    <div class="editor">
      <button @mousedown.prevent="applyBold" class="format-button">
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H12.5C14.9853 12 17 9.98528 17 7.5C17 5.01472 14.9853 3 12.5 3H6V12ZM6 12H13.5C15.9853 12 18 14.0147 18 16.5C18 18.9853 15.9853 21 13.5 21H6V12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </button>
      <button @mousedown.prevent="applyItalic" class="format-button">
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 3H20M4 21H14M15 3L9 21" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </button>
      <button @mousedown.prevent="applyHeading" class="format-button">
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Heading_H1"> <path id="Vector" d="M16 10L19 9L19 19M3 5V12M3 12V19M3 12H11M11 5V12M11 12V19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
      </button>
      <button @mousedown.prevent="applyHeading2" class="format-button">
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Heading_H2"> <path id="Vector" d="M15 12.5V12C15 10.3431 16.3431 9 18 9H18.1716C19.7337 9 20.9996 10.2665 20.9996 11.8286C20.9996 12.5788 20.702 13.2982 20.1716 13.8286L15 19.0002L21 19M3 5V12M3 12V19M3 12H11M11 5V12M11 12V19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
      </button>
      <button @mousedown.prevent="applyHeading3" class="format-button">
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Heading_H3"> <path id="Vector" d="M15 9H21L17 13H18C19.6569 13 21 14.3431 21 16C21 17.6569 19.6569 19 18 19C17.3793 19 16.7738 18.8077 16.2671 18.4492C15.7604 18.0907 15.3775 17.5838 15.1709 16.9985M3 5V12M3 12V19M3 12H11M11 5V12M11 12V19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
      </button>
      <button @mousedown.prevent="applyUl" class="format-button">
        <svg class="svg-icon" viewBox="0 0 20 20">
          <path
            d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"
          ></path>
        </svg>
      </button>
      <button @mousedown.prevent="applyOl" class="format-button">
        <svg class="svg-icon" viewBox="0 0 20 20">
          <path
            d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"
          ></path>
        </svg>
      </button>
      <button @mousedown.prevent="undo" class="format-button">
        <svg class="svg-icon" viewBox="0 0 20 20">
          <path
            d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"
          ></path>
        </svg>
      </button>
      <button @mousedown.prevent="redo" class="format-button">
        <svg class="svg-icon" viewBox="0 0 20 20">
          <path
            d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"
          ></path>
        </svg>
      </button>
    </div>

    <!-- Input -->
    <h3>Motivy</h3>
    <div
      @input="onInput"
      v-html="topic"
      contenteditable="true"
      class="wysiwyg-output"
    />
    <!-- Input -->
    <h3>Místo, čas</h3>
    <div
      @input="onInput"
      v-html="innerValue"
      contenteditable="true"
      class="wysiwyg-output"
    />
    <!-- Input -->
    <h3>Děj</h3>
    <div
      @input="onInput"
      v-html="innerValue"
      contenteditable="true"
      class="wysiwyg-output"
    />

    <button class="editor-button" @click="sendData">Odeslat</button>
  </section>
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
    topic: {
        get() {
            return this.value;
        },
        set(value) {
            this.$emit("input", value);
        },
    }
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
    applyHeading2() {
      document.execCommand("formatBlock", false, "<h2>");
    },
    applyHeading3() {
      document.execCommand("formatBlock", false, "<h3>");
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

    sendData() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
/* -----
SVG Icons - svgicons.sparkk.fr
----- */
.editor {
  display: flex;
  flex-wrap: wrap;
}
.editor-button {
  border: 2px solid black;
  border-radius: 5px;
  padding: 3px 8px;
  cursor: pointer;
  transition: border-color 0.3s;
  margin-top: 5px;
}
.editor-button:hover {
  border-color: #00cc66; /* or any other hover color you prefer */
}
.svg-icon {
  width: 1.25em;
  height: 1.25em;
}

.svg-icon path,
.svg-icon polygon,
.svg-icon rect {
  fill: #4691f6;
}

.svg-icon circle {
  stroke: #4691f6;
  stroke-width: 1;
}

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

.wysiwyg-output {
  width: 30%;
  border: 2px solid black;
  border-radius: 5px;
  padding: 3px 8px;
  margin-top: 5px;
}
</style>
