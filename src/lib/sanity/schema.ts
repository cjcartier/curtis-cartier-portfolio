import Company from 'schemas/documents/company';
import ConversionPanel from 'schemas/documents/conversionPanel';
import Footer from 'schemas/documents/footer';
import Form from 'schemas/documents/form';
import Header from 'schemas/documents/header';
import Hero from 'schemas/documents/hero';
import Pages from 'schemas/documents/pages/page';
import Person from 'schemas/documents/person';
import PortCo from 'schemas/documents/portco';
import Switchback from 'schemas/documents/switchback';
import CaseStudySwitchBack from 'schemas/documents/switchback/caseStudy';
import Testimonials from 'schemas/documents/testimonial';
import TestimonialComponent from 'schemas/documents/testimonialComponent';
import Tools from 'schemas/documents/tools';
import ToolsComponent from 'schemas/documents/toolsComponent';

import type { SchemaTypeDefinition } from 'sanity';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    CaseStudySwitchBack,
    Company,
    Person,
    Testimonials,
    Tools,
    Form,
    ConversionPanel,
    Hero,
    PortCo,
    Switchback,
    TestimonialComponent,
    ToolsComponent,
    Header,
    Footer,
    Pages,
  ],
};

export default schema;
