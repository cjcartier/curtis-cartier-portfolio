import { hasArrayValues } from '@packages/utils/arrays';
import { objectKeys } from '@packages/utils/typeUtils';

import type { FieldObjectIds, HubspotForm } from 'organisms/form/types';
import type { FieldValues } from 'react-hook-form';

type FormattedData = { name: string; value: string; objectTypeId?: string };
const formatValueForHubspot = (data: FieldValues, fieldObjectIds: FieldObjectIds[]): FormattedData[] => {
  const formattedValues = objectKeys(data).map(item => ({
    name: item,
    value: hasArrayValues(data[item]) ? data[item].join(';') : data[item],
  }));

  formattedValues.forEach(valueObj => {
    fieldObjectIds.map(
      idObject =>
        idObject.fieldName === valueObj.name && Object.assign(valueObj, { objectTypeId: idObject.objectTypeId }),
    );
  });

  return formattedValues;
};

const submitHubspotForm = async (
  data: FieldValues,
  portalId: HubspotForm['portalId'],
  guid: HubspotForm['guid'],
  fieldObjectIds: FieldObjectIds[],
) => {
  const formattedData = formatValueForHubspot(data, fieldObjectIds);

  try {
    const res = await fetch('/api/forms/form-submit', {
      method: 'POST',
      body: JSON.stringify({
        fields: formattedData,
        params: {
          portalId,
          guid,
          pageName: document.title,
          pageUri: window.location.href,
        },
      }),
      headers: {
        'content-type': 'application/json',
      },
    });

    return res;
  } catch (error) {
    console.error(error);
  }
};

export default submitHubspotForm;
