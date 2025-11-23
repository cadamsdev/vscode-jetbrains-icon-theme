<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h4 class="footer-title">JetBrains Icon Theme</h4>
          <p class="footer-description">
            Bringing professional JetBrains-inspired icons to Visual Studio Code.
          </p>
          <div class="social-links">
            <a href="https://github.com/chadalen/vscode-jetbrains-icon-theme" 
               target="_blank" 
               class="social-link"
               aria-label="GitHub">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://marketplace.visualstudio.com/items?itemName=chadalen.vscode-jetbrains-icon-theme" 
               target="_blank" 
               class="social-link"
               aria-label="Visual Studio Marketplace">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.5 0L21.5 4L4 21.5L0 17.5L17.5 0Z"/>
                <path d="M21.5 4L24 6.5V17.5L21.5 20L4 2.5L6.5 0L21.5 4Z"/>
              </svg>
            </a>
          </div>
        </div>

        <div class="footer-section">
          <h4 class="footer-title">Quick Links</h4>
          <ul class="footer-links">
            <li><a href="#features" class="footer-link">Features</a></li>
            <li><a href="#installation" class="footer-link">Installation</a></li>
            <li><a href="#themes" class="footer-link">Themes</a></li>
            <li>
              <a href="https://github.com/chadalen/vscode-jetbrains-icon-theme/blob/main/docs/CONTRIBUTING.md" 
                 target="_blank" 
                 class="footer-link">
                Contributing
              </a>
            </li>
          </ul>
        </div>

        <div class="footer-section">
          <h4 class="footer-title">Resources</h4>
          <ul class="footer-links">
            <li>
              <a href="https://github.com/chadalen/vscode-jetbrains-icon-theme" 
                 target="_blank" 
                 class="footer-link">
                GitHub Repository
              </a>
            </li>
            <li>
              <a href="https://github.com/chadalen/vscode-jetbrains-icon-theme/issues" 
                 target="_blank" 
                 class="footer-link">
                Report Issues
              </a>
            </li>
            <li>
              <a href="https://intellij-icons.jetbrains.design/" 
                 target="_blank" 
                 class="footer-link">
                JetBrains Icons
              </a>
            </li>
            <li>
              <a href="https://github.com/chadalen/vscode-jetbrains-icon-theme/blob/main/CHANGELOG.md" 
                 target="_blank" 
                 class="footer-link">
                Changelog
              </a>
            </li>
          </ul>
        </div>

        <div class="footer-section">
          <h4 class="footer-title">Support</h4>
          <p class="footer-description">
            Love this extension? Support its development!
          </p>
          <a href="https://www.buymeacoffee.com/cadamsdev" 
             target="_blank" 
             class="support-button">
            <span>☕</span> Buy Me a Coffee
          </a>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">
          © {{ currentYear }} JetBrains Icon Theme for VSCode. 
          Open source under the <a href="https://github.com/chadalen/vscode-jetbrains-icon-theme/blob/main/LICENSE.md" 
             target="_blank" 
             class="footer-link">MIT License</a>.
        </p>
        <p class="attribution">
          Icons sourced from <a href="https://intellij-icons.jetbrains.design/" 
             target="_blank" 
             class="footer-link">JetBrains Design Resources</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: #1f2937;
  color: #d1d5db;
  padding: 4rem 0 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
}

.footer-description {
  color: #9ca3af;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #374151;
  border-radius: 0.5rem;
  color: #d1d5db;
  transition: all 0.2s;
}

.social-link:hover {
  background: #667eea;
  color: white;
  transform: translateY(-2px);
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-link {
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-link:hover {
  color: #667eea;
}

.support-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #fbbf24;
  color: #1f2937;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s;
  width: fit-content;
}

.support-button:hover {
  background: #f59e0b;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(251, 191, 36, 0.3);
}

.footer-bottom {
  border-top: 1px solid #374151;
  padding-top: 2rem;
  text-align: center;
}

.copyright,
.attribution {
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .footer {
    padding: 3rem 0 2rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
