<template>
  <section class="container-fluid py-5 bg-info" id="Ahora-aceptamos">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-5 mb-4 mb-md-0">
          <h2 class="text-light fw-bold display-5">Ahora aceptamos</h2>
        </div>
        <div class="col-12 col-md-7">
          <div class="row text-light align-items-center">
            <div class="col-2 text-center">
              <i class="fab fa-cc-mastercard fa-4x"></i>
            </div>
            <div class="col-2 text-center">
              <i class="fab fa-cc-visa fa-4x"></i>
            </div>
            <div class="col-2 text-center">
              <i class="fab fa-cc-amex fa-4x"></i>
            </div>
            <div class="col-2 text-center">
              <i class="fab fa-cc-diners-club fa-4x"></i>
            </div>
            <div class="col-2 text-center">
              <i class="fab fa-cc-paypal fa-4x"></i>
            </div>
            <div class="col-2 text-center">
              <i class="fab fa-cc-discover fa-4x"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#Ahora-aceptamos {
  background-color: #e91e63; /* Ajusta el color de fondo según tu diseño */
  opacity: 1 !important; /* Asegúrate de que la opacidad sea 100% */
}

i {
  color: white;
  transition: transform 0.3s ease;
}

i:hover {
  transform: scale(1.1);
}
</style>
