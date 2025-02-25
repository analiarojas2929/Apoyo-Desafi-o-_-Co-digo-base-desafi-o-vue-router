<template>
  <section class="home">
    <div class="container">
      <div class="product-detail">
        <div class="row">
          <div class="col-sm-4 col-12 px-5 mb-4">
            <div class="card">
              <!-- Imagen del producto -->
              <img :src="getImagenUrl(producto.imagen)" class="card-img-top" :alt="producto.nombre" />
              
              <div class="card-body">
                <h2 class="card-title fw-bold">{{ producto.nombre }}</h2>
                <p class="card-text">{{ producto.descripcion }}</p>
              </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"><strong>Precio:</strong> ${{ producto.precio }}</li>
                  <li class="list-group-item"><strong>Cantidad:</strong> {{ producto.cantidad }}</li>
                </ul>
                <div class="card-body">
                  <router-link :to="{ name: 'productos', params: { id: producto.id } }" class="card-link">Ver más</router-link>
                  <a href="#" class="card-link">Comprar</a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      producto: {
        id: 1,
        nombre: 'Desayunos',
        descripcion: 'Deliciosos y nutritivos desayunos para empezar bien el día.',
        precio: 2000,
        cantidad: 'Para dos personas',
        imagen: 'desayunos.jpg'
      }
    };
  },
  methods: {
    getImagenUrl(imagen) {
      try {
        return require(`@/assets/img/${imagen}`);
      } catch (error) {
        console.error('Error cargando imagen:', error);
        return '';
      }
    }
  }
};
</script>

<style scoped>

</style>
