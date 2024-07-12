export default function getApiVersionUrl(version: string | undefined): string | undefined {
  if (!version) {
    return;
  }

  const [ tag, commit ] = version.split('.+commit.');

  if (commit) {
    return `https://github.com/storchain/explorer/commit/${ commit }`;
  }

  return `https://github.com/storchain/explorer/tree/${ tag }`;
}
