package com.research.demo.DataManagement;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document (collection = "interestForms")
public class mentorInterestForm {
    
    @Id
    private String name;
    private String year;
    private String major;
    private String currentResearchField;
    private String descriptionOfCurrentResearch;


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
    public String getCurrentResearchField() {
        return currentResearchField;
    }
    public String getDescriptionOfCurrentResearch() {
        return descriptionOfCurrentResearch;
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
   
    public void setCurrentResearchField(String currentResearchField) {
        this.currentResearchField = currentResearchField;
    }
    
    public void setDescriptionOfCurrentResearch(String descriptionOfCurrentResearch) {
        this.descriptionOfCurrentResearch = descriptionOfCurrentResearch;
    }

    
    }



