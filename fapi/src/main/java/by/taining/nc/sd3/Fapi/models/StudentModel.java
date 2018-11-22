package by.taining.nc.sd3.Fapi.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class StudentModel {

    private int id;
    private int groupId;
    private String name;
    private String surname;
    private String password;

    public StudentModel() {
    }

    public StudentModel(int id, int groupId, String name, String surname, String password) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.groupId = groupId;
        this.password = password;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public int getGroupId() {
        return groupId;
    }

    public void setGroupId (int groupId) {
        this.groupId = groupId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}