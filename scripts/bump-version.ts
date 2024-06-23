import * as core from '@actions/core';
import { execSync } from 'child_process';

const label = process.argv.slice(2)?.toString()?.trim();

function main() {
  core.info(`Selected label: ${label}`);
  switch (label) {
    case 'major':
    case 'minor':
    case 'patch':
      bumpVersion(label);
      break;
    default:
      core.setFailed(`Invalid label: ${label}`);
      return;
  }
}

function bumpVersion(label: string) {
  try {
    core.info(`Incrementing version with label: ${label}`);
    const output = execSync(`npm version ${label}`, {
      stdio: 'pipe',
    });

    const newVersion = output.toString().trim();
    core.info(`New version: ${newVersion}`);
    core.setOutput('version', newVersion.replace('v', ''));
  } catch (error) {
    core.setFailed(error);
  }
}

main();
