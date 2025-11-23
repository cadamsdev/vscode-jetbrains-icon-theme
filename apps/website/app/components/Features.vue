<template>
  <section id="features" class="features">
    <div class="container">
      <h2 class="section-title">Why Choose JetBrains Icons?</h2>
      <p class="section-subtitle">
        Experience the quality and attention to detail that JetBrains products are known for
      </p>
      
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">🎨</div>
          <h3 class="feature-title">Professional Design</h3>
          <p class="feature-description">
            Icons sourced directly from JetBrains Design Resources, ensuring authentic styling and consistency.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">🌓</div>
          <h3 class="feature-title">Multiple Themes</h3>
          <p class="feature-description">
            Choose from Light, Dark, and Auto variants that adapt to your VSCode theme preferences.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">📁</div>
          <h3 class="feature-title">Complete Coverage</h3>
          <p class="feature-description">
            Comprehensive icon set covering hundreds of file types, extensions, and folder names.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">⚡</div>
          <h3 class="feature-title">Lightweight</h3>
          <p class="feature-description">
            Optimized SVG icons that won't slow down your editor. Fast and efficient.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">🔄</div>
          <h3 class="feature-title">Regular Updates</h3>
          <p class="feature-description">
            Continuously updated with new icons and improvements based on community feedback.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">🆓</div>
          <h3 class="feature-title">Free & Open Source</h3>
          <p class="feature-description">
            Completely free to use with source code available on GitHub. Contributions welcome!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  padding: 6rem 0;
  background: #f9fafb;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #1f2937;
}

.section-subtitle {
  font-size: 1.125rem;
  text-align: center;
  color: #6b7280;
  margin-bottom: 4rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1f2937;
}

.feature-description {
  color: #6b7280;
  line-height: 1.7;
}

@media (max-width: 768px) {
  .features {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
