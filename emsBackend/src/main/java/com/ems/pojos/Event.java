package com.ems.pojos;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "event")
public class Event extends BaseEntity{
	
	@Column(length = 20)
	private String name;
	
	@Enumerated(value = EnumType.STRING)
	private EventType type;
	private LocalDate date;
//	@Column(name="start_time")
//	private LocalDateTime startTime;
//	@Column(name="end_time")
//	private LocalDateTime endTime;
	
	@Column(name="guest_count")
	private int guestCount;
	private double totalCost;
	@Column(length = 20)
	private String status;
	@Column(length = 20)
	private String progress;
	
	@ManyToOne
	@JoinColumn(name = "venue_id",nullable = false)
	private Venue bookedVenue;

	@ManyToOne
	@JoinColumn(name = "cater_id",nullable = false)
//	@JoinColumn(name = "cater_id")
	private Caters bookedCater;
	
	@ManyToMany(mappedBy = "regevents")
    private List<User> users = new ArrayList<>();

	@ManyToMany(mappedBy = "events")
	private List<Menu> menus = new ArrayList<>();

	public Event(String name, EventType type, LocalDate date, int guestCount, Venue bookedVenue, Caters bookedCater) {
		super();
		this.name = name;
		this.type = type;
		this.date = date;
		this.guestCount = guestCount;
		this.bookedVenue = bookedVenue;
		this.bookedCater = bookedCater;
	}


}
