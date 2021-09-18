<template>
  <table id="tab-elements" class="table table-hover" border="1">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Slug</th>
      <th scope="col">Title</th>
      <th scope="col">Date Change</th>
      <th scope="col">Edit</th>
      <th scope="col" v-if="showDeleteButton">Delete</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(itemElements, keyElements, indexElements) in arrElements" :key="keyElements">
      <th scope="row">{{ keyElements + 1 }}</th>
      <td>{{ itemElements.name }}</td>
      <td>{{ itemElements.title }}</td>
      <td>{{ new Date(itemElements.date).toLocaleString() }}</td>
      <td class="td-button">
        <button
          type="button"
          class="btn btn-primary"
          @click="editElement(itemElements.name)"
        >
          <!--          @click="editPage(page._id)"-->
          Edit
        </button>
      </td>
      <td class="td-button" v-if="showDeleteButton">
        <button
          type="submit"
          class="btn btn-danger"
          @click="deletePage(page._id)"
        >
          Delete
        </button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "tabElements",
  props:[ "showDeleteButton", "arrElements"],
  mounted() {
    console.log('showDeleteButton-->', this.showDeleteButton)
  },
  methods: {
    editElement(slug){
      $nuxt.$emit('editElementsPage', slug);

    },
//    deletePage(page._id)
  },
}
</script>

<style scoped>
/*
#tab-elements{
  width: 100%;
  margin: 20px 0;
}
#tab-elements, #tab-elements th, #tab-elements td{
  border: 1px solid #000;
  padding: 5px;
}
 */
</style>
