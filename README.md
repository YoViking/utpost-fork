# Utpost

Plattform för friluftsdestinationer. Redaktionella guider, användarnas egna turer och bilder.

## Branchstrategi

GitHub Flow: `main` är alltid deploybar, feature-branches hålls korta och går
via PR innan de mergas tillbaka. `main` har en aktiv branch-ruleset som
blockerar direktpush, så PR är redan ett tekniskt krav och kräver minst 1
review. Codeowner fil är på plats i `.github/CODEOWNERS`. Just nu kan alla
medlemmar godkänna alla PRs men filen kommer att fyllas på under projektets
gång.

Vi väljer GitHub Flow för enkelhetens skull just nu. Git Flows extra grenar
(develop/release) löser problem vi inte har. Vi är ett litet team som kommer att
committa och deploya ofta och Git Flow är väl lämplig för det. Vi avser dock utforska feature flags och röra oss mot trunk-based som ett lärande inom projektet.

## Working agreement

- **Pushfrekvens**: Minst en gång per arbetsdag / vid slutet av varje arbetspass.
- **Godkänna en PR**: 1 godkännande från en annan utvecklare krävs. När CI-pipelinen landar (väntas nästa vecka) läggs krav på grön pipeline till.
- **Hur vi når varandra**: Discord.
- **När någon fastnar**: Timeboxa ~30 min egen diagnos. Fortfarande fast → sammanställ nuläget till en tydlig kontext + fråga, posta i Discord och tagga @alla.

*Det här avsnittet kommer att uppdateras under projektets gång.*

---

## Kom igång

```bash
npm install
docker compose -f docker-compose.dev.yml up -d
npm run seed
npm start
```

Appen ligger sen på http://localhost:3000 och API:et pa http://localhost:4000.

## Struktur

- `api/` – Express + Postgres (Drizzle)
- `web/` – React + Vite

## Deploy

Fråga Marcus.
