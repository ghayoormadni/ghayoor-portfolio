document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  document.getElementById('status').innerText = 
    `Thanks ${name}! Your message has been sent successfully.`;

  document.getElementById('contactForm').reset();
});
