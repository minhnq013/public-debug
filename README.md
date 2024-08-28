# public-debug
Repro:
- cd /modulefederation/producer
- npm i
- npm run dev

- Open another terminal
- cd /modulefederation/consumer
- npm i
- npm run dev
- open localhost:2000

Message due multiple react instances
```
Uncaught Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
```