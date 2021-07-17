import React from 'react';
import { Story, Meta } from '@storybook/react';

import {PlayerDisplay, IProps} from '../../src/atoms/PlayerDisplay'

export default {
  title: 'Componets/PlayerDisplay',
  component: PlayerDisplay,
} as Meta;

const Template: Story<IProps> = (args) => <PlayerDisplay videoUrl={args.videoUrl} />;

export const Primary = Template.bind({});
Primary.args = {
    videoUrl: 'https://www.youtube.com/watch?v=ony539T074w',
};