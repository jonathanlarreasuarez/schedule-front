<template>
  <div class="left-sidebar">

    <div class="left-sidebar-first">
      <div class="left-sidebar-first-inner">
        <ul>
          <li>
            <font-awesome-icon icon="bell"/>
            Dashboard
          </li>
          <li>
            <font-awesome-icon icon="tag"/>
            Transactions
          </li>
          <li>
            <font-awesome-icon icon="calendar"/>
            Schedules
          </li>
          <li>
            <font-awesome-icon icon="user"/>
            Users
          </li>
          <li>
            <font-awesome-icon icon="gear"/>
            Settings
          </li>
        </ul>
      </div>
    </div>
    <div class="left-sidebar-second">
      <div class="left-sidebar-second-inner">
        <ul>
          <li>Help</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
    <!-- Agrega aquí el contenido del left sidebar -->
  </div>
</template>

<script>
export default {
  name: 'LeftSidebar',
};
</script>

<style>
.left-sidebar {
  margin: 3vh;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: lightskyblue;
  border-radius: 20px;
  color: white;

}

.left-sidebar-first li {
  list-style: none;
  padding: 10px 0;
  border-left: none;
}

.left-sidebar-second li {
  list-style: none;
  padding: 5px 0;
  border-left: none;
}

.left-sidebar-first {
  height: 80%;
  font-size: 14px;
}

.left-sidebar-first-inner {
  margin-top: 30%;
  margin-left: 10%;
  margin-right: 10%;
}

.left-sidebar-second {
  height: 20%;
  font-size: 12px;
}

.left-sidebar-second-inner {
  margin-top: 5%;
  margin-left: 10%;
  margin-right: 10%;
}

</style>
