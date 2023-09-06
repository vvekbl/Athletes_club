package com.cdac.service;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.dao.ActivityDao;
import com.cdac.pojos.Activity;


@Transactional
@Service
public class ActivityServiceImpl implements ActivityService {

	@Autowired
	private ActivityDao activityDao;

	@Override
	public List<Activity> findAll() {

		return activityDao.findAll();
	}

	@Override
	public Activity findById(int activity_id) {
		Optional<Activity> a = activityDao.findById(activity_id);
		return a.orElse(null);
	}

	@Override
	public Activity save(Activity act) {

		return activityDao.save(act);
	}

	@Override
	public Activity update(Activity act) {
		
		return activityDao.save(act);
	}

	@Override
	public void deleteById(int activity_id) {
		System.out.println("Activity Deleted");
		activityDao.deleteById(activity_id);

	}

}
