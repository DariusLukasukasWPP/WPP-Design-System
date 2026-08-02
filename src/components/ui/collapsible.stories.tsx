import type { Meta, StoryObj } from '@storybook/react-vite';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from './collapsible';
import { Button } from './button';
import { ChevronsUpDownIcon } from 'lucide-react';

const meta = {
  title: 'Layout/Collapsible',
  component: Collapsible,
  parameters: {
    docs: {
      description: {
        component:
          'Show / hide a content region without the full accordion chrome. Use when only one panel is needed.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Collapsible className="w-72 flex flex-col gap-2">
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-medium">3 people starred this repo</span>
        <CollapsibleTrigger
          render={
            <Button variant="ghost" size="icon-sm">
              <ChevronsUpDownIcon />
            </Button>
          }
        />
      </div>
      <div className="rounded-md border px-3 py-2 text-sm">@shadcn</div>
      <CollapsibleContent className="flex flex-col gap-2">
        <div className="rounded-md border px-3 py-2 text-sm">@darius</div>
        <div className="rounded-md border px-3 py-2 text-sm">@wpp</div>
      </CollapsibleContent>
    </Collapsible>
  ),
};
