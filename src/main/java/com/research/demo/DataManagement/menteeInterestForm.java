package com.research.demo.DataManagement;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document (collection = "interestForms")
public class menteeInterestForm {
    
    @Id
    private String name;
    private String year;
    private String major;
    private String desiredResearchField;



    //Getters
    public String getName() {
        return name;
    }

    public String getYear() {
        return year;
    }
  
    public String getMajor() {
        return major;
    }
    public String getDesiredtResearchField() {
        return desiredResearchField;
    }
   
    // Setters 
    public void setName(String name) {
        this.name = name;
    }

    public void setYear(String year) {
        this.year = year;
    }
    public void setMajor(String major) {
        this.major = major;
    }
   
    public void setDesiredResearchField(String desiredResearchField) {
        this.desiredResearchField = desiredResearchField;
    }
    
  
    }
