<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">
          JetBrains Icons for <span class="highlight">VSCode</span>
        </h1>
        <p class="hero-subtitle">
          Transform your Visual Studio Code with sleek, professional icons inspired by JetBrains IntelliJ products.
        </p>
        <div class="hero-actions">
          <a href="https://marketplace.visualstudio.com/items?itemName=chadalen.vscode-jetbrains-icon-theme" 
             target="_blank" 
             class="btn btn-primary">
            Install from Marketplace
          </a>
          <a href="#installation" class="btn btn-secondary">
            Learn More
          </a>
        </div>
        <div class="stats">
          <div class="stat">
            <img src="https://img.shields.io/visual-studio-marketplace/i/chadalen.vscode-jetbrains-icon-theme?style=flat-square" alt="Installs" />
          </div>
          <div class="stat">
            <img src="https://img.shields.io/visual-studio-marketplace/v/chadalen.vscode-jetbrains-icon-theme?style=flat-square" alt="Version" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 6rem 0 4rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.highlight {
  color: #fbbf24;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.875rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
  display: inline-block;
}

.btn-primary {
  background: #fbbf24;
  color: #1f2937;
}

.btn-primary:hover {
  background: #f59e0b;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.stats {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.stat img {
  height: 20px;
}

@media (max-width: 768px) {
  .hero {
    padding: 4rem 0 3rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.125rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    max-width: 300px;
  }
}
</style>
