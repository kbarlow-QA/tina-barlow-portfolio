export default function ThankYou() {
  return (
    <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ textAlign: 'center', maxWidth: 680 }}>
        <h1 style={{ fontSize: '2.25rem', marginBottom: '0.5rem' }}>Thank you!</h1>
        <p style={{ fontSize: '1.125rem', color: '#334155', marginBottom: '1.25rem' }}>
          Your message has been received. I&apos;ll get back to you shortly.
        </p>
        <a href="/" style={{ display: 'inline-block', padding: '0.625rem 1rem', background: 'linear-gradient(to right, #3a86ff, #5e60ce)', color: 'white', borderRadius: 8, textDecoration: 'none' }}>
          Back to Home
        </a>
      </div>
    </main>
  );
}
