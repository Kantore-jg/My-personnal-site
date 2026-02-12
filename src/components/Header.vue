<template>
  <header class="header">
    <div class="profile-img">
      <img 
        src="https://pbs.twimg.com/profile_images/1940855239579467777/FmAsEdzg_400x400.jpg" 
        alt="Kantore Jean Gildas"
        class="avatar"
      />
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;
}

.profile-img {
  position: relative;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  transition: all 0.5s ease;
  cursor: pointer;
}

.avatar:hover {
  transform: scale(1.1);
}
</style>
