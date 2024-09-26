---

# **Neuroverse**

**Description:**  
Neuroverse is a monorepo containing multiple applications managed centrally. Each application is a submodule that can be managed independently.

## **Prerequisites**

1. **Git**: Ensure you have Git installed on your system. You can download it from [git-scm.com](https://git-scm.com/).
2. **Node.js and npm**: Install Node.js and npm from [nodejs.org](https://nodejs.org/).

## **Installation Instructions**

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

### **3. Clone Specific Submodules Only**

If you do not want to clone all the submodules, you can initialize and clone only the ones you need. Use the following command, replacing `<submodule-path>` with the path to the specific submodule you want to clone, such as `apps/FullTrailer`:

```bash
git submodule update --init <submodule-path>
```

Example to clone only FullTrailer:

```bash
git submodule update --init apps/FullTrailer
```

### **4. Update Submodules**

To update all submodules to their latest version, use:

```bash
git submodule update --remote --merge
```

This command will fetch updates for all submodules and merge them with your local version.

### **5. Adding New Submodules**

If you need to add a new submodule, use the following command:

```bash
git submodule add <repository-url> <submodule-path>
```

Example:

```bash
git submodule add https://github.com/neurons-me/Arche.git apps/Arche
```

After adding the submodule, update the `.gitmodules` file and make sure to commit the changes.

### **6. Removing a Submodule**

To remove a submodule, follow these steps:

1. Edit the `.gitmodules` file and remove the entry for the submodule.
2. Edit `.git/config` and remove the section corresponding to the submodule.
3. Remove the submodule from the index and the working directory:

   ```bash
   git rm --cached <submodule-path>
   rm -rf <submodule-path>
   ```

4. Commit the changes to the monorepo.

### **Common Issues**

- **Submodules not cloned:** Ensure you have run `git submodule update --init --recursive` after cloning the monorepo.
- **Failed submodule update:** Use `git submodule update --remote --merge` to force an update.

## **Contributing**

If you want to contribute to this monorepo, follow these steps:

1. Clone the monorepo and initialize the required submodules.
2. Make your changes and create a new branch for your work.
3. Commit your changes and push them to the remote repository.

---

