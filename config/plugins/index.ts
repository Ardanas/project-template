import { Plugin } from 'vite';
import configStyleImport from './styleImport';
import configLegacy from './legacy';
import { VITE_APP_LEGACY } from '../index';

export default function createVitePlugins() {
  const vitePlugins: (Plugin | Plugin[])[] = [configStyleImport()];
  VITE_APP_LEGACY && vitePlugins.push(configLegacy);
  return vitePlugins;
}
