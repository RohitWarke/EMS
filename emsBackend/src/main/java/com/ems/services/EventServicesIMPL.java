package com.ems.services;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ems.dao.CatererDao;
import com.ems.dao.EventDao;
import com.ems.dao.MenuDao;
import com.ems.dao.UserDao;
import com.ems.dao.VenueDao;
import com.ems.dto.EventDTO;
import com.ems.pojos.Caters;
import com.ems.pojos.Event;
import com.ems.pojos.Menu;
import com.ems.pojos.User;
import com.ems.pojos.Venue;
import java.util.*;

@Service
@Transactional
public class EventServicesIMPL implements IEventServices {
	
	@Autowired
	MenuDao menuDao;
	@Autowired
	EventDao eventDao;
	@Autowired
	UserDao userDao;
	@Autowired
	VenueDao venueDao;
	@Autowired
	CatererDao catererDao;

	@Override
	public EventDTO registerEvent(EventDTO event, String email) {
//		Venue v = venueDao.getById(1);
//		Caters c = catererDao.getById(1);
		Event e = new Event(event.getName(), event.getType(), event.getDate(), event.getGuestCount(),event.isPhotography(), event.isVideography(),
				event.isAlbum(),event.isDrone(), event.isCrane(),event.getBookedVenue(),event.getMenus());
		User u = userDao.findByEmail(email).orElseThrow();
		Menu menu=menuDao.findById(event.getMenus().get(0).getId()).orElseThrow();
		System.out.println(menu);
		//List<Event> list= new ArrayList();
		//list.add(e);
		//userDao.addEvent(list, u.getId());
		System.out.println(u.toString());
		u.getRegevents().add(e);
		e.getUsers().add(u);
		e.getMenus().add(menu);
		menu.getEvents().add(e);
		menuDao.save(menu);
		eventDao.save(e);
		userDao.save(u);
		
		//Event persistanceEvent = eventDao.save(e);
		//BeanUtils.copyProperties(persistanceEvent, event);
		return event;
	}

//	@Override
//	public ResponseEntity<?>RegisterEvent(EventDTO event) {
//		Event e=new Event(event.getEventName(),EventType.valueOf(event.getEventType()),event.getDate(),
//				event.getStartTime(),event.getEndTime(),event.getGuestCount());
//		Event persistanceEvent=eventDao.save(e);
//		return ResponseEntity<?>(HttpStatus.ok);
//	}

}
