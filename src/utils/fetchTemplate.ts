const PATH = "./components";

const templates = JSON.parse(localStorage.getItem("templates") ?? "{}");

export async function loadTemplate(url: string): Promise<string> {
  if (templates && url in templates) return templates[url];

  const response = await fetch(`${PATH}${url}`);
  const html = await response.text();

  templates[url] = html;
  localStorage.setItem("templates", JSON.stringify(templates));

  return html;
}
