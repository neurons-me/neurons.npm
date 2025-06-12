Flujo del Sistema REDDIT:
	1.	Ruta (routes.js)
	•	Define las rutas y llama a las funciones del redditController.
	2.	Controlador (redditController.js)
	•	Maneja la solicitud HTTP.
	•	Valida datos, gestiona la sesión, y delega tareas a redditApi.
	3.	Lógica de negocio (redditApi.js)
	•	Interactúa con la API de Reddit.
	•	Realiza cálculos, transformaciones, o llamadas HTTP.
	4.	Respuesta al cliente
	•	El controlador regresa la respuesta procesada al cliente (puede ser una vista o JSON).



