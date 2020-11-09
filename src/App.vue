<template>
  <div id="app">
    <input-component
      :titles="titles"
      :roles="roles"
      placeholder="Select Title"
    />
  </div>
</template>

<script>
import InputComponent from 'qinput';

export default {
  name: 'App',
  components: { InputComponent },
  data() {
    return {
      titles: [
        'CEO', 'CTO', 'COO', 'CWO', 'Software Engineer',
      ],
      roles: ['Read', 'Write', 'Delete'],
    };
  },
};
</script>

<style>

</style>
