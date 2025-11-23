<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <span class="logo-icon">🎨</span>
        <span class="logo-text">JetBrains Icon Theme</span>
      </div>
      <nav class="nav">
        <a href="#features" class="nav-link">Features</a>
        <a href="#installation" class="nav-link">Installation</a>
        <a href="#themes" class="nav-link">Themes</a>
        <a href="https://github.com/chadalen/vscode-jetbrains-icon-theme" target="_blank" class="nav-link">GitHub</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e5e7eb;
  padding: 1rem 0;
  z-index: 100;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
}

.logo-icon {
  font-size: 1.5rem;
}

.nav {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  color: #6b7280;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #087ea4;
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .logo {
    font-size: 1rem;
    gap: 0.5rem;
  }

  .logo-icon {
    font-size: 1.25rem;
  }

  .logo-text {
    font-size: 0.875rem;
    white-space: nowrap;
  }

  .nav {
    gap: 0.5rem;
  }

  .nav-link {
    font-size: 0.75rem;
    padding: 0.25rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 0.75rem;
  }

  .logo {
    font-size: 0.875rem;
    gap: 0.375rem;
    min-width: 0;
    flex-shrink: 1;
  }

  .logo-icon {
    font-size: 1.125rem;
    flex-shrink: 0;
  }

  .logo-text {
    font-size: 0.75rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .nav {
    gap: 0.375rem;
    flex-shrink: 0;
  }

  .nav-link {
    font-size: 0.688rem;
    padding: 0.125rem;
  }

  .nav-link:nth-child(2) {
    display: none;
  }
}
</style>
