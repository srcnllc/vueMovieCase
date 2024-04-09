<template>
    <header class='app-header container fluid'>
      <div class='header-wrapper'>
        <router-link to="/" class='logo'>
          VUE-NETFILMS
        </router-link>
        <nav class='navigation-menu'>
            <router-link to="/" :class="{'router-link-active': $route.path === '/' }">Ana Sayfa</router-link> |
            <router-link to="/fav" :class="{ 'router-link-active': $route.path === '/fav' }">Favoriler</router-link>
            <input type="text" placeholder="Ara..." v-model="searchTerm" @input="filterPosts" />
        </nav>
      </div>
    </header>
</template>
<script>
export default {
  name: "AppHeader", // Bileşen adı değiştirildi
  data() {
    return {
      searchTerm: ''
    };
  },
  methods: {
    filterPosts() {
      const filteredPosts = this.$store.state.posts.filter(post =>
        post.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      this.$store.commit('setFilteredPosts', filteredPosts); 
    }
  }
};
</script>

<style scoped >
.app-header {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
}

.app-header .header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.app-header .header-wrapper .logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -1px;
  color: #fafafa !important;
  text-decoration: none;
}

.app-header .header-wrapper .navigation-menu {
  display: flex;
  align-items: center;
  gap: 24px;
  color: #fafafa;
  font-weight: 700;
  letter-spacing: 2px;
}

.app-header .header-wrapper .navigation-menu a {
  text-decoration: none;
  color: #fafafa;
}

.app-header .header-wrapper .navigation-menu a:hover {
  color: #000;
}

.app-header .header-wrapper .navigation-menu input {
  padding: 5px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #fafafa;
}
.router-link-active{
  color: #000 !important;
  font-weight: bold;
}
.container {
  display: grid;
  grid-template-columns: 1fr min(1440px, 94%) 1fr;
  grid-template-rows: 96px auto 20px;
}

.container > * {
  grid-column: 2;
}

.container > .fluid {
  grid-column: 1 / -1;
}

</style>
