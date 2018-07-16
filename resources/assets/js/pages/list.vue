<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            List
        </div>

        <div v-for="item in list" :key="item.id" class="panel-body">
            {{ item.name }}
        </div>
    </div>
</template>

<script>
    export default {
        data: () => {
          return {
            list: []
          }
        },

        mounted() {
            this.axios.get('/api/test_list').then((response) => {
              this.list = response.data;
              console.log(this.list);
            })
        }
    }
</script>
