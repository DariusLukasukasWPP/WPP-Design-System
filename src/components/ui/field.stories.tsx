import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldSeparator,
  FieldSet,
  FieldLegend,
} from './field';
import { Input } from './input';
import { Textarea } from './textarea';

const meta = {
  title: 'Forms/Field',
  component: Field,
  tags: ['autodocs'],
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-96">
      <Field>
        <FieldLabel htmlFor="field-email">Email</FieldLabel>
        <Input id="field-email" type="email" placeholder="you@wpp.com" />
        <FieldDescription>
          We'll never share your email with anyone else.
        </FieldDescription>
      </Field>
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div className="w-96">
      <Field data-invalid="true">
        <FieldLabel htmlFor="field-username">Username</FieldLabel>
        <Input
          id="field-username"
          aria-invalid
          defaultValue="a"
          className="border-destructive"
        />
        <FieldError errors={[{ message: 'Username must be at least 3 characters.' }]} />
      </Field>
    </div>
  ),
};

export const FormGroup: Story = {
  render: () => (
    <div className="w-96">
      <FieldSet>
        <FieldLegend>Profile</FieldLegend>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="field-name">Full name</FieldLabel>
            <Input id="field-name" placeholder="Darius Lukasukas" />
          </Field>
          <Field>
            <FieldLabel htmlFor="field-bio">Bio</FieldLabel>
            <Textarea id="field-bio" placeholder="Tell us about yourself" />
            <FieldDescription>Shown on your public profile.</FieldDescription>
          </Field>
          <FieldSeparator>Danger zone</FieldSeparator>
          <Field orientation="horizontal">
            <FieldLabel htmlFor="field-delete">Delete account</FieldLabel>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  ),
};
