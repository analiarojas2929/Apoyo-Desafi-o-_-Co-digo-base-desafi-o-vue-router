<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-pink">
    <div class="container-fluid">
      <!-- Logo y enlace a la página de inicio -->
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/logo.png" alt="Logo" class="logo" />
      </router-link>
      
      <!-- Botón de colapso para pantallas pequeñas -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Menú de navegación -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/productos">Productos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contacto">Contacto</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
/* Estilos para el Navbar */
.bg-pink {
  background-color: #e91e63 !important; /* Ajusta el color según tu diseño */
}

.navbar-nav .nav-link {
  color: #fff !important;
  font-weight: bold;
}

.logo {
  height: 40px;
  margin-right: 15px;
}
</style>
