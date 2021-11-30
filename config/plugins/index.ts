import configStyleImport from './styleImport';
import { Plugin } from 'vite';

export default function createVitePlugins() {
  const vitePlugins: (Plugin | Plugin[])[] = [configStyleImport()];

  return vitePlugins;
}
