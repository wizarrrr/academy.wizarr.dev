import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";

/**
 * In this file, we define the routes of our application.
 * We import the view component for our home page and define a route for it.
 * At the bottom of the file, we export the router object so we can use it in our main.ts file.
 */

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
