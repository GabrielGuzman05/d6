<template>
  <section>
    <Navbar />
    <v-simple-table>
      <thead>
        <th>Nombre</th>
        <th>Marca</th>
        <th>Precio</th>
      </thead>
      <tbody>
        <tr v-for="producto in productos" :key="producto.prodcutId">
          <td>{{producto.item}}</td>
          <td>{{producto.uom}}</td>
          <td>{{producto.price}}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </section>
</template>
<script>
import json from "../datos/productos.json";
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Navbar
  },
  data() {
    return {
      productos: json
    };
  }
};
</script>