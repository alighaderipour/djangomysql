<template>
  <div>
    <h2>Employees List</h2>
    <ul>
      <li v-for="emp in employees" :key="emp.id">
        {{ emp.firstName }} {{ emp.lastName }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return { employees: [] }
  },
  mounted() {
    fetch('http://127.0.0.1:8000/employees/')
      .then(res => res.json())
      .then(data => { this.employees = data })
  }
}
</script>
