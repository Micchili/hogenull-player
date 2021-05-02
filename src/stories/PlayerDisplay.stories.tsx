import React from 'react';
import { Story, Meta } from '@storybook/react';

import PlayerDisplay , {IProps} from '../atoms/PlayerDisplay'

export default {
  title: 'Atoms/PlayerDisplay',
  component: PlayerDisplay,
} as Meta;

const Template: Story<IProps> = (args) => <PlayerDisplay text={args.text} />;

export const Primary = Template.bind({});
Primary.args = {
    text: '1. 君の知らない物語　-Youtube-  Albam1',
  };