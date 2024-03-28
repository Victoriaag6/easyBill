export default function getBreadcrumbs({ url }: { url: string }): string[] {
  let breadcrumbs: string[] = ['Inicio'];
  let urlSegments = url.split('/');
  for (let i = 1; i < urlSegments.length; i++) {
    let breadcrumb = urlSegments[i];
    breadcrumb = breadcrumb.replace(/-/g, ' ');
    breadcrumb = breadcrumb.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    breadcrumbs.push(breadcrumb);
  }
  return breadcrumbs;
}