<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link :to="{name: 'Home'}" class="nav-link" exact>
              <img class="logo" src="./assets/build-a-bot-logo.png" alt="" />
              build-a-Bot
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'Builder'}" class="nav-link" exact>
              build
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view/>
      <!-- <RobotBuilder /> -->
    </main>
  </div>
</template>

<script>
// import RobotBuilder from './builder/RobotBuilder.vue';

export default {
  name: 'App',
  components: {
    // RobotBuilder,
  },
};
</script>

<style>
body {
  background: linear-gradient(to bottom, #64363C, #F4A7B9);
  background-attachment: fixed;
}
</style>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:#64363C;
  margin-top: 60px;
}

main {
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  width: 1024px;
  min-height: 300px;
}

header {
  background-color: #64363C;
  width: 1084px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
nav {
  color: #F4A7B9;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #F4A7B9;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
}

.router-link-active {
  color: white;
}
</style>
