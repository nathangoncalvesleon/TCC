import { View, Text } from 'react-native'
import React from 'react'
import { Badge, Box, Button, Center, FlatList, Flex, HStack, Pressable, ScrollView, Spacer } from 'native-base'

export default function Calendar() {
  const [bottomSelected, setBottomSelected] = React.useState(0)

  const [list, setList] = React.useState([{
    titulo: "Code",
    descricao: "User interface (UI) design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style. Designers aim to create interfaces which users find easy to use and pleasurable. UI design refers to graphical user interfaces and other forms e.g., voice-controlled interfaces.",
    data: "Fev, 22 - Mar, 23",
    prioridade: "Alta",
    status: "Em andamento"
  }, {
    titulo: "Meeting with team at 9",
    descricao: "User interface (UI) design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style. Designers aim to create interfaces which users find easy to use and pleasurable. UI design refers to graphical user",
    data: "Fev, 22 - Mar, 23",
    prioridade: "Alta",
    status: "Em andamento"
  }, {
    titulo: "Check Emails",
    descricao: "User interface (UI) design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style. Designers aim to create interfaces which users find .",
    data: "Fev, 22 - Mar, 23",
    prioridade: "Alta",
    status: "Em andamento"
  },
  {
    titulo: "Check Emails",
    descricao: "User interface (UI) design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style. Designers aim to create interfaces which users find .",
    data: "Fev, 22 - Mar, 23",
    prioridade: "Alta",
    status: "Em andamento"
  }
  ]);

  function ListOfCards({ titulo, descricao, data, prioridade, status }) {
    return <Box alignItems="center" className='mb-2'>
      <Pressable >
        {({
          isHovered,
          isPressed
        }) => {
          return <Box bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} style={{
            transform: [{
              scale: isPressed ? 0.96 : 1
            }]
          }} p="5" rounded="8" shadow={3} borderWidth="1" borderColor="coolGray.300">
            <HStack alignItems="center" className='pb-2'>
              <Text className='text-blue-700 font-bold text-[16px]'>{titulo}</Text>
              <Spacer />
              <Text fontSize={10} className="text-blue-700">
                {data}
              </Text>
            </HStack>
            <Box className='absolute bg-blue-700 w-[3px] h-[60px] my-[5%] flex-1 self-auto' />
            <Text mt="2" fontSize="sm" color="coolGray.700">
              {descricao}
            </Text>

          </Box>;
        }}
      </Pressable>
    </Box>;
  }

  return (
    <View className="pt-[10%] px-[4%] flex w-screen bg-white h-screen" >
      <Box w="100%" flexDir={'row'} className='items-center justify-between'>
        <Text className='font-bold text-2xl'>Setembro, 2023</Text>
        <Button className='bg-blue-700'>+ Adicionar nova Tarefa</Button>
      </Box>

      <View className='mt-[10%]'>
        <FlatList
          data={[{ id: 1, diaNome: 'Seg', diaData: '12' }, { id: 2, diaNome: 'Ter', diaData: '3' }, { id: 3, diaNome: 'Ter', diaData: '3' }, { id: 4, diaNome: 'Ter', diaData: '3' }, { id: 5, diaNome: 'Ter', diaData: '3' }]}
          horizontal
          renderItem={({ item }) =>
            <Box className='mx-4 items-center flex-col bg-blue-700 rounded-lg p-2 w-[64px] h-[64px]'>
              <Text className='text-white'>{item.diaNome}</Text>
              <Text className='text-white font-bold text-[16px]'>{item.diaData}</Text>
            </Box>
          }
        />
      </View>

      <Center className='mt-[10%] flex-row justify-around items-center'>
        <Button className='bg-white' onPress={() => setBottomSelected(0)}>
          <Text className={`text-[16px] font-bold ${bottomSelected == 0 ? 'text-blue-700 border-b-2 border-b-blue-700' : null}`}>Tarefas com prioridade</Text>
        </Button>
        <Button className='bg-white' onPress={() => setBottomSelected(1)}>
          <Text className={`text-[16px] font-bold ${bottomSelected == 1 ? 'text-blue-700 border-b-2 border-b-blue-700' : null}`}>Tarefas Diárias</Text>
        </Button>
      </Center>

      <ScrollView className='mt-[10%]' showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} >
        {list.map((item, index) => {
          return <ListOfCards key={index} titulo={item.titulo} descricao={item.descricao} data={item.data} prioridade={item.prioridade} status={item.status} />
        })}
      </ScrollView>



    </View>
  )
}