# Lineamientos Globales para Agentes Codificadores YiQi

## 1. Principios base

- Priorizar seguridad, mantenibilidad y legibilidad.
- Evitar codigo acoplado a una sola pantalla/modulo si puede abstraerse.
- No hardcodear secretos ni credenciales.
- Documentar decisiones tecnicas no obvias.
- Preservar estilos y convenciones existentes del repositorio.

## 2. Testing obligatorio

- Framework por defecto: Jest.
- Cada cambio funcional debe incluir o ajustar tests.
- Priorizar tests de:
  - Reglas de negocio
  - Integraciones con API
  - Casos borde y manejo de errores
- Comandos estandar esperados:
  - `npm test`
  - `npm run test:run`
  - `npm run test:coverage`

## 3. Integracion API YiQi

- Respetar contratos OpenAPI vigentes.
- Manejar errores HTTP con mensajes claros para usuario y logs tecnicos.
- Incluir timeout y estrategia de reintento cuando aplique.
- Validar y normalizar respuesta antes de mapear a UI.
- Mantener separacion de responsabilidades:
  - Capa API (fetch/axios)
  - Capa mapeo/normalizacion
  - Capa UI/estado

## 4. Diseno estandar YiQi

- Usar tokens de diseno (sin colores hardcodeados en componentes).
- Tipografia UI: Inter.
- Tipografia para datos/codigo: IBM Plex Mono.
- Asegurar responsive con breakpoint principal <= 980px.
- Mantener copy en espanol neutro.
- Reutilizar componentes de sistema antes de crear nuevos.

## 5. Buenas practicas de arquitectura

- Modulos pequenos, con funciones puras cuando sea posible.
- Evitar logica de negocio dentro de componentes visuales.
- Definir tipos/interfaces claros en TypeScript.
- Reducir duplicacion con utilidades compartidas.
- Incluir manejo consistente de estados: loading/success/error.

## 6. Checklist minimo de entrega

- Build compila sin errores.
- Tests relevantes pasan.
- Sin warnings criticos de lint.
- UI consistente con lineamientos YiQi.
- Documentacion actualizada si hubo cambios de contrato o flujo.
