import React from 'react';
import { Story, Meta } from '@storybook/react';

import {PlayerController , IProps} from '../../src/components/PlayerController'

export default {
  title: 'Componets/PlayerController',
  component: PlayerController,
} as Meta;

const Template: Story<IProps> = (args) => <PlayerController text={args.text} />;

export const Primary = Template.bind({});
Primary.args = {
    text: '1. 君の知らない物語　-Youtube-  Albam1',
};