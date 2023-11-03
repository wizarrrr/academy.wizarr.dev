<!-- 
    The App.vue file is the root component of our application. 
    It contains the main application layout and the router-view component. 
    The router-view component is a placeholder that Vue Router replaces with the appropriate component based on the current URL.
 -->
<template>
    <div class="bg-gray-100 dark:bg-gray-800 min-h-screen">
        <router-view />
    </div>
</template>
