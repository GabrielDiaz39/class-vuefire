<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Add Product</h3>
      <form @submit.prevent="onFormSubmit">
        <div class="form-groupclear">
          <label>Name</label>
          <input
            type="text"
            class="form-control"
            v-model="product.name"
            required
          />
        </div>
        <div class="form-group">
          <label>Price</label>
          <input
            type="text"
            class="form-control"
            v-model="product.price"
            required
          />
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block">Add Product</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { db } from "../firebase";
export default {
  data() {
    return {
      product: {
        name: "",
        price: "",
      },
    };
  },
  methods: {
    onFormSubmit(event) {
      //alert(JSON.stringify(this.product));
      event.preventDefault();
      db.collection("products")
        .add(this.product)
        .then(() => {
          alert("Product successfully created!");
          this.product.name = "";
          this.product.price = "";
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>