import Tabs from './Tabs';

function SomeComponent() {
  return <h1>Some random content</h1>;
}

const tabs = [
  {
    label: 'Tab 1',
    content: <div>This si content for Tab 1</div>,
  },
  {
    label: 'Tab 2',
    content: <div>This si content for Tab 2</div>,
  },
  {
    label: 'Tab 3',
    content: <SomeComponent />,
  },
];

export default function CustomTabs() {
  function handleChange(newIndex) {
    console.log(newIndex);
  }

  return <Tabs tabs={tabs} onChange={handleChange} />;
}
