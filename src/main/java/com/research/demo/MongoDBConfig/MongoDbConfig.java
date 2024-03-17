package com.research.demo.MongoDBConfig;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoDatabase;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.bson.Document;


@Configuration
public class MongoDbConfig {

    @Bean
    public MongoClient mongoClient() {
        return MongoClients.create("mongodb+srv://osupeermentorresearch:TTiRd1LRY42orLca@researchcluster.pfvocox.mongodb.net/");
    }
    @Bean
    public MongoDatabase mongoDatabase() {
        return mongoClient().getDatabase("researchDatabase");
    }
    
    @Bean
    public MongoCollection<Document> mentorFormCollection() {
        MongoDatabase database = mongoDatabase();
        return database.getCollection("mentorInterestForms");
    }
    
    @Bean
    public MongoCollection<Document> menteeFormCollection() {
        MongoDatabase database = mongoDatabase();
        return database.getCollection("menteeInterestForms");
    }
    

}
