<template>
  <v-app >
    <v-navigation-drawer permanent height='auto' class="grey darken-2" dark >
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar tag="ul">
            <v-list-tile-action>
              <v-icon left dark>sentiment_very_satisfied</v-icon>
            </v-list-tile-action>
            <v-list-title-content>
              User email
            </v-list-title-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list dense class="pt-0">
        <v-list-tile v-for="item in menuItems" :key="item.title">
          <v-list-tile-action>
            <v-icon dark>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="blue-grey darken-3" dark>
      <v-toolbar-title>OfficeApp</v-toolbar-title>
    </v-toolbar>
    <main light>
      <router-view></router-view>
  
    </main>
  
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
        menuItems: [
          {icon: 'supervisor_account', title: 'Users'},
          {icon: 'domain', title: 'Offices'},
          {icon: 'equalizer', title: 'Levels'},
          {icon: 'location_on', title: 'POIs'},
          {icon: 'gps_fixed', title: 'Beacons'},
          {icon: 'mail', title: 'Requests'},
          {icon: 'content_paste', title: 'Request topics'},
          {icon: 'child_care', title: 'Domains'},
          {icon: 'phonelink', title: 'Devices'},
          {icon: 'notifications', title: 'Notification group'}

        ]
      }
    }
  }
</script>

<style lang="stylus">
  @import '../../stylus/main.styl'
</style>
