package com.ems.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Positive;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Entity
@Table(name = "menu")
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Menu extends BaseEntity {
	@Enumerated(value = EnumType.STRING)
	private CategoryType category;
	@Enumerated(value = EnumType.STRING)
	@Column(name = "sub_category")
	private SubCategoryType subCategory;
	@NotEmpty(message = "not be Empty")
	@Column(name = "menu_name ", length = 20)
	private String MenuName;
	@Positive
	private double price;
//	@ManyToMany(cascade = { CascadeType.ALL },fetch = FetchType.EAGER)
//	@JoinTable(name = "event_menus", joinColumns = { @JoinColumn(name = "menu_id") }, 
//	inverseJoinColumns = {@JoinColumn(name = "event_id") })
//	List<Event> events = new ArrayList<>();
}
