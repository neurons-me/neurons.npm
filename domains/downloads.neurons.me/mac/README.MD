### Desde el proyecto monad.ai
Compila el binario en modo release:
```bash
cargo build --release
```

### Copia el binario al installer
Copia el binario compilado dentro del `.app`:
```bash
cp /ruta/a/monad.ai/target/release/monad.ai ./neurons.installer.app/Contents/MacOS/monad.ai
```

---

### Crea el instalador oficial (.pkg)

Asegúrate de tener la estructura:
```
neurons.installer.builder/
 ├── neurons.installer.app/
 └── scripts/
     └── postinstall
```

El archivo `postinstall` debe:
- No llevar extensión.
- Tener permisos ejecutables: `chmod +x scripts/postinstall`.
- Contener:
```bash
#!/bin/bash
echo "Running postinstall..."
if ! grep -q "local.monad" /etc/hosts; then
  echo "127.0.0.1   local.monad" >> /etc/hosts
  echo "local.monad added to /etc/hosts"
else
  echo "local.monad already present in /etc/hosts"
fi
exit 0
```

Ejecuta en la carpeta `neurons.installer.builder/`:
```bash
pkgbuild \
  --install-location /Applications \
  --component "./neurons.installer.app" \
  --scripts ./scripts \
  neurons-installer.pkg
```

Esto generará un archivo `neurons-installer.pkg` listo para distribución.

---

### Subirlo a downloads.neurons.me
Copia el `.pkg` al servidor donde tengas Netget apuntando a:
```
/var/www/downloads.neurons.me/mac/neurons-installer.pkg
```

La estructura final del servidor:
```
downloads.neurons.me/
│
├── index.html
│
├── mac/
│   ├── neurons-installer.pkg
│
├── windows/
│   ├── neurons-me-installer.exe
│
└── linux/
    ├── neurons-me-installer.tar.gz
```

---

Late night coding. Cheers to the future, **suiGn.**
