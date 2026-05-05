// ── Mobile Nav Toggle ──
function toggleMenu() {
    const links = document.getElementById('navLinks');
    links.classList.toggle('open');
  }
  
  // Close nav when a link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('navLinks').classList.remove('open');
    });
  });
  
  // ── Order Form ──
  function submitOrder() {
    const name = document.getElementById('fname').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const qty = document.getElementById('qty').value.trim();
    const date = document.getElementById('pickdate').value;
    const msg = document.getElementById('msg').value.trim();
  
    if (!name || !phone) {
      alert('Please enter your name and phone number.\nదయచేసి మీ పేరు మరియు ఫోన్ నంబర్ నమోదు చేయండి.');
      return;
    }
  
    // Build WhatsApp message
    let waMsg = 'Hello Krishnaveni Enterprises, I would like to reserve Red Dragonfruit for farm pickup.';
    waMsg += '%0AName: ' + encodeURIComponent(name);
    waMsg += '%0APhone: ' + encodeURIComponent(phone);
    if (qty) waMsg += '%0AQuantity: ' + encodeURIComponent(qty) + ' kg';
    if (date) waMsg += '%0APickup Date: ' + encodeURIComponent(date);
    if (msg) waMsg += '%0AMessage: ' + encodeURIComponent(msg);
  
    // Update WhatsApp button
    document.getElementById('waOrderBtn').href = 'https://wa.me/917893486828?text=' + waMsg;
  
    // Show success
    document.getElementById('orderForm').style.display = 'none';
    document.getElementById('successMsg').style.display = 'block';
  }
  
  // ── WhatsApp Reserve button ──
  document.getElementById('waOrderBtn').addEventListener('click', function (e) {
    const name = document.getElementById('fname').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const qty = document.getElementById('qty').value.trim();
    const date = document.getElementById('pickdate').value;
    const msg = document.getElementById('msg').value.trim();
  
    if (!name || !phone) {
      e.preventDefault();
      alert('Please enter your name and phone number.\nదయచేసి మీ పేరు మరియు ఫోన్ నంబర్ నమోదు చేయండి.');
      return;
    }
  
    let waMsg = 'Hello Krishnaveni Enterprises, I would like to reserve Red Dragonfruit for farm pickup.';
    waMsg += '%0AName: ' + encodeURIComponent(name);
    waMsg += '%0APhone: ' + encodeURIComponent(phone);
    if (qty) waMsg += '%0AQuantity: ' + encodeURIComponent(qty) + ' kg';
    if (date) waMsg += '%0APickup Date: ' + encodeURIComponent(date);
    if (msg) waMsg += '%0AMessage: ' + encodeURIComponent(msg);
  
    this.href = 'https://wa.me/917893486828?text=' + waMsg;
  });
  
  // ── Smooth scroll offset for sticky nav ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navHeight = document.querySelector('nav').offsetHeight;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });