const HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Harlow Health Company — clinician-led women's health and wellness practice offering personalized care for perimenopause, menopause, hormone changes, and healthy aging." />
  <title>Harlow Health Company — Feel Like Yourself Again</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
  <style>
    /* ===== Reset & Base ===== */
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
    :root {
      --ivory: #F7F3EE;
      --ivory-light: #FBF8F4;
      --neutral-warm: #E8E1D8;
      --neutral-mid: #C9BFB2;
      --text-dark: #2E2A26;
      --text-mid: #6B635A;
      --text-light: #9A9088;
      --plum: #6E5A6E;
      --plum-light: #8A768A;
      --green: #3D5A4C;
      --green-light: #5A7A6B;
      --blue: #5B7B8A;
      --white: #FFFFFF;
      --border: rgba(46, 42, 38, 0.12);
      --shadow: 0 2px 24px rgba(46, 42, 38, 0.06);
      --radius: 6px;
      --max-width: 1100px;
      --serif: 'Cormorant Garamond', Georgia, serif;
      --sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    }
    html { scroll-behavior: smooth; font-size: 17px; }
    body {
      font-family: var(--sans);
      background: var(--ivory);
      color: var(--text-dark);
      line-height: 1.7;
      -webkit-font-smoothing: antialiased;
    }
    h1, h2, h3 { font-family: var(--serif); font-weight: 500; line-height: 1.2; }
    a { color: var(--plum); text-decoration: none; }
    img { max-width: 100%; display: block; }

    /* ===== Layout ===== */
    .container { max-width: var(--max-width); margin: 0 auto; padding: 0 24px; }
    section { padding: 80px 0; }
    .section-label {
      font-family: var(--sans);
      font-size: 0.72rem;
      font-weight: 600;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--green);
      margin-bottom: 14px;
    }
    .section-title { font-size: 2.1rem; margin-bottom: 18px; color: var(--text-dark); }
    .section-intro { font-size: 1.05rem; color: var(--text-mid); max-width: 620px; margin-bottom: 48px; }

    /* ===== Buttons ===== */
    .btn {
      display: inline-block;
      padding: 14px 32px;
      font-family: var(--sans);
      font-size: 0.85rem;
      font-weight: 500;
      letter-spacing: 0.04em;
      border-radius: var(--radius);
      cursor: pointer;
      transition: all 0.25s ease;
      border: none;
    }
    .btn-primary { background: var(--green); color: var(--white); }
    .btn-primary:hover { background: #314e40; transform: translateY(-1px); }
    .btn-secondary { background: transparent; color: var(--text-dark); border: 1.5px solid var(--neutral-mid); }
    .btn-secondary:hover { border-color: var(--plum); color: var(--plum); }

    /* ===== Nav ===== */
    nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      background: rgba(247, 243, 238, 0.92);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--border);
    }
    nav .container { display: flex; align-items: center; justify-content: space-between; padding-top: 16px; padding-bottom: 16px; }
    .logo { font-family: var(--serif); font-size: 1.4rem; font-weight: 600; color: var(--text-dark); letter-spacing: 0.02em; }
    .logo span { color: var(--plum); }
    .nav-links { display: flex; gap: 28px; align-items: center; }
    .nav-links a { font-size: 0.85rem; color: var(--text-mid); transition: color 0.2s; }
    .nav-links a:hover { color: var(--plum); }
    .nav-cta { padding: 10px 22px; font-size: 0.8rem; }
    .nav-toggle { display: none; background: none; border: none; font-size: 1.5rem; color: var(--text-dark); cursor: pointer; }

    /* ===== Hero ===== */
    .hero {
      min-height: 100vh;
      display: flex; align-items: center;
      background: url('/Homepage%20Image%20HH.png') center center / cover no-repeat;
      position: relative;
      padding-top: 80px;
    }
    .hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(175deg, rgba(247, 243, 238, 0.88) 0%, rgba(251, 248, 244, 0.75) 50%, rgba(232, 225, 216, 0.65) 100%);
      z-index: 0;
    }
    .hero .container { position: relative; z-index: 1; }
    .hero-inner { max-width: 720px; }
    .hero h1 { font-size: 3.6rem; font-weight: 500; margin-bottom: 24px; color: var(--text-dark); }
    .hero h1 em { font-style: italic; color: var(--plum); }
    .hero p { font-size: 1.15rem; color: var(--text-mid); margin-bottom: 36px; max-width: 580px; }
    .hero-buttons { display: flex; gap: 16px; flex-wrap: wrap; }
    .hero-accent { width: 60px; height: 2px; background: var(--green); margin-bottom: 28px; }

    /* ===== Our Approach ===== */
    #approach { background: var(--ivory-light); }
    .approach-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
    .approach-text p { margin-bottom: 18px; color: var(--text-mid); }
    .approach-pillars { display: flex; flex-direction: column; gap: 28px; }
    .pillar { padding: 28px; background: var(--white); border-radius: var(--radius); border: 1px solid var(--border); }
    .pillar h3 { font-size: 1.25rem; margin-bottom: 8px; color: var(--green); }
    .pillar p { font-size: 0.92rem; color: var(--text-mid); }

    /* ===== Hormone & Menopause Care ===== */
    #hormone-care { background: var(--ivory); }
    .care-intro { max-width: 680px; }
    .care-list { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; margin-top: 8px; }
    .care-item { padding: 24px; border-left: 3px solid var(--plum-light); background: var(--ivory-light); border-radius: 0 var(--radius) var(--radius) 0; }
    .care-item h3 { font-size: 1.15rem; margin-bottom: 6px; color: var(--text-dark); }
    .care-item p { font-size: 0.9rem; color: var(--text-mid); }

    /* ===== Services ===== */
    #services { background: var(--neutral-warm); }
    .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; }
    .service-card { background: var(--white); border-radius: var(--radius); padding: 32px 28px; border: 1px solid var(--border); transition: transform 0.2s, box-shadow 0.2s; }
    .service-card:hover { transform: translateY(-3px); box-shadow: var(--shadow); }
    .service-card .icon { width: 56px; height: 56px; margin-bottom: 18px; }
    .service-card .icon img { width: 100%; height: 100%; object-fit: contain; }
    .service-card h3 { font-size: 1.2rem; margin-bottom: 10px; }
    .service-card p { font-size: 0.9rem; color: var(--text-mid); }

    /* ===== Why Harlow ===== */
    #why { background: var(--ivory-light); }
    .why-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px; }
    .why-item { text-align: left; }
    .why-number { font-family: var(--serif); font-size: 2rem; color: var(--plum-light); margin-bottom: 8px; }
    .why-item h3 { font-size: 1.2rem; margin-bottom: 10px; color: var(--text-dark); }
    .why-item p { font-size: 0.92rem; color: var(--text-mid); }

    /* ===== About Provider ===== */
    #about { background: var(--ivory); }
    .about-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 56px; align-items: center; }
    .about-photo {
      aspect-ratio: 4/5;
      background: linear-gradient(160deg, var(--neutral-warm), var(--plum-light));
      border-radius: var(--radius);
      display: flex; align-items: center; justify-content: center;
      color: var(--white); font-family: var(--serif); font-size: 2rem;
    }
    .about-text h2 { font-size: 2rem; margin-bottom: 18px; }
    .about-text p { margin-bottom: 16px; color: var(--text-mid); }
    .credentials { margin-top: 24px; display: flex; flex-wrap: wrap; gap: 12px; }
    .credential { padding: 6px 16px; background: var(--neutral-warm); border-radius: 100px; font-size: 0.8rem; color: var(--text-mid); }

    /* ===== FAQ ===== */
    #faq { background: var(--ivory-light); }
    .faq-list { max-width: 760px; }
    .faq-item { border-bottom: 1px solid var(--border); }
    .faq-question {
      width: 100%; text-align: left; background: none; border: none;
      padding: 22px 0; font-family: var(--serif); font-size: 1.2rem; font-weight: 500;
      color: var(--text-dark); cursor: pointer; display: flex; justify-content: space-between; align-items: center;
    }
    .faq-question .toggle { font-size: 1.4rem; color: var(--plum-light); transition: transform 0.25s; flex-shrink: 0; margin-left: 16px; }
    .faq-item.open .toggle { transform: rotate(45deg); }
    .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.3s ease, padding 0.3s ease; }
    .faq-item.open .faq-answer { max-height: 400px; padding-bottom: 22px; }
    .faq-answer p { color: var(--text-mid); font-size: 0.95rem; }

    /* ===== Get Started / Contact ===== */
    #get-started { background: linear-gradient(180deg, var(--green) 0%, #314e40 100%); color: var(--white); }
    #get-started .section-label { color: var(--plum-light); }
    #get-started .section-title { color: var(--white); }
    #get-started .section-intro { color: rgba(255, 255, 255, 0.8); }
    .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; }
    .contact-info p { color: rgba(255, 255, 255, 0.8); margin-bottom: 18px; }
    .contact-info a { color: var(--plum-light); }
    .phi-notice {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: var(--radius);
      padding: 18px 20px;
      margin-top: 24px;
      font-size: 0.85rem;
      color: rgba(255, 255, 255, 0.85);
      line-height: 1.6;
    }
    .phi-notice strong { color: var(--white); }
    .contact-form {
      background: var(--white);
      border-radius: var(--radius);
      padding: 36px 32px;
    }
    .contact-form h3 { font-size: 1.4rem; margin-bottom: 6px; color: var(--text-dark); }
    .contact-form .form-sub { font-size: 0.85rem; color: var(--text-light); margin-bottom: 24px; }
    .form-group { margin-bottom: 18px; }
    .form-group label { display: block; font-size: 0.82rem; font-weight: 500; color: var(--text-dark); margin-bottom: 6px; }
    .form-group input, .form-group textarea, .form-group select {
      width: 100%; padding: 12px 14px; border: 1px solid var(--neutral-mid); border-radius: 4px;
      font-family: var(--sans); font-size: 0.9rem; color: var(--text-dark); background: var(--ivory-light);
      transition: border-color 0.2s;
    }
    .form-group input:focus, .form-group textarea:focus, .form-group select:focus {
      outline: none; border-color: var(--plum);
    }
    .form-group textarea { resize: vertical; min-height: 100px; }
    .form-disclaimer { font-size: 0.78rem; color: var(--text-light); margin-bottom: 18px; line-height: 1.5; }
    .form-submit { width: 100%; }
    .form-success {
      display: none; text-align: center; padding: 32px 0;
    }
    .form-success h3 { color: var(--green); margin-bottom: 8px; }
    .form-success p { color: var(--text-mid); font-size: 0.9rem; }
    .form-success.show { display: block; }

    /* ===== Footer ===== */
    footer { background: var(--text-dark); color: var(--text-light); padding: 48px 0 32px; }
    .footer-grid { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 32px; }
    .footer-brand .logo { color: var(--white); margin-bottom: 12px; }
    .footer-brand p { font-size: 0.85rem; max-width: 320px; }
    .footer-links { display: flex; gap: 40px; }
    .footer-col h4 { font-family: var(--sans); font-size: 0.78rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--neutral-mid); margin-bottom: 14px; }
    .footer-col a { display: block; font-size: 0.85rem; color: var(--text-light); margin-bottom: 8px; }
    .footer-col a:hover { color: var(--white); }
    .footer-bottom { margin-top: 40px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1); font-size: 0.78rem; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px; }

    /* ===== Responsive ===== */
    @media (max-width: 768px) {
      html { font-size: 16px; }
      .nav-links { display: none; }
      .nav-toggle { display: block; }
      .nav-links.open { display: flex; flex-direction: column; position: absolute; top: 100%; left: 0; right: 0; background: var(--ivory); padding: 24px; gap: 16px; border-bottom: 1px solid var(--border); }
      .hero h1 { font-size: 2.4rem; }
      .section-title { font-size: 1.7rem; }
      .approach-grid, .about-grid, .contact-grid { grid-template-columns: 1fr; gap: 36px; }
      .about-photo { max-width: 280px; margin: 0 auto; }
      section { padding: 56px 0; }
      .footer-grid { flex-direction: column; }
      .footer-links { flex-wrap: wrap; gap: 28px; }
    }
  </style>
