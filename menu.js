const filterButtons = document.querySelectorAll('[data-filter]');
const menuItems = document.querySelectorAll('.menu-item');
filterButtons.forEach(button => button.addEventListener('click', () => {
  filterButtons.forEach(item => item.classList.remove('selected'));
  button.classList.add('selected');
  const filter = button.dataset.filter;
  menuItems.forEach(card => {
    const categories = (card.dataset.category || '').split(' ');
    card.classList.toggle('hidden', filter !== 'all' && !categories.includes(filter));
  });
}));
