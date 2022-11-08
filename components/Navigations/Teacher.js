import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import ClassOption_screen from '../../screens/StudentsScreens/ClassOption_screen';
import CourseOption_screen from '../../screens/StudentsScreens/CourseOption_screen';
import MyTabs from '../BottomNav';
import TeacherHome_screen from '../../screens/TeachersScreens/TeacherHome/TeacherHome_screen';
import TeacherCourse_screen from '../../screens/TeachersScreens/TeacherCourse/TeacherCourse_screen';
import TeacherProfile_screen from '../../screens/TeachersScreens/TeacherProfile/TeacherProfile_screen';
import MyRequest_screen from '../../screens/StudentsScreens/MyRequest_screen';
import Addcourse from '../../screens/TeachersScreens/TeacherCourse/Courses/AddEditCourse/AddCourse';
import EditCourse from '../../screens/TeachersScreens/TeacherCourse/Courses/AddEditCourse/EditCourse';
import ViewCourse from '../../screens/TeachersScreens/TeacherCourse/Courses/ViewCourse/ViewCourse';
import AddLesson from '../../screens/TeachersScreens/TeacherCourse/Lessons/AddEditLesson/AddLesson';
import EditLesson from '../../screens/TeachersScreens/TeacherCourse/Lessons/AddEditLesson/EditLesson';
import SaveChanges from '../../screens/TeachersScreens/TeacherCourse/Lessons/AddEditLesson/Savechanges';

const Teacher = () => {
  const Stack = createStackNavigator();
  return (
    <>
       <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="TeacherHome"
      > 
        <Stack.Screen name="ClassOption" component={ClassOption_screen} />
        <Stack.Screen name="CourseOption" component={CourseOption_screen} />
        <Stack.Screen name="BottomNavigator" component={MyTabs} />
        
        <Stack.Screen name="TeacherHome" component={TeacherHome_screen} />
        <Stack.Screen name="TeacherCourse" component={TeacherCourse_screen} />
        <Stack.Screen name="TeacherProfile" component={TeacherProfile_screen} />

        <Stack.Screen name="MyRequest" component={MyRequest_screen} />

        <Stack.Screen name="TeacherAddCourse" component={Addcourse} />
        <Stack.Screen name="TeacherEditCourse" component={EditCourse} />
        <Stack.Screen name="TeacherViewCourse" component={ViewCourse} />
        <Stack.Screen name="TeacherAddLesson" component={AddLesson} />
        <Stack.Screen name="TeacherEditLesson" component={EditLesson} />
        <Stack.Screen name="TeacherSaveChanges" component={SaveChanges} />
      </Stack.Navigator>
    </>
  );
};

export default Teacher;
