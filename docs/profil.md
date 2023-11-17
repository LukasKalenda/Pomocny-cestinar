# Profil

Zde bude Vue komponenty
Jedna pro profilové informace, druhá pro tabulku
Krmeno daty z Firebasy

<script setup>
import { useData } from 'vitepress'
import Table from '../docs/components/Table.vue'
const { page } = useData()
</script>

<Table />