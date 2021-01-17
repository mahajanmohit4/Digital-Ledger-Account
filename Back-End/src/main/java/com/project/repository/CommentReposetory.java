package com.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.model.Comment;

@Repository
public interface CommentReposetory extends JpaRepository<Comment, Long> {

}
