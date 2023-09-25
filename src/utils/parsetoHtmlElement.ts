export function parseToHtmlElement(htmlString: string): HTMLElement {
  const tempElement = document.createElement("div");
  
  tempElement.innerHTML = htmlString;

  return tempElement;
}
