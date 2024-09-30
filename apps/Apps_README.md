# Gateway Setup at the App Level
Each app will have its own gateway.js file, which will act as a configuration and initialization script for the Gateway. The file will define how incoming requests should be handled based on the specified domains, whether in development or production mode.


# Problem Recap:
	•	You have a single app running on a single port (e.g., 9000).
	•	The app handles multiple domains like delpais.mx, cafedelpais.mx, etc.
	•	In production, these domains are distinct and managed correctly, but in development, using localhost:9000 doesn’t replicate the domain-based routing behavior properly.

# Proposed Solution: Simulating Domain Routing Locally Without Editing Hosts File
