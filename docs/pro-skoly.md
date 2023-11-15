# Pro školy

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

[Domů](./index)
[Projekt](./projekt)

<span v-for="i in 3">{{ i }}</span>

<script setup>
import { useData } from 'vitepress'
import Table from '../docs/components/Table.vue'
const { page } = useData()
</script>

<pre>{{ page }}</pre>

<Table />