import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

export const BUILD_DIR_PATH = path.join(__dirname, '../../dist')
export const SRC_DIR_PATH = path.join(__dirname, '../../assets')
