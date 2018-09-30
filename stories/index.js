import React from 'react';
import { storiesOf } from '@storybook/react';
import Clock from '../src/components/clock';

storiesOf('Button', module)
	.add('Plain Clock', () => (
		<Clock></Clock>
	));
