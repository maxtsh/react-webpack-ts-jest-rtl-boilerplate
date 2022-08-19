const defaultHtmlAttributes = 'lang="en"';

const defaultTitle = "<title>React-Webpack-TS-Jest-Boilerplate</title>";

const defaultMeta = `
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
`;

const defaultBody = `<div id="app"></div>`;

export interface HtmlProps {
  htmlAttributes?: string;
  title?: string;
  meta?: string;
  base?: string;
  link?: string;
  style?: string;
  bodyAttributes?: string;
  body?: string;
  noscript?: string;
  script?: string;
}

const html = (props: HtmlProps = {}): string => {
  const {
    htmlAttributes = defaultHtmlAttributes,
    title = defaultTitle,
    meta = defaultMeta,
    base = "",
    link = "",
    style = "",
    bodyAttributes = "",
    body = defaultBody,
    noscript = "",
    script = "",
  } = props;

  return `
  <!DOCTYPE html>
  <html ${htmlAttributes}>
  <head>
    ${title}
    ${base}
    ${meta}
    ${link}
    ${style}
  </head>
  <body ${bodyAttributes}>
    ${body}
    ${noscript}
    ${script}
  </body>
  </html>
  `;
};

export default html;
