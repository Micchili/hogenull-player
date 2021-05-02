import React from 'react';
import { Story, Meta } from '@storybook/react';

import {Disk} from '../../src/components/Disk'

export default {
  title: 'Componets/Disk',
  component: Disk,
} as Meta;

const Template: Story = () => <Disk />;

export const Primary = Template.bind({});