</head>
<body>

  <!-- ===== Nav ===== -->
  <nav>
    <div class="container">
      <a href="#hero" class="logo">Harlow<span>.</span> Health Co.</a>
      <button class="nav-toggle" aria-label="Toggle menu" onclick="document.querySelector('.nav-links').classList.toggle('open')">&#9776;</button>
      <div class="nav-links">
        <a href="#approach">Our Approach</a>
        <a href="#hormone-care">Hormone & Menopause</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#faq">FAQ</a>
        <a href="#get-started" class="btn btn-primary nav-cta">Get Started</a>
      </div>
    </div>
  </nav>

  <!-- ===== Hero ===== -->
  <section class="hero" id="hero">
    <div class="container">
      <div class="hero-inner">
        <div class="hero-accent"></div>
        <h1>Feel like <em>yourself</em> again.</h1>
        <p>Hormonal changes may be common, but that doesn't mean your symptoms should be dismissed as something you simply have to live with.</p>
        <div class="hero-buttons">
          <a href="#get-started" class="btn btn-primary">Get Started</a>
          <a href="#approach" class="btn btn-secondary">Learn More</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== Our Approach ===== -->
  <section id="approach">
    <div class="container">
      <div class="section-label">Our Approach</div>
      <h2 class="section-title">Care that's actually about you.</h2>
      <div class="approach-grid">
        <div class="approach-text">
          <p>Harlow Health Company was founded on a simple belief: women deserve healthcare that listens. Too often, women navigating hormonal changes are told their symptoms are "just part of getting older" — and sent on their way.</p>
          <p>We take a different approach. Every plan is built around your history, your goals, and your life. You'll work directly with a clinician who takes the time to understand the full picture — not a rotating cast of providers in a high-volume telehealth queue.</p>
          <p>This is boutique, clinician-led care designed for women who want more than a quick prescription and a goodbye.</p>
        </div>
        <div class="approach-pillars">
          <div class="pillar">
            <h3>Personalized</h3>
            <p>Your care plan is built around your unique history, symptoms, and goals — never a one-size-fits-all protocol.</p>
          </div>
          <div class="pillar">
            <h3>Clinician-Led</h3>
            <p>You'll work directly with a qualified provider who has the time and expertise to dig deeper.</p>
          </div>
          <div class="pillar">
            <h3>Continuity</h3>
            <p>See the same provider who knows your story — not a different face each visit.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== Hormone & Menopause Care ===== -->
  <section id="hormone-care">
    <div class="container">
      <div class="section-label">Hormone & Menopause Care</div>
      <h2 class="section-title">Understanding the changes.</h2>
      <p class="section-intro care-intro">Perimenopause and menopause can bring a wide range of symptoms that affect far more than hot flashes. We help you understand what's happening and build a plan to address it.</p>
      <div class="care-list">
        <div class="care-item">
          <h3>Perimenopause</h3>
          <p>Irregular cycles, mood shifts, sleep disruption, and brain fog — the years leading up to menopause deserve attention, not dismissal.</p>
        </div>
        <div class="care-item">
          <h3>Menopause Transition</h3>
          <p>Hot flashes, night sweats, vaginal dryness, and changes in energy. We explore evidence-based options tailored to you.</p>
        </div>
        <div class="care-item">
          <h3>Hormone Optimization</h3>
          <p>When appropriate, we discuss hormone therapy and alternatives — weighing benefits and risks in the context of your health.</p>
        </div>
        <div class="care-item">
          <h3>Healthy Aging</h3>
          <p>Bone health, heart health, metabolic changes, and mental well-being — a whole-person approach to thriving in midlife and beyond.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== Services ===== -->
  <section id="services">
    <div class="container">
      <div class="section-label">Services</div>
      <h2 class="section-title">How we can help.</h2>
      <p class="section-intro">Comprehensive women's health and wellness care, delivered with a personal touch.</p>
      <div class="services-grid">
        <div class="service-card">
          <div class="icon"><img src="/HH_icon_1.png" alt="Hormone Consultations icon" loading="lazy" /></div>
          <h3>Hormone Consultations</h3>
          <p>In-depth reviews of your symptoms, history, and goals to build a personalized care plan.</p>
        </div>
        <div class="service-card">
          <div class="icon"><img src="/HH_icon_2.png" alt="Menopause Management icon" loading="lazy" /></div>
          <h3>Menopause Management</h3>
          <p>Ongoing support through perimenopause, menopause, and beyond — with regular check-ins.</p>
        </div>
        <div class="service-card">
          <div class="icon"><img src="/HH_icon3.png" alt="Preventive Wellness icon" loading="lazy" /></div>
          <h3>Preventive Wellness</h3>
          <p>Proactive guidance on bone health, heart health, metabolism, and healthy aging.</p>
        </div>
        <div class="service-card">
          <div class="icon"><img src="/HH_icon_4.png" alt="Lifestyle & Nutrition icon" loading="lazy" /></div>
          <h3>Lifestyle & Nutrition</h3>
          <p>Practical, evidence-based guidance on nutrition, movement, sleep, and stress.</p>
        </div>
        <div class="service-card">
          <div class="icon"><img src="/HH_icon_5.png" alt="Follow-Up Care icon" loading="lazy" /></div>
          <h3>Follow-Up Care</h3>
          <p>Continuity matters. We adjust your plan over time based on how you're actually feeling.</p>
        </div>
        <div class="service-card">
          <div class="icon"><img src="/HH_icon_6.png" alt="Education & Resources icon" loading="lazy" /></div>
          <h3>Education & Resources</h3>
          <p>Clear, trustworthy information so you can make confident decisions about your health.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== Why Harlow ===== -->
  <section id="why">
    <div class="container">
      <div class="section-label">Why Harlow</div>
      <h2 class="section-title">What makes us different.</h2>
      <div class="why-grid">
        <div class="why-item">
          <div class="why-number">01</div>
          <h3>One provider who knows you</h3>
          <p>You see the same clinician every visit — someone who knows your history, listens to your concerns, and remembers your story.</p>
        </div>
        <div class="why-item">
          <div class="why-number">02</div>
          <h3>Time that respects you</h3>
          <p>Appointments aren't rushed. We take the time to understand what you're experiencing before recommending anything.</p>
        </div>
        <div class="why-item">
          <div class="why-number">03</div>
          <h3>Boutique, not corporate</h3>
          <p>No call centers, no rotating providers, no cookie-cutter protocols. Just thoughtful, individualized care.</p>
        </div>
        <div class="why-item">
          <div class="why-number">04</div>
          <h3>Evidence-based, person-centered</h3>
          <p>We combine current clinical evidence with genuine respect for your preferences and lived experience.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== About Your Provider ===== -->
  <section id="about">
    <div class="container">
      <div class="section-label">About Your Provider</div>
      <div class="about-grid">
        <div class="about-photo">Your Provider</div>
        <div class="about-text">
          <h2>Care led by a clinician who listens.</h2>
          <p>Harlow Health Company was founded with a commitment to giving women the time, attention, and expertise they deserve during one of life's most significant transitions.</p>
          <p>Our approach is rooted in the belief that hormonal changes are not something to simply endure — they're something to understand, navigate, and manage with the right support.</p>
          <p>You'll work directly with a clinician who takes the time to learn your full health history, understand what matters to you, and build a plan that fits your life.</p>
          <div class="credentials">
            <span class="credential">Clinician-Led Practice</span>
            <span class="credential">Women's Health Focused</span>
            <span class="credential">Evidence-Based Care</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== FAQ ===== -->
  <section id="faq">
    <div class="container">
      <div class="section-label">FAQ</div>
      <h2 class="section-title">Questions we hear often.</h2>
      <div class="faq-list">
        <div class="faq-item">
          <button class="faq-question" onclick="toggleFaq(this)">Do I need a referral to book an appointment? <span class="toggle">+</span></button>
          <div class="faq-answer"><p>No referral is needed. You can request a consultation directly through our Get Started form, and we'll help you schedule your first appointment.</p></div>
        </div>
        <div class="faq-item">
          <button class="faq-question" onclick="toggleFaq(this)">Are visits in person or virtual? <span class="toggle">+</span></button>
          <div class="faq-answer"><p>We offer virtual consultations for your convenience. Details about your appointment will be provided once your consultation is scheduled.</p></div>
        </div>
        <div class="faq-item">
          <button class="faq-question" onclick="toggleFaq(this)">Do you prescribe hormone therapy? <span class="toggle">+</span></button>
          <div class="faq-answer"><p>When appropriate, we discuss hormone therapy as one of many options. Your clinician will review your health history and help you weigh the benefits and risks. No treatment is prescribed without a thorough consultation.</p></div>
        </div>
        <div class="faq-item">
          <button class="faq-question" onclick="toggleFaq(this)">How is this different from other telehealth services? <span class="toggle">+</span></button>
          <div class="faq-answer"><p>Most telehealth platforms operate at high volume with rotating providers. At Harlow, you work with the same clinician who takes the time to know you — boutique care, not a conveyor belt.</p></div>
        </div>
        <div class="faq-item">
          <button class="faq-question" onclick="toggleFaq(this)">How do I share my health information securely? <span class="toggle">+</span></button>
          <div class="faq-answer"><p>Once you become a patient, you'll receive access to our secure Practice Better portal. All health-sensitive communication happens there — never through this website's contact form.</p></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== Get Started ===== -->
  <section id="get-started">
    <div class="container">
      <div class="section-label">Get Started</div>
      <h2 class="section-title">Let's begin your journey.</h2>
      <p class="section-intro">Request a consultation and we'll be in touch to schedule your first appointment.</p>
      <div class="contact-grid">
        <div class="contact-info">
          <p>Taking the first step is simple. Fill out the form and we'll reach out to schedule your consultation.</p>
          <p>Have a general question? Email us at <a href="mailto:info@harlowhealthcompany.com">info@harlowhealthcompany.com</a></p>
          <div class="phi-notice">
            <strong>Important:</strong> Please do not include any personal health information, medical details, or sensitive data in this form. This form is for general inquiries and consultation requests only. For all health-related communication, please use your secure <strong>Practice Better</strong> portal to communicate directly with your provider.
          </div>
        </div>
        <div class="contact-form" id="contact-form-wrapper">
          <form id="contact-form" onsubmit="submitForm(event)">
            <h3>Request a Consultation</h3>
            <p class="form-sub">We'll respond within 2 business days.</p>
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" required placeholder="Your name" />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="you@example.com" />
            </div>
            <div class="form-group">
              <label for="phone">Phone (optional)</label>
              <input type="tel" id="phone" name="phone" placeholder="Optional" />
            </div>
            <div class="form-group">
              <label for="interest">What are you interested in?</label>
              <select id="interest" name="interest">
                <option value="">Select an option</option>
                <option value="Hormone Consultation">Hormone Consultation</option>
                <option value="Menopause Care">Menopause Care</option>
                <option value="Preventive Wellness">Preventive Wellness</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" name="message" placeholder="General questions only — please do not share health information here." required></textarea>
            </div>
            <p class="form-disclaimer">By submitting this form, you acknowledge that this is not a secure channel for health information. Please do not include medical details. For health-sensitive communication, use your Practice Better portal.</p>
            <button type="submit" class="btn btn-primary form-submit">Request Consultation</button>
          </form>
          <div class="form-success" id="form-success">
            <h3>Thank you!</h3>
            <p>Your consultation request has been received. We'll be in touch within 2 business days.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== Footer ===== -->
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="logo">Harlow<span>.</span> Health Co.</div>
          <p>Clinician-led women's health and wellness — personalized care for perimenopause, menopause, hormone changes, and healthy aging.</p>
        </div>
        <div class="footer-links">
          <div class="footer-col">
            <h4>Explore</h4>
            <a href="#approach">Our Approach</a>
            <a href="#hormone-care">Hormone & Menopause</a>
            <a href="#services">Services</a>
            <a href="#faq">FAQ</a>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <a href="mailto:info@harlowhealthcompany.com">info@harlowhealthcompany.com</a>
            <a href="#get-started">Request a Consultation</a>
          </div>
          <div class="footer-col">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; 2026 Harlow Health Company. All rights reserved.</span>
        <span>This website does not provide medical advice. Consult your provider for personalized care.</span>
      </div>
    </div>
  </footer>

  <script>
    // FAQ accordion
    function toggleFaq(btn) {
      const item = btn.parentElement;
      item.classList.toggle('open');
    }

    // Contact form — opens email client with pre-filled message
    function submitForm(e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const interest = document.getElementById('interest').value;
      const message = document.getElementById('message').value;

      const subject = encodeURIComponent('Consultation Request — ' + (interest || 'General Inquiry'));
      const body = encodeURIComponent(
        'Name: ' + name + '\\n' +
        'Email: ' + email + '\\n' +
        'Phone: ' + (phone || 'N/A') + '\\n' +
        'Interest: ' + (interest || 'N/A') + '\\n\\n' +
        'Message:\\n' + message
      );

      // Opens the visitor's email client addressed to info@harlowhealthcompany.com
      window.location.href = 'mailto:info@harlowhealthcompany.com?subject=' + subject + '&body=' + body;

      // Show success message
      document.getElementById('contact-form').style.display = 'none';
      document.getElementById('form-success').classList.add('show');
    }

    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('open');
      });
    });
  </script>
</body>
</html>
`;

const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.avif', '.ico'];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Check if this is an image request
    const isImage = IMAGE_EXTENSIONS.some(ext => path.toLowerCase().endsWith(ext));

    if (isImage && env.HARLOW_IMAGES) {
      const key = decodeURIComponent(path.slice(1));
      const object = await env.HARLOW_IMAGES.get(key);
      if (object === null) {
        return new Response('Image Not Found', { status: 404 });
      }
      const headers = new Headers();
      object.writeHttpMetadata(headers);
      headers.set('etag', object.httpEtag);
      headers.set('cache-control', 'public, max-age=86400');
      return new Response(object.body, { headers });
    }

    // Serve the HTML page for all other routes
    return new Response(HTML, {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
        'cache-control': 'public, max-age=3600',
      },
    });
  },
};
