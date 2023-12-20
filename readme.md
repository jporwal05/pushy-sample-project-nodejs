# pushy-sample-project-nodejs

## installation
`npm install`

## running locally
Add `PUSHY_API_KEY` and `DEVICE_TOKEN` in the `.env` file
`npx tsc`
`node dist/index.js`

## running via docker
`docker build -t pushy-sample-app-nodejs .`
`docker run --env PUSHY_API_KEY=<> --env DEVICE_TOKEN=<> -p 3000:3000 pushy-sample-app-nodejs`

docker run --env PUSHY_API_KEY=d83d406aaff0a6c5246d4bf8311e974057666f990c574075c915f621a5b3643b --env DEVICE_TOKEN=ade2e789b61d49b7140d2a -p 3000:3000 pushy-sample-app-nodejs
