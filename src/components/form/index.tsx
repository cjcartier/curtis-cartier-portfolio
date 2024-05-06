'use client';

import { useForm } from 'react-hook-form';

import Button from 'molecules/button';

import fieldGenerator from 'components/form/utils/feildGenerator';

import { form } from 'theme/recipes';

import type { FC } from 'react';
import type { Form as FormProps } from 'types/payload-types';

const Form: FC<FormProps> = ({ title, fields, submitButtonLabel }) => {
  const classes = form();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm({
    mode: 'all',
  });

  return (
    <form className={classes.root}>
      <h3 className={classes.title}>{title}</h3>
      {fieldGenerator(fields, control, errors)}
      <Button label={submitButtonLabel || 'Submit'} type="submit" disabled={isSubmitting} size="lg" fullWidth />
    </form>
  );
};

export default Form;
