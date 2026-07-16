const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const docImage = document.querySelector("[data-doc-page]");
const docCurrent = document.querySelector("[data-doc-current]");
const docTotal = document.querySelector("[data-doc-total]");
const docPrev = document.querySelector("[data-doc-prev]");
const docNext = document.querySelector("[data-doc-next]");
const projectNext = document.querySelector("[data-project-next]");
const projectTitle = document.querySelector("[data-project-title]");
const projectOpen = document.querySelector(".doc-open");

if (docImage && docCurrent && docTotal && docPrev && docNext && projectNext && projectTitle && projectOpen) {
  const projects = [
    {
      title: "Troubleshooting a Broken Web3Forms Contact Form API Submission",
      folder: "assets/docs/web3forms-troubleshooting-pages",
      prefix: "web3forms-troubleshooting-page",
      pdf: "assets/docs/web3forms-contact-form-api-troubleshooting.pdf",
      pages: 11,
      alt: "Web3Forms contact form API troubleshooting PDF page",
    },
    {
      title: "Project 22 Bee Street: Phase 1 - Cloud Honeypot Foundation",
      folder: "assets/docs/p22bs-pages",
      prefix: "p22bs-phase-1-page",
      pdf: "assets/docs/p22bs-phase-1-cloud-honeypot-foundation.pdf",
      pages: 31,
      alt: "Project 22 Bee Street PDF page",
    },
    {
      title: "Resolving an Active Directory Account Lockout - Help Desk Walkthrough",
      folder: "assets/docs/ad-lockout-pages",
      prefix: "ad-lockout-page",
      pdf: "assets/docs/active-directory-account-lockout-help-desk-walkthrough.pdf",
      pages: 6,
      alt: "Active Directory account lockout PDF page",
    },
    {
      title: "Onboarding an Endpoint to Action1 RMM - Agent Deployment and Verification",
      folder: "assets/docs/action1-rmm-pages",
      prefix: "action1-rmm-page",
      pdf: "assets/docs/action1-rmm-agent-deployment-verification.pdf",
      pages: 12,
      alt: "Action1 RMM endpoint onboarding PDF page",
    },
  ];

  let currentProject = 0;
  let currentPage = 1;

  const updateDocumentPage = () => {
    const project = projects[currentProject];
    const pageNumber = String(currentPage).padStart(2, "0");
    docImage.src = `${project.folder}/${project.prefix}-${pageNumber}.png`;
    docImage.alt = `${project.alt} ${currentPage}`;
    projectTitle.textContent = project.title;
    projectOpen.href = project.pdf;
    docCurrent.textContent = String(currentPage);
    docTotal.textContent = String(project.pages);
    docPrev.disabled = currentPage === 1;
    docNext.disabled = currentPage === project.pages;
    projectNext.textContent = `View Next -> ${projects[(currentProject + 1) % projects.length].title}`;
  };

  docPrev.addEventListener("click", () => {
    currentPage = Math.max(1, currentPage - 1);
    updateDocumentPage();
  });

  docNext.addEventListener("click", () => {
    currentPage = Math.min(projects[currentProject].pages, currentPage + 1);
    updateDocumentPage();
  });

  projectNext.addEventListener("click", () => {
    currentProject = (currentProject + 1) % projects.length;
    currentPage = 1;
    updateDocumentPage();
  });

  updateDocumentPage();
}
