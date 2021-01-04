'use strict';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {Picker} from '@react-native-picker/picker';
import {LinkContainer} from '../components/LinkContainer';

export const PickerExamplePage: React.FunctionComponent<{}> = () => {
  const example1jsx = `import {Picker} from '@react-native-picker/picker';
  
<Picker style={{height: 50, width: 100}}>
  <Picker.Item label="Option 1" value="Option 1"/>
  <Picker.Item label="Option 2" value="Option 2"/>
  <Picker.Item label="Option 3" value="Option 3"/>
</Picker>`;
  const example2jsx = `import {Picker} from '@react-native-picker/picker';
  
<Picker style={{height: 50, width: 100}} enabled={false}>
  <Picker.Item label="Option 1" value="Option 1"/>
  <Picker.Item label="Option 2" value="Option 2"/>
  <Picker.Item label="Option 3" value="Option 3"/>
</Picker>`;
  const example3jsx = `import {Picker} from '@react-native-picker/picker';
  
<Picker style={{height: 50, width: 100}}>
  <Picker.Item label="Option 1" value="Option 1"/>
  <Picker.Item label="Option 2" value="Option 2"/>
  <Picker.Item label="Option 3" value="Option 3"/>
</Picker>`;
  return (
    <Page
      title="Picker"
      description="A picker control that drops down a flyout of choices from which one can be chosen.">
      <Example title="A simple Picker." code={example1jsx}>
        <Picker style={{height: 50, width: 100}}>
          <Picker.Item label="Option 1" value="Option 1" />
          <Picker.Item label="Option 2" value="Option 2" />
          <Picker.Item label="Option 3" value="Option 3" />
        </Picker>
      </Example>
      <Example title="A disabled Picker." code={example2jsx}>
        <Picker style={{height: 50, width: 100}} enabled={false}>
          <Picker.Item label="Option 1" value="Option 1" />
          <Picker.Item label="Option 2" value="Option 2" />
          <Picker.Item label="Option 3" value="Option 3" />
        </Picker>
      </Example>
      <Example title="A colorful Picker." code={example3jsx}>
        <Picker
          style={{height: 50, width: 100}}
          itemStyle={{fontStyle: 'italic', color: '#FF0000'}}>
          <Picker.Item label="Option 1" value="Option 1" />
          <Picker.Item label="Option 2" value="Option 2" />
          <Picker.Item label="Option 3" value="Option 3" />
        </Picker>
      </Example>
      <LinkContainer
        pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/PickerExamplePage.tsx"
        feedbackUrl="https://github.com/microsoft/react-native-gallery/issues/new"
        documentation={[
          {
            label: 'Picker',
            url: 'https://github.com/react-native-picker/picker',
          },
        ]}
      />
    </Page>
  );
};
