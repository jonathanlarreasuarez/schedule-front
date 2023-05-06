<template>
  <header class="header">
    <div class="header__left">
      <span class="header__text">{{ title }}</span>
    </div>
    <div class="header__right">

      <form class="header__search">
        <input type="text" placeholder="Search...">
      </form>
      <div class="header__notification">
        <font-awesome-icon icon="bell"/>
      </div>
      <div class="header__profile">
        <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="Profile">
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      title: 'Schedules',
    };
  },
};
</script>

<style>
.header__notification {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin: 0 8px;
  border-radius: 50%;
  color:  black;
}

.header__profile {
  display: flex;
  align-items: center;
  justify-content: center; ;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
}

.header__profile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 0 16px;
}

.header__left {
  display: flex;
  align-items: center;
  flex: 1;
}

.header__right {
  display: flex;
  align-items: center;
}

.header__text {
  font-size: 24px;
  font-weight: bold;
}

.header__search {
  display: flex;
  align-items: center;
  background-color: #fff;
  border: none;
  border-radius: 20px 0 0 20px;
}

.header__search input[type="text"] {
  height: 32px;
  padding: 0 8px;
  border: none;
  border-radius: 4px 0 0 4px;
}
</style>
