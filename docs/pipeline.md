
## CI flödesdiagram

```mermaid
flowchart LR
  B[commit på branch] --> P[push]
  P --> PR[pull request mot main]

  subgraph CI [GitHub Actions: CI]
    direction TB
    subgraph Q [Quality]
      direction TB
      Q1[npm ci] --> Q2[npm run lint] --> Q3[npm run format:check] --> Q4[npm test]
    end
    subgraph BU [Build]
      direction TB
      B1[npm ci] --> B2[npm run build] --> B3[ladda upp client/dist]
    end
  end

  PR --> Q1
  PR --> B1
  Q4 --> S{Ruleset på main:<br/>Quality + Build gröna?<br/>branch uppdaterad mot main?<br/>1 godkännande?}
  B3 --> S
  S -->|nej| F[fixa, pusha igen] --> P
  S -->|ja| M[merge till main]
  M --> MAIN[push till main kör CI igen]
```

## CI Tidsmätning

```bash
== Quality
0s      Set up job
1s      Run actions/checkout@v4
1s      Run actions/setup-node@v4
6s      Run npm ci
1s      Run npm run lint
1s      Run npm run format:check
2s      Run npm test
0s      Post Run actions/setup-node@v4
0s      Post Run actions/checkout@v4
0s      Complete job
== Build
1s      Set up job
0s      Run actions/checkout@v4
1s      Run actions/setup-node@v4
6s      Run npm ci
2s      Run npm run build
1s      Run actions/upload-artifact@v4
0s      Post Run actions/setup-node@v4
0s      Post Run actions/checkout@v4
0s      Complete job
```
