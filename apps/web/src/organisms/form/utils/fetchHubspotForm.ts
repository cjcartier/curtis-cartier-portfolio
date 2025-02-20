import type { HubspotForm } from 'organisms/form/types';

export const fetchHubspotForm = async (formId: string): Promise<{ data: HubspotForm }> => {
  if (!formId) {
    throw new Error('[HubForm] You must pass a HubForm ID.');
  }

  try {
    const data: Response = await fetch(`/api/forms/${formId}`);

    return await data.json();
  } catch (error) {
    throw new Error(`Failed to fetch Hubspot form: ${formId} with error: ${error}`);
  }
};

export default fetchHubspotForm;
