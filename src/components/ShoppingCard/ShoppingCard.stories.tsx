import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

import { ShoppingCard } from './ShoppingCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/ShoppingCard',
	component: ShoppingCard,
	decorators: [withDesign],
} as ComponentMeta<typeof ShoppingCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ShoppingCard> = (args) => <ShoppingCard {...args} />;

export const Primary = Template.bind({
});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	title: 'Shopping cart',
	subTitle: 'Shipping & Expenses are calculated in Checkout',
	saveButtonLabel: 'Checkout',
	cancelButtonLabel: 'Clear Cart'
};