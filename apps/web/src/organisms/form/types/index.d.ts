export interface Validation {
  data?: string;
  message?: string;
  name?: string;
  useDefaultBlockList?: boolean;
  blockedEmailAddresses?: string[];
}

type FieldType =
  | 'text'
  | 'textarea'
  | 'date'
  | 'file'
  | 'number'
  | 'select'
  | 'radio'
  | 'checkbox'
  | 'booleancheckbox'
  | 'phonenumber';

export interface Field {
  defaultValue?: string;
  description?: string;
  dependentFieldFilters?: DependantFiledFilters[];
  label?: string;
  fieldType?: FieldType;
  type?: 'string' | 'number' | 'date' | 'datetime' | 'enumeration';
  options?:
    | string[]
    | { label: string; value: string }[]
    | readonly { label: readonly string; value: readonly string }[];
  selectedOptions?: string[];
  name?: string;
  placeholder?: string;
  hidden?: boolean;
  isSmartField?: boolean;
  validation?: Validation;
  required?: boolean;
  objectTypeId?: string;
}

interface DependantFiledFilters {
  dependentFormField?: Field;
  filters?: {
    strValues?: string[];
    operator: 'SET_ANY';
  }[];
  formFieldAction: 'DISPLAY';
}

export interface FieldGroups {
  fields: Field[];
  default?: boolean;
  isSmartGroup?: boolean;
  richText?: {
    content?: string;
    type?: 'TEXT';
  };
}

export interface Metadata {
  name: string;
  value: string;
}

// export interface selectedExternalOptions {}

export interface HubspotForm {
  formFieldGroups: FieldGroups[];
  submitText?: string;
  name?: string;
  metadata?: Metadata[];
  notifyRecipients?: string;
  redirect?: string;
  // selectedExternalOptions: selectedExternalOptions;
  inlineMessage?: string;
  captchaEnabled?: boolean;
  guid: string;
  portalId: string;
}

export interface FieldObjectIds {
  fieldName?: string;
  objectTypeId?: string;
}
