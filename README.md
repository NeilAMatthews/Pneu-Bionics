# Pneu-Bionics
Website for the Pneu-Bionics senior design project: a soft pneumatic exosuit that helps people with mild ambulatory spinal muscular atrophy (SMA) stand up from a chair.

## Structure

```
index.html        Home: project motivation, final product image, highlights
about.html        Team bios, advisor, and sponsors
concepts.html     Concept designs and why the design changed
engineering.html  Technical analysis: full actuator, parameters, equations, optimization, control system
budget.html       Project budget and bill of materials (BOM)
updates.html      Bi-weekly progress updates (template and sample entries)
timeline.html     Project timeline, progress bar, and Gantt chart
css/styles.css    All styles; colors and fonts are CSS variables in :root
js/main.js        Mobile nav, active link, footer year, scroll reveal, timeline progress
images/team/      Team headshots
images/concept_designs/  CAD models of the two concepts
images/diagrams/  Full actuator, electrical diagram, software flowchart
images/matlab_plots/     MATLAB force plot
images/gant_chart.png    Project Gantt chart
images/ai_final_image.png  AI-generated image of the final product
```

## Customizing

- **Colors and fonts:** edit the variables at the top of `css/styles.css`.
- **Team:** edit names, roles, and bios in `about.html`. Headshots are 200×200 or larger; square crops work best. Advisor and sponsor lines are in the "Advisor & Sponsors" section of the same file.
- **Timeline:** edit the phases in `timeline.html`. Add the `done` class to a `<li class="timeline-item">` once it is complete; the progress bar updates automatically. Use `active` for the current phase.
- **Updates:** copy one `<article class="update">` block in `updates.html` for each new entry, newest first. Remove the "Sample entries" banner once real entries are added.
- **Budget and BOM:** fill in the table in `budget.html`. The budget figures are in the two cards above it.
- **Engineering equations:** each equation is a `<div class="eq">` in `engineering.html`. Subscripts use `<sub>`, and fractions use `<span class="frac">`.
- **Images:** add new files to the matching `images/` folder and reference them with an `<img>` tag inside a `<figure>` with a `<figcaption>`.

To preview, open `index.html` in a browser. No build step or dependencies are required.
