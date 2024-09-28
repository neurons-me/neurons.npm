
# **Neuroverse**

Neuroverse is a monorepo containing multiple applications managed centrally. Each application is a submodule that can be managed independently.

###### **Prerequisites**

1. **Git**: Ensure you have Git installed on your system. You can download it from [git-scm.com](https://git-scm.com/).
2. **Node.js and npm**: Install Node.js and npm from [nodejs.org](https://nodejs.org/).

# **Installation Instructions**

### **1. Clone the Main Monorepo**

Clone the monorepo without the submodules:

```bash
git clone https://github.com/neurons-me/Neuroverse.git
cd Neuroverse
```

### **2. Initialize and Update Submodules**

Submodules are not automatically cloned with the main repository. To initialize and update all submodules, run:

```bash
git submodule update --init --recursive
```

This command will initialize and update all the submodules to the versions specified in the monorepo.

Read more at [Git_Modules.md](md/Git_Modules.md)

--------------

# **Individual App Scripts Explanation:**

```json
"scripts": {
  "dev": "concurrently \"npm:dev:*\"",
  "dev:api": "node index.js",
  "dev:gui": "cd gui && vite",
  "build": "cd gui && vite build",
  "start": "node index.js",
  "start:prod": "npm run build && npm run start"
}
```

**1.** **dev:** Uses concurrently to run multiple development scripts in parallel:

​	• **dev:api** runs the backend API using Express (index.js).

​	• **dev:gui** starts the Vite development server inside the gui directory for the front-end.

**2. dev:api:** Runs the backend API in development mode using Node.

**3. dev:gui:** Changes the directory to gui and starts the Vite development server for the front-end.

**4. build:** Builds the front-end with Vite, placing the production-ready assets in a dist directory inside gui.

**5. start:** Starts the backend API server using the compiled production files.

**6. start:prod:** Runs the build process for the front-end and then starts the backend API in production mode.

---------------

# **Neuroverse Mono Repo Scripts Explanation:**

```json
"scripts": {
  "start": "npx pm2 start pm2.config.js",
  "stop": "npx pm2 stop pm2.config.js",
  "restart": "npx pm2 restart pm2.config.js",
  "logs": "npx pm2 logs"
}
```

1. **start:** Starts all the apps defined in **pm2.config.js** using PM2. This script is responsible for running the production environment of the backend services for all the apps.

2. **stop:** Stops all apps defined in the **pm2.config.js** file.

3. **restart:** Restarts the apps, which is useful for applying changes or recovering from errors without downtime.

4. **logs:** Shows the logs of all the running apps managed by PM2, making it easier to monitor what’s happening across your services.

------------

## **PM2 for Production:**

• **Purpose:** To manage, monitor, and keep your applications running smoothly in production.

• **Usage:** Start, stop, restart, and monitor all your apps centrally using the PM2 config file (pm2.config.js).

• **Benefits:** Ensures high availability, handles crashes, and provides powerful process management tools.

## **Local Development Workflow:**

• **Purpose:** To work on individual apps with a focus on speed, hot-reloading, and easy testing.

• **Usage:** Use npm run dev within each app to start the Vite and Express servers for a development environment.

•  **Tools:** Concurrently, Vite for the frontend, and Express for the backend, tailored within each app’s package.json.

## **Deployment Flow:**

• **Build Locally:** Use npm run build within each app to generate production-ready frontend assets.

• **Deploy with PM2:** Use pm2 start pm2.config.js from the root to deploy and manage all apps, ensuring they serve the built frontend assets and run the backend servers in production mode.

## **Contributing**

If you want to contribute to this monorepo, follow these steps:

1. Clone the monorepo and initialize the required submodules.
2. Make your changes and create a new branch for your work.
3. Commit your changes and push them to the remote repository.

