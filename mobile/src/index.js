import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, StatusBar, FlatList, TouchableOpacity } from 'react-native';

import api from './services/api';

export default function App() {

  const [projects, setProjects] = useState([]);;

  useEffect(() => {
    api.get('/projects').then(response => {
      //console.log(response.data);
      setProjects(response.data);
    })
  }, []);

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: 'Fernando'
    });

    setProjects([...projects, response.data]);
  }

  async function handleRemoveProject(id) {
    await api.delete(`projects/${id}`);
    //console.log(id);
    const projectsFilter = projects.filter(project => (project.id != id));
    setProjects(projectsFilter);
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#000000"
      />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            <View style={styles.list}>
              <Text style={styles.project}>
                {project.title}
              </Text>
              <TouchableOpacity
                style={styles.buttonRemove}
                activeOpacity={0.8}
                onPress={() => handleRemoveProject(project.id)}
              >
                <Text style={styles.buttonTextRemove}>X</Text>
              </TouchableOpacity>
            </View>
          )}
        >
        </FlatList>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={handleAddProject}
        >
          <Text style={styles.buttonText}>Adicionar projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    //flexDirection: "row",
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  list: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
  },
  project: {
    color: '#ffffff',
    fontSize: 25,
  },
  button: {
    backgroundColor: "#ffff",
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonRemove: {
    backgroundColor: "#ff0000",
    padding: 2,
    width: 20,
    height: 20,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  buttonTextRemove: {
    fontSize: 14,
    color: "#ffff"
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  }
});