import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './components/SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions((builder) => {
  return builder
    .addTextInput({
      path: 'text',
      name: 'Simple text option',
      description: 'Description of panel option',
      defaultValue: 'Hello World',
    })
    .addBooleanSwitch({
      path: 'showSeriesCount',
      name: 'Show series counter',
      defaultValue: false,
    })
    .addRadio({
      path: 'seriesCountSize',
      defaultValue: 'sm',
      name: 'Series counter size',
      settings: {
        options: [
          { value: 'sm', label: 'Small' },
          { value: 'md', label: 'Medium' },
          { value: 'lg', label: 'Large' },
        ],
      },
      showIf: (config) => config.showSeriesCount,
    })

    .addColorPicker({
      path: 'circleColor',
      name: 'Circle Color',
      description: 'Dairenin rengini buradan değiştirebilirsiniz.',
      defaultValue: 'red',
    })

    .addSliderInput({
      path: 'circleSize',
      name: 'Circle Radius',
      defaultValue: 80,
      settings: {
        min: 10,
        max: 200,
      },
    });
});