import { useState } from "react";
import { InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react";

export function PasswordInput() {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
  
    return (
      <InputGroup size='md' className="mt-4 mb-1">
        <Input
            variant='filled'
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          placeholder='Password'
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
    )
}

