const sidebar = document.getElementById('sidebar');

function toggleSidebar() {
  sidebar.classList.toggle('active');
}

document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });
});

