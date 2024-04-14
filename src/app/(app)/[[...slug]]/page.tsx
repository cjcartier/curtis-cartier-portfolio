import { Section } from 'atoms/containers/section';
import Button from 'molecules/button';

const Page = async () => {
  console.log();

  return (
    <Section>
      <h1>Heyo!</h1>
      <Button label="Some Button" />
    </Section>
  );
};

export default Page;
