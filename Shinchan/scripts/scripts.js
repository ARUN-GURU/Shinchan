document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'scale(1.05)';
      item.style.transition = '0.3s ease';
    });
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'scale(1)';
    });
  });
  
  //   contact java


  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents the default form submission behavior

    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const emailBody = `Name: ${name}%0D%0AContact: ${contact}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    const emailSubject = 'New Contact Form Submission';

    // Simulate sending email
    window.location.href = `mailto:arunshinchan27@gmail.com?subject=${emailSubject}&body=${emailBody}`;
});







