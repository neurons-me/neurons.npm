#!/bin/bash
set -e

APP_NAME="neurons.installer"
DMG_NAME="Neurons-Installer"
VOL_NAME="Neurons Installer"
BACKGROUND_IMG="background.tiff"

echo "🧹 Limpiando imágenes anteriores..."
rm -f "$DMG_NAME.dmg" "$DMG_NAME-temp.dmg"

# Desmontar posibles restos previos
for vol in "/Volumes/$VOL_NAME" "/Volumes/$APP_NAME" "/Volumes/$DMG_NAME"; do
  if [ -d "$vol" ]; then
    echo "Desmontando volumen previo: $vol"
    hdiutil detach "$vol" -force || true
  fi
done

DMG_SRC=./dmg_src
rm -rf "$DMG_SRC"
mkdir "$DMG_SRC"

echo "📦 Copiando app, README y creando link de Applications..."
cp -R "./$APP_NAME.app" "$DMG_SRC/$APP_NAME.app"
cp "./README.txt" "$DMG_SRC/README.txt"
ln -s /Applications "$DMG_SRC/Applications"

echo "📀 Creando imagen temporal..."
hdiutil create -size 200m -fs HFS+ -volname "$VOL_NAME" -srcfolder "$DMG_SRC" -ov -format UDRW "$DMG_NAME-temp.dmg"

echo "✅ Montando en Finder..."
DEVICE=$(hdiutil attach "$DMG_NAME-temp.dmg" | grep "/dev/" | head -n1 | awk '{print $1}')
sleep 3

echo "🎨 Copiando background..."
mkdir -p "/Volumes/$VOL_NAME/.background"
cp "./$APP_NAME.app/Contents/Resources/$BACKGROUND_IMG" "/Volumes/$VOL_NAME/.background/background.tiff"

echo "⚙️ Configurando layout en Finder..."
osascript <<EOD
tell application "Finder"
  tell disk "$VOL_NAME"
    open
    set current view of container window to icon view
    set toolbar visible of container window to false
    set statusbar visible of container window to false
    set the bounds of container window to {100, 100, 600, 650}
    set viewOptions to the icon view options of container window
    set arrangement of viewOptions to not arranged
    set icon size of viewOptions to 96
    set background picture of viewOptions to file ".background:background.tiff"
    set position of item "$APP_NAME.app" of container window to {150, 150}
    set position of item "Applications" of container window to {350, 150}
    set position of item "README.txt" of container window to {150, 270}
    close
    open
    update without registering applications
    delay 2
  end tell
end tell
EOD

echo "⏏️ Desmontando..."
hdiutil detach "$DEVICE" -force

echo "🔄 Comprimiendo imagen final..."
hdiutil convert "$DMG_NAME-temp.dmg" -format UDZO -imagekey zlib-level=9 -o "$DMG_NAME.dmg"

rm "$DMG_NAME-temp.dmg"
rm -rf "$DMG_SRC"

echo "✅ $DMG_NAME.dmg creado con éxito en: $(pwd)"