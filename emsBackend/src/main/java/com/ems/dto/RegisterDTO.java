package com.ems.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class RegisterDTO {
	private int id;
	private String name;
	private LocalDate dob;
	private String contactNumber;
	private String adharNumber;
	private String email;
	private String password;
	private String accountNumber;
	private String role;
	private int point;
	private int priorityStatus;
	private double salary;
	public RegisterDTO(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
}
