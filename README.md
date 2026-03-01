# Ragnarok

Sistema de gestión y validación de contraseñas basado en FastAPI. Ragnarok proporciona una API REST para manejar autenticación de usuarios, almacenamiento seguro de credenciales y validación de contraseñas con cifrado.

**¿Para quién es?** Desarrolladores que necesitan integrar gestión de contraseñas en sus aplicaciones.  
**¿Qué problema resuelve?** Proporciona endpoints seguros para autenticación, registro y manejo de credenciales con criptografía moderna.

## Estado del proyecto

- **Estado**: En desarrollo activo
- **Versión**: 1.0.0
- **Python**: 3.8+

## Contenido

- **Introducción**: Descripción general del proyecto
- **Guía de instalación**: Configuración del entorno
- **Uso / Manual**: Endpoints disponibles y ejemplos
- **Referencia técnica**: Estructura de datos y seguridad
- **FAQ**: Preguntas frecuentes

## Instalación

### Requisitos previos
- Python 3.8 o superior
- pip (gestor de paquetes)

### Pasos de instalación

```bash
# Clonar repositorio
git clone https://github.com/usuario/ragnarok.git
cd ragnarok

# Crear entorno virtual (opcional pero recomendado)
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate

# Instalar dependencias
pip install -r requirements.txt
```

## Uso

### Ejecutar servidor local

```bash
# Desde la carpeta API
cd API
uvicorn main:app --reload
```

El servidor estará disponible en `http://localhost:8000`
Documentación interactiva: `http://localhost:8000/docs`

### Endpoints principales

#### Registro de usuario
```bash
POST /register
```

#### Autenticación
```bash
POST /login
```

#### Validación de contraseña
```bash
POST /validate-password
```

## Estructura del proyecto

```
ragnarok/
├── API/                    # Servidor FastAPI
│   ├── main.py            # Aplicación principal
│   ├── users.json         # Base de datos de usuarios
│   └── passwords.json     # Almacén de contraseñas cifradas
├── src/                   # Plantillas y datos
│   ├── users.json
│   └── passwords.json
├── extension/             # Extensiones (navegador, etc.)
├── requirements.txt       # Dependencias Python
├── CODE_OF_CONDUCT.md     # Código de conducta
├── CONTRIBUTING.md        # Guía de contribución
└── README.md             # Este archivo
```

## Seguridad

- Las contraseñas se cifran usando Fernet (criptografía simétrica)
- PBKDF2 para derivación de claves
- CORS habilitado para acceso controlado
- Tokens de sesión con secrets seguros

## Contribución

¡Las contribuciones son bienvenidas! Por favor, consulta [CONTRIBUTING.md](CONTRIBUTING.md) para más detalles.

## Código de Conducta

Este proyecto adhiere a un Código de Conducta. Por favor, consulta [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

## Licencia

Este proyecto está bajo la licencia [LICENSE](LICENSE)

## FAQ

**¿Cómo reseteo mi contraseña?**  
Puedes usar el endpoint `/reset-password` con tu usuario.

**¿Es seguro almacenar mis contraseñas aquí?**  
Sí, utilizamos criptografía moderna (Fernet) para cifrar todas las contraseñas.

**¿Puedo usar esto en producción?**  
Este es un proyecto educativo. Para producción, considera medidas de seguridad adicionales como HTTPS, bases de datos persistentes, etc.

## Soporte

Para reportar bugs o sugerir mejoras, abre un issue en el repositorio.
