# Pro školy

Jste žákem, učitelem nebo kýmkoliv z jiné školy? Chtěli byste se zapojit do našeho portálu.
Nejprve seznamte i ostatní s touto stránkou, abychom portál naplnili co nejvíce kvalitním obsahem.

Můžete si také u nás přihlásit školu a my Vám přidáme Váš seznam knih, takže každý žák si povede svou tabulku.

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

<span v-for="i in 3">{{ i }}</span>

<script setup>
import { useData } from 'vitepress'
import Table from '../docs/components/Table.vue'
const { page } = useData()
</script>

<pre>{{ page }}</pre>

<Table />