package com.example.todo.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
// 다양한 타입을 리턴하기 위해 제네릭 선언
public class ResponseDTO <T>{
    private String error;
    private List<T> data;
}
