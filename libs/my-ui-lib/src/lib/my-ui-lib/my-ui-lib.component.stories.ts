import type { Meta, StoryObj } from '@storybook/angular';
import { MyUiLibComponent } from './my-ui-lib.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<MyUiLibComponent> = {
  component: MyUiLibComponent,
  title: 'MyUiLibComponent',
};
export default meta;
type Story = StoryObj<MyUiLibComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/my-ui-lib works!/gi)).toBeTruthy();
  },
};
