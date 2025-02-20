'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import fetchHubspotForm from 'organisms/form/utils/fetchHubspotForm';
import getFormState from 'organisms/form/utils/getFormState';
import submitHubspotForm from 'organisms/form/utils/submitHubspotForm';
import GeneralForm from 'organisms/form/variations/general';
import SingleLineForm from 'organisms/form/variations/singleLine';

import type { HubspotFormQuery } from 'organisms/form/query';
import type { FieldObjectIds, HubspotForm } from 'organisms/form/types';
import type { BaseSyntheticEvent, FC } from 'react';
import type { FieldValues } from 'react-hook-form';

const Form: FC<HubspotFormQuery & { submitLabel?: string }> = ({ formId, variation, submitLabel }) => {
  const {
      control,
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm({
      mode: 'all',
    }),
    [loading, setLoading] = useState(true),
    [submitted, setSubmitted] = useState(false),
    [formData, setFormData] = useState<HubspotForm | null>(null),
    [fieldObjectIds, setFieldObjectIds] = useState<FieldObjectIds[]>([]);

  const onSubmit = async (data: FieldValues, e?: BaseSyntheticEvent<object, unknown, unknown>) => {
    e?.preventDefault();

    try {
      const res = await submitHubspotForm(data, formData?.portalId || '', formData?.guid || '', fieldObjectIds),
        success = res?.status === 200;

      if (success) {
        reset();
        setSubmitted(true);
      }
    } catch (error) {
      throw new Error(`Failed to submit Hubspot form: ${error}`);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await fetchHubspotForm(formId || '');

        setFormData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        throw new Error(`[HubForm] Could not fetch data for form with ID: ${formId} with error: ${error}`);
      }
    })();
  }, [formId]);

  switch (variation) {
    case 'singleLine':
      return (
        <SingleLineForm
          fieldGroups={formData?.formFieldGroups}
          control={control}
          errors={errors}
          fieldObjectIds={fieldObjectIds}
          setFieldObjectIds={setFieldObjectIds}
          register={register}
          onSubmit={handleSubmit(onSubmit)}
          state={getFormState(submitted, loading)}
          submitLabel={submitLabel}
        />
      );
    case 'general':
      return (
        <GeneralForm
          fieldGroups={formData?.formFieldGroups}
          control={control}
          errors={errors}
          fieldObjectIds={fieldObjectIds}
          setFieldObjectIds={setFieldObjectIds}
          onSubmit={handleSubmit(onSubmit)}
          state={getFormState(submitted, loading)}
        />
      );
    default:
  }
};

export default Form;
