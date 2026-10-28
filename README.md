# Pneu-Bionics
This is a website for a senior design project.

## Structure

```
index.html        Landing page (hero, highlights, call to action)
about.html        Team page: 5 headshots + 5 bios
timeline.html     Project timeline with progress bar
contact.html      Contact form with client-side validation
css/styles.css    All styles; colors and fonts are CSS variables in :root
js/main.js        Mobile nav, scroll reveal, timeline progress, form validation
images/team/      Headshot placeholders (replace with member-1.jpg, etc.)
```

## Customizing

- **Colors and fonts:** edit the variables at the top of `css/styles.css`.
- **Team:** replace the placeholder names, roles, bios, and headshots in `about.html`. Headshots are 200×200 or larger, square crops work best.
- **Timeline:** edit the milestones in `timeline.html`. Add the `done` class to a `<li class="timeline-item">` once it is complete; the progress bar updates automatically. Use `active` for the current phase.
- **Contact form:** validation runs in the browser only. Connect the submit step in `js/main.js` to a form service (such as Formspree or Netlify Forms) or your own backend.
- **Contact details:** update the placeholder email and advisor info in `contact.html`.

To preview, open `index.html` in a browser. No build step or dependencies are required.
