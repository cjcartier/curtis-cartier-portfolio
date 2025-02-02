'use client';

import { q } from 'groqd';
import { type FC, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from 'molecules/button';

import fieldGenerator, { fieldSelection } from 'components/form/components/fieldGenerator';

import { form } from 'theme/recipes';

import type { Selection, TypeFromSelection } from 'groqd';
import type { Data } from 'types/global';

type FormProps = TypeFromSelection<typeof formSelection>;

const Form: FC<FormProps> = ({ _id: formID, title, formFields }) => {
  const [isLoading, setIsLoading] = useState(false),
    [hasSubmitted, setHasSubmitted] = useState<boolean>(),
    [error, setError] = useState<{ status?: string; message: string } | undefined>();

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
        {formFields && fieldGenerator(formFields, control, errors)}
        <Button label="Submit" type="submit" disabled={isSubmitting} size="lg" fullWidth loading={isLoading} />
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

export const formSelection = {
  _id: q.string(),
  title: q.string(),
  formFields: q('formFields').filter().deref().grab(fieldSelection),
} satisfies Selection;

export default Form;
