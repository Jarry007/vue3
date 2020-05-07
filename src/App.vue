<template>
  <div id="app">
    <div class="box">
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
        <div class="right">tu</div>
      </header>
      <router-view />
    </div>
    <div class="bgcover"></div>
  </div>
</template>

<style>
a:active {
  color: #fff;
  
}
a{
  color: #fff;
  text-decoration:none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-image: url("../src/assets/share.jpg");
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
.box {
  position: absolute;
  height: 60vh;
  top: 18vh;
  width: 60%;
  left: 20%;
  border-radius: 1.25rem;
  border: 0.3125rem solid #111;
  z-index: 2;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-image: url("../src/assets/share.jpg");
  box-shadow: 0 20px 18px -10px rgb(85, 85, 85);
  color: #fff;
  overflow-x: hidden;
  overflow-y: scroll;
}
.box::-webkit-scrollbar {
  width: 0 !important;
}
.head {
  border-bottom: 1px solid #fff;
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
