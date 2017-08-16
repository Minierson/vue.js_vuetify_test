<template>
<v-container>
    <v-layout row>
        <v-flex xs6 offset-xs3 >
        <v-card>
            <v-card-title>
                <h4>Login</h4>
            </v-card-title>
        </v-card>
        </v-flex>
    </v-layout>
</v-container>

</template>

<script>
export default {
  name: 'loginView',
  data: () => ({
    userLogin: '',
    loginStatus: false,
    userPassword: '',
    passwordStatus: false
  }),
  components: {
  },
  methods: {
    login () {
      if (this.userLogin !== '' && this.userPassword !== '') {
        window.console.log(`Logging in with login ${this.userLogin} and password ${this.userPassword}`)
        // example of usage of programmatic route change
        // all components have access to this.$router
        this.$router.push('/foo')
      }
      if (this.userLogin === '') {
        this.loginStatus = true
      } else {
        this.loginStatus = false
      }
      if (this.userPassword === '') {
        this.passwordStatus = true
      } else { this.passwordStatus = false }
    }
  }
}
</script>
<style>

</style>

