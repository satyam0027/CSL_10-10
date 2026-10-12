# CureSoulLife design system

Shared UI foundation for the static site. Styles live in `css/styles.css`. Header, footer, and page HTML are generated from `scripts/render-site.mjs`, which is the single route list.

Status: Part 02 implemented. QA pending owner review.

## Colour tokens

Approved palette, unchanged:

| Token | Hex | Use |
| --- | --- | --- |
| Warm Ivory | `#F7F4ED` | Page background |
| Pure White | `#FFFFFF` | Content surfaces |
| Natural Sand | `#E9E1D3` | Alternate sections |
| Stone Grey | `#D7D2C8` | Borders |
| Charcoal | `#242522` | Body text |
| Deep Forest | `#173A32` | Brand and primary buttons |
| Midnight Blue | `#182A35` | Headings |
| Copper | `#A56A43` | Rules and icons |
| Muted Gold | `#B59A63` | Highlights on dark backgrounds |
| Sage | `#879A82` | Natural accent, not small text |
| Earth Brown | `#715A49` | Supporting text |

Semantic names map to that palette: `--color-background`, `--color-surface`, `--color-surface-muted`, `--color-text-primary`, `--color-text-secondary`, `--color-heading`, `--color-border`, `--color-brand-primary`, `--color-brand-dark`, `--color-accent`, `--color-focus`.

Exception: copper `#A56A43` does not meet WCAG 2.2 AA for small text on ivory. Eyebrow text uses `#7C4E30`. The brand copper value is unchanged and is used for lines and icons.

## Typography

- Manrope: interface, navigation, buttons, body.
- Newsreader: headings and editorial statements.
- `--type-display` 42–80px, `--type-h1` 40–64px, `--type-h2` 32–46px, `--type-h3` 24–30px.
- Body 17px desktop, 16.5px from 768px down. Body large uses `--type-body-lg`.
- One `h1` per page. Section titles are `h2`. Cards use `h3`.

## Spacing and layout

Eight-point scale: 4, 8, 16, 24, 32, 40, 48, 64, 80, 96, 120, 160.

- Outer frame: 1440px.
- Content: 1200px.
- Reading width: 720px.
- Mobile side padding: 20px, 16px at 360px.
- Major sections: 80px mobile, 120px from 1180px.

## Radius, borders, shadow

- Buttons: 8px.
- Cards: 14px.
- Borders: 1px stone.
- Shadow is limited to a light hover shadow. No glass, neon, or heavy blur.

## Buttons and links

- `.btn.btn-primary` — Deep Forest, white label, arrow.
- `.btn.btn-secondary` — outline.
- `.btn.btn-light` and `.btn.btn-ghost-light` — for the dark closing section.
- `.link-arrow` — text link with the same arrow.
- States: default, hover, focus-visible, active, disabled.
- Navigation uses real `href`s. There is no loading state on ordinary links.

## Component inventory

| Class | Role |
| --- | --- |
| `.site-header`, `.desktop-nav`, `.nav-details` | Header and mobile menu |
| `.site-footer` | Footer |
| `.section-header`, `.section-head`, `.eyebrow` | Section introduction |
| `.hero` | Homepage split hero |
| `.page-hero` | Editorial hero for inner pages |
| `.content-section`, `.section` | Section wrapper. Backgrounds: `.bg-ivory`, `.bg-white`, `.bg-sand`, `.bg-forest` |
| `.question-grid`, `.image-text` | Image and text. Stacks under 900px |
| `.card`, `.dim-card`, `.approach-card`, `.eco-card` | Cards |
| `.dim-grid`, `.approach-grid`, `.eco-grid`, `.card-grid` | Responsive card grids |
| `.cta-section`, `.finale` | Closing invitation |
| `.quote`, `.pull` | Approved quotation only |
| `.timeline`, `.journey` | Stage sequence. Horizontal on desktop, vertical under 768px |
| `.diagram` | Container for a framework visual plus a text note |
| `.media-hero`, `.media-feature`, `.media-portrait`, `.media-cover`, `.media-thumb` | Image ratios 16:9, 4:3, 1:1, 16:9, 3:2 |

Do not add FAQ, breadcrumbs, or form fields until a later part requires them. The contact page has no form, because no submission service exists.

## Header and footer routes

Primary navigation: CureSoulLife, Human Transformation, Human Operating System™, Knowledge, Research, Experiences, Community, About.

Begin Your Journey goes to `/human-transformation`.

Footer groups: CureSoulLife, Explore, Experience, Connect.

Life Decoding is `/human-transformation/life-decoding`. Retreats are `/experiences/retreats`.

Privacy, Terms, and Disclaimer are not linked. Approved legal pages do not exist yet. That is a launch dependency, not a footer item.

Closing line: “Human transformation is a lifelong journey.”

## Interaction

- Sticky header with a stone border after scroll.
- Mobile menu is a `details` panel. Escape closes it, focus is trapped, the page behind is inert, and a link closes the menu.
- Reveals are short fades. `prefers-reduced-motion: reduce` shows content immediately.
- Focus is a 2px Deep Forest outline.

## Responsive widths

360, 390, 430, 768, 1024, and 1440. Desktop navigation switches to the menu below 1360px so the eight labels and the header button do not collide.

## Known exceptions

- The project is static HTML, CSS, and JavaScript. There is no framework, CMS, or build step beyond `node scripts/render-site.mjs`.
- The wordmark is a temporary typographic mark. No approved logo file was in the project.
- Founder photography is a labelled placeholder.
- Landscape photos are replaceable stand-ins. See `assets/images/SOURCES.txt`.
- Homepage copy that Part 03 specifies is used there. `/curesoullife` follows Part 04. `/human-transformation` follows Part 05. `/human-transformation/life-decoding` follows Part 06. `/human-operating-system` follows Part 07. `/knowledge` follows Part 08. `/research` follows Part 09. `/experiences` follows Part 10. `/experiences/retreats` follows Part 11. `/community` follows Part 12. `/community/global-network` follows Part 13. `/about` follows Part 14. `/about/founder` follows Part 15. Part 17 checked cross-page routes, links, and metadata without redesigning those pages.

## Homepage

The homepage is composed as a sequence of distinct sections: hero, the world we live in, the human question, the institution and four perspectives, the seven-stage journey, the nine-dimension diagram, knowledge, research, experiences, human stories, community and Global Network, founder, and the closing invitation.

Knowledge, research, experiences, and stories stay empty until real material exists. The Global Network remains a vision, not a map of offices.

The header stays Warm Ivory. The hero is a split layout, so a transparent header would not sit over the photograph.

Optional analytics events, not implemented: hero_cta_clicked, human_transformation_explored, hos_explored, knowledge_explored, research_explored, experience_explored, story_opened, global_network_opened, founder_profile_opened, journey_started, commercial_handoff_clicked. No analytics provider is configured.
