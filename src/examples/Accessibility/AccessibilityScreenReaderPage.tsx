'use strict';
import {Text} from 'react-native';
import React from 'react';
import {Example} from '../..//components/Example';
import {Page} from '../..//components/Page';
import {useTheme} from '@react-navigation/native';

export const AccessibilityScreenReaderExamplePage: React.FunctionComponent<{}> =
  () => {
    const {colors} = useTheme;

    return (
      <Page
        title="Screen Reader Support"
        description="Screen readers convert text into spoken words to help blind and low vision users."
        documentation={[
            {
            label: 'Accessibility',
            url: '"https://learn.microsoft.com/windows/apps/design/accessibility/accessibility"',
            }
        ]}
      >
        <Example title='Accessible Names'>
            <Text>Insert text here</Text>
        </Example>
      </Page>
    )
}