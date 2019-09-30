<template>
  <section>
    <Navbar />
    <v-layout wrap mt-6 justify-center>
      <v-flex sm4>
        <v-card class="mx-auto">
          <v-img
            class="white--text"
            height="200px"
            src="../assets/card.jpg"
          >
            <v-card-title class="align-end fill-height">Agrega nuevos productos</v-card-title>
          </v-img>
          <v-card-text>Recuerda rellenar todos los campos</v-card-text>
          <v-card-actions>
            <v-btn outlined href="/formulario">Ir</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <HelloWorld />
    </v-layout>
  </section>
</template>
<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar}
};
</script>