import { Card } from '@mantine/core';
import '@mantine/core/styles.css'
import InputText from './input';
import Button1 from './button';
import { HiArchiveBoxXMark } from 'react-icons/hi2';
import CheckBox from './checkBox';
import { Text } from '@mantine/core';

function Cards() {
  return (
    <div style={{display: "flex",  justifyContent: "center", alignItems: "center",marginTop:80}}>
             <div style={{display: "flex", gap: "10px", flexDirection:'row'}}> 
      <div>
      <Card shadow="md" radius="md" withBorder style={{width: "400px",height:'200px',backgroundColor:'black',marginTop:200}}>
      <Card.Section>
    <div style={{display: "flex", gap: "10px", justifyContent: "center", alignItems: "center",marginTop:80}}>
    <InputText/>
<Button1/>
    </div>
      </Card.Section>
    </Card>
      </div>
      <div>
      <Card shadow="md" radius="md" withBorder 
      style={{ width: "400px", height: '200px', backgroundColor: 'black', marginTop: 200, overflow: 'auto' }}
      >
  <Card.Section>
    <div style={{display: "flex", gap: "10px",marginTop:20,justifyContent: "center", alignItems: "center"}}>
      <CheckBox/>
    <Text color='white' >hello</Text>
<HiArchiveBoxXMark color='red'/>
    </div>
  </Card.Section>
</Card>
      </div>
    </div>
    </div>
  );
}
export default Cards;