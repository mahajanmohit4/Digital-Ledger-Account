package com.project.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.project.model.Comment;
import com.project.model.Post;
import com.project.repository.PostRepository;

@RestController
public class DemoController {

	@Autowired
	private PostRepository postRepository;
	

	public void run(String args) throws Exception {
		
		Post post = new Post("one to many mapping using JPA and hibernate", "one to many mapping using JPA and hibernate");
		
		Comment comment1 = new Comment("Very useful");
		Comment comment2 = new Comment("informative");
		Comment comment3 = new Comment("Great post");
		
		post.getComments().add(comment1);
		post.getComments().add(comment2);
		post.getComments().add(comment3);
		
		this.postRepository.save(post);
	}
}
