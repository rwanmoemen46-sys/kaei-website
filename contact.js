const contactForm = document.getElementById('contact-form');
const formNote = document.getElementById('form-note');
if (contactForm && formNote) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    formNote.textContent = 'Thanks — the form layout is ready, but messages are not sent yet. Connect a verified Kaei email address or a form service before publishing this feature.';
    formNote.classList.add('success');
  });
}
