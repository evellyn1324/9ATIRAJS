document.addEventListener('DOMContentLoaded', () => {
  const projectItems = document.querySelectorAll('.project-item');

  projectItems.forEach(item => {
      item.addEventListener('mouseover', () => {
          item.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
      });

      item.addEventListener('mouseout', () => {
          item.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      });
  });
});
