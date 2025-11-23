<template>
  <section id="installation" class="installation">
    <div class="container">
      <h2 class="section-title">Get Started in Seconds</h2>
      <p class="section-subtitle">
        Multiple ways to install and activate the theme
      </p>
      
      <div class="methods-grid">
        <div class="method-card">
          <div class="method-number">1</div>
          <h3 class="method-title">Visual Studio Marketplace</h3>
          <p class="method-description">
            Search for "JetBrains Icon Theme" in the VSCode Extensions panel and click Install.
          </p>
          <a href="https://marketplace.visualstudio.com/items?itemName=chadalen.vscode-jetbrains-icon-theme" 
             target="_blank" 
             class="method-link">
            Open Marketplace →
          </a>
        </div>

        <div class="method-card">
          <div class="method-number">2</div>
          <h3 class="method-title">Command Palette</h3>
          <p class="method-description">
            Press <code>Ctrl+P</code> (or <code>Cmd+P</code> on Mac) and paste:
          </p>
          <div class="code-block">
            ext install chadalen.vscode-jetbrains-icon-theme
          </div>
        </div>

        <div class="method-card">
          <div class="method-number">3</div>
          <h3 class="method-title">Activate Theme</h3>
          <p class="method-description">
            After installation, activate the theme:
          </p>
          <ol class="steps-list">
            <li>Open Command Palette (<code>Ctrl+Shift+P</code> or <code>Cmd+Shift+P</code>)</li>
            <li>Type "File Icon Theme"</li>
            <li>Select your preferred variant (Light, Dark, or Auto)</li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.installation {
  padding: 6rem 0;
  background: white;
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

.methods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.method-card {
  background: #f9fafb;
  padding: 2rem;
  border-radius: 1rem;
  border: 2px solid #e5e7eb;
  position: relative;
}

.method-number {
  position: absolute;
  top: -1rem;
  left: 2rem;
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.125rem;
}

.method-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-top: 1rem;
  color: #1f2937;
}

.method-description {
  color: #6b7280;
  line-height: 1.7;
  margin-bottom: 1rem;
}

.code-block {
  background: #1f2937;
  color: #10b981;
  padding: 1rem;
  border-radius: 0.5rem;
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 0.875rem;
  overflow-x: auto;
  margin-top: 1rem;
}

code {
  background: #e5e7eb;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 0.875rem;
}

.method-link {
  display: inline-block;
  margin-top: 1rem;
  color: #667eea;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s;
}

.method-link:hover {
  color: #764ba2;
}

.steps-list {
  margin-top: 1rem;
  padding-left: 1.5rem;
}

.steps-list li {
  color: #6b7280;
  margin-bottom: 0.5rem;
  line-height: 1.7;
}

@media (max-width: 768px) {
  .installation {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .methods-grid {
    grid-template-columns: 1fr;
  }
}
</style>
