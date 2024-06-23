import * as core from '@actions/core';
import { execSync } from 'child_process';

function publish() {
  const semver = process.argv.slice(2)?.toString()?.trim();

  if (!semver) {
    core.setFailed('Invalid semver');
    return;
  }

  try {
    core.info(`Incrementing version with semver: ${semver}`);
    // create package
    execSync('npm run package', { stdio: 'inherit' });

    // publish package
    // execSync(`npx vsce publish ${semver}`, { stdio: 'inherit' });
    execSync('npx vsce ls', { stdio: 'inherit' });
  } catch (error) {
    core.setFailed(`Failed to create package: ${error.message}`);
  }

  try {
    execSync('git push --follow-tags', { stdio: 'inherit' });
  } catch (error) {
    core.setFailed(`Failed to push changes: ${error.message}`);
  }
}

publish();
