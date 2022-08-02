import React, { useContext } from 'react';
import { Flex, Text } from 'components/ui';
import Context from 'containers/context/context';
import { Label, Input, Checked } from './styled';

function SizePicker() {
  const { size, setSize } = useContext(Context);
  return (
    <Flex direction='column' align='flex-start'>
      <Text weight={500}>Размер</Text>

    </Flex>
  )
}

export default SizePicker