module.exports = {
  '**/*.{js,jsx,ts,tsx}': (filenames) => [
    `npx eslint --fix ${filenames
      .filter((f) => !f.includes('src/mocks')) // ✅ 忽略 mocks
      .map((filename) => `"${filename}"`)
      .join(' ')}`
  ],
  '**/*.(md|json)': (filenames) =>
    `npx prettier --write ${filenames
      .map((filename) => `"${filename}"`)
      .join(' ')}`,
  'src/translations/*.(json)': (filenames) => [
    `npx eslint --fix ${filenames
      .map((filename) => `"${filename}"`)
      .join(' ')}`
  ],
};
