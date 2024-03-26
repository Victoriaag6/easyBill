export default function getBreadcrumbs({ url }: { url: string }): string[] {
  let breadcrumbs: string[] = ['Inicio'];
  let urlSegments = url.split('/');
  for (let i = 1; i < urlSegments.length; i++) {
    let breadcrumb = urlSegments[i];
    breadcrumb = breadcrumb.charAt(0).toUpperCase() + breadcrumb.slice(1);
    breadcrumbs.push(breadcrumb);
  }
  return breadcrumbs;
}
