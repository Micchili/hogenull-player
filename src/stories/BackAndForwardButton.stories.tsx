import React from 'react';
import { Story, Meta } from '@storybook/react';

import { BackAndForwardButton, IProps } from '../atoms/BackAndForwardButton';

export default {
  title: 'Atoms/BackAndForwardButton',
  component: BackAndForwardButton,
} as Meta;

const Template: Story<IProps> = (args) => <BackAndForwardButton {...args} />;

export const Left = Template.bind({});
Left.args = {
  label: 'left',
};

export const Right = Template.bind({});
Right.args = {
  label: 'right',
};

