package by.training.nc.sd3.backend.Service;

import by.training.nc.sd3.backend.Entities.Lesson;
import by.training.nc.sd3.backend.Entities.Student;
import by.training.nc.sd3.backend.Entities.Teacher;
import org.springframework.stereotype.Service;
import java.util.Optional;
@Service
public interface AccountService {

    Student saveStudent(Student account);
    Optional<Student> getStudentById(int id);
    Iterable<Student> getAllStudents();
    void deleteStudent(int id);
    Iterable<Teacher> getAllTeachers();
    Optional<Teacher> getTeacherbyId(int id);
    Teacher saveTeacher(Teacher account);
    void deleteTeacher(int id);
    Iterable<Lesson> getAllLessons();
    Optional<Lesson>getLessonById(int Id);
    Optional<Lesson>getLessonsByGroup(int groupId);
    Lesson saveLesson(Lesson account);
    void deleteLesson(int id);
}