# nft-providers

## About

This repository houses public QRL NFT providers.

It is used by services within the QRL ecosystem (eg. wallet, explorer) to identify NFT providers utilizing the QRL blockchain.

ID bytes 0x00000000 - 0x0000FFFF are reserved for internal use: pull requests for providers wishing to claim these identities **will not** be accepted.

### Internally reserved identities

| ID bytes | Use |
| -------- | --- |
| 0x00000000 | Null/not linked to ID |
| 0x00001122 | Testing only |
| 0x00001123 | Testing only |

### Public identities

| ID bytes | Use |
| -------- | --- |
| 0x00FFFF00 | https://cards.theqrl.org demo NFT set |
| 0x00010000 | Merkle Tree Labs |

## Pull requests

Identities are available on a first-come / first-served basis for projects building post-quantum secure NFT solutions.

A PR should be made to update this ``README.md`` file (_Public identities_ table above) alongside the ``providers.yml`` with data in the prescribed format.

Valid formatting of the YAML file can be checked by running `npm run build` following install of dependencies with `npm install`.

Contact info@theqrl.org for assistance or if confidentiality is required prior to launch.
