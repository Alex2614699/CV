function showPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.classList.remove('active-page');
  });

  // Remove active state from nav buttons
  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(btn => {
    btn.classList.remove('active');
  });

  // Show selected page
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active-page');
  }

  // Set active nav button
  const activeBtn = Array.from(navBtns).find(btn => 
    btn.getAttribute('onclick').includes(pageId)
  );
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
}