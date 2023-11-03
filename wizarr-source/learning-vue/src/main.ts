/**
 * This is where we import our SCSS file, which will be compiled into CSS and injected into our index.html file.
 * SCSS is similar to CSS, but it has some extra features that make it easier to write and maintain.
 */
import "./scss/main.scss";

// We import the App component from the App.vue file, which is the root component of our application.
import App from "./App.vue";
// We import the createApp & createPinia functions from Vue and Pinia respectively.
import { createApp } from "vue";
import { createPinia } from "pinia";
// We import a Pinia plugin that will persist our state to localStorage, so that we can refresh the page and still see our todos.
import piniaPersist from "pinia-plugin-persistedstate";
// We import the router object from our router/index.ts file, this will be used to define our routes.
import router from "./router";

// Here we create our Vue app & Pinia store.
// Please note we pass the root App component to the createApp function.
const app = createApp(App);
const pinia = createPinia();

// We use the app.use() function to install the router and pinia plugins into our app.
app.use(router);
app.use(pinia);

// Similarly, we use the pinia.use() function to install the piniaPersist plugin into our pinia store.
pinia.use(piniaPersist);

// Finally, we mount our app to the #app element in our index.html file.
app.mount("#app");
