# crypto-icons

Crypto icons which are used both on dHEDGE and Toros

## How to add new icons

- Add missing icons named according to `iconSymbols` field of [asset query](https://github.com/dhedge/backend-multichain-api/blob/main/src/main/resources/graphql/dhedge.graphqls#L27)
- optionally run transformation script (see below)
- Update package version
- Run `npm install` to update lock file version
- Run `npm publish`

## How to run transformation script (compress and resize)

- Put new icon files to src/icons directory
- Run `npm install`
- Run `npm run transform` (`.png` source file) or `npm run transform:svg` (`.svg` source file extension) script
