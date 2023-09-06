package com.cdac.service;

import java.util.List;

import com.cdac.pojos.Activity;


public interface ActivityService {
	
	List<Activity>findAll();

	Activity findById(int activity_id);
	
	Activity save(Activity act);

	Activity update(Activity act);

	void deleteById(int activity_id);

}
