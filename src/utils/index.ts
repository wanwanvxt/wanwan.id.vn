function toCapitalizedCase(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function isExternalLink(link: string): boolean {
  return link.startsWith('http');
}

export { toCapitalizedCase, isExternalLink };
