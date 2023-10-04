import { View, Text } from 'react-native'
import React from 'react'
import { Box, Center, Checkbox, FlatList, HStack, Heading, Icon, IconButton, Input, Progress, ScrollView, SectionList, VStack, useToast } from 'native-base'
import { Entypo, Feather, Octicons } from '@expo/vector-icons';
export default function Home() {
  const instState = [{
    title: "Code",
    isCompleted: true
  }, {
    title: "Meeting with team at 9",
    isCompleted: true
  }, {
    title: "Check Emails",
    isCompleted: false
  }, {
    title: "Write an article",
    isCompleted: false
  },
  {
    title: "Write an article",
    isCompleted: false
  },
  {
    title: "Write an article",
    isCompleted: false
  },
  {
    title: "Write an article",
    isCompleted: false
  },
  {
    title: "Write an article",
    isCompleted: false
  },
  {
    title: "Write an article",
    isCompleted: false
  },
  {
    title: "Write an article",
    isCompleted: false
  },
];

  const DailyTasks = ({ instState }) => {
    const [list, setList] = React.useState(instState);
    const [inputValue, setInputValue] = React.useState("");
    const toast = useToast();

    const addItem = title => {
      if (title === "") {
        toast.show({
          title: "Please Enter Text",
          status: "warning"
        });
        return;
      }

      setList(prevList => {
        return [...prevList, {
          title: title,
          isCompleted: false
        }];
      });
    };

    const handleDelete = index => {
      setList(prevList => {
        const temp = prevList.filter((_, itemI) => itemI !== index);
        return temp;
      });
    };

    const handleStatusChange = index => {
      setList(prevList => {
        const newList = [...prevList];
        newList[index].isCompleted = !newList[index].isCompleted;
        return newList;
      });
    };

    return <Center w="100%">
      <Box w="100%">
        <View mb="2" size="md" flexDir={'row'} className='items-center flex justify-between flex-row my-2'>
          <Text className='font-bold text-[16px]'>Tarefas Diárias</Text>
          {/* <IconButton borderRadius="sm" variant="solid" icon={<Icon as={Feather} name="plus" size="sm" color="warmGray.50" />} onPress={() => {
            addItem(inputValue);
            setInputValue("");
          }} /> */}
        </View>
        <VStack space={4}>
          {/* <HStack space={2}>
            <Input flex={1} onChangeText={v => setInputValue(v)} value={inputValue} placeholder="Add Task" />

          </HStack> */}
          <VStack space={2}>
            {list.map((item, itemI) => <HStack w="100%" justifyContent="space-between" alignItems="center" key={item.title + itemI.toString()}>
              <Checkbox isChecked={item.isCompleted} onChange={() => handleStatusChange(itemI)} value={item.title} className={`rounded-[20px] text-[16px]`}></Checkbox>
              <Text width="100%" flexShrink={1} textAlign="left" mx="2" className={`${item.isCompleted ? "text-blue-700 font-bold ": null} ml-2 text-[18px]`} strikeThrough={item.isCompleted} _light={{
                color: item.isCompleted ? "text-blue-700 font-bold" : "coolGray.800",
                textDecorationLine: item.isCompleted ? "line-through" : "none"
                
              }} _dark={{
                color: item.isCompleted ? "gray.400" : "coolGray.50"
              }} onPress={() => handleStatusChange(itemI)}>
                {item.title}
              </Text>
              <IconButton size="sm" colorScheme="trueGray" icon={<Icon as={Entypo} name="minus" size="xs" color="trueGray.400" />} onPress={() => handleDelete(itemI)} />
            </HStack>)}
          </VStack>
        </VStack>
      </Box>
    </Center>;
  };
  
  return (
    <View className="pt-[12%] px-[4%] flex w-screen bg-white h-screen" >
      <Box flexDir={'row'} className="items-center justify-between">
        <Text className='flex'>4 de setembro, 2023</Text>
        <Octicons name="bell" color="blue" size={18} />
      </Box>

      <View className='mt-[10%]'>
        <Text className='font-bold text-[20px]'>Bem vindo {'Nathan'}</Text>
        <Text className='font-normal text-[16px]'>Você tem {instState.length} tarefas para hoje</Text>
      </View>

      <View className='mt-[10%]'>
        <Text className='font-bold text-[20px]'>Tarefas prioritárias</Text>
        <FlatList
          data={[{ id: 1, title: 'Tarefa 1', background: 'bg-red-900' }, { id: 2, title: 'Tarefa 2', background: 'bg-blue-900' }, { id: 3, title: 'Tarefa 1', background: 'bg-yellow-900' },]}
          renderItem={({ item }) =>
            <Box className={`h-[188px] w-[129px] ${item.background} mx-4 rounded-md flex flex-1`}>
              <View className='flex  w-full items-end p-2'>
                <Text className='flex text-black bg-white  w-[68px] rounded-md px-2 text-center'>10 dias</Text>
              </View>

              <View className='flex w-full items-center justify-center my-[35%]'>
                <Text className='flex text-white text-[20px]'>{item.title}</Text>
              </View>

              <View className='flex w-full items-center justify-center'>
                <Text className='flex text-white text-[12px] text-left items-start justify-start w-full px-4'>Progresso</Text>
                <Progress className='flex w-[100px] h-[10px] bg-black' value={30}
                  _filledTrack={{
                    bg: "white"
                  }} />
              </View>
            </Box>
          }
          horizontal
        />
      </View>

      <ScrollView className='mt-[10%]' showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <DailyTasks instState={instState} />
      </ScrollView>

    </View>
  )
}