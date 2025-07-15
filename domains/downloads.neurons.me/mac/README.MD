### Desde el proyecto monad.ai
cargo build --release

### Copia el binario al installer
cp /ruta/a/monad.ai/target/release/monad.ai ./neurons.installer.app/Contents/MacOS/monad.ai

---

### Crea el .dmg
Ejecuta en la carpeta neurons.installer/
 (la carpeta **que contiene** neurons.installer.app y Applications)

```bash
hdiutil create \
 -volname "Neurons Installer" \
 -srcfolder "./" \
 -ov \
 -format UDZO \
 Neurons-Installer.dmg
```

Esto generará el archivo Neurons-Installer.dmg comprimido y optimizado.

---

### Subirlo a downloads.neurons.me
Copias el .dmg al servidor donde tengas Netget apuntando a:
/var/www/downloads.neurons.me/mac/neurons-me-installer.dmg
debe verse así:
downloads.neurons.me/
│
├── index.html
│
├── mac/
│   ├── Neurons-Installer.dmg
│
├── windows/
│   ├── neurons-me-installer.exe
│
└── linux/
    ├── neurons-me-installer.tar.gz
    
Late night coding. Cheers to the future, **suiGn.**




