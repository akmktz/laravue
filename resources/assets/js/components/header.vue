<template>
<div>
    <div class="title m-b-md">
        Laravel
    </div>

    <div class="links">
        <router-link :to="{ name: 'list' }">List</router-link>
        <router-link :to="{ name: 'foo' }">Перейти к Foo</router-link>
        <router-link :to="{ name: 'bar' }">Перейти к Bar</router-link>
    </div>
</div>
</template>
