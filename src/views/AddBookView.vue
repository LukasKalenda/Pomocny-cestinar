<template>
  <section class="container mx-auto">
    <h2 class="text-center">Tvorba rozborů</h2>
    <div class="mx-20">
      <div id="MyID"></div>
      <div>
        <div v-for="area in editBook" :key="area.description">
          <label for="Description" class="block text-lg text-black">{{
            area.description
          }}</label>
          <textarea
            :placeholder="area.placeholder"
            class="block mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            v-model="content"
          ></textarea>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

let simpleMode = new SimpleMDE({
  autofocus: true,
  autosave: {
    enabled: true,
    uniqueId: "MyUniqueID",
    delay: 1000,
  },
  blockStyles: {
    bold: "__",
    italic: "_",
  },
  element: document.getElementById("MyID"),
  forceSync: true,
  hideIcons: ["guide", "heading"],
  indentWithTabs: false,
  initialValue: "Hello world!",
  insertTexts: {
    horizontalRule: ["", "\n\n-----\n\n"],
    image: ["![](http://", ")"],
    link: ["[", "](http://)"],
    table: [
      "",
      "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n",
    ],
  },
  lineWrapping: false,
  parsingConfig: {
    allowAtxHeaderWithoutSpace: true,
    strikethrough: false,
    underscoresBreakWords: true,
  },
  placeholder: "Type here...",
  previewRender: function (plainText) {
    return customMarkdownParser(plainText); // Returns HTML from a custom parser
  },
  previewRender: function (plainText, preview) {
    // Async method
    setTimeout(function () {
      preview.innerHTML = customMarkdownParser(plainText);
    }, 250);

    return "Loading...";
  },
  promptURLs: true,
  renderingConfig: {
    singleLineBreaks: false,
    codeSyntaxHighlighting: true,
  },
  shortcuts: {
    drawTable: "Cmd-Alt-T",
  },
  showIcons: ["code", "table"],
  spellChecker: false,
  status: false,
  status: ["autosave", "lines", "words", "cursor"], // Optional usage
  status: [
    "autosave",
    "lines",
    "words",
    "cursor",
    {
      className: "keystrokes",
      defaultValue: function (el) {
        this.keystrokes = 0;
        el.innerHTML = "0 Keystrokes";
      },
      onUpdate: function (el) {
        el.innerHTML = ++this.keystrokes + " Keystrokes";
      },
    },
  ], // Another optional usage, with a custom status bar item that counts keystrokes
  styleSelectedText: false,
  tabSize: 4,
  toolbar: false,
  toolbarTips: false,
});

const editBook = [
  {
    description: "Téma",
    placeholder: "tadz bude tema",
  },
  {
    description: "Motiv",
    placeholder: "tadz bude motiv",
  },
  {
    description: "Místo, čas",
    placeholder: "misto cas",
  },
];
</script>
