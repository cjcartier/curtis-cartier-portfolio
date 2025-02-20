export const POST = async (req: Request) => {
  try {
    const { params, fields } = await req.json(),
      { portalId, guid, pageName, pageUri } = params,
      baseUrl = 'https://api.hsforms.com/submissions/v3/integration/secure/submit/',
      submissionUrl = `${baseUrl}${portalId}/${guid}`;

    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', `Bearer ${process.env.HUBSPOT_API_KEY}`);

    const response = await fetch(submissionUrl, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      headers,
      body: JSON.stringify({ fields, submittedAt: Date.now().toString(), context: { pageName, pageUri } }),
    });

    const responseJson = await response.json();

    return Response.json(responseJson);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'An unknown error occurred';

    return new Response(`Webhook error: ${message}`, {
      status: 400,
    });
  }
};
