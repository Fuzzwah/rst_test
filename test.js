<script setup lang="ts">
  const hello = {}
</script>
<template>
	<div v-if="hello?.world" />
</template>
<style>
	div {
      font-size: 16px;
    }
</style>
