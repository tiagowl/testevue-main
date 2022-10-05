<!-- HTML -->
<template>
  <section class="modal" :style="{display: store.state.openModal === true ? 'flex' : 'none'}">
    <!-- Background -->
    <div class="background"></div>
    <!-- Quadro -->
    <div class="quadro">
      <!-- Título -->
      <div class="titulo">
        <div class="texto">
          <h2><span>Novo</span></h2>
          <h2>CLIENTE</h2>
        </div>
        <button @click="closeModal" type="button">Fechar</button>
      </div>
      <!-- Nome -->
      <label>Nome <span>*</span></label>
      <div class="input cinza">
        <input v-model="name" type="text" autocomplete="false" placeholder="Digite aqui...">
      </div>
      <!-- Whatsapp -->
      <label>Whatsapp <span>*</span></label>
      <div class="input cinza">
        <input v-model="phone" type="tel" autocomplete="false" spellcheck="false" placeholder="(99) 99999-9999">
      </div>
      <button @click="addUser" type="button" class="principal">Salvar Cliente</button>
    </div>
  </section>
</template>

<!-- JS -->
<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const name = ref("");
const phone = ref("");

function addUser(){
  store.commit("addUser", {name: name.value, phone: phone.value});
  name.value = "";
  phone.value = "";
  store.commit("closeModal");
}

function closeModal(){
  store.commit("closeModal");
}

</script>

<!-- CSS -->
<style scoped>
section.modal {
  z-index: 10;
}
/* Label */
.quadro label {
  margin: 20px 0 10px 0;
}
/* Linha */
input.endereco {
  margin: 10px 0 0 0;
}
/* Data */
.quadro .data #seletorCalendario {
  position: absolute;
  top: 70px;
  left: -10px;
}
button.principal {
  margin: 20px 0 0 0;
}
/* Responsivo */
@media screen and (max-width: 1000px) {
}
</style>
