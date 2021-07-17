import React from 'react';
import { Story, Meta } from '@storybook/react';

import ControllerDisplay , {IProps} from '../atoms/ControllerDisplay'

export default {
  title: 'Atoms/ControllerDisplay',
  component: ControllerDisplay,
} as Meta;

const Template: Story<IProps> = (args) => <ControllerDisplay text={args.text} />;

export const Primary = Template.bind({});
Primary.args = {
    text: '1. 君の知らない物語　-Youtube-  Albam1',
  };