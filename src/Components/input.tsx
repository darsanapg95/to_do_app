import { TextInput } from '@mantine/core';
import '@mantine/core/styles.css'

function InputText() {
  return (
    <TextInput
      placeholder="Enter your task"
      style={{ width: 300 }}
      name=''
    />
  );
}
export default InputText;