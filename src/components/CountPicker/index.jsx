import React, { useContext } from 'react';
import { Flex, Text } from 'components/ui';
import Context from 'containers/context/context';
import { Button, Input } from './styled';

function CountPicker() {
    const { count, setCount } = useContext(Context);
    return (
        <Flex justify='flex-start' margin='20px 0 30px'>
            <Text weight={500} margin='0 30px 0'>Количество</Text>

            <Flex>
                <Button>-</Button>
                <Input />
                <Button>+</Button>
            </Flex>
        </Flex>
    )
}

export default CountPicker