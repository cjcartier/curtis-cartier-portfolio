import Badge from 'schemas/documents/badge';
import Button from 'schemas/documents/button';
import Company from 'schemas/documents/company';
import ConversionPanel from 'schemas/documents/conversionPanel';
import Footer from 'schemas/documents/footer';
import Header from 'schemas/documents/header';
import Hero from 'schemas/documents/hero';
import Person from 'schemas/documents/person';
import PortCo from 'schemas/documents/portco';
import Switchback from 'schemas/documents/switchback';
import Testimonials from 'schemas/documents/testimonial';
import TestimonialComponent from 'schemas/documents/testimonialComponent';
import Tools from 'schemas/documents/tools';
import ToolsComponent from 'schemas/documents/toolsComponent';

import type { SchemaTypeDefinition } from 'sanity';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    Badge,
    Button,
    Company,
    ConversionPanel,
    Hero,
    Person,
    PortCo,
    Switchback,
    Testimonials,
    TestimonialComponent,
    Tools,
    ToolsComponent,
    Header,
    Footer,
  ],
};

export default schema;
