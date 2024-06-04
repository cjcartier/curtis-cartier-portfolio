'use client';

import { type FC, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from 'molecules/button';

import fieldGenerator from 'components/form/utils/fieldGenerator';

import { form } from 'theme/recipes';

import type { Data } from 'types/global';
import type { Form as FormProps } from 'types/payload-types';

const Form: FC<FormProps> = ({ id: formID, title, fields, submitButtonLabel }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>();
  const [error, setError] = useState<{ status?: string; message: string } | undefined>();

  const classes = form({ hasSubmitted });

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    mode: 'all',
  });

  const onSubmit = useCallback(
    (data: Data) => {
      const submitForm = async () => {
        setError(undefined);

        const dataToSend = Object.entries(data).map(([name, value]) => ({
          field: name,
          value,
        }));

        const loadingTimerID = window.setTimeout(() => {
          setIsLoading(true);
        }, 1000);

        try {
          const req = await fetch('/api/form-submissions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              form: formID,
              submissionData: dataToSend,
            }),
          });

          const res = await req.json();

          clearTimeout(loadingTimerID);

          if (req.status >= 400) {
            setIsLoading(false);
            setError({
              status: res.status,
              message: res.errors?.[0]?.message || 'Internal Server Error',
            });

            return;
          }

          setIsLoading(false);
          setHasSubmitted(true);
        } catch (err) {
          console.error(err);
          setError({
            message: 'Something went wrong.',
          });
        }
      };

      submitForm();
    },
    [formID],
  );

  return (
    <>
      <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
        <h3 className={classes.title}>{title}</h3>
        {fieldGenerator(fields, control, errors)}
        <Button
          label={submitButtonLabel || 'Submit'}
          type="submit"
          disabled={isSubmitting}
          size="lg"
          fullWidth
          loading={isLoading}
        />
        {error && <div>{`${error.status || '500'}: ${error.message || ''}`}</div>}
      </form>
      {hasSubmitted && (
        <div className={classes.formSubmission}>
          <h3 className={classes.submissionTitle}>Success!</h3>
          <p className={classes.submissionDescription}>Thanks for being the cats pajama’s</p>
        </div>
      )}
    </>
  );
};

export default Form;
