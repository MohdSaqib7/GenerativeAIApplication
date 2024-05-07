package com.springai.chatBot;

import org.springframework.ai.ollama.OllamaChatClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;

@RestController
@RequestMapping("/ai")
public class AIChatController {

    private final OllamaChatClient chatClient;

    @Autowired
    public AIChatController(OllamaChatClient chatClient) {
        this.chatClient = chatClient;
    }

    @GetMapping("/check")
    public String check(){
        return "backend server running.....";
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/generateStream")
    public String generateStream(@RequestParam(value = "message", defaultValue = "Tell me a joke") String message) {
        String prompt = message+"  tell me in one line";
        String response = chatClient.call(prompt);
        System.out.println("ChatBot Running--->"+response);
        return response;
    }
}
