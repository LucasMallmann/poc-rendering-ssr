Certainly! Here's an updated README file for the project you provided, incorporating the scripts you mentioned:

# Poc SSR Rendering

POC Rendering SSR (Proof of Concept for Server-Side Rendering)

## Description

This project serves as a proof of concept for server-side rendering (SSR). It demonstrates how to implement SSR using a specific technology stack and showcases the benefits of server-side rendering for rendering web pages.

The project utilizes [technology name] to build a server-side rendering application that enhances initial page load performance and improves search engine optimization (SEO). By rendering HTML on the server and sending a pre-rendered page to the client, SSR ensures faster page rendering and better visibility on search engines.

## Installation

1. Clone the repository: `git clone https://github.com/LucasMallmann/poc-rendering-ssr.git`
2. Change to the project directory: `cd poc-rendering-ssr`
3. Install dependencies: `npm install`

### Development

1. Build the project: `npm run build && npm run serve`
2. Open your web browser and visit `http://localhost:3033`

### Build

To build the project for production, follow these steps:

1. Build the client bundle: `npm run build:client`
2. Build the server bundle: `npm run build:server`
3. The compiled files will be available in the `dist/client` and `dist/server` directories, respectively.

### Generate Pre-rendered Pages

To generate pre-rendered pages for production:

1. Build the client bundle and static assets: `npm run generate`
2. This command will generate the client bundle in `dist/client` and the server bundle in `dist/server`. Additionally, it will generate static assets in `dist/static`.
3. Run the prerendering process: `node prerender`
4. The pre-rendered pages will be generated in the `dist/static` directory.

### Serve Production Build

To serve the production build:

1. Set the environment to production: `cross-env NODE_ENV=production`
2. Start the server: `node server`
3. Open your web browser and visit the provided URL.

## Contributing

Contributions are welcome! If you find any issues or would like to add new features, please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b my-feature-branch`
3. Make your changes and commit them: `git commit -am 'Add new feature'`
4. Push to the branch
