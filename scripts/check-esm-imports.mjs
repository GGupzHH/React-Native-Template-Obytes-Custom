const modules = [
  'path',
  'url',
  'eslint/config',
  'eslint-config-expo/flat.js',
  'eslint-plugin-i18n-json',
  'eslint-plugin-prettier/recommended',
  'eslint-plugin-react-compiler',
  'eslint-plugin-simple-import-sort',
  'eslint-plugin-tailwindcss',
  'eslint-plugin-testing-library',
  'eslint-plugin-unicorn',
  'eslint-plugin-unused-imports',
  '@typescript-eslint/configs',
  '@typescript-eslint/parser',
];

(async () => {
  for (const m of modules) {
    try {
      console.log('importing', m);
      await import(m);
      console.log('OK', m);
    } catch (err) {
      console.error('ERR importing', m);
      console.error(err && err.stack ? err.stack : err);
      process.exit(1);
    }
  }
  console.log('All imports OK');
})();
