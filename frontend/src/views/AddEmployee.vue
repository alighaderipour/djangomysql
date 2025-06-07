<template>
  <div>
    <h2>Add Employee</h2>
    <form @submit.prevent="submit">
      <input v-model="firstName" placeholder="First Name" required />
      <input v-model="lastName" placeholder="Last Name" required />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return { firstName: '', lastName: '' }
  },
  methods: {
    submit() {
      fetch('http://127.0.0.1:8000/employees/add/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName: this.firstName, lastName: this.lastName })
      })
      .then(res => res.json())
      .then(() => {
        this.firstName = ''
        this.lastName = ''
        alert('Employee added')
      })
    }
  }
}
</script>
