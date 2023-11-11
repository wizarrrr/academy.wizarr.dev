# Installation

## Get started with Tailwind CSS

Tailwind CSS is a utility-first CSS framework that works by scanning HTML files, JavaScript components, and other templates for class names. It generates corresponding styles and writes them to a static CSS file.

### Installation Method for Vue

#### 1. Using PostCSS

Installing Tailwind CSS as a PostCSS plugin is the most seamless way to integrate it with build tools like webpack, Rollup, Vite, and Vue.

### Installation Steps

1.  **Install Tailwind CSS:**

    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init
    ```
2.  **Add Tailwind to your PostCSS configuration:**

    Create or update your `postcss.config.js` file in the root folder of your project with the following content:

    ```javascript
    module.exports = {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      }
    }
    ```
3.  **Configure your template paths:**

    Add the paths to all of your template files in your `tailwind.config.js` file:

    ```javascript
    // tailwind.config.js
    module.exports = {
      content: ["./src/**/*.{vue,js,ts}"],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```
4.  **Add the Tailwind directives to your CSS or SCSS:**

    Include the Tailwind directives in your main CSS file (e.g., `./src/css/main.css` or `./src/scss/main.scss`)

    ```css
    /* main.css or main.scss */
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
5.  **Start your build process:**

    Run your build process with the configured command (e.g., `npm run serve`):

    ```bash
    # Command for Vue
    npm run serve
    ```
6.  **Start using Tailwind in your HTML:**

    Make sure your compiled CSS or SCSS is included in the `main.ts` or `main.js` file of your application:

    ```ts
    // If your using SCSS in your project
    import './scss/main.scss'
    ```

    ```js
    // If your using plain CSS in your project
    import './css/main.css'
    ```

    Now you can start using Tailwind classes inside your templates:

    ```html
      <template>
        <h1 class="text-3xl font-bold underline">
            Hello world!
        </h1>
      </template>
    ```

    This should give us something that looks like this:

    ## **Hello World**
