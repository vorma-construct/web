// Lo que llega a www.reformas-en-bilbao.es salta (301) a la misma dirección sin www, para que solo haya una web.
export async function onRequest(context) {
  try {
    const url = new URL(context.request.url);
    if (url.hostname === 'www.reformas-en-bilbao.es') {
      url.hostname = 'reformas-en-bilbao.es';
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }
  } catch (e) {}
  return context.next();
}
