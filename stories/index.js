import React from 'react';
import { storiesOf } from '@storybook/react';
import Clock from '../src/components/clock';

storiesOf('Clock', module)
	.add('Plain Clock', () => (
		<Clock name="Plain Clock"></Clock>
	))
	.add('Empty Clock', () => (
		<Clock name=""></Clock>
	));
