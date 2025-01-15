# HTTPS-Neurons
HTTPS-Neurons is the central directory for hosting APIs, server endpoints, React-based Vite code, and ecosystem modules for the neurons.me platform.

## Directory Structure

**1. server/**
This directory contains APIs and server endpoints used to power the backend of the neurons.me ecosystem. All server logic and API routes are defined here.

**2. subDomains/**
This directory hosts React Vite apps, with each subdirectory representing a subdomain. Vite builds are output into a dist/ folder within each respective subdomain.

Examples:
	•	docs/ → Hosted at docs.neurons.me, build output: subDomains/docs/dist.
	•	media/ → Hosted at media.neurons.me, build output: subDomains/media/dist.

3. rootDomain/
The root directory represents the main domain, neurons.me. Its Vite build output is stored in root/dist.

4. modules/
This directory is dedicated to other Git submodules or npm packages that belong to the neurons.me ecosystem. These can include standalone repositories or npm packages integrated into the system.

For example:
	•	neurons.me/: A standalone npm package and repository that is part of the ecosystem.

Notes
	•	All Vite projects build into their respective dist/ directories for easy deployment.
	•	Subdomains like docs/ and media/ are managed under subDomains/, while the primary domain (neurons.me) is handled in the root/ directory.
	•	The modules/ directory centralizes additional ecosystem components like npm packages or Git submodules to streamline integration and development.
