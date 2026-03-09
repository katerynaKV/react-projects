import { useContext } from 'react';
import Accordion from '../accordion/Accordion';
import LightDarkMode from '../light-dark-mode/LightDarkMode';
import RandomColor from '../random-color/RandomColor';
import TicTacToe from '../tic-tac-toe/TicTacToe';
import TreeView from '../tree-view/TreeView';
import { FeatureFlagsContext } from './context/FeatureFlagsProvider';
import CustomTabs from '../custom-tabs/CustomTabs';
import menus from '../tree-view/data';

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: 'showLightAndDarkMode',
      component: <LightDarkMode />,
    },
    {
      key: 'showTicTacToeBoard',
      component: <TicTacToe />,
    },
    {
      key: 'showRandomColorGenerator',
      component: <RandomColor />,
    },
    {
      key: 'showAccordion',
      component: <Accordion />,
    },
    {
      key: 'showTreeView',
      component: <TreeView menus={menus} />,
    },
    {
      key: 'showTabs',
      component: <CustomTabs />,
    },
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  if (loading) return <h1>Loading data! Please wait.</h1>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null,
      )}
    </div>
  );
}
