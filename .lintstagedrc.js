module.exports = {
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `pnpm lint --fix . ${filenames.join(' ')}`,
    `pnpm test -- --findRelatedTests ${filenames.join(' ')}`,
  ],
};
