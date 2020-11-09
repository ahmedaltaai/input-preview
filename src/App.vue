<template>
  <div id="app">
    <!-----------------------
    ####### COMPONENT #######
    ------------------------>
    <input-component
      :titles="titles"
      :roles="roles"
      placeholder="Select Title"
    />

    <!-----------------------
    ######## PREVIEW ########
    ------------------------>
    <div class="table">
      <table>
        <tr id="title">
          <th
            v-for="(thead, i ) in tableHeads"
            :key="i"
          >
            {{ thead }}
          </th>
        </tr>
        <tr
          v-for="person in selectedValues"
          :key="person.id"
          class="row"
        >
          <td>
            {{ person.title }}
          </td>
          <td>
            <span
              v-for="(e, i) in person.role"
              :key="i"
              class="role"
            >
              {{ e }}
            </span>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import InputComponent from 'qinput';

export default {
  name: 'App',
  components: { InputComponent },
  data() {
    return {
      tableHeads: ['Title', 'Role'],
      titles: [
        'CEO', 'CTO', 'COO', 'CWO', 'Software Engineer',
      ],
      roles: ['Read', 'Write', 'Delete'],
      selectedValues: [
        { id: 0, title: 'CEO', role: ['Write', 'Read', 'Delete'] },
        { id: 1, title: 'COO', role: ['Write'] },
        { id: 2, title: 'CFO', role: ['Read', 'Delete'] },
      ],
    };
  },
};
</script>

<style>
table {
  margin-top: 2em;
  width: 50%;
}

th {
  background-color: #777;
  color: #eee;
  padding: .5em;
}

.row td {
  padding: 1em;
}

.row:nth-child(odd) {
  background-color: #eee;
}

.row:nth-child(even) {
  background-color: #ddd;
}
</style>
