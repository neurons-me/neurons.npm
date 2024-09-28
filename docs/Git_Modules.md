
### **Clone Specific Submodules Only**

If you do not want to clone all the submodules, you can initialize and clone only the ones you need. Use the following command, replacing `<submodule-path>` with the path to the specific submodule you want to clone, such as `apps/FullTrailer`:

```bash
git submodule update --init <submodule-path>
```

Example to clone only FullTrailer:

```bash
git submodule update --init apps/FullTrailer
```

### **Update Submodules**

To update all submodules to their latest version, use:

```bash
git submodule update --remote --merge
```

This command will fetch updates for all submodules and merge them with your local version.

### **Adding New Submodules**

If you need to add a new submodule, use the following command:

```bash
git submodule add <repository-url> <submodule-path>
```

Example:

```bash
git submodule add https://github.com/neurons-me/Arche.git apps/Arche
```

After adding the submodule, update the `.gitmodules` file and make sure to commit the changes.

### **Removing a Submodule**

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