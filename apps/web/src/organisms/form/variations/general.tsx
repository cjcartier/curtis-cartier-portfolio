import { hasArrayValues } from '@packages/utils/arrays';

import Button from 'molecules/button';
// import Loader from 'molecules/loader';

import FieldGenerator from 'organisms/form/utils/fieldGenerator';

import { css } from 'theme/css';
import { form } from 'theme/recipes';

import type { FieldGroups } from 'organisms/form/types';
import type { FieldGeneratorProps } from 'organisms/form/utils/fieldGenerator';
import type { FC } from 'react';

interface GeneralFormProps extends Omit<FieldGeneratorProps, 'fieldGroups'> {
  fieldGroups?: FieldGroups[];
  onSubmit: () => void;
  state: 'submitted' | 'loading' | 'default';
}

const FormState: FC<GeneralFormProps> = ({ onSubmit, state, fieldGroups, ...props }) => {
  const classes = form();

  switch (state) {
    case 'submitted':
      return (
        <div className={classes.formSubmission}>
          <h3 className={classes.submissionTitle}>Success!</h3>
          <p className={classes.submissionDescription}>Thanks for being the cats pajama’s</p>
        </div>
      );
    case 'loading':
      return (
        <div>
          {/* <Loader /> */}
          <h3>Loading...</h3>
        </div>
      );
    default:
      return hasArrayValues(fieldGroups) ? (
        <form className={classes.root} autoComplete="on" onSubmit={onSubmit}>
          <h3 className={classes.title}>Get In Touch</h3>
          <FieldGenerator fieldGroups={fieldGroups} {...props} />
          <Button type="submit" label="Submit" hierarchy="fill" className={css({ width: '100%' })} />
        </form>
      ) : (
        <div>No form fields defined</div>
      );
  }
};

const GeneralForm: FC<GeneralFormProps> = ({ ...props }) => (
  <div className="rounded-lg border border-mud-300 bg-warmGrey-50 px-4 py-6 sm:px-6">
    <FormState {...props} />
  </div>
);

export default GeneralForm;
