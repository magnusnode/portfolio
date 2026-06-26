# Domain Direction — `sojka.pro`

**Status:** RECOMMENDED CANDIDATE / AVAILABILITY AND PURCHASE NOT CONFIRMED  
**Date:** 2026-06-26  
**Public identity:** Łukasz Sojka  
**Secondary signature:** `𝔐𝔞𝔤𝔫𝔲𝔰`

## Decision score

| Criterion | Score |
|---|---:|
| memorability | 96/100 |
| email quality | 99/100 |
| PL + EN fit | 94/100 |
| AI / IT fit | 94/100 |
| premium personal-brand fit | 96/100 |
| local Polish SEO signal | 78/100 |
| long-term scalability | 92/100 |
| **overall** | **93/100** |

## Assessment

`sojka.pro` is stronger than a long personal domain for a bilingual PL/EN professional brand. It is short, easy to pronounce, based on the real surname and naturally supports a professional email such as `lukasz@sojka.pro`.

The direction is especially suitable because the current offer is broader than one job title: AI Operations, GitHub, Obsidian, automation, web, IT and defensive OSINT. The `.pro` ending communicates professional services without locking the brand to one technology.

## Main strengths

- short, memorable and easy to type;
- real surname creates personal accountability;
- works in Polish and English;
- excellent email identity;
- can grow from personal portfolio into a small professional studio;
- avoids unnecessary dependence on the `MagnusNode` nickname;
- supports clean subdomains and service routes.

## Weaknesses and controls

1. `.pro` is less familiar in Poland than `.pl`.
   - Control: always display `Łukasz Sojka — Polska / remote` and use Polish copy by default.
2. `.pro` does not provide the same local-country signal as `.pl`.
   - Control: secure `lukaszsojka.pl` or another personal `.pl` as a defensive redirect if budget allows.
3. Renewal prices vary more between registrars than promotional first-year prices.
   - Control: compare renewal, transfer, privacy and DNSSEC costs before purchase.
4. A surname-only domain can eventually represent more than one person.
   - Control: keep `Łukasz Sojka` as the visible primary identity in titles, metadata and email signatures.

## Recommended architecture

```text
sojka.pro              public portfolio and offer
sojka.pro/en           complete English version
sojka.pro/cv           CV and application assets
sojka.pro/services     service catalogue
sojka.pro/brief        local written-first lead intake
lab.sojka.pro          GitHub / MagnusNode / experiments
status.sojka.pro       optional project status later
```

Prefer language paths (`/en`) over separate language subdomains for version 1.

## Email architecture

```text
lukasz@sojka.pro       primary personal and commercial email
hello@sojka.pro        general English contact
brief@sojka.pro        optional lead intake alias
security@sojka.pro     security and vulnerability contact
```

Do not publish `admin@`, `ceo@` or `office@` in version 1.

## Brand hierarchy

```text
PRIMARY BRAND      Łukasz Sojka
DIGITAL SIGNATURE  sojka.pro
ROLE               AI & IT Systems Operator
TECH LAB           MagnusNode / lab.sojka.pro
NICKNAME            𝔐𝔞𝔤𝔫𝔲𝔰 — occasional signature only
```

## Recommendation

If a live registrar confirms that `sojka.pro` is available at a normal, non-premium price, register it as the primary portfolio domain. Keep `MagnusNode` as a technical lab identity rather than the public commercial brand.

## Purchase gate

Before registration verify:

- live availability;
- first-year and renewal price;
- whether the name is classified as premium;
- WHOIS privacy policy;
- DNSSEC support;
- transfer fee and lock conditions;
- exact registrant data and renewal reminders.

No domain, email or deployment should be marked active until purchase and DNS verification are complete.
