<template>
  <div id="app" :class="the_?'dark':'light'">
    <header class="head">
      <span>LOGO</span>
      <ul class="list">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/index">主页</router-link>
        </li>
      </ul>
      <div class="right" @click="changeThems"> <i class="blog icon-theme"></i> </div>
    </header>
    <router-view />
  </div>
</template>

<style lang="scss">
$fff:#fff;
$black:rgb(60, 67, 75);
$darkg:#394c5d;

#app {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x:hidden ;

}
.dark {
  background: $black;
  color: $fff;
  transition: all 0.3s linear;
  a{
    text-decoration: none;
    color: $fff;
  }
  a:active{
    color: $fff;
  }
}
.light {
  transition: all 0.3s linear;
  background: $fff;
  color: $darkg;
  a{
    text-decoration: none;
    color: $darkg;
  }
  a:active{
    color: $darkg;
  }
}
.bgcover {
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(0.625rem);
  z-index: 1;
  width: 100%;
  height: 100vh;
  background: rgba(211, 211, 211, 0.6);
}
router-link {
  color: #fff;
}

.head {
  // border-bottom: 1px solid #fff;
  height: 5rem;
  width: 100%;
  display: flex;
  
  
}
.head span {
  flex: 1;
  align-self: center;
  justify-self: center;
  text-align: center;
}
.head .list {
  flex: 5;
  align-self: center;
  text-align: left;
  /* background: violet; */
}
.list li {
  display: inline-block;
  width: 6.25rem;
}
.head .right {
  flex: 1;
  align-self: center;
  font-size: 2rem;
  transform-origin: center;
  transform: rotate(180deg);
  // transition:  0.2s ease-out;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import { ref } from "vue";
export default {
  setup() {
    const the_ = ref(false)
    const changeThems = () => {
      // console.log("dianji");
      the_.value = !the_.value;
    };

    return { the_, changeThems };
  }
};
</script>
