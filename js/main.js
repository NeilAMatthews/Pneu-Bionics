/* ==========================================================================
   Pneu-Bionics — site behavior
   Handles: mobile navigation, active links, footer year, scroll reveal,
   and timeline progress bar.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  setActiveLink();
  setFooterYear();
  setupScrollReveal();
  setupTimelineProgress();
});

/* ---------- Mobile navigation ---------- */

function setupNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close the menu when a link is chosen on small screens.
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------- Highlight the current page in the nav ---------- */

function setActiveLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".site-nav a").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
}

/* ---------- Footer copyright year ---------- */

function setFooterYear() {
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
}

/* ---------- Fade elements in as they scroll into view ---------- */

function setupScrollReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((el) => observer.observe(el));
}

/* ---------- Timeline progress ----------
   Overall progress = completed milestones / total milestones.
   Mark a milestone complete by giving its <li> the "done" class. */

function setupTimelineProgress() {
  const bar = document.querySelector("[data-progress-fill]");
  const label = document.querySelector("[data-progress-value]");
  const track = document.querySelector(".progress-track");
  const items = document.querySelectorAll(".timeline-item");
  if (!bar || !label || !track || !items.length) return;

  const done = document.querySelectorAll(".timeline-item.done").length;
  const percent = Math.round((done / items.length) * 100);

  // Let the bar animate from 0 after the page has painted.
  requestAnimationFrame(() => {
    bar.style.width = `${percent}%`;
  });
  label.textContent = `${percent}%`;
  track.setAttribute("aria-valuenow", String(percent));
}
