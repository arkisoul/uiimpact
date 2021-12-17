# Typescript

## Setup nodejs with Typescript
- Initialize a npm project `npm init`
- Install typescript as dev dependency `npm install --save-dev typescript`
- Install type definition for node modules `npm install --save-dev @types/node`
- Install ts-node for running typescript files directly with node `npm install --save-dev ts-node`

## Running a typescript file
- Compile a file using `npx tsc index.ts` command
- Run the output file `node index.js`
- Compile and run using `npx ts-node index.ts` command

## tsconfig.json
- Generate tsconfig.json file using `npx tsc --init` command
- Learn more about tsconfig.json [here](https://aka.ms/tsconfig.json)