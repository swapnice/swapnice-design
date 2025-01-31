import { html } from 'lit';
import '../swapp-view.js';

export default {
  title: 'SwappView',
  component: 'swapp-view',
  argTypes: {
    header: { control: 'text' },
    counter: { control: 'number' },
    textColor: { control: 'color' },
  },
};

function Template({ header = 'Hello world', counter = 5, textColor, slot }) {
  return html`
    <swapp-view
      style="--swapp-view-text-color: ${textColor || 'black'}"
      .header=${header}
      .counter=${counter}
    >
      ${slot}
    </swapp-view>
  `;
}

export const Regular = Template.bind({});

export const CustomHeader = Template.bind({});
CustomHeader.args = {
  header: 'My header',
};

export const CustomCounter = Template.bind({});
CustomCounter.args = {
  counter: 123456,
};

export const SlottedContent = Template.bind({});
SlottedContent.args = {
  slot: html`<p>Slotted content</p>`,
};
SlottedContent.argTypes = {
  slot: { table: { disable: true } },
};
