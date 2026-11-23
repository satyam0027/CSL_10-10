# CureSoulLife technical audit

Read-only inspection of the site in `D:\CSL 10-10` on 23 November 2026. No site file was changed for the audit. No test enquiry was submitted.

CureSoulLife is a static site, not an application. Nineteen public pages are generated from `scripts/render-site.mjs` into `index.html` files. There is no framework, no `package.json`, no environment file, and no hosting config in the repo.

## How it is built

Pages are HTML, CSS, and one browser script. Node runs two ESM scripts: `scripts/render-site.mjs` writes the pages, sitemap, and `robots.txt`; `scripts/check-links.mjs` checks them. Routing is the folder tree. `/contact` is `contact/index.html`.

`shell()` in `scripts/render-site.mjs` is the shared layout: skip link, header, footer, title, description, canonical, and Open Graph tags. The header is the SVG wordmark plus “CureSoulLife”. Primary nav has nine items and does not include Blog. Blog is the last item in the footer Explore column. The footer line is “Human transformation is a lifelong journey.”

Styling is `css/styles.css`. Type is Manrope and Newsreader from Google Fonts. `docs/design-system.md` records the locked palette. `js/main.js` handles the mobile menu, the Human Operating System dimension picker, the knowledge search, scroll reveals, and the contact form. Desktop nav appears at 1360px. Below that, the Menu control is used. Reduced motion is respected, and focus outlines and a skip link are present.

Git remote is `https://github.com/satyam0027/CSL_10-10.git`. The working tree was clean. The latest commit inspected was `f0f5721`, “added Blog”. No GitHub Actions, Netlify, Vercel, Cloudflare, or Docker file is in the project. How `curesoullife.org` is hosted could not be verified from the repo.

## Pages

| Public path | Generated file | Written by |
| --- | --- | --- |
| `/` | `index.html` | `home()` |
| `/curesoullife` | `curesoullife/index.html` | `institutionPage` |
| `/human-transformation` | `human-transformation/index.html` | `humanTransformationPage` |
| `/human-operating-system` | `human-operating-system/index.html` | `hosPage` |
| `/human-transformation/life-decoding` | `human-transformation/life-decoding/index.html` | `lifeDecodingPage` |
| `/knowledge` | `knowledge/index.html` | `knowledgePage` |
| `/research` | `research/index.html` | `researchPage` |
| `/experiences` | `experiences/index.html` | `experiencesPage` |
| `/experiences/retreats` | `experiences/retreats/index.html` | `retreatsPage` |
| `/community` | `community/index.html` | `communityPage` |
| `/community/global-network` | `community/global-network/index.html` | `globalNetworkPage` |
| `/about` | `about/index.html` | `aboutPage` |
| `/about/founder` | `about/founder/index.html` | `founderPage` |
| `/contact` | `contact/index.html` | `contactPage` |
| `/blog` | `blog/index.html` | `blogPage` |
| `/blog/how-to-stop-overthinking-and-find-mental-peace` | matching `index.html` | `scripts/blog/stop-overthinking.html` |
| `/blog/human-transformation-journey-of-self-discovery` | matching `index.html` | `scripts/blog/human-transformation-journey.html` |
| `/blog/how-to-build-an-unbreakable-mindset` | matching `index.html` | `scripts/blog/unbreakable-mindset.html` |
| `/blog/how-to-understand-yourself-better` | matching `index.html` | `scripts/blog/understand-yourself.html` |

`node scripts/check-links.mjs` reported 19 pages, links ok, and the section checks ok. No broken local route was found.

## Where the main content lives

The homepage is `home()` in `scripts/render-site.mjs`: hero, four perspectives, the seven-stage journey, the nine Human Operating System dimensions, a founder strip, and an empty stories panel.

The founder page names Sarvesh Mishra, with the roles Life Decoder and Inner Alchemy Architect, plus the media timeline. The portrait is a monogram placeholder. The page says no photograph was supplied.

Programme information is framework copy, not a catalogue. The Human Operating System page holds the nine dimensions, the formula Awareness + Acceptance + Alignment + Action + Discipline + Devotion = Transformation, the steps Assess → Design → Practice → Transform → Contribute, and six pillars: Ancient Wisdom, Modern Science, Proven Methods, Community, Expert Guidance, and Technology. The Human Transformation page holds the seven stages from Awareness through Legacy. Experiences and Retreats describe formats and then say nothing is confirmed. There is no price, date, or booking page.

Testimonials are intentionally absent. The homepage says names, photographs, quotations, and outcomes are not invented, and that nothing there is a testimonial.

The contact form is in `contactPage()` and `contact/index.html`, with behavior in `js/main.js`. It has no `action`, no `fetch`, and no mail or form service. Submit is cancelled. If the fields are valid, the page says no verified delivery channel is connected and nothing was received. The privacy checkbox is disabled because no Privacy Policy is published. No test data was submitted. The knowledge search is a separate on-page filter. It does not send data anywhere, and it reports that no resource is published.

No environment variables exist. There is no `.env` and no `process.env` usage. The Google tag and the homepage verification meta are written directly into the HTML.

## SEO, analytics, and access

`sitemap.xml` lists all 19 URLs. `robots.txt` allows crawling and points at `https://curesoullife.org/sitemap.xml`. Each page has one `h1`, a matching canonical, a meta description, and Open Graph title, description, and URL. The homepage also has the Google site-verification meta. Blog articles set `og:image`. There is no JSON-LD, Twitter card, or `hreflang`.

Every page loads `gtm.js` for container `GTM-WL45HBQ3`, then defines `gtag()` and calls `gtag('js', new Date())`. It does not call `gtag('config')`, and it does not include the usual Tag Manager bootstrap or noscript iframe. Whether that container actually receives hits was not checked in Tag Manager.

`assets/logo.png` is not referenced. Editing a generated HTML file will be overwritten the next time the renderer runs. The renderer hard-codes `D:/CSL 10-10`.

## Risks

Community and Global Network still say the contact page does not publish an enquiry form. The contact page does publish one. It cannot send, but those two sentences are now wrong.

Privacy, Terms, and Disclaimer are not pages and are not linked. The form is built so it cannot be completed until a privacy acknowledgement exists.

Knowledge, Experiences, Retreats, and Global Network are empty on purpose. They should stay empty until a real resource, session, or partnership is approved. The blog is the only published long-form content, and it is not in the header.

## A safe sequence

1. Keep the palette, wordmark, nine dimensions, seven stages, formula, and pathway. Add material inside those structures.
2. Correct the two “no enquiry form” notes so they match the contact page.
3. Publish a privacy policy, then enable the acknowledgement. Connect a delivery channel only after that. Do not treat browser storage as a substitute.
4. Confirm the Google tag in Tag Manager before changing the snippet.
5. Add Knowledge items, experiences, and retreats only when they have approved details. Add a founder portrait or a testimonial only from supplied, consented material.

## Not verified

Live DNS, hosting, Tag Manager delivery, browser form behavior, Lighthouse scores, and production cache headers were not checked.
