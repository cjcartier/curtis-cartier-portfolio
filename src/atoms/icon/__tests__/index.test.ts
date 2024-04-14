import { describe, expect, it } from "vitest";
import { render} from '@testing-library/react'
describe('Icon', () => {
  it('renders icon with default size', () => {
    const { container } = render(<Icon icon='check' />);
    expect(container.querySelector('svg')).toHaveAttribute('width', '24');
  });

  it('renders icon with custom size', () => {
    const { container } = render(<Icon icon='check' size='16' />);
    expect(container.querySelector('svg')).toHaveAttribute('width', '16');
  });

  it('renders icon with default color', () => {
    const { container } = render(<Icon icon='check' />);
    expect(container.querySelector('svg')).toHaveAttribute(
      'fill',
      'currentColor'
    );
  });

  it('renders icon with custom color', () => {
    const { container } = render(<Icon icon='check' iconColor='red' />);
    expect(container.querySelector('svg')).toHaveAttribute('fill', 'red');
  });

  it('renders title element with supplied aria label', () => {
    const { container } = render(<Icon icon='check' ariaLabel='Check icon' />);
    expect(container.querySelector('title')).toHaveTextContent('Check icon');
  });

  it('does not render title element without supplied aria label', () => {
    const { container } = render(<Icon icon='check' />);
    expect(container.querySelector('title')).toBeNull();
  });
});