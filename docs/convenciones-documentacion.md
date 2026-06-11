# Convenciones de documentación y encoding

Objetivo: que todos los archivos del repo se lean igual en cualquier editor, sistema
operativo o agente de IA, sin caracteres rotos (mojibake) ni diffs ruidosos.

## Encoding y formato (obligatorio)

- **Codificación:** UTF-8 **sin BOM**. Nunca Latin-1 / Windows-1252.
- **Fin de línea:** LF (`\n`). No usar CRLF.
- **Newline final:** todos los archivos terminan con un salto de línea.
- **Sin espacios al final** de línea (excepto saltos intencionales en Markdown).
- **Indentación:** espacios (4 en docs/Markdown raíz; 2 en JS/JSON/CSS/HTML).

Estas reglas están automatizadas en `.editorconfig` (las aplica el editor) y en
`.vscode/settings.json` (para VS Code). Instalar el plugin EditorConfig si el editor
no lo trae de fábrica.

## Por qué aparece el mojibake

El mojibake (`Ã³` en vez de `ó`, `â€"` en vez de `—`) ocurre cuando un archivo UTF-8
se guarda o se reabre interpretándolo como Latin-1. Para prevenirlo:

1. No cambiar la codificación al guardar.
2. Pegar texto desde fuentes UTF-8; si viene de Word/PDF, revisar comillas y guiones.
3. Para reparaciones masivas de encoding, **usar un script** (`iconv`) y revisar el
   resultado, en lugar de editar a mano archivo por archivo.

## Estilo documental

- Idioma: **español neutro**, sin regionalismos.
- La marca se escribe **YiQi** (Q mayúscula).
- Títulos en oraciones, no en mayúsculas sostenidas.
- Un `#` H1 por documento; jerarquía con `##` / `###`.
- Bloques de código siempre con lenguaje declarado (```css, ```html, ...).

## Verificación rápida

```bash
# ¿Algún archivo no es UTF-8 válido?
for f in $(git ls-files '*.md' '*.html' '*.css' '*.js'); do
  iconv -f UTF-8 -t UTF-8 "$f" >/dev/null 2>&1 || echo "NO-UTF8: $f"
done

# ¿BOM al inicio de algún archivo?
for f in $(git ls-files); do
  head -c3 "$f" | grep -q $'\xef\xbb\xbf' && echo "BOM: $f"
done
```
