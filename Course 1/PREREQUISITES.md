# Prerequisites before Lesson

To start developing Vue.js applications, you need to set up your development environment with several tools and technologies. Here are the essential prerequisites, along with explanations for why you need each of them:

## Node.js

- **How to Install**:

  - Visit the [Node.js website](https://nodejs.org/).
  - Download the LTS (Long Term Support) version for your operating system.
  - Run the installer and follow the installation instructions.

- **Why Node.js**:
  Node.js is a runtime environment that allows you to run JavaScript on the server-side. Vue.js relies on Node.js to provide a development server, package management, and build tools. It's essential for developing Vue.js applications.

---

## npm (Node Package Manager)

- **How to Install**:

  - npm is included with Node.js. After installing Node.js, you'll have npm available on your system.

- **Why npm**:
  npm is the default package manager for Node.js. You will use it to install and manage JavaScript libraries and dependencies for your Vue.js projects.

---

## Visual Studio Code

- **How to Install**:

  - Visit the [Visual Studio Code website](https://code.visualstudio.com/).
  - Download the installer for your operating system.
  - Run the installer and follow the installation instructions.

- **Why Visual Studio Code**:
  Visual Studio Code (VS Code) is a popular, open-source code editor with extensive support for JavaScript and Vue.js development. It offers a wide range of extensions that enhance your development workflow.

---

## Git

- **How to Install**:

  - Visit the [Git website](https://git-scm.com/).
  - Download the installer for your operating system.
  - Run the installer and follow the installation instructions.

- **Why Git**:
  Git is a version control system that helps you manage your source code efficiently. It allows you to track changes, collaborate with others, and maintain a history of your codebase. Many Vue.js projects are hosted on Git-based platforms like GitHub or GitLab.

---

## Vue Devtools

- **How to Install**:

  - Vue Devtools is a browser extension. You can install it through your browser's extension marketplace. It's available for browsers like Chrome and Firefox.

- **Why Vue Devtools**:
  Vue Devtools is a browser extension that provides a set of tools for debugging and inspecting Vue.js applications. It helps you visualize component hierarchies, monitor state changes, and inspect your application's performance, making the development process more efficient.

---

## nvm (Node Version Manager) [Optional]

**How to Install**:

## For Windows:

1. **Install Git**:

   - Download Git from the official website: [Git for Windows](https://gitforwindows.org/).
   - Follow the installation instructions.

2. **Install nvm**:

   - Download the latest nvm installer for Windows from the GitHub releases page: [nvm-windows Releases](https://github.com/coreybutler/nvm-windows/releases).
   - Run the installer and follow the on-screen instructions.

3. **Verify Installation**:

   - Open a new command prompt and run the following command to verify that nvm is installed correctly:
     ```
     nvm version
     ```

4. **Install Node.js**:
   - Use nvm to install the desired version of Node.js, for example:
     ```
     nvm install 14.17.3
     ```

## For macOS and Linux:

1. **Install Git**:

   - Use your system's package manager to install Git if it's not already installed.
     - For macOS with Homebrew:
       ```bash
       /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
       brew install git
       ```
     - For Ubuntu or Debian-based Linux:
       ```bash
       sudo apt update
       sudo apt install git
       ```

2. **Install nvm**:

   - Open a terminal and use cURL or Wget to download and install nvm. Run the following command for cURL:
     ```bash
     curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
     ```
     Or for Wget:
     ```bash
     wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
     ```
     Make sure to replace the URL with the latest release URL from the nvm repository on GitHub if needed.

3. **Load nvm**:

   - Close and reopen your terminal or run the following command to load nvm:
     ```bash
     source ~/.nvm/nvm.sh
     ```

4. **Verify Installation**:

   - Run the following command to verify that nvm is installed correctly:
     ```bash
     nvm --version
     ```

5. **Install Node.js**:
   - Use nvm to install the desired version of Node.js, for example:
     ```bash
     nvm install 14.17.3
     ```

- **Why nvm**:
  nvm allows you to manage multiple Node.js versions on your system. This is important because different Vue.js projects may require different Node.js versions. nvm helps you switch between them easily.

---

Once you have installed these prerequisites, you'll be well-equipped to start developing Vue.js applications in the Wizarr Wizards course.
