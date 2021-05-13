import React from 'react';
import { Story, Meta } from '@storybook/react';

import { PlayButton, IProps } from '../atoms/PlayButton';

export default {
  title: 'Atoms/PlayButton',
  component: PlayButton,
} as Meta;

const Template: Story<IProps> = (args) => <PlayButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isPlay: true,
  onClick: () => alert("クリックしたよ")
}

