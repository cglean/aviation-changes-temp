package com.aviation.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import com.aviation.entity.Login;
import com.aviation.repository.LoginRepository;

@Configuration
@Component
public class BootMySQLDB implements CommandLineRunner{

	@Autowired
	private LoginRepository loginRepository; 
	
	@Override
	public void run(String... arg0) throws Exception {
		loginRepository.deleteAll();
		Login login = new Login();
		login.setUserName("amit");
		login.setPassword("amit");
		loginRepository.save(login);
    }
	
}
