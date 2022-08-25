import React, {useState} from "react";
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Task from "./components/Task";

export default function App() {

  const  [task, setTask] = useState()
  const [taskItems, setTaskItems]=useState([])

  const handleAddTask = () =>{
    Keyboard.dismiss()
     setTaskItems([...taskItems, task])
     setTask(null)
  }

   const deleteTask =(index) =>{
    let deleteItems = [...taskItems];
    deleteItems.splice(index, 1)
    setTaskItems(deleteItems)
   }
  return (
    <View style={styles.Container}>
      <View style={styles.Wrapper}>
        <Text style={styles.Title}> Today's Task</Text>
      </View>
      <View style={styles.Items}>
      {taskItems.map((item, index)=>{
       return <TouchableOpacity key={index} onPress={()=>deleteTask(index)}>
        <Task text={item}/>
       </TouchableOpacity>
       
      })}
     
      </View>

      {/*  Write a task */}
      <KeyboardAvoidingView
        behavior= {Platform.OS === "ios" ? "padding" : "height"}
        style={styles.WriteTask}
      >
        <TextInput  style={styles.Input} placeholder={"Let's Write"} value={task} onChangeText={task=>{setTask(task)}}/>
        <TouchableOpacity onPress={()=>handleAddTask()}>
          <View style={styles.AddWrapper}>
            <Text style={styles.AddText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },

  Wrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  Title: {
    fontSize: 34,
    fontWeight: "bold",
  },

  Items: {
    marginTop: 30,
  },

  WriteTask: {
  position:'absolute',
  bottom: 60,
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around'
  },
 
Input:{
  paddingVertical:15,
  paddingHorizontal:15,
  backgroundColor: '#FFF',
  width:250,
  borderRadius:60,
  borderColor: '#C0C0C0',
  borderWidth: 1,
},
AddWrapper:{
  width:60,
  height:60,
  backgroundColor: "#FFF",
  borderRadius: 60,
  alignItems: 'center',
  justifyContent: "center",
  borderColor: '#C0C0C0',
  borderWidth: 1,

},
AddText:{},
});
