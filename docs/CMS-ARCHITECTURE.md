# Outrospective CMS architecture

## Decision

Keep Payload CMS as the code-first foundation and build the Outrospective editorial experience on top of it.

Payload is already embedded in this Next.js repository and provides the expensive infrastructure a bespoke CMS would otherwise need to recreate: authentication, permissions, media handling, drafts, scheduled publishing, revisions, live preview, database migrations and an admin application. Rebuilding those systems would increase security and maintenance risk without improving the public-facing experience.

The custom work belongs in the schema, editorial workflow and branded admin—not in replacing the CMS engine.

## Content model

- **Projects**: client, sector, approved result, service relationships, case-study narrative and gallery.
- **Services**: ordered service propositions and constrained capability lists.
- **Posts**: editorial insights and field notes.
- **People**: approved biographies, portraits and public links.
- **Awards**: verifiable recognition linked to projects.
- **Pages**: exceptional campaign or landing pages only; not the primary source for structured agency content.
- **Media**: shared imagery, video and accessibility metadata.

## Editorial principles

1. Structured fields before arbitrary layout blocks.
2. Draft and scheduled publishing for Projects and Posts.
3. Results, awards and biography claims require client approval or a proof URL.
4. Static mock data remains the front-end fallback until the first approved content migration.
5. The front end should query Payload through a thin data layer, so preview and fallback behavior remain testable.

## Next implementation stages

1. Generate and review the database migration for the new collections.
2. Add a Homepage global for curated relationships and sequencing.
3. Add role-based access for administrators, editors and reviewers.
4. Brand the admin dashboard and replace generic starter prompts.
5. Connect the approved contact destination; avoid storing enquiry data until retention and privacy requirements are agreed.
6. Migrate approved projects, services and founder copy from the mock data.
7. Remove unused starter plugins and generic blocks after content migration.
