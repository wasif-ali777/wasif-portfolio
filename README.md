# Wasif Ali — Portfolio

A responsive, dark navy + mint portfolio built with Next.js App Router, React, TypeScript, and custom CSS. It is prepared for deployment on Vercel.

## Included

- Responsive landing page and mobile layouts
- About, skills, project, education/certification, and contact sections
- Links to GitHub and LinkedIn
- SkillBridge_AI project section with a clearly labeled illustrative UI preview
- Reduced-motion support and keyboard focus styles
- Basic SEO metadata

## Run locally

1. Install Node.js (20.9 or newer recommended by the Next.js documentation).
2. Extract this project and open a terminal in the project folder.
3. Run:

   ```bash
   npm install
   npm run dev
   ```

4. Open http://localhost:3001.

This portfolio is configured to use port **3001** so it can run alongside your FYP on port 3000. If port 3001 is also busy, stop the other process or change the port in the `dev` script in `package.json`.

To check the production build, run `npm run build`.

## Deploy to Vercel

1. Push the project to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import that repository.
3. Keep the detected Next.js framework and default build settings.
4. Deploy. No environment variables are required for this static portfolio.

## Personalization checklist before publishing

- Confirm the exact wording of your degree status and certification.
- Add your real email address if you want a direct email contact link.
- Add your final CV PDF to `public/` and link it from the navigation if you want a downloadable resume.
- If you later add a canonical URL or Open Graph domain, configure it with your actual deployed domain.
- Expand project details and add live demo links only when those are available.

## Notes

This site intentionally does not claim professional work experience, invented metrics, or unverified achievements. The SkillBridge_AI illustration is a conceptual mockup rather than a screenshot of a deployed app. The Google Fonts import in `app/globals.css` falls back to system fonts if unavailable.
