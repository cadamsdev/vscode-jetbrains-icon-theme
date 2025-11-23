<template>
  <section id="themes" class="themes">
    <div class="container">
      <h2 class="section-title">Available Themes</h2>
      <p class="section-subtitle">
        Choose the variant that best matches your workflow
      </p>
      
      <div class="themes-grid">
        <div class="theme-card">
          <div class="theme-badge">Modern</div>
          <h3 class="theme-title">UI 2023+ Light</h3>
          <p class="theme-description">
            Bright, clean icons perfect for light themes. Easy on the eyes during daytime coding.
          </p>
          <div class="theme-features">
            <div class="theme-feature">✓ Modern design</div>
            <div class="theme-feature">✓ Optimized for light backgrounds</div>
            <div class="theme-feature">✓ High contrast</div>
          </div>
        </div>

        <div class="theme-card featured">
          <div class="theme-badge popular">Most Popular</div>
          <h3 class="theme-title">UI 2023+ Dark</h3>
          <p class="theme-description">
            Sleek dark icons that complement dark VSCode themes. Reduces eye strain in low-light environments.
          </p>
          <div class="theme-features">
            <div class="theme-feature">✓ Modern design</div>
            <div class="theme-feature">✓ Perfect for dark themes</div>
            <div class="theme-feature">✓ Reduced eye strain</div>
          </div>
        </div>

        <div class="theme-card">
          <div class="theme-badge">Smart</div>
          <h3 class="theme-title">UI 2023+ Auto</h3>
          <p class="theme-description">
            Automatically switches between light and dark variants based on your system preferences.
          </p>
          <div class="theme-features">
            <div class="theme-feature">✓ Automatic switching</div>
            <div class="theme-feature">✓ System preference aware</div>
            <div class="theme-feature">✓ Best of both worlds</div>
          </div>
        </div>

        <div class="theme-card">
          <div class="theme-badge">Legacy</div>
          <h3 class="theme-title">Version V1</h3>
          <p class="theme-description">
            Classic dark theme for those who prefer the original icon set. Still maintained and supported.
          </p>
          <div class="theme-features">
            <div class="theme-feature">✓ Original design</div>
            <div class="theme-feature">✓ Classic appearance</div>
            <div class="theme-feature">✓ Stable & reliable</div>
          </div>
        </div>
      </div>

      <div class="preview-section">
        <h3 class="preview-title">See It in Action</h3>
        <p class="preview-description">
          Experience the difference professional icons make in your daily workflow
        </p>
        <div class="preview-images">
          <div class="preview-image">
            <img src="https://raw.githubusercontent.com/chadalen/vscode-jetbrains-icon-theme/main/assets/2023/preview.png" 
                 alt="UI 2023+ Preview" 
                 class="preview-img" />
            <p class="preview-caption">UI 2023+ Theme Preview</p>
          </div>
          <div class="preview-image">
            <img src="https://raw.githubusercontent.com/chadalen/vscode-jetbrains-icon-theme/main/assets/v1/preview.png" 
                 alt="V1 Preview" 
                 class="preview-img" />
            <p class="preview-caption">Version V1 Theme Preview</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.themes {
  padding: 6rem 0;
  background: linear-gradient(to bottom, #f9fafb 0%, #ffffff 100%);
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

.themes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 5rem;
}

.theme-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 2px solid #e5e7eb;
  transition: all 0.3s;
  position: relative;
}

.theme-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border-color: #667eea;
}

.theme-card.featured {
  border-color: #667eea;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
}

.theme-badge {
  display: inline-block;
  padding: 0.375rem 0.875rem;
  background: #e5e7eb;
  color: #6b7280;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.theme-badge.popular {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.theme-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1f2937;
}

.theme-description {
  color: #6b7280;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.theme-features {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.theme-feature {
  color: #10b981;
  font-size: 0.875rem;
  font-weight: 500;
}

.preview-section {
  margin-top: 5rem;
  text-align: center;
}

.preview-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1f2937;
}

.preview-description {
  font-size: 1.125rem;
  color: #6b7280;
  margin-bottom: 3rem;
}

.preview-images {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  max-width: 900px;
  margin: 0 auto;
}

.preview-image {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.preview-img {
  width: 100%;
  height: auto;
  border-radius: 0.75rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s;
}

.preview-img:hover {
  transform: scale(1.05);
}

.preview-caption {
  color: #6b7280;
  font-size: 0.875rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .themes {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .themes-grid {
    grid-template-columns: 1fr;
  }

  .preview-images {
    grid-template-columns: 1fr;
  }
}
</style>
