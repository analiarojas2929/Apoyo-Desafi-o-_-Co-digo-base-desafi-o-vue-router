<template>
    <!-- Sección de productos -->
    <section class="container" id="productos">
        <h1 class="text-center mb-5">Nuestros Productos</h1>
        <div class="row">
            <!-- Bucle para crear una tarjeta por cada producto -->
            <div v-for="producto in productos" :key="producto.id" class="col-sm-4 col-12 px-5 mb-4">
                <div class="card">
                    <!-- Imagen del producto -->
                    <img :src="getImagenUrl(producto.imagen)" class="card-img-top" :alt="producto.nombre" />

                    <!-- Información del producto -->
                    <div class="card-body">
                        <h5 class="card-title fw-bold">{{ producto.nombre }}</h5>
                        <p class="card-text">{{ producto.descripcion }}</p>
                    </div>

                    <!-- Lista de detalles -->
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><strong>Precio:</strong> ${{ producto.precio }}</li>
                        <li class="list-group-item"><strong>Cantidad:</strong> {{ producto.cantidad }}</li>
                    </ul>

                    <!-- Botones de acción -->
                    <div class="card-body d-flex justify-content-between">
                        <!-- Enlace para ver más detalles -->
                        <router-link :to="{
                            name: 'productos',
                            query: {
                                nombre: producto.nombre,
                                descripcion: producto.descripcion,
                                precio: producto.precio,
                                cantidad: producto.cantidad,
                                imagen: producto.imagen
                            }
                        }" class="nav-link">
                            Ver más
                        </router-link>
                        <!-- Enlace para comprar -->
                        <a href="#" class="nav-link">Comprar</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

// Array de productos con datos simulados
const productos = ref([
    {
        id: 1,
        nombre: 'Desayunos',
        descripcion: 'Contamos con desayunos nutritivos y deliciosos.',
        precio: 2000,
        cantidad: 'Para dos personas',
        imagen: 'desayunos.jpg'
    },
    {
        id: 2,
        nombre: 'Colaciones',
        descripcion: 'Deliciosas colaciones para cualquier ocasión.',
        precio: 1500,
        cantidad: 'Porción individual',
        imagen: 'colaciones.jpg'
    },
    {
        id: 3,
        nombre: 'Postres',
        descripcion: 'Postres caseros y deliciosos.',
        precio: 1000,
        cantidad: 'Porción individual',
        imagen: 'dulces.jpg'
    },
    {
        id: 4,
        nombre: 'Empanadas',
        descripcion: 'Empanadas caseras de diversos sabores.',
        precio: 2500,
        cantidad: 'Caja de 6 unidades',
        imagen: 'empanadas.jpg'
    },
    {
        id: 5,
        nombre: 'Bebidas',
        descripcion: 'Refrescantes bebidas naturales.',
        precio: 1200,
        cantidad: 'Botella de 1.5L',
        imagen: 'bebidas.jpg'
    },
    {
        id: 6,
        nombre: 'Verduras',
        descripcion: 'Verduras frescas y de temporada.',
        precio: 300,
        cantidad: 'Porción por kilo',
        imagen: 'verduras.jpg'
    }
]);

// Función para obtener la URL de la imagen
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

</style>