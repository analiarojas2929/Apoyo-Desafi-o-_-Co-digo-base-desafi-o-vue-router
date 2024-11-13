<template>
  <div class="col-sm-4 col-12 px-5 mb-4">
    <div class="card">
      <!-- Imagen del producto -->
      <img :src="getImagenUrl(imagen)" class="card-img-top" :alt="nombre" />

      <!-- Información del producto -->
      <div class="card-body">
        <h5 class="card-title fw-bold">{{ nombre }}</h5>
        <p class="card-text">{{ descripcion }}</p>
      </div>

      <!-- Lista adicional de detalles -->
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>Precio:</strong> ${{ precio }}</li>
        <li class="list-group-item"><strong>Stock:</strong> {{ cantidad }}</li>
      </ul>

      <!-- Enlaces para Ver más detalles o Comprar -->
      <div class="card-body">
        <!-- Enlace que lleva a ProductosView.vue con props -->
        <router-link
          :to="{
            name: 'productos',
            query: {
              nombre,
              descripcion,
              precio,
              cantidad,
              imagen
            }
          }"
          class="btn btn-primary"
        >
          Ver más
        </router-link>
        <a href="#" class="card-link">Comprar</a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  nombre: String,
  descripcion: String,
  precio: Number,
  cantidad: Number,
  imagen: String
});

function getImagenUrl(imagen) {
  try {
    return require(`@/assets/img/${imagen}`);
  } catch (error) {
    console.error('Error cargando imagen:', error);
    return '';
  }
}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.05);
}
</style>
