export const GET = async (_: Request, { params }: { params: Promise<{ id: string }> }) => {
  try {
    const baseUrl = 'https://api.hubapi.com/forms/v2/forms/',
      { id } = await params;

    const response = await fetch(`${baseUrl}/${id}`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          authorization: `Bearer ${process.env.HUBSPOT_API_KEY || 'pat-na2-9086b687-5dc5-4698-b20f-016e378dd306'}`,
        },
      }),
      data = await response.json();

    return Response.json({ data });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'An unknown error occurred';

    return new Response(`Webhook error: ${message}`, {
      status: 400,
    });
  }
};
